#!/usr/bin/env node
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const failures = [];

function fail(message) {
  failures.push(message);
}

function assert(condition, message) {
  if (!condition) fail(message);
}

function readJson(file) {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8"));
  } catch (error) {
    fail(`Invalid JSON: ${path.relative(root, file)}: ${error.message}`);
    return {};
  }
}

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if ([".git", "node_modules"].includes(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    if (entry.isFile()) out.push(full);
  }
  return out;
}

function parseFrontmatter(file) {
  const text = fs.readFileSync(file, "utf8");
  const match = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!match) {
    fail(`Missing frontmatter: ${path.relative(root, file)}`);
    return {};
  }
  const data = {};
  for (const line of match[1].split(/\r?\n/)) {
    const index = line.indexOf(":");
    if (index === -1) continue;
    data[line.slice(0, index).trim()] = line.slice(index + 1).trim();
  }
  return data;
}

function runNode(script, args, cwd = root) {
  return execFileSync(process.execPath, [script, ...args], {
    cwd,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"]
  });
}

const manifest = readJson(path.join(root, ".codex-plugin", "plugin.json"));
assert(manifest.name === "mako-loop", "Manifest name must be mako-loop.");
assert(manifest.version === "0.1.0", "Manifest version must be 0.1.0 for the initial public repo.");
assert(manifest.interface?.displayName === "MakoLoop", "Manifest displayName must be MakoLoop.");
assert(Array.isArray(manifest.interface?.defaultPrompt), "defaultPrompt must be an array.");
assert(manifest.interface.defaultPrompt.length <= 3, "defaultPrompt must contain three or fewer prompts.");

const expectedSkills = new Set([
  "mako-loop",
  "coherence-harness",
  "implementation-grade-research",
  "app-research-recreate",
  "boss-subagent-orchestration",
  "killer-website",
  "killer-app",
  "killer-game",
  "launch-readiness"
]);

const skillFiles = walk(path.join(root, "skills")).filter((file) => path.basename(file) === "SKILL.md");
const foundSkills = new Set();
for (const file of skillFiles) {
  const frontmatter = parseFrontmatter(file);
  assert(frontmatter.name, `Skill missing name: ${path.relative(root, file)}`);
  assert(frontmatter.description, `Skill missing description: ${path.relative(root, file)}`);
  if (frontmatter.description) {
    assert(frontmatter.description.length <= 1024, `Skill description too long: ${path.relative(root, file)}`);
  }
  foundSkills.add(frontmatter.name);
}

for (const skill of expectedSkills) {
  assert(foundSkills.has(skill), `Missing expected skill: ${skill}`);
}
for (const skill of foundSkills) {
  assert(expectedSkills.has(skill), `Unexpected skill: ${skill}`);
}

const publicTextExtensions = new Set([".md", ".json", ".mjs", ".yml", ".yaml", ".gitignore"]);
const forbiddenPatterns = [
  new RegExp(["", "Users", "chris"].join("/")),
  new RegExp(["senior", "product", "loop"].join("-")),
  new RegExp(`\\.${["senior", "loop"].join("-")}`),
  new RegExp("Mako" + "Flow"),
  new RegExp("mako" + "flow"),
  new RegExp("jorvek" + "\\.tail"),
  new RegExp("tail" + "757ace"),
  new RegExp("root" + "@jorvek"),
  new RegExp("chris" + "@jorvek\\.com")
];

for (const file of walk(root)) {
  if (!publicTextExtensions.has(path.extname(file)) && path.basename(file) !== ".gitignore") continue;
  const text = fs.readFileSync(file, "utf8");
  for (const pattern of forbiddenPatterns) {
    assert(!pattern.test(text), `Forbidden public string ${pattern} in ${path.relative(root, file)}`);
  }
}

const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), "mako-loop-validate-"));
try {
  runNode(path.join(root, "scripts", "init_coherence_harness.mjs"), [tempRoot, "Validate MakoLoop"]);
  assert(fs.existsSync(path.join(tempRoot, ".mako-loop", "state.md")), "Coherence harness did not create state.md.");

  runNode(path.join(root, "scripts", "checkpoint_coherence.mjs"), [tempRoot, "--label", "validate"]);
  const checkpoints = fs.readdirSync(path.join(tempRoot, ".mako-loop", "checkpoints"));
  assert(checkpoints.length > 0, "Checkpoint script did not create a checkpoint.");

  runNode(path.join(root, "scripts", "create_subagent_prompt_pack.mjs"), [tempRoot, "Validate subagents", "--force"]);
  const securityTemplate = fs.readFileSync(path.join(tempRoot, ".mako-loop", "subagents", "security-template.md"), "utf8");
  assert(securityTemplate.includes("SQL/ORM query safety"), "Security template missing SQL/ORM query safety.");
  assert(securityTemplate.includes("row-level security"), "Security template missing row-level security.");

  const researchDir = path.join(tempRoot, "research", "example-app");
  runNode(path.join(root, "scripts", "create_app_research_pack.mjs"), ["Example App", researchDir]);
  assert(fs.existsSync(path.join(researchDir, "05-implementation-blueprint.md")), "Research pack missing implementation blueprint.");

  const auditOutput = runNode(path.join(root, "scripts", "product_surface_audit.mjs"), [root]);
  const audit = JSON.parse(auditOutput);
  assert(Number.isInteger(audit.routeCount), "Product surface audit did not return routeCount.");
  assert(Array.isArray(audit.findings), "Product surface audit did not return findings.");
} catch (error) {
  fail(`Script smoke test failed: ${error.message}`);
} finally {
  fs.rmSync(tempRoot, { recursive: true, force: true });
}

if (failures.length > 0) {
  console.error("Validation failed:");
  for (const message of failures) {
    console.error(`- ${message}`);
  }
  process.exit(1);
}

console.log("MakoLoop validation passed.");
