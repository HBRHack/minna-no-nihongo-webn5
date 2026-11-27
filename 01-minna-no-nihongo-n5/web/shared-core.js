/* Shared Core Utilities — Minna no Nihongo I (Desktop + Mobile)
 * Satu sumber kebenaran untuk fungsi murni (formatting, Speech/TTS cleanup,
 * validasi & variasi Kotoba, angka/tanggal, serta acak opsi kuis).
 */
(function (root) {
  "use strict";

  const ASSET_VERSION = "20261127-v30";
  const FURIGANA_PAIR_RE = /([0-9０-９,]*[\u4e00-\u9faf々ヶ]+)\[([\u3040-\u309f\u30a0-\u30ffー]+)\]/g;

  function detectDeviceProfile() {
    const nav = typeof navigator !== "undefined" ? navigator : {};
    const win = typeof window !== "undefined" ? window : {};
    const ua = nav.userAgent || "";
    const isCoarse = !!(win.matchMedia && win.matchMedia("(pointer: coarse)").matches);
    const minScreen = win.screen ? Math.min(win.screen.width || 9999, win.screen.height || 9999) : 9999;
    const isStandalone = !!(
      (win.matchMedia && win.matchMedia("(display-mode: standalone)").matches) ||
      nav.standalone === true
    );
    const isPhoneUa = !!(
      (nav.userAgentData && nav.userAgentData.mobile) ||
      /iPhone|iPod|Windows Phone|Android.*Mobile|Mobile/i.test(ua)
    );
    const isHardPhone = isPhoneUa || (isCoarse && minScreen <= 640);
    const isIpadDesktopUa = /Macintosh/i.test(ua) && (nav.maxTouchPoints || 0) > 1;
    const isTablet = !isHardPhone && (/iPad|Tablet|Android/i.test(ua) || isIpadDesktopUa);
    const isIos = /iPhone|iPad|iPod/i.test(ua) || isIpadDesktopUa;
    return { isHardPhone, isTablet, isMobileOrTablet: isHardPhone || isTablet, isStandalone, isIos };
  }

  function esc(str) {
    return String(str === undefined || str === null ? "" : str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function stripFuriganaMarkup(str) {
    return String(str || "").replace(FURIGANA_PAIR_RE, "$1");
  }

  function norm(str) {
    return String(str || "")
      .trim()
      .toLowerCase()
      .replace(/\s+/g, " ")
      .replace(/[。．.!！?？]/g, "");
  }

  function hasJapaneseText(str) {
    return /[\u3040-\u309f\u30a0-\u30ff\u4e00-\u9faf]/.test(String(str || ""));
  }

  function cleanJpSpeech(raw) {
    return String(raw || "")
      .replace(/([0-9０-９,]*[\u4e00-\u9faf々ヶ]+)\[([\u3040-\u309f\u30a0-\u30ffー]+)\]/g, "$2")
      .replace(/(?:^|\n)\s*[ABＡＢ]\s*[:：]\s*/g, "\n")
      .replace(/\r?\n+/g, "、")
      .replace(/（[　\s]*）/g, "")
      .replace(/\([^\)]*\)/g, "")
      .replace(/（[^）]*）/g, "")
      .replace(/［[^］]*］/g, "")
      .replace(/[「」]/g, "")
      .replace(/↔/g, "、")
      .replace(/\//g, "、")
      .replace(/・/g, "、")
      .replace(/\s+/g, " ")
      .replace(/^[\s、]+|[\s、]+$/g, "")
      .trim();
  }

  function extractSpeakablePrompt(prompt) {
    const raw = String(prompt || "");
    const quoted = [...raw.matchAll(/「([^」]+)」/g)]
      .map((m) => cleanJpSpeech(m[1]))
      .filter((s) => hasJapaneseText(s) && s.length >= 2 && s !== "〜" && s !== "～");
    if (quoted.length > 0) return quoted.join("、");
    if (hasJapaneseText(raw) && !/[a-zA-Z]{4,}/.test(raw)) {
      return cleanJpSpeech(raw);
    }
    return "";
  }

  function formatJpHtml(str) {
    return esc(String(str || ""))
      .replace(FURIGANA_PAIR_RE, "<ruby>$1<rt>$2</rt></ruby>")
      .replace(/\r?\n/g, "<br>");
  }

  function formatPromptHtml(str) {
    const raw = String(str || "");
    const lines = raw.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
    const speakerLines = lines.filter((l) => /^[ABＡＢ]\s*[:：]\s*/.test(l));
    if (lines.length > 1 && speakerLines.length >= 2) {
      const inner = lines.map((line) => {
        const m = /^([ABＡＢ])\s*[:：]\s*(.*)$/.exec(line);
        if (!m) return `<div class="conv-note">${formatJpHtml(line)}</div>`;
        const spk = m[1] === "Ａ" ? "A" : m[1] === "Ｂ" ? "B" : m[1];
        return `<div class="conv-turn"><span class="conv-speaker">${esc(spk)}</span><span class="conv-text">${formatJpHtml(m[2])}</span></div>`;
      }).join("");
      return `<div class="conv-block">${inner}</div>`;
    }
    return formatJpHtml(raw);
  }

  function formatRomajiHtml(str) {
    const raw = String(str || "");
    const lines = raw.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
    if (lines.length > 1) {
      return lines.map((l) => `<span class="conv-romaji-line">${esc(l)}</span>`).join("");
    }
    return esc(raw);
  }

  function shuffleCopy(arr) {
    const copy = Array.isArray(arr) ? [...arr] : [];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function shuffleQuestionOptions(q, babNum) {
    const cloned = { ...q, bab: Number(q.bab) || babNum };
    if (cloned.type === "mcq" && Array.isArray(cloned.options) && cloned.options.length > 1) {
      const tagged = cloned.options.map((opt, idx) => ({
        opt: opt && typeof opt === "object" ? { ...opt } : { jp: String(opt || ""), romaji: "" },
        isCorrect: idx === cloned.answer
      }));
      const mixed = shuffleCopy(tagged);
      cloned.options = mixed.map((item) => item.opt);
      cloned.answer = mixed.findIndex((item) => item.isCorrect);
    }
    return cloned;
  }

  function isKotobaEd2(w) {
    return !Array.isArray(w && w.ed) || w.ed.includes(2);
  }

  function isKotobaEd2New(w) {
    return Array.isArray(w && w.ed) && w.ed.includes(2) && !w.ed.includes(1);
  }

  function isKotobaArchiveEd1(w) {
    return Array.isArray(w && w.ed) && w.ed.includes(1) && !w.ed.includes(2);
  }

  function orderKotobaEd2First(list) {
    const arr = Array.isArray(list) ? list : [];
    return [...arr.filter(isKotobaEd2), ...arr.filter(isKotobaArchiveEd1)];
  }

  function kotobaEditionBadgeHtml(w, baseCls = "kotoba-ed-pill") {
    if (isKotobaArchiveEd1(w)) return `<span class="${esc(baseCls)} is-ed1">Arsip Ed. 1</span>`;
    if (isKotobaEd2New(w)) return `<span class="${esc(baseCls)} is-ed2">Ed. 2</span>`;
    return "";
  }

  function clampKotobaQuizCount(val) {
    const n = Math.floor(Number(val) || 20);
    return Math.max(1, Math.min(50, n));
  }

  function sanitizeKotobaBatchSize(val) {
    const s = String(val || "5");
    return ["5", "10", "15", "all"].includes(s) ? s : "5";
  }

  function sanitizeKotobaBatchByScope(raw) {
    if (!raw || typeof raw !== "object") return {};
    const out = {};
    Object.entries(raw).forEach(([k, v]) => {
      if (["5", "10", "15", "all"].includes(String(v))) out[String(k)] = String(v);
    });
    return out;
  }

  function stripKotobaMeta(str) {
    return String(str || "")
      .replace(/\[[^\]]*\]/g, "")
      .replace(/［[^］]*］/g, "")
      .replace(/\([^\)]*\)/g, "")
      .replace(/（[^）]*）/g, "")
      .replace(/[～~－\-「」"]/g, "")
      .replace(/[。．.!！?？]/g, "")
      .trim();
  }

  function getAcceptedKotobaForms(card) {
    const forms = new Set();
    const pushCleaned = (s) => {
      const c = norm(String(s || "").replace(/[～~－\-「」"]/g, ""));
      if (c) {
        forms.add(c);
        forms.add(c.replace(/\s+/g, ""));
      }
    };
    const addVariants = (raw) => {
      if (!raw) return;
      const parts = String(raw).split(/[／/]/);
      parts.concat([String(raw)]).forEach((p) => {
        pushCleaned(stripKotobaMeta(p));
        const unwrapped = p
          .replace(/\([^\)]*\)/g, "")
          .replace(/（[^）]*）/g, "")
          .replace(/[\[\]［］]/g, "");
        pushCleaned(unwrapped);
        for (const m of p.matchAll(/[（(]([^）)]+)[）)]/g)) {
          pushCleaned(stripKotobaMeta(m[1]));
        }
      });
    };
    addVariants(card.kana);
    addVariants(card.romaji);
    if (card.kanji) addVariants(card.kanji);
    return [...forms].filter(Boolean);
  }

  function numberToJapanese(n) {
    const num = Math.max(0, Math.min(99999, Math.floor(Number(n) || 0)));
    if (num === 0) return { jp: "ゼロ（れい）", romaji: "zero (rei)", note: "Nol" };
    const ones = ["", "いち", "に", "さん", "よん", "ご", "ろく", "なな", "はち", "きゅう"];
    const onesR = ["", "ichi", "ni", "san", "yon", "go", "roku", "nana", "hachi", "kyuu"];
    const hundreds = ["", "ひゃく", "にひゃく", "さんびゃく", "よんひゃく", "ごひゃく", "ろっぴゃく", "ななひゃく", "はっぴゃく", "きゅうひゃく"];
    const hundredsR = ["", "hyaku", "nihyaku", "sanbyaku", "yonhyaku", "gohyaku", "roppyaku", "nanahyaku", "happyaku", "kyuuhyaku"];
    const thousands = ["", "せん", "にせん", "さんぜん", "よんせん", "ごせん", "ろくせん", "ななせん", "はっせん", "きゅうせん"];
    const thousandsR = ["", "sen", "nisen", "sanzen", "yonsen", "gosen", "rokusen", "nanasen", "hassen", "kyuusen"];

    const man = Math.floor(num / 10000);
    const sen = Math.floor((num % 10000) / 1000);
    const hyaku = Math.floor((num % 1000) / 100);
    const juu = Math.floor((num % 100) / 10);
    const ichi = num % 10;

    const jpParts = [];
    const rParts = [];
    const notes = [];

    if (man > 0) {
      jpParts.push(ones[man] + "まん");
      rParts.push(onesR[man] + "man");
      if (man === 1) notes.push("10.000 wajib pakai いち (いちまん)");
    }
    if (sen > 0) {
      jpParts.push(thousands[sen]);
      rParts.push(thousandsR[sen]);
      if (sen === 3) notes.push("3.000 = さんぜん (pengecualian!)");
      if (sen === 8) notes.push("8.000 = はっせん (pengecualian!)");
    }
    if (hyaku > 0) {
      jpParts.push(hundreds[hyaku]);
      rParts.push(hundredsR[hyaku]);
      if (hyaku === 3) notes.push("300 = さんびゃく (pengecualian!)");
      if (hyaku === 6) notes.push("600 = ろっぴゃく (pengecualian!)");
      if (hyaku === 8) notes.push("800 = はっぴゃく (pengecualian!)");
    }
    if (juu > 0) {
      jpParts.push((juu === 1 ? "" : ones[juu]) + "じゅう");
      rParts.push((juu === 1 ? "" : onesR[juu]) + "juu");
    }
    if (ichi > 0) {
      jpParts.push(ones[ichi]);
      rParts.push(onesR[ichi]);
    }
    return {
      jp: jpParts.join(" "),
      romaji: rParts.join(" "),
      note: notes.length ? notes.join(" · ") : "Aturan normal (tanpa perubahan bunyi khusus)."
    };
  }

  const DATE_READINGS = {
    1:  ["ついたち", "tsuitachi", true],
    2:  ["ふつか", "futsuka", true],
    3:  ["みっか", "mikka", true],
    4:  ["よっか", "yokka", true],
    5:  ["いつか", "itsuka", true],
    6:  ["むいか", "muika", true],
    7:  ["なのか", "nanoka", true],
    8:  ["ようか", "youka", true],
    9:  ["ここのか", "kokonoka", true],
    10: ["とおか", "tooka", true],
    11: ["じゅういちにち", "juuichinichi", false],
    12: ["じゅうににち", "juuninichi", false],
    13: ["じゅうさんにち", "juusannichi", false],
    14: ["じゅうよっか", "juuyokka", true],
    15: ["じゅうごにち", "juugonichi", false],
    16: ["じゅうろくにち", "juurokunichi", false],
    17: ["じゅうしちにち", "juushichinichi", false],
    18: ["じゅうはちにち", "juuhachinichi", false],
    19: ["じゅうくにち", "juukunichi", true],
    20: ["はつか", "hatsuka", true],
    21: ["にじゅういちにち", "nijuuichinichi", false],
    22: ["にじゅうににち", "nijuuninichi", false],
    23: ["にじゅうさんにち", "nijuusannichi", false],
    24: ["にじゅうよっか", "nijuuyokka", true],
    25: ["にじゅうごにち", "nijuugonichi", false],
    26: ["にじゅうろくにち", "nijuurokunichi", false],
    27: ["にじゅうしちにち", "nijuushichinichi", false],
    28: ["にじゅうはちにち", "nijuuhachinichi", false],
    29: ["にじゅうくにち", "nijuukunichi", true],
    30: ["さんじゅうにち", "sanjuunichi", false],
    31: ["さんじゅういちにち", "sanjuuichinichi", false]
  };

  root.MNN_SHARED = {
    ASSET_VERSION,
    FURIGANA_PAIR_RE,
    detectDeviceProfile,
    esc,
    stripFuriganaMarkup,
    norm,
    hasJapaneseText,
    cleanJpSpeech,
    extractSpeakablePrompt,
    formatJpHtml,
    formatPromptHtml,
    formatRomajiHtml,
    shuffleCopy,
    shuffleQuestionOptions,
    isKotobaEd2,
    isKotobaEd2New,
    isKotobaArchiveEd1,
    orderKotobaEd2First,
    kotobaEditionBadgeHtml,
    clampKotobaQuizCount,
    sanitizeKotobaBatchSize,
    sanitizeKotobaBatchByScope,
    stripKotobaMeta,
    getAcceptedKotobaForms,
    numberToJapanese,
    DATE_READINGS
  };
})(typeof window !== "undefined" ? window : globalThis);
