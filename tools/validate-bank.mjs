import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const dataDir = join(root, "web", "data", "bank");
const requireAll = process.argv.includes("--all");
const babArg = process.argv.find((a) => a.startsWith("--bab="));
const onlyBabs = babArg
  ? babArg
      .slice("--bab=".length)
      .split(",")
      .map((n) => Number(n.trim()))
      .filter((n) => Number.isInteger(n) && n >= 1 && n <= 25)
  : null;

const JP_RE = /[\u3040-\u309f\u30a0-\u30ff\u4e00-\u9faf]/;
const norm = (s) => String(s || "").replace(/\s+/g, " ").trim();

const problems = [];
const warnings = [];
const globalPromptAnswer = new Map();
const globalPrompts = new Map();
let totalQuestions = 0;
let filesChecked = 0;

for (let bab = 1; bab <= 25; bab++) {
  if (onlyBabs && !onlyBabs.includes(bab)) continue;

  const num = String(bab).padStart(2, "0");
  const file = `bab-${num}.json`;
  const jsonPath = join(dataDir, file);

  if (!existsSync(jsonPath)) {
    if (requireAll || onlyBabs) problems.push(`${file}: file belum ada`);
    else warnings.push(`${file}: belum ada (dilewati)`);
    continue;
  }

  let data;
  try {
    data = JSON.parse(readFileSync(jsonPath, "utf8"));
  } catch (err) {
    problems.push(`${file}: JSON tidak valid — ${err.message}`);
    continue;
  }

  filesChecked++;
  if (!Array.isArray(data)) {
    problems.push(`${file}: root harus array`);
    continue;
  }
  if (data.length !== 50) {
    problems.push(`${file}: jumlah soal ${data.length}, harus tepat 50`);
  }

  const prompts = new Map();

  data.forEach((q, i) => {
    const where = `${file} soal #${i + 1}`;
    totalQuestions++;

    if (!q || typeof q !== "object") {
      problems.push(`${where}: bukan objek`);
      return;
    }

    const expectedId = `b${bab}-${String(i + 1).padStart(2, "0")}`;
    if (q.id !== expectedId) problems.push(`${where}: id "${q.id}" harus "${expectedId}"`);
    if (q.bab !== bab) problems.push(`${where}: bab ${q.bab} harus ${bab}`);
    if (q.type !== "mcq") problems.push(`${where}: type harus "mcq"`);

    for (const field of ["prompt", "promptRomaji", "sub", "explain", "badge"]) {
      if (typeof q[field] !== "string" || !q[field].trim()) {
        problems.push(`${where}: field ${field} kosong/tidak valid`);
      }
    }

    if (!Array.isArray(q.options) || q.options.length !== 4) {
      problems.push(`${where}: options harus 4`);
    } else {
      const seen = new Set();
      q.options.forEach((opt, oi) => {
        if (!opt || typeof opt !== "object") {
          problems.push(`${where}: opsi ${oi + 1} bukan objek`);
          return;
        }
        if (typeof opt.jp !== "string" || !opt.jp.trim()) {
          problems.push(`${where}: opsi ${oi + 1} jp kosong`);
        }
        if (typeof opt.romaji !== "string") {
          problems.push(`${where}: opsi ${oi + 1} romaji harus string`);
        }
        const key = norm(opt.jp);
        if (seen.has(key)) problems.push(`${where}: opsi jp duplikat "${opt.jp}"`);
        seen.add(key);
      });
    }

    if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer > 3) {
      problems.push(`${where}: answer harus indeks 0-3`);
    }

    const hasJp =
      JP_RE.test(String(q.prompt || "")) ||
      (Array.isArray(q.options) && q.options.some((o) => o && JP_RE.test(String(o.jp || ""))));
    if (!hasJp) problems.push(`${where}: tidak ada teks Jepang di prompt/opsi`);

    if (typeof q.prompt === "string") {
      const p = norm(q.prompt);
      if (prompts.has(p)) {
        problems.push(`${where}: prompt duplikat dengan soal #${prompts.get(p)}`);
      } else {
        prompts.set(p, i + 1);
      }

      if (globalPrompts.has(p)) {
        warnings.push(`${where}: prompt juga dipakai di ${globalPrompts.get(p)}`);
      } else {
        globalPrompts.set(p, `${file} #${i + 1}`);
      }

      const answerText = Array.isArray(q.options) && q.options[q.answer] ? norm(q.options[q.answer].jp) : "";
      const pairKey = `${p}||${answerText}`;
      if (globalPromptAnswer.has(pairKey)) {
        problems.push(`${where}: pasangan prompt+jawaban duplikat dengan ${globalPromptAnswer.get(pairKey)}`);
      } else {
        globalPromptAnswer.set(pairKey, `${file} #${i + 1}`);
      }
    }
  });
}

console.log(`Diperiksa: ${filesChecked} file, ${totalQuestions} soal.`);

if (warnings.length) {
  console.log("\nCatatan:");
  warnings.forEach((w) => console.log(`  - ${w}`));
}

if (problems.length) {
  console.error(`\nGAGAL: ${problems.length} masalah:`);
  problems.slice(0, 80).forEach((p) => console.error(`  - ${p}`));
  if (problems.length > 80) console.error(`  ... dan ${problems.length - 80} masalah lain.`);
  process.exitCode = 1;
} else {
  console.log("\nOK: semua file yang diperiksa valid.");
}
