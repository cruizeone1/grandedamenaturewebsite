const fs = require("fs");
const path = require("path");

const root = process.cwd();
const outDir = path.join(root, "out");

fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });

const files = [
  "index.html",
  "shop.html",
  "our-story.html",
  "ritual.html",
  "ingredients.html",
  "contact.html",
  "styles.css",
  "script.js",
  "README.md",
  "asset-manifest.json",
];

for (const file of files) {
  fs.copyFileSync(path.join(root, file), path.join(outDir, file));
}

copyDir(path.join(root, "assets"), path.join(outDir, "assets"));

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });

  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

console.log("Static site copied to out/");
