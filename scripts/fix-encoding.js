const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "..", "src", "data");

for (const file of fs.readdirSync(dir)) {
  if (!file.endsWith(".ts") || file === "faq-page.ts") continue;
  const p = path.join(dir, file);
  const buf = fs.readFileSync(p);
  const out = [];
  let changed = false;

  for (let i = 0; i < buf.length; i++) {
    const b = buf[i];
    // Only replace standalone Windows-1252 bytes, NOT UTF-8 continuation bytes
    if (b === 0x96) {
      out.push(...Buffer.from("-", "utf8"));
      changed = true;
      continue;
    }
    if (b === 0x97) {
      out.push(...Buffer.from(" - ", "utf8"));
      changed = true;
      continue;
    }
    if (b === 0x91 || b === 0x92) {
      out.push(...Buffer.from("'", "utf8"));
      changed = true;
      continue;
    }
    // Skip 0x93/0x94 replacement - they break UTF-8 em-dash (E2 80 94)
    out.push(b);
  }

  if (changed) {
    fs.writeFileSync(p, Buffer.from(out));
    console.log("fixed", file);
  }
}
