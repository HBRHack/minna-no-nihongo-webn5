/* Studio Lengkap Minna no Nihongo I (Bab 1 – 25) + Kana + 11 Referensi + Audio + Multi-Profil localStorage
 * - Menggabungkan Bab 17 ASLI (bab-17.js) secara utuh tanpa membuat ulang
 * - Penyimpanan lokal penuh per perangkat & per profil (Bab 1–25, Kana, Referensi, Tes Akhir, Wrong Bank, Preferensi Audio/Romaji)
 * - Mode Teman/Pemula (0% bersih) vs Mode Diagnostik Tes Lama (47/100)
 * - Audio pelafalan Jepang (Web Speech API ja-JP, 0.75x & 1.0x)
 * - 100% Tanpa Batas Waktu (No Timer)
 */
(function () {
  "use strict";

  const STORAGE_PROFILES_V3 = "mnn_profiles_v3";
  const STORAGE_PREFS_V3 = "mnn_prefs_v3";
  const STORAGE_PROGRESS = "mnn_unified_progress_v2";
  const STORAGE_THEME = "mnn_theme_mode_v1";
  const LEGACY_BAB17_KEY = "mnn_bab17_progress_v1";
  const LEGACY_EROR_KEY = "mnn_klinik_eror_progress_v1";

  const ZONE_META = {
    red:    { rank: 1, label: "Zona Merah (0/4)",   temanLabel: "Prioritas 1 · Inti",     cls: "zone-red",    callout: "" },
    orange: { rank: 2, label: "Zona Oranye (1/4)",  temanLabel: "Prioritas 2 · Konjugasi", cls: "zone-orange", callout: "is-orange" },
    amber:  { rank: 3, label: "Zona Kuning (2/4)",  temanLabel: "Prioritas 3 · Pelengkap", cls: "zone-amber",  callout: "is-amber" },
    green:  { rank: 4, label: "Zona Hijau (3–4/4)", temanLabel: "Prioritas 4 · Fondasi",   cls: "zone-green",  callout: "is-green" }
  };

  // Menggabungkan Bab 17 ASLI dari window.BAB17_DATA tanpa menulis ulang isinya!
  function mergeBab17FromOriginal(raw17) {
    return {
      num: 17,
      zone: "orange",
      oldScore: "1/4",
      title: "Bentuk -Nai (ない形), Larangan, Keharusan, & Tidak Perlu",
      shortBug: "Digabung utuh dari modul Bab 17 asli: Lab Konjugasi 14 kata kerja, Rumus Cepat Bab 17, 5 poin lengkap, & 20 soal 4-tema.",
      isMergedBab17: true,
      bugs: raw17.bugs,
      conjugationLab: raw17.conjugationLab,
      grammarPointsRaw: raw17.grammarPoints,
      vocabGroupsRaw: raw17.vocabGroups,
      questions: raw17.questions,
      cheatSheet: {
        title: "Rumus Cepat Bab 17: Cara Cepat Ubah ke Bentuk -Nai & 3 Rumus Inti",
        takeaway: "Akhiran い sebelum ます jadi わ (はらわない)! なりません = HARUS, いいです = TIDAK PERLU!",
        tables: [
          {
            heading: "1. Cara Cepat Ubah ke Bentuk -Nai (ない形)",
            headers: ["Kelompok", "Rumus", "Contoh"],
            rows: [
              ["I (Normal)", "Ubah bunyi -i → -a + ない", "のみます → のまない · だします → ださない · いきます → いかない"],
              ["I (Akhiran い)", "Ubah い → わ + ない (BUKAN あ!)", "はらいます → はらわない · かいます → かわない · すいます → すわない"],
              ["I (あります)", "Langsung jadi ない", "おかねが あります → おかねが ない"],
              ["II (-e / みます dll)", "Buang ます + ない", "わすれます → わすれない · おぼえます → おぼえない · みます → みない"],
              ["III (Irregular)", "します → しない · きます(datang) → こない", "もってきます → もってこない · ざんぎょうします → ざんぎょうしない"]
            ]
          },
          {
            heading: "2. Bedakan 3 Rumus Bab 17 (Jangan Terbalik!) & までに",
            headers: ["Rumus", "Aturan Huruf い", "Arti & Contoh"],
            rows: [
              ["V-ないで ください", "い TETAP ADA", "Tolong jangan ~ (しゃしんを とらないで ください)"],
              ["V-なければ なりません", "CORET い + ければ なりません", "HARUS ~ / wajib (くすりを のまなければ なりません)"],
              ["V-なくても いいです", "CORET い + くても いいです", "TIDAK PERLU ~ / bebas (あした こなくても いいです)"],
              ["[Waktu] までに", "Batas akhir / deadline", "きんようびまでに だします (paling lambat Jumat; beda dgn まで = durasi)"]
            ]
          }
        ]
      }
    };
  }

  const ALL_CHAPTERS = [...(window.MNN_MODULES || [])];
  if (window.BAB17_DATA) {
    ALL_CHAPTERS.push(mergeBab17FromOriginal(window.BAB17_DATA));
  }
  const EXTRA_Q = window.MNN_EXTRA_QUESTIONS || {};
  const BANK_Q = window.MNN_BANK || {};
  ALL_CHAPTERS.forEach((ch) => {
    const bank = BANK_Q[ch.num];
    if (Array.isArray(bank) && bank.length > 0) {
      ch.questions = bank;
      ch.bankSize = bank.length;
      ch.quizSampleMin = 15;
      ch.quizSampleMax = 25;
    } else if (Array.isArray(EXTRA_Q[ch.num]) && EXTRA_Q[ch.num].length > 0) {
      ch.questions = [...ch.questions, ...EXTRA_Q[ch.num]];
    }
  });

  const QUIZ_SAMPLE_MIN = 15;
  const QUIZ_SAMPLE_MAX = 25;

  function pickSampleIndices(ch, mode) {
    const total = ch.questions.length;
    const allIndices = ch.questions.map((_, i) => i);
    const seenSet = new Set(getSeenChapterIds(ch.num));
    const unseen = allIndices.filter((i) => !seenSet.has(ch.questions[i].id));
    const seen = allIndices.filter((i) => seenSet.has(ch.questions[i].id));
    const mixedUnseen = fisherYates(unseen);
    const mixedSeen = fisherYates(seen);

    if (mode === "all") {
      return fisherYates(allIndices);
    }
    if (mode === "unseen") {
      if (mixedUnseen.length > 0) return mixedUnseen.slice(0, Math.min(20, mixedUnseen.length));
      return fisherYates(allIndices).slice(0, Math.min(total, ch.quizSampleMax || QUIZ_SAMPLE_MAX));
    }

    const min = ch.quizSampleMin || QUIZ_SAMPLE_MIN;
    const max = ch.quizSampleMax || QUIZ_SAMPLE_MAX;
    if (total <= min) return fisherYates(allIndices);
    const count = Math.min(total, min + Math.floor(Math.random() * (max - min + 1)));
    return [...mixedUnseen, ...mixedSeen].slice(0, count);
  }
  const KANA_DATA = window.MNN_KANA_DATA || {
    hiraganaRows: [],
    katakanaRows: [],
    specialRules: [],
    lookalikes: [],
    questions: []
  };
  const KOTOBA_BY_BAB = window.MNN_KOTOBA || {};
  function getAllKotoba() {
    const out = [];
    for (let b = 1; b <= 25; b++) {
      if (Array.isArray(KOTOBA_BY_BAB[b])) out.push(...KOTOBA_BY_BAB[b]);
    }
    return out;
  }
  const REFERENCES = window.MNN_REFERENCES || [];
  const KAIWA_BY_BAB = window.MNN_KAIWA || {};
  const FINAL_EXAM = window.FINAL_EXAM_1_25 || [];
  const ASSET_VERSION = "20261125-v21";
  const FINAL_MAX_PER_BAB = 10;
  const FINAL_HARD_CAP = 250;
  const FINAL_BANK_CACHE = {};
  const FINAL_BANK_SOURCE = {};

  function defaultFinalSetup() {
    return {
      selectedBabs: Array.from({ length: 25 }, (_, i) => i + 1),
      quotaPerBab: 2,
      totalDesired: 50,
      quotaInput: "2",
      totalInput: "50",
      syncMode: "quota", // "quota" | "custom_total"
      timerMode: "none", // "none" | "per_q" | "total_60"
      perQSeconds: 30,
      perQSecondsInput: "30",
      correctionMode: "drill" // "drill" | "end"
    };
  }

  function sanitizeFinalSetup(raw) {
    const def = defaultFinalSetup();
    if (!raw || typeof raw !== "object") return def;
    const rawBabs = Array.isArray(raw.selectedBabs) ? raw.selectedBabs : def.selectedBabs;
    const seen = new Set();
    const selectedBabs = [];
    rawBabs.forEach((b) => {
      const n = Math.floor(Number(b));
      if (n >= 1 && n <= 25 && !seen.has(n)) {
        seen.add(n);
        selectedBabs.push(n);
      }
    });
    selectedBabs.sort((a, b) => a - b);

    const quotaNum = Math.floor(Number(raw.quotaPerBab));
    const quotaPerBab = Number.isFinite(quotaNum) ? Math.max(1, Math.min(FINAL_MAX_PER_BAB, quotaNum)) : def.quotaPerBab;
    const syncMode = raw.syncMode === "custom_total" ? "custom_total" : "quota";

    const maxAllowed = Math.min(FINAL_HARD_CAP, Math.max(1, selectedBabs.length * FINAL_MAX_PER_BAB));
    const rawTotal = Math.floor(Number(raw.totalDesired));
    let totalDesired = Number.isFinite(rawTotal) && rawTotal >= 1 ? Math.min(maxAllowed, rawTotal) : Math.min(FINAL_HARD_CAP, selectedBabs.length * quotaPerBab);
    if (selectedBabs.length === 0) totalDesired = 0;

    const timerMode = ["none", "per_q", "total_60"].includes(raw.timerMode) ? raw.timerMode : "none";
    const secNum = Math.floor(Number(raw.perQSeconds));
    const perQSeconds = Number.isFinite(secNum) ? Math.max(5, Math.min(300, secNum)) : 30;
    const correctionMode = raw.correctionMode === "end" ? "end" : "drill";

    return {
      selectedBabs,
      quotaPerBab,
      totalDesired,
      quotaInput: String(quotaPerBab),
      totalInput: String(totalDesired),
      syncMode,
      timerMode,
      perQSeconds,
      perQSecondsInput: String(perQSeconds),
      correctionMode
    };
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

  function loadPrefs() {
    const defaults = {
      showRomaji: true,
      speechRate: 1.0,
      sortMode: null,
      kotobaEmojiSize: "large",
      kotobaRomajiMode: "on",
      kotobaQuizCount: 20,
      kotobaBatchSize: "5",
      kotobaBatchByScope: {},
      kotobaAutoRequeue: true,
      kotobaAutoAudio: false,
      voiceSwapGender: false,
      voiceMaleURI: "",
      voiceFemaleURI: "",
      finalSetup: defaultFinalSetup()
    };
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_PREFS_V3) || "{}");
      return {
        showRomaji: typeof saved.showRomaji === "boolean" ? saved.showRomaji : defaults.showRomaji,
        speechRate: saved.speechRate === 0.75 ? 0.75 : 1.0,
        sortMode: saved.sortMode === "book" || saved.sortMode === "priority" ? saved.sortMode : null,
        kotobaEmojiSize: ["large", "normal", "off"].includes(saved.kotobaEmojiSize) ? saved.kotobaEmojiSize : "large",
        kotobaRomajiMode: ["on", "back", "off"].includes(saved.kotobaRomajiMode) ? saved.kotobaRomajiMode : "on",
        kotobaQuizCount: saved.kotobaQuizCount ? clampKotobaQuizCount(saved.kotobaQuizCount) : 20,
        kotobaBatchSize: sanitizeKotobaBatchSize(saved.kotobaBatchSize),
        kotobaBatchByScope: sanitizeKotobaBatchByScope(saved.kotobaBatchByScope),
        kotobaAutoRequeue: typeof saved.kotobaAutoRequeue === "boolean" ? saved.kotobaAutoRequeue : true,
        kotobaAutoAudio: typeof saved.kotobaAutoAudio === "boolean" ? saved.kotobaAutoAudio : false,
        voiceSwapGender: typeof saved.voiceSwapGender === "boolean" ? saved.voiceSwapGender : false,
        voiceMaleURI: typeof saved.voiceMaleURI === "string" ? saved.voiceMaleURI : "",
        voiceFemaleURI: typeof saved.voiceFemaleURI === "string" ? saved.voiceFemaleURI : "",
        finalSetup: sanitizeFinalSetup(saved.finalSetup)
      };
    } catch {
      return defaults;
    }
  }

  function createEmptyProfile(id, name, userMode) {
    return {
      id,
      name: String(name || "Profil Belajar").slice(0, 32),
      userMode: userMode === "perbaikan" ? "perbaikan" : "teman",
      chapters: {},
      kana: {},
      refs: {},
      kotoba: { masteredIds: [], reviewIds: [], bestStreak: 0, totalPlayed: 0, chapterScores: {}, wrongIdsByScope: {} },
      finalExam: null,
      wrongBank: {},
      seenBankIds: {}
    };
  }

  function loadLegacyChapters() {
    const merged = {};
    try {
      const oldEror = JSON.parse(localStorage.getItem(LEGACY_EROR_KEY) || "{}");
      if (oldEror && typeof oldEror === "object") Object.assign(merged, oldEror);
      const old17 = JSON.parse(localStorage.getItem(LEGACY_BAB17_KEY) || "null");
      if (old17 && typeof old17.bestPct === "number") merged[17] = old17;
      const cur = JSON.parse(localStorage.getItem(STORAGE_PROGRESS) || "{}");
      if (cur && typeof cur === "object") Object.assign(merged, cur);
    } catch {
      // Ignore corrupt legacy storage
    }
    return merged;
  }

  function ensureProfileKotoba(p) {
    if (!p.kotoba || typeof p.kotoba !== "object") {
      p.kotoba = { masteredIds: [], reviewIds: [], bestStreak: 0, totalPlayed: 0, chapterScores: {}, wrongIdsByScope: {} };
    }
    if (!Array.isArray(p.kotoba.masteredIds)) p.kotoba.masteredIds = [];
    if (!Array.isArray(p.kotoba.reviewIds)) p.kotoba.reviewIds = [];
    if (typeof p.kotoba.bestStreak !== "number") p.kotoba.bestStreak = 0;
    if (typeof p.kotoba.totalPlayed !== "number") p.kotoba.totalPlayed = 0;
    if (!p.kotoba.chapterScores || typeof p.kotoba.chapterScores !== "object") p.kotoba.chapterScores = {};
    if (!p.kotoba.wrongIdsByScope || typeof p.kotoba.wrongIdsByScope !== "object") p.kotoba.wrongIdsByScope = {};
  }

  function loadProfileStore() {
    try {
      const raw = JSON.parse(localStorage.getItem(STORAGE_PROFILES_V3) || "null");
      if (raw && raw.profiles && typeof raw.profiles === "object") {
        const ids = Object.keys(raw.profiles);
        if (ids.length > 0) {
          const activeId = raw.profiles[raw.activeId] ? raw.activeId : ids[0];
          ids.forEach((id) => {
            const p = raw.profiles[id];
            if (!p.chapters) p.chapters = {};
            if (!p.kana) p.kana = {};
            if (!p.refs) p.refs = {};
            if (!p.wrongBank) p.wrongBank = {};
            if (!p.seenBankIds || typeof p.seenBankIds !== "object") p.seenBankIds = {};
            ensureProfileKotoba(p);
            if (p.userMode !== "perbaikan" && p.userMode !== "teman") p.userMode = "teman";
          });
          return { activeId, profiles: raw.profiles };
        }
      }
    } catch {
      // Fall back to fresh/migrated store
    }

    const legacyChapters = loadLegacyChapters();
    const hasLegacy = Object.keys(legacyChapters).length > 0;
    const def = createEmptyProfile("default", hasLegacy ? "Profil Utama" : "Belajar Saya", hasLegacy ? "perbaikan" : "teman");
    def.chapters = legacyChapters;
    const initial = { activeId: "default", profiles: { default: def } };
    try {
      localStorage.setItem(STORAGE_PROFILES_V3, JSON.stringify(initial));
    } catch {
      // Ignore storage quota errors
    }
    return initial;
  }

  const initialPrefs = loadPrefs();
  const profileStore = loadProfileStore();
  const activeModeDefault = (profileStore.profiles[profileStore.activeId] && profileStore.profiles[profileStore.activeId].userMode) || "teman";

  const state = {
    theme: loadTheme(),
    showRomaji: initialPrefs.showRomaji,
    speechRate: initialPrefs.speechRate,
    sortMode: initialPrefs.sortMode || (activeModeDefault === "teman" ? "book" : "priority"),
    zoneFilter: "all",
    view: "overview", // 'overview' | 'chapter' | 'kana' | 'kotoba' | 'references' | 'final_exam'
    selectedNum: null,
    activeTab: "materi", // 'materi' | 'kuis'
    labIndex: 0,
    // Kana state
    kanaTab: "hiragana", // 'hiragana' | 'katakana' | 'aturan' | 'kembar' | 'kuis'
    selectedKana: (KANA_DATA.hiraganaRows[0] && KANA_DATA.hiraganaRows[0].cells[0]) || null,
    kanaQuizSet: "all",
    activeKanaQuizObj: null,
    // Kotoba Flashcard & Kuis Akhir Kotoba state
    kotobaScope: "1",
    kotobaMode: "flip", // 'flip' | 'quiz' | 'recall' | 'final'
    kotobaDir: "jp2id", // 'jp2id' | 'id2jp' | 'emoji'
    kotobaEmojiSize: initialPrefs.kotobaEmojiSize,
    kotobaRomajiMode: initialPrefs.kotobaRomajiMode,
    kotobaQuizCount: initialPrefs.kotobaQuizCount,
    kotobaBatchSize: initialPrefs.kotobaBatchSize,
    kotobaBatchByScope: initialPrefs.kotobaBatchByScope,
    kotobaAutoRequeue: initialPrefs.kotobaAutoRequeue,
    kotobaAutoAudio: initialPrefs.kotobaAutoAudio,
    kotobaFlippedMap: {},
    kotobaGridFilter: "all", // 'all' | 'unmastered' | 'mastered'
    kotobaGridPage: 0,
    kotobaFullPool: [],
    kotobaBatchOffset: 0,
    kotobaDeck: [],
    kotobaIdx: 0,
    kotobaFlipped: false,
    kotobaStreak: 0,
    kotobaSessionKnown: 0,
    kotobaSessionReview: 0,
    kotobaSessionWrongIds: [],
    kotobaRequeueCounts: {},
    kotobaIsWrongRetry: false,
    kotobaMcqOptions: [],
    kotobaMcqPicked: null,
    kotobaMcqCorrectIdx: 0,
    kotobaFinalKinds: [], // 'mcq' | 'emoji' | 'recall'
    kotobaRecallInput: "",
    kotobaRecallAnswered: false,
    kotobaRecallOk: false,
    kotobaSearch: "",
    // Referensi state
    selectedRefId: (REFERENCES[0] && REFERENCES[0].id) || "warna",
    refTab: "materi",
    flashcardMode: false,
    converterVal: 3800,
    selectedDate: 24,
    activeRefQuizObj: null,
    // Audio state
    hasJaVoice: null,
    voiceSwapGender: initialPrefs.voiceSwapGender,
    voiceMaleURI: initialPrefs.voiceMaleURI,
    voiceFemaleURI: initialPrefs.voiceFemaleURI,
    kaiwaPlaying: false,
    kaiwaLineIdx: -1,
    kaiwaHideId: false,
    kaiwaMuteGender: "none", // 'none' | 'male' | 'female'
    kaiwaWithIntro: true,
    kaiwaRepeatMode: false,
    kaiwaRepeatPause: false,
    kaiwaLastError: "",
    profileFeedbackMsg: "",
    confirmResetArmed: false,
    // Quiz state (NO TIMER!)
    quizIndices: [],
    currentStep: 0,
    answered: false,
    selectedOption: null,
    inputValue: "",
    isCorrectCurrent: false,
    results: {},
    wrongIds: [],
    quizModeLabel: "",
    quizIsWrongRetry: false,
    // Pengaturan & Sesi Tes Akhir Bab 1-25
    finalSetup: initialPrefs.finalSetup,
    finalPhase: "setup", // 'setup' | 'running' | 'result'
    finalSession: null,
    finalReviewFilter: "all" // 'all' | 'wrong' | 'correct'
  };

  function activeProfile() {
    const p = profileStore.profiles[profileStore.activeId];
    if (p) return p;
    const firstId = Object.keys(profileStore.profiles)[0];
    if (firstId) {
      profileStore.activeId = firstId;
      return profileStore.profiles[firstId];
    }
    const fallback = createEmptyProfile("default", "Belajar Saya", "teman");
    profileStore.profiles.default = fallback;
    profileStore.activeId = "default";
    return fallback;
  }

  const DIAG_URL_FLAG = typeof location !== "undefined" && /(?:^|[?&])diagnostik=1(?:&|$)/.test(location.search || "");
  let diagnosticUnlocked = DIAG_URL_FLAG;
  let profileTitleTapCount = 0;

  function isDiagnosticUnlocked() {
    return diagnosticUnlocked;
  }

  function isTemanMode() {
    if (!isDiagnosticUnlocked()) return true;
    return activeProfile().userMode !== "perbaikan";
  }

  function persistProfiles() {
    try {
      localStorage.setItem(STORAGE_PROFILES_V3, JSON.stringify(profileStore));
      localStorage.setItem(STORAGE_PROGRESS, JSON.stringify(activeProfile().chapters || {}));
    } catch {
      // Ignore storage error
    }
  }

  function persistPrefs() {
    try {
      localStorage.setItem(STORAGE_PREFS_V3, JSON.stringify({
        showRomaji: state.showRomaji,
        speechRate: state.speechRate,
        sortMode: state.sortMode,
        kotobaEmojiSize: state.kotobaEmojiSize,
        kotobaRomajiMode: state.kotobaRomajiMode,
        kotobaQuizCount: state.kotobaQuizCount,
        kotobaBatchSize: state.kotobaBatchSize,
        kotobaBatchByScope: state.kotobaBatchByScope,
        kotobaAutoRequeue: state.kotobaAutoRequeue,
        kotobaAutoAudio: state.kotobaAutoAudio,
        voiceSwapGender: Boolean(state.voiceSwapGender),
        voiceMaleURI: state.voiceMaleURI || "",
        voiceFemaleURI: state.voiceFemaleURI || "",
        finalSetup: sanitizeFinalSetup(state.finalSetup)
      }));
    } catch {
      // Ignore storage error
    }
  }

  function loadTheme() {
    try {
      const saved = localStorage.getItem(STORAGE_THEME);
      return saved === "light" ? "light" : "dark";
    } catch {
      return "dark";
    }
  }

  function applyTheme(mode) {
    state.theme = mode;
    document.documentElement.setAttribute("data-theme", mode);
    const isDark = mode === "dark";
    const btn = document.getElementById("btnToggleTheme");
    const icon = document.getElementById("themeIcon");
    const label = document.getElementById("themeLabel");
    if (btn) btn.setAttribute("aria-pressed", String(isDark));
    if (icon) icon.textContent = isDark ? "🌙" : "☀️";
    if (label) label.textContent = isDark ? "Gelap" : "Terang";
    try {
      localStorage.setItem(STORAGE_THEME, mode);
    } catch {
      // Ignore
    }
  }

  function applyRomajiState() {
    document.body.classList.toggle("hide-romaji", !state.showRomaji);
    const btn = document.getElementById("btnToggleRomaji");
    const lbl = document.getElementById("romajiLabel");
    if (btn) btn.setAttribute("aria-pressed", String(state.showRomaji));
    if (lbl) lbl.textContent = state.showRomaji ? "Romaji: ON" : "Romaji: OFF";
  }

  function updateTopProfileLabel() {
    const lbl = document.getElementById("topProfileLabel");
    if (lbl) lbl.textContent = activeProfile().name;
  }

  function syncMobileNav() {
    const nav = document.getElementById("mobileBottomNav");
    if (!nav) return;
    const modal = document.getElementById("profileModal");
    const modalOpen = modal && !modal.hidden;
    const activeKey = modalOpen ? "profile" : (state.view === "chapter" ? "overview" : state.view);
    nav.querySelectorAll("[data-mnav]").forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.mnav === activeKey);
    });
  }

  function isMastered(num) {
    const saved = activeProfile().chapters[num];
    return !!(saved && saved.bestPct >= 80);
  }

  // ===== JAPANESE AUDIO (WEB SPEECH API ja-JP) =====
  function hasJapaneseText(str) {
    return /[\u3040-\u309f\u30a0-\u30ff\u4e00-\u9faf]/.test(String(str || ""));
  }

  function cleanJpSpeech(raw) {
    return String(raw || "")
      .replace(/（[　\s]*）/g, "")
      .replace(/\([^\)]*\)/g, "")
      .replace(/（[^）]*）/g, "")
      .replace(/［[^］]*］/g, "")
      .replace(/[「」]/g, "")
      .replace(/↔/g, "、")
      .replace(/\//g, "、")
      .replace(/・/g, "、")
      .replace(/\s+/g, " ")
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

  function ttsBtnHtml(jpText, extraCls, gender, roleSlot, roleTempo) {
    const cleaned = cleanJpSpeech(jpText);
    if (!cleaned || !hasJapaneseText(cleaned)) return "";
    const gAttr = gender ? ` data-speak-gender="${esc(gender)}"` : "";
    const sAttr = Number.isFinite(Number(roleSlot)) && Number(roleSlot) >= 0 ? ` data-speak-slot="${Number(roleSlot)}"` : "";
    const tAttr = roleTempo !== undefined && roleTempo !== null && roleTempo !== "" ? ` data-speak-tempo="${esc(String(roleTempo))}"` : "";
    return `<button type="button" class="tts-btn ${extraCls || ""}" data-speak="${esc(cleaned)}"${gAttr}${sAttr}${tAttr} aria-label="Dengarkan audio Jepang" title="Putar pelafalan Jepang (🔊)">🔊</button>`;
  }

  const MALE_VOICE_RE = /keita|ichiro|otoya|takumi|daichi|naoki|kenji|\bmale\b|ja-jp-x-jab|ja-jp-x-jad|\bjab\b|\bjad\b/i;
  const FEMALE_VOICE_RE = /nanami|haruka|ayumi|kyoko|mizuki|kaho|mayu|o-ren|\bfemale\b|ja-jp-x-jac|ja-jp-x-htm|\bjac\b|\bhtm\b/i;
  const GOOGLE_FEMALE_DEFAULT_RE = /google\s*(?:日本語|japanese)/i;
  const CLOUD_VOICE_RE = /online|natural|google/i;
  const KAIWA_TEMPO_FACTORS = {
    berwibawa: 0.76,
    tenang: 0.80,
    normal: 1.0,
    lincah: 1.15
  };
  const FEMALE_TEMPO_FACTORS = {
    berwibawa: 0.74,
    tenang: 0.74,
    normal: 1.0,
    lincah: 1.18
  };

  function resolveTempoFactor(roleTempo, slot, singleVoiceShared, effectiveGender) {
    if (typeof roleTempo === "number" && Number.isFinite(roleTempo)) {
      return Math.min(1.35, Math.max(0.65, roleTempo));
    }
    if (typeof roleTempo === "string" && roleTempo.trim()) {
      const key = roleTempo.trim().toLowerCase();
      const map = effectiveGender === "female" ? FEMALE_TEMPO_FACTORS : KAIWA_TEMPO_FACTORS;
      if (Object.prototype.hasOwnProperty.call(map, key)) {
        return map[key];
      }
      const parsed = Number(key);
      if (Number.isFinite(parsed) && parsed > 0) {
        return Math.min(1.35, Math.max(0.65, parsed));
      }
    }
    if (singleVoiceShared && slot > 0) {
      return slot === 1 ? 0.86 : 1.10;
    }
    return 1.0;
  }

  function isCloudNeuralVoice(v) {
    if (!v) return false;
    if (v.localService === false) return true;
    const vTag = `${v.name || ""} ${v.voiceURI || ""}`;
    return CLOUD_VOICE_RE.test(vTag);
  }

  function voiceKeyOf(v) {
    return v ? (v.voiceURI || v.name || "") : "";
  }

  function detectJaVoices() {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      state.hasJaVoice = false;
      return [];
    }
    const voices = window.speechSynthesis.getVoices() || [];
    if (voices.length > 0) {
      state.hasJaVoice = voices.some((v) => /^ja\b/i.test(v.lang));
    }
    return voices;
  }

  function getJapaneseVoiceList() {
    const voices = detectJaVoices();
    const strictJp = voices.filter((v) => /^ja[-_]?jp/i.test(v.lang));
    const looseJa = voices.filter((v) => /^ja\b/i.test(v.lang));
    return strictJp.length > 0 ? strictJp : looseJa;
  }

  function applySlotPitchRate(voice, effectiveGender, slot, baseRate, tier, forcedSingleFallback, allowAutoPitchFix, roleTempo) {
    const vTag = `${(voice && voice.name) || ""} ${(voice && voice.voiceURI) || ""}`;
    const isFemaleSoundingMale = allowAutoPitchFix
      && effectiveGender === "male"
      && voice
      && !MALE_VOICE_RE.test(vTag)
      && (FEMALE_VOICE_RE.test(vTag) || GOOGLE_FEMALE_DEFAULT_RE.test(vTag));

    const hasExplicitTempo = roleTempo !== undefined && roleTempo !== null && String(roleTempo).trim() !== "";
    const tempoFactor = resolveTempoFactor(roleTempo, slot, true, effectiveGender);
    const calcRate = (fallbackFactor) => {
      const f = hasExplicitTempo ? tempoFactor : (slot > 0 ? tempoFactor : fallbackFactor);
      return Number(Math.min(1.5, Math.max(0.55, baseRate * f)).toFixed(2));
    };

    if (forcedSingleFallback || isFemaleSoundingMale) {
      if (effectiveGender === "male") {
        const pitch = slot > 0 ? 0.72 : 0.85;
        const rate = calcRate(0.95);
        return {
          voice,
          pitch,
          rate,
          tier,
          label: voice ? `${voice.name} (Pitch ${pitch} · ${rate}×)` : `Fallback Pria (Pitch ${pitch})`
        };
      }
      if (effectiveGender === "female") {
        const pitch = slot > 0 ? 1.24 : 1.12;
        const rate = calcRate(1.0);
        return {
          voice,
          pitch,
          rate,
          tier,
          label: voice ? `${voice.name} (Pitch ${pitch} · ${rate}×)` : `Fallback Wanita (Pitch ${pitch})`
        };
      }
    }

    if (slot > 0 && effectiveGender === "male") {
      const rate = calcRate(0.86);
      return {
        voice,
        pitch: 0.82,
        rate,
        tier,
        label: voice ? `${voice.name} (${rate}×)` : `Pria #${slot + 1} (${rate}×)`
      };
    }
    if (slot > 0 && effectiveGender === "female") {
      const rate = calcRate(0.86);
      return {
        voice,
        pitch: 1.16,
        rate,
        tier,
        label: voice ? `${voice.name} (${rate}×)` : `Wanita #${slot + 1} (${rate}×)`
      };
    }
    const rate = calcRate(1.0);
    return {
      voice,
      pitch: 1.0,
      rate,
      tier,
      label: (voice && voice.name) || "Default ja-JP"
    };
  }

  function resolveJapaneseVoice(gender, roleSlot, roleTempo) {
    const baseRate = state.speechRate || 1.0;
    const slot = Math.max(0, Number(roleSlot) || 0);
    const normGender = gender === "male" || gender === "female" ? gender : "neutral";
    const effectiveGender = normGender === "neutral"
      ? "neutral"
      : (state.voiceSwapGender ? (normGender === "male" ? "female" : "male") : normGender);

    const jpVoices = getJapaneseVoiceList();
    const tagOf = (v) => `${(v && v.name) || ""} ${(v && v.voiceURI) || ""}`;

    // Manual override via Pengaturan Audio
    const manualURI = effectiveGender === "male"
      ? state.voiceMaleURI
      : effectiveGender === "female"
        ? state.voiceFemaleURI
        : "";
    if (manualURI) {
      const manualVoice = jpVoices.find((v) => voiceKeyOf(v) === manualURI);
      if (manualVoice) {
        return applySlotPitchRate(manualVoice, effectiveGender, slot, baseRate, 1, false, false, roleTempo);
      }
    }

    const malePool = jpVoices.filter((v) => MALE_VOICE_RE.test(tagOf(v)));
    const femalePool = jpVoices.filter((v) => FEMALE_VOICE_RE.test(tagOf(v)));
    const googleFemale = jpVoices.find((v) => GOOGLE_FEMALE_DEFAULT_RE.test(tagOf(v))) || null;

    // Prioritas 1: Deteksi nama suara spesifik pria vs wanita
    if (effectiveGender === "male" && malePool.length > 0) {
      const chosen = malePool[slot % malePool.length];
      const needPitchSplit = malePool.length === 1 ? slot : (slot >= malePool.length ? slot : 0);
      return applySlotPitchRate(chosen, "male", needPitchSplit, baseRate, 1, false, true, roleTempo);
    }
    if (effectiveGender === "female" && femalePool.length > 0) {
      const chosen = femalePool[slot % femalePool.length];
      const needPitchSplit = femalePool.length === 1 ? slot : (slot >= femalePool.length ? slot : 0);
      return applySlotPitchRate(chosen, "female", needPitchSplit, baseRate, 1, false, true, roleTempo);
    }

    // Prioritas 2: 2+ suara ja-JP tanpa label gender lengkap -> pasangkan suara berbeda (Google 日本語 cenderung wanita)
    if (jpVoices.length >= 2 && (effectiveGender === "male" || effectiveGender === "female")) {
      let vMale = malePool[0] || null;
      let vFemale = femalePool[0] || (!vMale || googleFemale !== vMale ? googleFemale : null) || null;
      if (!vMale) {
        vMale = jpVoices.find((v) => v !== vFemale && !GOOGLE_FEMALE_DEFAULT_RE.test(tagOf(v)))
          || jpVoices.find((v) => v !== vFemale)
          || jpVoices[0];
      }
      if (!vFemale || vFemale === vMale) {
        vFemale = jpVoices.find((v) => v !== vMale) || jpVoices[1];
      }
      const chosen = effectiveGender === "male" ? vMale : vFemale;
      return applySlotPitchRate(chosen, effectiveGender, slot, baseRate, 2, false, true, roleTempo);
    }

    // Prioritas 3: Fallback tunggal via pitch & rate
    const single = jpVoices[0] || null;
    if (effectiveGender === "male" || effectiveGender === "female") {
      return applySlotPitchRate(single, effectiveGender, slot, baseRate, 3, true, true, roleTempo);
    }
    return {
      voice: single,
      pitch: 1.0,
      rate: baseRate,
      tier: single ? 1 : 3,
      label: (single && single.name) || "Default ja-JP"
    };
  }

  function describeVoiceRouterStatus() {
    const jpVoices = getJapaneseVoiceList();
    const m0 = resolveJapaneseVoice("male", 0);
    const m1 = resolveJapaneseVoice("male", 1);
    const f0 = resolveJapaneseVoice("female", 0);
    const swapTag = state.voiceSwapGender ? " [Mode Tukar Pria↔Wanita Aktif]" : "";
    if (jpVoices.length === 0) {
      return `⚠️ Suara ja-JP belum terdeteksi; Fallback Prioritas 3 aktif (Pria #1 pitch 0.85 · Pria #2 pitch 0.72 · Wanita pitch 1.12)${swapTag}.`;
    }
    const cloudNote = isCloudNeuralVoice(m0.voice) || isCloudNeuralVoice(f0.voice)
      ? " · Cloud/Edge Neural: pembeda multi-tokoh via tempo bicara"
      : "";
    const multiMale = m1.pitch !== m0.pitch || m1.rate !== m0.rate || voiceKeyOf(m1.voice) !== voiceKeyOf(m0.voice)
      ? ` · Pria #2: ${m1.label}`
      : "";
    return `✓ ${jpVoices.length} suara ja-JP${swapTag} · Pria #1: [P${m0.tier}] ${m0.label}${multiMale} · Wanita: [P${f0.tier}] ${f0.label}${cloudNote}`;
  }

  function updateKaiwaErrorBannerDom() {
    const banner = document.getElementById("kaiwaErrorBanner");
    if (!banner) return;
    if (state.kaiwaLastError) {
      banner.hidden = false;
      banner.textContent = `⚠️ ${state.kaiwaLastError}`;
    } else {
      banner.hidden = true;
      banner.textContent = "";
    }
  }

  let kaiwaTimerId = null;
  let kaiwaRunToken = 0;
  let ttsSpeakTimerId = null;
  let ttsSpeakToken = 0;
  let activeSpeakBtn = null;

  function stopKaiwaPlayback(rerender) {
    kaiwaRunToken += 1;
    ttsSpeakToken += 1;
    if (kaiwaTimerId !== null) {
      clearTimeout(kaiwaTimerId);
      kaiwaTimerId = null;
    }
    if (ttsSpeakTimerId !== null) {
      clearTimeout(ttsSpeakTimerId);
      ttsSpeakTimerId = null;
    }
    if (activeSpeakBtn) {
      activeSpeakBtn.classList.remove("is-speaking");
      activeSpeakBtn = null;
    }
    if (typeof window !== "undefined") {
      window.__mnnActiveUtter = null;
      if ("speechSynthesis" in window && window.speechSynthesis.cancel) {
        try { window.speechSynthesis.cancel(); } catch {}
      }
    }
    const wasPlaying = state.kaiwaPlaying || state.kaiwaLineIdx !== -1;
    state.kaiwaPlaying = false;
    state.kaiwaLineIdx = -1;
    state.kaiwaRepeatPause = false;
    if (rerender && wasPlaying && state.view === "chapter" && state.activeTab === "kaiwa") {
      const ch = getChapter(state.selectedNum);
      if (ch) renderChapterKaiwa(ch);
    }
  }

  function speakJapanese(rawText, triggerEl, opts) {
    const text = cleanJpSpeech(rawText);
    if (!text) return;
    const options = opts && typeof opts === "object" ? opts : {};
    if (typeof window === "undefined" || !("speechSynthesis" in window) || typeof SpeechSynthesisUtterance === "undefined") {
      if (typeof options.onEnd === "function") options.onEnd();
      else openProfileModal("Browser kamu belum mendukung Web Speech API untuk audio teks-ke-suara.");
      return;
    }
    try {
      const synth = window.speechSynthesis;
      if (ttsSpeakTimerId !== null) {
        clearTimeout(ttsSpeakTimerId);
        ttsSpeakTimerId = null;
      }
      if (activeSpeakBtn && activeSpeakBtn !== triggerEl) {
        activeSpeakBtn.classList.remove("is-speaking");
      }
      const speakToken = ++ttsSpeakToken;
      const wasActive = Boolean(synth.speaking || synth.pending);
      if (wasActive && synth.cancel) {
        try { synth.cancel(); } catch {}
      }

      const startSpeak = () => {
        if (speakToken !== ttsSpeakToken) return;
        const utter = new SpeechSynthesisUtterance(text);
        const cfg = resolveJapaneseVoice(options.gender, options.roleSlot, options.roleTempo);
        utter.lang = "ja-JP";
        utter.rate = cfg.rate;
        utter.pitch = cfg.pitch;
        if (cfg.voice) utter.voice = cfg.voice;

        // Cegah Chromium garbage-collect utterance saat audio belum selesai
        window.__mnnActiveUtter = utter;
        activeSpeakBtn = triggerEl || null;
        if (triggerEl) triggerEl.classList.add("is-speaking");

        let finished = false;
        const done = () => {
          if (finished) return;
          finished = true;
          if (window.__mnnActiveUtter === utter) window.__mnnActiveUtter = null;
          if (triggerEl) triggerEl.classList.remove("is-speaking");
          if (activeSpeakBtn === triggerEl) activeSpeakBtn = null;
          if (speakToken === ttsSpeakToken && typeof options.onEnd === "function") options.onEnd();
        };

        utter.onstart = () => {
          if (state.kaiwaLastError) {
            state.kaiwaLastError = "";
            updateKaiwaErrorBannerDom();
          }
        };
        utter.onend = done;
        utter.onerror = (ev) => {
          const errCode = ev && ev.error ? String(ev.error) : "";
          const isCancel = errCode === "canceled" || errCode === "interrupted";
          if (!isCancel && errCode) {
            const vLabel = cfg.voice ? ` (${cfg.voice.name})` : "";
            state.kaiwaLastError = `Audio browser error (${errCode})${vLabel}. Coba klik "⇄ Tukar Suara" atau ganti suara di Pengaturan Audio.`;
            updateKaiwaErrorBannerDom();
          }
          done();
        };

        if (synth.resume) {
          try { synth.resume(); } catch {}
        }
        synth.speak(utter);
      };

      if (wasActive) {
        ttsSpeakTimerId = setTimeout(() => {
          ttsSpeakTimerId = null;
          startSpeak();
        }, 50);
      } else {
        startSpeak();
      }
    } catch (err) {
      state.kaiwaLastError = `Gagal memulai audio browser (${err && err.message ? err.message : "unknown"}).`;
      updateKaiwaErrorBannerDom();
      if (triggerEl) triggerEl.classList.remove("is-speaking");
      if (typeof options.onEnd === "function") options.onEnd();
    }
  }

  // ===== QUIZ SCORE & WRONG BANK PERSISTENCE =====
  function quizScopeKey(ch) {
    if (!ch) return "unknown";
    if (ch.isKanaQuiz) return `kana_${ch.kanaSet || "all"}`;
    if (ch.isRefQuiz) return `ref_${ch.refId || "mix"}`;
    if (ch.isFinalExam) return "final_exam";
    return `ch_${ch.num}`;
  }

  function recordAnswerToWrongBank(ch, qId, ok) {
    const prof = activeProfile();
    const key = quizScopeKey(ch);
    const list = Array.isArray(prof.wrongBank[key]) ? [...prof.wrongBank[key]] : [];
    const idx = list.indexOf(qId);
    if (!ok && idx === -1) {
      list.push(qId);
      prof.wrongBank[key] = list;
      persistProfiles();
    } else if (ok && idx !== -1) {
      list.splice(idx, 1);
      if (list.length > 0) prof.wrongBank[key] = list;
      else delete prof.wrongBank[key];
      persistProfiles();
    }
  }

  function saveQuizScore(ch, correct, total) {
    if (!ch || total <= 0 || state.quizIsWrongRetry) return;
    const prof = activeProfile();
    const pct = Math.round((correct / total) * 100);

    if (ch.isKanaQuiz) {
      const kKey = ch.kanaSet || "all";
      const prev = prof.kana[kKey];
      prof.kana[kKey] = {
        correct: !prev || pct >= prev.bestPct ? correct : prev.correct,
        total: !prev || pct >= prev.bestPct ? total : prev.total,
        bestPct: prev ? Math.max(prev.bestPct, pct) : pct,
        attempts: (prev && prev.attempts ? prev.attempts : 0) + 1
      };
      persistProfiles();
      return;
    }

    if (ch.isRefQuiz) {
      const rKey = ch.refId || "mix";
      const prev = prof.refs[rKey];
      prof.refs[rKey] = {
        correct: !prev || pct >= prev.bestPct ? correct : prev.correct,
        total: !prev || pct >= prev.bestPct ? total : prev.total,
        bestPct: prev ? Math.max(prev.bestPct, pct) : pct,
        attempts: (prev && prev.attempts ? prev.attempts : 0) + 1
      };
      persistProfiles();
      return;
    }

    if (ch.isFinalExam) {
      const prev = prof.finalExam;
      prof.finalExam = {
        correct: !prev || pct >= prev.bestPct ? correct : prev.correct,
        total: !prev || pct >= prev.bestPct ? total : prev.total,
        bestPct: prev ? Math.max(prev.bestPct, pct) : pct,
        attempts: (prev && prev.attempts ? prev.attempts : 0) + 1
      };
      persistProfiles();
      return;
    }

    // Chapter quiz: simpan untuk set penuh atau sesi sampling dari bank.
    const isFullSet = total === ch.questions.length;
    const isSampledSet = !!ch.bankSize
      && total >= (ch.quizSampleMin || QUIZ_SAMPLE_MIN)
      && total <= (ch.quizSampleMax || QUIZ_SAMPLE_MAX);
    if (isFullSet || isSampledSet) {
      const prev = prof.chapters[ch.num];
      prof.chapters[ch.num] = {
        correct: !prev || pct >= prev.bestPct ? correct : prev.correct,
        total: !prev || pct >= prev.bestPct ? total : prev.total,
        bestPct: prev ? Math.max(prev.bestPct, pct) : pct,
        attempts: (prev && prev.attempts ? prev.attempts : 0) + 1
      };
      persistProfiles();
      renderSidebar();
    }
  }

  function getSavedWrongCount(ch) {
    const key = quizScopeKey(ch);
    const list = activeProfile().wrongBank[key];
    return Array.isArray(list) ? list.length : 0;
  }

  function getSeenChapterIds(babNum) {
    const prof = activeProfile();
    if (!prof.seenBankIds || typeof prof.seenBankIds !== "object") prof.seenBankIds = {};
    const list = prof.seenBankIds[babNum];
    return Array.isArray(list) ? list : [];
  }

  function markChapterQuestionSeen(ch, qId) {
    if (!ch || !ch.bankSize || ch.isFinalExam || ch.isKanaQuiz || ch.isRefQuiz) return;
    const prof = activeProfile();
    if (!prof.seenBankIds || typeof prof.seenBankIds !== "object") prof.seenBankIds = {};
    const list = Array.isArray(prof.seenBankIds[ch.num]) ? [...prof.seenBankIds[ch.num]] : [];
    if (!list.includes(qId)) {
      list.push(qId);
      prof.seenBankIds[ch.num] = list;
      persistProfiles();
    }
  }

  // Buang ID soal lama yang sudah tidak ada di bank baru (mis. b1_1 -> b1-01).
  function pruneBankWrongBank() {
    const prof = activeProfile();
    let changed = false;
    Object.keys(prof.wrongBank || {}).forEach((key) => {
      const match = /^ch_(\d+)$/.exec(key);
      if (!match) return;
      const ch = getChapter(Number(match[1]));
      if (!ch || !ch.bankSize) return;
      const valid = new Set(ch.questions.map((q) => q.id));
      const list = Array.isArray(prof.wrongBank[key]) ? prof.wrongBank[key] : [];
      const next = list.filter((id) => valid.has(id));
      if (next.length !== list.length) {
        changed = true;
        if (next.length > 0) prof.wrongBank[key] = next;
        else delete prof.wrongBank[key];
      }
    });
    if (changed) persistProfiles();
  }

  function getTotalWrongCount() {
    const wb = activeProfile().wrongBank || {};
    return Object.values(wb).reduce((s, arr) => s + (Array.isArray(arr) ? arr.length : 0), 0);
  }

  function getSortedChapters() {
    const copy = [...ALL_CHAPTERS];
    if (isTemanMode() || state.sortMode === "book") {
      return copy.sort((a, b) => a.num - b.num);
    }
    return copy.sort((a, b) => {
      const rDiff = ZONE_META[a.zone].rank - ZONE_META[b.zone].rank;
      if (rDiff !== 0) return rDiff;
      if (a.num === 17) return -1;
      if (b.num === 17) return 1;
      return a.num - b.num;
    });
  }

  function getChapter(num) {
    return ALL_CHAPTERS.find((c) => c.num === num);
  }

  function getNextChapter(afterNum) {
    const ordered = getSortedChapters();
    const idx = ordered.findIndex((c) => c.num === afterNum);
    for (let i = idx + 1; i < ordered.length; i++) {
      if (!isMastered(ordered[i].num)) return ordered[i];
    }
    return ordered[(idx + 1) % ordered.length];
  }

  function esc(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function norm(str) {
    return String(str || "")
      .trim()
      .toLowerCase()
      .replace(/\s+/g, " ")
      .replace(/[。．.!！?？]/g, "");
  }

  function updateCheatButtonLabel() {
    const lbl = document.getElementById("cheatBtnLabel");
    if (!lbl) return;
    if (state.view === "chapter" && state.selectedNum) {
      lbl.textContent = `Rumus Bab ${state.selectedNum}`;
    } else {
      lbl.textContent = "Rumus Cepat";
    }
  }

  // ===== RENDER CHEAT SHEET HTML =====
  function buildCheatSheetTablesHtml(cs) {
    return `
      ${cs.takeaway ? `<div class="cheatsheet-takeaway">💡 Kunci Utama: ${esc(cs.takeaway)}</div>` : ""}
      <div class="cheatsheet-tables">
        ${cs.tables.map((t) => `
          <div>
            <div class="cheatsheet-subhead">${esc(t.heading)}</div>
            <div class="table-wrap">
              <table class="vocab-table">
                <thead>
                  <tr>${t.headers.map((h) => `<th>${esc(h)}</th>`).join("")}</tr>
                </thead>
                <tbody>
                  ${t.rows.map((r) => `
                    <tr>${r.map((cell, ci) => `<td class="${ci === 0 ? "jp" : ""}">${esc(cell)}</td>`).join("")}</tr>
                  `).join("")}
                </tbody>
              </table>
            </div>
          </div>
        `).join("")}
      </div>
    `;
  }

  // ===== SIDEBAR =====
  function renderSidebar() {
    const prof = activeProfile();
    const teman = isTemanMode();
    const masteredCount = ALL_CHAPTERS.filter((c) => isMastered(c.num)).length;
    const pct = Math.round((masteredCount / ALL_CHAPTERS.length) * 100);

    document.getElementById("sidebarProgressText").textContent = `${masteredCount} / ${ALL_CHAPTERS.length} bab`;
    document.getElementById("sidebarProgressFill").style.width = `${pct}%`;
    document.getElementById("sidebarProgressBar").setAttribute("aria-valuenow", String(masteredCount));

    const sortToggle = document.getElementById("sidebarSortToggle");
    if (sortToggle) sortToggle.hidden = teman;

    const sortPrioBtn = document.getElementById("btnSortPriority");
    if (sortPrioBtn) sortPrioBtn.textContent = "Prioritas Bug";
    document.querySelectorAll(".sort-btn").forEach((b) => {
      const active = b.dataset.sort === (teman ? "book" : state.sortMode);
      b.classList.toggle("is-active", active);
      b.setAttribute("aria-selected", String(active));
    });

    const filterBox = document.getElementById("sidebarZoneFilters");
    if (filterBox) {
      const wantMode = teman ? "public" : "diag";
      if (filterBox.dataset.mode !== wantMode) {
        filterBox.dataset.mode = wantMode;
        state.zoneFilter = "all";
        filterBox.innerHTML = teman
          ? `
            <button type="button" class="filter-chip is-active" data-zone="all">Semua (25)</button>
            <button type="button" class="filter-chip" data-zone="1-12">Bab 1–12</button>
            <button type="button" class="filter-chip" data-zone="13-25">Bab 13–25</button>
            <button type="button" class="filter-chip chip-green" data-zone="done">Tuntas (≥80%)</button>
            <button type="button" class="filter-chip" data-zone="todo">Belum Tuntas</button>
          `
          : `
            <button type="button" class="filter-chip is-active" data-zone="all">Semua (25)</button>
            <button type="button" class="filter-chip chip-red" data-zone="errors">Khusus Eror (18)</button>
            <button type="button" class="filter-chip chip-red" data-zone="red">Merah (4)</button>
            <button type="button" class="filter-chip chip-orange" data-zone="orange">Oranye (3)</button>
            <button type="button" class="filter-chip chip-amber" data-zone="amber">Kuning (11)</button>
            <button type="button" class="filter-chip chip-green" data-zone="green">Hijau (7)</button>
          `;
        filterBox.querySelectorAll(".filter-chip").forEach((chip) => {
          chip.addEventListener("click", () => {
            state.zoneFilter = chip.dataset.zone;
            filterBox.querySelectorAll(".filter-chip").forEach((c) => c.classList.remove("is-active"));
            chip.classList.add("is-active");
            renderSidebar();
          });
        });
      }
    }

    const ordered = getSortedChapters();
    const filtered = state.zoneFilter === "all"
      ? ordered
      : state.zoneFilter === "1-12"
      ? ordered.filter((c) => c.num <= 12)
      : state.zoneFilter === "13-25"
      ? ordered.filter((c) => c.num >= 13)
      : state.zoneFilter === "done"
      ? ordered.filter((c) => isMastered(c.num))
      : state.zoneFilter === "todo"
      ? ordered.filter((c) => !isMastered(c.num))
      : state.zoneFilter === "errors"
      ? ordered.filter((c) => c.zone !== "green")
      : ordered.filter((c) => c.zone === state.zoneFilter);

    const listEl = document.getElementById("chapterList");
    listEl.innerHTML = filtered.map((ch) => {
      const selected = state.view === "chapter" && state.selectedNum === ch.num;
      const done = isMastered(ch.num);
      const saved = prof.chapters[ch.num];
      const badgeLabel = saved
        ? `${saved.bestPct}%`
        : teman
        ? `${ch.questions.length} soal`
        : esc(ch.oldScore);
      const badgeCls = done ? "zone-green" : teman && !saved ? "zone-neutral" : ZONE_META[ch.zone].cls;
      return `
        <button type="button" class="chapter-item ${selected ? "is-selected" : ""}" data-open-ch="${ch.num}">
          <div class="chapter-item-main">
            <div class="chapter-item-top">
              <span class="chapter-num">Bab ${ch.num}</span>
              ${done ? '<span class="mastered-badge" title="Tuntas ≥80%">✓</span>' : ""}
            </div>
            <span class="chapter-title-sm">${esc(ch.title)}</span>
          </div>
          <div class="chapter-meta-right">
            <span class="zone-pill ${badgeCls}">${badgeLabel}</span>
          </div>
        </button>
      `;
    }).join("");

    listEl.querySelectorAll("[data-open-ch]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const chNum = Number(btn.dataset.openCh);
        guardFinalExamExit(() => {
          openChapter(chNum, "materi");
          closeDrawer();
        });
      });
    });
  }

  // ===== OVERVIEW PETA BAB 1–25 =====
  function renderOverview() {
    stopKaiwaPlayback();
    state.view = "overview";
    state.selectedNum = null;
    updateCheatButtonLabel();
    updateTopProfileLabel();
    renderSidebar();
    syncMobileNav();

    const ws = document.getElementById("workspace");
    const prof = activeProfile();
    const teman = isTemanMode();
    const masteredCount = ALL_CHAPTERS.filter((c) => isMastered(c.num)).length;
    const totalPerBabQ = ALL_CHAPTERS.reduce((s, c) => s + c.questions.length, 0);
    const totalRefQ = REFERENCES.reduce((s, r) => s + r.questions.length, 0);
    const grandTotalQ = totalPerBabQ + KANA_DATA.questions.length + totalRefQ + FINAL_EXAM.length;
    const nextTarget = getSortedChapters().find((c) => !isMastered(c.num)) || getChapter(17);

    const groups = teman
      ? [
          { key: "b1-5",   range: [1, 5],   title: "Bagian 1 · Bab 1 – 5 — Fondasi Kalimat, Benda, Tempat, Waktu, & Arah" },
          { key: "b6-10",  range: [6, 10],  title: "Bagian 2 · Bab 6 – 10 — Aktivitas, Memberi-Menerima, Kata Sifat, & Keberadaan" },
          { key: "b11-15", range: [11, 15], title: "Bagian 3 · Bab 11 – 15 — Satuan Hitung, Perbandingan, Keinginan, Bentuk -Te, & Izin" },
          { key: "b16-20", range: [16, 20], title: "Bagian 4 · Bab 16 – 20 — Urutan Aksi, Bentuk -Nai, Kamus, Bentuk -Ta, & Bentuk Biasa" },
          { key: "b21-25", range: [21, 25], title: "Bagian 5 · Bab 21 – 25 — Pendapat, Anak Kalimat, Klausa Waktu/Syarat, & Pengandaian" }
        ]
      : [
          { key: "red",    title: "1. Zona Merah — Skor Tes Lama 0/4 (Prioritas Utama)" },
          { key: "orange", title: "2. Zona Oranye — Skor Tes Lama 1/4 (Termasuk Bab 17 Lengkap + Lab Konjugasi)" },
          { key: "amber",  title: "3. Zona Kuning — Skor Tes Lama 2/4 (Rapikan Detail Konjugasi & Partikel)" },
          { key: "green",  title: "4. Zona Hijau — Skor Tes Lama 3/4–4/4 (Materi Lengkap & Review)" }
        ];

    const groupsHtml = groups.map((g) => {
      const items = teman && g.range
        ? ALL_CHAPTERS.filter((c) => c.num >= g.range[0] && c.num <= g.range[1]).sort((a, b) => a.num - b.num)
        : ALL_CHAPTERS.filter((c) => c.zone === g.key).sort((a, b) => a.num - b.num);
      return `
        <section class="zone-section">
          <div class="zone-section-head">
            <h2>${esc(g.title)}</h2>
            <span class="zone-pill ${teman ? "zone-neutral" : ZONE_META[g.key].cls}">${items.length} bab</span>
          </div>
          <div class="zone-grid">
            ${items.map((ch) => {
              const saved = prof.chapters[ch.num];
              const done = isMastered(ch.num);
              ensureProfileKotoba(prof);
              const kSc = prof.kotoba.chapterScores[ch.num];
              const kDone = !!(kSc && kSc.bestPct >= 80);
              const pillCls = done ? "zone-green" : teman && !saved ? "zone-neutral" : saved && teman ? "zone-amber" : ZONE_META[ch.zone].cls;
              const pillTxt = done
                ? `✓ Tuntas (${saved.bestPct}%)`
                : saved
                ? `Skor terbaik: ${saved.bestPct}%`
                : teman
                ? "Belum dikerjakan"
                : `Tes lama: ${ch.oldScore}`;
              return `
                <button type="button" class="chapter-card" data-open-ch="${ch.num}">
                  <div class="chapter-card-top">
                    <span class="zone-pill ${pillCls}">${pillTxt}</span>
                    <span class="zone-pill ${kDone ? "zone-green" : "zone-neutral"}">
                      ${kSc ? `🃏 Kotoba ${kSc.bestPct}%` : `${ch.questions.length} soal`}
                    </span>
                  </div>
                  <h3>Bab ${ch.num}: ${esc(ch.title)}</h3>
                  ${!teman ? `<p class="chapter-card-bug">${esc(ch.shortBug)}</p>` : ""}
                  <div class="chapter-card-foot">
                    <span>Materi + Kotoba + Audio 🔊</span>
                    <span>Buka Bab ${ch.num} →</span>
                  </div>
                </button>
              `;
            }).join("")}
          </div>
        </section>
      `;
    }).join("");

    const kanaBest = prof.kana && prof.kana.all ? `${prof.kana.all.bestPct}%` : "40 soal";
    const finalBest = prof.finalExam ? `${prof.finalExam.bestPct}%` : `${FINAL_EXAM.length} soal`;
    const totalKotoba = getAllKotoba().length;
    ensureProfileKotoba(prof);
    const kotobaHafal = prof.kotoba.masteredIds.length;
    const kotobaBabTuntas = ALL_CHAPTERS.filter((c) => prof.kotoba.chapterScores[c.num] && prof.kotoba.chapterScores[c.num].bestPct >= 80).length;

    ws.innerHTML = `
      <p class="eyebrow">MINNA NO NIHONGO I · KANA + ${totalKotoba} KOTOBA + BAB 1–25 + ${REFERENCES.length} REFERENSI</p>
      <h1 class="page-title">Studio Belajar Jepang Lengkap, Flashcard Kotoba, Audio 🔊, &amp; Kuis</h1>
      <p class="page-lead">
        Tersimpan otomatis per browser/HP di <code>localStorage</code> (${esc(prof.name)}). Dilengkapi <strong>${totalKotoba} Kotoba Flashcard &amp; Kuis Akhir Kotoba Bab 1–25</strong>, <strong>Hiragana &amp; Katakana</strong>, <strong>25 Rumus Cepat unik</strong>, serta <strong>${grandTotalQ} soal tata bahasa</strong> tanpa batas waktu.
      </p>

      <div class="mode-switch-bar">
        <div class="mode-switch-info">
          <strong>Profil Aktif: ${esc(prof.name)}${!teman ? " · 🩺 Mode Diagnostik Pribadi" : ""}</strong>
          <span class="mode-switch-sub">
            ${teman
              ? "Progres kuis, Flashcard Kotoba, & riwayat 50 soal tersimpan lokal otomatis di browser perangkat ini."
              : "Menampilkan zona prioritas & catatan diagnostik pribadi."}
          </span>
        </div>
        <div class="mode-switch-btns">
          ${isDiagnosticUnlocked() ? `
            <button type="button" class="pill-btn ${teman ? "pill-btn-accent" : ""}" id="btnQuickSwitchMode">
              ${teman ? "Aktifkan Mode Diagnostik" : "Kembali ke Tampilan Normal"}
            </button>
          ` : ""}
          <button type="button" class="pill-btn" id="btnOverviewProfile">
            👤 Profil, Audio (${state.speechRate}×), &amp; Backup
          </button>
        </div>
      </div>

      <div class="dashboard-summary">
        <div class="summary-card">
          <span class="summary-num">${masteredCount}/${ALL_CHAPTERS.length}</span>
          <span class="summary-label">Bab Tata Bahasa (≥80%)</span>
          <span class="summary-note">25 Rumus Cepat unik</span>
        </div>
        <div class="summary-card">
          <span class="summary-num">${kotobaBabTuntas}/25</span>
          <span class="summary-label">Kuis Kotoba Tuntas</span>
          <span class="summary-note">Hafal ${kotobaHafal}/${totalKotoba} kata · 🔥${prof.kotoba.bestStreak}</span>
        </div>
        <div class="summary-card">
          <span class="summary-num">${grandTotalQ}</span>
          <span class="summary-label">Total Soal Tanpa Timer</span>
          <span class="summary-note">${totalPerBabQ} Bab · ${KANA_DATA.questions.length} Kana · ${totalRefQ} Ref · ${FINAL_EXAM.length} Tes</span>
        </div>
        <div class="summary-card">
          <span class="summary-num">${esc(finalBest)}</span>
          <span class="summary-label">Tes Akhir (Bab 1–25)</span>
          <span class="summary-note">Atur Bab, Timer &amp; Koreksi</span>
        </div>
      </div>

      <div class="cta-banner">
        <div>
          <h2>Lanjut Belajar: Bab ${nextTarget.num} — ${esc(nextTarget.title)}</h2>
          <p>${teman ? "Mainkan Flashcard Kotoba (1.174 kata), kuasai Kana dasar, lanjut Bab 1–25, atau cek 11 Referensi kosakata harian." : esc(nextTarget.shortBug)}</p>
        </div>
        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
          <button type="button" class="btn-primary" id="btnOverviewKotoba">
            🃏 Main Kotoba Flashcard (${totalKotoba} Kata) →
          </button>
          <button type="button" class="btn-secondary" id="btnOverviewFinalExam">
            🎯 Atur Tes Akhir (1–25)
          </button>
          <button type="button" class="btn-secondary" id="btnOverviewKana">
            あ/ア Kana Dasar
          </button>
          <button type="button" class="btn-secondary" id="btnQuickBab17">
            Bab 17 (+ Lab Konjugasi)
          </button>
          <button type="button" class="btn-secondary" id="btnStartNext">
            Lanjut Bab ${nextTarget.num}
          </button>
          <button type="button" class="btn-secondary" id="btnOverviewRefs">
            ${REFERENCES.length} Referensi N5
          </button>
        </div>
      </div>

      ${groupsHtml}
    `;

    const btnQuickSwitch = document.getElementById("btnQuickSwitchMode");
    if (btnQuickSwitch) {
      btnQuickSwitch.addEventListener("click", () => {
        activeProfile().userMode = isTemanMode() ? "perbaikan" : "teman";
        state.sortMode = isTemanMode() ? "book" : "priority";
        persistProfiles();
        persistPrefs();
        renderOverview();
      });
    }
    document.getElementById("btnOverviewProfile").addEventListener("click", () => openProfileModal());
    document.getElementById("btnOverviewKotoba").addEventListener("click", () => openKotobaFlashcard(String(nextTarget.num || 1)));
    document.getElementById("btnOverviewFinalExam").addEventListener("click", () => openFinalExam());
    document.getElementById("btnOverviewKana").addEventListener("click", () => openKana("hiragana"));
    document.getElementById("btnQuickBab17").addEventListener("click", () => openChapter(17, "materi"));
    document.getElementById("btnStartNext").addEventListener("click", () => openChapter(nextTarget.num, "materi"));
    document.getElementById("btnOverviewRefs").addEventListener("click", () => openReferences(state.selectedRefId, "materi"));
    ws.querySelectorAll("[data-open-ch]").forEach((btn) => {
      btn.addEventListener("click", () => openChapter(Number(btn.dataset.openCh), "materi"));
    });
  }

  // ===== BUKA SATU BAB =====
  function openChapter(num, tab) {
    stopKaiwaPlayback();
    const ch = getChapter(num);
    if (!ch) return;
    state.view = "chapter";
    state.selectedNum = num;
    state.activeTab = tab || "materi";
    state.labIndex = 0;
    const isBank = !!ch.bankSize;
    const indices = isBank ? pickSampleIndices(ch) : ch.questions.map((_, i) => i);
    const quizLabel = isBank
      ? `${indices.length} Soal Acak dari Bank ${ch.bankSize} Bab ${ch.num}`
      : `Semua ${ch.questions.length} Soal Murni Bab ${ch.num}`;
    resetQuiz(indices, quizLabel, false);
    updateCheatButtonLabel();
    renderSidebar();
    syncMobileNav();
    renderChapterView();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function resetQuiz(indices, label, isWrongRetry) {
    state.quizIndices = indices;
    state.quizModeLabel = label;
    state.quizIsWrongRetry = !!isWrongRetry;
    state.currentStep = 0;
    state.answered = false;
    state.selectedOption = null;
    state.inputValue = "";
    state.isCorrectCurrent = false;
    state.results = {};
    state.wrongIds = [];
  }

  function renderChapterView() {
    const ch = getChapter(state.selectedNum);
    if (!ch) return;
    const ws = document.getElementById("workspace");
    const prof = activeProfile();
    ensureProfileKotoba(prof);
    const saved = prof.chapters[ch.num];
    const kSaved = prof.kotoba.chapterScores[ch.num];
    const done = isMastered(ch.num);
    const kDone = !!(kSaved && kSaved.bestPct >= 80);
    const teman = isTemanMode();
    const quizInfo = ch.bankSize
      ? `bank ${ch.bankSize} soal murni Bab ${ch.num} (${ch.quizSampleMin}–${ch.quizSampleMax} soal acak per sesi)`
      : `${ch.questions.length} soal latihan murni Bab ${ch.num}`;
    const quizTabLabel = ch.bankSize
      ? `${ch.quizSampleMin}–${ch.quizSampleMax} Acak dari ${ch.bankSize} Soal`
      : `${ch.questions.length} Soal`;

    ws.innerHTML = `
      <section class="chapter-header">
        <div class="chapter-header-top">
          <span class="zone-pill ${teman ? "zone-neutral" : ZONE_META[ch.zone].cls}">
            ${teman ? `Minna no Nihongo I · Bab ${ch.num}` : `${esc(ZONE_META[ch.zone].label)} · Tes Lama ${esc(ch.oldScore)}`}
          </span>
          ${done ? `<span class="zone-pill zone-green">✓ Tata Bahasa (${saved.bestPct}%)</span>` : saved ? `<span class="zone-pill zone-amber">Tata Bahasa: ${saved.bestPct}%</span>` : ""}
          ${kDone ? `<span class="zone-pill zone-green">✓ Kotoba (${kSaved.bestPct}%)</span>` : kSaved ? `<span class="zone-pill zone-amber">Kuis Kotoba: ${kSaved.bestPct}%</span>` : ""}
          <span class="zone-pill zone-neutral">Rumus Cepat + Audio 🔊 Bab ${ch.num}</span>
        </div>
        <h1 class="page-title">Bab ${ch.num}: ${esc(ch.title)}</h1>
        <p class="page-lead">${teman ? `Materi tata bahasa lengkap, kosakata ber-audio, dan ${quizInfo}.` : esc(ch.shortBug)}</p>

        <div class="mode-tabs" role="tablist">
          <button type="button" class="mode-tab ${state.activeTab === "materi" ? "is-active" : ""}" id="tabMateri" role="tab" aria-selected="${state.activeTab === "materi"}">
            1. Rumus Cepat &amp; Materi Bab ${ch.num}
          </button>
          <button type="button" class="mode-tab ${state.activeTab === "kuis" ? "is-active" : ""}" id="tabKuis" role="tab" aria-selected="${state.activeTab === "kuis"}">
            2. Kuis Bab ${ch.num} (${quizTabLabel})
          </button>
          <button type="button" class="mode-tab" id="tabKotobaFlash" role="tab">
            3. 🃏 Flashcard Kotoba (${(KOTOBA_BY_BAB[ch.num] || []).length} Kata)
          </button>
          <button type="button" class="mode-tab" id="tabKotobaFinal" role="tab">
            4. 🏆 Kuis Akhir Kotoba Bab ${ch.num}${kSaved ? ` (${kSaved.bestPct}%)` : ""}
          </button>
          <button type="button" class="mode-tab ${state.activeTab === "kaiwa" ? "is-active" : ""}" id="tabKaiwa" role="tab" aria-selected="${state.activeTab === "kaiwa"}">
            5. 💬 Kaiwa (${KAIWA_BY_BAB[ch.num] ? `${KAIWA_BY_BAB[ch.num].lines.length} Baris` : "Belum Tersedia"})
          </button>
        </div>
      </section>

      <div id="chapterBody"></div>
    `;

    document.getElementById("tabMateri").addEventListener("click", () => {
      stopKaiwaPlayback();
      state.activeTab = "materi";
      renderChapterView();
    });
    document.getElementById("tabKuis").addEventListener("click", () => {
      stopKaiwaPlayback();
      state.activeTab = "kuis";
      renderChapterView();
    });
    document.getElementById("tabKotobaFlash").addEventListener("click", () => {
      stopKaiwaPlayback();
      openKotobaFlashcard(String(ch.num), "flip");
    });
    document.getElementById("tabKotobaFinal").addEventListener("click", () => {
      stopKaiwaPlayback();
      openKotobaFlashcard(String(ch.num), "final");
    });
    document.getElementById("tabKaiwa").addEventListener("click", () => {
      stopKaiwaPlayback();
      state.activeTab = "kaiwa";
      renderChapterView();
    });

    if (state.activeTab === "materi") {
      renderChapterMateri(ch);
    } else if (state.activeTab === "kaiwa") {
      renderChapterKaiwa(ch);
    } else {
      renderQuizBody(ch);
    }
  }

  function calcSpeechSafetyTimeoutMs(text, rate) {
    const len = String(text || "").length;
    const effRate = Math.max(0.5, Number(rate) || 1.0);
    return Math.min(45000, Math.max(15000, Math.round((len * 320) / effRate) + 8000));
  }

  function startKaiwaAutoPlay(chNum) {
    const kaiwa = KAIWA_BY_BAB[chNum];
    if (!kaiwa || !Array.isArray(kaiwa.lines) || kaiwa.lines.length === 0) return;
    stopKaiwaPlayback();
    const token = kaiwaRunToken;
    state.kaiwaPlaying = true;
    state.kaiwaRepeatPause = false;

    const finishPlayback = () => {
      if (token !== kaiwaRunToken) return;
      state.kaiwaPlaying = false;
      state.kaiwaLineIdx = -1;
      state.kaiwaRepeatPause = false;
      const ch = getChapter(chNum);
      if (ch) renderChapterKaiwa(ch);
    };

    const playNarrator = (narObj, sentinelIdx, onDone) => {
      if (token !== kaiwaRunToken || state.view !== "chapter" || state.selectedNum !== chNum || state.activeTab !== "kaiwa") {
        return;
      }
      if (!narObj || !narObj.jp) {
        onDone();
        return;
      }
      state.kaiwaLineIdx = sentinelIdx;
      state.kaiwaRepeatPause = false;
      const ch = getChapter(chNum);
      if (ch) renderChapterKaiwa(ch);

      let doneFlag = false;
      const doneFn = () => {
        if (doneFlag || token !== kaiwaRunToken) return;
        doneFlag = true;
        if (kaiwaTimerId !== null) {
          clearTimeout(kaiwaTimerId);
          kaiwaTimerId = null;
        }
        onDone();
      };

      const narTempo = narObj.rateBias !== undefined ? narObj.rateBias : 0.88;
      const narText = narObj.tts || narObj.jp;
      const narCfg = resolveJapaneseVoice(narObj.gender || "female", 0, narTempo);
      kaiwaTimerId = setTimeout(doneFn, calcSpeechSafetyTimeoutMs(narText, narCfg.rate));
      speakJapanese(narText, null, {
        gender: narObj.gender || "female",
        roleSlot: 0,
        roleTempo: narTempo,
        onEnd: doneFn
      });
    };

    const playStep = (idx) => {
      if (token !== kaiwaRunToken || state.view !== "chapter" || state.selectedNum !== chNum || state.activeTab !== "kaiwa") {
        return;
      }
      if (idx >= kaiwa.lines.length) {
        if (state.kaiwaWithIntro && kaiwa.outro) {
          playNarrator(kaiwa.outro, -3, finishPlayback);
        } else {
          finishPlayback();
        }
        return;
      }
      state.kaiwaLineIdx = idx;
      state.kaiwaRepeatPause = false;
      const ch = getChapter(chNum);
      if (ch) renderChapterKaiwa(ch);

      const line = kaiwa.lines[idx];
      const isMuted = state.kaiwaMuteGender === line.gender;
      if (isMuted) {
        kaiwaTimerId = setTimeout(() => {
          if (token === kaiwaRunToken) playStep(idx + 1);
        }, 2600);
        return;
      }

      let advanced = false;
      const advance = () => {
        if (advanced || token !== kaiwaRunToken) return;
        advanced = true;
        if (kaiwaTimerId !== null) {
          clearTimeout(kaiwaTimerId);
          kaiwaTimerId = null;
        }
        if (state.kaiwaRepeatMode) {
          state.kaiwaRepeatPause = true;
          const cNow = getChapter(chNum);
          if (cNow) renderChapterKaiwa(cNow);
          kaiwaTimerId = setTimeout(() => {
            if (token === kaiwaRunToken) {
              state.kaiwaRepeatPause = false;
              playStep(idx + 1);
            }
          }, 4000);
        } else {
          kaiwaTimerId = setTimeout(() => {
            if (token === kaiwaRunToken) playStep(idx + 1);
          }, 420);
        }
      };

      // Safety fallback jika browser gagal memicu utterance.onend
      const roleSlots = buildKaiwaRoleSlots(kaiwa);
      const roleSlot = Object.prototype.hasOwnProperty.call(roleSlots, line.speakerId) ? roleSlots[line.speakerId] : 0;
      const roleObj = (kaiwa.roles || []).find((r) => r.id === line.speakerId) || {};
      const roleTempo = roleObj.rateBias !== undefined ? roleObj.rateBias : roleObj.tempo;
      const speechText = line.tts || line.jp;
      const lineCfg = resolveJapaneseVoice(line.gender, roleSlot, roleTempo);
      kaiwaTimerId = setTimeout(advance, calcSpeechSafetyTimeoutMs(speechText, lineCfg.rate));
      speakJapanese(speechText, null, { gender: line.gender, roleSlot, roleTempo, onEnd: advance });
    };

    if (state.kaiwaWithIntro && kaiwa.intro) {
      playNarrator(kaiwa.intro, -2, () => {
        kaiwaTimerId = setTimeout(() => {
          if (token === kaiwaRunToken) playStep(0);
        }, 650);
      });
    } else {
      playStep(0);
    }
  }

  function buildKaiwaRoleSlots(kaiwa) {
    const map = {};
    const counts = { male: 0, female: 0, neutral: 0 };
    ((kaiwa && kaiwa.roles) || []).forEach((r) => {
      const g = r.gender === "female" ? "female" : r.gender === "male" ? "male" : "neutral";
      map[r.id] = counts[g];
      counts[g] += 1;
    });
    return map;
  }

  function renderChapterKaiwa(ch) {
    const body = document.getElementById("chapterBody");
    if (!body) return;
    const kaiwa = KAIWA_BY_BAB[ch.num];

    if (!kaiwa) {
      body.innerHTML = `
        <section class="study-section">
          <div class="result-card">
            <p class="eyebrow">KAIWA INTERAKTIF BAB 1–25</p>
            <div class="result-score" style="font-size:24px;">Kaiwa Bab ${ch.num} Belum Ditambahkan</div>
            <p class="result-msg">
              Dialog percakapan interaktif beserta <strong>3-Layer Voice Router (Pria/Wanita)</strong> saat ini tersedia untuk <strong>Bab 1–25</strong>.
            </p>
            <div class="result-actions">
              <button type="button" class="btn-primary" id="btnGoTrialKaiwaBab1">💬 Buka Kaiwa Bab 1 →</button>
              <button type="button" class="btn-secondary" id="btnBackMateriFromKaiwa">← Kembali ke Materi Bab ${ch.num}</button>
            </div>
          </div>
        </section>
      `;
      document.getElementById("btnGoTrialKaiwaBab1").addEventListener("click", () => openChapter(1, "kaiwa"));
      document.getElementById("btnBackMateriFromKaiwa").addEventListener("click", () => {
        state.activeTab = "materi";
        renderChapterView();
      });
      return;
    }

    const routerSummary = describeVoiceRouterStatus();
    const roleSlots = buildKaiwaRoleSlots(kaiwa);
    const genderTotal = { male: 0, female: 0, neutral: 0 };
    (kaiwa.roles || []).forEach((r) => {
      const g = r.gender === "female" ? "female" : r.gender === "male" ? "male" : "neutral";
      genderTotal[g] += 1;
    });

    const rolesHtml = (kaiwa.roles || []).map((r) => {
      const g = r.gender === "female" ? "female" : "male";
      const slot = roleSlots[r.id] || 0;
      const gText = g === "female" ? "Wanita" : "Pria";
      const slotSuffix = genderTotal[g] > 1 ? ` #${slot + 1}` : "";
      return `
        <span class="kaiwa-role-chip ${g === "female" ? "is-female" : "is-male"}">
          <span>${r.avatar || (g === "female" ? "👩" : "👨")}</span>
          <strong>${esc(r.name)}</strong>
          <span class="kaiwa-role-gender">${gText}${slotSuffix}</span>
        </span>
      `;
    }).join("");

    const linesHtml = kaiwa.lines.map((line, idx) => {
      const isSpeaking = state.kaiwaPlaying && state.kaiwaLineIdx === idx;
      const isMuted = state.kaiwaMuteGender === line.gender;
      const roleObj = (kaiwa.roles || []).find((r) => r.id === line.speakerId) || {};
      const g = line.gender === "female" ? "female" : "male";
      const slot = Object.prototype.hasOwnProperty.call(roleSlots, line.speakerId) ? roleSlots[line.speakerId] : 0;
      const roleTempo = roleObj.rateBias !== undefined ? roleObj.rateBias : roleObj.tempo;
      const genderLabel = `${g === "female" ? "Wanita" : "Pria"}${genderTotal[g] > 1 ? ` #${slot + 1}` : ""}`;
      return `
        <article class="kaiwa-row ${g === "female" ? "is-female" : "is-male"} ${isSpeaking ? "is-speaking-line" : ""} ${isMuted ? "is-role-muted" : ""}">
          <div class="kaiwa-bubble">
            <div class="kaiwa-head">
              <div class="kaiwa-speaker">
                <span aria-hidden="true">${roleObj.avatar || (g === "female" ? "👩" : "👨")}</span>
                <strong>${esc(line.speaker)}</strong>
                <span class="zone-pill ${g === "female" ? "zone-orange" : "zone-neutral"}">${genderLabel}</span>
                ${isSpeaking ? `<span class="zone-pill zone-green">${isMuted ? "🎙️ Giliranmu Baca" : state.kaiwaRepeatPause ? "🎙️ Tirukan Sekarang..." : "🔊 Sedang Bicara"}</span>` : ""}
              </div>
              ${ttsBtnHtml(line.tts || line.jp, "tts-btn-sm", line.gender, slot, roleTempo)}
            </div>
            <div class="kaiwa-jp">${esc(line.jp)}</div>
            <div class="romaji">${esc(line.romaji)}</div>
            ${!state.kaiwaHideId ? `<div class="kaiwa-id">${esc(line.id)}</div>` : ""}
            ${line.note ? `<div class="kaiwa-note">💡 ${esc(line.note)}</div>` : ""}
          </div>
        </article>
      `;
    }).join("");

    const isIntroSpeaking = state.kaiwaPlaying && state.kaiwaLineIdx === -2;
    const isOutroSpeaking = state.kaiwaPlaying && state.kaiwaLineIdx === -3;
    const activeNar = isOutroSpeaking && kaiwa.outro ? kaiwa.outro : kaiwa.intro;
    const narratorHtml = kaiwa.intro ? `
      <div class="kaiwa-narrator-card ${isIntroSpeaking || isOutroSpeaking ? "is-speaking-line" : ""} ${!state.kaiwaWithIntro ? "is-muted-intro" : ""}">
        <div class="kaiwa-head">
          <div class="kaiwa-speaker">
            <span aria-hidden="true">🎙️</span>
            <strong>${esc(activeNar.speaker || "ナレーター (Narator CD)")}</strong>
            <span class="zone-pill zone-orange">Wanita · Pengantar CD</span>
            ${isIntroSpeaking ? `<span class="zone-pill zone-green">🔊 Intro CD Berjalan</span>` : isOutroSpeaking ? `<span class="zone-pill zone-green">🔊 Penutup CD</span>` : `<span class="zone-pill zone-neutral">${state.kaiwaWithIntro ? "Aktif di Awal" : "Dilewati"}</span>`}
          </div>
          ${ttsBtnHtml(activeNar.tts || activeNar.jp, "tts-btn-sm", activeNar.gender || "female", 0, activeNar.rateBias !== undefined ? activeNar.rateBias : 0.88)}
        </div>
        <div class="kaiwa-jp">${esc(activeNar.jp)}</div>
        <div class="romaji">${esc(activeNar.romaji)}</div>
        ${!state.kaiwaHideId ? `<div class="kaiwa-id">${esc(activeNar.id)}</div>` : ""}
      </div>
    ` : "";

    const tipsHtml = Array.isArray(kaiwa.tips) && kaiwa.tips.length > 0 ? `
      <div class="cheatsheet-takeaway" style="margin-top: 16px;">
        <strong>Catatan Percakapan Bab ${ch.num}:</strong>
        <ul style="margin:6px 0 0 18px; padding:0;">
          ${kaiwa.tips.map((t) => `<li>${esc(t)}</li>`).join("")}
        </ul>
      </div>
    ` : "";

    body.innerHTML = `
      <section class="study-section">
        <div class="kaiwa-card">
          <div class="kaiwa-meta-top">
            <div>
              <h2 class="study-section-title" style="margin:0;">💬 ${esc(kaiwa.title)}</h2>
              <p class="section-sub" style="margin:4px 0 0;">${esc(kaiwa.scene)}</p>
            </div>
          </div>

          <div class="kaiwa-roles-bar">${rolesHtml}</div>

          <div class="kaiwa-voice-status">${esc(routerSummary)}</div>
          <div class="kaiwa-error-banner" id="kaiwaErrorBanner"${state.kaiwaLastError ? "" : " hidden"}>${state.kaiwaLastError ? `⚠️ ${esc(state.kaiwaLastError)}` : ""}</div>

          <div class="kaiwa-toolbar">
            <div class="kotoba-setting-pills">
              <button type="button" class="${state.kaiwaPlaying ? "btn-danger-soft" : "btn-primary"}" id="btnKaiwaPlayAll">
                ${state.kaiwaPlaying ? "⏹️ Hentikan Dialog" : "▶️ Putar Seluruh Dialog"}
              </button>
              <button type="button" class="pill-btn ${state.kaiwaWithIntro ? "pill-btn-accent" : ""}" id="btnKaiwaToggleIntro" title="Nyalakan/matikan pengantar & penutup Narator CD saat Putar Seluruh Dialog">
                🎙️ Intro CD: ${state.kaiwaWithIntro ? "ON" : "OFF"}
              </button>
              <button type="button" class="pill-btn ${state.kaiwaRepeatMode ? "pill-btn-accent" : ""}" id="btnKaiwaToggleRepeat" title="Beri jeda 4 detik setelah tiap baris untuk menirukan (Listen & Repeat)">
                🔁 Mode Tirukan: ${state.kaiwaRepeatMode ? "ON" : "OFF"}
              </button>
              <button type="button" class="pill-btn ${state.kaiwaHideId ? "pill-btn-accent" : ""}" id="btnKaiwaToggleId">
                ${state.kaiwaHideId ? "👀 Tampilkan Arti" : "🙈 Sembunyikan Arti"}
              </button>
              <button type="button" class="pill-btn ${state.voiceSwapGender ? "pill-btn-accent" : ""}" id="btnKaiwaSwapVoice" title="Tukar suara Pria dan Wanita jika suara browser tertukar">
                ${state.voiceSwapGender ? "⇄ Suara Ditukar (Aktif)" : "⇄ Tukar Suara Pria ↔ Wanita"}
              </button>
              <button type="button" class="pill-btn" id="btnKaiwaAudioSettings" title="Pilih suara Pria/Wanita secara manual">
                ⚙️ Atur Suara
              </button>
            </div>
            <div class="kotoba-setting-pills">
              <button type="button" class="filter-chip ${state.kaiwaMuteGender === "none" ? "is-active" : ""}" data-kmute="none">🔊 Semua Suara</button>
              <button type="button" class="filter-chip ${state.kaiwaMuteGender === "male" ? "is-active" : ""}" data-kmute="male">🎭 Bisukan Pria</button>
              <button type="button" class="filter-chip ${state.kaiwaMuteGender === "female" ? "is-active" : ""}" data-kmute="female">🎭 Bisukan Wanita</button>
            </div>
          </div>

          ${narratorHtml}
          <div class="kaiwa-stage">${linesHtml}</div>
          ${tipsHtml}
        </div>
      </section>
    `;

    document.getElementById("btnKaiwaPlayAll").addEventListener("click", () => {
      if (state.kaiwaPlaying) stopKaiwaPlayback(true);
      else startKaiwaAutoPlay(ch.num);
    });
    document.getElementById("btnKaiwaToggleIntro").addEventListener("click", () => {
      state.kaiwaWithIntro = !state.kaiwaWithIntro;
      renderChapterKaiwa(ch);
    });
    document.getElementById("btnKaiwaToggleRepeat").addEventListener("click", () => {
      state.kaiwaRepeatMode = !state.kaiwaRepeatMode;
      renderChapterKaiwa(ch);
    });
    document.getElementById("btnKaiwaToggleId").addEventListener("click", () => {
      state.kaiwaHideId = !state.kaiwaHideId;
      renderChapterKaiwa(ch);
    });
    document.getElementById("btnKaiwaSwapVoice").addEventListener("click", () => {
      state.voiceSwapGender = !state.voiceSwapGender;
      state.kaiwaLastError = "";
      persistPrefs();
      renderChapterKaiwa(ch);
    });
    document.getElementById("btnKaiwaAudioSettings").addEventListener("click", () => {
      openProfileModal();
    });
    body.querySelectorAll("[data-kmute]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.kaiwaMuteGender = btn.dataset.kmute;
        renderChapterKaiwa(ch);
      });
    });
  }

  // ===== MATERI PER BAB (TERMASUK MERGED BAB 17 UTUH + AUDIO TTS!) =====
  function renderChapterMateri(ch) {
    const body = document.getElementById("chapterBody");
    const teman = isTemanMode();
    const quizFooterText = ch.bankSize
      ? `Bank ${ch.bankSize} soal murni Bab ${ch.num}; setiap sesi menampilkan ${ch.quizSampleMin}–${ch.quizSampleMax} soal acak, tanpa batas waktu.`
      : `${ch.questions.length} soal fokus murni materi Bab ${ch.num} (tidak kecampur bab lain, tanpa batas waktu).`;
    const quizButtonLabel = ch.bankSize
      ? `Acak ${ch.quizSampleMin}–${ch.quizSampleMax} Soal`
      : `${ch.questions.length} Soal`;

    const bugsHtml = ch.bugs.map((b) => `
      <li>
        <strong>${esc(b.soal)}:</strong>
        <span class="bug-wrong">${esc(b.salah)}</span> →
        <span class="bug-right">${esc(b.benar)}</span>
        <div class="bug-why">${esc(b.kenapa)}</div>
      </li>
    `).join("");

    let grammarHtml = "";
    let vocabHtml = "";
    let extraLabHtml = "";

    const renderExamples = (examples) => `
      <div class="example-list">
        ${examples.map((ex) => `
          <div class="example-item">
            <div class="jp-audio-row">
              <div>
                <div class="example-jp">${esc(ex.jp)}</div>
                <span class="romaji example-romaji">${esc(ex.romaji)}</span>
              </div>
              ${ttsBtnHtml(ex.jp)}
            </div>
            <span class="example-id">${esc(ex.id)}</span>
          </div>
        `).join("")}
      </div>
    `;

    if (ch.isMergedBab17) {
      extraLabHtml = `
        <section class="study-section">
          <h2 class="study-section-title">Lab Konjugasi Interaktif Bab 17: Klik Kata Kerja, Lihat Rumus Turunannya</h2>
          <p class="section-sub">Pilih satu dari 14 kata kerja di bawah untuk melihat perubahan <code>ます形 → ない形 → 3 rumus Bab 17</code> sekaligus mendengar audionya.</p>
          <div class="lab-shell">
            <div class="lab-chips" id="labChips"></div>
            <div class="lab-stage" id="labStage"></div>
          </div>
        </section>
      `;

      grammarHtml = ch.grammarPointsRaw.map((g) => `
        <article class="grammar-card">
          <span class="grammar-num">${esc(g.num)}</span>
          <h3 class="grammar-title">${esc(g.title)}</h3>
          <div class="formula-box">${esc(g.formula)}</div>
          <p class="grammar-explain">${esc(g.explain)}</p>
          ${g.table ? `
            <div class="table-wrap" style="margin-bottom: 14px;">
              <table class="vocab-table">
                <thead><tr><th>Kelompok</th><th>Aturan Perubahan</th><th>Contoh</th></tr></thead>
                <tbody>
                  ${g.table.map((r) => `<tr><td><strong>${esc(r.k)}</strong></td><td>${esc(r.aturan)}</td><td class="jp">${esc(r.contoh)}</td></tr>`).join("")}
                </tbody>
              </table>
            </div>
          ` : ""}
          ${renderExamples(g.examples)}
          <div class="trap-note"><strong>Catatan Jebakan:</strong> ${esc(g.trap)}</div>
        </article>
      `).join("");

      vocabHtml = `
        <div class="vocab-stack">
          ${ch.vocabGroupsRaw.map((vg) => `
            <div>
              <h3 class="vocab-group-title">${esc(vg.title)}</h3>
              <div class="table-wrap">
                <table class="vocab-table">
                  <thead><tr><th>Jepang (Kanji)</th><th>Kelompok</th><th>Bentuk -Nai</th><th>Arti Indonesia</th><th>Audio</th></tr></thead>
                  <tbody>
                    ${vg.items.map((v) => `
                      <tr>
                        <td>
                          <div class="jp">${esc(v.jp)} <span class="kanji-inline">(${esc(v.kanji)})</span></div>
                          <div class="romaji">${esc(v.romaji)}</div>
                        </td>
                        <td><span class="group-badge">${esc(v.group)}</span></td>
                        <td class="jp">${esc(v.nai)}</td>
                        <td>${esc(v.arti)}</td>
                        <td>${ttsBtnHtml(v.jp)}</td>
                      </tr>
                    `).join("")}
                  </tbody>
                </table>
              </div>
            </div>
          `).join("")}
        </div>
      `;
    } else {
      grammarHtml = ch.grammar.map((g) => `
        <article class="grammar-card">
          <span class="grammar-num">${esc(g.num)}</span>
          <h3 class="grammar-title">${esc(g.title)}</h3>
          <div class="formula-box">${esc(g.formula).replace(/\n/g, "<br>")}</div>
          <p class="grammar-explain">${esc(g.explain)}</p>
          ${renderExamples(g.examples)}
          <div class="trap-note"><strong>Catatan Jebakan:</strong> ${esc(g.trap)}</div>
        </article>
      `).join("");

      const fullKotoba = Array.isArray(KOTOBA_BY_BAB[ch.num]) && KOTOBA_BY_BAB[ch.num].length > 0
        ? KOTOBA_BY_BAB[ch.num]
        : (ch.vocab || []).map((v, idx) => ({ id: `v${ch.num}_${idx}`, kana: v.jp, kanji: "", romaji: v.romaji, arti: v.arti }));

      vocabHtml = `
        <div class="kotoba-search-row">
          <input type="search" class="profile-input" id="chapterKotobaSearch" placeholder="Cari kosakata Bab ${ch.num} (kana / kanji / romaji / arti)..." style="max-width: 340px;">
          <div style="display:flex; gap:8px; flex-wrap:wrap;">
            <button type="button" class="btn-secondary" id="btnChapterKotobaFlash">
              🃏 Flashcard Kotoba (${fullKotoba.length})
            </button>
            <button type="button" class="btn-primary" id="btnChapterKotobaFinal">
              🏆 Kuis Akhir Kotoba Bab ${ch.num} →
            </button>
          </div>
        </div>
        <div class="table-wrap">
          <table class="vocab-table">
            <thead><tr><th>Kana &amp; Kanji</th><th>Romaji</th><th>Arti Indonesia</th><th>Audio</th></tr></thead>
            <tbody id="chapterKotobaTbody">
              ${fullKotoba.map((v) => `
                <tr>
                  <td>
                    <div class="jp">${v.emoji ? `<span class="kotoba-emoji-inline" aria-hidden="true">${v.emoji}</span>` : ""}${esc(v.kana)} ${v.kanji ? `<span class="kanji-inline">(${esc(v.kanji)})</span>` : ""}</div>
                  </td>
                  <td><div class="romaji">${esc(v.romaji)}</div></td>
                  <td>${esc(v.arti)}</td>
                  <td>${ttsBtnHtml(v.kana)}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      `;
    }

    const chKotobaCount = Array.isArray(KOTOBA_BY_BAB[ch.num]) ? KOTOBA_BY_BAB[ch.num].length : (ch.vocab || []).length;

    body.innerHTML = `
      <section class="inline-cheatsheet">
        <div class="inline-cheatsheet-head">
          <div>
            <p class="eyebrow">CHEAT SHEET KHUSUS BAB ${ch.num}</p>
            <h2 class="inline-cheatsheet-title">${esc(ch.cheatSheet.title)}</h2>
          </div>
        </div>
        ${buildCheatSheetTablesHtml(ch.cheatSheet)}
      </section>

      ${!teman ? `
        <section class="bug-callout ${ZONE_META[ch.zone].callout}">
          <div class="bug-callout-title">Catatan Hasil Tes 100 Soal di Bab ${ch.num}</div>
          <ul class="bug-list">${bugsHtml}</ul>
        </section>
      ` : ""}

      ${extraLabHtml}

      <section class="study-section">
        <h2 class="study-section-title">Penjelasan Tata Bahasa Lengkap Bab ${ch.num}</h2>
        <div class="grammar-stack">${grammarHtml}</div>
      </section>

      <section class="study-section">
        <h2 class="study-section-title">Kosakata Lengkap Bab ${ch.num} (Kotoba · ${chKotobaCount} Kata)</h2>
        ${ch.isMergedBab17 ? `
          <div style="margin-bottom: 12px; display:flex; gap:8px; flex-wrap:wrap;">
            <button type="button" class="btn-secondary" id="btnChapterKotobaFlash">
              🃏 Flashcard Kotoba Bab 17 (${chKotobaCount} Kata)
            </button>
            <button type="button" class="btn-primary" id="btnChapterKotobaFinal">
              🏆 Kuis Akhir Kotoba Bab 17 →
            </button>
          </div>
        ` : ""}
        ${vocabHtml}
      </section>

      <div class="study-footer-cta">
        <div>
          <h3>Siap latihan murni Bab ${ch.num}?</h3>
          <p style="font-size: 14px; color: var(--color-ink-muted); margin-top: 4px;">
            ${quizFooterText}
          </p>
        </div>
        <button type="button" class="btn-primary" id="btnGoChapterQuiz">
          Mulai Kuis Bab ${ch.num} (${quizButtonLabel}) →
        </button>
      </div>
    `;

    if (ch.isMergedBab17) {
      renderBab17Lab(ch);
    }

    const btnFlash = document.getElementById("btnChapterKotobaFlash");
    if (btnFlash) {
      btnFlash.addEventListener("click", () => openKotobaFlashcard(String(ch.num), "flip"));
    }
    const btnKotobaFinal = document.getElementById("btnChapterKotobaFinal");
    if (btnKotobaFinal) {
      btnKotobaFinal.addEventListener("click", () => openKotobaFlashcard(String(ch.num), "final"));
    }
    const chSearch = document.getElementById("chapterKotobaSearch");
    if (chSearch) {
      chSearch.addEventListener("input", () => {
        const q = chSearch.value.trim().toLowerCase();
        const fullList = KOTOBA_BY_BAB[ch.num] || [];
        const filtered = q
          ? fullList.filter((v) =>
              v.kana.toLowerCase().includes(q) ||
              (v.kanji || "").toLowerCase().includes(q) ||
              v.romaji.toLowerCase().includes(q) ||
              v.arti.toLowerCase().includes(q)
            )
          : fullList;
        const tbody = document.getElementById("chapterKotobaTbody");
        if (tbody) {
          tbody.innerHTML = filtered.map((v) => `
            <tr>
              <td><div class="jp">${v.emoji ? `<span class="kotoba-emoji-inline" aria-hidden="true">${v.emoji}</span>` : ""}${esc(v.kana)} ${v.kanji ? `<span class="kanji-inline">(${esc(v.kanji)})</span>` : ""}</div></td>
              <td><div class="romaji">${esc(v.romaji)}</div></td>
              <td>${esc(v.arti)}</td>
              <td>${ttsBtnHtml(v.kana)}</td>
            </tr>
          `).join("") || `<tr><td colspan="4" style="text-align:center; color:var(--color-ink-subtle);">Tidak ada kata yang cocok dengan "${esc(q)}".</td></tr>`;
        }
      });
    }

    document.getElementById("btnGoChapterQuiz").addEventListener("click", () => {
      state.activeTab = "kuis";
      renderChapterView();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  function renderBab17Lab(ch) {
    const chipsEl = document.getElementById("labChips");
    const stageEl = document.getElementById("labStage");
    if (!chipsEl || !stageEl) return;

    chipsEl.innerHTML = ch.conjugationLab.map((item, idx) => `
      <button type="button" class="lab-chip ${idx === state.labIndex ? "is-active" : ""}" data-lab-idx="${idx}">
        <span class="jp">${esc(item.masu)}</span>
        <span class="lab-chip-arti">${esc(item.arti)}</span>
      </button>
    `).join("");

    chipsEl.querySelectorAll(".lab-chip").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.labIndex = Number(btn.dataset.labIdx);
        renderBab17Lab(ch);
      });
    });

    const cur = ch.conjugationLab[state.labIndex];
    const naiStem = cur.nai.slice(0, -1);
    const naiStemRomaji = cur.naiRomaji.slice(0, -1);

    stageEl.innerHTML = `
      <div class="jp-audio-row-center">
        <div>
          <span class="group-badge">Kelompok ${esc(cur.group)}</span>
          <h3 class="lab-word"><span class="jp">${esc(cur.masu)}</span> <span class="romaji">(${esc(cur.romaji)})</span> — ${esc(cur.arti)}</h3>
        </div>
        ${ttsBtnHtml(cur.masu)}
      </div>

      <div class="lab-pipeline">
        <div class="pipe-step">
          <span class="pipe-label">1. Bentuk ます</span>
          <div class="jp-audio-row-center">
            <strong class="jp">${esc(cur.masu)}</strong>
            ${ttsBtnHtml(cur.masu)}
          </div>
        </div>
        <span class="pipe-arrow" aria-hidden="true">→</span>
        <div class="pipe-step pipe-step-accent">
          <span class="pipe-label">2. Perubahan</span>
          <strong>${esc(cur.changeFrom)} → ${esc(cur.changeTo)}</strong>
        </div>
        <span class="pipe-arrow" aria-hidden="true">→</span>
        <div class="pipe-step pipe-step-result">
          <span class="pipe-label">3. Bentuk -Nai</span>
          <div class="jp-audio-row-center">
            <strong class="jp">${esc(cur.nai)}</strong>
            ${ttsBtnHtml(cur.nai)}
          </div>
          <span class="romaji">${esc(cur.naiRomaji)}</span>
        </div>
      </div>

      <p class="lab-rule"><strong>Aturan:</strong> ${esc(cur.rule)}</p>

      <div class="lab-derived-grid">
        <div class="derived-box">
          <div class="jp-audio-row-center">
            <span class="derived-label">Tolong jangan ~</span>
            ${ttsBtnHtml(`${cur.nai}で ください`)}
          </div>
          <div class="jp">${esc(cur.nai)}で ください</div>
          <div class="romaji">${esc(cur.naiRomaji)}de kudasai</div>
        </div>
        <div class="derived-box">
          <div class="jp-audio-row-center">
            <span class="derived-label">HARUS ~ (coret い)</span>
            ${ttsBtnHtml(`${naiStem}ければ なりません`)}
          </div>
          <div class="jp">${esc(naiStem)}ければ なりません</div>
          <div class="romaji">${esc(naiStemRomaji)}kereba narimasen</div>
        </div>
        <div class="derived-box">
          <div class="jp-audio-row-center">
            <span class="derived-label">TIDAK PERLU ~ (coret い)</span>
            ${ttsBtnHtml(`${naiStem}くても いいです`)}
          </div>
          <div class="jp">${esc(naiStem)}くても いいです</div>
          <div class="romaji">${esc(naiStemRomaji)}kute mo ii desu</div>
        </div>
      </div>

      <div class="trap-note" style="margin-top: 12px;"><strong>Tips:</strong> ${esc(cur.trap)}</div>
    `;
  }

  // ===== MODUL HIRAGANA & KATAKANA INTERAKTIF =====
  function startKanaQuiz(setKey) {
    const chosenSet = setKey || "all";
    state.kanaQuizSet = chosenSet;
    const pool = chosenSet === "all"
      ? KANA_DATA.questions
      : KANA_DATA.questions.filter((q) => q.set === chosenSet);
    const labelMap = {
      all: `Semua ${pool.length} Soal Kana`,
      hiragana: `Kuis Hiragana (${pool.length} Soal)`,
      katakana: `Kuis Katakana (${pool.length} Soal)`,
      kembar: `Kuis Huruf Kembar (${pool.length} Soal)`,
      kata: `Kuis Baca Kata N5 (${pool.length} Soal)`
    };
    state.activeKanaQuizObj = {
      num: "Kana",
      isFinalExam: true,
      isKanaQuiz: true,
      kanaSet: chosenSet,
      title: labelMap[chosenSet] || "Kuis Kana",
      questions: pool
    };
    resetQuiz(pool.map((_, i) => i), state.activeKanaQuizObj.title, false);
  }

  function openKana(subTab) {
    stopKaiwaPlayback();
    state.view = "kana";
    state.selectedNum = null;
    state.kanaTab = subTab || "hiragana";
    state.activeTab = state.kanaTab === "kuis" ? "kuis" : "materi";
    if (state.kanaTab === "hiragana") {
      state.selectedKana = KANA_DATA.hiraganaRows[0] && KANA_DATA.hiraganaRows[0].cells[0];
    } else if (state.kanaTab === "katakana") {
      state.selectedKana = KANA_DATA.katakanaRows[0] && KANA_DATA.katakanaRows[0].cells[0];
    } else if (state.kanaTab === "kuis") {
      startKanaQuiz(state.kanaQuizSet || "all");
    }
    updateCheatButtonLabel();
    renderSidebar();
    syncMobileNav();
    renderKanaView();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderKanaView() {
    const ws = document.getElementById("workspace");
    const savedAll = activeProfile().kana && activeProfile().kana.all;

    ws.innerHTML = `
      <section class="chapter-header">
        <div class="chapter-header-top">
          <span class="zone-pill zone-green">MODUL KANA DASAR (五十音 · 濁音 · 拗音 · 促音 · 長音)</span>
          <span class="zone-pill zone-neutral">46 Hiragana · 46 Katakana · ${KANA_DATA.questions.length} Soal Kuis</span>
          ${savedAll ? `<span class="zone-pill zone-green">Skor Kana: ${savedAll.bestPct}%</span>` : ""}
        </div>
        <h1 class="page-title">${esc(KANA_DATA.title)}</h1>
        <p class="page-lead">${esc(KANA_DATA.subtitle)}</p>

        <div class="mode-tabs" role="tablist" aria-label="Tab modul Kana">
          <button type="button" class="mode-tab ${state.kanaTab === "hiragana" ? "is-active" : ""}" data-ktab="hiragana">あ Hiragana (46)</button>
          <button type="button" class="mode-tab ${state.kanaTab === "katakana" ? "is-active" : ""}" data-ktab="katakana">ア Katakana (46)</button>
          <button type="button" class="mode-tab ${state.kanaTab === "aturan" ? "is-active" : ""}" data-ktab="aturan">゛ Aturan Bunyi (っ・ー・Yōon)</button>
          <button type="button" class="mode-tab ${state.kanaTab === "kembar" ? "is-active" : ""}" data-ktab="kembar">👀 Huruf Kembar (シ/ツ・ソ/ン)</button>
          <button type="button" class="mode-tab ${state.kanaTab === "kuis" ? "is-active" : ""}" data-ktab="kuis">✍️ Kuis Kana (${KANA_DATA.questions.length} Soal)</button>
        </div>
      </section>

      <div id="chapterBody"></div>
    `;

    ws.querySelectorAll("[data-ktab]").forEach((btn) => {
      btn.addEventListener("click", () => openKana(btn.dataset.ktab));
    });

    const body = document.getElementById("chapterBody");
    if (state.kanaTab === "hiragana" || state.kanaTab === "katakana") {
      renderKanaChartBody(body, state.kanaTab === "hiragana" ? KANA_DATA.hiraganaRows : KANA_DATA.katakanaRows);
    } else if (state.kanaTab === "aturan") {
      renderKanaRulesBody(body);
    } else if (state.kanaTab === "kembar") {
      renderKanaLookalikeBody(body);
    } else {
      if (!state.activeKanaQuizObj) startKanaQuiz(state.kanaQuizSet || "all");
      renderQuizBody(state.activeKanaQuizObj);
    }
  }

  function renderKanaChartBody(body, rows) {
    const flatCells = rows.flatMap((r) => r.cells).filter(Boolean);
    const cur = state.selectedKana && flatCells.some((c) => c.k === state.selectedKana.k)
      ? state.selectedKana
      : flatCells[0];
    state.selectedKana = cur;

    body.innerHTML = `
      <section class="kana-spotlight" id="kanaSpotlight">
        ${cur ? `
          <div class="kana-spot-left">
            <div class="kana-spot-glyph">${esc(cur.k)}</div>
            <div class="kana-spot-info">
              <div class="kana-spot-romaji">Romaji: "${esc(cur.r)}"</div>
              <div class="kana-spot-word">
                Contoh kata: <strong class="jp">${esc(cur.w)}</strong>
                <span class="romaji">(${esc(cur.wr)})</span> — ${esc(cur.wa)}
              </div>
            </div>
          </div>
          <div class="kana-spot-actions">
            <button type="button" class="btn-secondary" data-speak="${esc(cur.k)}">🔊 Bunyi Huruf</button>
            <button type="button" class="btn-primary" data-speak="${esc(cur.w)}">🔊 Bunyi Kata (${esc(cur.w)})</button>
          </div>
        ` : ""}
      </section>

      <div class="kana-col-heads" aria-hidden="true">
        <span>a</span><span>i</span><span>u</span><span>e</span><span>o</span>
      </div>

      <div class="kana-grid-rows">
        ${rows.map((rowObj) => `
          <div class="kana-grid" role="group" aria-label="${esc(rowObj.row)}">
            ${rowObj.cells.map((c) => {
              if (!c) return `<div class="kana-cell-empty" aria-hidden="true"></div>`;
              const sel = cur && cur.k === c.k;
              return `
                <button type="button" class="kana-cell ${sel ? "is-selected" : ""}" data-kana-char="${esc(c.k)}">
                  <span class="kana-char">${esc(c.k)}</span>
                  <span class="kana-rom">${esc(c.r)}</span>
                  <span class="kana-word-mini">${esc(c.w)}</span>
                </button>
              `;
            }).join("")}
          </div>
        `).join("")}
      </div>

      <div class="study-footer-cta">
        <div>
          <h3>Sudah kenal 46 huruf ${state.kanaTab === "hiragana" ? "Hiragana" : "Katakana"}?</h3>
          <p style="font-size: 14px; color: var(--color-ink-muted); margin-top: 4px;">
            Langsung uji dengan Kuis Huruf &amp; Kata (tanpa batas waktu, skor tersimpan otomatis)!
          </p>
        </div>
        <button type="button" class="btn-primary" id="btnStartKanaFromChart">
          Mulai Kuis ${state.kanaTab === "hiragana" ? "Hiragana" : "Katakana"} →
        </button>
      </div>
    `;

    body.querySelectorAll("[data-kana-char]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const found = flatCells.find((c) => c.k === btn.dataset.kanaChar);
        if (found) {
          state.selectedKana = found;
          speakJapanese(found.k, btn);
          renderKanaChartBody(body, rows);
        }
      });
    });
    document.getElementById("btnStartKanaFromChart").addEventListener("click", () => {
      state.kanaQuizSet = state.kanaTab === "hiragana" ? "hiragana" : "katakana";
      openKana("kuis");
    });
  }

  function renderKanaRulesBody(body) {
    body.innerHTML = `
      <div class="grammar-stack" style="margin-top: 20px;">
        ${KANA_DATA.specialRules.map((sec) => `
          <article class="grammar-card">
            <h2 class="grammar-title">${esc(sec.title)}</h2>
            <p class="grammar-explain">${esc(sec.desc)}</p>
            <div class="table-wrap">
              <table class="vocab-table">
                <thead><tr><th>Deret Huruf</th><th>Bacaan Romaji</th><th>Contoh Kata Wajib</th><th>Audio</th></tr></thead>
                <tbody>
                  ${sec.rows.map((r) => `
                    <tr>
                      <td class="jp">${esc(r.k)}</td>
                      <td><span class="romaji">${esc(r.r)}</span></td>
                      <td>${esc(r.ex)}</td>
                      <td>${ttsBtnHtml(r.ex)}</td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>
            <div class="trap-note">${esc(sec.note)}</div>
          </article>
        `).join("")}
      </div>
    `;
  }

  function renderKanaLookalikeBody(body) {
    body.innerHTML = `
      <div class="cheatsheet-takeaway" style="margin-top: 20px;">
        💡 Trik Anti-Ketukar: Fokus pada <strong>arah tarikan titik/garis</strong> dan ada-tidaknya <strong>simpul melingkar di ujung</strong>. Klik kata contoh untuk mendengar pelafalannya!
      </div>
      <div class="lookalike-grid">
        ${KANA_DATA.lookalikes.map((item) => `
          <article class="lookalike-card">
            <div class="lookalike-top">
              <span class="lookalike-pair-big">${esc(item.pair)}</span>
              <span class="lookalike-names">${esc(item.names)}</span>
            </div>
            <div class="lookalike-examples">
              <button type="button" class="lookalike-ex-pill" data-speak="${esc(cleanJpSpeech(item.wordA))}">
                🔊 <span class="jp" style="font-size:13.5px;">${esc(item.wordA)}</span>
              </button>
              <button type="button" class="lookalike-ex-pill" data-speak="${esc(cleanJpSpeech(item.wordB))}">
                🔊 <span class="jp" style="font-size:13.5px;">${esc(item.wordB)}</span>
              </button>
            </div>
            <p class="lookalike-tip">${esc(item.tip)}</p>
          </article>
        `).join("")}
      </div>
      <div class="study-footer-cta">
        <div>
          <h3>Tes ketajaman mata membaca Huruf Kembar!</h3>
          <p style="font-size: 14px; color: var(--color-ink-muted); margin-top: 4px;">
            10 soal khusus membedakan シ vs ツ, ソ vs ン, ぬ vs め, わ vs れ vs ね, る vs ろ.
          </p>
        </div>
        <button type="button" class="btn-primary" id="btnStartKembarQuiz">
          Latihan 10 Soal Huruf Kembar →
        </button>
      </div>
    `;
    document.getElementById("btnStartKembarQuiz").addEventListener("click", () => {
      state.kanaQuizSet = "kembar";
      openKana("kuis");
    });
  }

  // ===== KOTOBA FLASHCARD, TES HAFALAN KETIK, & KUIS AKHIR KOTOBA PER BAB (1.174 KATA) =====
  function shuffleCopy(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function getKotobaPool(scope) {
    const prof = activeProfile();
    ensureProfileKotoba(prof);
    const all = getAllKotoba();
    if (scope === "all") return shuffleCopy(all);
    if (scope === "review") {
      const revSet = new Set(prof.kotoba.reviewIds);
      return shuffleCopy(all.filter((w) => revSet.has(w.id)));
    }
    if (/^\d+-\d+$/.test(scope)) {
      const [a, b] = scope.split("-").map(Number);
      return shuffleCopy(all.filter((w) => w.bab >= a && w.bab <= b));
    }
    const bNum = Number(scope) || 1;
    return shuffleCopy(KOTOBA_BY_BAB[bNum] || all.slice(0, 40));
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
        forms.add(c.replace(/[\s]+/g, ""));
      }
    };
    const addVariants = (raw) => {
      if (!raw) return;
      const parts = String(raw).split(/[／/]/);
      parts.concat([String(raw)]).forEach((p) => {
        // 1. Base form without bracketed/parenthetical metadata
        pushCleaned(stripKotobaMeta(p));
        // 2. Unwrapped optional square brackets, e.g. ［お］みやげ -> おみやげ, [o] miyage -> o miyage / omiyage
        const unwrapped = p
          .replace(/\([^\)]*\)/g, "")
          .replace(/（[^）]*）/g, "")
          .replace(/[\[\]［］]/g, "");
        pushCleaned(unwrapped);
        // 3. Synonym inside parentheses, e.g. あの ひと（あの かた） -> あの かた, トイレ（おてあらい） -> おてあらい
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

  function renderKotobaEmojiHtml(card, cls) {
    if (!card || !card.emoji || state.kotobaEmojiSize === "off") return "";
    const sizeCls = cls || (state.kotobaEmojiSize === "large" ? "fc-emoji fc-emoji-lg" : "fc-emoji fc-emoji-md");
    return `<div class="${sizeCls}" aria-hidden="true">${card.emoji}</div>`;
  }

  function getActiveKotobaQuestionKind() {
    if (state.kotobaMode === "recall") return "recall";
    if (state.kotobaMode === "quiz") return state.kotobaDir === "emoji" ? "emoji" : "mcq";
    if (state.kotobaMode === "final") {
      return state.kotobaFinalKinds[state.kotobaIdx] || "mcq";
    }
    return "flip";
  }

  function prepareKotobaMcqOptions() {
    const card = state.kotobaDeck[state.kotobaIdx];
    if (!card) return;
    const sameBab = (KOTOBA_BY_BAB[card.bab] || []).filter((w) => w.id !== card.id && w.arti !== card.arti);
    const wider = getAllKotoba().filter((w) => w.id !== card.id && w.arti !== card.arti);
    const distractors = [];
    const seenArti = new Set([card.arti]);
    for (const cand of shuffleCopy(sameBab).concat(shuffleCopy(wider))) {
      if (distractors.length >= 3) break;
      if (!seenArti.has(cand.arti)) {
        seenArti.add(cand.arti);
        distractors.push(cand);
      }
    }
    const four = shuffleCopy([card, ...distractors]);
    state.kotobaMcqOptions = four;
    state.kotobaMcqCorrectIdx = four.findIndex((x) => x.id === card.id);
    state.kotobaMcqPicked = null;
  }

  function getActiveKotobaBatchSize(scope) {
    const key = String(scope || state.kotobaScope || "1");
    if (state.kotobaBatchByScope && ["5", "10", "15", "all"].includes(state.kotobaBatchByScope[key])) {
      return state.kotobaBatchByScope[key];
    }
    return sanitizeKotobaBatchSize(state.kotobaBatchSize);
  }

  function sliceKotobaBatch() {
    const pool = state.kotobaFullPool;
    const activeBatch = getActiveKotobaBatchSize(state.kotobaScope);
    if (activeBatch === "all" || state.kotobaIsWrongRetry) {
      return pool;
    }
    const size = Math.max(5, Number(activeBatch) || 5);
    const start = state.kotobaBatchOffset >= pool.length ? 0 : state.kotobaBatchOffset;
    state.kotobaBatchOffset = start;
    return pool.slice(start, start + size);
  }

  function openKotobaFlashcard(scope, mode, customIds) {
    stopKaiwaPlayback();
    state.view = "kotoba";
    state.selectedNum = null;
    if (scope) state.kotobaScope = String(scope);
    if (mode) state.kotobaMode = mode;

    const prof = activeProfile();
    ensureProfileKotoba(prof);
    const masteredSet = new Set(prof.kotoba.masteredIds);

    const all = getAllKotoba();
    let pool;
    if (Array.isArray(customIds) && customIds.length > 0) {
      const idSet = new Set(customIds);
      pool = shuffleCopy(all.filter((w) => idSet.has(w.id)));
      state.kotobaIsWrongRetry = true;
    } else {
      pool = getKotobaPool(state.kotobaScope);
      state.kotobaIsWrongRetry = false;
    }

    if (state.kotobaMode === "quiz" && state.kotobaDir === "emoji" && !state.kotobaIsWrongRetry) {
      const emojiCards = pool.filter((w) => !!w.emoji);
      if (emojiCards.length >= 4) pool = emojiCards;
    } else if (state.kotobaMode === "recall" && !state.kotobaIsWrongRetry) {
      const recallable = pool.filter((w) => !(/[。？?]/.test(w.kana) && /[～~]/.test(w.kana)));
      if (recallable.length >= 5) pool = recallable;
    }

    if (state.kotobaMode === "flip" && !state.kotobaIsWrongRetry) {
      const unmastered = pool.filter((w) => !masteredSet.has(w.id));
      const mastered = pool.filter((w) => masteredSet.has(w.id));
      pool = [...unmastered, ...mastered];
    }

    state.kotobaFullPool = pool;
    state.kotobaBatchOffset = 0;
    state.kotobaFlippedMap = {};
    state.kotobaGridPage = 0;
    state.kotobaGridFilter = "all";
    state.kotobaSearch = "";

    if (state.kotobaMode === "flip") {
      state.kotobaDeck = sliceKotobaBatch();
    } else {
      const maxQ = clampKotobaQuizCount(state.kotobaQuizCount);
      state.kotobaQuizCount = maxQ;
      state.kotobaDeck = state.kotobaIsWrongRetry ? pool : pool.slice(0, Math.min(pool.length, maxQ));
    }

    state.kotobaFinalKinds = state.kotobaDeck.map((c, idx) => {
      const cleanForRecall = !/[。？?～~－]/.test(c.kana);
      if (idx % 3 === 2 && cleanForRecall) return "recall";
      if (c.emoji && state.kotobaEmojiSize !== "off" && idx % 3 === 1) return "emoji";
      return "mcq";
    });

    state.kotobaIdx = 0;
    state.kotobaFlipped = false;
    state.kotobaStreak = 0;
    state.kotobaSessionKnown = 0;
    state.kotobaSessionReview = 0;
    state.kotobaSessionWrongIds = [];
    state.kotobaRequeueCounts = {};
    state.kotobaMcqPicked = null;
    state.kotobaRecallInput = "";
    state.kotobaRecallAnswered = false;
    state.kotobaRecallOk = false;

    if (state.kotobaDeck.length > 0 && (state.kotobaMode === "quiz" || state.kotobaMode === "final")) {
      prepareKotobaMcqOptions();
    }
    updateCheatButtonLabel();
    renderSidebar();
    syncMobileNav();
    renderKotobaView();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function recordKotobaWrongBank(cardId, ok) {
    const prof = activeProfile();
    ensureProfileKotoba(prof);
    const key = state.kotobaScope;
    const list = Array.isArray(prof.kotoba.wrongIdsByScope[key]) ? [...prof.kotoba.wrongIdsByScope[key]] : [];
    const idx = list.indexOf(cardId);
    if (!ok && idx === -1) {
      list.push(cardId);
      prof.kotoba.wrongIdsByScope[key] = list;
    } else if (ok && idx !== -1) {
      list.splice(idx, 1);
      if (list.length > 0) prof.kotoba.wrongIdsByScope[key] = list;
      else delete prof.kotoba.wrongIdsByScope[key];
    }
  }

  function saveKotobaChapterQuizScore(correct, total) {
    if (state.kotobaIsWrongRetry || total <= 0) return;
    if (!/^\d+$/.test(state.kotobaScope)) return;
    if (state.kotobaMode === "flip") return;
    const bab = Number(state.kotobaScope);
    const prof = activeProfile();
    ensureProfileKotoba(prof);
    const pct = Math.round((correct / total) * 100);
    const prev = prof.kotoba.chapterScores[bab];
    prof.kotoba.chapterScores[bab] = {
      correct: !prev || pct >= prev.bestPct ? correct : prev.correct,
      total: !prev || pct >= prev.bestPct ? total : prev.total,
      bestPct: prev ? Math.max(prev.bestPct, pct) : pct,
      attempts: (prev && prev.attempts ? prev.attempts : 0) + 1
    };
    persistProfiles();
    renderSidebar();
  }

  function markKotobaCard(known) {
    const card = state.kotobaDeck[state.kotobaIdx];
    if (!card) return;
    const prof = activeProfile();
    ensureProfileKotoba(prof);
    const mSet = new Set(prof.kotoba.masteredIds);
    const rSet = new Set(prof.kotoba.reviewIds);
    prof.kotoba.totalPlayed += 1;

    if (known) {
      mSet.add(card.id);
      rSet.delete(card.id);
      state.kotobaSessionKnown += 1;
      state.kotobaStreak += 1;
      if (state.kotobaStreak > prof.kotoba.bestStreak) {
        prof.kotoba.bestStreak = state.kotobaStreak;
      }
    } else {
      rSet.add(card.id);
      state.kotobaSessionReview += 1;
      state.kotobaStreak = 0;
      if (!state.kotobaSessionWrongIds.includes(card.id)) {
        state.kotobaSessionWrongIds.push(card.id);
      }
      if (state.kotobaMode === "flip" && state.kotobaAutoRequeue) {
        const cnt = state.kotobaRequeueCounts[card.id] || 0;
        if (cnt < 2) {
          state.kotobaRequeueCounts[card.id] = cnt + 1;
          const insertPos = Math.min(state.kotobaDeck.length, state.kotobaIdx + 4);
          state.kotobaDeck.splice(insertPos, 0, card);
        }
      }
    }

    if (state.kotobaMode !== "flip") {
      recordKotobaWrongBank(card.id, known);
    }

    prof.kotoba.masteredIds = [...mSet];
    prof.kotoba.reviewIds = [...rSet];
    persistProfiles();

    state.kotobaIdx += 1;
    state.kotobaFlipped = false;
    state.kotobaMcqPicked = null;
    state.kotobaRecallInput = "";
    state.kotobaRecallAnswered = false;
    state.kotobaRecallOk = false;

    if (state.kotobaIdx >= state.kotobaDeck.length) {
      saveKotobaChapterQuizScore(state.kotobaSessionKnown, state.kotobaSessionKnown + state.kotobaSessionReview);
    } else if (state.kotobaMode === "quiz" || state.kotobaMode === "final") {
      prepareKotobaMcqOptions();
    }

    renderKotobaView();
    if (state.kotobaAutoAudio && state.kotobaMode === "flip" && state.kotobaDeck[state.kotobaIdx]) {
      speakJapanese(state.kotobaDeck[state.kotobaIdx].kana);
    }
  }

  function submitKotobaRecall(raw) {
    if (state.kotobaRecallAnswered) return;
    const cleaned = norm(raw);
    if (!cleaned) return;
    const card = state.kotobaDeck[state.kotobaIdx];
    const accepted = getAcceptedKotobaForms(card);
    const cleanedNoSpace = cleaned.replace(/[\s-]+/g, "");
    const ok = accepted.some((a) => a === cleaned || a === cleanedNoSpace);
    state.kotobaRecallInput = raw;
    state.kotobaRecallAnswered = true;
    state.kotobaRecallOk = ok;
    if (state.kotobaAutoAudio && card) speakJapanese(card.kana);
    renderKotobaView();
  }

  function getFilteredKotobaFlipPool() {
    const prof = activeProfile();
    ensureProfileKotoba(prof);
    const masteredSet = new Set(prof.kotoba.masteredIds);
    const q = (state.kotobaSearch || "").trim().toLowerCase();
    return (state.kotobaFullPool || []).filter((w) => {
      if (state.kotobaGridFilter === "unmastered" && masteredSet.has(w.id)) return false;
      if (state.kotobaGridFilter === "mastered" && !masteredSet.has(w.id)) return false;
      if (q) {
        const hay = `${w.kana} ${w.kanji || ""} ${w.romaji || ""} ${w.arti || ""}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }

  function getKotobaGridPageInfo(filtered) {
    const activeBatch = getActiveKotobaBatchSize(state.kotobaScope);
    if (activeBatch === "all") {
      const perPage = filtered.length <= 80 ? Math.max(1, filtered.length) : 60;
      const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
      const page = Math.max(0, Math.min(totalPages - 1, state.kotobaGridPage || 0));
      state.kotobaGridPage = page;
      const start = page * perPage;
      return { activeBatch, perPage, page, totalPages, visible: filtered.slice(start, start + perPage) };
    }
    const perPage = Math.max(5, Number(activeBatch) || 5);
    const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
    const page = Math.max(0, Math.min(totalPages - 1, state.kotobaGridPage || 0));
    state.kotobaGridPage = page;
    const start = page * perPage;
    return { activeBatch, perPage, page, totalPages, visible: filtered.slice(start, start + perPage) };
  }

  function setKotobaCardStatus(cardId, known) {
    const prof = activeProfile();
    ensureProfileKotoba(prof);
    const mSet = new Set(prof.kotoba.masteredIds);
    const rSet = new Set(prof.kotoba.reviewIds);
    prof.kotoba.totalPlayed = (prof.kotoba.totalPlayed || 0) + 1;
    if (known) {
      mSet.add(cardId);
      rSet.delete(cardId);
      state.kotobaStreak += 1;
      if (state.kotobaStreak > prof.kotoba.bestStreak) prof.kotoba.bestStreak = state.kotobaStreak;
    } else {
      mSet.delete(cardId);
      rSet.add(cardId);
      state.kotobaStreak = 0;
    }
    prof.kotoba.masteredIds = [...mSet];
    prof.kotoba.reviewIds = [...rSet];
    persistProfiles();
    renderKotobaFlipGrid();
  }

  function renderKotobaFlipGrid() {
    const container = document.getElementById("kotobaGridContainer");
    if (!container) return;
    const prof = activeProfile();
    ensureProfileKotoba(prof);
    const masteredSet = new Set(prof.kotoba.masteredIds);
    const reviewSet = new Set(prof.kotoba.reviewIds);
    const pool = state.kotobaFullPool || [];
    const poolMasteredCount = pool.filter((w) => masteredSet.has(w.id)).length;
    const filtered = getFilteredKotobaFlipPool();
    const { activeBatch, perPage, page, totalPages, visible } = getKotobaGridPageInfo(filtered);

    const hudCountEl = document.getElementById("kotobaFlipProgressBadge");
    if (hudCountEl) {
      hudCountEl.textContent = `Hafal: ${poolMasteredCount}/${pool.length} kata · Tampil: ${visible.length} kartu`;
    }
    const barEl = document.getElementById("kotobaFlipProgressBar");
    if (barEl) {
      const pct = pool.length > 0 ? Math.round((poolMasteredCount / pool.length) * 100) : 0;
      barEl.style.width = `${pct}%`;
    }

    const frontIsJp = state.kotobaDir !== "id2jp";
    const showFrontRomaji = state.kotobaRomajiMode === "on";
    const showBackRomaji = state.kotobaRomajiMode !== "off";

    const waveAllDone = activeBatch !== "all" && visible.length > 0 && visible.every((w) => masteredSet.has(w.id));
    const waveBannerHtml = waveAllDone ? `
      <div class="kotoba-wave-banner">
        <span>🎉 Mantap! Semua <strong>${visible.length} kartu</strong> di kelompok ini sudah ditandai hafal.</span>
        ${page + 1 < totalPages
          ? `<button type="button" class="btn-primary" id="btnKotobaNextWaveBanner">⏭️ Lanjut ${Math.min(perPage, filtered.length - (page + 1) * perPage)} Kartu Berikutnya →</button>`
          : `<button type="button" class="btn-primary" id="btnKotobaDoneGoQuiz">🏆 Uji di Kuis Akhir Kotoba →</button>`}
      </div>
    ` : "";

    const cardsHtml = visible.length === 0 ? `
      <div class="result-card" style="margin-top: 14px;">
        <p class="eyebrow">TIDAK ADA KARTU</p>
        <div class="result-score" style="font-size:22px;">Belum ada kata yang cocok</div>
        <p class="result-msg">Ubah filter status di atas atau kosongkan kata pencarian.</p>
        <button type="button" class="btn-secondary" id="btnKotobaResetFilter">Tampilkan Semua Kartu</button>
      </div>
    ` : `
      <div class="kotoba-multi-grid">
        ${visible.map((w) => {
          const isFlipped = !!state.kotobaFlippedMap[w.id];
          const isMastered = masteredSet.has(w.id);
          const isReview = !isMastered && reviewSet.has(w.id);
          const emojiCls = state.kotobaEmojiSize === "large" ? "fc-emoji kotoba-card-emoji-lg" : "fc-emoji kotoba-card-emoji-md";
          const emojiHtml = w.emoji && state.kotobaEmojiSize !== "off" ? `<div class="${emojiCls}" aria-hidden="true">${w.emoji}</div>` : "";
          const badgeStatus = isMastered ? "✅ Hafal" : isReview ? "🔁 Ulang" : `Bab ${w.bab}`;
          return `
            <article class="kotoba-multi-card ${isFlipped ? "is-flipped" : ""} ${isMastered ? "is-mastered" : isReview ? "is-review" : ""}">
              <div class="kotoba-card-face" role="button" tabindex="0" data-kcard-flip="${esc(w.id)}" aria-pressed="${isFlipped}">
                <div class="kotoba-card-top">
                  <span class="kotoba-card-badge">${badgeStatus}</span>
                  <span>${isFlipped ? "JAWABAN" : (frontIsJp ? "🇯🇵→🇮🇩" : "🇮🇩→🇯🇵")}</span>
                </div>
                <div class="kotoba-card-body">
                  ${emojiHtml}
                  ${!isFlipped ? (
                    frontIsJp ? `
                      <div class="kotoba-card-jp">${esc(w.kana)}</div>
                      ${w.kanji ? `<div class="kotoba-card-kanji">${esc(w.kanji)}</div>` : ""}
                      ${showFrontRomaji ? `<div class="romaji">${esc(w.romaji)}</div>` : ""}
                      ${ttsBtnHtml(w.kana, "tts-btn-sm")}
                    ` : `
                      <div class="kotoba-card-arti">${esc(w.arti)}</div>
                    `
                  ) : `
                    <div class="kotoba-card-jp">${esc(w.kana)}</div>
                    ${w.kanji ? `<div class="kotoba-card-kanji">${esc(w.kanji)}</div>` : ""}
                    ${showBackRomaji ? `<div class="romaji">${esc(w.romaji)}</div>` : ""}
                    <div class="kotoba-card-arti">${esc(w.arti)}</div>
                    ${ttsBtnHtml(w.kana, "tts-btn-sm")}
                  `}
                </div>
                <div class="kotoba-card-hint">${isFlipped ? "Klik untuk tutup kembali" : "Klik kartu untuk flip"}</div>
              </div>
              <div class="kotoba-card-actions">
                <button type="button" class="kotoba-act-btn is-known ${isMastered ? "is-active" : ""}" data-kcard-known="${esc(w.id)}">✅ Sudah Hafal</button>
                <button type="button" class="kotoba-act-btn is-review ${isReview ? "is-active" : ""}" data-kcard-review="${esc(w.id)}">🔁 Belum</button>
              </div>
            </article>
          `;
        }).join("")}
      </div>
    `;

    const waveNavHtml = totalPages > 1 ? `
      <div class="kotoba-wave-nav">
        <button type="button" class="btn-secondary" id="btnKotobaPrevWave" ${page <= 0 ? "disabled" : ""}>← Sebelumnya</button>
        <span class="kotoba-wave-info">Gelombang <strong>${page + 1}</strong> / ${totalPages} (${filtered.length} kata)</span>
        <button type="button" class="btn-secondary" id="btnKotobaNextWave" ${page + 1 >= totalPages ? "disabled" : ""}>Berikutnya →</button>
      </div>
    ` : "";

    container.innerHTML = `${waveBannerHtml}${cardsHtml}${waveNavHtml}`;

    container.querySelectorAll("[data-kcard-flip]").forEach((el) => {
      const toggle = () => {
        const id = el.dataset.kcardFlip;
        state.kotobaFlippedMap[id] = !state.kotobaFlippedMap[id];
        if (state.kotobaAutoAudio && state.kotobaFlippedMap[id]) {
          const found = pool.find((x) => x.id === id);
          if (found) speakJapanese(found.kana);
        }
        renderKotobaFlipGrid();
      };
      el.addEventListener("click", toggle);
      el.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggle();
        }
      });
    });

    container.querySelectorAll("[data-kcard-known]").forEach((btn) => {
      btn.addEventListener("click", () => setKotobaCardStatus(btn.dataset.kcardKnown, true));
    });
    container.querySelectorAll("[data-kcard-review]").forEach((btn) => {
      btn.addEventListener("click", () => setKotobaCardStatus(btn.dataset.kcardReview, false));
    });

    const btnPrev = document.getElementById("btnKotobaPrevWave");
    if (btnPrev) btnPrev.addEventListener("click", () => { state.kotobaGridPage = Math.max(0, state.kotobaGridPage - 1); state.kotobaFlippedMap = {}; renderKotobaFlipGrid(); });
    const btnNext = document.getElementById("btnKotobaNextWave");
    if (btnNext) btnNext.addEventListener("click", () => { state.kotobaGridPage = Math.min(totalPages - 1, state.kotobaGridPage + 1); state.kotobaFlippedMap = {}; renderKotobaFlipGrid(); });
    const btnNextBanner = document.getElementById("btnKotobaNextWaveBanner");
    if (btnNextBanner) btnNextBanner.addEventListener("click", () => { state.kotobaGridPage = Math.min(totalPages - 1, state.kotobaGridPage + 1); state.kotobaFlippedMap = {}; renderKotobaFlipGrid(); });
    const btnDoneQuiz = document.getElementById("btnKotobaDoneGoQuiz");
    if (btnDoneQuiz) btnDoneQuiz.addEventListener("click", () => openKotobaFlashcard(state.kotobaScope, "final"));
    const btnResetFilter = document.getElementById("btnKotobaResetFilter");
    if (btnResetFilter) {
      btnResetFilter.addEventListener("click", () => {
        state.kotobaGridFilter = "all";
        state.kotobaSearch = "";
        state.kotobaGridPage = 0;
        renderKotobaView();
      });
    }
  }

  function renderKotobaView() {
    const ws = document.getElementById("workspace");
    const prof = activeProfile();
    ensureProfileKotoba(prof);
    const allCount = getAllKotoba().length;
    const deck = state.kotobaDeck;
    const total = deck.length;
    const cur = deck[state.kotobaIdx];
    const masteredSet = new Set(prof.kotoba.masteredIds);
    const isSingleBab = /^\d+$/.test(state.kotobaScope);
    const curBabNum = isSingleBab ? Number(state.kotobaScope) : null;
    const curBabScore = curBabNum ? prof.kotoba.chapterScores[curBabNum] : null;
    const savedWrongForScope = prof.kotoba.wrongIdsByScope[state.kotobaScope] || [];
    const romajiOffCls = state.kotobaRomajiMode === "off" ? "kotoba-romaji-off" : "";

    const scopeOptions = [
      `<option value="all" ${state.kotobaScope === "all" ? "selected" : ""}>Semua Bab 1–25 (${allCount} kata)</option>`,
      `<option value="1-5" ${state.kotobaScope === "1-5" ? "selected" : ""}>Bab 1–5 (Dasar)</option>`,
      `<option value="6-10" ${state.kotobaScope === "6-10" ? "selected" : ""}>Bab 6–10 (Aksi &amp; Sifat)</option>`,
      `<option value="11-15" ${state.kotobaScope === "11-15" ? "selected" : ""}>Bab 11–15 (Bentuk-て)</option>`,
      `<option value="16-20" ${state.kotobaScope === "16-20" ? "selected" : ""}>Bab 16–20 (-Nai &amp; Biasa)</option>`,
      `<option value="21-25" ${state.kotobaScope === "21-25" ? "selected" : ""}>Bab 21–25 (Kalimat Majemuk)</option>`,
      `<option value="review" ${state.kotobaScope === "review" ? "selected" : ""}>🔁 Belum Hafal Tersimpan (${prof.kotoba.reviewIds.length} kata)</option>`,
      ...Array.from({ length: 25 }, (_, i) => i + 1).map((b) => {
        const len = (KOTOBA_BY_BAB[b] || []).length;
        const sc = prof.kotoba.chapterScores[b];
        return `<option value="${b}" ${state.kotobaScope === String(b) ? "selected" : ""}>Bab ${b} (${len} kata${sc ? ` · ${sc.bestPct}%` : ""})</option>`;
      })
    ].join("");

    let stageHtml = "";
    if (total === 0 && state.kotobaFullPool.length === 0) {
      stageHtml = `
        <div class="result-card" style="margin-top: 20px;">
          <p class="eyebrow">DEK KOTOBA KOSONG</p>
          <div class="result-score" style="font-size:28px;">Belum ada kartu di dek ini!</div>
          <p class="result-msg">Pilih salah satu Bab (1–25) atau "Semua Bab" di atas untuk mulai belajar dan tes Kotoba.</p>
          <button type="button" class="btn-primary" id="btnKotobaStartBab1">Buka Kotoba Bab 1 →</button>
        </div>
      `;
    } else if (state.kotobaMode === "flip") {
      const pool = state.kotobaFullPool || [];
      const poolMasteredCount = pool.filter((w) => masteredSet.has(w.id)).length;
      const pct = pool.length > 0 ? Math.round((poolMasteredCount / pool.length) * 100) : 0;
      stageHtml = `
        <div class="kotoba-hud">
          <span id="kotobaFlipProgressBadge">Hafal: ${poolMasteredCount}/${pool.length} kata</span>
          <span class="streak-pill">🔥 Streak: ${state.kotobaStreak}</span>
        </div>
        <div class="progress-track" style="margin-top: 8px;">
          <div class="progress-fill" id="kotobaFlipProgressBar" style="width: ${pct}%"></div>
        </div>

        <div class="kotoba-grid-toolbar">
          <div class="kotoba-setting-pills">
            <button type="button" class="pill-btn" id="btnKotobaFlipAllOpen">👀 Buka Semua</button>
            <button type="button" class="pill-btn" id="btnKotobaFlipAllClose">🙈 Tutup Semua</button>
          </div>
          <div class="kotoba-setting-pills">
            <button type="button" class="filter-chip ${state.kotobaGridFilter === "all" ? "is-active" : ""}" data-kgrid-filter="all">Semua</button>
            <button type="button" class="filter-chip ${state.kotobaGridFilter === "unmastered" ? "is-active" : ""}" data-kgrid-filter="unmastered">Belum Hafal</button>
            <button type="button" class="filter-chip chip-green ${state.kotobaGridFilter === "mastered" ? "is-active" : ""}" data-kgrid-filter="mastered">Sudah Hafal</button>
          </div>
          <input type="search" class="kotoba-search-input" id="inpKotobaSearch" value="${esc(state.kotobaSearch)}" placeholder="🔍 Cari kana / romaji / arti..." aria-label="Cari kosakata">
        </div>

        <div id="kotobaGridContainer"></div>
      `;
    } else if (state.kotobaIdx >= total) {
      const sesTotal = state.kotobaSessionKnown + state.kotobaSessionReview;
      const pct = sesTotal > 0 ? Math.round((state.kotobaSessionKnown / sesTotal) * 100) : 100;
      const hasNextBatch = state.kotobaMode === "flip" && !state.kotobaIsWrongRetry && state.kotobaBatchSize !== "all" && (state.kotobaBatchOffset + total) < state.kotobaFullPool.length;
      const tuntasBanner = isSingleBab && state.kotobaMode !== "flip" && !state.kotobaIsWrongRetry
        ? (pct >= 80
          ? `<div class="cheatsheet-takeaway" style="margin-bottom:14px;">🏆 Selamat! Kuis Akhir Kotoba Bab ${curBabNum} <strong>TUNTAS (${pct}%)</strong> dan tersimpan di profil!</div>`
          : `<div class="cheatsheet-takeaway" style="margin-bottom:14px;">Skor Kuis Kotoba Bab ${curBabNum}: <strong>${pct}%</strong> (target tuntas ≥80%). Ulangi kata yang masih salah saja di bawah!</div>`)
        : "";

      stageHtml = `
        <div class="result-card" style="margin-top: 20px;">
          ${tuntasBanner}
          <p class="eyebrow">HASIL ${state.kotobaMode === "flip" ? "SESI FLASHCARD" : state.kotobaMode === "recall" ? "TES HAFALAN KETIK" : state.kotobaMode === "final" ? "KUIS AKHIR KOTOBA" : "KUIS KOTOBA"}</p>
          <div class="result-score">${state.kotobaSessionKnown} / ${sesTotal} <span class="result-pct">(${pct}%)</span></div>
          <p class="result-msg">
            Benar/Hafal: <strong>${state.kotobaSessionKnown} kata</strong> · Salah/Ulang: <strong>${state.kotobaSessionReview} kata</strong> · Rekor Streak: <strong>🔥 ${prof.kotoba.bestStreak}</strong>
          </p>
          <div class="result-actions">
            ${state.kotobaSessionWrongIds.length > 0 ? `
              <button type="button" class="btn-primary" id="btnKotobaRetrySessionWrong">
                🔁 Ulangi ${state.kotobaSessionWrongIds.length} Kata Salah Saja
              </button>
            ` : ""}
            <button type="button" class="btn-secondary" id="btnKotobaReplay">🔀 Main Dek Ini Lagi</button>
            ${savedWrongForScope.length > 0 ? `
              <button type="button" class="btn-secondary" id="btnKotobaDrillSavedWrong">
                📌 Latih ${savedWrongForScope.length} Salah Tersimpan
              </button>
            ` : ""}
          </div>
        </div>
      `;
    } else {
      const qKind = getActiveKotobaQuestionKind();
      const showPromptRomaji = state.kotobaRomajiMode === "on";
      const showOptionRomaji = state.kotobaRomajiMode !== "off";

      if (qKind === "recall") {
        // TES HAFALAN KETIK (RECALL MURNI!)
        stageHtml = `
          <div class="kotoba-hud">
            <span>Soal <strong>${state.kotobaIdx + 1}</strong> dari <strong>${total}</strong> (Bab ${cur.bab})</span>
            <span class="streak-pill">🔥 Streak: ${state.kotobaStreak}</span>
          </div>
          <div class="progress-track" style="margin-top: 8px; margin-bottom: 14px;">
            <div class="progress-fill" style="width: ${Math.round(((state.kotobaIdx + (state.kotobaRecallAnswered ? 1 : 0)) / total) * 100)}%"></div>
          </div>

          <div class="quiz-card">
            <div class="quiz-tag-row">
              <span class="quiz-type-badge">✍️ Tes Hafalan Ketik · Bab ${cur.bab}</span>
              ${ttsBtnHtml(cur.kana)}
            </div>
            ${renderKotobaEmojiHtml(cur, state.kotobaEmojiSize !== "off" ? "fc-quiz-emoji" : "")}
            <div class="quiz-prompt" style="font-family:var(--font-body);">${esc(cur.arti)}</div>
            <p class="quiz-sub">Ketik bahasa Jepangnya dari ingatan (boleh <strong>Romaji</strong> maupun <strong>Kana/Kanji</strong>):</p>

            <form class="input-quiz-form" id="kotobaRecallForm">
              <input
                type="text"
                class="quiz-text-input ${state.kotobaRecallAnswered ? (state.kotobaRecallOk ? "is-correct" : "is-wrong") : ""}"
                id="kotobaRecallInput"
                value="${esc(state.kotobaRecallInput)}"
                placeholder="Ketik Romaji atau Kana (mis. sensei / せんせい)"
                autocomplete="off"
                autocapitalize="off"
                autocorrect="off"
                spellcheck="false"
                enterkeyhint="done"
                ${state.kotobaRecallAnswered ? "disabled" : ""}
              >
              ${!state.kotobaRecallAnswered ? `<button type="submit" class="btn-primary">Cek Hafalan</button>` : ""}
            </form>

            ${state.kotobaRecallAnswered ? `
              <div class="feedback-box ${state.kotobaRecallOk ? "is-correct" : "is-wrong"}">
                <div class="feedback-title">${state.kotobaRecallOk ? "✓ Hafalan Tepat!" : "✕ Belum tepat — catat jawabannya:"}</div>
                <p class="feedback-explain">
                  ${cur.emoji && state.kotobaEmojiSize !== "off" ? `${cur.emoji} ` : ""}<strong class="jp">${esc(cur.kana)}</strong> ${cur.kanji ? `(${esc(cur.kanji)})` : ""} · <span class="romaji">${esc(cur.romaji)}</span> = <strong>${esc(cur.arti)}</strong>
                </p>
              </div>
              <div class="quiz-nav-row">
                <span class="kbd-hint">Tekan Enter untuk lanjut</span>
                <button type="button" class="btn-primary" id="btnNextKotobaRecall">
                  ${state.kotobaIdx + 1 < total ? "Soal Berikutnya →" : "Lihat Hasil Akhir →"}
                </button>
              </div>
            ` : ""}
          </div>
        `;
      } else {
        // MCQ or EMOJI GUESS
        const isEmojiMode = qKind === "emoji" && !!cur.emoji;
        const askJp = !isEmojiMode && state.kotobaDir !== "id2jp";
        const answered = state.kotobaMcqPicked !== null;
        const isRight = answered && state.kotobaMcqPicked === state.kotobaMcqCorrectIdx;
        stageHtml = `
          <div class="kotoba-hud">
            <span>Soal <strong>${state.kotobaIdx + 1}</strong> dari <strong>${total}</strong> (Bab ${cur.bab})</span>
            <span class="streak-pill">🔥 Streak: ${state.kotobaStreak}</span>
          </div>
          <div class="progress-track" style="margin-top: 8px; margin-bottom: 14px;">
            <div class="progress-fill" style="width: ${Math.round(((state.kotobaIdx + (answered ? 1 : 0)) / total) * 100)}%"></div>
          </div>

          <div class="quiz-card">
            <div class="quiz-tag-row">
              <span class="quiz-type-badge">${isEmojiMode ? `😀 Tebak dari Emot · Bab ${cur.bab}` : `${state.kotobaMode === "final" ? "🏆 Kuis Akhir Kotoba" : "⚡ Kuis Kotoba"} · Bab ${cur.bab}`}</span>
              ${askJp || isEmojiMode ? ttsBtnHtml(cur.kana) : ""}
            </div>

            ${isEmojiMode ? `
              <div class="fc-quiz-emoji" aria-hidden="true">${cur.emoji}</div>
              <div class="quiz-prompt" style="font-family:var(--font-body);">Apa bahasa Jepang untuk emot &amp; arti "${esc(cur.arti)}"?</div>
              <p class="quiz-sub">Pilih kata Jepang yang paling tepat (klik 🔊 untuk dengar audio petunjuk):</p>
            ` : askJp ? `
              ${renderKotobaEmojiHtml(cur, state.kotobaEmojiSize !== "off" ? "fc-quiz-emoji" : "")}
              <div class="quiz-prompt">${esc(cur.kana)} ${cur.kanji ? `(${esc(cur.kanji)})` : ""}</div>
              ${showPromptRomaji ? `<span class="romaji quiz-prompt-romaji">${esc(cur.romaji)}</span>` : ""}
              <p class="quiz-sub">Pilih arti bahasa Indonesia yang tepat:</p>
            ` : `
              ${renderKotobaEmojiHtml(cur, state.kotobaEmojiSize !== "off" ? "fc-quiz-emoji" : "")}
              <div class="quiz-prompt" style="font-family:var(--font-body);">${esc(cur.arti)}</div>
              <p class="quiz-sub">Pilih kata bahasa Jepang yang tepat:</p>
            `}

            <div class="options-grid">
              ${state.kotobaMcqOptions.map((opt, idx) => {
                let cls = "";
                if (answered) {
                  if (idx === state.kotobaMcqCorrectIdx) cls = "is-correct";
                  else if (idx === state.kotobaMcqPicked) cls = "is-wrong";
                }
                const optShowsJp = isEmojiMode || !askJp;
                return `
                  <div class="option-row">
                    <button type="button" class="option-btn ${cls}" data-kmcq="${idx}" ${answered ? "disabled" : ""}>
                      <span class="option-key">${idx + 1}</span>
                      <div class="option-content">
                        <span class="option-jp">${esc(optShowsJp ? `${opt.kana}${opt.kanji ? ` (${opt.kanji})` : ""}` : opt.arti)}</span>
                        ${optShowsJp && showOptionRomaji ? `<span class="romaji">${esc(opt.romaji)}</span>` : ""}
                      </div>
                    </button>
                    ${optShowsJp ? ttsBtnHtml(opt.kana, "tts-btn-opt") : ""}
                  </div>
                `;
              }).join("")}
            </div>

            ${answered ? `
              <div class="feedback-box ${isRight ? "is-correct" : "is-wrong"}">
                <div class="feedback-title">${isRight ? "✓ Tepat sekali!" : "✕ Belum tepat:"}</div>
                <p class="feedback-explain">
                  ${cur.emoji && state.kotobaEmojiSize !== "off" ? `${cur.emoji} ` : ""}<strong class="jp">${esc(cur.kana)}</strong> ${cur.kanji ? `(${esc(cur.kanji)})` : ""} [${esc(cur.romaji)}] = <strong>${esc(cur.arti)}</strong> (Bab ${cur.bab}).
                </p>
              </div>
              <div class="quiz-nav-row">
                <span class="kbd-hint">Pintasan: 1–4 pilih · Enter lanjut</span>
                <button type="button" class="btn-primary" id="btnNextKotobaMcq">
                  ${state.kotobaIdx + 1 < total ? "Soal Berikutnya →" : "Lihat Hasil Akhir →"}
                </button>
              </div>
            ` : ""}
          </div>
        `;
      }
    }

    const babTuntasCnt = ALL_CHAPTERS.filter((c) => prof.kotoba.chapterScores[c.num] && prof.kotoba.chapterScores[c.num].bestPct >= 80).length;

    ws.innerHTML = `
      <section class="chapter-header ${romajiOffCls}">
        <div class="chapter-header-top">
          <span class="zone-pill zone-green">KOTOBA ARENA · BAB 1–25 (${allCount} KATA)</span>
          ${curBabScore ? `<span class="zone-pill ${curBabScore.bestPct >= 80 ? "zone-green" : "zone-amber"}">${curBabScore.bestPct >= 80 ? "✓ Kotoba Tuntas" : "Skor Kotoba"} Bab ${curBabNum}: ${curBabScore.bestPct}%</span>` : ""}
          <span class="zone-pill zone-neutral">Kuis Kotoba Tuntas: ${babTuntasCnt}/25 Bab · Hafal: ${prof.kotoba.masteredIds.length}/${allCount}</span>
        </div>
        <h1 class="page-title">🃏 Kotoba Flashcard, Emot Visual, Tes Hafalan Ketik, &amp; Kuis Akhir</h1>
        <p class="page-lead">
          Hafalkan <strong>${allCount} kosakata Bab 1–25</strong> dengan <strong>Emot Gede</strong> pada kata visual, atur jumlah soal bebas <strong>maksimal 50 soal</strong>, uji ingatan di <strong>Tes Hafalan Ketik</strong>, lalu tuntaskan <strong>Kuis Akhir Kotoba Per Bab</strong>!
        </p>

        <div class="kotoba-controls-card">
          <div class="kotoba-filter-row">
            <label style="font-size:13px; font-weight:700; display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
              <span>Pilih Dek Bab:</span>
              <select class="kotoba-select" id="selKotobaScope">${scopeOptions}</select>
            </label>
            <div class="mode-switch-btns">
              ${savedWrongForScope.length > 0 ? `<button type="button" class="pill-btn chip-red" id="btnKotobaHeaderWrong">🔁 Salah Tersimpan (${savedWrongForScope.length})</button>` : ""}
              <button type="button" class="pill-btn" id="btnKotobaReshuffle">🔀 Acak Dek</button>
            </div>
          </div>

          <div class="kotoba-bab-strip" aria-label="Pilih cepat per Bab 1 sampai 25">
            <button type="button" class="kotoba-bab-pill ${state.kotobaScope === "all" ? "is-active" : ""}" data-kbab-pick="all">Semua</button>
            <button type="button" class="kotoba-bab-pill ${state.kotobaScope === "review" ? "is-active" : ""}" data-kbab-pick="review">🔁 Ulang (${prof.kotoba.reviewIds.length})</button>
            ${Array.from({ length: 25 }, (_, i) => i + 1).map((b) => {
              const list = KOTOBA_BY_BAB[b] || [];
              const allKnown = list.length > 0 && list.every((w) => masteredSet.has(w.id));
              const sc = prof.kotoba.chapterScores[b];
              const isDone = allKnown || !!(sc && sc.bestPct >= 80);
              return `<button type="button" class="kotoba-bab-pill ${state.kotobaScope === String(b) ? "is-active" : ""} ${isDone ? "is-done" : ""}" data-kbab-pick="${b}">${isDone ? "✓ " : ""}Bab ${b}</button>`;
            }).join("")}
          </div>

          <div class="mode-tabs" style="margin-top:0;" role="tablist">
            <button type="button" class="mode-tab ${state.kotobaMode === "flip" ? "is-active" : ""}" data-kmode="flip">🃏 Flip Kartu</button>
            <button type="button" class="mode-tab ${state.kotobaMode === "quiz" ? "is-active" : ""}" data-kmode="quiz">⚡ Kuis Kotoba (1–50)</button>
            <button type="button" class="mode-tab ${state.kotobaMode === "recall" ? "is-active" : ""}" data-kmode="recall">✍️ Tes Hafalan Ketik</button>
            <button type="button" class="mode-tab ${state.kotobaMode === "final" ? "is-active" : ""}" data-kmode="final">🏆 Kuis Akhir Kotoba${isSingleBab ? ` Bab ${curBabNum}` : ""}</button>
          </div>

          <div class="kotoba-settings-grid">
            <div class="kotoba-setting-group">
              <span class="kotoba-setting-label">Emot Visual (Kata Konkret)</span>
              <div class="kotoba-setting-pills">
                <button type="button" class="filter-chip ${state.kotobaEmojiSize === "large" ? "is-active" : ""}" data-kemoji="large">Gede (Biar Hafal!)</button>
                <button type="button" class="filter-chip ${state.kotobaEmojiSize === "normal" ? "is-active" : ""}" data-kemoji="normal">Normal</button>
                <button type="button" class="filter-chip ${state.kotobaEmojiSize === "off" ? "is-active" : ""}" data-kemoji="off">OFF</button>
              </div>
            </div>

            <div class="kotoba-setting-group">
              <span class="kotoba-setting-label">Setingan Romaji di Kotoba</span>
              <div class="kotoba-setting-pills">
                <button type="button" class="filter-chip ${state.kotobaRomajiMode === "on" ? "is-active" : ""}" data-krom="on">Romaji: ON</button>
                <button type="button" class="filter-chip ${state.kotobaRomajiMode === "back" ? "is-active" : ""}" data-krom="back">Intip di Jawaban</button>
                <button type="button" class="filter-chip ${state.kotobaRomajiMode === "off" ? "is-active" : ""}" data-krom="off">OFF (Murni Kana)</button>
              </div>
            </div>

            <div class="kotoba-setting-group">
              <span class="kotoba-setting-label">Jumlah Soal Kuis (Maks 50)</span>
              <div class="kotoba-setting-pills">
                ${[10, 20, 30, 50].map((n) => `
                  <button type="button" class="filter-chip ${state.kotobaQuizCount === n ? "is-active" : ""}" data-kcount="${n}">${n}</button>
                `).join("")}
                <input type="number" min="1" max="50" id="inpKotobaQuizCount" class="kotoba-count-input" value="${state.kotobaQuizCount}" title="Set jumlah soal (1–50, maks 50)">
              </div>
            </div>

            <div class="kotoba-setting-group">
              <span class="kotoba-setting-label">Arah Uji &amp; Setingan Sesi</span>
              <div class="kotoba-setting-pills">
                <button type="button" class="filter-chip ${state.kotobaDir === "jp2id" ? "is-active" : ""}" data-kdir="jp2id">🇯🇵→🇮🇩</button>
                <button type="button" class="filter-chip ${state.kotobaDir === "id2jp" ? "is-active" : ""}" data-kdir="id2jp">🇮🇩→🇯🇵</button>
                <button type="button" class="filter-chip ${state.kotobaDir === "emoji" ? "is-active" : ""}" data-kdir="emoji">😀 Tebak Emot</button>
                <button type="button" class="filter-chip ${state.kotobaAutoAudio ? "is-active" : ""}" id="btnKotobaAutoAudio">🔊 Auto: ${state.kotobaAutoAudio ? "ON" : "OFF"}</button>
              </div>
            </div>

            ${state.kotobaMode === "flip" ? `
              <div class="kotoba-setting-group">
                <span class="kotoba-setting-label">Tampil Kartu (${isSingleBab ? `Bab ${curBabNum}` : "Dek Ini"})</span>
                <div class="kotoba-setting-pills">
                  ${[["5","🎯 5 Fokus"],["10","10 Kartu"],["15","15 Kartu"],["all","🗂️ Semua"]].map(([val, lbl]) => `
                    <button type="button" class="filter-chip ${getActiveKotobaBatchSize(state.kotobaScope) === val ? "is-active" : ""}" data-kbatch="${val}">${lbl}</button>
                  `).join("")}
                </div>
              </div>
              <div class="kotoba-setting-group">
                <span class="kotoba-setting-label">Reset Hafalan Dek Ini</span>
                <div class="kotoba-setting-pills">
                  <button type="button" class="filter-chip chip-red" id="btnKotobaResetDeckMastery">🔄 Reset Hafal Dek Ini</button>
                </div>
              </div>
            ` : ""}
          </div>
        </div>
      </section>

      <div id="chapterBody" class="${romajiOffCls}">${stageHtml}</div>
    `;

    document.getElementById("selKotobaScope").addEventListener("change", (e) => {
      openKotobaFlashcard(e.target.value, state.kotobaMode);
    });
    ws.querySelectorAll("[data-kbab-pick]").forEach((btn) => {
      btn.addEventListener("click", () => {
        openKotobaFlashcard(btn.dataset.kbabPick, state.kotobaMode);
      });
    });
    ws.querySelectorAll("[data-kmode]").forEach((btn) => {
      btn.addEventListener("click", () => openKotobaFlashcard(state.kotobaScope, btn.dataset.kmode));
    });
    ws.querySelectorAll("[data-kemoji]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.kotobaEmojiSize = btn.dataset.kemoji;
        persistPrefs();
        renderKotobaView();
      });
    });
    ws.querySelectorAll("[data-krom]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.kotobaRomajiMode = btn.dataset.krom;
        persistPrefs();
        renderKotobaView();
      });
    });
    ws.querySelectorAll("[data-kcount]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.kotobaQuizCount = clampKotobaQuizCount(btn.dataset.kcount);
        persistPrefs();
        if (state.kotobaMode !== "flip") openKotobaFlashcard(state.kotobaScope, state.kotobaMode);
        else renderKotobaView();
      });
    });
    const inpCount = document.getElementById("inpKotobaQuizCount");
    if (inpCount) {
      inpCount.addEventListener("change", () => {
        state.kotobaQuizCount = clampKotobaQuizCount(inpCount.value);
        inpCount.value = String(state.kotobaQuizCount);
        persistPrefs();
        if (state.kotobaMode !== "flip") openKotobaFlashcard(state.kotobaScope, state.kotobaMode);
        else renderKotobaView();
      });
    }
    ws.querySelectorAll("[data-kdir]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.kotobaDir = btn.dataset.kdir;
        persistPrefs();
        if (state.kotobaMode === "quiz") openKotobaFlashcard(state.kotobaScope, "quiz");
        else { state.kotobaFlipped = false; renderKotobaView(); }
      });
    });
    ws.querySelectorAll("[data-kbatch]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const val = sanitizeKotobaBatchSize(btn.dataset.kbatch);
        state.kotobaBatchByScope[state.kotobaScope] = val;
        state.kotobaGridPage = 0;
        state.kotobaFlippedMap = {};
        persistPrefs();
        renderKotobaView();
      });
    });
    const btnResetDeck = document.getElementById("btnKotobaResetDeckMastery");
    if (btnResetDeck) {
      btnResetDeck.addEventListener("click", () => {
        const p = activeProfile();
        ensureProfileKotoba(p);
        const deckIds = new Set((state.kotobaFullPool || []).map((w) => w.id));
        p.kotoba.masteredIds = p.kotoba.masteredIds.filter((id) => !deckIds.has(id));
        p.kotoba.reviewIds = p.kotoba.reviewIds.filter((id) => !deckIds.has(id));
        persistProfiles();
        openKotobaFlashcard(state.kotobaScope, "flip");
      });
    }
    document.getElementById("btnKotobaAutoAudio").addEventListener("click", () => {
      state.kotobaAutoAudio = !state.kotobaAutoAudio;
      persistPrefs();
      renderKotobaView();
    });
    document.getElementById("btnKotobaReshuffle").addEventListener("click", () => {
      openKotobaFlashcard(state.kotobaScope, state.kotobaMode);
    });
    const btnHeadWrong = document.getElementById("btnKotobaHeaderWrong");
    if (btnHeadWrong) {
      btnHeadWrong.addEventListener("click", () => {
        openKotobaFlashcard(state.kotobaScope, state.kotobaMode === "flip" ? "final" : state.kotobaMode, savedWrongForScope);
      });
    }

    const btnStartBab1 = document.getElementById("btnKotobaStartBab1");
    if (btnStartBab1) btnStartBab1.addEventListener("click", () => openKotobaFlashcard("1", state.kotobaMode));
    const btnRetrySesWrong = document.getElementById("btnKotobaRetrySessionWrong");
    if (btnRetrySesWrong) {
      btnRetrySesWrong.addEventListener("click", () => {
        openKotobaFlashcard(state.kotobaScope, state.kotobaMode, state.kotobaSessionWrongIds);
      });
    }
    const btnNextBatch = document.getElementById("btnKotobaNextBatch");
    if (btnNextBatch) {
      btnNextBatch.addEventListener("click", () => {
        state.kotobaBatchOffset += deck.length;
        state.kotobaDeck = sliceKotobaBatch();
        state.kotobaIdx = 0;
        state.kotobaFlipped = false;
        state.kotobaSessionKnown = 0;
        state.kotobaSessionReview = 0;
        state.kotobaSessionWrongIds = [];
        state.kotobaRequeueCounts = {};
        renderKotobaView();
      });
    }
    const btnGoFinalFinish = document.getElementById("btnKotobaGoFinalFromFinish");
    if (btnGoFinalFinish) btnGoFinalFinish.addEventListener("click", () => openKotobaFlashcard(state.kotobaScope, "final"));
    const btnReplay = document.getElementById("btnKotobaReplay");
    if (btnReplay) btnReplay.addEventListener("click", () => openKotobaFlashcard(state.kotobaScope, state.kotobaMode));
    const btnDrillSaved = document.getElementById("btnKotobaDrillSavedWrong");
    if (btnDrillSaved) {
      btnDrillSaved.addEventListener("click", () => openKotobaFlashcard(state.kotobaScope, "final", savedWrongForScope));
    }

    if (state.kotobaMode === "flip") {
      renderKotobaFlipGrid();
      const btnOpenAll = document.getElementById("btnKotobaFlipAllOpen");
      if (btnOpenAll) {
        btnOpenAll.addEventListener("click", () => {
          const { visible } = getKotobaGridPageInfo(getFilteredKotobaFlipPool());
          visible.forEach((w) => { state.kotobaFlippedMap[w.id] = true; });
          renderKotobaFlipGrid();
        });
      }
      const btnCloseAll = document.getElementById("btnKotobaFlipAllClose");
      if (btnCloseAll) {
        btnCloseAll.addEventListener("click", () => {
          const { visible } = getKotobaGridPageInfo(getFilteredKotobaFlipPool());
          visible.forEach((w) => { state.kotobaFlippedMap[w.id] = false; });
          renderKotobaFlipGrid();
        });
      }
      ws.querySelectorAll("[data-kgrid-filter]").forEach((btn) => {
        btn.addEventListener("click", () => {
          state.kotobaGridFilter = btn.dataset.kgridFilter;
          state.kotobaGridPage = 0;
          renderKotobaView();
        });
      });
      const inpSearch = document.getElementById("inpKotobaSearch");
      if (inpSearch) {
        inpSearch.addEventListener("input", () => {
          state.kotobaSearch = inpSearch.value;
          state.kotobaGridPage = 0;
          renderKotobaFlipGrid();
        });
      }
    }

    const btnRev = document.getElementById("btnJudgeReview");
    if (btnRev) btnRev.addEventListener("click", () => markKotobaCard(false));
    const btnKwn = document.getElementById("btnJudgeKnown");
    if (btnKwn) btnKwn.addEventListener("click", () => markKotobaCard(true));

    ws.querySelectorAll("[data-kmcq]").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (state.kotobaMcqPicked !== null) return;
        state.kotobaMcqPicked = Number(btn.dataset.kmcq);
        if (state.kotobaAutoAudio && cur) speakJapanese(cur.kana);
        renderKotobaView();
      });
    });
    const btnNextMcq = document.getElementById("btnNextKotobaMcq");
    if (btnNextMcq) {
      btnNextMcq.addEventListener("click", () => {
        markKotobaCard(state.kotobaMcqPicked === state.kotobaMcqCorrectIdx);
      });
    }

    const recallForm = document.getElementById("kotobaRecallForm");
    const recallInput = document.getElementById("kotobaRecallInput");
    if (recallInput && !state.kotobaRecallAnswered && window.innerWidth > 820) recallInput.focus();
    if (recallForm) {
      recallForm.addEventListener("submit", (e) => {
        e.preventDefault();
        if (!state.kotobaRecallAnswered) submitKotobaRecall(recallInput.value);
      });
    }
    const btnNextRecall = document.getElementById("btnNextKotobaRecall");
    if (btnNextRecall) {
      btnNextRecall.addEventListener("click", () => markKotobaCard(state.kotobaRecallOk));
    }
  }

  // ===== REFERENSI MINNA NO NIHONGO (11 KATEGORI) =====
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

  function getRefCategory(id) {
    return REFERENCES.find((r) => r.id === id) || REFERENCES[0];
  }

  function openReferences(refId, tab) {
    stopKaiwaPlayback();
    state.view = "references";
    state.selectedNum = null;
    if (refId) state.selectedRefId = refId;
    state.refTab = tab || "materi";
    state.activeTab = state.refTab === "kuis" ? "kuis" : "materi";
    const refCat = getRefCategory(state.selectedRefId);
    state.activeRefQuizObj = {
      num: "Ref",
      isFinalExam: true,
      isRefQuiz: true,
      refId: refCat.id,
      title: `Kuis Referensi: ${refCat.title}`,
      questions: refCat.questions
    };
    resetQuiz(refCat.questions.map((_, i) => i), `Kuis ${refCat.title} (${refCat.questions.length} Soal)`, false);
    updateCheatButtonLabel();
    renderSidebar();
    syncMobileNav();
    renderReferencesView();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderReferencesView() {
    const ws = document.getElementById("workspace");
    const cat = getRefCategory(state.selectedRefId);
    const totalRefQ = REFERENCES.reduce((s, r) => s + r.questions.length, 0);
    const refScores = activeProfile().refs || {};

    const catGridHtml = `
      <div class="ref-cat-grid" role="tablist" aria-label="Pilih kategori referensi">
        ${REFERENCES.map((r) => {
          const sc = refScores[r.id];
          return `
            <button type="button" class="ref-cat-btn ${r.id === cat.id ? "is-active" : ""}" data-ref-id="${esc(r.id)}">
              <span class="ref-cat-icon" aria-hidden="true">${r.icon}</span>
              <span class="ref-cat-name">${esc(r.title)}</span>
              <span class="ref-cat-count">${sc ? `Skor ${sc.bestPct}% · ` : ""}${r.questions.length} soal kuis</span>
            </button>
          `;
        }).join("")}
      </div>
    `;

    ws.innerHTML = `
      <section class="chapter-header">
        <div class="chapter-header-top">
          <span class="zone-pill zone-green">REFERENSI LENGKAP MINNA NO NIHONGO I (参考語彙)</span>
          <span class="zone-pill zone-neutral">${REFERENCES.length} Kategori · ${totalRefQ} Soal Interaktif · Audio 🔊</span>
        </div>
        <h1 class="page-title">${cat.icon} ${esc(cat.title)}</h1>
        <p class="page-lead">${esc(cat.summary)} <span style="opacity:0.8">(${esc(cat.refSource)})</span></p>

        ${catGridHtml}

        <div class="mode-tabs" role="tablist">
          <button type="button" class="mode-tab ${state.refTab === "materi" ? "is-active" : ""}" id="tabRefMateri" role="tab">
            1. Materi &amp; Kartu Interaktif
          </button>
          <button type="button" class="mode-tab ${state.refTab === "kuis" ? "is-active" : ""}" id="tabRefKuis" role="tab">
            2. Kuis ${esc(cat.title.split(" (")[0])} (${cat.questions.length} Soal)
          </button>
          <button type="button" class="mode-tab" id="btnRefMixQuiz" role="tab">
            🎲 Kuis Acak Semua Referensi (20 Soal)
          </button>
        </div>
      </section>

      <div id="chapterBody"></div>
    `;

    ws.querySelectorAll("[data-ref-id]").forEach((btn) => {
      btn.addEventListener("click", () => openReferences(btn.dataset.refId, "materi"));
    });
    document.getElementById("tabRefMateri").addEventListener("click", () => {
      state.refTab = "materi";
      state.activeTab = "materi";
      renderReferencesView();
    });
    document.getElementById("tabRefKuis").addEventListener("click", () => {
      openReferences(cat.id, "kuis");
    });
    document.getElementById("btnRefMixQuiz").addEventListener("click", () => {
      const pool = REFERENCES.flatMap((r) => r.questions);
      const shuffled = [...pool].sort(() => Math.random() - 0.5).slice(0, 20);
      state.refTab = "kuis";
      state.activeTab = "kuis";
      state.activeRefQuizObj = {
        num: "Ref",
        isFinalExam: true,
        isRefQuiz: true,
        refId: "mix",
        title: "Kuis Acak Semua Referensi (20 Soal)",
        questions: shuffled
      };
      resetQuiz(shuffled.map((_, i) => i), "Kuis Acak Semua Referensi (20 Soal)", false);
      renderReferencesView();
    });

    if (state.refTab === "materi") {
      renderRefMateriBody(cat);
    } else {
      renderQuizBody(state.activeRefQuizObj);
    }
  }

  function renderRefMateriBody(cat) {
    const body = document.getElementById("chapterBody");

    let widgetHtml = "";
    if (cat.interactiveWidget === "number_converter") {
      const res = numberToJapanese(state.converterVal);
      widgetHtml = `
        <section class="widget-box">
          <div class="widget-head">
            <h3>🔢 Lab Interaktif: Ketik Angka (0 – 99.999) → Bacaan Jepang + Audio</h3>
            <span class="zone-pill zone-orange">Cek Pengecualian 300/600/800/3000/8000/10000!</span>
          </div>
          <div class="num-controls">
            <input type="number" min="0" max="99999" id="numConvInput" class="num-input" value="${state.converterVal}">
            <div class="preset-chips">
              ${[300, 600, 800, 3000, 3800, 8600, 10000, 25600].map((v) => `
                <button type="button" class="filter-chip" data-preset-num="${v}">${v.toLocaleString("id-ID")}</button>
              `).join("")}
            </div>
          </div>
          <div class="num-result-box" id="numResultBox">
            <div class="jp-audio-row-center">
              <div class="num-result-jp">${esc(res.jp)}</div>
              ${ttsBtnHtml(res.jp)}
            </div>
            <div class="romaji">${esc(res.romaji)}</div>
            <div style="font-size:13px; color: var(--color-ink-muted); margin-top:4px;">${esc(res.note)}</div>
          </div>
        </section>
      `;
    } else if (cat.interactiveWidget === "date_picker") {
      const [dJp, dRom, isSpec] = DATE_READINGS[state.selectedDate];
      widgetHtml = `
        <section class="widget-box">
          <div class="widget-head">
            <h3>📅 Kalender Interaktif Tanggal 1–31 (Klik Tanggal Mana Saja!)</h3>
            <span class="zone-pill zone-orange">Warna Oranye = Bacaan Pengecualian!</span>
          </div>
          <div class="date-grid">
            ${Array.from({ length: 31 }, (_, i) => i + 1).map((d) => {
              const sp = DATE_READINGS[d][2];
              const sel = d === state.selectedDate;
              return `<button type="button" class="date-btn ${sp ? "is-special" : ""} ${sel ? "is-selected" : ""}" data-pick-date="${d}">${d}日</button>`;
            }).join("")}
          </div>
          <div class="num-result-box" id="dateReadout">
            <div class="jp-audio-row-center">
              <div class="num-result-jp">Tanggal ${state.selectedDate} (${state.selectedDate}日) = ${esc(dJp)}</div>
              ${ttsBtnHtml(dJp)}
            </div>
            <div class="romaji">${esc(dRom)}</div>
            <div style="font-size:13px; color: var(--color-ink-muted); margin-top:4px;">
              ${isSpec ? "⚠️ Termasuk tanggal PENGECUALIAN — wajib dihafal!" : "✓ Aturan normal (Angka + にち)."}
            </div>
          </div>
        </section>
      `;
    }

    const groupsHtml = cat.groups.map((grp) => `
      <section class="study-section">
        <h2 class="study-section-title">${esc(grp.name)}</h2>
        <div class="ref-word-grid">
          ${grp.items.map((it) => `
            <div class="ref-word-card ${state.flashcardMode ? "is-flash-hidden" : ""}" role="button" tabindex="0" data-flip-card="1">
              ${grp.isColor && it.hex ? `<span class="color-swatch" style="background:${it.hex};" aria-hidden="true"></span>` : ""}
              <div class="ref-word-body">
                <div class="jp">${esc(it.jp)} ${it.kanji && it.kanji !== "—" ? `<span class="kanji-inline">(${esc(it.kanji)})</span>` : ""}</div>
                <div class="romaji">${esc(it.romaji)}</div>
                <div class="ref-word-arti">${esc(it.arti)}</div>
              </div>
              ${ttsBtnHtml(it.jp)}
            </div>
          `).join("")}
        </div>
      </section>
    `).join("");

    body.innerHTML = `
      <div class="cheatsheet-takeaway" style="margin-top: 20px;">💡 Catatan Penting: ${esc(cat.tip)}</div>

      ${widgetHtml}

      <div class="ref-toolbar">
        <button type="button" class="pill-btn ${state.flashcardMode ? "pill-btn-accent" : ""}" id="btnToggleFlashcard">
          ${state.flashcardMode ? "🙈 Mode Flashcard: AKTIF (Klik kartu untuk intip arti)" : "🃏 Aktifkan Mode Flashcard (Sembunyikan Arti)"}
        </button>
        <button type="button" class="btn-primary" id="btnStartThisRefQuiz">
          Mulai Kuis ${esc(cat.title.split(" (")[0])} (${cat.questions.length} Soal) →
        </button>
      </div>

      ${groupsHtml}
    `;

    document.getElementById("btnToggleFlashcard").addEventListener("click", () => {
      state.flashcardMode = !state.flashcardMode;
      renderRefMateriBody(cat);
    });
    body.querySelectorAll("[data-flip-card]").forEach((card) => {
      const toggleCard = () => {
        if (state.flashcardMode) card.classList.toggle("is-flash-hidden");
      };
      card.addEventListener("click", toggleCard);
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggleCard();
        }
      });
    });
    document.getElementById("btnStartThisRefQuiz").addEventListener("click", () => openReferences(cat.id, "kuis"));

    const numInput = document.getElementById("numConvInput");
    if (numInput) {
      const updateNum = (val) => {
        state.converterVal = Math.max(0, Math.min(99999, Number(val) || 0));
        const r = numberToJapanese(state.converterVal);
        document.getElementById("numResultBox").innerHTML = `
          <div class="jp-audio-row-center">
            <div class="num-result-jp">${esc(r.jp)}</div>
            ${ttsBtnHtml(r.jp)}
          </div>
          <div class="romaji">${esc(r.romaji)}</div>
          <div style="font-size:13px; color: var(--color-ink-muted); margin-top:4px;">${esc(r.note)}</div>
        `;
      };
      numInput.addEventListener("input", (e) => updateNum(e.target.value));
      body.querySelectorAll("[data-preset-num]").forEach((b) => {
        b.addEventListener("click", () => {
          numInput.value = b.dataset.presetNum;
          updateNum(b.dataset.presetNum);
        });
      });
    }

    body.querySelectorAll("[data-pick-date]").forEach((b) => {
      b.addEventListener("click", () => {
        state.selectedDate = Number(b.dataset.pickDate);
        const [pickedJp] = DATE_READINGS[state.selectedDate];
        speakJapanese(pickedJp);
        renderRefMateriBody(cat);
      });
    });
  }

  // ===== KUIS INTERAKTIF (PER BAB, KANA, REFERENSI, MAUPUN TES AKHIR) =====
  const finalExamObj = {
    num: "1–25",
    isFinalExam: true,
    title: "Tes Akhir Komprehensif Bab 1–25",
    questions: FINAL_EXAM
  };

  let finalTimerId = null;
  let pendingExitAction = null;

  function pad2(n) {
    return String(n).padStart(2, "0");
  }

  function fisherYates(arr) {
    const copy = Array.isArray(arr) ? [...arr] : [];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function formatCountdown(sec) {
    const s = Math.max(0, Math.floor(Number(sec) || 0));
    const mm = Math.floor(s / 60);
    const ss = s % 60;
    return `${String(mm).padStart(2, "0")}:${String(ss).padStart(2, "0")}`;
  }

  function isFinalExamActive() {
    return state.view === "final_exam" && state.finalPhase === "running" && !!state.finalSession;
  }

  function clearFinalTimer() {
    if (finalTimerId !== null) {
      clearInterval(finalTimerId);
      finalTimerId = null;
    }
  }

  function openExitExamModal(actionFn) {
    pendingExitAction = typeof actionFn === "function" ? actionFn : null;
    const modal = document.getElementById("exitExamModal");
    if (modal) modal.hidden = false;
  }

  function closeExitExamModal() {
    pendingExitAction = null;
    const modal = document.getElementById("exitExamModal");
    if (modal) modal.hidden = true;
  }

  function guardFinalExamExit(actionFn) {
    if (isFinalExamActive()) {
      openExitExamModal(actionFn);
      return;
    }
    clearFinalTimer();
    if (typeof actionFn === "function") actionFn();
  }

  function normalizeBankQuestions(list, babNum) {
    return (Array.isArray(list) ? list : []).map((q, idx) => ({
      ...q,
      id: q.id || `b${babNum}-${String(idx + 1).padStart(2, "0")}`,
      bab: Number(q.bab) || babNum
    }));
  }

  function getKnownChapterPool(babNum) {
    if (Array.isArray(FINAL_BANK_CACHE[babNum]) && FINAL_BANK_CACHE[babNum].length > 0) {
      return FINAL_BANK_CACHE[babNum];
    }
    if (Array.isArray(BANK_Q[babNum]) && BANK_Q[babNum].length > 0) {
      return normalizeBankQuestions(BANK_Q[babNum], babNum);
    }
    const ch = getChapter(babNum);
    return normalizeBankQuestions(ch ? ch.questions : [], babNum);
  }

  async function loadChapterBankPool(babNum) {
    if (Array.isArray(FINAL_BANK_CACHE[babNum]) && FINAL_BANK_CACHE[babNum].length > 0) {
      return FINAL_BANK_CACHE[babNum];
    }
    const numStr = pad2(babNum);
    const canFetch = typeof fetch === "function" && (typeof location === "undefined" || location.protocol !== "file:");
    if (canFetch) {
      const urls = [
        `./data/bank/bab-${numStr}.json?v=${ASSET_VERSION}`,
        `./data/bab-${numStr}.json?v=${ASSET_VERSION}`
      ];
      for (const url of urls) {
        try {
          const res = await fetch(url, { cache: "no-store" });
          if (res && res.ok) {
            const data = await res.json();
            if (Array.isArray(data) && data.length > 0) {
              const normalized = normalizeBankQuestions(data, babNum);
              FINAL_BANK_CACHE[babNum] = normalized;
              FINAL_BANK_SOURCE[babNum] = "json";
              return normalized;
            }
          }
        } catch {
          // Lanjut ke path atau fallback lokal
        }
      }
    }
    const fallback = getKnownChapterPool(babNum);
    FINAL_BANK_CACHE[babNum] = fallback;
    FINAL_BANK_SOURCE[babNum] = Array.isArray(BANK_Q[babNum]) && BANK_Q[babNum].length > 0 ? "bank_js" : "modul";
    return fallback;
  }

  function allocateFinalExamCounts(selectedBabs, totalDesired, poolsByBab) {
    const babs = [...selectedBabs];
    const counts = {};
    if (babs.length === 0 || totalDesired <= 0) return counts;

    const k = babs.length;
    const base = Math.floor(totalDesired / k);
    const rem = totalDesired % k;
    const order = fisherYates(babs);

    let assigned = 0;
    order.forEach((bab, idx) => {
      const poolLen = Array.isArray(poolsByBab[bab]) ? poolsByBab[bab].length : FINAL_MAX_PER_BAB;
      const cap = Math.min(FINAL_MAX_PER_BAB, poolLen);
      const want = base + (idx < rem ? 1 : 0);
      const take = Math.max(0, Math.min(cap, want));
      counts[bab] = take;
      assigned += take;
    });

    // Jika ada bab berkapasitas lebih kecil daripada jatah rata, distribusikan sisa secara acak tanpa melewati cap 10/bab
    let safety = totalDesired + 10;
    while (assigned < totalDesired && safety > 0) {
      safety--;
      const candidates = fisherYates(babs).filter((bab) => {
        const poolLen = Array.isArray(poolsByBab[bab]) ? poolsByBab[bab].length : FINAL_MAX_PER_BAB;
        return (counts[bab] || 0) < Math.min(FINAL_MAX_PER_BAB, poolLen);
      });
      if (candidates.length === 0) break;
      for (const bab of candidates) {
        if (assigned >= totalDesired) break;
        counts[bab] = (counts[bab] || 0) + 1;
        assigned++;
      }
    }

    return counts;
  }

  function shuffleQuestionOptions(q, babNum) {
    const cloned = { ...q, bab: Number(q.bab) || babNum };
    if (cloned.type === "mcq" && Array.isArray(cloned.options) && cloned.options.length > 1) {
      const tagged = cloned.options.map((opt, idx) => ({
        opt: opt && typeof opt === "object" ? { ...opt } : { jp: String(opt || ""), romaji: "" },
        isCorrect: idx === cloned.answer
      }));
      const mixed = fisherYates(tagged);
      cloned.options = mixed.map((item) => item.opt);
      cloned.answer = mixed.findIndex((item) => item.isCorrect);
    }
    return cloned;
  }

  function buildFinalExamSet(selectedBabs, totalDesired, poolsByBab) {
    const counts = allocateFinalExamCounts(selectedBabs, totalDesired, poolsByBab);
    const picked = [];
    selectedBabs.forEach((bab) => {
      const take = counts[bab] || 0;
      if (take <= 0) return;
      const pool = Array.isArray(poolsByBab[bab]) ? poolsByBab[bab] : [];
      const sampled = fisherYates(pool).slice(0, take);
      sampled.forEach((q) => picked.push({ q, bab }));
    });
    const shuffledCombined = fisherYates(picked);
    const questions = shuffledCombined.map(({ q, bab }) => shuffleQuestionOptions(q, bab));
    return { questions, counts };
  }

  function validateFinalSetup(setup) {
    const errors = [];
    const selectedBabs = Array.isArray(setup.selectedBabs) ? setup.selectedBabs : [];
    const k = selectedBabs.length;
    const maxForSelected = Math.min(FINAL_HARD_CAP, k * FINAL_MAX_PER_BAB);

    const quotaStr = String(setup.quotaInput !== undefined ? setup.quotaInput : setup.quotaPerBab).trim();
    const totalStr = String(setup.totalInput !== undefined ? setup.totalInput : setup.totalDesired).trim();
    const secStr = String(setup.perQSecondsInput !== undefined ? setup.perQSecondsInput : setup.perQSeconds).trim();

    const quota = quotaStr === "" ? NaN : Number(quotaStr);
    const total = totalStr === "" ? NaN : Number(totalStr);
    const perQSeconds = secStr === "" ? NaN : Number(secStr);

    if (k === 0) {
      errors.push("Belum ada bab yang dicentang. Pilih minimal 1 bab dari Bab 1–25.");
    }
    if (setup.syncMode === "quota") {
      if (!Number.isInteger(quota) || quota < 1) {
        errors.push("Kuota Soal per Bab harus berupa bilangan bulat minimal 1.");
      } else if (quota > FINAL_MAX_PER_BAB) {
        errors.push(`Kuota Soal per Bab (${quota}) melebihi batas maksimal ${FINAL_MAX_PER_BAB} soal/bab.`);
      }
    } else if (Number.isFinite(quota) && quota > FINAL_MAX_PER_BAB) {
      errors.push(`Kuota Soal per Bab (${quota}) melebihi batas maksimal ${FINAL_MAX_PER_BAB} soal/bab.`);
    }

    if (!Number.isInteger(total) || total <= 0) {
      errors.push("Total Soal yang Diinginkan harus lebih dari 0 (minimal 1 soal).");
    } else {
      if (total > FINAL_HARD_CAP) {
        errors.push(`Total soal (${total}) melebihi batas maksimal keras ${FINAL_HARD_CAP} soal.`);
      }
      if (k > 0 && total > k * FINAL_MAX_PER_BAB) {
        errors.push(`Total soal (${total}) melebihi batas maksimal ${k * FINAL_MAX_PER_BAB} soal untuk ${k} bab terpilih (maks ${FINAL_MAX_PER_BAB} soal/bab).`);
      }
    }

    if (setup.timerMode === "per_q") {
      if (!Number.isInteger(perQSeconds) || perQSeconds < 5 || perQSeconds > 300) {
        errors.push("Waktu per soal harus bilangan bulat antara 5 hingga 300 detik.");
      }
    }

    return {
      valid: errors.length === 0,
      errors,
      k,
      maxForSelected,
      quota,
      total,
      perQSeconds: Number.isInteger(perQSeconds) ? perQSeconds : 30
    };
  }

  function renderFinalExamHeader() {
    const prevFinal = activeProfile().finalExam;
    const header = document.getElementById("finalExamHeader");
    if (!header) return;
    let statusBadge = "Atur Bab, Kuota, Timer &amp; Koreksi";
    if (state.finalPhase === "running" && state.finalSession) {
      const s = state.finalSession;
      statusBadge = `${s.questions.length} Soal · ${s.correctionMode === "drill" ? "Langsung Koreksi" : "Simulasi Ujian"}`;
    } else if (state.finalPhase === "result") {
      statusBadge = "Hasil &amp; Pembahasan Tes Akhir";
    }
    header.innerHTML = `
      <div class="chapter-header-top">
        <span class="zone-pill zone-red">TES AKHIR GABUNGAN · BAB 1 – 25</span>
        <span class="zone-pill zone-neutral">${statusBadge}</span>
        ${prevFinal ? `<span class="zone-pill zone-green">Skor Terbaik: ${prevFinal.bestPct}% (${prevFinal.correct}/${prevFinal.total})</span>` : ""}
      </div>
      <h1 class="page-title">Evaluasi Akhir Komprehensif: Bab 1 – 25</h1>
      <p class="page-lead">
        Bab 1–13 memanfaatkan bank <strong>50 soal JSON/bab</strong> (<code>data/bank/bab-01..13.json</code>), sedangkan Bab 14–25 memakai bank soal aktif dan siap menampung 50 soal JSON lewat bridge <code>data/bank/bab-14..25.json</code>.
      </p>
    `;
  }

  function openFinalExam() {
    stopKaiwaPlayback();
    clearFinalTimer();
    state.view = "final_exam";
    state.selectedNum = null;
    state.activeTab = "kuis";
    state.finalPhase = "setup";
    state.finalSession = null;
    state.finalReviewFilter = "all";
    updateCheatButtonLabel();
    renderSidebar();
    syncMobileNav();

    const ws = document.getElementById("workspace");
    ws.innerHTML = `
      <section class="chapter-header" id="finalExamHeader"></section>
      <div id="chapterBody"></div>
    `;
    renderFinalExamView();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderFinalExamView() {
    renderFinalExamHeader();
    if (state.finalPhase === "running" && state.finalSession) {
      renderFinalExamRunning();
    } else if (state.finalPhase === "result" && state.finalSession) {
      renderFinalExamResult();
    } else {
      renderFinalExamSetup();
    }
  }

  function buildDistributionNote(setup, check) {
    if (!check.valid) {
      return `Perbaiki peringatan di bawah sebelum memulai tes. Batas maksimal saat ini: <strong>${check.k * FINAL_MAX_PER_BAB} soal</strong> (${check.k} bab × ${FINAL_MAX_PER_BAB} soal/bab, hard cap ${FINAL_HARD_CAP}).`;
    }
    const base = Math.floor(check.total / check.k);
    const rem = check.total % check.k;
    if (rem === 0) {
      return `Distribusi soal: tiap bab dari <strong>${check.k} bab terpilih</strong> mendapat tepat <strong>${base} soal</strong> (diacak Fisher-Yates).`;
    }
    return `Distribusi rata + sisa acak: <strong>${check.k - rem} bab</strong> mendapat <strong>${base} soal</strong> dan <strong>${rem} bab acak</strong> mendapat <strong>${base + 1} soal</strong> (total tepat ${check.total} soal, tidak ada bab melebihi ${FINAL_MAX_PER_BAB} soal).`;
  }

  function updateFinalSetupLiveUI() {
    const setup = state.finalSetup;
    const check = validateFinalSetup(setup);
    const countBadge = document.getElementById("finalBabCountBadge");
    if (countBadge) {
      countBadge.textContent = `${check.k} / 25 bab dipilih (maks ${check.k * FINAL_MAX_PER_BAB} soal)`;
    }
    const maxHint = document.getElementById("finalTotalMaxHint");
    if (maxHint) {
      maxHint.textContent = `Maksimal: ${check.k} × 10 = ${check.k * FINAL_MAX_PER_BAB} soal (hard cap 250)`;
    }
    const distNote = document.getElementById("finalDistNote");
    if (distNote) {
      distNote.innerHTML = buildDistributionNote(setup, check);
    }
    const qInput = document.getElementById("inputFinalQuota");
    if (qInput) {
      const qBad = Number.isFinite(check.quota) && check.quota > FINAL_MAX_PER_BAB || (setup.syncMode === "quota" && (!Number.isInteger(check.quota) || check.quota < 1));
      qInput.classList.toggle("is-invalid", !!qBad);
    }
    const tInput = document.getElementById("inputFinalTotal");
    if (tInput) {
      const tBad = !Number.isInteger(check.total) || check.total <= 0 || check.total > FINAL_HARD_CAP || (check.k > 0 && check.total > check.k * FINAL_MAX_PER_BAB);
      tInput.classList.toggle("is-invalid", !!tBad);
    }
    const sInput = document.getElementById("inputPerQSeconds");
    if (sInput) {
      const sRaw = Number(String(setup.perQSecondsInput ?? setup.perQSeconds).trim());
      const sBad = setup.timerMode === "per_q" && (!Number.isInteger(sRaw) || sRaw < 5 || sRaw > 300);
      sInput.classList.toggle("is-invalid", !!sBad);
    }

    const warnBox = document.getElementById("finalSetupWarnings");
    if (warnBox) {
      if (check.errors.length > 0) {
        warnBox.hidden = false;
        warnBox.innerHTML = `
          <strong>⚠️ Pengaturan belum valid — tombol Mulai dikunci:</strong>
          <ul>${check.errors.map((err) => `<li>${esc(err)}</li>`).join("")}</ul>
        `;
      } else {
        warnBox.hidden = true;
        warnBox.innerHTML = "";
      }
    }

    const launchBtn = document.getElementById("btnLaunchFinalExam");
    if (launchBtn) {
      launchBtn.disabled = !check.valid;
      const modeText = setup.correctionMode === "drill" ? "Langsung Koreksi" : "Simulasi Ujian";
      launchBtn.textContent = check.valid
        ? `Mulai Tes Akhir (${check.total} Soal · ${modeText}) →`
        : "Perbaiki Pengaturan untuk Memulai";
    }
  }

  function renderFinalExamSetup() {
    const body = document.getElementById("chapterBody");
    if (!body) return;
    const setup = state.finalSetup;
    const selectedSet = new Set(setup.selectedBabs || []);
    const check = validateFinalSetup(setup);

    const babGridHtml = ALL_CHAPTERS.slice()
      .sort((a, b) => a.num - b.num)
      .map((ch) => {
        const pool = getKnownChapterPool(ch.num);
        const isChecked = selectedSet.has(ch.num);
        const is50 = pool.length >= 50;
        const poolLabel = is50 ? `${pool.length} soal · JSON` : `${pool.length} soal · Modul`;
        return `
          <label class="bab-check-card ${isChecked ? "is-checked" : ""}" for="finalBabCheck_${ch.num}">
            <input type="checkbox" id="finalBabCheck_${ch.num}" data-final-bab="${ch.num}" ${isChecked ? "checked" : ""}>
            <span class="bab-check-meta">
              <span class="bab-check-name">Bab ${ch.num}</span>
              <span class="bab-pool-tag ${is50 ? "is-bank50" : ""}">${poolLabel}</span>
            </span>
          </label>
        `;
      })
      .join("");

    const timerCustomHtml = setup.timerMode === "per_q" ? `
      <div class="final-timer-custom-row">
        <label for="inputPerQSeconds" style="font-size:13px; font-weight:700;">Atur Detik per Soal (5–300 detik):</label>
        <input type="number" class="final-num-input" id="inputPerQSeconds" min="5" max="300" value="${esc(setup.perQSecondsInput ?? setup.perQSeconds)}">
        <div class="kotoba-setting-pills">
          ${[15, 20, 30, 45, 60].map((sec) => `
            <button type="button" class="filter-chip ${Number(setup.perQSecondsInput ?? setup.perQSeconds) === sec ? "is-active" : ""}" data-preset-sec="${sec}">${sec}d</button>
          `).join("")}
        </div>
      </div>
    ` : "";

    body.innerHTML = `
      <div class="final-setup-shell">
        <div class="final-setup-card">
          <!-- 1. Checklist Bab 1-25 & Preset -->
          <section class="final-setup-section">
            <div class="final-setup-head">
              <div>
                <h2 class="final-setup-title">1. Pilih Bab yang Diujikan (Custom Bab 1–25)</h2>
                <p class="final-setup-sub">Centang bab mana saja sesuai keinginan, atau pakai preset cepat.</p>
              </div>
              <span class="zone-pill zone-neutral" id="finalBabCountBadge">${check.k} / 25 bab dipilih (maks ${check.k * FINAL_MAX_PER_BAB} soal)</span>
            </div>
            <div class="final-preset-row">
              <button type="button" class="pill-btn" data-bab-preset="all">Semua Bab (1–25)</button>
              <button type="button" class="pill-btn" data-bab-preset="1-12">Bab 1–12</button>
              <button type="button" class="pill-btn" data-bab-preset="13-25">Bab 13–25</button>
              <button type="button" class="pill-btn chip-red" data-bab-preset="reset">Reset</button>
            </div>
            <div class="final-bab-grid">${babGridHtml}</div>
          </section>

          <!-- 2 & 3. Kuota per Bab & Total Soal -->
          <section class="final-setup-section">
            <div class="final-setup-head">
              <div>
                <h2 class="final-setup-title">2 &amp; 3. Kuota per Bab &amp; Total Soal Diinginkan</h2>
                <p class="final-setup-sub">Ubah kuota untuk hitung otomatis, atau ketik total bebas untuk dibagi rata + sisa acak.</p>
              </div>
            </div>
            <div class="final-num-grid">
              <div class="final-num-field">
                <label for="inputFinalQuota">Kuota Soal per Bab (Maks 10 soal/bab)</label>
                <input type="number" class="final-num-input" id="inputFinalQuota" min="1" max="10" value="${esc(setup.quotaInput ?? setup.quotaPerBab)}">
                <span class="final-field-hint">Mengubah angka ini otomatis mengisi Total = Jumlah Bab × Kuota.</span>
              </div>
              <div class="final-num-field">
                <label for="inputFinalTotal">Total Soal yang Diinginkan (Hard Cap 250)</label>
                <input type="number" class="final-num-input" id="inputFinalTotal" min="1" max="250" value="${esc(setup.totalInput ?? setup.totalDesired)}">
                <span class="final-field-hint" id="finalTotalMaxHint">Maksimal: ${check.k} × 10 = ${check.k * FINAL_MAX_PER_BAB} soal (hard cap 250)</span>
              </div>
            </div>
            <div class="final-dist-note" id="finalDistNote">${buildDistributionNote(setup, check)}</div>
          </section>

          <!-- 4. Pilihan Timer -->
          <section class="final-setup-section">
            <div class="final-setup-head">
              <div>
                <h2 class="final-setup-title">4. Pilihan Timer (Khusus Tes Akhir)</h2>
                <p class="final-setup-sub">Kuis per bab, Kana, Kotoba, dan Referensi tetap santai tanpa timer.</p>
              </div>
            </div>
            <div class="final-choice-grid" role="radiogroup" aria-label="Pilihan timer Tes Akhir">
              <button type="button" class="final-choice-card ${setup.timerMode === "none" ? "is-selected" : ""}" data-final-timer="none">
                <span class="final-choice-title">🌿 Santai (Tanpa Timer)</span>
                <span class="final-choice-desc">Kerjakan tenang tanpa hitungan mundur waktu.</span>
              </button>
              <button type="button" class="final-choice-card ${setup.timerMode === "per_q" ? "is-selected" : ""}" data-final-timer="per_q">
                <span class="final-choice-title">⏱ Waktu Per Soal (Detik Bebas)</span>
                <span class="final-choice-desc">Atur detik/soal bebas (mis. 15, 30, 45, atau 60 detik).</span>
              </button>
              <button type="button" class="final-choice-card ${setup.timerMode === "total_60" ? "is-selected" : ""}" data-final-timer="total_60">
                <span class="final-choice-title">⌛ Total 60 Menit</span>
                <span class="final-choice-desc">Simulasi 60:00 penuh untuk seluruh paket soal.</span>
              </button>
            </div>
            ${timerCustomHtml}
          </section>

          <!-- 5. Toggle Mode Koreksi -->
          <section class="final-setup-section">
            <div class="final-setup-head">
              <div>
                <h2 class="final-setup-title">5. Mode Koreksi Jawaban</h2>
                <p class="final-setup-sub">Pilih koreksi langsung per soal atau simulasi ujian dengan pembahasan di akhir.</p>
              </div>
            </div>
            <div class="final-choice-grid" role="radiogroup" aria-label="Mode koreksi Tes Akhir">
              <button type="button" class="final-choice-card ${setup.correctionMode === "drill" ? "is-selected" : ""}" data-final-corr="drill">
                <span class="final-choice-title">⚡ Langsung Koreksi (Drill)</span>
                <span class="final-choice-desc">Begitu menjawab, langsung tampil benar/salah + penjelasan lengkap.</span>
              </button>
              <button type="button" class="final-choice-card ${setup.correctionMode === "end" ? "is-selected" : ""}" data-final-corr="end">
                <span class="final-choice-title">📝 Koreksi di Akhir (Simulasi Ujian)</span>
                <span class="final-choice-desc">Bebas pindah nomor &amp; ubah jawaban. Skor &amp; pembahasan terbuka setelah dikumpulkan.</span>
              </button>
            </div>
          </section>

          <div class="final-warning-box" id="finalSetupWarnings" ${check.errors.length > 0 ? "" : "hidden"}></div>

          <div class="final-launch-bar">
            <span style="font-size:12.5px; color: var(--color-ink-muted);">
              🎲 Soal tiap bab, urutan tes akhir, dan urutan opsi A–D diacak otomatis dengan <strong>Fisher-Yates Shuffle</strong>.
            </span>
            <button type="button" class="btn-primary" id="btnLaunchFinalExam">
              Mulai Tes Akhir →
            </button>
          </div>
        </div>
      </div>
    `;

    updateFinalSetupLiveUI();

    const syncTotalFromQuota = () => {
      const qVal = Math.floor(Number(setup.quotaInput));
      if (Number.isFinite(qVal) && qVal >= 0) {
        const calc = setup.selectedBabs.length * qVal;
        setup.quotaPerBab = qVal;
        setup.totalDesired = calc;
        setup.totalInput = String(calc);
        const totalEl = document.getElementById("inputFinalTotal");
        if (totalEl) totalEl.value = setup.totalInput;
      }
    };

    body.querySelectorAll("[data-final-bab]").forEach((cb) => {
      cb.addEventListener("change", () => {
        const bab = Number(cb.dataset.finalBab);
        const nextSet = new Set(setup.selectedBabs);
        if (cb.checked) nextSet.add(bab);
        else nextSet.delete(bab);
        setup.selectedBabs = [...nextSet].sort((a, b) => a - b);
        const label = cb.closest(".bab-check-card");
        if (label) label.classList.toggle("is-checked", cb.checked);
        if (setup.syncMode === "quota") syncTotalFromQuota();
        persistPrefs();
        updateFinalSetupLiveUI();
      });
    });

    body.querySelectorAll("[data-bab-preset]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const preset = btn.dataset.babPreset;
        if (preset === "all") setup.selectedBabs = Array.from({ length: 25 }, (_, i) => i + 1);
        else if (preset === "1-12") setup.selectedBabs = Array.from({ length: 12 }, (_, i) => i + 1);
        else if (preset === "13-25") setup.selectedBabs = Array.from({ length: 13 }, (_, i) => i + 13);
        else if (preset === "reset") setup.selectedBabs = [];
        if (setup.syncMode === "quota") syncTotalFromQuota();
        persistPrefs();
        renderFinalExamSetup();
      });
    });

    const quotaInput = document.getElementById("inputFinalQuota");
    if (quotaInput) {
      quotaInput.addEventListener("input", () => {
        setup.syncMode = "quota";
        setup.quotaInput = quotaInput.value;
        syncTotalFromQuota();
        persistPrefs();
        updateFinalSetupLiveUI();
      });
    }

    const totalInput = document.getElementById("inputFinalTotal");
    if (totalInput) {
      totalInput.addEventListener("input", () => {
        setup.syncMode = "custom_total";
        setup.totalInput = totalInput.value;
        const parsed = Math.floor(Number(totalInput.value));
        if (Number.isFinite(parsed)) setup.totalDesired = parsed;
        persistPrefs();
        updateFinalSetupLiveUI();
      });
    }

    body.querySelectorAll("[data-final-timer]").forEach((btn) => {
      btn.addEventListener("click", () => {
        setup.timerMode = btn.dataset.finalTimer;
        persistPrefs();
        renderFinalExamSetup();
      });
    });

    const secInput = document.getElementById("inputPerQSeconds");
    if (secInput) {
      secInput.addEventListener("input", () => {
        setup.perQSecondsInput = secInput.value;
        const parsed = Math.floor(Number(secInput.value));
        if (Number.isFinite(parsed)) setup.perQSeconds = parsed;
        persistPrefs();
        updateFinalSetupLiveUI();
      });
    }

    body.querySelectorAll("[data-preset-sec]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const sec = Number(btn.dataset.presetSec);
        setup.perQSeconds = sec;
        setup.perQSecondsInput = String(sec);
        persistPrefs();
        renderFinalExamSetup();
      });
    });

    body.querySelectorAll("[data-final-corr]").forEach((btn) => {
      btn.addEventListener("click", () => {
        setup.correctionMode = btn.dataset.finalCorr;
        persistPrefs();
        renderFinalExamSetup();
      });
    });

    const launchBtn = document.getElementById("btnLaunchFinalExam");
    if (launchBtn) {
      launchBtn.addEventListener("click", () => startFinalExamFromSetup());
    }
  }

  async function startFinalExamFromSetup() {
    const setup = state.finalSetup;
    const check = validateFinalSetup(setup);
    if (!check.valid) {
      updateFinalSetupLiveUI();
      return;
    }

    const launchBtn = document.getElementById("btnLaunchFinalExam");
    if (launchBtn) {
      launchBtn.disabled = true;
      launchBtn.textContent = "Memuat bank soal JSON...";
    }

    const selectedBabs = [...setup.selectedBabs].sort((a, b) => a - b);
    const entries = await Promise.all(selectedBabs.map(async (bab) => [bab, await loadChapterBankPool(bab)]));
    const poolsByBab = Object.fromEntries(entries);

    const { questions, counts } = buildFinalExamSet(selectedBabs, check.total, poolsByBab);
    if (questions.length === 0) {
      updateFinalSetupLiveUI();
      return;
    }

    beginFinalExamSession({
      questions,
      counts,
      selectedBabs,
      timerMode: setup.timerMode,
      perQSeconds: check.perQSeconds,
      correctionMode: setup.correctionMode,
      isWrongRetry: false
    });
  }

  function beginFinalExamSession(cfg) {
    clearFinalTimer();
    const timerMode = cfg.timerMode || "none";
    const perQSeconds = cfg.perQSeconds || 30;
    const timeLeftSec = timerMode === "total_60" ? 3600 : timerMode === "per_q" ? perQSeconds : 0;

    state.finalSession = {
      questions: cfg.questions,
      counts: cfg.counts || {},
      selectedBabs: cfg.selectedBabs || [],
      timerMode,
      perQSeconds,
      timeLeftSec,
      correctionMode: cfg.correctionMode || "drill",
      isWrongRetry: !!cfg.isWrongRetry,
      step: 0,
      answers: {}, // { [q.id]: { selectedOption, inputValue, ok, timedOut } }
      finishReason: "manual",
      savedToProfile: false
    };
    state.finalPhase = "running";
    state.finalReviewFilter = "all";
    renderFinalExamView();
    if (timerMode !== "none") startFinalTimer();
  }

  function refreshFinalTimerDom() {
    const s = state.finalSession;
    if (!s || s.timerMode === "none") return;
    const valEl = document.getElementById("finalTimerValue");
    const pillEl = document.getElementById("finalTimerPill");
    if (valEl) valEl.textContent = formatCountdown(s.timeLeftSec);
    if (pillEl) {
      const urgent = s.timerMode === "per_q" ? s.timeLeftSec <= 10 : s.timeLeftSec <= 300;
      pillEl.classList.toggle("is-urgent", urgent);
    }
  }

  function startFinalTimer() {
    clearFinalTimer();
    const s = state.finalSession;
    if (!isFinalExamActive() || !s || s.timerMode === "none") return;

    finalTimerId = setInterval(() => {
      if (!isFinalExamActive() || !state.finalSession) {
        clearFinalTimer();
        return;
      }
      const curS = state.finalSession;
      curS.timeLeftSec = Math.max(0, curS.timeLeftSec - 1);
      refreshFinalTimerDom();

      if (curS.timeLeftSec <= 0) {
        if (curS.timerMode === "total_60") {
          finishFinalExam("time_up");
        } else if (curS.timerMode === "per_q") {
          handlePerQuestionTimeout();
        }
      }
    }, 1000);
  }

  function handlePerQuestionTimeout() {
    const s = state.finalSession;
    if (!s || s.timerMode !== "per_q") return;
    const q = s.questions[s.step];
    if (!q) {
      finishFinalExam("time_up");
      return;
    }

    if (s.correctionMode === "drill") {
      clearFinalTimer();
      if (!s.answers[q.id]) {
        s.answers[q.id] = { selectedOption: null, inputValue: "", ok: false, timedOut: true };
        recordAnswerToWrongBank(finalExamObj, q.id, false);
      }
      renderFinalExamRunning();
      return;
    }

    // Mode Simulasi (end): nilai pilihan yang mungkin sudah diisi, atau tandai timeout
    if (!s.answers[q.id]) {
      s.answers[q.id] = { selectedOption: null, inputValue: "", ok: false, timedOut: true };
    }
    if (s.step + 1 < s.questions.length) {
      s.step += 1;
      s.timeLeftSec = s.perQSeconds;
      renderFinalExamRunning();
    } else {
      finishFinalExam("time_up");
    }
  }

  function evaluateFinalQuestionAnswer(q, rec) {
    if (!rec) return false;
    if (q.type === "mcq") {
      return rec.selectedOption !== null && rec.selectedOption !== undefined && rec.selectedOption === q.answer;
    }
    const cleaned = norm(rec.inputValue || "");
    if (!cleaned || !Array.isArray(q.accepted)) return false;
    return q.accepted.some((a) => norm(a) === cleaned);
  }

  function submitFinalMcq(optIdx) {
    const s = state.finalSession;
    if (!isFinalExamActive() || !s) return;
    const q = s.questions[s.step];
    if (!q || q.type !== "mcq") return;

    if (s.correctionMode === "drill") {
      if (s.answers[q.id]) return;
      clearFinalTimer();
      const ok = optIdx === q.answer;
      s.answers[q.id] = { selectedOption: optIdx, inputValue: "", ok, timedOut: false };
      recordAnswerToWrongBank(finalExamObj, q.id, ok);
      renderFinalExamRunning();
      return;
    }

    // Simulasi Ujian (end): boleh ganti pilihan sebelum dikumpulkan
    const ok = optIdx === q.answer;
    s.answers[q.id] = { selectedOption: optIdx, inputValue: "", ok, timedOut: false };
    renderFinalExamRunning();
  }

  function submitFinalInput(raw) {
    const s = state.finalSession;
    if (!isFinalExamActive() || !s) return;
    const q = s.questions[s.step];
    if (!q || q.type === "mcq") return;
    const cleaned = norm(raw);
    if (!cleaned) return;
    const ok = Array.isArray(q.accepted) && q.accepted.some((a) => norm(a) === cleaned);

    if (s.correctionMode === "drill") {
      if (s.answers[q.id]) return;
      clearFinalTimer();
      s.answers[q.id] = { selectedOption: null, inputValue: raw, ok, timedOut: false };
      recordAnswerToWrongBank(finalExamObj, q.id, ok);
      renderFinalExamRunning();
      return;
    }

    s.answers[q.id] = { selectedOption: null, inputValue: raw, ok, timedOut: false };
    if (s.step + 1 < s.questions.length) {
      nextFinalQ();
    } else {
      renderFinalExamRunning();
    }
  }

  function nextFinalQ() {
    const s = state.finalSession;
    if (!isFinalExamActive() || !s) return;
    if (s.step + 1 >= s.questions.length) {
      finishFinalExam("manual");
      return;
    }
    s.step += 1;
    if (s.timerMode === "per_q") {
      s.timeLeftSec = s.perQSeconds;
      startFinalTimer();
    }
    renderFinalExamRunning();
  }

  function finishFinalExam(reason) {
    clearFinalTimer();
    const s = state.finalSession;
    if (!s) return;
    s.finishReason = reason || "manual";

    let correctCount = 0;
    s.questions.forEach((q) => {
      const rec = s.answers[q.id];
      const ok = evaluateFinalQuestionAnswer(q, rec);
      if (rec) {
        rec.ok = ok;
      } else {
        s.answers[q.id] = { selectedOption: null, inputValue: "", ok: false, timedOut: reason === "time_up" };
      }
      if (ok) correctCount += 1;
      recordAnswerToWrongBank(finalExamObj, q.id, ok);
    });

    if (!s.savedToProfile && !s.isWrongRetry) {
      saveQuizScore(finalExamObj, correctCount, s.questions.length);
      s.savedToProfile = true;
    }

    state.finalPhase = "result";
    renderFinalExamView();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderFinalExamRunning() {
    const body = document.getElementById("chapterBody");
    const s = state.finalSession;
    if (!body || !s) return;
    const total = s.questions.length;
    const q = s.questions[s.step];
    const rec = s.answers[q.id] || null;
    const isDrill = s.correctionMode === "drill";
    const locked = isDrill && !!rec;

    const answeredCount = s.questions.filter((item) => {
      const a = s.answers[item.id];
      if (!a) return false;
      if (item.type === "mcq") return a.selectedOption !== null && a.selectedOption !== undefined;
      return norm(a.inputValue || "") !== "" || a.timedOut;
    }).length;
    const correctSoFar = s.questions.filter((item) => s.answers[item.id] && s.answers[item.id].ok).length;
    const pctBar = Math.round(((s.step + (locked ? 1 : 0)) / total) * 100);

    const timerUrgent = s.timerMode === "per_q" ? s.timeLeftSec <= 10 : s.timeLeftSec <= 300;
    const timerPillHtml = s.timerMode === "none"
      ? `<span class="no-timer-pill">Tanpa Timer</span>`
      : `<span class="final-timer-pill ${timerUrgent ? "is-urgent" : ""}" id="finalTimerPill">⏱ <span id="finalTimerValue">${formatCountdown(s.timeLeftSec)}</span>${s.timerMode === "per_q" ? " / soal" : ""}</span>`;

    const simStripHtml = !isDrill && s.timerMode !== "per_q" ? `
      <div class="sim-nav-strip" aria-label="Navigasi nomor soal">
        ${s.questions.map((item, idx) => {
          const a = s.answers[item.id];
          const isAns = a && (item.type === "mcq" ? a.selectedOption !== null && a.selectedOption !== undefined : norm(a.inputValue || "") !== "");
          return `<button type="button" class="sim-num-btn ${isAns ? "is-answered" : ""} ${idx === s.step ? "is-current" : ""}" data-sim-jump="${idx}">${idx + 1}</button>`;
        }).join("")}
      </div>
    ` : "";

    const speakPrompt = extractSpeakablePrompt(q.prompt);
    let interactionHtml = "";
    if (q.type === "mcq") {
      interactionHtml = `
        <div class="options-grid">
          ${q.options.map((opt, idx) => {
            let cls = "";
            if (isDrill && rec) {
              if (idx === q.answer) cls = "is-correct";
              else if (idx === rec.selectedOption) cls = "is-wrong";
            } else if (!isDrill && rec && rec.selectedOption === idx) {
              cls = "is-picked";
            }
            const optAudio = hasJapaneseText(opt.jp) ? ttsBtnHtml(opt.jp, "tts-btn-opt") : "";
            return `
              <div class="option-row">
                <button type="button" class="option-btn ${cls}" data-opt="${idx}" ${locked ? "disabled" : ""}>
                  <span class="option-key">${idx + 1}</span>
                  <div class="option-content">
                    <span class="option-jp">${esc(opt.jp)}</span>
                    ${opt.romaji ? `<span class="romaji">${esc(opt.romaji)}</span>` : ""}
                  </div>
                </button>
                ${optAudio}
              </div>
            `;
          }).join("")}
        </div>
      `;
    } else {
      const val = rec ? (rec.inputValue || "") : "";
      const inputCls = isDrill && rec ? (rec.ok ? "is-correct" : "is-wrong") : "";
      interactionHtml = `
        <form class="input-quiz-form" id="finalInputForm">
          <input
            type="text"
            class="quiz-text-input ${inputCls}"
            id="finalTextInput"
            value="${esc(val)}"
            placeholder="${esc(q.placeholder || "Ketik jawaban Hiragana atau Romaji...")}"
            autocomplete="off"
            autocapitalize="off"
            autocorrect="off"
            spellcheck="false"
            enterkeyhint="done"
            ${locked ? "disabled" : ""}
          >
          ${isDrill && !rec ? `<button type="submit" class="btn-primary">Cek Jawaban</button>` : ""}
        </form>
        ${isDrill && rec && !rec.ok ? `
          <div class="expected-answer-line">Jawaban benar: <strong class="jp">${esc(q.displayAnswer)}</strong></div>
        ` : ""}
      `;
    }

    const navRightHtml = isDrill
      ? (rec ? `<button type="button" class="btn-primary" id="btnFinalNext">${s.step + 1 < total ? "Soal Berikutnya →" : "Lihat Hasil →"}</button>` : "")
      : `
        <div style="display:flex; gap:8px; flex-wrap:wrap;">
          ${s.timerMode !== "per_q" && s.step > 0 ? `<button type="button" class="btn-secondary" id="btnFinalPrev">← Sebelumnya</button>` : ""}
          ${s.step + 1 < total
            ? `<button type="button" class="btn-secondary" id="btnFinalNext">Berikutnya →</button>`
            : ""}
          <button type="button" class="btn-primary" id="btnSubmitAllFinal">✓ Kumpulkan &amp; Koreksi (${answeredCount}/${total})</button>
        </div>
      `;

    body.innerHTML = `
      <div class="quiz-shell">
        <div class="quiz-mode-bar">
          <div class="quiz-mode-left">
            ${timerPillHtml}
            <span style="font-size: 13px; font-weight: 700;">
              ${isDrill ? "⚡ Langsung Koreksi (Drill)" : "📝 Simulasi Ujian (Koreksi di Akhir)"} · ${s.selectedBabs.length} Bab
            </span>
          </div>
          <div class="quiz-filter-btns">
            <button type="button" class="pill-btn chip-red final-exit-btn" id="btnExitFinalExam">✕ Keluar Tes</button>
          </div>
        </div>

        ${simStripHtml}

        <div class="quiz-progress-head">
          <span>Soal ${s.step + 1} dari ${total} ${q.bab ? `(Bab ${q.bab})` : ""}</span>
          <span>${isDrill ? `Benar sejauh ini: <strong>${correctSoFar} / ${answeredCount}</strong>` : `Terjawab: <strong>${answeredCount} / ${total}</strong>`}</span>
        </div>
        <div class="progress-track" style="margin-bottom: 16px;">
          <div class="progress-fill" style="width: ${pctBar}%"></div>
        </div>

        <div class="quiz-card">
          <div class="quiz-tag-row">
            <span class="quiz-type-badge">${esc(q.badge || `Bab ${q.bab || ""}`)}</span>
            <button type="button" class="link-btn" id="btnPeekCheat">${q.bab ? `Intip Rumus Cepat Bab ${q.bab}` : "Intip Master Rumus Cepat"}</button>
          </div>

          <div class="quiz-prompt-row">
            <div class="quiz-prompt">${esc(q.prompt)}</div>
            ${speakPrompt ? ttsBtnHtml(speakPrompt) : ""}
          </div>
          ${q.promptRomaji ? `<span class="romaji quiz-prompt-romaji">${esc(q.promptRomaji)}</span>` : ""}
          <p class="quiz-sub">${esc(q.sub || "")}</p>

          ${interactionHtml}

          ${isDrill && rec ? `
            <div class="feedback-box ${rec.ok ? "is-correct" : "is-wrong"}">
              <div class="feedback-title">${rec.ok ? "✓ Benar!" : rec.timedOut ? "⏱ Waktu soal habis — pelajari penjelasannya:" : "✕ Belum tepat — pelajari penjelasannya:"}</div>
              <p class="feedback-explain">${esc(q.explain || "")}</p>
            </div>
          ` : ""}

          <div class="quiz-nav-row">
            <span class="kbd-hint">${q.type === "mcq" ? (isDrill ? "Pintasan: angka 1–4 pilih · Enter lanjut" : "Pilih jawaban lalu lanjut atau kumpulkan") : "Ketik Hiragana atau Romaji"}</span>
            ${navRightHtml}
          </div>
        </div>
      </div>
    `;

    document.getElementById("btnExitFinalExam").addEventListener("click", () => {
      guardFinalExamExit(() => openFinalExam());
    });

    document.getElementById("btnPeekCheat").addEventListener("click", () => {
      if (q.bab) openCheatModalForChapter(q.bab);
      else openMasterCheatModal();
    });

    if (q.type === "mcq") {
      body.querySelectorAll(".option-btn").forEach((btn) => {
        btn.addEventListener("click", () => submitFinalMcq(Number(btn.dataset.opt)));
      });
    } else {
      const form = document.getElementById("finalInputForm");
      const input = document.getElementById("finalTextInput");
      if (input && !locked && window.innerWidth > 820) input.focus();
      if (input && !isDrill) {
        input.addEventListener("input", () => {
          const val = input.value;
          const ok = norm(val) !== "" && Array.isArray(q.accepted) && q.accepted.some((a) => norm(a) === norm(val));
          s.answers[q.id] = { selectedOption: null, inputValue: val, ok, timedOut: false };
          const submitBtn = document.getElementById("btnSubmitAllFinal");
          if (submitBtn) {
            const cnt = s.questions.filter((item) => {
              const a = s.answers[item.id];
              if (!a) return false;
              return item.type === "mcq" ? a.selectedOption !== null && a.selectedOption !== undefined : norm(a.inputValue || "") !== "";
            }).length;
            submitBtn.textContent = `✓ Kumpulkan & Koreksi (${cnt}/${total})`;
          }
        });
      }
      if (form) {
        form.addEventListener("submit", (e) => {
          e.preventDefault();
          if (!locked && input) submitFinalInput(input.value);
        });
      }
    }

    body.querySelectorAll("[data-sim-jump]").forEach((btn) => {
      btn.addEventListener("click", () => {
        s.step = Number(btn.dataset.simJump);
        renderFinalExamRunning();
      });
    });

    const prevBtn = document.getElementById("btnFinalPrev");
    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        if (s.step > 0) {
          s.step -= 1;
          renderFinalExamRunning();
        }
      });
    }
    const nextBtn = document.getElementById("btnFinalNext");
    if (nextBtn) nextBtn.addEventListener("click", () => nextFinalQ());

    const submitAllBtn = document.getElementById("btnSubmitAllFinal");
    if (submitAllBtn) submitAllBtn.addEventListener("click", () => finishFinalExam("manual"));
  }

  function renderFinalExamResult() {
    const body = document.getElementById("chapterBody");
    const s = state.finalSession;
    if (!body || !s) return;

    const total = s.questions.length;
    const correctCount = s.questions.filter((q) => s.answers[q.id] && s.answers[q.id].ok).length;
    const wrongQuestions = s.questions.filter((q) => !(s.answers[q.id] && s.answers[q.id].ok));
    const pct = total > 0 ? Math.round((correctCount / total) * 100) : 0;

    const msg = s.finishReason === "time_up"
      ? `⏱ Waktu habis! Dari ${total} soal, kamu berhasil menjawab benar ${correctCount} soal (${pct}%).`
      : pct >= 80
      ? `Luar biasa! Skor Tes Akhir ${pct}% (${correctCount}/${total}) dan tersimpan di browser.`
      : `Skor ${pct}% (${correctCount}/${total}). Periksa pembahasan di bawah atau ulangi khusus soal yang masih meleset.`;

    const filter = state.finalReviewFilter || "all";
    const reviewItems = s.questions
      .map((q, idx) => ({ q, idx, rec: s.answers[q.id] || { ok: false } }))
      .filter(({ rec }) => (filter === "wrong" ? !rec.ok : filter === "correct" ? rec.ok : true));

    const reviewHtml = reviewItems.map(({ q, idx, rec }) => {
      let userAnsText = "(Tidak dijawab)";
      let correctAnsText = "";
      if (q.type === "mcq") {
        if (rec.selectedOption !== null && rec.selectedOption !== undefined && q.options[rec.selectedOption]) {
          userAnsText = q.options[rec.selectedOption].jp;
        }
        correctAnsText = q.options[q.answer] ? q.options[q.answer].jp : "";
      } else {
        if (rec.inputValue && rec.inputValue.trim()) userAnsText = rec.inputValue;
        correctAnsText = q.displayAnswer || (q.accepted && q.accepted[0]) || "";
      }

      return `
        <article class="final-review-item ${rec.ok ? "is-correct" : "is-wrong"}">
          <div class="final-review-meta">
            <span><strong>No. ${idx + 1}</strong> · ${q.bab ? `Bab ${q.bab}` : "Lintas Bab"} · ${esc(q.badge || "")}</span>
            <span class="zone-pill ${rec.ok ? "zone-green" : "zone-red"}">${rec.ok ? "✓ Benar" : rec.timedOut ? "⏱ Waktu Habis" : "✕ Salah"}</span>
          </div>
          <div class="final-review-prompt">${esc(q.prompt)}</div>
          <div class="final-review-ans">
            <span>Jawaban kamu: <strong class="jp">${esc(userAnsText)}</strong></span>
            ${!rec.ok ? `<span>Jawaban benar: <strong class="jp">${esc(correctAnsText)}</strong></span>` : ""}
          </div>
          ${q.explain ? `<p class="final-review-explain">${esc(q.explain)}</p>` : ""}
        </article>
      `;
    }).join("");

    body.innerHTML = `
      <div class="quiz-shell">
        <div class="result-card">
          <p class="eyebrow">HASIL TES AKHIR · ${s.correctionMode === "drill" ? "LANGSUNG KOREKSI" : "SIMULASI UJIAN"}</p>
          <div class="result-score">${correctCount} / ${total} <span class="result-pct">(${pct}%)</span></div>
          <p class="result-msg">${esc(msg)}</p>
          <div class="result-actions">
            ${wrongQuestions.length > 0 ? `
              <button type="button" class="btn-primary" id="btnFinalRetryWrong">
                Ulangi ${wrongQuestions.length} Soal Salah Saja
              </button>
            ` : ""}
            <button type="button" class="btn-secondary" id="btnFinalReconfigure">⚙️ Atur Ulang Tes Akhir</button>
            ${!s.isWrongRetry ? `<button type="button" class="btn-secondary" id="btnFinalRerunSame">🎲 Acak Paket Baru (Setelan Sama)</button>` : ""}
            <button type="button" class="btn-secondary" id="btnFinalBackOverview">← Kembali ke Peta Bab</button>
          </div>
        </div>

        <div class="final-review-header">
          <h2 style="margin:0; font-size:17px;">Pembahasan Lengkap (${s.questions.length} Soal)</h2>
          <div class="final-review-filters">
            <button type="button" class="filter-chip ${filter === "all" ? "is-active" : ""}" data-rev-filter="all">Semua (${total})</button>
            <button type="button" class="filter-chip chip-red ${filter === "wrong" ? "is-active" : ""}" data-rev-filter="wrong">Salah (${wrongQuestions.length})</button>
            <button type="button" class="filter-chip chip-green ${filter === "correct" ? "is-active" : ""}" data-rev-filter="correct">Benar (${correctCount})</button>
          </div>
        </div>

        <div class="final-review-list">${reviewHtml || '<p style="color:var(--color-ink-muted);">Tidak ada soal pada filter ini.</p>'}</div>
      </div>
    `;

    const btnWrong = document.getElementById("btnFinalRetryWrong");
    if (btnWrong) {
      btnWrong.addEventListener("click", () => {
        const mixedWrong = fisherYates(wrongQuestions).map((q) => shuffleQuestionOptions(q, q.bab));
        beginFinalExamSession({
          questions: mixedWrong,
          selectedBabs: s.selectedBabs,
          timerMode: s.timerMode,
          perQSeconds: s.perQSeconds,
          correctionMode: s.correctionMode,
          isWrongRetry: true
        });
      });
    }

    document.getElementById("btnFinalReconfigure").addEventListener("click", () => openFinalExam());

    const btnRerun = document.getElementById("btnFinalRerunSame");
    if (btnRerun) btnRerun.addEventListener("click", () => startFinalExamFromSetup());

    document.getElementById("btnFinalBackOverview").addEventListener("click", () => renderOverview());

    body.querySelectorAll("[data-rev-filter]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.finalReviewFilter = btn.dataset.revFilter;
        renderFinalExamResult();
      });
    });
  }

  function renderQuizBody(ch) {
    const body = document.getElementById("chapterBody");
    const total = state.quizIndices.length;
    const savedWrongCount = getSavedWrongCount(ch);

    const b17Count = (prefix) => ch.questions.filter((q) => q.section && q.section.startsWith(prefix)).length;
    const bab17FilterHtml = ch.isMergedBab17 ? `
      <div class="quiz-filter-btns">
        <button type="button" class="filter-chip ${state.quizModeLabel.startsWith("Semua") ? "is-active" : ""}" data-b17set="all">Semua (${ch.questions.length})</button>
        <button type="button" class="filter-chip ${state.quizModeLabel.startsWith("Tema A") ? "is-active" : ""}" data-b17set="A">A: V-ない (${b17Count("A")})</button>
        <button type="button" class="filter-chip ${state.quizModeLabel.startsWith("Tema B") ? "is-active" : ""}" data-b17set="B">B: ～ないでください (${b17Count("B")})</button>
        <button type="button" class="filter-chip ${state.quizModeLabel.startsWith("Tema C") ? "is-active" : ""}" data-b17set="C">C: ～なければなりません (${b17Count("C")})</button>
        <button type="button" class="filter-chip ${state.quizModeLabel.startsWith("Tema D") ? "is-active" : ""}" data-b17set="D">D: ～なくてもいいです (${b17Count("D")})</button>
      </div>
    ` : "";

    const kanaFilterHtml = ch.isKanaQuiz ? `
      <div class="quiz-filter-btns">
        <button type="button" class="filter-chip ${state.kanaQuizSet === "all" ? "is-active" : ""}" data-kset="all">Semua (40)</button>
        <button type="button" class="filter-chip ${state.kanaQuizSet === "hiragana" ? "is-active" : ""}" data-kset="hiragana">Hiragana (10)</button>
        <button type="button" class="filter-chip ${state.kanaQuizSet === "katakana" ? "is-active" : ""}" data-kset="katakana">Katakana (10)</button>
        <button type="button" class="filter-chip ${state.kanaQuizSet === "kembar" ? "is-active" : ""}" data-kset="kembar">Huruf Kembar (10)</button>
        <button type="button" class="filter-chip ${state.kanaQuizSet === "kata" ? "is-active" : ""}" data-kset="kata">Baca Kata (10)</button>
      </div>
    ` : "";

    const savedWrongBtnHtml = savedWrongCount > 0 && !state.quizIsWrongRetry ? `
      <button type="button" class="filter-chip chip-red" id="btnDrillSavedWrong">
        🔁 Latih ${savedWrongCount} Soal Salah Tersimpan
      </button>
    ` : "";

    let bankDrillHtml = "";
    if (ch.bankSize && !ch.isFinalExam && !ch.isKanaQuiz && !ch.isRefQuiz) {
      const seenSet = new Set(getSeenChapterIds(ch.num));
      const seenCount = ch.questions.filter((q) => seenSet.has(q.id)).length;
      const unseenCount = ch.questions.length - seenCount;
      bankDrillHtml = `
        <span class="zone-pill ${unseenCount === 0 ? "zone-green" : "zone-neutral"}" id="bankSeenBadge">
          ${unseenCount === 0 ? `✓ ${seenCount}/${ch.questions.length} Terkuras!` : `Riwayat: ${seenCount}/${ch.questions.length} dikerjakan`}
        </span>
        ${unseenCount > 0 ? `<button type="button" class="filter-chip" id="btnDrillUnseen">🎯 Kuras Soal Baru (${unseenCount} sisa)</button>` : ""}
        <button type="button" class="filter-chip ${total === ch.questions.length ? "is-active" : ""}" id="btnDrillAll50">📚 Semua ${ch.questions.length} Soal (Acak)</button>
        ${seenCount > 0 ? `<button type="button" class="filter-chip" id="btnResetSeenBank">🔄 Reset Riwayat</button>` : ""}
      `;
    }

    const topBarHtml = `
      <div class="quiz-mode-bar">
        <div class="quiz-mode-left">
          <span class="no-timer-pill">Tanpa Batas Waktu</span>
          <span style="font-size: 13px; font-weight: 700;">${esc(state.quizModeLabel)}</span>
        </div>
        <div class="quiz-filter-btns">
          ${bankDrillHtml}
          ${savedWrongBtnHtml}
          ${bab17FilterHtml}
          ${kanaFilterHtml}
        </div>
      </div>
    `;

    // Hasil Kuis
    if (state.currentStep >= total) {
      const correctCount = Object.values(state.results).filter(Boolean).length;
      const pct = total > 0 ? Math.round((correctCount / total) * 100) : 0;
      saveQuizScore(ch, correctCount, total);

      const nextCh = !ch.isFinalExam && !ch.isKanaQuiz && !ch.isRefQuiz ? getNextChapter(ch.num) : null;
      const msg = pct >= 80
        ? `Mantap sekali! Skor kamu ${pct}% — materi ini sudah dikuasai dan tersimpan di browser.`
        : `Tidak masalah, tidak ada batas waktu! Intip lagi Rumus Cepat atau ulangi khusus soal yang meleset.`;

      const backLabel = ch.isKanaQuiz
        ? "← Kembali ke Tabel Kana"
        : ch.isRefQuiz
        ? "← Kembali ke Materi Referensi"
        : ch.isFinalExam
        ? "← Kembali ke Peta Bab"
        : `← Lihat Materi Bab ${ch.num}`;

      body.innerHTML = `
        <div class="quiz-shell">
          ${topBarHtml}
          <div class="result-card">
            <p class="eyebrow">HASIL LATIHAN · ${esc(state.quizModeLabel)}</p>
            <div class="result-score">${correctCount} / ${total} <span class="result-pct">(${pct}%)</span></div>
            <p class="result-msg">${esc(msg)}</p>
            <div class="result-actions">
              ${state.wrongIds.length > 0 ? `
                <button type="button" class="btn-primary" id="btnRetryWrong">
                  Ulangi ${state.wrongIds.length} Soal Salah Saja
                </button>
              ` : ""}
              <button type="button" class="btn-secondary" id="btnRetrySet">Ulangi Paket Ini</button>
              ${ch.bankSize ? `<button type="button" class="btn-secondary" id="btnNewSample">🎲 Acak Soal Baru</button>` : ""}
              <button type="button" class="btn-secondary" id="btnBackMateri">${esc(backLabel)}</button>
              ${nextCh ? `
                <button type="button" class="btn-primary" id="btnGoNextCh">
                  Lanjut ke Bab ${nextCh.num} →
                </button>
              ` : ""}
            </div>
          </div>
        </div>
      `;

      bindQuizTopActions(body, ch);
      const btnWrong = document.getElementById("btnRetryWrong");
      if (btnWrong) {
        btnWrong.addEventListener("click", () => {
          const idxs = state.wrongIds.map((id) => ch.questions.findIndex((q) => q.id === id)).filter((i) => i >= 0);
          resetQuiz(idxs, `Ulangi ${idxs.length} Soal Salah`, true);
          renderQuizBody(ch);
        });
      }
      document.getElementById("btnRetrySet").addEventListener("click", () => {
        resetQuiz([...state.quizIndices], state.quizModeLabel, state.quizIsWrongRetry);
        renderQuizBody(ch);
      });
      const btnNewSample = document.getElementById("btnNewSample");
      if (btnNewSample) {
        btnNewSample.addEventListener("click", () => {
          const idxs = pickSampleIndices(ch);
          resetQuiz(idxs, `${idxs.length} Soal Acak dari Bank ${ch.bankSize} Bab ${ch.num}`, false);
          renderQuizBody(ch);
        });
      }
      document.getElementById("btnBackMateri").addEventListener("click", () => {
        if (ch.isKanaQuiz) {
          openKana("hiragana");
        } else if (ch.isRefQuiz) {
          state.refTab = "materi";
          state.activeTab = "materi";
          renderReferencesView();
        } else if (ch.isFinalExam) {
          renderOverview();
        } else {
          state.activeTab = "materi";
          renderChapterView();
        }
      });
      const btnNextCh = document.getElementById("btnGoNextCh");
      if (btnNextCh && nextCh) {
        btnNextCh.addEventListener("click", () => openChapter(nextCh.num, "materi"));
      }
      return;
    }

    const q = ch.questions[state.quizIndices[state.currentStep]];
    const answeredCount = Object.keys(state.results).length;
    const correctCount = Object.values(state.results).filter(Boolean).length;
    const pctBar = Math.round(((state.currentStep + (state.answered ? 1 : 0)) / total) * 100);
    const speakPrompt = extractSpeakablePrompt(q.prompt);

    let interactionHtml = "";
    if (q.type === "mcq") {
      interactionHtml = `
        <div class="options-grid">
          ${q.options.map((opt, idx) => {
            let cls = "";
            if (state.answered) {
              if (idx === q.answer) cls = "is-correct";
              else if (idx === state.selectedOption) cls = "is-wrong";
            }
            const optAudio = !ch.isKanaQuiz && hasJapaneseText(opt.jp) ? ttsBtnHtml(opt.jp, "tts-btn-opt") : "";
            return `
              <div class="option-row">
                <button type="button" class="option-btn ${cls}" data-opt="${idx}" ${state.answered ? "disabled" : ""}>
                  <span class="option-key">${idx + 1}</span>
                  <div class="option-content">
                    <span class="option-jp">${esc(opt.jp)}</span>
                    ${opt.romaji ? `<span class="romaji">${esc(opt.romaji)}</span>` : ""}
                  </div>
                </button>
                ${optAudio}
              </div>
            `;
          }).join("")}
        </div>
      `;
    } else {
      interactionHtml = `
        <form class="input-quiz-form" id="inputQuizForm">
          <input
            type="text"
            class="quiz-text-input ${state.answered ? (state.isCorrectCurrent ? "is-correct" : "is-wrong") : ""}"
            id="quizTextInput"
            value="${esc(state.inputValue)}"
            placeholder="${esc(q.placeholder)}"
            autocomplete="off"
            autocapitalize="off"
            autocorrect="off"
            spellcheck="false"
            enterkeyhint="done"
            ${state.answered ? "disabled" : ""}
          >
          ${!state.answered ? `<button type="submit" class="btn-primary">Cek Jawaban</button>` : ""}
        </form>
        ${state.answered && !state.isCorrectCurrent ? `
          <div class="expected-answer-line">Jawaban benar: <strong class="jp">${esc(q.displayAnswer)}</strong></div>
        ` : ""}
      `;
    }

    const peekText = ch.isKanaQuiz
      ? "Intip Huruf Kana"
      : ch.isRefQuiz
      ? "Intip Materi Referensi"
      : ch.isFinalExam
      ? (q.bab ? `Intip Rumus Cepat Bab ${q.bab}` : "Intip Master Rumus Cepat")
      : `Intip Rumus Cepat Bab ${ch.num}`;

    body.innerHTML = `
      <div class="quiz-shell">
        ${topBarHtml}

        <div class="quiz-progress-head">
          <span>Soal ${state.currentStep + 1} dari ${total}</span>
          <span>Benar sejauh ini: <strong>${correctCount} / ${answeredCount}</strong></span>
        </div>
        <div class="progress-track" style="margin-bottom: 16px;">
          <div class="progress-fill" style="width: ${pctBar}%"></div>
        </div>

        <div class="quiz-card">
          <div class="quiz-tag-row">
            <span class="quiz-type-badge">${esc(q.badge)}</span>
            <button type="button" class="link-btn" id="btnPeekCheat">${esc(peekText)}</button>
          </div>

          <div class="quiz-prompt-row">
            <div class="quiz-prompt">${esc(q.prompt)}</div>
            ${!ch.isKanaQuiz && speakPrompt ? ttsBtnHtml(speakPrompt) : ""}
          </div>
          ${q.promptRomaji ? `<span class="romaji quiz-prompt-romaji">${esc(q.promptRomaji)}</span>` : ""}
          <p class="quiz-sub">${esc(q.sub)}</p>

          ${interactionHtml}

          ${state.answered ? `
            <div class="feedback-box ${state.isCorrectCurrent ? "is-correct" : "is-wrong"}">
              <div class="feedback-title">${state.isCorrectCurrent ? "✓ Benar!" : "✕ Belum tepat — pelajari penjelasannya:"}</div>
              <p class="feedback-explain">${esc(q.explain)}</p>
            </div>
          ` : ""}

          <div class="quiz-nav-row">
            <span class="kbd-hint">${q.type === "mcq" ? "Pintasan: angka 1–4 pilih · Enter lanjut" : "Ketik Hiragana atau Romaji lalu Enter"}</span>
            ${state.answered ? `
              <button type="button" class="btn-primary" id="btnNextQ">
                ${state.currentStep + 1 < total ? "Soal Berikutnya →" : "Lihat Hasil →"}
              </button>
            ` : ""}
          </div>
        </div>
      </div>
    `;

    bindQuizTopActions(body, ch);

    document.getElementById("btnPeekCheat").addEventListener("click", () => {
      if (ch.isKanaQuiz) {
        openKana("kembar");
      } else if (ch.isRefQuiz) {
        state.refTab = "materi";
        state.activeTab = "materi";
        renderReferencesView();
      } else if (ch.isFinalExam && q.bab) {
        openCheatModalForChapter(q.bab);
      } else if (!ch.isFinalExam) {
        openCheatModalForChapter(ch.num);
      } else {
        openMasterCheatModal();
      }
    });

    if (q.type === "mcq") {
      body.querySelectorAll(".option-btn").forEach((btn) => {
        btn.addEventListener("click", () => submitMcq(ch, Number(btn.dataset.opt)));
      });
    } else {
      const form = document.getElementById("inputQuizForm");
      const input = document.getElementById("quizTextInput");
      if (input && !state.answered && window.innerWidth > 820) input.focus();
      if (form) {
        form.addEventListener("submit", (e) => {
          e.preventDefault();
          if (!state.answered) submitInput(ch, input.value);
        });
      }
    }

    const nextBtn = document.getElementById("btnNextQ");
    if (nextBtn) nextBtn.addEventListener("click", () => nextQ(ch));
  }

  function bindQuizTopActions(container, ch) {
    const drillWrong = container.querySelector("#btnDrillSavedWrong");
    if (drillWrong) {
      drillWrong.addEventListener("click", () => {
        const key = quizScopeKey(ch);
        const ids = activeProfile().wrongBank[key] || [];
        const idxs = ids.map((id) => ch.questions.findIndex((q) => q.id === id)).filter((i) => i >= 0);
        if (idxs.length > 0) {
          resetQuiz(idxs, `Latih ${idxs.length} Soal Salah Tersimpan`, true);
          renderQuizBody(ch);
        }
      });
    }

    if (ch.bankSize && !ch.isFinalExam && !ch.isKanaQuiz && !ch.isRefQuiz) {
      const btnUnseen = container.querySelector("#btnDrillUnseen");
      if (btnUnseen) {
        btnUnseen.addEventListener("click", () => {
          const idxs = pickSampleIndices(ch, "unseen");
          resetQuiz(idxs, `Kuras ${idxs.length} Soal Baru Bab ${ch.num}`, false);
          renderQuizBody(ch);
        });
      }
      const btnAll50 = container.querySelector("#btnDrillAll50");
      if (btnAll50) {
        btnAll50.addEventListener("click", () => {
          const idxs = pickSampleIndices(ch, "all");
          resetQuiz(idxs, `Semua ${idxs.length} Soal Acak Bab ${ch.num}`, false);
          renderQuizBody(ch);
        });
      }
      const btnResetSeen = container.querySelector("#btnResetSeenBank");
      if (btnResetSeen) {
        btnResetSeen.addEventListener("click", () => {
          const prof = activeProfile();
          if (prof.seenBankIds) delete prof.seenBankIds[ch.num];
          persistProfiles();
          const idxs = pickSampleIndices(ch);
          resetQuiz(idxs, `${idxs.length} Soal Acak dari Bank ${ch.bankSize} Bab ${ch.num}`, false);
          renderQuizBody(ch);
        });
      }
    }

    if (ch.isMergedBab17) {
      container.querySelectorAll("[data-b17set]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const s = btn.dataset.b17set;
          if (s === "all") resetQuiz(ch.questions.map((_, i) => i), `Semua ${ch.questions.length} Soal Bab 17`, false);
          else if (s === "A") resetQuiz(ch.questions.map((q, i) => (q.section && q.section.startsWith("A") ? i : -1)).filter((i) => i >= 0), "Tema A · V-ない", true);
          else if (s === "B") resetQuiz(ch.questions.map((q, i) => (q.section && q.section.startsWith("B") ? i : -1)).filter((i) => i >= 0), "Tema B · ～ないでください", true);
          else if (s === "C") resetQuiz(ch.questions.map((q, i) => (q.section && q.section.startsWith("C") ? i : -1)).filter((i) => i >= 0), "Tema C · ～なければなりません", true);
          else if (s === "D") resetQuiz(ch.questions.map((q, i) => (q.section && q.section.startsWith("D") ? i : -1)).filter((i) => i >= 0), "Tema D · ～なくてもいいです", true);
          renderQuizBody(ch);
        });
      });
    }

    if (ch.isKanaQuiz) {
      container.querySelectorAll("[data-kset]").forEach((btn) => {
        btn.addEventListener("click", () => {
          startKanaQuiz(btn.dataset.kset);
          renderQuizBody(state.activeKanaQuizObj);
        });
      });
    }
  }

  function submitMcq(ch, optIdx) {
    if (state.answered) return;
    const q = ch.questions[state.quizIndices[state.currentStep]];
    const ok = optIdx === q.answer;
    state.answered = true;
    state.selectedOption = optIdx;
    state.isCorrectCurrent = ok;
    state.results[q.id] = ok;
    if (!ok && !state.wrongIds.includes(q.id)) state.wrongIds.push(q.id);
    recordAnswerToWrongBank(ch, q.id, ok);
    markChapterQuestionSeen(ch, q.id);
    renderQuizBody(ch);
  }

  function submitInput(ch, raw) {
    if (state.answered) return;
    const cleaned = norm(raw);
    if (!cleaned) return;
    const q = ch.questions[state.quizIndices[state.currentStep]];
    const ok = q.accepted.some((a) => norm(a) === cleaned);
    state.answered = true;
    state.inputValue = raw;
    state.isCorrectCurrent = ok;
    state.results[q.id] = ok;
    if (!ok && !state.wrongIds.includes(q.id)) state.wrongIds.push(q.id);
    recordAnswerToWrongBank(ch, q.id, ok);
    markChapterQuestionSeen(ch, q.id);
    renderQuizBody(ch);
  }

  function nextQ(ch) {
    if (!state.answered) return;
    state.currentStep += 1;
    state.answered = false;
    state.selectedOption = null;
    state.inputValue = "";
    state.isCorrectCurrent = false;
    renderQuizBody(ch);
  }

  // ===== MODAL RUMUS CEPAT =====
  function openCheatModalForChapter(num) {
    const ch = getChapter(num);
    if (!ch || !ch.cheatSheet) return;
    document.getElementById("cheatModalEyebrow").textContent = `RUMUS CEPAT KHUSUS · BAB ${ch.num}`;
    document.getElementById("cheatModalTitle").textContent = ch.cheatSheet.title;
    document.getElementById("cheatModalBody").innerHTML = buildCheatSheetTablesHtml(ch.cheatSheet);
    document.getElementById("cheatModal").hidden = false;
  }

  function openMasterCheatModal() {
    document.getElementById("cheatModalEyebrow").textContent = "MASTER CHEAT SHEET · BAB 1 – 25";
    document.getElementById("cheatModalTitle").textContent = "Ringkasan 5 Perubahan & Partikel Paling Krusial";
    const masterCs = {
      takeaway: "Setiap bab (Bab 1 s.d. Bab 25) punya Rumus Cepat berbeda! Buka bab mana saja untuk melihat tabel khususnya.",
      tables: [
        {
          heading: "Ringkasan Perbaikan 5 Bug Terbesar Bab 1–25",
          headers: ["Area", "Rumus Kunci", "Contoh"],
          rows: [
            ["Partikel Dasar", "Jam=に · Kendaraan/Alat/Tempat aksi=で · Bersama=と · Suka/Ada=が", "11じに / タクシーで / しょくどうで / ともだちと / おんがくが"],
            ["Keinginan (~tai)", "Coret ます + たいです (Negatif: ～たくないです)", "いきたいです · たべたいです"],
            ["Bentuk -Nai (Bab 17)", "Kel.I -i→-a+ない (い→わ, あります→ない) | なりません=HARUS, いいです=TIDAK PERLU", "のまない · はらわない · ださなければなりません · こなくてもいいです"],
            ["Arah Pemberian", "Saya beri=あげます · Saya terima=もらいます · Orang→SAYA=くれます", "ミラーさんは わたしに くれました · ははが つくって くれました"],
            ["Tara & Temo (Bab 25)", "～たら (Lampau biasa + ら) = Kalau | ～ても (Bentuk-て + も) = Walaupun", "おかねが あったら · おかねが なくても"]
          ]
        }
      ]
    };
    document.getElementById("cheatModalBody").innerHTML = buildCheatSheetTablesHtml(masterCs);
    document.getElementById("cheatModal").hidden = false;
  }

  function closeCheatModal() {
    document.getElementById("cheatModal").hidden = true;
  }

  // ===== MODAL PROFIL, AUDIO JEPANG, MODE, & BACKUP JSON =====
  function openProfileModal(noticeMsg) {
    if (typeof noticeMsg === "string") state.profileFeedbackMsg = noticeMsg;
    else state.profileFeedbackMsg = "";
    state.confirmResetArmed = false;
    detectJaVoices();
    document.getElementById("profileModal").hidden = false;
    syncMobileNav();
    renderProfileModalBody();
  }

  function closeProfileModal() {
    document.getElementById("profileModal").hidden = true;
    state.confirmResetArmed = false;
    syncMobileNav();
  }

  function refreshActiveView() {
    updateTopProfileLabel();
    applyRomajiState();
    renderSidebar();
    if (state.view === "overview") renderOverview();
    else if (state.view === "chapter") renderChapterView();
    else if (state.view === "kana") renderKanaView();
    else if (state.view === "kotoba") renderKotobaView();
    else if (state.view === "references") renderReferencesView();
    else if (state.view === "final_exam") renderFinalExamView();
  }

  function renderProfileModalBody() {
    const body = document.getElementById("profileModalBody");
    const prof = activeProfile();
    ensureProfileKotoba(prof);
    const teman = isTemanMode();
    const masteredBab = ALL_CHAPTERS.filter((c) => isMastered(c.num)).length;
    const doneRef = REFERENCES.filter((r) => prof.refs[r.id] && prof.refs[r.id].bestPct >= 80).length;
    const kanaBest = prof.kana && prof.kana.all ? `${prof.kana.all.bestPct}%` : "0%";
    const finalBest = prof.finalExam ? `${prof.finalExam.bestPct}%` : "-";
    const wrongTotal = getTotalWrongCount();
    const allKotobaCount = getAllKotoba().length;
    const kotobaBabTuntas = ALL_CHAPTERS.filter((c) => prof.kotoba.chapterScores[c.num] && prof.kotoba.chapterScores[c.num].bestPct >= 80).length;
    const allProfiles = Object.values(profileStore.profiles);

    const voiceNote = state.hasJaVoice === false
      ? "⚠️ Sistem perangkat ini belum melaporkan paket suara Jepang (`ja-JP`). Coba aktifkan Google Text-to-Speech Bahasa Jepang atau buka di Chrome Android / HP / Windows / macOS."
      : "✓ Web Speech API (`ja-JP`) siap dipakai langsung tanpa mengunduh audio eksternal.";

    body.innerHTML = `
      ${state.profileFeedbackMsg ? `<div class="cheatsheet-takeaway">${esc(state.profileFeedbackMsg)}</div>` : ""}

      <section class="profile-section">
        <h3>1. Ringkasan Skor Tersimpan (${esc(prof.name)})</h3>
        <div class="stat-mini-grid">
          <div class="stat-mini-box">
            <span class="stat-mini-val">${masteredBab}/25</span>
            <span class="stat-mini-lbl">Bab Tuntas (≥80%)</span>
          </div>
          <div class="stat-mini-box">
            <span class="stat-mini-val">${kotobaBabTuntas}/25</span>
            <span class="stat-mini-lbl">Kuis Kotoba (${prof.kotoba.masteredIds.length}/${allKotobaCount})</span>
          </div>
          <div class="stat-mini-box">
            <span class="stat-mini-val">${esc(kanaBest)} · ${doneRef}/${REFERENCES.length}</span>
            <span class="stat-mini-lbl">Kana &amp; Ref Tuntas</span>
          </div>
          <div class="stat-mini-box">
            <span class="stat-mini-val">${esc(finalBest)}</span>
            <span class="stat-mini-lbl">Tes Akhir · ${wrongTotal} Salah</span>
          </div>
        </div>
        <p style="font-size: 12.5px; color: var(--color-ink-muted);">
          Saat web ini dibuka lewat Netlify/browser masing-masing, setiap HP atau laptop teman otomatis punya ruang <code>localStorage</code> sendiri — skor tidak akan saling tercampur!
        </p>
      </section>

      <section class="profile-section">
        <h3>2. Ganti / Tambah Profil Lokal (Jika 1 Laptop Dipakai Bergantian)</h3>
        <div class="profile-list">
          ${allProfiles.map((p) => {
            const isAct = p.id === prof.id;
            const babCnt = Object.keys(p.chapters || {}).length;
            return `
              <div class="profile-item ${isAct ? "is-active" : ""}">
                <div>
                  <strong>${esc(p.name)}</strong> ${isAct ? '<span class="zone-pill zone-green">Aktif</span>' : ""}
                  <div style="font-size: 12px; color: var(--color-ink-muted);">
                    ${isDiagnosticUnlocked() && p.userMode === "perbaikan" ? "Mode Diagnostik Pribadi · " : ""}${babCnt} bab tersimpan
                  </div>
                </div>
                <div style="display:flex; gap:6px;">
                  ${!isAct ? `<button type="button" class="pill-btn pill-btn-accent" data-switch-prof="${esc(p.id)}">Pakai Profil Ini</button>` : ""}
                  ${allProfiles.length > 1 && !isAct ? `<button type="button" class="pill-btn" data-del-prof="${esc(p.id)}">Hapus</button>` : ""}
                </div>
              </div>
            `;
          }).join("")}
        </div>
        <form class="profile-create-row" id="createProfileForm">
          <input type="text" class="profile-input" id="newProfileName" maxlength="30" placeholder="Nama teman / profil baru (mis. Budi)">
          <button type="submit" class="btn-primary">+ Buat Profil (0% Bersih)</button>
        </form>
      </section>

      <section class="profile-section">
        <h3>3. Pengaturan Audio Jepang (🔊), Suara Pria/Wanita, &amp; Romaji</h3>
        <div class="mode-switch-btns">
          <button type="button" class="pill-btn ${state.speechRate === 0.75 ? "pill-btn-accent" : ""}" data-rate="0.75">
            🐢 0.75× Lambat (Pemula)
          </button>
          <button type="button" class="pill-btn ${state.speechRate === 1.0 ? "pill-btn-accent" : ""}" data-rate="1.0">
            🐇 1.0× Normal Jepang
          </button>
          <button type="button" class="pill-btn ${state.voiceSwapGender ? "pill-btn-accent" : ""}" id="btnSwapVoiceGender">
            ${state.voiceSwapGender ? "⇄ Suara Ditukar (Aktif)" : "⇄ Tukar Suara Pria ↔ Wanita"}
          </button>
          <button type="button" class="btn-secondary" id="btnTestVoiceMale">
            👨🔊 Tes Pria #1
          </button>
          <button type="button" class="btn-secondary" id="btnTestVoiceMale2">
            👨🔊 Tes Pria #2
          </button>
          <button type="button" class="btn-secondary" id="btnTestVoiceFemale">
            👩🔊 Tes Wanita
          </button>
          <button type="button" class="pill-btn ${state.showRomaji ? "pill-btn-accent" : ""}" id="btnModalRomaji">
            Romaji: ${state.showRomaji ? "ON" : "OFF"}
          </button>
        </div>
        ${(() => {
          const jaVoices = getJapaneseVoiceList();
          const buildOpts = (curUri) => [
            `<option value=""${!curUri ? " selected" : ""}>Otomatis (3-Layer Router)</option>`,
            ...jaVoices.map((v) => {
              const key = voiceKeyOf(v);
              return `<option value="${esc(key)}"${curUri === key ? " selected" : ""}>${esc(v.name || key)}${v.lang ? ` (${esc(v.lang)})` : ""}</option>`;
            })
          ].join("");
          return `
            <div class="voice-select-grid">
              <label class="voice-select-field">
                <span>Pilih Suara Pria (Opsional)</span>
                <select class="voice-select" id="selVoiceMale">${buildOpts(state.voiceMaleURI)}</select>
              </label>
              <label class="voice-select-field">
                <span>Pilih Suara Wanita (Opsional)</span>
                <select class="voice-select" id="selVoiceFemale">${buildOpts(state.voiceFemaleURI)}</select>
              </label>
            </div>
          `;
        })()}
        <p style="font-size: 12.5px; color: var(--color-ink-muted); margin-top:8px;">${esc(voiceNote)}</p>
        <p style="font-size: 12px; color: var(--color-ink-subtle); margin-top:4px;">${esc(describeVoiceRouterStatus())}</p>
      </section>

      <section class="profile-section">
        <h3>4. ${isDiagnosticUnlocked() ? "Mode Belajar &amp; " : ""}Cadangan Data (.json)</h3>
        ${isDiagnosticUnlocked() ? `
          <div class="mode-switch-btns">
            <button type="button" class="pill-btn ${teman ? "pill-btn-accent" : ""}" data-set-mode="teman">
              🌱 Tampilan Normal (Bab 1–25)
            </button>
            <button type="button" class="pill-btn ${!teman ? "pill-btn-accent" : ""}" data-set-mode="perbaikan">
              🩺 Mode Diagnostik Pribadi
            </button>
          </div>
        ` : ""}
        <div class="mode-switch-btns">
          <button type="button" class="btn-secondary" id="btnExportJson">⬇️ Download Backup Skor (.json)</button>
          <button type="button" class="btn-secondary" id="btnImportJsonTrigger">⬆️ Import Backup Skor (.json)</button>
          <input type="file" id="importJsonInput" accept=".json,application/json" hidden>
          ${!state.confirmResetArmed
            ? `<button type="button" class="pill-btn chip-red" id="btnArmReset">🗑️ Reset Skor Profil Ini</button>`
            : `<button type="button" class="btn-primary" id="btnConfirmReset">⚠️ Klik Lagi: Konfirmasi Hapus Skor ${esc(prof.name)}</button>`
          }
        </div>
      </section>
    `;

    body.querySelectorAll("[data-switch-prof]").forEach((btn) => {
      btn.addEventListener("click", () => {
        profileStore.activeId = btn.dataset.switchProf;
        state.sortMode = isTemanMode() ? "book" : "priority";
        persistProfiles();
        persistPrefs();
        state.profileFeedbackMsg = `✓ Beralih ke profil "${activeProfile().name}".`;
        refreshActiveView();
        renderProfileModalBody();
      });
    });

    body.querySelectorAll("[data-del-prof]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.delProf;
        if (id !== profileStore.activeId && profileStore.profiles[id]) {
          const removedName = profileStore.profiles[id].name;
          delete profileStore.profiles[id];
          persistProfiles();
          state.profileFeedbackMsg = `Profil "${removedName}" dihapus.`;
          renderProfileModalBody();
        }
      });
    });

    document.getElementById("createProfileForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const input = document.getElementById("newProfileName");
      const name = (input.value || "").trim();
      if (!name) return;
      const newId = `p_${Date.now()}`;
      profileStore.profiles[newId] = createEmptyProfile(newId, name, "teman");
      profileStore.activeId = newId;
      state.sortMode = "book";
      persistProfiles();
      persistPrefs();
      state.profileFeedbackMsg = `✓ Profil baru "${name}" (0% bersih) dibuat & diaktifkan!`;
      refreshActiveView();
      renderProfileModalBody();
    });

    body.querySelectorAll("[data-rate]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.speechRate = Number(btn.dataset.rate) === 0.75 ? 0.75 : 1.0;
        persistPrefs();
        state.profileFeedbackMsg = `✓ Kecepatan audio disetel ke ${state.speechRate}×.`;
        renderProfileModalBody();
      });
    });

    const btnSwapGender = document.getElementById("btnSwapVoiceGender");
    if (btnSwapGender) {
      btnSwapGender.addEventListener("click", () => {
        state.voiceSwapGender = !state.voiceSwapGender;
        state.kaiwaLastError = "";
        persistPrefs();
        state.profileFeedbackMsg = state.voiceSwapGender
          ? "✓ Suara Pria ↔ Wanita ditukar."
          : "✓ Pengaturan tukar suara dikembalikan normal.";
        refreshActiveView();
        renderProfileModalBody();
      });
    }

    const selMale = document.getElementById("selVoiceMale");
    if (selMale) {
      selMale.addEventListener("change", () => {
        state.voiceMaleURI = selMale.value || "";
        state.kaiwaLastError = "";
        persistPrefs();
        state.profileFeedbackMsg = state.voiceMaleURI
          ? "✓ Suara Pria diatur secara manual."
          : "✓ Suara Pria dikembalikan ke Otomatis.";
        refreshActiveView();
        renderProfileModalBody();
      });
    }

    const selFemale = document.getElementById("selVoiceFemale");
    if (selFemale) {
      selFemale.addEventListener("change", () => {
        state.voiceFemaleURI = selFemale.value || "";
        state.kaiwaLastError = "";
        persistPrefs();
        state.profileFeedbackMsg = state.voiceFemaleURI
          ? "✓ Suara Wanita diatur secara manual."
          : "✓ Suara Wanita dikembalikan ke Otomatis.";
        refreshActiveView();
        renderProfileModalBody();
      });
    }

    const btnTestMale = document.getElementById("btnTestVoiceMale");
    if (btnTestMale) {
      btnTestMale.addEventListener("click", (e) => {
        speakJapanese("はじめまして。山田です。よろしく おねがいします。", e.currentTarget, { gender: "male", roleSlot: 0 });
      });
    }
    const btnTestMale2 = document.getElementById("btnTestVoiceMale2");
    if (btnTestMale2) {
      btnTestMale2.addEventListener("click", (e) => {
        speakJapanese("はじめまして。マイク・ミラーです。アメリカから 来ました。", e.currentTarget, { gender: "male", roleSlot: 1 });
      });
    }
    const btnTestFemale = document.getElementById("btnTestVoiceFemale");
    if (btnTestFemale) {
      btnTestFemale.addEventListener("click", (e) => {
        speakJapanese("おはよう ございます。佐藤 けい子です。どうぞ よろしく。", e.currentTarget, { gender: "female", roleSlot: 0 });
      });
    }

    document.getElementById("btnModalRomaji").addEventListener("click", () => {
      state.showRomaji = !state.showRomaji;
      applyRomajiState();
      persistPrefs();
      renderProfileModalBody();
    });

    body.querySelectorAll("[data-set-mode]").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeProfile().userMode = btn.dataset.setMode;
        state.sortMode = isTemanMode() ? "book" : "priority";
        persistProfiles();
        persistPrefs();
        state.profileFeedbackMsg = `✓ Mode tampilan diubah ke ${isTemanMode() ? "Mode Teman (Bersih)" : "Mode Diagnostik 47/100"}.`;
        refreshActiveView();
        renderProfileModalBody();
      });
    });

    document.getElementById("btnExportJson").addEventListener("click", () => {
      const payload = {
        app: "Minna no Nihongo I Studio",
        version: 3,
        exportedAt: new Date().toISOString(),
        profile: activeProfile(),
        prefs: {
          showRomaji: state.showRomaji,
          speechRate: state.speechRate,
          sortMode: state.sortMode,
          kotobaEmojiSize: state.kotobaEmojiSize,
          kotobaRomajiMode: state.kotobaRomajiMode,
          kotobaQuizCount: state.kotobaQuizCount,
          kotobaBatchSize: state.kotobaBatchSize,
          kotobaBatchByScope: state.kotobaBatchByScope,
          kotobaAutoRequeue: state.kotobaAutoRequeue,
          kotobaAutoAudio: state.kotobaAutoAudio,
          voiceSwapGender: Boolean(state.voiceSwapGender),
          voiceMaleURI: state.voiceMaleURI || "",
          voiceFemaleURI: state.voiceFemaleURI || "",
          finalSetup: sanitizeFinalSetup(state.finalSetup)
        }
      };
      const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `minna-progres-${activeProfile().name.toLowerCase().replace(/[^a-z0-9]+/g, "-") || "backup"}.json`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      state.profileFeedbackMsg = "✓ File cadangan .json berhasil diunduh.";
      renderProfileModalBody();
    });

    const importInput = document.getElementById("importJsonInput");
    document.getElementById("btnImportJsonTrigger").addEventListener("click", () => importInput.click());
    importInput.addEventListener("change", () => {
      const file = importInput.files && importInput.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const data = JSON.parse(String(reader.result || "{}"));
          const imported = data.profile && typeof data.profile === "object" ? data.profile : data;
          if (!imported || typeof imported.chapters !== "object") {
            throw new Error("Format tidak valid");
          }
          const cur = activeProfile();
          cur.chapters = imported.chapters || {};
          cur.kana = imported.kana || {};
          cur.refs = imported.refs || {};
          cur.kotoba = imported.kotoba || { masteredIds: [], reviewIds: [], bestStreak: 0, totalPlayed: 0, chapterScores: {}, wrongIdsByScope: {} };
          ensureProfileKotoba(cur);
          cur.finalExam = imported.finalExam || null;
          cur.wrongBank = imported.wrongBank || {};
          cur.seenBankIds = imported.seenBankIds && typeof imported.seenBankIds === "object" ? imported.seenBankIds : {};
          if (imported.userMode === "perbaikan" || imported.userMode === "teman") {
            cur.userMode = imported.userMode;
          }
          if (data.prefs && typeof data.prefs === "object") {
            if (typeof data.prefs.showRomaji === "boolean") state.showRomaji = data.prefs.showRomaji;
            if (data.prefs.speechRate === 0.75 || data.prefs.speechRate === 1.0) state.speechRate = data.prefs.speechRate;
            if (["large", "normal", "off"].includes(data.prefs.kotobaEmojiSize)) state.kotobaEmojiSize = data.prefs.kotobaEmojiSize;
            if (["on", "back", "off"].includes(data.prefs.kotobaRomajiMode)) state.kotobaRomajiMode = data.prefs.kotobaRomajiMode;
            if (data.prefs.kotobaQuizCount) state.kotobaQuizCount = clampKotobaQuizCount(data.prefs.kotobaQuizCount);
            if (data.prefs.kotobaBatchSize) state.kotobaBatchSize = sanitizeKotobaBatchSize(data.prefs.kotobaBatchSize);
            if (data.prefs.kotobaBatchByScope) state.kotobaBatchByScope = sanitizeKotobaBatchByScope(data.prefs.kotobaBatchByScope);
            if (typeof data.prefs.kotobaAutoRequeue === "boolean") state.kotobaAutoRequeue = data.prefs.kotobaAutoRequeue;
            if (typeof data.prefs.kotobaAutoAudio === "boolean") state.kotobaAutoAudio = data.prefs.kotobaAutoAudio;
            if (typeof data.prefs.voiceSwapGender === "boolean") state.voiceSwapGender = data.prefs.voiceSwapGender;
            if (typeof data.prefs.voiceMaleURI === "string") state.voiceMaleURI = data.prefs.voiceMaleURI;
            if (typeof data.prefs.voiceFemaleURI === "string") state.voiceFemaleURI = data.prefs.voiceFemaleURI;
            if (data.prefs.finalSetup) state.finalSetup = sanitizeFinalSetup(data.prefs.finalSetup);
            persistPrefs();
          }
          persistProfiles();
          state.profileFeedbackMsg = `✓ Progres berhasil di-import ke profil "${cur.name}"!`;
          refreshActiveView();
          renderProfileModalBody();
        } catch {
          state.profileFeedbackMsg = "✕ Gagal membaca file backup .json. Pastikan file berasal dari tombol Download Backup.";
          renderProfileModalBody();
        }
      };
      reader.readAsText(file);
    });

    const btnArm = document.getElementById("btnArmReset");
    if (btnArm) {
      btnArm.addEventListener("click", () => {
        state.confirmResetArmed = true;
        renderProfileModalBody();
      });
    }
    const btnConfirm = document.getElementById("btnConfirmReset");
    if (btnConfirm) {
      btnConfirm.addEventListener("click", () => {
        const cur = activeProfile();
        cur.chapters = {};
        cur.kana = {};
        cur.refs = {};
        cur.kotoba = { masteredIds: [], reviewIds: [], bestStreak: 0, totalPlayed: 0, chapterScores: {}, wrongIdsByScope: {} };
        cur.finalExam = null;
        cur.wrongBank = {};
        cur.seenBankIds = {};
        state.confirmResetArmed = false;
        persistProfiles();
        state.profileFeedbackMsg = `✓ Semua skor pada profil "${cur.name}" telah di-reset ke 0%.`;
        refreshActiveView();
        renderProfileModalBody();
      });
    }
  }

  function closeDrawer() {
    document.getElementById("sidebar").classList.remove("is-open");
    document.getElementById("sidebarBackdrop").hidden = true;
    document.getElementById("btnToggleSidebar").setAttribute("aria-expanded", "false");
  }

  // ===== INIT =====
  function init() {
    applyTheme(state.theme);
    applyRomajiState();
    detectJaVoices();
    pruneBankWrongBank();
    if (typeof window !== "undefined" && "speechSynthesis" in window && window.speechSynthesis.addEventListener) {
      window.speechSynthesis.addEventListener("voiceschanged", () => {
        detectJaVoices();
        if (!state.kaiwaPlaying && state.view === "chapter" && state.activeTab === "kaiwa") {
          const ch = getChapter(state.selectedNum);
          if (ch && KAIWA_BY_BAB[ch.num]) renderChapterKaiwa(ch);
        }
      });
    }

    renderOverview();

    // Delegated TTS Audio handler (stops propagation so parent cards don't flip/trigger)
    document.addEventListener("click", (e) => {
      const speakBtn = e.target.closest("[data-speak]");
      if (speakBtn) {
        e.stopPropagation();
        const text = speakBtn.dataset.speak;
        const gender = speakBtn.dataset.speakGender || "neutral";
        const roleSlot = Number(speakBtn.dataset.speakSlot || 0);
        const roleTempo = speakBtn.dataset.speakTempo || "";
        if (state.kaiwaPlaying) stopKaiwaPlayback(true);
        speakJapanese(text, speakBtn, { gender, roleSlot, roleTempo });
      }
    });

    // Theme toggle
    document.getElementById("btnToggleTheme").addEventListener("click", () => {
      applyTheme(state.theme === "dark" ? "light" : "dark");
    });

    // Romaji toggle
    document.getElementById("btnToggleRomaji").addEventListener("click", () => {
      state.showRomaji = !state.showRomaji;
      applyRomajiState();
      persistPrefs();
    });

    // Dynamic Cheat Sheet button
    document.getElementById("btnOpenCheatSheet").addEventListener("click", () => {
      if (state.view === "chapter" && state.selectedNum) {
        openCheatModalForChapter(state.selectedNum);
      } else {
        openMasterCheatModal();
      }
    });
    document.getElementById("btnCloseCheatSheet").addEventListener("click", closeCheatModal);
    document.getElementById("cheatModal").addEventListener("click", (e) => {
      if (e.target.id === "cheatModal") closeCheatModal();
    });

    // Profile Modal
    document.getElementById("btnOpenProfile").addEventListener("click", () => {
      openProfileModal();
      closeDrawer();
    });
    const profTitleEl = document.getElementById("profileModalTitle");
    if (profTitleEl) {
      profTitleEl.addEventListener("click", () => {
        profileTitleTapCount += 1;
        if (profileTitleTapCount >= 5) {
          profileTitleTapCount = 0;
          diagnosticUnlocked = !diagnosticUnlocked;
          state.profileFeedbackMsg = diagnosticUnlocked
            ? "🔓 Mode Diagnostik Pribadi terbuka khusus di sesi ini."
            : "🔒 Mode Diagnostik Pribadi disembunyikan kembali.";
          refreshActiveView();
          renderProfileModalBody();
        }
      });
    }
    document.getElementById("btnCloseProfile").addEventListener("click", closeProfileModal);
    document.getElementById("profileModal").addEventListener("click", (e) => {
      if (e.target.id === "profileModal") closeProfileModal();
    });

    // Exit Exam Confirmation Modal + beforeunload Guardrail
    window.addEventListener("beforeunload", (e) => {
      if (isFinalExamActive()) {
        e.preventDefault();
        e.returnValue = "";
      }
    });
    const exitModal = document.getElementById("exitExamModal");
    const btnCloseExit = document.getElementById("btnCloseExitExam");
    const btnStayExam = document.getElementById("btnStayExam");
    const btnConfirmExit = document.getElementById("btnConfirmExitExam");
    if (btnCloseExit) btnCloseExit.addEventListener("click", closeExitExamModal);
    if (btnStayExam) btnStayExam.addEventListener("click", closeExitExamModal);
    if (exitModal) {
      exitModal.addEventListener("click", (e) => {
        if (e.target.id === "exitExamModal") closeExitExamModal();
      });
    }
    if (btnConfirmExit) {
      btnConfirmExit.addEventListener("click", () => {
        const nextAction = pendingExitAction;
        clearFinalTimer();
        state.finalPhase = "setup";
        state.finalSession = null;
        closeExitExamModal();
        if (typeof nextAction === "function") nextAction();
      });
    }

    // Primary navigation buttons (dilindungi guardFinalExamExit saat Tes Akhir berjalan)
    document.getElementById("btnShowOverview").addEventListener("click", () => {
      guardFinalExamExit(() => {
        renderOverview();
        closeDrawer();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    });
    document.getElementById("brandHome").addEventListener("click", () => {
      guardFinalExamExit(() => {
        renderOverview();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    });
    document.getElementById("btnOpenKana").addEventListener("click", () => {
      guardFinalExamExit(() => {
        openKana(state.kanaTab || "hiragana");
        closeDrawer();
      });
    });
    const btnKotobaTop = document.getElementById("btnOpenKotoba");
    if (btnKotobaTop) {
      btnKotobaTop.addEventListener("click", () => {
        guardFinalExamExit(() => {
          openKotobaFlashcard(state.kotobaScope || "1", state.kotobaMode);
          closeDrawer();
        });
      });
    }
    document.getElementById("btnStartFinalExam").addEventListener("click", () => {
      guardFinalExamExit(() => {
        openFinalExam();
        closeDrawer();
      });
    });
    const btnSideFinal = document.getElementById("btnSidebarFinalExam");
    if (btnSideFinal) {
      btnSideFinal.addEventListener("click", () => {
        guardFinalExamExit(() => {
          openFinalExam();
          closeDrawer();
        });
      });
    }
    document.getElementById("btnOpenRefs").addEventListener("click", () => {
      guardFinalExamExit(() => {
        openReferences(state.selectedRefId, "materi");
        closeDrawer();
      });
    });

    // Mobile Bottom Nav Bar
    const mnav = document.getElementById("mobileBottomNav");
    if (mnav) {
      mnav.querySelectorAll("[data-mnav]").forEach((btn) => {
        btn.addEventListener("click", () => {
          closeDrawer();
          closeCheatModal();
          const target = btn.dataset.mnav;
          if (target === "profile") {
            openProfileModal();
            return;
          }
          closeProfileModal();
          guardFinalExamExit(() => {
            if (target === "overview") {
              renderOverview();
              window.scrollTo({ top: 0, behavior: "smooth" });
            } else if (target === "kotoba") {
              openKotobaFlashcard(state.kotobaScope || "1", state.kotobaMode);
            } else if (target === "kana") {
              openKana(state.kanaTab || "hiragana");
            } else if (target === "references") {
              openReferences(state.selectedRefId, "materi");
            } else if (target === "final_exam") {
              openFinalExam();
            }
          });
        });
      });
    }

    // Sort buttons
    document.querySelectorAll(".sort-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.sortMode = btn.dataset.sort;
        persistPrefs();
        renderSidebar();
      });
    });

    // Zone filter chips
    document.querySelectorAll(".zone-filters .filter-chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        state.zoneFilter = chip.dataset.zone;
        document.querySelectorAll(".zone-filters .filter-chip").forEach((c) => c.classList.remove("is-active"));
        chip.classList.add("is-active");
        renderSidebar();
      });
    });

    // Mobile drawer
    document.getElementById("btnToggleSidebar").addEventListener("click", () => {
      const sb = document.getElementById("sidebar");
      const open = !sb.classList.contains("is-open");
      sb.classList.toggle("is-open", open);
      document.getElementById("sidebarBackdrop").hidden = !open;
      document.getElementById("btnToggleSidebar").setAttribute("aria-expanded", String(open));
    });
    document.getElementById("sidebarBackdrop").addEventListener("click", closeDrawer);

    // Keyboard shortcuts
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeExitExamModal();
        closeCheatModal();
        closeProfileModal();
        closeDrawer();
        return;
      }
      const exitModalEl = document.getElementById("exitExamModal");
      if ((exitModalEl && !exitModalEl.hidden) || !document.getElementById("cheatModal").hidden || !document.getElementById("profileModal").hidden) return;
      const tag = (e.target && e.target.tagName || "").toLowerCase();
      if (tag === "input" || tag === "select" || tag === "textarea") return;

      if (isFinalExamActive()) {
        const s = state.finalSession;
        const q = s.questions[s.step];
        if (!q) return;
        const rec = s.answers[q.id];
        if (q.type === "mcq" && ["1", "2", "3", "4"].includes(e.key)) {
          const idx = Number(e.key) - 1;
          if (idx < q.options.length && (s.correctionMode === "end" || !rec)) {
            submitFinalMcq(idx);
          }
        } else if (e.key === "Enter") {
          if (s.correctionMode === "drill" && rec) {
            e.preventDefault();
            nextFinalQ();
          } else if (s.correctionMode === "end" && s.timerMode !== "per_q" && s.step + 1 < s.questions.length) {
            e.preventDefault();
            nextFinalQ();
          }
        }
        return;
      }

      if (state.view === "kotoba" && (state.kotobaMode === "flip" || state.kotobaIdx < state.kotobaDeck.length)) {
        const cur = state.kotobaDeck[state.kotobaIdx];
        const qKind = getActiveKotobaQuestionKind();
        if (qKind === "flip") {
          if (e.key === " ") {
            e.preventDefault();
            const { visible } = getKotobaGridPageInfo(getFilteredKotobaFlipPool());
            const allOpen = visible.length > 0 && visible.every((w) => !!state.kotobaFlippedMap[w.id]);
            visible.forEach((w) => { state.kotobaFlippedMap[w.id] = !allOpen; });
            renderKotobaFlipGrid();
          }
        } else if (qKind === "recall") {
          if (e.key === "Enter" && state.kotobaRecallAnswered) {
            e.preventDefault();
            markKotobaCard(state.kotobaRecallOk);
          }
        } else {
          if (state.kotobaMcqPicked === null && ["1", "2", "3", "4"].includes(e.key)) {
            const idx = Number(e.key) - 1;
            if (idx < state.kotobaMcqOptions.length) {
              state.kotobaMcqPicked = idx;
              if (state.kotobaAutoAudio && cur) speakJapanese(cur.kana);
              renderKotobaView();
            }
          } else if (e.key === "Enter" && state.kotobaMcqPicked !== null) {
            e.preventDefault();
            markKotobaCard(state.kotobaMcqPicked === state.kotobaMcqCorrectIdx);
          }
        }
        return;
      }

      const inQuiz = (state.view === "chapter" || state.view === "references" || state.view === "kana") && state.activeTab === "kuis";
      if (!inQuiz) return;
      const ch = state.view === "references"
        ? state.activeRefQuizObj
        : state.view === "kana"
        ? state.activeKanaQuizObj
        : getChapter(state.selectedNum);
      if (!ch || state.currentStep >= state.quizIndices.length) return;
      const q = ch.questions[state.quizIndices[state.currentStep]];
      if (q.type === "mcq" && !state.answered && ["1", "2", "3", "4"].includes(e.key)) {
        const idx = Number(e.key) - 1;
        if (idx < q.options.length) submitMcq(ch, idx);
      } else if (e.key === "Enter" && state.answered) {
        e.preventDefault();
        nextQ(ch);
      }
    });
  }

  document.addEventListener("DOMContentLoaded", init);
})();
