import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";

const root = fileURLToPath(new URL("..", import.meta.url));
const dataDir = join(root, "web", "data");

// File dasar (Bab 1–5) + pecahan per blok agar bisa dikerjakan paralel.
const KAIWA_FILES = [
  "kaiwa-01-05.js",
  "kaiwa-06-10.js",
  "kaiwa-11-15.js",
  "kaiwa-16-20.js",
  "kaiwa-21-25.js"
];

const JP_RE = /[\u3040-\u309f\u30a0-\u30ff\u4e00-\u9faf]/;
const TEMPO_KEYS = new Set(["berwibawa", "tenang", "normal", "lincah"]);
const MIN_LINES = 7;
const MIN_TIPS = 2;
const DEFAULT_MAX_BAB = 25;

const babArg = process.argv.find((a) => a.startsWith("--bab="));
const onlyBabs = babArg
  ? babArg
      .slice("--bab=".length)
      .split(",")
      .map((n) => Number(n.trim()))
      .filter((n) => Number.isInteger(n) && n >= 1 && n <= 25)
  : null;

const problems = [];
const warnings = [];
const norm = (s) => String(s || "").replace(/\s+/g, " ").trim();

const sandbox = { window: {} };
vm.createContext(sandbox);
let loaded = 0;

for (const file of KAIWA_FILES) {
  const path = join(dataDir, file);
  if (!existsSync(path)) {
    if (!onlyBabs && file !== "kaiwa-01-05.js") {
      warnings.push(`${file}: belum ada (dilewati)`);
    }
    continue;
  }
  try {
    vm.runInContext(readFileSync(path, "utf8"), sandbox, { filename: path });
    loaded++;
  } catch (err) {
    problems.push(`${file}: tidak bisa dijalankan — ${err.message}`);
  }
}

const data = sandbox.window.MNN_KAIWA;
if (!data || typeof data !== "object") {
  console.error("GAGAL: window.MNN_KAIWA tidak ditemukan.");
  process.exit(1);
}

const checkText = (where, field, value, { japanese = false } = {}) => {
  if (typeof value !== "string" || !value.trim()) {
    problems.push(`${where}: ${field} kosong/tidak valid`);
    return false;
  }
  if (japanese && !JP_RE.test(value)) {
    problems.push(`${where}: ${field} tidak mengandung teks Jepang`);
  }
  return true;
};

const checkNarrator = (where, name, obj) => {
  if (!obj || typeof obj !== "object") {
    problems.push(`${where}: ${name} harus objek`);
    return;
  }
  checkText(`${where}.${name}`, "speaker", obj.speaker);
  checkText(`${where}.${name}`, "jp", obj.jp, { japanese: true });
  checkText(`${where}.${name}`, "romaji", obj.romaji);
  checkText(`${where}.${name}`, "id", obj.id);
  if (obj.gender !== "male" && obj.gender !== "female") {
    problems.push(`${where}.${name}: gender harus "male" atau "female"`);
  }
  if (obj.tempo !== undefined && !TEMPO_KEYS.has(String(obj.tempo).toLowerCase())) {
    problems.push(`${where}.${name}: tempo "${obj.tempo}" tidak dikenal`);
  }
};

const targetBabs = onlyBabs || Array.from({ length: DEFAULT_MAX_BAB }, (_, i) => i + 1);

