const fs = require("fs");
const path = require("path");

const p = path.join(__dirname, "..", "src", "data", "faq-page.ts");
let buf = fs.readFileSync(p);

// Fix corrupted em-dash: E2 80 22 -> ASCII hyphen
const badDash = Buffer.from([0xe2, 0x80, 0x22]);
const goodDash = Buffer.from("-", "utf8");
let out = [];
let i = 0;
while (i < buf.length) {
  if (i + 3 <= buf.length && buf[i] === 0xe2 && buf[i + 1] === 0x80 && buf[i + 2] === 0x22) {
    out.push(...goodDash);
    i += 3;
    continue;
  }
  // Corrupted arrow E2 86 27 -> "->"
  if (i + 3 <= buf.length && buf[i] === 0xe2 && buf[i + 1] === 0x86 && buf[i + 2] === 0x27) {
    out.push(...Buffer.from("->", "utf8"));
    i += 3;
    continue;
  }
  out.push(buf[i]);
  i++;
}

buf = Buffer.from(out);

// Rupee symbol UTF-8 E2 82 B9 is valid; keep as-is
fs.writeFileSync(p, buf);
console.log("faq-page.ts fixed");
