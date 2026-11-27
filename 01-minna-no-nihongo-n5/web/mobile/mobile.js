/* Dedicated Mobile App — Minna no Nihongo I (Bab 1–25)
 * 6 Tab Fokus Mobile (tanpa Modul Pembahasan Tata Bahasa & tanpa Tes Akhir Gabungan 1–25):
 * 1. Kotoba: Swipe Tinder, Tabel Buku, & Flip Kartu Multi-Grid (hafalan)
 * 2. Kuis Kotoba: Kuis Kotoba (1–50), Tes Hafalan Ketik, & Tes Akhir Kotoba (Edisi 2)
 * 3. Kuis Modul: Kuis soal bank Bab 1–25 (on-demand JSON) + pintasan Materi Pembahasan di Versi PC
 * 4. Kaiwa: Kontrol lengkap PC (Putar Dialog, Intro CD, Mode Tirukan, Sembunyikan Arti, Tukar/Atur/Bisukan Suara)
 * 5. Referensi (11 Kategori): Materi + Lab Angka/Kalender + Mode Flashcard + Kuis 10 Soal & Acak 20 Soal
 * 6. Kana Dasar: Swipe, Tebak Huruf Pintar, & Papan 5 Kolom
 */
(function () {
  "use strict";

  const {
    ASSET_VERSION,
    esc,
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
    orderKotobaEd2First,
    kotobaEditionBadgeHtml,
    clampKotobaQuizCount,
    sanitizeKotobaBatchSize,
    sanitizeKotobaBatchByScope,
    getAcceptedKotobaForms,
    numberToJapanese,
    DATE_READINGS
  } = window.MNN_SHARED || {};

  const STORAGE_PROFILES_V3 = "mnn_profiles_v3";
  const STORAGE_PREFS_V3 = "mnn_prefs_v3";
  const STORAGE_THEME = "mnn_theme_mode_v1";
  const STORAGE_UI_MODE = "mnn_ui_mode";
  const BANK_VERSION = ASSET_VERSION || "20261127-v29";

  const KOTOBA_DATA = window.MNN_KOTOBA || {};
  const KAIWA_DATA = window.MNN_KAIWA || {};
  const KANA_DATA = window.MNN_KANA_DATA || { hiraganaRows: [], katakanaRows: [] };
  const REFERENCES = Array.isArray(window.MNN_REFERENCES) ? window.MNN_REFERENCES : [];

  const CHAPTER_TITLES = {
    1: "Perkenalan Diri & Kalimat Nominal (は・です・も・の)",
    2: "Kata Tunjuk Benda (これ・この), Kepemilikan の, & Pilihan ～か、～か",
    3: "Kata Tunjuk Tempat (ここ・こちら), Asal Produk, & Angka Harga",
    4: "Jam, Hari, 4 Bentuk Kata Kerja ます, & Partikel に / から～まで",
    5: "Perpindahan (へ・で・と), Waktu せん/こん/らい, & Tanggal Khusus",
    6: "Objek (を), Tempat Aksi (で), Bertemu (に), & Ajakan (～ませんか・～ましょう)",
    7: "Alat & Bahasa (で), Memberi-Menerima Dasar (あげます・もらいます), & もう／まだ",
    8: "Kata Sifat-い & Kata Sifat-な, とても／あまり, どう／どんな, & が (Tetapi)",
    9: "Partikel が (Suka, Pandai, Mengerti), Adverbia Tingkat, & Alasan から",
    10: "Keberadaan (あります・います), 11 Kata Posisi, & や～など",
    11: "Kata Bantu Bilangan (～つ・～にん・～まい・～だい), Durasi, & だけ",
    12: "Kala Lampau Kata Sifat/Benda & Perbandingan (より・どちら・いちばん)",
    13: "Keinginan Benda (がほしい), Keinginan Aksi (V-たい), & Tujuan Pergi",
    14: "3 Kelompok Kata Kerja, Bentuk-て, ～てください, ～ています, & ～ましょうか",
    15: "Izin (～てもいいですか), Larangan (～てはいけません), & Status Keadaan (～ています)",
    16: "Urutan Aksi (V1-て、V2 / てから), Gabung Kata Sifat (～くて・～で), & Ciri (N1はN2が)",
    17: "Bentuk -Nai (ない形), Larangan, Keharusan, & Tidak Perlu",
    18: "Bentuk Kamus (辞書形), ことができます, しゅみは～ことです, & まえに",
    19: "Bentuk -Ta (た形), Pengalaman (～たことがあります), ～たり～たり, & なります",
    20: "Bentuk Biasa / Kasual (普通形 / Plain Form) & Percakapan Akrab",
    21: "Pendapat (と思います), Kutipan (と言いました), でしょう？, & Acara (で…があります)",
    22: "Anak Kalimat Penjelas Kata Benda (名詞修飾) & Kata Kerja Memakai Pakaian",
    23: "Klausa Waktu (～とき), Kondisi Pasti (～と), & Partikel Gerak を",
    24: "くれます & Memberi-Menerima Jasa (～てあげます・～てもらいます・～てくれます)",
    25: "Pengandaian & Urutan Masa Depan (～たら) serta Kontradiksi (～ても)"
  };

  const BAB17_SECTIONS = [
    "all",
    "A · V-ない",
    "B · ～ないでください",
    "C · ～なければなりません",
    "D · ～なくてもいいです"
  ];

  const ALL_KOTOBA = Object.keys(KOTOBA_DATA)
    .map(Number)
    .sort((a, b) => a - b)
    .flatMap((b) => KOTOBA_DATA[b] || []);

  const KANA_CONFUSABLE_GROUPS = [
    ["あ", "お", "ぬ", "め"], ["い", "り", "こ"], ["う", "ら", "ろ", "る"], ["え", "ん"],
    ["か", "が", "や"], ["き", "さ", "ち", "ら"], ["く", "へ", "し"], ["け", "は", "ほ", "に", "た"],
    ["す", "む", "ま"], ["そ", "て", "ろ"], ["つ", "し", "の"], ["な", "た", "は"],
    ["ぬ", "め", "ね", "れ", "わ"], ["は", "ほ", "ま", "よ"], ["ひ", "み", "ん"], ["ふ", "う"],
    ["ゆ", "や", "よ"], ["シ", "ツ", "ミ"], ["ソ", "ン", "ノ", "リ"], ["ア", "マ", "ヤ"],
    ["ウ", "ワ", "フ", "ラ", "ヲ"], ["カ", "ク", "タ", "ケ", "ヌ"], ["コ", "ユ", "ヨ", "ニ"],
    ["サ", "セ", "ヒ"], ["チ", "テ", "ナ", "メ"], ["ト", "イ", "レ", "ル"],
    ["ハ", "ホ", "ネ"], ["ロ", "ム", "モ"]
  ];

  function mKotobaEdBadge(w) {
    return kotobaEditionBadgeHtml(w, "m-ed-pill");
  }

  // ===== SHARED STORAGE SYNC =====
  function readJson(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch {
      return fallback;
    }
  }

  function writeJson(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {}
  }

  function ensureProfileShapes(prof) {
    if (!prof.chapters || typeof prof.chapters !== "object") prof.chapters = {};
    if (!prof.seenBankIds || typeof prof.seenBankIds !== "object") prof.seenBankIds = {};
    if (!prof.kotoba || typeof prof.kotoba !== "object") {
      prof.kotoba = { masteredIds: [], reviewIds: [], bestStreak: 0, totalPlayed: 0, chapterScores: {}, wrongIdsByScope: {} };
    }
    if (!Array.isArray(prof.kotoba.masteredIds)) prof.kotoba.masteredIds = [];
    if (!Array.isArray(prof.kotoba.reviewIds)) prof.kotoba.reviewIds = [];
    if (!prof.kotoba.chapterScores || typeof prof.kotoba.chapterScores !== "object") prof.kotoba.chapterScores = {};
    if (!prof.kotoba.wrongIdsByScope || typeof prof.kotoba.wrongIdsByScope !== "object") prof.kotoba.wrongIdsByScope = {};
    if (typeof prof.kotoba.bestStreak !== "number") prof.kotoba.bestStreak = 0;
    if (typeof prof.kotoba.totalPlayed !== "number") prof.kotoba.totalPlayed = 0;
    if (!prof.refs || typeof prof.refs !== "object") prof.refs = {};
  }

  function loadProfileStore() {
    const parsed = readJson(STORAGE_PROFILES_V3, null);
    if (parsed && parsed.profiles && typeof parsed.profiles === "object" && Object.keys(parsed.profiles).length > 0) {
      return parsed;
    }
    return {
      activeId: "teman",
      profiles: {
        teman: {
          id: "teman",
          name: "Mode Belajar",
          userMode: "teman",
          chapters: {},
          kana: {},
          refs: {},
          kotoba: { masteredIds: [], reviewIds: [], bestStreak: 0, totalPlayed: 0, chapterScores: {}, wrongIdsByScope: {} },
          finalExam: null,
          wrongBank: {},
          seenBankIds: {}
        }
      }
    };
  }

  let profileStore = loadProfileStore();
  const savedPrefs = readJson(STORAGE_PREFS_V3, {});

  function activeProfile() {
    const p = profileStore.profiles[profileStore.activeId] || Object.values(profileStore.profiles)[0];
    ensureProfileShapes(p);
    return p;
  }

  function persistProfile() {
    writeJson(STORAGE_PROFILES_V3, profileStore);
  }

  function loadTheme() {
    try {
      return localStorage.getItem(STORAGE_THEME) === "light" ? "light" : "dark";
    } catch {
      return "dark";
    }
  }

  function applyTheme(mode) {
    state.theme = mode === "light" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", state.theme);
    try { localStorage.setItem(STORAGE_THEME, state.theme); } catch {}
  }

  function persistPrefs() {
    const latest = readJson(STORAGE_PREFS_V3, {});
    writeJson(STORAGE_PREFS_V3, {
      ...latest,
      showRomaji: Boolean(state.showRomaji),
      speechRate: state.speechRate === 0.75 ? 0.75 : 1.0,
      kotobaEmojiSize: state.kotobaEmojiSize,
      kotobaRomajiMode: state.kotobaRomajiMode,
      kotobaQuizCount: clampKotobaQuizCount(state.kotobaQuizCount),
      kotobaBatchSize: sanitizeKotobaBatchSize(state.kotobaBatchSize),
      kotobaBatchByScope: sanitizeKotobaBatchByScope(state.kotobaBatchByScope),
      kotobaAutoAudio: Boolean(state.kotobaAutoAudio),
      showEd1Archive: Boolean(state.showEd1Archive),
      voiceSwapGender: Boolean(state.voiceSwapGender),
      voiceMaleURI: state.voiceMaleURI || "",
      voiceFemaleURI: state.voiceFemaleURI || ""
    });
  }

  // ===== AUDIO ENGINE (3-LAYER VOICE ROUTER + MULTI-SPEAKER) =====
  let jaVoices = [];
  let speakDelayTimer = null;
  let repeatPauseTimer = null;
  let activeAudioBtn = null;

  function clearAudioBtn() {
    if (activeAudioBtn) {
      activeAudioBtn.classList.remove("is-speaking");
      activeAudioBtn = null;
    }
  }

  function detectJaVoices() {
    if (!("speechSynthesis" in window) || typeof window.speechSynthesis.getVoices !== "function") {
      jaVoices = [];
      return;
    }
    const voices = window.speechSynthesis.getVoices() || [];
    jaVoices = voices.filter((v) => v.lang && v.lang.toLowerCase().startsWith("ja"));
  }

  function pickVoiceForGender(gender) {
    detectJaVoices();
    if (!jaVoices.length) return { voice: null, pitch: 1.0, layer: 3 };
    const wantMale = state.voiceSwapGender ? gender === "female" : gender === "male";
    const wantFemale = !wantMale && (gender === "female" || gender === "male");
    const manualURI = wantMale ? state.voiceMaleURI : wantFemale ? state.voiceFemaleURI : "";
    if (manualURI) {
      const m = jaVoices.find((v) => v.voiceURI === manualURI || v.name === manualURI);
      if (m) return { voice: m, pitch: 1.0, layer: 1 };
    }
    const isGoogle = (v) => /google/i.test(v.name || "");
    const maleMatch = jaVoices.find((v) => !isGoogle(v) && /\b(keita|ichiro|otoya|hattori|takumi|daichi|kenji|naoki|male)\b/i.test(v.name));
    const femaleMatch = jaVoices.find((v) => /\b(nanami|haruka|ayumi|sayaka|kyoko|o-ren|mizuki|mayu|aoi|shiori|female)\b/i.test(v.name));
    if (wantMale && maleMatch) return { voice: maleMatch, pitch: 1.0, layer: 1 };
    if (wantFemale && femaleMatch) return { voice: femaleMatch, pitch: 1.0, layer: 1 };
    if (jaVoices.length >= 2) {
      const nonGoogle = jaVoices.find((v) => !isGoogle(v));
      const gVoice = jaVoices.find((v) => isGoogle(v));
      if (wantMale) return { voice: nonGoogle || jaVoices[0], pitch: 0.92, layer: 2 };
      if (wantFemale) return { voice: gVoice || jaVoices.find((v) => v !== nonGoogle) || jaVoices[0], pitch: 1.08, layer: 2 };
    }
    const base = jaVoices[0];
    return { voice: base, pitch: wantMale ? 0.85 : wantFemale ? 1.12 : 1.0, layer: 3 };
  }

  function speakText(text, opts = {}) {
    const clean = cleanJpSpeech(text);
    if (!clean || !("speechSynthesis" in window)) {
      if (typeof opts.onend === "function") opts.onend();
      return;
    }
    clearTimeout(speakDelayTimer);
    const wasBusy = window.speechSynthesis.speaking || window.speechSynthesis.pending;
    if (wasBusy) window.speechSynthesis.cancel();
    clearAudioBtn();
    if (opts.btn) {
      activeAudioBtn = opts.btn;
      activeAudioBtn.classList.add("is-speaking");
    }

    const startSpeech = () => {
      const utter = new SpeechSynthesisUtterance(clean);
      utter.lang = "ja-JP";
      const pick = opts.gender ? pickVoiceForGender(opts.gender) : { voice: jaVoices[0] || null, pitch: 1.0, layer: 3 };
      if (pick.voice) utter.voice = pick.voice;
      const roleRate = Number(opts.tempo) || 1.0;
      const clampedRate = Math.max(0.65, Math.min(1.4, (state.speechRate || 1.0) * roleRate));
      utter.rate = Number(clampedRate.toFixed(2));
      const slot = Number(opts.slot) || 0;
      let pitch = pick.pitch || 1.0;
      if (slot > 0 && opts.gender === "male") pitch = Math.max(0.68, pitch - 0.14);
      if (slot > 0 && opts.gender === "female") pitch = Math.min(1.32, pitch + 0.12);
      utter.pitch = Number(pitch.toFixed(2));

      const finish = () => {
        if (activeAudioBtn === opts.btn) clearAudioBtn();
        if (typeof opts.onend === "function") opts.onend();
      };
      utter.onend = finish;
      utter.onerror = (ev) => {
        if (ev && (ev.error === "canceled" || ev.error === "interrupted")) return;
        finish();
      };
      window.speechSynthesis.speak(utter);
    };

    if (wasBusy) speakDelayTimer = setTimeout(startSpeech, 45);
    else startSpeech();
  }

  function stopKaiwaPlayback() {
    clearTimeout(speakDelayTimer);
    clearTimeout(repeatPauseTimer);
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    clearAudioBtn();
    state.kaiwaPlaying = false;
    state.kaiwaLineIdx = -1;
  }

  // ===== APP STATE =====
  const state = {
    tab: "kotoba", // 'kotoba' | 'kquiz' | 'mquiz' | 'kaiwa' | 'refs' | 'kana'
    theme: loadTheme(),
    showRomaji: typeof savedPrefs.showRomaji === "boolean" ? savedPrefs.showRomaji : true,
    speechRate: savedPrefs.speechRate === 0.75 ? 0.75 : 1.0,
    kotobaEmojiSize: ["large", "normal", "off"].includes(savedPrefs.kotobaEmojiSize) ? savedPrefs.kotobaEmojiSize : "large",
    kotobaRomajiMode: ["on", "back", "off"].includes(savedPrefs.kotobaRomajiMode) ? savedPrefs.kotobaRomajiMode : "on",
    kotobaQuizCount: savedPrefs.kotobaQuizCount ? clampKotobaQuizCount(savedPrefs.kotobaQuizCount) : 20,
    kotobaBatchSize: sanitizeKotobaBatchSize(savedPrefs.kotobaBatchSize),
    kotobaBatchByScope: sanitizeKotobaBatchByScope(savedPrefs.kotobaBatchByScope),
    kotobaAutoAudio: typeof savedPrefs.kotobaAutoAudio === "boolean" ? savedPrefs.kotobaAutoAudio : false,
    showEd1Archive: typeof savedPrefs.showEd1Archive === "boolean" ? savedPrefs.showEd1Archive : false,
    voiceSwapGender: Boolean(savedPrefs.voiceSwapGender),
    voiceMaleURI: typeof savedPrefs.voiceMaleURI === "string" ? savedPrefs.voiceMaleURI : "",
    voiceFemaleURI: typeof savedPrefs.voiceFemaleURI === "string" ? savedPrefs.voiceFemaleURI : "",

    // Shared Kotoba Deck & Mode split across Tab 1 (Hafalan) & Tab 2 (Kuis)
    kotobaMemMode: "swipe", // 'swipe' | 'table' | 'flip'
    kquizMode: "quiz", // 'quiz' | 'recall' | 'final'
    kotobaScope: "1", // '1'..'25' | '1-5'..'21-25' | 'review' | 'all'
    kotobaDir: "jp2id", // 'jp2id' | 'id2jp' | 'emoji'
    kotobaMemSettingsOpen: false,
    kquizSettingsOpen: false,
    kotobaFullPool: [],
    kotobaDeck: [],
    kotobaFinalKinds: [],
    kotobaIdx: 0,
    kotobaFlipped: false,
    kotobaHistory: [],
    kotobaStreak: 0,
    kotobaSearch: "",
    kotobaMaskArti: false,
    kotobaRevealedRowIds: {},
    kotobaFlippedMap: {},
    kotobaGridPage: 0,
    kotobaGridFilter: "all",
    kotobaMcqOptions: [],
    kotobaMcqCorrectIdx: 0,
    kotobaMcqPicked: null,
    kotobaRecallInput: "",
    kotobaRecallAnswered: false,
    kotobaRecallOk: false,
    kotobaSessionKnown: 0,
    kotobaSessionWrongIds: [],
    kotobaIsWrongRetry: false,

    // Tab 3: Kuis Modul Bab 1-25 (Bank JSON on-demand)
    mquizBab: 1,
    mquizSection: "all", // Bab 17 filter
    bankCache: {},
    bankLoading: false,
    bankError: "",
    mquizDeck: [],
    mquizIdx: 0,
    mquizPicked: null,
    mquizCorrectCount: 0,
    mquizWrongList: [],
    mquizModeTag: "flash", // 'flash' (10-15) | 'rapid' (20-25) | 'retry'
    mquizFlashCount: 10,
    mquizRapidCount: 20,

    // Tab 4: Kaiwa Full Parity
    kaiwaBab: 1,
    kaiwaPlaying: false,
    kaiwaLineIdx: -1,
    kaiwaWithIntro: true,
    kaiwaRepeatMode: false,
    kaiwaHideId: false,
    kaiwaMuteGender: "none",
    kaiwaVoicePanelOpen: false,

    // Tab 5: Referensi (11 Kategori)
    refId: REFERENCES[0] ? REFERENCES[0].id : "warna",
    refTab: "materi",
    refFlashcardMode: false,
    refConverterVal: 3800,
    refSelectedDate: 1,
    refQuizIsMix: false,
    refQuizDeck: [],
    refQuizIdx: 0,
    refQuizAnswered: false,
    refQuizPicked: null,
    refQuizInput: "",
    refQuizOk: false,
    refQuizCorrectCount: 0,

    // Tab 6: Kana Practice
    kanaSet: "hiragana",
    kanaMode: "swipe",
    kanaDir: "jp2rom",
    kanaDeck: [],
    kanaIdx: 0,
    kanaFlipped: false,
    kanaHistory: [],
    kanaMastered: new Set(),
    kanaReview: new Set(),
    kanaSpotChar: null,
    kanaQuizDeck: [],
    kanaQuizIdx: 0,
    kanaQuizOptions: [],
    kanaQuizCorrectIdx: 0,
    kanaQuizPickedIdx: null,
    kanaQuizCorrect: 0
  };

  // ===== SHARED UI BUILDERS (DRY INTERNAL HELPERS) =====
  function goPcDesktop() {
    stopKaiwaPlayback();
    try { localStorage.setItem(STORAGE_UI_MODE, "desktop"); } catch {}
    window.location.href = "../?mode=desktop";
  }

  function renderMcqOptionsHtml(items, answered, pickedIdx, correctIdx, dataAttr, optMapper) {
    return `
      <div class="m-quiz-options">
        ${items.map((rawOpt, idx) => {
          let cls = "";
          if (answered) {
            if (idx === correctIdx) cls = "is-correct";
            else if (idx === pickedIdx) cls = "is-wrong";
          }
          const mapped = optMapper(rawOpt, idx);
          return `
            <button type="button" class="m-opt-btn ${cls}" ${dataAttr}="${idx}" ${answered ? "disabled" : ""}>
              <span class="m-opt-key">${idx + 1}</span>
              <div class="m-opt-text">
                <span class="m-opt-main">${mapped.mainHtml}</span>
                ${mapped.subHtml ? `<span class="m-opt-sub m-romaji">${mapped.subHtml}</span>` : ""}
              </div>
            </button>
          `;
        }).join("")}
      </div>
    `;
  }

  function renderQuizResultCardHtml({ eyebrow, score, total, subtitle, extraHtml = "", actionsHtml = "" }) {
    const pct = total > 0 ? Math.round((score / total) * 100) : 0;
    return `
      <div class="m-result-card">
        <p class="m-eyebrow">${eyebrow}</p>
        <div class="m-result-score">${score} / ${total}</div>
        <p style="margin:0; font-weight:700; color:var(--color-ink-muted);">${subtitle || `${pct}% Tepat`}</p>
        ${extraHtml}
        ${actionsHtml ? `<div style="display:flex; gap:8px; flex-wrap:wrap; width:100%; margin-top:6px;">${actionsHtml}</div>` : ""}
      </div>
    `;
  }

  function renderTopBarSync() {
    const bTheme = document.getElementById("btnMobTheme");
    const bRom = document.getElementById("btnMobRomaji");
    const subEl = document.getElementById("mHeaderSub");
    if (bTheme) bTheme.textContent = state.theme === "dark" ? "🌙" : "☀️";
    if (bRom) {
      bRom.textContent = state.showRomaji ? "R:ON" : "R:OFF";
      bRom.classList.toggle("is-active", state.showRomaji);
    }
    const scopeLbl = state.kotobaScope === "all" ? "1–25" : state.kotobaScope;
    const subMap = {
      kotoba: `Kotoba · Bab ${scopeLbl} (Hafalan)`,
      kquiz: `Kuis Kotoba · Bab ${scopeLbl}`,
      mquiz: `Kuis Modul · Bab ${state.mquizBab}`,
      kaiwa: `Kaiwa · Bab ${state.kaiwaBab}`,
      refs: `Referensi (${REFERENCES.length} Kategori)`,
      kana: "Kana · Swipe, Tebak, & Papan"
    };
    if (subEl) subEl.textContent = subMap[state.tab] || "Mode Mobile";
    document.querySelectorAll("#mTabbar [data-mtab]").forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.mtab === state.tab);
    });
    const app = document.getElementById("mApp");
    if (app) app.classList.toggle("m-romaji-off", !state.showRomaji);
  }

  function renderBabRailHtml(activeVal, attrName, modeType = "none") {
    const prof = activeProfile();
    const mSet = new Set(prof.kotoba.masteredIds);
    const pills = [];
    if (modeType === "kotoba") {
      pills.push(`<button type="button" class="m-rail-pill ${activeVal === "all" ? "is-active" : ""}" data-${attrName}="all">Semua</button>`);
      pills.push(`<button type="button" class="m-rail-pill ${activeVal === "review" ? "is-active" : ""}" data-${attrName}="review">🔁 Ulang (${prof.kotoba.reviewIds.length})</button>`);
    }
    const allowEd1 = Boolean(state.showEd1Archive) && !(state.tab === "kquiz" && state.kquizMode === "final");
    for (let b = 1; b <= 25; b++) {
      let done = false;
      if (modeType === "kotoba") {
        const list = (KOTOBA_DATA[b] || []).filter((w) => allowEd1 || isKotobaEd2(w));
        const allKnown = list.length > 0 && list.every((w) => mSet.has(w.id));
        const sc = prof.kotoba.chapterScores[b];
        done = allKnown || !!(sc && sc.bestPct >= 80);
      } else if (modeType === "mquiz") {
        const sc = prof.chapters[b];
        done = !!(sc && sc.bestPct >= 80);
      }
      pills.push(
        `<button type="button" class="m-rail-pill ${String(activeVal) === String(b) ? "is-active" : ""} ${done ? "is-done" : ""}" data-${attrName}="${b}">${done ? "✓ " : ""}Bab ${b}</button>`
      );
    }
    return `<div class="m-pill-rail" role="tablist">${pills.join("")}</div>`;
  }

  // ===== KOTOBA SHARED ENGINE (USED BY TAB 1 HAFALAN & TAB 2 KUIS KOTOBA) =====
  function getActiveKotobaBatchSize(scope) {
    const key = String(scope || state.kotobaScope || "1");
    if (state.kotobaBatchByScope && ["5", "10", "15", "all"].includes(state.kotobaBatchByScope[key])) {
      return state.kotobaBatchByScope[key];
    }
    return sanitizeKotobaBatchSize(state.kotobaBatchSize);
  }

  function getKotobaPool(scope, includeEd1 = false) {
    const prof = activeProfile();
    const baseAll = includeEd1 ? ALL_KOTOBA : ALL_KOTOBA.filter(isKotobaEd2);
    if (scope === "all") return shuffleCopy(baseAll);
    if (scope === "review") {
      const revSet = new Set(prof.kotoba.reviewIds);
      return shuffleCopy(baseAll.filter((w) => revSet.has(w.id)));
    }
    if (/^\d+-\d+$/.test(scope)) {
      const [a, b] = scope.split("-").map(Number);
      return shuffleCopy(baseAll.filter((w) => w.bab >= a && w.bab <= b));
    }
    const bNum = Number(scope) || 1;
    const babList = (KOTOBA_DATA[bNum] || []).filter((w) => includeEd1 || isKotobaEd2(w));
    return shuffleCopy(babList.length > 0 ? babList : baseAll.slice(0, 40));
  }

  function getActiveKotobaMode() {
    return state.tab === "kquiz" ? state.kquizMode : state.kotobaMemMode;
  }

  function isFinalKotobaActive() {
    return state.tab === "kquiz" && state.kquizMode === "final";
  }

  function getActiveKotobaQuestionKind() {
    if (state.kquizMode === "recall") return "recall";
    if (state.kquizMode === "quiz") return state.kotobaDir === "emoji" ? "emoji" : "mcq";
    if (state.kquizMode === "final") return state.kotobaFinalKinds[state.kotobaIdx] || "mcq";
    return "mcq";
  }

  function prepareKotobaMcqOptions() {
    const card = state.kotobaDeck[state.kotobaIdx];
    if (!card) return;
    const allowEd1 = !isFinalKotobaActive() && Boolean(state.showEd1Archive);
    const sameBab = (KOTOBA_DATA[card.bab] || []).filter((w) => w.id !== card.id && w.arti !== card.arti && (allowEd1 || isKotobaEd2(w)));
    const wider = ALL_KOTOBA.filter((w) => w.id !== card.id && w.arti !== card.arti && (allowEd1 || isKotobaEd2(w)));
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

  function startKotobaSession(scope, mode, customIds, targetTab) {
    const useTab = targetTab || (["quiz", "recall", "final"].includes(mode) ? "kquiz" : "kotoba");
    if (scope) state.kotobaScope = String(scope);
    if (mode) {
      if (useTab === "kquiz") state.kquizMode = mode;
      else state.kotobaMemMode = mode;
    }

    const activeMode = useTab === "kquiz" ? state.kquizMode : state.kotobaMemMode;
    const isFinal = useTab === "kquiz" && activeMode === "final";
    const prof = activeProfile();
    const mSet = new Set(prof.kotoba.masteredIds);
    const allowEd1 = !isFinal && Boolean(state.showEd1Archive);
    let pool;

    if (Array.isArray(customIds) && customIds.length > 0) {
      const idSet = new Set(customIds);
      pool = shuffleCopy(ALL_KOTOBA.filter((w) => idSet.has(w.id) && (allowEd1 || isKotobaEd2(w))));
      state.kotobaIsWrongRetry = true;
    } else {
      pool = getKotobaPool(state.kotobaScope, allowEd1);
      if (isFinal) pool = pool.filter(isKotobaEd2);
      state.kotobaIsWrongRetry = false;
    }

    if (useTab === "kquiz" && activeMode === "quiz" && state.kotobaDir === "emoji" && !state.kotobaIsWrongRetry) {
      const emojiCards = pool.filter((w) => !!w.emoji);
      if (emojiCards.length >= 4) pool = emojiCards;
    } else if (useTab === "kquiz" && activeMode === "recall" && !state.kotobaIsWrongRetry) {
      const recallable = pool.filter((w) => !(/[。？?]/.test(w.kana) && /[～~]/.test(w.kana)));
      if (recallable.length >= 5) pool = recallable;
    }

    if (useTab === "kotoba" && (activeMode === "flip" || activeMode === "swipe") && !state.kotobaIsWrongRetry) {
      const ed2 = pool.filter(isKotobaEd2);
      const ed1 = pool.filter((w) => !isKotobaEd2(w));
      pool = [
        ...ed2.filter((w) => !mSet.has(w.id)),
        ...ed2.filter((w) => mSet.has(w.id)),
        ...ed1.filter((w) => !mSet.has(w.id)),
        ...ed1.filter((w) => mSet.has(w.id))
      ];
    } else if (!state.kotobaIsWrongRetry) {
      pool = orderKotobaEd2First(pool);
    }

    state.kotobaFullPool = pool;
    state.kotobaFlippedMap = {};
    state.kotobaGridPage = 0;
    state.kotobaGridFilter = "all";
    state.kotobaHistory = [];
    state.kotobaFlipped = false;

    if (useTab === "kotoba") {
      state.kotobaDeck = pool;
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
    state.kotobaStreak = 0;
    state.kotobaSessionKnown = 0;
    state.kotobaSessionWrongIds = [];
    state.kotobaMcqPicked = null;
    state.kotobaRecallInput = "";
    state.kotobaRecallAnswered = false;
    state.kotobaRecallOk = false;

    if (useTab === "kquiz" && state.kotobaDeck.length > 0 && (activeMode === "quiz" || activeMode === "final")) {
      prepareKotobaMcqOptions();
    }
    if (targetTab && state.tab !== targetTab) state.tab = targetTab;
    renderCurrentTab();
  }

  function recordKotobaWrongBank(cardId, ok) {
    const prof = activeProfile();
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
    if (state.tab !== "kquiz") return;
    const bab = Number(state.kotobaScope);
    const prof = activeProfile();
    const pct = Math.round((correct / total) * 100);
    const prev = prof.kotoba.chapterScores[bab];
    prof.kotoba.chapterScores[bab] = {
      correct: !prev || pct >= prev.bestPct ? correct : prev.correct,
      total: !prev || pct >= prev.bestPct ? total : prev.total,
      bestPct: prev ? Math.max(prev.bestPct, pct) : pct,
      attempts: (prev && prev.attempts ? prev.attempts : 0) + 1
    };
    persistProfile();
  }

  function markKotobaStatus(card, known, advanceQuiz) {
    if (!card) return;
    const prof = activeProfile();
    const mSet = new Set(prof.kotoba.masteredIds);
    const rSet = new Set(prof.kotoba.reviewIds);
    prof.kotoba.totalPlayed += 1;

    if (known) {
      mSet.add(card.id);
      rSet.delete(card.id);
      state.kotobaStreak += 1;
      if (state.kotobaStreak > prof.kotoba.bestStreak) prof.kotoba.bestStreak = state.kotobaStreak;
    } else {
      mSet.delete(card.id);
      rSet.add(card.id);
      state.kotobaStreak = 0;
    }
    if (advanceQuiz) {
      if (known) state.kotobaSessionKnown += 1;
      else if (!state.kotobaSessionWrongIds.includes(card.id)) state.kotobaSessionWrongIds.push(card.id);
      recordKotobaWrongBank(card.id, known);
    }
    prof.kotoba.masteredIds = [...mSet];
    prof.kotoba.reviewIds = [...rSet];
    persistProfile();
  }

  function getKotobaEmojiHtml(card, cls) {
    if (!card || !card.emoji || state.kotobaEmojiSize === "off") return "";
    const sz = state.kotobaEmojiSize === "large" ? "font-size:56px;" : "font-size:34px;";
    return `<div class="${cls || ""}" style="line-height:1.05; ${sz}" aria-hidden="true">${card.emoji}</div>`;
  }

  function renderKotobaDeckHeader(isQuizTab) {
    const prof = activeProfile();
    const allowEd1 = !(isQuizTab && state.kquizMode === "final") && Boolean(state.showEd1Archive);
    const activeAll = allowEd1 ? ALL_KOTOBA : ALL_KOTOBA.filter(isKotobaEd2);
    const isSingleBab = /^\d+$/.test(state.kotobaScope);
    const curBabNum = isSingleBab ? Number(state.kotobaScope) : null;
    const savedWrongForScope = prof.kotoba.wrongIdsByScope[state.kotobaScope] || [];
    const activeBatch = getActiveKotobaBatchSize(state.kotobaScope);
    const settingsOpen = isQuizTab ? state.kquizSettingsOpen : state.kotobaMemSettingsOpen;

    const scopeOptions = [
      `<option value="all" ${state.kotobaScope === "all" ? "selected" : ""}>Semua Bab 1–25 (${activeAll.length} kata)</option>`,
      `<option value="1-5" ${state.kotobaScope === "1-5" ? "selected" : ""}>Bab 1–5 (Dasar)</option>`,
      `<option value="6-10" ${state.kotobaScope === "6-10" ? "selected" : ""}>Bab 6–10 (Aksi &amp; Sifat)</option>`,
      `<option value="11-15" ${state.kotobaScope === "11-15" ? "selected" : ""}>Bab 11–15 (Bentuk-て)</option>`,
      `<option value="16-20" ${state.kotobaScope === "16-20" ? "selected" : ""}>Bab 16–20 (-Nai &amp; Biasa)</option>`,
      `<option value="21-25" ${state.kotobaScope === "21-25" ? "selected" : ""}>Bab 21–25 (Majemuk)</option>`,
      `<option value="review" ${state.kotobaScope === "review" ? "selected" : ""}>🔁 Belum Hafal (${prof.kotoba.reviewIds.length} kata)</option>`,
      ...Array.from({ length: 25 }, (_, i) => i + 1).map((b) => {
        const len = (KOTOBA_DATA[b] || []).filter((w) => allowEd1 || isKotobaEd2(w)).length;
        const sc = prof.kotoba.chapterScores[b];
        return `<option value="${b}" ${state.kotobaScope === String(b) ? "selected" : ""}>Bab ${b} (${len} kata${sc ? ` · ${sc.bestPct}%` : ""})</option>`;
      })
    ].join("");

    const modeButtonsHtml = isQuizTab
      ? `
        <div class="m-mode-rail" role="tablist" aria-label="Mode Kuis Kotoba">
          <button type="button" class="m-mode-btn ${state.kquizMode === "quiz" ? "is-active" : ""}" data-kqmode="quiz">⚡ Kuis (1–50)</button>
          <button type="button" class="m-mode-btn ${state.kquizMode === "recall" ? "is-active" : ""}" data-kqmode="recall">✍️ Tes Ketik</button>
          <button type="button" class="m-mode-btn ${state.kquizMode === "final" ? "is-active" : ""}" data-kqmode="final">🏆 Tes Akhir${isSingleBab ? ` B${curBabNum}` : " Ktb"}</button>
        </div>
      `
      : `
        <div class="m-mode-rail" role="tablist" aria-label="Mode Hafalan Kotoba">
          <button type="button" class="m-mode-btn ${state.kotobaMemMode === "swipe" ? "is-active" : ""}" data-kmode="swipe">👆 Swipe</button>
          <button type="button" class="m-mode-btn ${state.kotobaMemMode === "table" ? "is-active" : ""}" data-kmode="table">📋 Tabel</button>
          <button type="button" class="m-mode-btn ${state.kotobaMemMode === "flip" ? "is-active" : ""}" data-kmode="flip">🃏 Flip Kartu</button>
        </div>
      `;

    const settingsBodyHtml = settingsOpen
      ? `
        <div class="m-settings-grid">
          <div class="m-setting-group">
            <span class="m-setting-label">Emot Visual (Kata Konkret)</span>
            <div class="m-chip-row">
              <button type="button" class="m-chip ${state.kotobaEmojiSize === "large" ? "is-active" : ""}" data-kemoji="large">Gede (Biar Hafal!)</button>
              <button type="button" class="m-chip ${state.kotobaEmojiSize === "normal" ? "is-active" : ""}" data-kemoji="normal">Normal</button>
              <button type="button" class="m-chip ${state.kotobaEmojiSize === "off" ? "is-active" : ""}" data-kemoji="off">OFF</button>
            </div>
          </div>
          <div class="m-setting-group">
            <span class="m-setting-label">Setingan Romaji di Kotoba</span>
            <div class="m-chip-row">
              <button type="button" class="m-chip ${state.kotobaRomajiMode === "on" ? "is-active" : ""}" data-krom="on">Romaji: ON</button>
              <button type="button" class="m-chip ${state.kotobaRomajiMode === "back" ? "is-active" : ""}" data-krom="back">Intip di Jawaban</button>
              <button type="button" class="m-chip ${state.kotobaRomajiMode === "off" ? "is-active" : ""}" data-krom="off">OFF (Murni Kana)</button>
            </div>
          </div>
          ${isQuizTab ? `
            <div class="m-setting-group">
              <span class="m-setting-label">Jumlah Soal Kuis (Maks 50)</span>
              <div class="m-chip-row">
                ${[10, 20, 30, 50].map((n) => `<button type="button" class="m-chip ${state.kotobaQuizCount === n ? "is-active" : ""}" data-kcount="${n}">${n}</button>`).join("")}
                <input type="number" min="1" max="50" id="mInpKotobaCount" class="m-count-input" value="${state.kotobaQuizCount}" aria-label="Jumlah soal kuis">
              </div>
            </div>
            <div class="m-setting-group">
              <span class="m-setting-label">Arah Uji &amp; Audio</span>
              <div class="m-chip-row">
                <button type="button" class="m-chip ${state.kotobaDir === "jp2id" ? "is-active" : ""}" data-kdir="jp2id">🇯🇵→🇮🇩</button>
                <button type="button" class="m-chip ${state.kotobaDir === "id2jp" ? "is-active" : ""}" data-kdir="id2jp">🇮🇩→🇯🇵</button>
                <button type="button" class="m-chip ${state.kotobaDir === "emoji" ? "is-active" : ""}" data-kdir="emoji">😀 Tebak Emot</button>
                <button type="button" class="m-chip ${state.kotobaAutoAudio ? "is-active" : ""}" id="btnMobAutoAudio">🔊 Auto: ${state.kotobaAutoAudio ? "ON" : "OFF"}</button>
              </div>
            </div>
          ` : `
            <div class="m-setting-group">
              <span class="m-setting-label">Arah Flip, Audio, &amp; Arsip</span>
              <div class="m-chip-row">
                <button type="button" class="m-chip ${state.kotobaDir !== "id2jp" ? "is-active" : ""}" data-kdir="jp2id">🇯🇵 Depan</button>
                <button type="button" class="m-chip ${state.kotobaDir === "id2jp" ? "is-active" : ""}" data-kdir="id2jp">🇮🇩 Depan</button>
                <button type="button" class="m-chip ${state.kotobaAutoAudio ? "is-active" : ""}" id="btnMobAutoAudio">🔊 Auto: ${state.kotobaAutoAudio ? "ON" : "OFF"}</button>
                <button type="button" class="m-chip ${state.showEd1Archive ? "is-active" : ""}" id="btnMobToggleEd1">📚 Arsip Ed. 1: ${state.showEd1Archive ? "ON" : "OFF"}</button>
              </div>
            </div>
            <div class="m-setting-group">
              <span class="m-setting-label">Tampil Kartu (${isSingleBab ? `Bab ${curBabNum}` : "Dek Ini"}) &amp; Reset</span>
              <div class="m-chip-row">
                ${[["5", "🎯 5 Fokus"], ["10", "10 Kartu"], ["15", "15 Kartu"], ["all", "🗂️ Semua"]].map(([v, l]) => `
                  <button type="button" class="m-chip ${activeBatch === v ? "is-active" : ""}" data-kbatch="${v}">${l}</button>
                `).join("")}
                <button type="button" class="m-chip is-warn" id="btnMobResetDeck">🔄 Reset Hafal Dek Ini</button>
              </div>
            </div>
          `}
        </div>
      `
      : "";

    return `
      <section class="m-controls-card">
        <div class="m-deck-row">
          <select class="m-select" id="mSelKotobaScope" aria-label="Pilih Dek Bab">${scopeOptions}</select>
          <button type="button" class="m-btn-soft" id="btnMobReshuffle" style="min-height:38px; padding:6px 10px;">🔀 Acak</button>
          <button type="button" class="m-btn-soft ${settingsOpen ? "is-active" : ""}" id="btnToggleKotobaSettings" style="min-height:38px; padding:6px 10px;">⚙️ Setingan</button>
        </div>
        ${savedWrongForScope.length > 0 ? `
          <div class="m-deck-row">
            <button type="button" class="m-chip is-warn" id="btnMobWrongSaved">🔁 Salah Tersimpan (${savedWrongForScope.length})</button>
          </div>
        ` : ""}
        ${renderBabRailHtml(state.kotobaScope, "kbab", "kotoba")}
        ${modeButtonsHtml}
        ${isQuizTab && state.kquizMode === "final" ? `<div class="m-desktop-note">🏆 <strong>Tes Akhir Kotoba Edisi 2:</strong> Menguji kosakata aktif Edisi 2 saja (Arsip Ed. 1 otomatis dikecualikan).</div>` : ""}
        ${settingsBodyHtml}
      </section>
    `;
  }

  function wireKotobaDeckHeader(app, isQuizTab) {
    const prof = activeProfile();
    const targetMode = getActiveKotobaMode();
    const savedWrongForScope = prof.kotoba.wrongIdsByScope[state.kotobaScope] || [];

    const selScope = document.getElementById("mSelKotobaScope");
    if (selScope) selScope.addEventListener("change", () => startKotobaSession(selScope.value, targetMode, null, isQuizTab ? "kquiz" : "kotoba"));
    const btnReshuffle = document.getElementById("btnMobReshuffle");
    if (btnReshuffle) btnReshuffle.addEventListener("click", () => startKotobaSession(state.kotobaScope, targetMode, null, isQuizTab ? "kquiz" : "kotoba"));
    const btnToggleSet = document.getElementById("btnToggleKotobaSettings");
    if (btnToggleSet) {
      btnToggleSet.addEventListener("click", () => {
        if (isQuizTab) state.kquizSettingsOpen = !state.kquizSettingsOpen;
        else state.kotobaMemSettingsOpen = !state.kotobaMemSettingsOpen;
        renderCurrentTab();
      });
    }
    const btnWrongSaved = document.getElementById("btnMobWrongSaved");
    if (btnWrongSaved) {
      btnWrongSaved.addEventListener("click", () => {
        const qMode = isQuizTab ? state.kquizMode : "final";
        startKotobaSession(state.kotobaScope, qMode, savedWrongForScope, "kquiz");
      });
    }

    app.querySelectorAll("[data-kbab]").forEach((b) => b.addEventListener("click", () => startKotobaSession(b.dataset.kbab, targetMode, null, isQuizTab ? "kquiz" : "kotoba")));
    app.querySelectorAll("[data-kmode]").forEach((b) => b.addEventListener("click", () => startKotobaSession(state.kotobaScope, b.dataset.kmode, null, "kotoba")));
    app.querySelectorAll("[data-kqmode]").forEach((b) => b.addEventListener("click", () => startKotobaSession(state.kotobaScope, b.dataset.kqmode, null, "kquiz")));
    app.querySelectorAll("[data-kemoji]").forEach((b) => b.addEventListener("click", () => { state.kotobaEmojiSize = b.dataset.kemoji; persistPrefs(); renderCurrentTab(); }));
    app.querySelectorAll("[data-krom]").forEach((b) => b.addEventListener("click", () => { state.kotobaRomajiMode = b.dataset.krom; persistPrefs(); renderCurrentTab(); }));
    app.querySelectorAll("[data-kcount]").forEach((b) => b.addEventListener("click", () => {
      state.kotobaQuizCount = clampKotobaQuizCount(b.dataset.kcount);
      persistPrefs();
      startKotobaSession(state.kotobaScope, targetMode, null, isQuizTab ? "kquiz" : "kotoba");
    }));
    const inpCnt = document.getElementById("mInpKotobaCount");
    if (inpCnt) {
      inpCnt.addEventListener("change", () => {
        state.kotobaQuizCount = clampKotobaQuizCount(inpCnt.value);
        persistPrefs();
        startKotobaSession(state.kotobaScope, targetMode, null, isQuizTab ? "kquiz" : "kotoba");
      });
    }
    app.querySelectorAll("[data-kdir]").forEach((b) => b.addEventListener("click", () => {
      state.kotobaDir = b.dataset.kdir;
      startKotobaSession(state.kotobaScope, targetMode, null, isQuizTab ? "kquiz" : "kotoba");
    }));
    const btnAuto = document.getElementById("btnMobAutoAudio");
    if (btnAuto) btnAuto.addEventListener("click", () => { state.kotobaAutoAudio = !state.kotobaAutoAudio; persistPrefs(); renderCurrentTab(); });
    const btnEd1 = document.getElementById("btnMobToggleEd1");
    if (btnEd1) btnEd1.addEventListener("click", () => {
      state.showEd1Archive = !state.showEd1Archive;
      persistPrefs();
      startKotobaSession(state.kotobaScope, targetMode, null, isQuizTab ? "kquiz" : "kotoba");
    });
    app.querySelectorAll("[data-kbatch]").forEach((b) => b.addEventListener("click", () => {
      state.kotobaBatchByScope[state.kotobaScope] = sanitizeKotobaBatchSize(b.dataset.kbatch);
      state.kotobaGridPage = 0;
      persistPrefs();
      renderCurrentTab();
    }));
    const btnResetDeck = document.getElementById("btnMobResetDeck");
    if (btnResetDeck) {
      btnResetDeck.addEventListener("click", () => {
        const ids = new Set((state.kotobaFullPool || []).map((w) => w.id));
        prof.kotoba.masteredIds = prof.kotoba.masteredIds.filter((id) => !ids.has(id));
        prof.kotoba.reviewIds = prof.kotoba.reviewIds.filter((id) => !ids.has(id));
        persistProfile();
        startKotobaSession(state.kotobaScope, targetMode, null, isQuizTab ? "kquiz" : "kotoba");
      });
    }
  }

  // ===== TAB 1: KOTOBA HAFALAN (SWIPE · TABEL · FLIP KARTU) =====
  function renderKotobaTab(app) {
    const prof = activeProfile();
    const mSet = new Set(prof.kotoba.masteredIds);
    const rSet = new Set(prof.kotoba.reviewIds);
    const activeBatch = getActiveKotobaBatchSize(state.kotobaScope);
    const showFrontRomaji = state.showRomaji && state.kotobaRomajiMode === "on";
    const showBackRomaji = state.showRomaji && state.kotobaRomajiMode !== "off";
    const controlsHtml = renderKotobaDeckHeader(false);
    let stageHtml = "";

    if (state.kotobaMemMode === "table") {
      let ordered = state.kotobaScope === "all"
        ? ALL_KOTOBA
        : state.kotobaScope === "review"
        ? ALL_KOTOBA.filter((w) => rSet.has(w.id))
        : /^\d+-\d+$/.test(state.kotobaScope)
        ? (() => { const [a, b] = state.kotobaScope.split("-").map(Number); return ALL_KOTOBA.filter((w) => w.bab >= a && w.bab <= b); })()
        : (KOTOBA_DATA[Number(state.kotobaScope) || 1] || []);
      ordered = orderKotobaEd2First(state.showEd1Archive ? ordered : ordered.filter(isKotobaEd2));
      const q = state.kotobaSearch.trim().toLowerCase();
      const filtered = q
        ? ordered.filter((w) =>
            w.kana.toLowerCase().includes(q) || (w.kanji || "").toLowerCase().includes(q) ||
            w.romaji.toLowerCase().includes(q) || w.arti.toLowerCase().includes(q)
          )
        : ordered;
      const ed2Rows = filtered.filter(isKotobaEd2);
      const ed1Rows = state.showEd1Archive ? filtered.filter((w) => !isKotobaEd2(w)) : [];
      const rowHtml = (w, isEd1) => {
        const known = mSet.has(w.id);
        const masked = state.kotobaMaskArti && !state.kotobaRevealedRowIds[w.id];
        return `
          <div class="m-book-row ${known ? "is-mastered" : ""} ${isEd1 ? "is-ed1-row" : ""}" data-brow="${esc(w.id)}">
            <div class="m-book-main">
              <div class="m-book-jp">
                ${w.emoji && state.kotobaEmojiSize !== "off" ? `<span aria-hidden="true">${w.emoji}</span>` : ""}
                <span>${esc(w.kana)}</span>
                ${w.kanji ? `<span class="m-book-kanji">(${esc(w.kanji)})</span>` : ""}
                ${mKotobaEdBadge(w)}
              </div>
              ${showBackRomaji ? `<div class="m-book-romaji m-romaji">${esc(w.romaji)}</div>` : ""}
              <div class="m-book-arti ${masked ? "is-masked" : ""}">${esc(w.arti)}</div>
            </div>
            <div class="m-book-actions">
              <button type="button" class="m-tts-btn" data-mspeak="${esc(w.kana)}" aria-label="Putar audio">🔊</button>
              <button type="button" class="m-know-chip ${known ? "is-on" : ""}" data-bknow="${esc(w.id)}" aria-label="Tandai hafal">${known ? "✓" : "○"}</button>
            </div>
          </div>
        `;
      };
      stageHtml = `
        <div class="m-hud-row">
          <span>Edisi 2: ${ed2Rows.length}${ed1Rows.length ? ` · Arsip Ed. 1: ${ed1Rows.length}` : ""} kata</span>
          <span>Hafal: ${ordered.filter((w) => mSet.has(w.id)).length}/${ordered.length}</span>
        </div>
        <div class="m-table-tools">
          <input type="search" class="m-search" id="mKotobaSearch" value="${esc(state.kotobaSearch)}" placeholder="🔍 Cari kana / romaji / arti...">
          <button type="button" class="m-btn-soft" id="btnToggleMaskArti">${state.kotobaMaskArti ? "👁️ Buka Arti" : "🙈 Tutup Arti"}</button>
        </div>
        <div class="m-book-list">
          ${ed2Rows.map((w) => rowHtml(w, false)).join("")}
          ${ed1Rows.length > 0 ? `<div class="m-archive-divider">📚 Arsip &amp; Referensi · Edisi 1 (${ed1Rows.length} kata — tidak masuk Tes Akhir)</div>` : ""}
          ${ed1Rows.map((w) => rowHtml(w, true)).join("")}
          ${ed2Rows.length === 0 && ed1Rows.length === 0 ? `<div class="m-result-card"><p>Tidak ada kosakata cocok.</p></div>` : ""}
        </div>
      `;
    } else if (state.kotobaMemMode === "flip") {
      const pool = state.kotobaFullPool || [];
      const masteredHere = pool.filter((w) => mSet.has(w.id)).length;
      const q = state.kotobaSearch.trim().toLowerCase();
      const filtered = pool.filter((w) => {
        if (state.kotobaGridFilter === "unmastered" && mSet.has(w.id)) return false;
        if (state.kotobaGridFilter === "mastered" && !mSet.has(w.id)) return false;
        if (q) {
          const hay = `${w.kana} ${w.kanji || ""} ${w.romaji} ${w.arti}`.toLowerCase();
          if (!hay.includes(q)) return false;
        }
        return true;
      });
      const perPage = activeBatch === "all" ? Math.max(1, Math.min(filtered.length, 60)) : Math.max(5, Number(activeBatch) || 5);
      const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
      const page = Math.max(0, Math.min(totalPages - 1, state.kotobaGridPage || 0));
      state.kotobaGridPage = page;
      const visible = filtered.slice(page * perPage, page * perPage + perPage);
      const frontIsJp = state.kotobaDir !== "id2jp";

      stageHtml = `
        <div class="m-hud-row">
          <span id="mKotobaFlipBadge">Hafal: ${masteredHere}/${pool.length} kata · Tampil: ${visible.length} kartu</span>
          <span>🔥 Streak: ${state.kotobaStreak}</span>
        </div>
        <div class="m-progress-track"><div class="m-progress-fill" style="width:${pool.length ? Math.round((masteredHere / pool.length) * 100) : 0}%"></div></div>
        <div class="m-chip-row">
          <button type="button" class="m-chip" id="btnMobFlipOpenAll">👀 Buka Semua</button>
          <button type="button" class="m-chip" id="btnMobFlipCloseAll">🙈 Tutup Semua</button>
          <button type="button" class="m-chip ${state.kotobaGridFilter === "all" ? "is-active" : ""}" data-kgridfilter="all">Semua</button>
          <button type="button" class="m-chip ${state.kotobaGridFilter === "unmastered" ? "is-active" : ""}" data-kgridfilter="unmastered">Belum Hafal</button>
          <button type="button" class="m-chip ${state.kotobaGridFilter === "mastered" ? "is-active" : ""}" data-kgridfilter="mastered">Sudah Hafal</button>
        </div>
        <input type="search" class="m-search" id="mKotobaSearch" value="${esc(state.kotobaSearch)}" placeholder="🔍 Cari kana / romaji / arti...">
        <div class="m-multi-grid" id="mKotobaMultiGrid">
          ${visible.map((w) => {
            const flipped = !!state.kotobaFlippedMap[w.id];
            const known = mSet.has(w.id);
            const rev = !known && rSet.has(w.id);
            const ed1 = !isKotobaEd2(w);
            return `
              <article class="m-multi-card ${flipped ? "is-flipped" : ""} ${known ? "is-mastered" : rev ? "is-review" : ""} ${ed1 ? "is-ed1-archive" : ""}">
                <div class="m-multi-face" role="button" tabindex="0" data-mcardflip="${esc(w.id)}">
                  <div class="m-swipe-top">
                    <span>${known ? "✅ Hafal" : rev ? "🔁 Ulang" : `Bab ${w.bab}`} ${mKotobaEdBadge(w)}</span>
                    <button type="button" class="m-tts-btn" data-mspeak="${esc(w.kana)}" aria-label="Audio">🔊</button>
                  </div>
                  ${getKotobaEmojiHtml(w)}
                  ${!flipped ? (
                    frontIsJp ? `
                      <div class="m-swipe-jp" style="font-size:24px;">${esc(w.kana)}</div>
                      ${w.kanji ? `<div class="m-swipe-kanji">${esc(w.kanji)}</div>` : ""}
                      ${showFrontRomaji ? `<div class="m-swipe-romaji m-romaji">${esc(w.romaji)}</div>` : ""}
                    ` : `<div class="m-swipe-arti">${esc(w.arti)}</div>`
                  ) : `
                    <div class="m-swipe-jp" style="font-size:24px;">${esc(w.kana)}</div>
                    ${w.kanji ? `<div class="m-swipe-kanji">${esc(w.kanji)}</div>` : ""}
                    ${showBackRomaji ? `<div class="m-swipe-romaji m-romaji">${esc(w.romaji)}</div>` : ""}
                    <div class="m-swipe-arti">${esc(w.arti)}</div>
                  `}
                  <div class="m-swipe-bottom-hint">${flipped ? "Ketuk untuk tutup" : "Ketuk kartu untuk flip"}</div>
                </div>
                <div class="m-multi-actions">
                  <button type="button" class="m-multi-act is-known ${known ? "is-active" : ""}" data-mcardknown="${esc(w.id)}">✅ Sudah Hafal</button>
                  <button type="button" class="m-multi-act is-review ${rev ? "is-active" : ""}" data-mcardrev="${esc(w.id)}">🔁 Belum</button>
                </div>
              </article>
            `;
          }).join("")}
        </div>
        ${totalPages > 1 ? `
          <div class="m-hud-row">
            <button type="button" class="m-btn-soft" id="btnMobPrevWave" ${page <= 0 ? "disabled" : ""}>← Sebelumnya</button>
            <span>Hal ${page + 1}/${totalPages}</span>
            <button type="button" class="m-btn-soft" id="btnMobNextWave" ${page + 1 >= totalPages ? "disabled" : ""}>Berikutnya →</button>
          </div>
        ` : ""}
      `;
    } else {
      const deck = state.kotobaDeck;
      const total = deck.length;
      const cur = deck[state.kotobaIdx];
      const masteredHere = deck.filter((w) => mSet.has(w.id)).length;
      if (!cur) {
        stageHtml = `
          <div class="m-result-card">
            <div style="font-size:42px;">${total === 0 ? "📭" : "🎉"}</div>
            <div class="m-result-score" style="font-size:24px;">${total === 0 ? "Dek Kosong" : "Putaran Swipe Selesai!"}</div>
            <p style="margin:0; font-size:13.5px; color:var(--color-ink-muted);">Hafal ${masteredHere} dari ${total} kata di dek ini.</p>
            <div style="display:flex; gap:8px; width:100%; margin-top:6px;">
              <button type="button" class="m-btn-primary" id="btnSwipeRestart" style="flex:1;">🔄 Ulangi</button>
              <button type="button" class="m-btn-soft" id="btnSwipeGoQuiz" style="flex:1;">⚡ Uji di Kuis Kotoba</button>
            </div>
          </div>
        `;
      } else {
        const flip = state.kotobaFlipped;
        const pct = total > 0 ? Math.round((state.kotobaIdx / total) * 100) : 0;
        stageHtml = `
          <div class="m-hud-row">
            <span>Kartu ${state.kotobaIdx + 1} / ${total}</span>
            <span>Hafal: ${masteredHere}/${total} · 🔥 ${state.kotobaStreak}</span>
          </div>
          <div class="m-progress-track"><div class="m-progress-fill" style="width:${pct}%"></div></div>
          <div class="m-swipe-deck-wrap">
            <div class="m-swipe-stage">
              ${state.kotobaIdx + 1 < total ? `<div class="m-swipe-ghost" aria-hidden="true"></div>` : ""}
              <article class="m-swipe-card ${flip ? "is-flipped" : ""}" id="mKotobaCard">
                <span class="m-stamp m-stamp-ok" aria-hidden="true">✅ HAFAL</span>
                <span class="m-stamp m-stamp-again" aria-hidden="true">🔁 ULANG</span>
                <div class="m-swipe-top">
                  <span>Bab ${cur.bab} ${mKotobaEdBadge(cur)}</span>
                  <button type="button" class="m-tts-btn" data-mspeak="${esc(cur.kana)}" aria-label="Audio">🔊</button>
                </div>
                <div class="m-swipe-center">
                  ${getKotobaEmojiHtml(cur)}
                  <div class="m-swipe-jp">${esc(cur.kana)}</div>
                  ${cur.kanji ? `<div class="m-swipe-kanji">${esc(cur.kanji)}</div>` : ""}
                  ${(flip ? showBackRomaji : showFrontRomaji) ? `<div class="m-swipe-romaji m-romaji">${esc(cur.romaji)}</div>` : ""}
                  ${flip ? `<div class="m-swipe-arti">${esc(cur.arti)}</div>` : ""}
                </div>
                <div class="m-swipe-bottom-hint">${flip ? "← Geser kiri: Ulang · Geser kanan: Hafal →" : "Ketuk kartu untuk balik arti &amp; audio"}</div>
              </article>
            </div>
            <div class="m-swipe-actions">
              <button type="button" class="m-act-round" id="btnSwipeUndo" ${state.kotobaHistory.length === 0 ? "disabled" : ""} aria-label="Urungkan">↩</button>
              <button type="button" class="m-act-again" id="btnSwipeAgain">🔁 Ulang</button>
              <button type="button" class="m-act-round" data-mspeak="${esc(cur.kana)}" aria-label="Audio">🔊</button>
              <button type="button" class="m-act-know" id="btnSwipeKnow">✓ Hafal</button>
            </div>
          </div>
        `;
      }
    }

    app.innerHTML = `${controlsHtml}${stageHtml}`;
    wireKotobaDeckHeader(app, false);

    // Table listeners
    const sInput = document.getElementById("mKotobaSearch");
    if (sInput) {
      sInput.addEventListener("input", () => {
        state.kotobaSearch = sInput.value;
        state.kotobaGridPage = 0;
        renderKotobaTab(app);
        const nx = document.getElementById("mKotobaSearch");
        if (nx) { nx.focus(); if (typeof nx.setSelectionRange === "function") nx.setSelectionRange(state.kotobaSearch.length, state.kotobaSearch.length); }
      });
    }
    const btnMask = document.getElementById("btnToggleMaskArti");
    if (btnMask) btnMask.addEventListener("click", () => { state.kotobaMaskArti = !state.kotobaMaskArti; state.kotobaRevealedRowIds = {}; renderKotobaTab(app); });
    app.querySelectorAll("[data-brow]").forEach((r) => r.addEventListener("click", (e) => {
      if (e.target.closest && e.target.closest("button")) return;
      if (!state.kotobaMaskArti) return;
      state.kotobaRevealedRowIds[r.dataset.brow] = !state.kotobaRevealedRowIds[r.dataset.brow];
      renderKotobaTab(app);
    }));
    app.querySelectorAll("[data-bknow]").forEach((b) => b.addEventListener("click", () => {
      const card = ALL_KOTOBA.find((x) => x.id === b.dataset.bknow);
      if (card) { markKotobaStatus(card, !mSet.has(card.id), false); renderKotobaTab(app); }
    }));

    // Flip grid listeners
    const btnOpenAll = document.getElementById("btnMobFlipOpenAll");
    if (btnOpenAll) btnOpenAll.addEventListener("click", () => { (state.kotobaFullPool || []).forEach((w) => { state.kotobaFlippedMap[w.id] = true; }); renderKotobaTab(app); });
    const btnCloseAll = document.getElementById("btnMobFlipCloseAll");
    if (btnCloseAll) btnCloseAll.addEventListener("click", () => { state.kotobaFlippedMap = {}; renderKotobaTab(app); });
    app.querySelectorAll("[data-kgridfilter]").forEach((b) => b.addEventListener("click", () => { state.kotobaGridFilter = b.dataset.kgridfilter; state.kotobaGridPage = 0; renderKotobaTab(app); }));
    app.querySelectorAll("[data-mcardflip]").forEach((el) => el.addEventListener("click", (e) => {
      if (e.target.closest && e.target.closest("button")) return;
      const id = el.dataset.mcardflip;
      state.kotobaFlippedMap[id] = !state.kotobaFlippedMap[id];
      if (state.kotobaFlippedMap[id] && state.kotobaAutoAudio) {
        const w = ALL_KOTOBA.find((x) => x.id === id);
        if (w) speakText(w.kana);
      }
      renderKotobaTab(app);
    }));
    app.querySelectorAll("[data-mcardknown]").forEach((b) => b.addEventListener("click", () => {
      const w = ALL_KOTOBA.find((x) => x.id === b.dataset.mcardknown);
      if (w) { markKotobaStatus(w, true, false); renderKotobaTab(app); }
    }));
    app.querySelectorAll("[data-mcardrev]").forEach((b) => b.addEventListener("click", () => {
      const w = ALL_KOTOBA.find((x) => x.id === b.dataset.mcardrev);
      if (w) { markKotobaStatus(w, false, false); renderKotobaTab(app); }
    }));
    const btnPrevW = document.getElementById("btnMobPrevWave");
    if (btnPrevW) btnPrevW.addEventListener("click", () => { state.kotobaGridPage = Math.max(0, state.kotobaGridPage - 1); renderKotobaTab(app); });
    const btnNextW = document.getElementById("btnMobNextWave");
    if (btnNextW) btnNextW.addEventListener("click", () => { state.kotobaGridPage += 1; renderKotobaTab(app); });

    // Swipe listeners
    const swipeCardEl = document.getElementById("mKotobaCard");
    if (swipeCardEl) {
      const cur = state.kotobaDeck[state.kotobaIdx];
      const commitSwipe = (known) => {
        state.kotobaHistory.push(state.kotobaIdx);
        markKotobaStatus(cur, known, false);
        state.kotobaIdx += 1;
        state.kotobaFlipped = false;
        renderKotobaTab(app);
      };
      attachSwipeHandlers(swipeCardEl, commitSwipe, () => {
        state.kotobaFlipped = !state.kotobaFlipped;
        if (state.kotobaFlipped && state.kotobaAutoAudio && cur) speakText(cur.kana);
        renderKotobaTab(app);
      });
      document.getElementById("btnSwipeKnow").addEventListener("click", () => commitSwipe(true));
      document.getElementById("btnSwipeAgain").addEventListener("click", () => commitSwipe(false));
      document.getElementById("btnSwipeUndo").addEventListener("click", () => {
        const prev = state.kotobaHistory.pop();
        if (prev !== undefined) { state.kotobaIdx = prev; state.kotobaFlipped = false; renderKotobaTab(app); }
      });
    }
    const btnSwRest = document.getElementById("btnSwipeRestart");
    if (btnSwRest) btnSwRest.addEventListener("click", () => startKotobaSession(state.kotobaScope, "swipe", null, "kotoba"));
    const btnSwQuiz = document.getElementById("btnSwipeGoQuiz");
    if (btnSwQuiz) btnSwQuiz.addEventListener("click", () => startKotobaSession(state.kotobaScope, "quiz", null, "kquiz"));
  }

  // ===== TAB 2: KUIS KOTOBA & TES AKHIR KOTOBA (TERPISAH DARI HAFALAN) =====
  function renderKotobaQuizTab(app) {
    const showFrontRomaji = state.showRomaji && state.kotobaRomajiMode === "on";
    const showBackRomaji = state.showRomaji && state.kotobaRomajiMode !== "off";
    const controlsHtml = renderKotobaDeckHeader(true);
    const deck = state.kotobaDeck;
    const total = deck.length;
    const cur = deck[state.kotobaIdx];
    let stageHtml = "";

    if (!cur) {
      const actions = [
        state.kotobaSessionWrongIds.length > 0 ? `<button type="button" class="m-btn-primary" id="btnMobRetryWrong" style="flex:1;">🔁 Ulangi ${state.kotobaSessionWrongIds.length} Salah</button>` : "",
        `<button type="button" class="m-btn-soft" id="btnMobReplay" style="flex:1;">🔀 Main Lagi</button>`
      ].filter(Boolean).join("");
      stageHtml = renderQuizResultCardHtml({
        eyebrow: state.kquizMode === "final" ? "HASIL TES AKHIR KOTOBA" : state.kquizMode === "recall" ? "HASIL TES HAFALAN KETIK" : "HASIL KUIS KOTOBA",
        score: state.kotobaSessionKnown,
        total,
        subtitle: `${total > 0 ? Math.round((state.kotobaSessionKnown / total) * 100) : 0}% · Benar ${state.kotobaSessionKnown}, Salah ${state.kotobaSessionWrongIds.length}`,
        actionsHtml: actions
      });
    } else {
      const qKind = getActiveKotobaQuestionKind();
      if (qKind === "recall") {
        const pct = Math.round(((state.kotobaIdx + (state.kotobaRecallAnswered ? 1 : 0)) / total) * 100);
        stageHtml = `
          <div class="m-hud-row">
            <span>Soal ${state.kotobaIdx + 1} / ${total} (Bab ${cur.bab})</span>
            <span>🔥 Streak: ${state.kotobaStreak}</span>
          </div>
          <div class="m-progress-track"><div class="m-progress-fill" style="width:${pct}%"></div></div>
          <article class="m-quiz-card">
            <div class="m-hud-row">
              <span>✍️ Tes Hafalan Ketik · Bab ${cur.bab} ${mKotobaEdBadge(cur)}</span>
              <button type="button" class="m-tts-btn" data-mspeak="${esc(cur.kana)}" aria-label="Audio">🔊</button>
            </div>
            ${getKotobaEmojiHtml(cur)}
            <div class="m-quiz-prompt" style="font-family:var(--font-body);">${esc(cur.arti)}</div>
            <form class="m-recall-form" id="mKotobaRecallForm">
              <input type="text" class="m-text-input ${state.kotobaRecallAnswered ? (state.kotobaRecallOk ? "is-correct" : "is-wrong") : ""}" id="mKotobaRecallInput" value="${esc(state.kotobaRecallInput)}" placeholder="Ketik Romaji atau Kana..." autocomplete="off" ${state.kotobaRecallAnswered ? "disabled" : ""}>
              ${!state.kotobaRecallAnswered ? `<button type="submit" class="m-btn-primary" style="width:100%;">Cek Hafalan</button>` : ""}
            </form>
            ${state.kotobaRecallAnswered ? `
              <div class="m-feedback ${state.kotobaRecallOk ? "is-ok" : "is-bad"}">
                ${state.kotobaRecallOk ? "✓ Hafalan Tepat!" : `✕ Jawaban: ${esc(cur.kana)} (${esc(cur.romaji)})`}
              </div>
              <button type="button" class="m-btn-primary" id="btnMobRecallNext" style="width:100%;">${state.kotobaIdx + 1 < total ? "Lanjut →" : "Lihat Hasil →"}</button>
            ` : ""}
          </article>
        `;
      } else {
        const isEmoji = qKind === "emoji" && !!cur.emoji;
        const askJp = !isEmoji && state.kotobaDir !== "id2jp";
        const answered = state.kotobaMcqPicked !== null;
        const isOk = answered && state.kotobaMcqPicked === state.kotobaMcqCorrectIdx;
        const pct = Math.round(((state.kotobaIdx + (answered ? 1 : 0)) / total) * 100);
        const optJp = isEmoji || !askJp;
        stageHtml = `
          <div class="m-hud-row">
            <span>Soal ${state.kotobaIdx + 1} / ${total} (Bab ${cur.bab})</span>
            <span>Benar: ${state.kotobaSessionKnown} · 🔥 ${state.kotobaStreak}</span>
          </div>
          <div class="m-progress-track"><div class="m-progress-fill" style="width:${pct}%"></div></div>
          <article class="m-quiz-card">
            <div class="m-hud-row">
              <span>${isEmoji ? "😀 Tebak Emot" : state.kquizMode === "final" ? "🏆 Tes Akhir Kotoba" : "⚡ Kuis Kotoba"} ${mKotobaEdBadge(cur)}</span>
              ${askJp || isEmoji ? `<button type="button" class="m-tts-btn" data-mspeak="${esc(cur.kana)}" aria-label="Audio">🔊</button>` : ""}
            </div>
            ${isEmoji ? `
              <div style="font-size:56px; text-align:center;">${cur.emoji}</div>
              <div class="m-quiz-prompt" style="font-family:var(--font-body); font-size:19px;">Apa bahasa Jepang untuk "${esc(cur.arti)}"?</div>
            ` : askJp ? `
              ${getKotobaEmojiHtml(cur)}
              <div class="m-quiz-prompt">${esc(cur.kana)} ${cur.kanji ? `<span class="m-book-kanji">(${esc(cur.kanji)})</span>` : ""}</div>
              ${showFrontRomaji ? `<div class="m-book-romaji m-romaji">${esc(cur.romaji)}</div>` : ""}
            ` : `
              ${getKotobaEmojiHtml(cur)}
              <div class="m-quiz-prompt" style="font-family:var(--font-body);">${esc(cur.arti)}</div>
            `}
            ${renderMcqOptionsHtml(state.kotobaMcqOptions, answered, state.kotobaMcqPicked, state.kotobaMcqCorrectIdx, "data-kmcq", (opt) => ({
              mainHtml: esc(optJp ? `${opt.kana}${opt.kanji ? ` (${opt.kanji})` : ""}` : opt.arti),
              subHtml: optJp && showBackRomaji ? esc(opt.romaji) : ""
            }))}
            ${answered ? `
              <div class="m-feedback ${isOk ? "is-ok" : "is-bad"}">${isOk ? "✓ Tepat!" : `✕ Jawaban: ${esc(cur.kana)} — ${esc(cur.arti)}`}</div>
              <button type="button" class="m-btn-primary" id="btnMobMcqNext" style="width:100%;">${state.kotobaIdx + 1 < total ? "Lanjut →" : "Lihat Hasil →"}</button>
            ` : ""}
          </article>
        `;
      }
    }

    app.innerHTML = `${controlsHtml}${stageHtml}`;
    wireKotobaDeckHeader(app, true);

    app.querySelectorAll("[data-kmcq]").forEach((b) => b.addEventListener("click", () => {
      if (state.kotobaMcqPicked !== null) return;
      const item = state.kotobaDeck[state.kotobaIdx];
      const pick = Number(b.dataset.kmcq);
      const ok = pick === state.kotobaMcqCorrectIdx;
      state.kotobaMcqPicked = pick;
      markKotobaStatus(item, ok, true);
      if (state.kotobaAutoAudio && item) speakText(item.kana);
      renderKotobaQuizTab(app);
    }));
    const btnMcqNext = document.getElementById("btnMobMcqNext");
    if (btnMcqNext) btnMcqNext.addEventListener("click", () => {
      state.kotobaIdx += 1;
      if (state.kotobaIdx >= state.kotobaDeck.length) saveKotobaChapterQuizScore(state.kotobaSessionKnown, state.kotobaDeck.length);
      else if (["mcq", "emoji"].includes(getActiveKotobaQuestionKind())) prepareKotobaMcqOptions();
      renderKotobaQuizTab(app);
    });
    const recForm = document.getElementById("mKotobaRecallForm");
    if (recForm) recForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (state.kotobaRecallAnswered) return;
      const inp = document.getElementById("mKotobaRecallInput");
      const raw = inp ? inp.value : "";
      const cleaned = norm(raw);
      if (!cleaned) return;
      const item = state.kotobaDeck[state.kotobaIdx];
      const acc = getAcceptedKotobaForms(item);
      const ok = acc.some((a) => a === cleaned || a === cleaned.replace(/[\s-]+/g, ""));
      state.kotobaRecallInput = raw;
      state.kotobaRecallAnswered = true;
      state.kotobaRecallOk = ok;
      markKotobaStatus(item, ok, true);
      if (state.kotobaAutoAudio && item) speakText(item.kana);
      renderKotobaQuizTab(app);
    });
    const btnRecNext = document.getElementById("btnMobRecallNext");
    if (btnRecNext) btnRecNext.addEventListener("click", () => {
      state.kotobaIdx += 1;
      state.kotobaRecallInput = "";
      state.kotobaRecallAnswered = false;
      state.kotobaRecallOk = false;
      if (state.kotobaIdx >= state.kotobaDeck.length) saveKotobaChapterQuizScore(state.kotobaSessionKnown, state.kotobaDeck.length);
      else if (["mcq", "emoji"].includes(getActiveKotobaQuestionKind())) prepareKotobaMcqOptions();
      renderKotobaQuizTab(app);
    });
    const btnRetryW = document.getElementById("btnMobRetryWrong");
    if (btnRetryW) btnRetryW.addEventListener("click", () => startKotobaSession(state.kotobaScope, state.kquizMode, [...state.kotobaSessionWrongIds], "kquiz"));
    const btnRep = document.getElementById("btnMobReplay");
    if (btnRep) btnRep.addEventListener("click", () => startKotobaSession(state.kotobaScope, state.kquizMode, null, "kquiz"));
  }

  // ===== TAB 3: KUIS MODUL BAB 1–25 (BANK JSON ON-DEMAND + NOTICE MATERI PC) =====
  function filterModulPoolBySection(bab, rawPool) {
    const arr = Array.isArray(rawPool) ? rawPool : [];
    if (Number(bab) !== 17 || state.mquizSection === "all") return arr;
    return arr.filter((q) => q.section === state.mquizSection);
  }

  function getActiveModulTargetCount() {
    if (state.mquizModeTag === "rapid") return state.mquizRapidCount === 25 ? 25 : 20;
    return state.mquizFlashCount === 15 ? 15 : 10;
  }

  function startModulQuizSession(bab, modeTag, wrongPool) {
    const rawPool = filterModulPoolBySection(bab, state.bankCache[bab] || []);
    const prof = activeProfile();
    const seenSet = new Set(Array.isArray(prof.seenBankIds[bab]) ? prof.seenBankIds[bab] : []);
    const activeMode = modeTag === "rapid" || modeTag === "retry" ? modeTag : "flash";
    state.mquizModeTag = activeMode;
    let picked = [];

    if (activeMode === "retry" && Array.isArray(wrongPool) && wrongPool.length > 0) {
      picked = shuffleCopy(wrongPool);
    } else {
      const targetCount = getActiveModulTargetCount();
      const unseen = shuffleCopy(rawPool.filter((q) => !seenSet.has(q.id)));
      const seen = shuffleCopy(rawPool.filter((q) => seenSet.has(q.id)));
      picked = [...unseen, ...seen].slice(0, Math.min(rawPool.length, targetCount));
    }

    state.mquizDeck = picked.map((q) => shuffleQuestionOptions(q, bab));
    state.mquizIdx = 0;
    state.mquizPicked = null;
    state.mquizCorrectCount = 0;
    state.mquizWrongList = [];
  }

  function loadModulBank(bab, autoStartMode) {
    const targetBab = Number(bab) || 1;
    state.mquizBab = targetBab;
    if (targetBab !== 17) state.mquizSection = "all";
    state.bankError = "";
    const modeToUse = autoStartMode === "rapid" ? "rapid" : "flash";

    if (Array.isArray(state.bankCache[targetBab])) {
      state.bankLoading = false;
      startModulQuizSession(targetBab, modeToUse);
      renderCurrentTab();
      return;
    }

    state.bankLoading = true;
    renderCurrentTab();
    const fileUrl = `../data/bank/bab-${String(targetBab).padStart(2, "0")}.json?v=${BANK_VERSION}`;
    fetch(fileUrl)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((arr) => {
        state.bankCache[targetBab] = Array.isArray(arr) ? arr : [];
        state.bankLoading = false;
        if (state.mquizBab === targetBab) {
          startModulQuizSession(targetBab, modeToUse);
          if (state.tab === "mquiz") renderCurrentTab();
        }
      })
      .catch(() => {
        state.bankLoading = false;
        state.bankError = `Gagal memuat bank soal Bab ${targetBab}. Pastikan koneksi aktif atau buka offline cache.`;
        if (state.tab === "mquiz") renderCurrentTab();
      });
  }

  function markModulBankSeenAndSave(bab, qId, finished, correct, total) {
    const prof = activeProfile();
    const list = Array.isArray(prof.seenBankIds[bab]) ? [...prof.seenBankIds[bab]] : [];
    if (qId && !list.includes(qId)) {
      list.push(qId);
      prof.seenBankIds[bab] = list;
    }
    if (finished && total > 0 && state.mquizModeTag !== "retry") {
      const pct = Math.round((correct / total) * 100);
      const prev = prof.chapters[bab];
      if (!prev || total >= 10) {
        prof.chapters[bab] = {
          correct: !prev || pct >= prev.bestPct ? correct : prev.correct,
          total: !prev || pct >= prev.bestPct ? total : prev.total,
          bestPct: prev ? Math.max(prev.bestPct, pct) : pct,
          attempts: (prev && prev.attempts ? prev.attempts : 0) + 1
        };
      }
    }
    persistProfile();
  }

  function renderModulQuizTab(app) {
    const bab = state.mquizBab;
    const prof = activeProfile();
    const pool = state.bankCache[bab] || [];
    const seenIds = Array.isArray(prof.seenBankIds[bab]) ? prof.seenBankIds[bab] : [];
    const unseenCount = pool.filter((q) => !seenIds.includes(q.id)).length;
    const saved = prof.chapters[bab];
    const title = CHAPTER_TITLES[bab] || `Bab ${bab}`;
    const isRapid = state.mquizModeTag === "rapid";
    const activeCount = getActiveModulTargetCount();
    const countChoices = isRapid ? [20, 25] : [10, 15];

    const topHtml = `
      ${renderBabRailHtml(String(bab), "mqbab", "mquiz")}
      <section class="m-controls-card">
        <div class="m-hud-row">
          <span class="m-modul-status-pill">Bab ${bab} · ${pool.length || "…"} soal bank</span>
          <span class="m-modul-status-pill">${saved ? `Rekor: ${saved.bestPct}%` : "Belum dicoba"} · Baru: ${unseenCount}/${pool.length}</span>
        </div>
        <div style="font-size:14.5px; font-weight:800; line-height:1.35;">${esc(title)}</div>
        <div class="m-modul-pc-callout">
          <p><strong>📖 Materi Pembahasan &amp; Rumus Cepat Bab ${bab}:</strong> Pembahasan tata bahasa, tabel konjugasi, &amp; Tes Akhir Gabungan 1–25 dibuka khusus di <strong>Versi PC</strong> agar fokus belajar tanpa distraksi layar kecil.</p>
          <button type="button" class="m-btn-soft" id="btnModulGoPc" style="width:100%;">💻 Buka Materi Pembahasan Bab ${bab} di Versi PC</button>
        </div>
        ${bab === 17 ? `
          <div class="m-chip-row" aria-label="Filter Tema Bab 17">
            ${BAB17_SECTIONS.map((sec) => `
              <button type="button" class="m-chip ${state.mquizSection === sec ? "is-active" : ""}" data-mqsec="${esc(sec)}">${sec === "all" ? "Semua Tema (A–D)" : esc(sec)}</button>
            `).join("")}
          </div>
        ` : ""}
        <div class="m-seg" role="tablist" aria-label="Mode Kuis Modul">
          <button type="button" class="m-seg-btn ${!isRapid ? "is-active" : ""}" data-mqmode="flash">⚡ Flash (10–15)</button>
          <button type="button" class="m-seg-btn ${isRapid ? "is-active" : ""}" data-mqmode="rapid">🚀 Rapid Menengah (20–25)</button>
        </div>
        <div class="m-chip-row">
          <span class="m-setting-label" style="margin-right:4px;">Jumlah Soal:</span>
          ${countChoices.map((cnt) => `
            <button type="button" class="m-chip ${activeCount === cnt ? "is-active" : ""}" data-mqcount="${cnt}">${cnt} Soal</button>
          `).join("")}
        </div>
      </section>
    `;

    let stageHtml = "";
    if (state.bankLoading) {
      stageHtml = `<div class="m-result-card"><p style="margin:0; font-weight:700;">⏳ Memuat bank soal Bab ${bab}...</p></div>`;
    } else if (state.bankError) {
      stageHtml = `
        <div class="m-result-card">
          <p style="margin:0; color:var(--zone-red-fg); font-weight:700;">${esc(state.bankError)}</p>
          <button type="button" class="m-btn-primary" id="btnModulRetryFetch" style="width:100%;">🔄 Coba Muat Lagi</button>
        </div>
      `;
    } else {
      const deck = state.mquizDeck;
      const total = deck.length;
      const cur = deck[state.mquizIdx];
      if (!cur) {
        const actions = [
          state.mquizWrongList.length > 0 ? `<button type="button" class="m-btn-primary" id="btnModulRetryWrong" style="flex:1;">🔁 Ulangi ${state.mquizWrongList.length} Salah</button>` : "",
          `<button type="button" class="m-btn-soft" id="btnModulReplayNew" style="flex:1;">🎯 Lanjut ${activeCount} Soal Baru</button>`,
          seenIds.length > 0 ? `<button type="button" class="m-btn-soft" id="btnModulResetSeen" style="width:100%;">🔄 Reset Riwayat Soal Bab ${bab}</button>` : ""
        ].filter(Boolean).join("");
        stageHtml = renderQuizResultCardHtml({
          eyebrow: `HASIL KUIS MODUL BAB ${bab}`,
          score: state.mquizCorrectCount,
          total,
          subtitle: `${total > 0 ? Math.round((state.mquizCorrectCount / total) * 100) : 0}% · Benar ${state.mquizCorrectCount}, Salah ${state.mquizWrongList.length}`,
          actionsHtml: actions
        });
      } else {
        const answered = state.mquizPicked !== null;
        const isOk = answered && state.mquizPicked === cur.answer;
        const pct = Math.round(((state.mquizIdx + (answered ? 1 : 0)) / Math.max(1, total)) * 100);
        const speakTxt = extractSpeakablePrompt(cur.prompt);
        stageHtml = `
          <div class="m-hud-row">
            <span>Soal ${state.mquizIdx + 1} / ${total}</span>
            <span>Benar: ${state.mquizCorrectCount}</span>
          </div>
          <div class="m-progress-track"><div class="m-progress-fill" style="width:${pct}%"></div></div>
          <article class="m-quiz-card">
            <div class="m-hud-row">
              <span>${esc(cur.badge || `Bab ${bab}`)}</span>
              ${speakTxt ? `<button type="button" class="m-tts-btn" data-mspeak="${esc(speakTxt)}" aria-label="Audio soal">🔊</button>` : ""}
            </div>
            <div class="m-quiz-prompt" style="font-size:clamp(18px, 5vw, 22px);">${formatPromptHtml(cur.prompt)}</div>
            ${cur.promptRomaji ? `<div class="m-book-romaji m-romaji">${formatRomajiHtml(cur.promptRomaji)}</div>` : ""}
            ${cur.sub ? `<p class="m-quiz-sub">${esc(cur.sub)}</p>` : ""}
            ${renderMcqOptionsHtml(cur.options || [], answered, state.mquizPicked, cur.answer, "data-mqopt", (opt) => ({
              mainHtml: formatJpHtml(opt.jp),
              subHtml: opt.romaji ? esc(opt.romaji) : ""
            }))}
            ${answered ? `
              <div class="m-feedback ${isOk ? "is-ok" : "is-bad"}">${isOk ? "✓ Jawaban Tepat!" : `✕ Jawaban Benar: ${formatJpHtml((cur.options[cur.answer] || {}).jp || "")}`}</div>
              ${cur.explain ? `<div class="m-explain-box">${formatJpHtml(cur.explain)}</div>` : ""}
              <button type="button" class="m-btn-primary" id="btnModulNext" style="width:100%;">${state.mquizIdx + 1 < total ? "Lanjut →" : "Lihat Hasil →"}</button>
            ` : ""}
          </article>
        `;
      }
    }

    app.innerHTML = `${topHtml}${stageHtml}`;

    const btnPc = document.getElementById("btnModulGoPc");
    if (btnPc) btnPc.addEventListener("click", goPcDesktop);
    app.querySelectorAll("[data-mqbab]").forEach((b) => b.addEventListener("click", () => loadModulBank(Number(b.dataset.mqbab), state.mquizModeTag)));
    app.querySelectorAll("[data-mqsec]").forEach((b) => b.addEventListener("click", () => {
      state.mquizSection = b.dataset.mqsec;
      startModulQuizSession(bab, state.mquizModeTag);
      renderModulQuizTab(app);
    }));
    app.querySelectorAll("[data-mqmode]").forEach((b) => b.addEventListener("click", () => {
      const nextMode = b.dataset.mqmode === "rapid" ? "rapid" : "flash";
      if (!Array.isArray(state.bankCache[bab])) loadModulBank(bab, nextMode);
      else {
        startModulQuizSession(bab, nextMode);
        renderModulQuizTab(app);
      }
    }));
    app.querySelectorAll("[data-mqcount]").forEach((b) => b.addEventListener("click", () => {
      const val = Number(b.dataset.mqcount);
      if (state.mquizModeTag === "rapid") state.mquizRapidCount = val === 25 ? 25 : 20;
      else state.mquizFlashCount = val === 15 ? 15 : 10;
      startModulQuizSession(bab, state.mquizModeTag === "rapid" ? "rapid" : "flash");
      renderModulQuizTab(app);
    }));
    const btnRetryFetch = document.getElementById("btnModulRetryFetch");
    if (btnRetryFetch) btnRetryFetch.addEventListener("click", () => loadModulBank(bab, state.mquizModeTag));

    app.querySelectorAll("[data-mqopt]").forEach((b) => b.addEventListener("click", () => {
      if (state.mquizPicked !== null) return;
      const item = state.mquizDeck[state.mquizIdx];
      const pick = Number(b.dataset.mqopt);
      const ok = pick === item.answer;
      state.mquizPicked = pick;
      if (ok) state.mquizCorrectCount += 1;
      else state.mquizWrongList.push(item);
      const isLast = state.mquizIdx + 1 >= state.mquizDeck.length;
      markModulBankSeenAndSave(bab, item.id, isLast, state.mquizCorrectCount, state.mquizDeck.length);
      renderModulQuizTab(app);
    }));
    const btnNext = document.getElementById("btnModulNext");
    if (btnNext) btnNext.addEventListener("click", () => {
      state.mquizIdx += 1;
      state.mquizPicked = null;
      renderModulQuizTab(app);
    });
    const btnRetryW = document.getElementById("btnModulRetryWrong");
    if (btnRetryW) btnRetryW.addEventListener("click", () => {
      startModulQuizSession(bab, "retry", [...state.mquizWrongList]);
      renderModulQuizTab(app);
    });
    const btnRepNew = document.getElementById("btnModulReplayNew");
    if (btnRepNew) btnRepNew.addEventListener("click", () => {
      startModulQuizSession(bab, state.mquizModeTag === "rapid" ? "rapid" : "flash");
      renderModulQuizTab(app);
    });
    const btnResetSeen = document.getElementById("btnModulResetSeen");
    if (btnResetSeen) btnResetSeen.addEventListener("click", () => {
      if (prof.seenBankIds) delete prof.seenBankIds[bab];
      persistProfile();
      startModulQuizSession(bab, state.mquizModeTag === "rapid" ? "rapid" : "flash");
      renderModulQuizTab(app);
    });
  }

  // ===== TAB 4: KAIWA (FULL PC PARITY CONTROLS) =====
  function playKaiwaSequence(idx) {
    const dialog = KAIWA_DATA[state.kaiwaBab];
    if (!dialog) return;
    if (idx === -2) {
      state.kaiwaPlaying = true;
      state.kaiwaLineIdx = -2;
      renderKaiwaTab(document.getElementById("mApp"));
      if (dialog.intro && state.kaiwaWithIntro) {
        speakText(dialog.intro.jp, {
          gender: dialog.intro.gender || "female",
          tempo: 0.88,
          onend: () => {
            if (!state.kaiwaPlaying) return;
            repeatPauseTimer = setTimeout(() => { if (state.kaiwaPlaying) playKaiwaSequence(0); }, 350);
          }
        });
      } else {
        playKaiwaSequence(0);
      }
      return;
    }

    if (idx >= dialog.lines.length) {
      state.kaiwaPlaying = false;
      state.kaiwaLineIdx = -1;
      renderKaiwaTab(document.getElementById("mApp"));
      return;
    }

    state.kaiwaPlaying = true;
    state.kaiwaLineIdx = idx;
    renderKaiwaTab(document.getElementById("mApp"));
    const el = document.querySelector(`[data-kline="${idx}"]`);
    if (el && typeof el.scrollIntoView === "function") el.scrollIntoView({ behavior: "smooth", block: "center" });

    const line = dialog.lines[idx];
    const role = (dialog.roles || []).find((r) => r.id === line.speakerId) || {};
    const tempo = role.rateBias !== undefined ? role.rateBias : role.tempo === "tenang" ? 0.9 : role.tempo === "lincah" ? 1.13 : 1.0;
    const slot = (dialog.roles || []).filter((r) => r.gender === role.gender).findIndex((r) => r.id === role.id);

    const advanceNext = () => {
      if (!state.kaiwaPlaying) return;
      repeatPauseTimer = setTimeout(() => { if (state.kaiwaPlaying) playKaiwaSequence(idx + 1); }, state.kaiwaRepeatMode ? 1800 : 280);
    };

    if (state.kaiwaMuteGender !== "none" && line.gender === state.kaiwaMuteGender) {
      repeatPauseTimer = setTimeout(advanceNext, 1600);
      return;
    }

    speakText(line.tts || line.jp, {
      gender: line.gender || role.gender || "female",
      tempo,
      slot: Math.max(0, slot),
      onend: advanceNext
    });
  }

  function renderKaiwaTab(app) {
    const dialog = KAIWA_DATA[state.kaiwaBab] || KAIWA_DATA[1];
    const rolesById = Object.fromEntries((dialog.roles || []).map((r) => [r.id, r]));
    detectJaVoices();

    const voiceOptionsHtml = (selectedUri) => [
      `<option value="">Otomatis (Router 3-Lapis)</option>`,
      ...jaVoices.map((v) => `<option value="${esc(v.voiceURI)}" ${selectedUri === v.voiceURI ? "selected" : ""}>${esc(v.name)}</option>`)
    ].join("");

    app.innerHTML = `
      ${renderBabRailHtml(String(state.kaiwaBab), "kwbab", "none")}
      <section class="m-kaiwa-meta">
        <div class="m-hud-row"><span>DIALOG BAB ${dialog.bab}</span><span>${dialog.lines.length} baris</span></div>
        <h2 class="m-kaiwa-title">${formatJpHtml(dialog.title)}</h2>
        <p style="margin:0; font-size:12.5px; color:var(--color-ink-muted);">${esc(dialog.scene)}</p>
      </section>

      <section class="m-kaiwa-controls" aria-label="Kontrol Audio Kaiwa">
        <div class="m-chip-row">
          <button type="button" class="m-btn-primary" id="btnKaiwaPlayToggle" style="flex:1; min-height:42px;">
            ${state.kaiwaPlaying ? "⏹️ Hentikan Dialog" : "▶️ Putar Seluruh Dialog"}
          </button>
          <button type="button" class="m-chip ${state.kaiwaWithIntro ? "is-active" : ""}" id="btnKaiwaIntro">🎙️ Intro CD: ${state.kaiwaWithIntro ? "ON" : "OFF"}</button>
          <button type="button" class="m-chip ${state.kaiwaRepeatMode ? "is-active" : ""}" id="btnKaiwaTirukan">🔁 Mode Tirukan: ${state.kaiwaRepeatMode ? "ON" : "OFF"}</button>
          <button type="button" class="m-chip ${state.kaiwaHideId ? "is-active" : ""}" id="btnKaiwaHideArti">${state.kaiwaHideId ? "👁️ Tampilkan Arti" : "🙈 Sembunyikan Arti"}</button>
          <button type="button" class="m-chip ${state.voiceSwapGender ? "is-active" : ""}" id="btnKaiwaSwapVoice">⇄ Tukar Suara Pria ↔ Wanita</button>
          <button type="button" class="m-chip ${state.kaiwaVoicePanelOpen ? "is-active" : ""}" id="btnKaiwaVoicePanel">⚙️ Atur Suara</button>
        </div>
        <div class="m-chip-row">
          <button type="button" class="m-chip ${state.kaiwaMuteGender === "none" ? "is-active" : ""}" data-kmute="none">🔊 Semua Suara</button>
          <button type="button" class="m-chip ${state.kaiwaMuteGender === "male" ? "is-active" : ""}" data-kmute="male">🎭 Bisukan Pria</button>
          <button type="button" class="m-chip ${state.kaiwaMuteGender === "female" ? "is-active" : ""}" data-kmute="female">🎭 Bisukan Wanita</button>
        </div>
        ${state.kaiwaVoicePanelOpen ? `
          <div class="m-voice-panel">
            <div class="m-setting-group">
              <span class="m-setting-label">Kecepatan Audio Jepang</span>
              <div class="m-chip-row">
                <button type="button" class="m-chip ${state.speechRate === 1.0 ? "is-active" : ""}" data-krate="1">🔊 1.0× Normal</button>
                <button type="button" class="m-chip ${state.speechRate === 0.75 ? "is-active" : ""}" data-krate="0.75">🐢 0.75× Pelan</button>
              </div>
            </div>
            <div class="m-setting-group">
              <span class="m-setting-label">Suara Pria</span>
              <select class="m-select" id="mSelVoiceMale">${voiceOptionsHtml(state.voiceMaleURI)}</select>
            </div>
            <div class="m-setting-group">
              <span class="m-setting-label">Suara Wanita</span>
              <select class="m-select" id="mSelVoiceFemale">${voiceOptionsHtml(state.voiceFemaleURI)}</select>
            </div>
          </div>
        ` : ""}
      </section>

      <div class="m-kaiwa-list">
        ${dialog.intro ? `
          <article class="m-kaiwa-bubble ${!state.kaiwaWithIntro ? "is-muted-intro" : ""} ${state.kaiwaLineIdx === -2 ? "is-active-line" : ""}">
            <div class="m-kaiwa-head">
              <span>💿 ${esc(dialog.intro.speaker)}</span>
              <button type="button" class="m-tts-btn" data-mspeak="${esc(dialog.intro.jp)}" data-mgender="female" data-mtempo="0.88" aria-label="Audio intro">🔊</button>
            </div>
            <div class="m-kaiwa-jp">${formatJpHtml(dialog.intro.jp)}</div>
            <div class="m-book-romaji m-romaji">${esc(dialog.intro.romaji)}</div>
            ${!state.kaiwaHideId ? `<div class="m-kaiwa-id">${esc(dialog.intro.id)}</div>` : ""}
          </article>
        ` : ""}
        ${dialog.lines.map((line, i) => {
          const role = rolesById[line.speakerId] || {};
          const tempo = role.rateBias !== undefined ? role.rateBias : role.tempo === "tenang" ? 0.9 : role.tempo === "lincah" ? 1.13 : 1.0;
          const muted = state.kaiwaMuteGender !== "none" && line.gender === state.kaiwaMuteGender;
          return `
            <article class="m-kaiwa-bubble ${line.gender === "female" ? "is-female" : ""} ${state.kaiwaLineIdx === i ? "is-active-line" : ""} ${muted ? "is-role-muted" : ""}" data-kline="${i}">
              <div class="m-kaiwa-head">
                <span>${role.avatar || "💬"} ${formatJpHtml(line.speaker)}${muted ? " (Bisukan)" : ""}</span>
                <button type="button" class="m-tts-btn" data-mspeak="${esc(line.tts || line.jp)}" data-mgender="${esc(line.gender)}" data-mtempo="${tempo}" aria-label="Audio baris">🔊</button>
              </div>
              <div class="m-kaiwa-jp">${formatJpHtml(line.jp)}</div>
              <div class="m-book-romaji m-romaji">${esc(line.romaji)}</div>
              ${!state.kaiwaHideId ? `<div class="m-kaiwa-id">${esc(line.id)}</div>` : ""}
              ${line.note ? `<div class="m-kaiwa-note">${formatJpHtml(line.note)}</div>` : ""}
            </article>
          `;
        }).join("")}
      </div>
    `;

    app.querySelectorAll("[data-kwbab]").forEach((b) => b.addEventListener("click", () => {
      stopKaiwaPlayback();
      state.kaiwaBab = Number(b.dataset.kwbab) || 1;
      renderCurrentTab();
    }));
    document.getElementById("btnKaiwaPlayToggle").addEventListener("click", () => {
      if (state.kaiwaPlaying) { stopKaiwaPlayback(); renderKaiwaTab(app); }
      else playKaiwaSequence(-2);
    });
    document.getElementById("btnKaiwaIntro").addEventListener("click", () => { state.kaiwaWithIntro = !state.kaiwaWithIntro; renderKaiwaTab(app); });
    document.getElementById("btnKaiwaTirukan").addEventListener("click", () => { state.kaiwaRepeatMode = !state.kaiwaRepeatMode; renderKaiwaTab(app); });
    document.getElementById("btnKaiwaHideArti").addEventListener("click", () => { state.kaiwaHideId = !state.kaiwaHideId; renderKaiwaTab(app); });
    document.getElementById("btnKaiwaSwapVoice").addEventListener("click", () => { state.voiceSwapGender = !state.voiceSwapGender; persistPrefs(); renderKaiwaTab(app); });
    document.getElementById("btnKaiwaVoicePanel").addEventListener("click", () => { state.kaiwaVoicePanelOpen = !state.kaiwaVoicePanelOpen; renderKaiwaTab(app); });
    app.querySelectorAll("[data-kmute]").forEach((b) => b.addEventListener("click", () => { state.kaiwaMuteGender = b.dataset.kmute; renderKaiwaTab(app); }));
    app.querySelectorAll("[data-krate]").forEach((b) => b.addEventListener("click", () => { state.speechRate = Number(b.dataset.krate) === 0.75 ? 0.75 : 1.0; persistPrefs(); renderKaiwaTab(app); }));
    const mSelM = document.getElementById("mSelVoiceMale");
    if (mSelM) mSelM.addEventListener("change", () => { state.voiceMaleURI = mSelM.value; persistPrefs(); });
    const mSelF = document.getElementById("mSelVoiceFemale");
    if (mSelF) mSelF.addEventListener("change", () => { state.voiceFemaleURI = mSelF.value; persistPrefs(); });
  }

  // ===== TAB 5: REFERENSI (11 KATEGORI + INTERACTIVE WIDGETS + KUIS) =====
  function startRefQuiz(cat, isMix) {
    const pool = isMix ? shuffleCopy(REFERENCES.flatMap((r) => r.questions)).slice(0, 20) : [...(cat.questions || [])];
    state.refTab = "kuis";
    state.refQuizIsMix = Boolean(isMix);
    state.refQuizDeck = pool;
    state.refQuizIdx = 0;
    state.refQuizAnswered = false;
    state.refQuizPicked = null;
    state.refQuizInput = "";
    state.refQuizOk = false;
    state.refQuizCorrectCount = 0;
  }

  function renderRefsTab(app) {
    const cat = REFERENCES.find((r) => r.id === state.refId) || REFERENCES[0];
    if (!cat) { app.innerHTML = `<div class="m-result-card"><p>Data Referensi tidak tersedia.</p></div>`; return; }
    const prof = activeProfile();

    const gridHtml = `
      <div class="m-ref-grid">
        ${REFERENCES.map((r) => {
          const sc = prof.refs[r.id];
          return `
            <button type="button" class="m-ref-cat-btn ${r.id === cat.id ? "is-active" : ""}" data-refid="${esc(r.id)}">
              <div style="font-size:20px;">${r.icon}</div>
              <div class="m-ref-cat-title">${esc(r.title)}</div>
              <div class="m-ref-cat-meta">${sc ? `Skor ${sc.bestPct}% · ` : ""}${r.questions.length} soal kuis</div>
            </button>
          `;
        }).join("")}
      </div>
      <div class="m-mode-rail">
        <button type="button" class="m-mode-btn ${state.refTab === "materi" ? "is-active" : ""}" id="tabMobRefMateri">1. Materi &amp; Kartu</button>
        <button type="button" class="m-mode-btn ${state.refTab === "kuis" && !state.refQuizIsMix ? "is-active" : ""}" id="tabMobRefKuis">2. Kuis (${cat.questions.length} Soal)</button>
        <button type="button" class="m-mode-btn ${state.refTab === "kuis" && state.refQuizIsMix ? "is-active" : ""}" id="btnMobRefMix">🎲 Acak (20 Soal)</button>
      </div>
    `;

    let bodyHtml = "";
    if (state.refTab === "materi") {
      let widgetHtml = "";
      if (cat.interactiveWidget === "number_converter") {
        const res = numberToJapanese(state.refConverterVal);
        widgetHtml = `
          <section class="m-widget-box">
            <strong style="font-size:13.5px;">🔢 Konverter Angka (0–99.999)</strong>
            <input type="number" min="0" max="99999" class="m-text-input" id="mRefNumInput" value="${state.refConverterVal}">
            <div class="m-chip-row">
              ${[300, 600, 800, 3000, 3800, 8600, 10000].map((v) => `<button type="button" class="m-chip" data-rpreset="${v}">${v}</button>`).join("")}
            </div>
            <div class="m-hud-row" id="mRefNumResult">
              <div>
                <div style="font-family:var(--font-jp); font-size:18px; font-weight:800;">${esc(res.jp)}</div>
                <div class="m-book-romaji m-romaji">${esc(res.romaji)} · ${esc(res.note)}</div>
              </div>
              <button type="button" class="m-tts-btn" data-mspeak="${esc(res.jp)}">🔊</button>
            </div>
          </section>
        `;
      } else if (cat.interactiveWidget === "date_picker") {
        const [dJp, dRom, isSpec] = DATE_READINGS[state.refSelectedDate];
        widgetHtml = `
          <section class="m-widget-box">
            <strong style="font-size:13.5px;">📅 Kalender Tanggal 1–31 (Oranye = Pengecualian)</strong>
            <div class="m-date-grid">
              ${Array.from({ length: 31 }, (_, i) => i + 1).map((d) => `
                <button type="button" class="m-date-btn ${DATE_READINGS[d][2] ? "is-special" : ""} ${d === state.refSelectedDate ? "is-selected" : ""}" data-rdate="${d}">${d}日</button>
              `).join("")}
            </div>
            <div class="m-hud-row">
              <div>
                <div style="font-family:var(--font-jp); font-size:17px; font-weight:800;">${state.refSelectedDate}日 = ${esc(dJp)}</div>
                <div class="m-book-romaji m-romaji">${esc(dRom)} ${isSpec ? "(Pengecualian!)" : "(Normal)"}</div>
              </div>
              <button type="button" class="m-tts-btn" data-mspeak="${esc(dJp)}">🔊</button>
            </div>
          </section>
        `;
      }

      bodyHtml = `
        <div class="m-desktop-note">💡 <strong>Tips:</strong> ${esc(cat.tip)}</div>
        ${widgetHtml}
        <button type="button" class="m-btn-soft ${state.refFlashcardMode ? "is-active" : ""}" id="btnMobRefFlash">
          ${state.refFlashcardMode ? "🙈 Mode Flashcard: ON (Ketuk kartu untuk intip)" : "🃏 Sembunyikan Arti (Latihan Hafalan)"}
        </button>
        ${(cat.groups || []).map((grp) => `
          <div class="m-setting-group">
            <span class="m-setting-label">${esc(grp.name)}</span>
            <div class="m-book-list">
              ${(grp.items || []).map((it) => `
                <div class="m-ref-card ${state.refFlashcardMode ? "is-flash-hidden" : ""}" data-rflip="1">
                  ${grp.isColor && it.hex ? `<span class="m-color-swatch" style="background:${it.hex};" aria-hidden="true"></span>` : ""}
                  <div class="m-book-main">
                    <div class="m-book-jp">${esc(it.jp)} ${it.kanji && it.kanji !== "—" ? `<span class="m-book-kanji">(${esc(it.kanji)})</span>` : ""}</div>
                    <div class="m-book-romaji m-romaji">${esc(it.romaji)}</div>
                    <div class="m-book-arti m-ref-arti">${esc(it.arti)}</div>
                  </div>
                  <button type="button" class="m-tts-btn" data-mspeak="${esc(it.jp)}" aria-label="Audio">🔊</button>
                </div>
              `).join("")}
            </div>
          </div>
        `).join("")}
      `;
    } else {
      const deck = state.refQuizDeck;
      const total = deck.length;
      const cur = deck[state.refQuizIdx];
      if (!cur) {
        const pct = total > 0 ? Math.round((state.refQuizCorrectCount / total) * 100) : 0;
        if (!state.refQuizIsMix && total > 0) {
          const prev = prof.refs[cat.id];
          prof.refs[cat.id] = {
            correct: !prev || pct >= prev.bestPct ? state.refQuizCorrectCount : prev.correct,
            total,
            bestPct: prev ? Math.max(prev.bestPct, pct) : pct
          };
          persistProfile();
        }
        bodyHtml = renderQuizResultCardHtml({
          eyebrow: state.refQuizIsMix ? "HASIL KUIS ACAK REFERENSI" : `HASIL KUIS ${esc(cat.title.toUpperCase())}`,
          score: state.refQuizCorrectCount,
          total,
          actionsHtml: `<button type="button" class="m-btn-primary" id="btnMobRefReplay" style="width:100%;">🎲 Ulangi Kuis</button>`
        });
      } else {
        const answered = state.refQuizAnswered;
        const pctBar = Math.round(((state.refQuizIdx + (answered ? 1 : 0)) / total) * 100);
        bodyHtml = `
          <div class="m-hud-row"><span>Soal ${state.refQuizIdx + 1} / ${total}</span><span>Benar: ${state.refQuizCorrectCount}</span></div>
          <div class="m-progress-track"><div class="m-progress-fill" style="width:${pctBar}%"></div></div>
          <article class="m-quiz-card">
            <div class="m-hud-row">
              <span>${esc(cur.badge || cat.title)}</span>
              ${hasJapaneseText(cur.prompt) ? `<button type="button" class="m-tts-btn" data-mspeak="${esc(cur.prompt)}">🔊</button>` : ""}
            </div>
            <div class="m-quiz-prompt" style="font-size:19px;">${formatJpHtml(cur.prompt)}</div>
            ${cur.promptRomaji ? `<div class="m-book-romaji m-romaji">${esc(cur.promptRomaji)}</div>` : ""}
            <p style="margin:0; font-size:13px; color:var(--color-ink-muted);">${esc(cur.sub || "")}</p>
            ${cur.type === "mcq"
              ? renderMcqOptionsHtml(cur.options, answered, state.refQuizPicked, cur.answer, "data-ropt", (opt) => ({
                  mainHtml: formatJpHtml(opt.jp),
                  subHtml: opt.romaji ? esc(opt.romaji) : ""
                }))
              : `
                <form class="m-recall-form" id="mRefInputForm">
                  <input type="text" class="m-text-input ${answered ? (state.refQuizOk ? "is-correct" : "is-wrong") : ""}" id="mRefTextInput" value="${esc(state.refQuizInput)}" placeholder="${esc(cur.placeholder || "Ketik jawaban...")}" autocomplete="off" ${answered ? "disabled" : ""}>
                  ${!answered ? `<button type="submit" class="m-btn-primary" style="width:100%;">Cek Jawaban</button>` : ""}
                </form>
              `}
            ${answered ? `
              <div class="m-feedback ${state.refQuizOk ? "is-ok" : "is-bad"}">${esc(cur.explain || (state.refQuizOk ? "✓ Tepat!" : `✕ Jawaban: ${cur.displayAnswer || ""}`))}</div>
              <button type="button" class="m-btn-primary" id="btnMobRefNext" style="width:100%;">${state.refQuizIdx + 1 < total ? "Lanjut →" : "Lihat Hasil →"}</button>
            ` : ""}
          </article>
        `;
      }
    }

    app.innerHTML = `${gridHtml}${bodyHtml}`;

    app.querySelectorAll("[data-refid]").forEach((b) => b.addEventListener("click", () => {
      state.refId = b.dataset.refid;
      state.refTab = "materi";
      renderRefsTab(app);
    }));
    document.getElementById("tabMobRefMateri").addEventListener("click", () => { state.refTab = "materi"; renderRefsTab(app); });
    document.getElementById("tabMobRefKuis").addEventListener("click", () => { startRefQuiz(cat, false); renderRefsTab(app); });
    document.getElementById("btnMobRefMix").addEventListener("click", () => { startRefQuiz(cat, true); renderRefsTab(app); });

    const btnFlash = document.getElementById("btnMobRefFlash");
    if (btnFlash) btnFlash.addEventListener("click", () => { state.refFlashcardMode = !state.refFlashcardMode; renderRefsTab(app); });
    app.querySelectorAll("[data-rflip]").forEach((c) => c.addEventListener("click", (e) => {
      if (e.target.closest && e.target.closest("button")) return;
      if (state.refFlashcardMode) c.classList.toggle("is-flash-hidden");
    }));

    const numIn = document.getElementById("mRefNumInput");
    if (numIn) numIn.addEventListener("input", () => { state.refConverterVal = Number(numIn.value) || 0; renderRefsTab(app); });
    app.querySelectorAll("[data-rpreset]").forEach((b) => b.addEventListener("click", () => { state.refConverterVal = Number(b.dataset.rpreset) || 0; renderRefsTab(app); }));
    app.querySelectorAll("[data-rdate]").forEach((b) => b.addEventListener("click", () => {
      state.refSelectedDate = Number(b.dataset.rdate) || 1;
      speakText(DATE_READINGS[state.refSelectedDate][0]);
      renderRefsTab(app);
    }));

    app.querySelectorAll("[data-ropt]").forEach((b) => b.addEventListener("click", () => {
      if (state.refQuizAnswered) return;
      const cur = state.refQuizDeck[state.refQuizIdx];
      const pick = Number(b.dataset.ropt);
      const ok = pick === cur.answer;
      state.refQuizPicked = pick;
      state.refQuizOk = ok;
      state.refQuizAnswered = true;
      if (ok) state.refQuizCorrectCount += 1;
      renderRefsTab(app);
    }));
    const refForm = document.getElementById("mRefInputForm");
    if (refForm) refForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (state.refQuizAnswered) return;
      const val = (document.getElementById("mRefTextInput") || {}).value || "";
      const cleaned = norm(val);
      if (!cleaned) return;
      const cur = state.refQuizDeck[state.refQuizIdx];
      const ok = Array.isArray(cur.accepted) && cur.accepted.some((a) => norm(a) === cleaned);
      state.refQuizInput = val;
      state.refQuizOk = ok;
      state.refQuizAnswered = true;
      if (ok) state.refQuizCorrectCount += 1;
      renderRefsTab(app);
    });
    const btnRefNext = document.getElementById("btnMobRefNext");
    if (btnRefNext) btnRefNext.addEventListener("click", () => {
      state.refQuizIdx += 1;
      state.refQuizAnswered = false;
      state.refQuizPicked = null;
      state.refQuizInput = "";
      state.refQuizOk = false;
      renderRefsTab(app);
    });
    const btnRefRep = document.getElementById("btnMobRefReplay");
    if (btnRefRep) btnRefRep.addEventListener("click", () => { startRefQuiz(cat, state.refQuizIsMix); renderRefsTab(app); });
  }

  // ===== TAB 6: KANA PRACTICE =====
  function getKanaPool(setKey) {
    const extract = (rows, script) => (rows || []).flatMap((r) => (r.cells || []).filter(Boolean).map((c) => ({ ...c, script })));
    const hira = extract(KANA_DATA.hiraganaRows, "Hiragana");
    const kata = extract(KANA_DATA.katakanaRows, "Katakana");
    if (setKey === "katakana") return kata;
    if (setKey === "mix") return shuffleCopy([...hira, ...kata]);
    return hira;
  }

  function rebuildKanaDeck() {
    const raw = getKanaPool(state.kanaSet);
    state.kanaDeck = shuffleCopy(raw);
    state.kanaIdx = 0;
    state.kanaFlipped = false;
    state.kanaHistory = [];
    if (!state.kanaSpotChar && raw.length > 0) state.kanaSpotChar = raw[0];
  }

  function startKanaGuessQuiz() {
    const raw = shuffleCopy(getKanaPool(state.kanaSet));
    state.kanaQuizDeck = raw.slice(0, Math.min(15, raw.length));
    state.kanaQuizIdx = 0;
    state.kanaQuizCorrect = 0;
    state.kanaQuizPickedIdx = null;
    prepareKanaGuessOptions();
  }

  function prepareKanaGuessOptions() {
    const item = state.kanaQuizDeck[state.kanaQuizIdx];
    if (!item) return;
    const pool = getKanaPool(state.kanaSet);
    const confSet = new Set();
    KANA_CONFUSABLE_GROUPS.forEach((grp) => { if (grp.includes(item.k)) grp.forEach((ch) => confSet.add(ch)); });
    const priority = shuffleCopy(pool.filter((x) => x.k !== item.k && x.r !== item.r && confSet.has(x.k)));
    const others = shuffleCopy(pool.filter((x) => x.k !== item.k && x.r !== item.r && !confSet.has(x.k)));
    const picks = [];
    const seenR = new Set([item.r]);
    for (const c of priority.concat(others)) {
      if (picks.length >= 3) break;
      if (!seenR.has(c.r)) { seenR.add(c.r); picks.push(c); }
    }
    const four = shuffleCopy([item, ...picks]);
    state.kanaQuizOptions = four;
    state.kanaQuizCorrectIdx = four.findIndex((x) => x.k === item.k);
    state.kanaQuizPickedIdx = null;
  }

  function renderKanaTab(app) {
    const topBar = `
      <div class="m-pill-rail" role="tablist">
        <button type="button" class="m-rail-pill ${state.kanaSet === "hiragana" ? "is-active" : ""}" data-knset="hiragana">あ Hiragana (46)</button>
        <button type="button" class="m-rail-pill ${state.kanaSet === "katakana" ? "is-active" : ""}" data-knset="katakana">ア Katakana (46)</button>
        <button type="button" class="m-rail-pill ${state.kanaSet === "mix" ? "is-active" : ""}" data-knset="mix">✨ Campur (92)</button>
      </div>
      <div class="m-seg" role="tablist">
        <button type="button" class="m-seg-btn ${state.kanaMode === "swipe" ? "is-active" : ""}" data-knmode="swipe">👆 Swipe</button>
        <button type="button" class="m-seg-btn ${state.kanaMode === "guess" ? "is-active" : ""}" data-knmode="guess">🎯 Tebak</button>
        <button type="button" class="m-seg-btn ${state.kanaMode === "chart" ? "is-active" : ""}" data-knmode="chart">🔤 Papan</button>
      </div>
    `;

    if (state.kanaMode === "swipe") {
      const deck = state.kanaDeck;
      const total = deck.length;
      const cur = deck[state.kanaIdx];
      if (!cur) {
        app.innerHTML = `${topBar}<div class="m-result-card"><div class="m-result-score" style="font-size:24px;">Semua ${total} Huruf Selesai!</div><button type="button" class="m-btn-primary" id="btnKanaSwipeReset" style="width:100%;">🔄 Acak Ulang</button></div>`;
        document.getElementById("btnKanaSwipeReset").addEventListener("click", () => { rebuildKanaDeck(); renderKanaTab(app); });
      } else {
        const flip = state.kanaFlipped;
        app.innerHTML = `
          ${topBar}
          <div class="m-hud-row"><span>Huruf ${state.kanaIdx + 1} / ${total} (${cur.script})</span><span>Hafal: ${state.kanaMastered.size}</span></div>
          <div class="m-progress-track"><div class="m-progress-fill" style="width:${Math.round((state.kanaIdx / Math.max(1, total)) * 100)}%"></div></div>
          <div class="m-swipe-deck-wrap">
            <div class="m-swipe-stage">
              <article class="m-swipe-card ${flip ? "is-flipped" : ""}" id="mKanaCard">
                <span class="m-stamp m-stamp-ok" aria-hidden="true">✅ HAFAL</span>
                <span class="m-stamp m-stamp-again" aria-hidden="true">🔁 ULANG</span>
                <div class="m-swipe-top"><span>${cur.script}</span><button type="button" class="m-tts-btn" data-mspeak="${esc(cur.k)}">🔊</button></div>
                <div class="m-swipe-center">
                  <div class="m-kana-glyph-xl">${esc(cur.k)}</div>
                  ${flip ? `<div class="m-swipe-arti" style="font-size:26px;">"${esc(cur.r)}"</div><div class="m-swipe-kanji">${esc(cur.w)} (${esc(cur.wr)}) — ${esc(cur.wa)}</div>` : ""}
                </div>
                <div class="m-swipe-bottom-hint">${flip ? "← Ulang · Hafal →" : "Ketuk huruf untuk cek bacaan"}</div>
              </article>
            </div>
            <div class="m-swipe-actions">
              <button type="button" class="m-act-round" id="btnKanaUndo" ${state.kanaHistory.length === 0 ? "disabled" : ""}>↩</button>
              <button type="button" class="m-act-again" id="btnKanaAgain">🔁 Ulang</button>
              <button type="button" class="m-act-round" data-mspeak="${esc(cur.w)}">🔊</button>
              <button type="button" class="m-act-know" id="btnKanaKnow">✓ Hafal</button>
            </div>
          </div>
        `;
        const commitKana = (known) => {
          state.kanaHistory.push(state.kanaIdx);
          if (known) { state.kanaMastered.add(cur.k); state.kanaReview.delete(cur.k); }
          else { state.kanaMastered.delete(cur.k); state.kanaReview.add(cur.k); }
          state.kanaIdx += 1;
          state.kanaFlipped = false;
          renderKanaTab(app);
        };
        attachSwipeHandlers(document.getElementById("mKanaCard"), commitKana, () => {
          state.kanaFlipped = !state.kanaFlipped;
          if (state.kanaFlipped && state.kotobaAutoAudio) speakText(cur.k);
          renderKanaTab(app);
        });
        document.getElementById("btnKanaKnow").addEventListener("click", () => commitKana(true));
        document.getElementById("btnKanaAgain").addEventListener("click", () => commitKana(false));
        document.getElementById("btnKanaUndo").addEventListener("click", () => {
          const p = state.kanaHistory.pop();
          if (p !== undefined) { state.kanaIdx = p; state.kanaFlipped = false; renderKanaTab(app); }
        });
      }
    } else if (state.kanaMode === "guess") {
      const total = state.kanaQuizDeck.length;
      const cur = state.kanaQuizDeck[state.kanaQuizIdx];
      const dirRow = `<div class="m-pill-rail"><button type="button" class="m-rail-pill ${state.kanaDir === "jp2rom" ? "is-active" : ""}" data-kndir="jp2rom">あ → abc</button><button type="button" class="m-rail-pill ${state.kanaDir === "rom2jp" ? "is-active" : ""}" data-kndir="rom2jp">abc → あ</button></div>`;
      if (!cur) {
        app.innerHTML = `${topBar}${dirRow}${renderQuizResultCardHtml({
          eyebrow: "HASIL TEBAK HURUF",
          score: state.kanaQuizCorrect,
          total,
          actionsHtml: `<button type="button" class="m-btn-primary" id="btnKanaQuizReplay" style="width:100%;">🎲 Main 15 Huruf Lagi</button>`
        })}`;
        document.getElementById("btnKanaQuizReplay").addEventListener("click", () => { startKanaGuessQuiz(); renderKanaTab(app); });
      } else {
        const answered = state.kanaQuizPickedIdx !== null;
        const isOk = answered && state.kanaQuizPickedIdx === state.kanaQuizCorrectIdx;
        const askGlyph = state.kanaDir !== "rom2jp";
        app.innerHTML = `
          ${topBar}${dirRow}
          <div class="m-hud-row"><span>Soal ${state.kanaQuizIdx + 1} / ${total}</span><span>Benar: ${state.kanaQuizCorrect}</span></div>
          <article class="m-quiz-card">
            <div class="m-hud-row"><span>${askGlyph ? "Huruf apa ini?" : "Pilih huruf:"}</span><button type="button" class="m-tts-btn" data-mspeak="${esc(cur.k)}">🔊</button></div>
            <div style="text-align:center;">${askGlyph ? `<div class="m-kana-glyph-xl">${esc(cur.k)}</div>` : `<div class="m-kana-glyph-xl" style="font-size:48px;">"${esc(cur.r)}"</div>`}</div>
            ${renderMcqOptionsHtml(state.kanaQuizOptions, answered, state.kanaQuizPickedIdx, state.kanaQuizCorrectIdx, "data-knopt", (opt) => ({
              mainHtml: esc(askGlyph ? opt.r : opt.k),
              subHtml: ""
            }))}
            ${answered ? `<div class="m-feedback ${isOk ? "is-ok" : "is-bad"}">${esc(cur.k)} = "${esc(cur.r)}" (${esc(cur.w)})</div><button type="button" class="m-btn-primary" id="btnKanaGuessNext" style="width:100%;">Lanjut →</button>` : ""}
          </article>
        `;
        app.querySelectorAll("[data-knopt]").forEach((b) => b.addEventListener("click", () => {
          if (state.kanaQuizPickedIdx !== null) return;
          const idx = Number(b.dataset.knopt);
          state.kanaQuizPickedIdx = idx;
          if (idx === state.kanaQuizCorrectIdx) state.kanaQuizCorrect += 1;
          if (state.kotobaAutoAudio) speakText(cur.k);
          renderKanaTab(app);
        }));
        const nextBtn = document.getElementById("btnKanaGuessNext");
        if (nextBtn) nextBtn.addEventListener("click", () => {
          state.kanaQuizIdx += 1;
          if (state.kanaQuizIdx < state.kanaQuizDeck.length) prepareKanaGuessOptions();
          renderKanaTab(app);
        });
      }
    } else {
      const rows = state.kanaSet === "katakana" ? KANA_DATA.katakanaRows : state.kanaSet === "mix" ? [...KANA_DATA.hiraganaRows, ...KANA_DATA.katakanaRows] : KANA_DATA.hiraganaRows;
      const flat = rows.flatMap((r) => r.cells || []).filter(Boolean);
      const spot = state.kanaSpotChar && flat.some((c) => c.k === state.kanaSpotChar.k) ? state.kanaSpotChar : flat[0];
      state.kanaSpotChar = spot;
      app.innerHTML = `
        ${topBar}
        ${spot ? `<div class="m-kana-spotlight"><div style="display:flex; align-items:center; gap:12px;"><div class="m-kana-spot-char">${esc(spot.k)}</div><div><strong>"${esc(spot.r)}"</strong><div style="font-size:12.5px; color:var(--color-ink-muted);">${esc(spot.w)} (${esc(spot.wr)}) = ${esc(spot.wa)}</div></div></div><button type="button" class="m-tts-btn" data-mspeak="${esc(spot.w)}">🔊</button></div>` : ""}
        <div class="m-kana-grid-5">
          ${rows.flatMap((r) => r.cells || []).map((c) => c ? `<button type="button" class="m-kana-cell ${spot && spot.k === c.k ? "is-selected" : ""}" data-kncell="${esc(c.k)}"><span class="m-kana-cell-ch">${esc(c.k)}</span><span class="m-kana-cell-r">${esc(c.r)}</span></button>` : `<div></div>`).join("")}
        </div>
      `;
      app.querySelectorAll("[data-kncell]").forEach((b) => b.addEventListener("click", () => {
        const f = flat.find((x) => x.k === b.dataset.kncell);
        if (f) { state.kanaSpotChar = f; speakText(f.k); renderKanaTab(app); }
      }));
    }

    app.querySelectorAll("[data-knset]").forEach((b) => b.addEventListener("click", () => {
      state.kanaSet = b.dataset.knset;
      rebuildKanaDeck();
      if (state.kanaMode === "guess") startKanaGuessQuiz();
      renderKanaTab(app);
    }));
    app.querySelectorAll("[data-knmode]").forEach((b) => b.addEventListener("click", () => {
      state.kanaMode = b.dataset.knmode;
      if (state.kanaMode === "guess" && state.kanaQuizDeck.length === 0) startKanaGuessQuiz();
      renderKanaTab(app);
    }));
    app.querySelectorAll("[data-kndir]").forEach((b) => b.addEventListener("click", () => {
      state.kanaDir = b.dataset.kndir;
      startKanaGuessQuiz();
      renderKanaTab(app);
    }));
  }

  // ===== SWIPE GESTURE BINDER =====
  function attachSwipeHandlers(cardEl, onCommit, onTap) {
    if (!cardEl) return;
    let startX = 0, startY = 0, lastX = 0, lastTime = 0, vx = 0, dragging = false, lockedHorizontal = false, pid = null;
    const okStamp = cardEl.querySelector(".m-stamp-ok");
    const agStamp = cardEl.querySelector(".m-stamp-again");
    cardEl.addEventListener("pointerdown", (e) => {
      if (e.target && e.target.closest && e.target.closest("button")) return;
      pid = e.pointerId; startX = lastX = e.clientX; startY = e.clientY; lastTime = Date.now(); vx = 0; dragging = true; lockedHorizontal = false;
      if (typeof cardEl.setPointerCapture === "function") { try { cardEl.setPointerCapture(e.pointerId); } catch {} }
    });
    cardEl.addEventListener("pointermove", (e) => {
      if (!dragging || e.pointerId !== pid) return;
      const dx = e.clientX - startX, dy = e.clientY - startY;
      if (!lockedHorizontal) {
        if (Math.abs(dx) < 9 && Math.abs(dy) < 9) return;
        if (Math.abs(dy) > Math.abs(dx) * 1.15) { dragging = false; return; }
        lockedHorizontal = true; cardEl.classList.add("is-dragging");
      }
      const now = Date.now(), dt = Math.max(1, now - lastTime);
      vx = (e.clientX - lastX) / dt; lastX = e.clientX; lastTime = now;
      cardEl.style.transform = `translate3d(${dx}px, ${dy * 0.14}px, 0) rotate(${dx * 0.045}deg)`;
      const s = Math.min(1, Math.abs(dx) / 95);
      if (okStamp) okStamp.style.opacity = dx > 12 ? String(s) : "0";
      if (agStamp) agStamp.style.opacity = dx < -12 ? String(s) : "0";
    });
    const end = (e) => {
      if (!dragging || e.pointerId !== pid) return;
      dragging = false; cardEl.classList.remove("is-dragging");
      const dx = e.clientX - startX, dy = e.clientY - startY;
      if (!lockedHorizontal && Math.hypot(dx, dy) < 10) { onTap(); return; }
      if (dx > 82 || vx > 0.55) {
        cardEl.style.transform = "translate3d(130%, 24px, 0) rotate(14deg)"; cardEl.style.opacity = "0";
        setTimeout(() => onCommit(true), 170);
      } else if (dx < -82 || vx < -0.55) {
        cardEl.style.transform = "translate3d(-130%, 24px, 0) rotate(-14deg)"; cardEl.style.opacity = "0";
        setTimeout(() => onCommit(false), 170);
      } else {
        cardEl.style.transform = "";
        if (okStamp) okStamp.style.opacity = "0";
        if (agStamp) agStamp.style.opacity = "0";
      }
    };
    cardEl.addEventListener("pointerup", end);
    cardEl.addEventListener("pointercancel", end);
  }

  // ===== ROUTER & INIT =====
  function switchTab(nextTab) {
    if (state.tab !== nextTab) stopKaiwaPlayback();
    state.tab = nextTab;
    if (nextTab === "kotoba") {
      startKotobaSession(state.kotobaScope, state.kotobaMemMode, null, "kotoba");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (nextTab === "kquiz") {
      startKotobaSession(state.kotobaScope, state.kquizMode, null, "kquiz");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (nextTab === "mquiz") {
      loadModulBank(state.mquizBab, state.mquizModeTag);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (nextTab === "kana" && state.kanaDeck.length === 0) rebuildKanaDeck();
    renderCurrentTab();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderCurrentTab() {
    renderTopBarSync();
    const app = document.getElementById("mApp");
    if (!app) return;
    if (state.tab === "kotoba") renderKotobaTab(app);
    else if (state.tab === "kquiz") renderKotobaQuizTab(app);
    else if (state.tab === "mquiz") renderModulQuizTab(app);
    else if (state.tab === "kaiwa") renderKaiwaTab(app);
    else if (state.tab === "refs") renderRefsTab(app);
    else if (state.tab === "kana") renderKanaTab(app);
  }

  function init() {
    applyTheme(state.theme);
    detectJaVoices();
    if ("speechSynthesis" in window && typeof window.speechSynthesis.addEventListener === "function") {
      window.speechSynthesis.addEventListener("voiceschanged", detectJaVoices);
    }

    startKotobaSession("1", "swipe", null, "kotoba");
    rebuildKanaDeck();
    renderCurrentTab();

    document.querySelectorAll("#mTabbar [data-mtab]").forEach((btn) => btn.addEventListener("click", () => switchTab(btn.dataset.mtab)));

    const bTheme = document.getElementById("btnMobTheme");
    if (bTheme) bTheme.addEventListener("click", () => { applyTheme(state.theme === "dark" ? "light" : "dark"); renderTopBarSync(); });
    const bRom = document.getElementById("btnMobRomaji");
    if (bRom) bRom.addEventListener("click", () => { state.showRomaji = !state.showRomaji; persistPrefs(); renderCurrentTab(); });
    const bPc = document.getElementById("btnMobPcMode");
    if (bPc) bPc.addEventListener("click", goPcDesktop);
    const bBannerPc = document.getElementById("btnBannerGoPc");
    if (bBannerPc) bBannerPc.addEventListener("click", goPcDesktop);

    document.addEventListener("click", (e) => {
      const spBtn = e.target && e.target.closest ? e.target.closest("[data-mspeak]") : null;
      if (!spBtn) return;
      e.stopPropagation();
      speakText(spBtn.dataset.mspeak, {
        btn: spBtn,
        gender: spBtn.dataset.mgender || "",
        tempo: spBtn.dataset.mtempo ? Number(spBtn.dataset.mtempo) : 1.0
      });
    });

    if (typeof navigator !== "undefined" && "serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost" || location.hostname === "127.0.0.1")) {
      navigator.serviceWorker.register(`../sw.js?v=${BANK_VERSION}`).catch(() => {});
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
