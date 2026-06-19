#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const args = process.argv.slice(2);
const repoArg = args[0];

if (!repoArg) {
  console.error('Usage: checkpoint_coherence.mjs <repo-root> [--label "<short-label>"]');
  process.exit(1);
}

let label = "checkpoint";
for (let index = 1; index < args.length; index += 1) {
  if (args[index] === "--label" && args[index + 1]) {
    label = args[index + 1];
    index += 1;
  }
}

const repoRoot = path.resolve(repoArg);
const harnessDir = path.join(repoRoot, ".mako-loop");
const checkpointsDir = path.join(harnessDir, "checkpoints");
const pluginDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const auditScript = path.join(pluginDir, "scripts", "product_surface_audit.mjs");
const timestamp = new Date().toISOString();
const safeLabel = label
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-+|-+$/g, "")
  .slice(0, 60) || "checkpoint";
const fileStamp = timestamp.replace(/[:.]/g, "-");
const checkpointFile = path.join(checkpointsDir, `${fileStamp}-${safeLabel}.md`);

function run(command, argsForCommand) {
  try {
    return execFileSync(command, argsForCommand, {
      cwd: repoRoot,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"]
    }).trim();
  } catch (error) {
    const stderr = error?.stderr?.toString?.().trim();
    const stdout = error?.stdout?.toString?.().trim();
    return [stdout, stderr].filter(Boolean).join("\n").trim() || `Command failed: ${command}`;
  }
}

function readHarness(name) {
  const file = path.join(harnessDir, name);
  if (!fs.existsSync(file)) return "_missing_";
  return fs.readFileSync(file, "utf8").trim();
}

function routeAuditSummary() {
  if (!fs.existsSync(auditScript)) return "Audit script missing.";
  try {
    const output = execFileSync("node", [auditScript, repoRoot], {
      cwd: repoRoot,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"]
    });
    const parsed = JSON.parse(output);
    const findings = parsed.findings
      .slice(0, 12)
      .map((finding) => `- ${finding.file}:${finding.line} ${finding.text}`)
      .join("\n");
    return [
      `Route files: ${parsed.routeCount}`,
      `Drift findings: ${parsed.findingCount}`,
      findings ? "\nTop findings:\n" + findings : ""
    ].join("\n");
  } catch (error) {
    return `Audit failed: ${error.message}`;
  }
}

if (!fs.existsSync(harnessDir)) {
  console.error(`Missing ${harnessDir}. Run init_coherence_harness.mjs first.`);
  process.exit(2);
}

fs.mkdirSync(checkpointsDir, { recursive: true });

const status = run("git", ["status", "--short"]);
const branch = run("git", ["branch", "--show-current"]);
const diffStat = run("git", ["diff", "--stat"]);
const stagedDiffStat = run("git", ["diff", "--cached", "--stat"]);
const lastCommit = run("git", ["log", "-1", "--oneline"]);

const content = `# MakoLoop Checkpoint

Generated: ${timestamp}

Label: ${label}

## Git

- Branch: ${branch || "_unknown_"}
- Last commit: ${lastCommit || "_none_"}

### Status

\`\`\`text
${status || "clean"}
\`\`\`

### Diff Stat

\`\`\`text
${diffStat || "no unstaged diff"}
\`\`\`

### Staged Diff Stat

\`\`\`text
${stagedDiffStat || "no staged diff"}
\`\`\`

## Surface Drift Summary

\`\`\`text
${routeAuditSummary()}
\`\`\`

## State

${readHarness("state.md")}

## Decisions

${readHarness("decisions.md")}

## Evidence

${readHarness("evidence.md")}

## Review

${readHarness("review.md")}

## Next

${readHarness("next.md")}
`;

fs.writeFileSync(checkpointFile, content);

console.log(
  JSON.stringify(
    {
      ok: true,
      checkpoint: checkpointFile,
      repoRoot,
      statusLines: status ? status.split(/\r?\n/).length : 0,
      label
    },
    null,
    2
  )
);
