#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(process.argv[2] || process.cwd());
const maxFileBytes = 400_000;
const routeNames = new Set(["page.tsx", "page.jsx", "page.ts", "page.js", "route.ts", "route.js"]);
const placeholderPatterns = [
  /\bcoming soon\b/i,
  /\bplaceholder\b/i,
  /\btodo\b/i,
  /\blorem ipsum\b/i,
  /\bmock data\b/i,
  /\bdummy\b/i,
  /\bnot implemented\b/i,
  /\bdebug\b/i,
  /\bdiagnostic/i,
  /\btest only\b/i
];

const ignoreDirs = new Set([
  ".git",
  ".next",
  "node_modules",
  "coverage",
  "dist",
  "build",
  ".turbo",
  "test-results"
]);

function walk(dir, out = []) {
  let entries = [];
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return out;
  }
  for (const entry of entries) {
    if (ignoreDirs.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, out);
    } else if (entry.isFile()) {
      out.push(full);
    }
  }
  return out;
}

function routeFromFile(file) {
  const parts = file.split(path.sep);
  const appIndex = parts.lastIndexOf("app");
  const pagesIndex = parts.lastIndexOf("pages");
  const index = appIndex >= 0 ? appIndex : pagesIndex;
  if (index < 0) return null;
  const routeParts = parts.slice(index + 1, -1).filter((part) => !part.startsWith("("));
  if (routeParts.length === 0) return "/";
  return `/${routeParts.join("/")}`.replace(/\/index$/, "/");
}

function readSmallText(file) {
  const stat = fs.statSync(file);
  if (stat.size > maxFileBytes) return "";
  const ext = path.extname(file);
  if (![".ts", ".tsx", ".js", ".jsx", ".md", ".css"].includes(ext)) return "";
  return fs.readFileSync(file, "utf8");
}

const files = walk(root);
const routes = [];
const findings = [];

for (const file of files) {
  const base = path.basename(file);
  if (routeNames.has(base)) {
    routes.push({
      route: routeFromFile(file),
      file: path.relative(root, file)
    });
  }

  let text = "";
  try {
    text = readSmallText(file);
  } catch {
    continue;
  }
  if (!text) continue;

  const lines = text.split(/\r?\n/);
  lines.forEach((line, index) => {
    for (const pattern of placeholderPatterns) {
      if (pattern.test(line)) {
        findings.push({
          file: path.relative(root, file),
          line: index + 1,
          match: pattern.source,
          text: line.trim().slice(0, 180)
        });
        break;
      }
    }
  });
}

const navHints = files
  .filter((file) => /nav|sidebar|shell|layout/i.test(path.basename(file)))
  .map((file) => path.relative(root, file))
  .slice(0, 80);

const result = {
  root,
  routeCount: routes.length,
  routes: routes.sort((a, b) => String(a.route).localeCompare(String(b.route))),
  findingCount: findings.length,
  findings: findings.slice(0, 200),
  navHints
};

console.log(JSON.stringify(result, null, 2));
