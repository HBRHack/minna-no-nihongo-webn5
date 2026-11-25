import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const dataDir = join(root, "web", "data", "bank");

let built = 0;

for (let bab = 1; bab <= 25; bab++) {
  const num = String(bab).padStart(2, "0");
  const jsonPath = join(dataDir, `bab-${num}.json`);
  if (!existsSync(jsonPath)) {
    console.log(`skip  bab-${num}.json (belum ada)`);
    continue;
  }

  const data = JSON.parse(readFileSync(jsonPath, "utf8"));
  if (!Array.isArray(data)) {
    throw new Error(`bab-${num}.json harus berupa array soal`);
  }

  const jsPath = join(dataDir, `bab-${num}.js`);
  const out =
    `/* AUTO-GENERATED dari bab-${num}.json — jangan edit manual. */\n` +
    `window.MNN_BANK = window.MNN_BANK || {};\n` +
    `window.MNN_BANK[${bab}] = ${JSON.stringify(data, null, 2)};\n`;

  writeFileSync(jsPath, out, "utf8");
  console.log(`build bab-${num}.js  (${data.length} soal)`);
  built++;
}

console.log(`\nSelesai: ${built} file bank dibangun.`);
