const fs = require("fs");
const path = require("path");

const OUT_DIR = "out";
const NEXT_DIR = path.join(OUT_DIR, "_next");
const NEXT_FIXED_DIR = path.join(OUT_DIR, "next_static");

// Rename `_next/` to `next_static/` to avoid Chrome errors
if (fs.existsSync(NEXT_DIR)) {
  fs.renameSync(NEXT_DIR, NEXT_FIXED_DIR);
  console.log("✅ Renamed _next/ to next_static/");
}

// Fix reference paths inside generated HTML files
function replaceInFiles(dir, find, replace) {
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);
    if (fs.lstatSync(filePath).isDirectory()) {
      replaceInFiles(filePath, find, replace);
    } else if (file.endsWith(".html")) {
      let content = fs.readFileSync(filePath, "utf8");
      content = content.replace(new RegExp(find, "g"), replace);
      fs.writeFileSync(filePath, content, "utf8");
      console.log(`🔄 Fixed references in ${filePath}`);
    }
  });
}

// Update all references from `_next/` to `next_static/`
replaceInFiles(OUT_DIR, "/_next/", "/next_static/");
