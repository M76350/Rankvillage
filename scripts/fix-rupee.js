const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "..", "src", "data");

for (const file of fs.readdirSync(dir)) {
  if (!file.endsWith(".ts")) continue;
  const p = path.join(dir, file);
  let s = fs.readFileSync(p, "utf8");
  const next = s.replace(/\?(?=\d)/g, "Rs. ");
  if (next !== s) {
    fs.writeFileSync(p, next, "utf8");
    console.log("rupee fixed", file);
  }
}