for (const bab of targetBabs) {
  const k = data[bab];
  if (!k) {
    problems.push(`Bab ${bab}: belum ada di MNN_KAIWA`);
    continue;
  }

  const where = `Bab ${bab}`;
  if (k.bab !== bab) problems.push(`${where}: field bab ${k.bab} harus ${bab}`);
  checkText(where, "title", k.title);
  checkText(where, "scene", k.scene);
  checkNarrator(where, "intro", k.intro);
  checkNarrator(where, "outro", k.outro);

  const roles = Array.isArray(k.roles) ? k.roles : [];
  if (roles.length < 2) problems.push(`${where}: minimal 2 roles`);
  const roleById = new Map();
  const usedRoles = new Set();
  const roleIds = new Set();

  roles.forEach((r, i) => {
    const rw = `${where} role #${i + 1}`;
    if (!r || typeof r !== "object") {
      problems.push(`${rw}: bukan objek`);
      return;
    }
    if (typeof r.id !== "string" || !r.id.trim()) problems.push(`${rw}: id kosong`);
    else if (roleIds.has(r.id)) problems.push(`${rw}: id role duplikat "${r.id}"`);
    else roleIds.add(r.id);

    checkText(rw, "name", r.name);
    checkText(rw, "label", r.label);
    checkText(rw, "avatar", r.avatar);
    if (r.gender !== "male" && r.gender !== "female") {
      problems.push(`${rw}: gender harus "male" atau "female"`);
    }
    if (r.tempo !== undefined && !TEMPO_KEYS.has(String(r.tempo).toLowerCase())) {
      problems.push(`${rw}: tempo "${r.tempo}" tidak dikenal`);
    }
    if (r.id) roleById.set(r.id, r);
  });

  const lines = Array.isArray(k.lines) ? k.lines : [];
  if (lines.length < MIN_LINES) {
    problems.push(`${where}: jumlah baris ${lines.length}, minimal ${MIN_LINES}`);
  }

  const seenJp = new Map();
  lines.forEach((line, i) => {
    const lw = `${where} baris #${i + 1}`;
    if (!line || typeof line !== "object") {
      problems.push(`${lw}: bukan objek`);
      return;
    }

    checkText(lw, "speakerId", line.speakerId);
    checkText(lw, "speaker", line.speaker);
    checkText(lw, "jp", line.jp, { japanese: true });
    if (line.tts !== undefined) {
      checkText(lw, "tts", line.tts, { japanese: true });
    }
    checkText(lw, "romaji", line.romaji);
    checkText(lw, "id", line.id);
    if (line.note !== undefined && typeof line.note !== "string") {
      problems.push(`${lw}: note harus string`);
    }

    if (line.speakerId) {
      const role = roleById.get(line.speakerId);
      if (!role) {
        problems.push(`${lw}: speakerId "${line.speakerId}" tidak ada di roles`);
      } else {
        usedRoles.add(line.speakerId);
        if (line.gender !== role.gender) {
          problems.push(`${lw}: gender "${line.gender}" beda dengan role "${role.gender}"`);
        }
        if (norm(line.speaker) !== norm(role.name)) {
          warnings.push(`${lw}: speaker "${line.speaker}" beda dengan role.name "${role.name}"`);
        }
      }
    }

    if (line.gender !== "male" && line.gender !== "female") {
      problems.push(`${lw}: gender harus "male" atau "female"`);
    }

    if (typeof line.jp === "string" && line.jp.trim()) {
      const key = norm(line.jp);
      if (seenJp.has(key)) {
        problems.push(`${lw}: teks Jepang duplikat dengan baris #${seenJp.get(key)}`);
      } else {
        seenJp.set(key, i + 1);
      }
    }
  });

  roles.forEach((r) => {
    if (r && r.id && !usedRoles.has(r.id)) {
      warnings.push(`${where}: role "${r.id}" tidak pernah muncul di lines`);
    }
  });

  if (!Array.isArray(k.tips) || k.tips.length < MIN_TIPS) {
    problems.push(`${where}: tips minimal ${MIN_TIPS} butir`);
  } else {
    k.tips.forEach((t, i) => {
      if (typeof t !== "string" || !t.trim()) {
        problems.push(`${where} tips #${i + 1}: kosong/tidak valid`);
      }
    });
  }
}

const chapters = Object.keys(data).map(Number).sort((a, b) => a - b);
const totalLines = chapters.reduce((s, n) => s + (Array.isArray(data[n].lines) ? data[n].lines.length : 0), 0);

console.log(`File kaiwa dimuat: ${loaded} · Bab tersedia: ${chapters.join(", ")} · ${totalLines} baris dialog.`);
if (onlyBabs) console.log(`Memeriksa khusus: Bab ${onlyBabs.join(", ")}.`);

if (warnings.length) {
  console.log("\nCatatan:");
  warnings.forEach((w) => console.log(`  - ${w}`));
}

if (problems.length) {
  console.error(`\nGAGAL: ${problems.length} masalah:`);
  problems.forEach((p) => console.error(`  - ${p}`));
  process.exitCode = 1;
} else {
  console.log(`\nOK: struktur kaiwa Bab ${targetBabs.join(", ")} valid.`);
}
