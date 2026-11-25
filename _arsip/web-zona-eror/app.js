/* Studio Lengkap Minna no Nihongo I (Bab 1 – 25)
 * - Menggabungkan Bab 17 ASLI (bab-17.js) secara utuh tanpa membuat ulang (Lab Konjugasi + Cheat Sheet Bab 17 + 20 Soal 4-Tema!)
 * - Rumus Cepat (Cheat Sheet) BERBEDA-BEDA untuk setiap bab (Bab 1 s.d. 25), tampil langsung di halaman & di tombol Rumus Cepat
 * - Mode Gelap (Dark Mode) & Terang tersimpan otomatis
 * - Kuis Per Bab Murni 1 Tema (tanpa timer) + Tes Akhir Gabungan Bab 1–25 terpisah
 */
(function () {
  "use strict";

  const STORAGE_PROGRESS = "mnn_unified_progress_v2";
  const STORAGE_THEME = "mnn_theme_mode_v1";
  const LEGACY_BAB17_KEY = "mnn_bab17_progress_v1";
  const LEGACY_EROR_KEY = "mnn_klinik_eror_progress_v1";

  const ZONE_META = {
    red:    { rank: 1, label: "Zona Merah (0/4)",    cls: "zone-red",    callout: "" },
    orange: { rank: 2, label: "Zona Oranye (1/4)",   cls: "zone-orange", callout: "is-orange" },
    amber:  { rank: 3, label: "Zona Kuning (2/4)",   cls: "zone-amber",  callout: "is-amber" },
    green:  { rank: 4, label: "Zona Hijau (3–4/4)",  cls: "zone-green",  callout: "is-green" }
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
  const FINAL_EXAM = window.FINAL_EXAM_1_25 || [];

  const state = {
    theme: loadTheme(), // 'dark' | 'light'
    showRomaji: true,
    sortMode: "priority", // 'priority' | 'book'
    zoneFilter: "all",
    view: "overview", // 'overview' | 'chapter' | 'final_exam'
    selectedNum: null,
    activeTab: "materi", // 'materi' | 'kuis'
    labIndex: 0,
    progress: loadProgress(),
    // Quiz state (NO TIMER!)
    quizIndices: [],
    currentStep: 0,
    answered: false,
    selectedOption: null,
    inputValue: "",
    isCorrectCurrent: false,
    results: {},
    wrongIds: [],
    quizModeLabel: ""
  };

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

  function loadProgress() {
    const merged = {};
    try {
      const oldEror = JSON.parse(localStorage.getItem(LEGACY_EROR_KEY) || "{}");
      Object.assign(merged, oldEror);
      const old17 = JSON.parse(localStorage.getItem(LEGACY_BAB17_KEY) || "null");
      if (old17 && typeof old17.bestPct === "number") {
        merged[17] = old17;
      }
      const cur = JSON.parse(localStorage.getItem(STORAGE_PROGRESS) || "{}");
      Object.assign(merged, cur);
    } catch {
      // Ignore
    }
    return merged;
  }

  function saveScore(num, correct, total) {
    const pct = Math.round((correct / total) * 100);
    const prev = state.progress[num];
    if (!prev || pct >= prev.bestPct) {
      state.progress[num] = { correct, total, bestPct: pct };
      try {
        localStorage.setItem(STORAGE_PROGRESS, JSON.stringify(state.progress));
      } catch {
        // Ignore
      }
    }
    renderSidebar();
  }

  function isMastered(num) {
    return !!(state.progress[num] && state.progress[num].bestPct >= 80);
  }

  function getSortedChapters() {
    const copy = [...ALL_CHAPTERS];
    if (state.sortMode === "book") {
      return copy.sort((a, b) => a.num - b.num);
    }
    // Priority: Red -> Orange (with Bab 17 highlighted first in Orange) -> Amber -> Green
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
      lbl.textContent = `Rumus Cepat Bab ${state.selectedNum}`;
    } else {
      lbl.textContent = "Master Rumus Cepat";
    }
  }

  // ===== RENDER CHEAT SHEET HTML (dipakai di halaman tiap bab & di modal!) =====
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
    const masteredCount = ALL_CHAPTERS.filter((c) => isMastered(c.num)).length;
    const pct = Math.round((masteredCount / ALL_CHAPTERS.length) * 100);

    document.getElementById("sidebarProgressText").textContent = `${masteredCount} / ${ALL_CHAPTERS.length} bab`;
    document.getElementById("sidebarProgressFill").style.width = `${pct}%`;
    document.getElementById("sidebarProgressBar").setAttribute("aria-valuenow", String(masteredCount));

    const ordered = getSortedChapters();
    const filtered = state.zoneFilter === "all"
      ? ordered
      : ordered.filter((c) => c.zone === state.zoneFilter);

    const listEl = document.getElementById("chapterList");
    listEl.innerHTML = filtered.map((ch) => {
      const selected = state.view === "chapter" && state.selectedNum === ch.num;
      const done = isMastered(ch.num);
      const saved = state.progress[ch.num];
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
            <span class="zone-pill ${done ? "zone-green" : ZONE_META[ch.zone].cls}">
              ${saved ? `${saved.bestPct}%` : esc(ch.oldScore)}
            </span>
          </div>
        </button>
      `;
    }).join("");

    listEl.querySelectorAll("[data-open-ch]").forEach((btn) => {
      btn.addEventListener("click", () => {
        openChapter(Number(btn.dataset.openCh), "materi");
        closeDrawer();
      });
    });
  }

  // ===== OVERVIEW PETA BAB 1–25 =====
  function renderOverview() {
    state.view = "overview";
    state.selectedNum = null;
    updateCheatButtonLabel();
    renderSidebar();

    const ws = document.getElementById("workspace");
    const masteredCount = ALL_CHAPTERS.filter((c) => isMastered(c.num)).length;
    const totalPerBabQ = ALL_CHAPTERS.reduce((s, c) => s + c.questions.length, 0);
    const nextTarget = getSortedChapters().find((c) => !isMastered(c.num)) || getChapter(17);

    const groups = [
      { key: "red",    title: "1. Zona Merah — Skor Tes Lama 0/4 (Prioritas Utama)" },
      { key: "orange", title: "2. Zona Oranye — Skor Tes Lama 1/4 (Termasuk Bab 17 Lengkap + Lab Konjugasi)" },
      { key: "amber",  title: "3. Zona Kuning — Skor Tes Lama 2/4 (Rapikan Detail Konjugasi & Partikel)" },
      { key: "green",  title: "4. Zona Hijau — Skor Tes Lama 3/4–4/4 (Materi Lengkap & Review)" }
    ];

    const groupsHtml = groups.map((g) => {
      const items = ALL_CHAPTERS.filter((c) => c.zone === g.key).sort((a, b) => a.num - b.num);
      return `
        <section class="zone-section">
          <div class="zone-section-head">
            <h2>${esc(g.title)}</h2>
            <span class="zone-pill ${ZONE_META[g.key].cls}">${items.length} bab</span>
          </div>
          <div class="zone-grid">
            ${items.map((ch) => {
              const saved = state.progress[ch.num];
              const done = isMastered(ch.num);
              return `
                <button type="button" class="chapter-card" data-open-ch="${ch.num}">
                  <div class="chapter-card-top">
                    <span class="zone-pill ${done ? "zone-green" : ZONE_META[ch.zone].cls}">
                      ${done ? `✓ Tuntas (${saved.bestPct}%)` : `Tes lama: ${ch.oldScore}`}
                    </span>
                    <span class="zone-pill zone-neutral">Rumus Cepat + ${ch.questions.length} soal</span>
                  </div>
                  <h3>Bab ${ch.num}: ${esc(ch.title)}</h3>
                  <p class="chapter-card-bug">${esc(ch.shortBug)}</p>
                  <div class="chapter-card-foot">
                    <span>Sheet Khusus Bab ${ch.num}</span>
                    <span>Buka Bab ${ch.num} →</span>
                  </div>
                </button>
              `;
            }).join("")}
          </div>
        </section>
      `;
    }).join("");

    ws.innerHTML = `
      <p class="eyebrow">KURIKULUM PENUH MINNA NO NIHONGO I · BAB 1 – 25</p>
      <h1 class="page-title">Studio Materi Lengkap, Rumus Cepat Tiap Bab, &amp; Tes Akhir</h1>
      <p class="page-lead">
        Setiap bab dari <strong>Bab 1 sampai Bab 25</strong> kini memiliki <strong>Rumus Cepat (Cheat Sheet) khusus bab itu sendiri</strong>, materi tata bahasa utuh (termasuk <strong>Bab 17 asli + Lab Konjugasi</strong> yang sudah digabung langsung), serta latihan murni 1 tema tanpa timer.
      </p>

      <div class="dashboard-summary">
        <div class="summary-card">
          <span class="summary-num">${masteredCount}/${ALL_CHAPTERS.length}</span>
          <span class="summary-label">Bab Tuntas (≥80%)</span>
          <span class="summary-note">25 Rumus Cepat unik</span>
        </div>
        <div class="summary-card">
          <span class="summary-num" style="color: var(--zone-red-fg);">4 + 3</span>
          <span class="summary-label">Merah &amp; Oranye</span>
          <span class="summary-note">Bab 2, 5, 7, 20 &amp; 4, 6, 17</span>
        </div>
        <div class="summary-card">
          <span class="summary-num">${totalPerBabQ}</span>
          <span class="summary-label">Soal Murni Per Bab</span>
          <span class="summary-note">Tidak kecampur bab lain</span>
        </div>
        <div class="summary-card">
          <span class="summary-num">${FINAL_EXAM.length}</span>
          <span class="summary-label">Soal Tes Akhir (1–25)</span>
          <span class="summary-note">Gabungan semua bab</span>
        </div>
      </div>

      <div class="cta-banner">
        <div>
          <h2>Lanjut Belajar: Bab ${nextTarget.num} — ${esc(nextTarget.title)}</h2>
          <p>${esc(nextTarget.shortBug)}</p>
        </div>
        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
          <button type="button" class="btn-primary" id="btnQuickBab17">
            Buka Bab 17 (Lengkap + Lab) →
          </button>
          <button type="button" class="btn-secondary" id="btnStartNext">
            Buka Bab ${nextTarget.num} →
          </button>
        </div>
      </div>

      ${groupsHtml}
    `;

    document.getElementById("btnQuickBab17").addEventListener("click", () => openChapter(17, "materi"));
    document.getElementById("btnStartNext").addEventListener("click", () => openChapter(nextTarget.num, "materi"));
    ws.querySelectorAll("[data-open-ch]").forEach((btn) => {
      btn.addEventListener("click", () => openChapter(Number(btn.dataset.openCh), "materi"));
    });
  }

  // ===== BUKA SATU BAB =====
  function openChapter(num, tab) {
    const ch = getChapter(num);
    if (!ch) return;
    state.view = "chapter";
    state.selectedNum = num;
    state.activeTab = tab || "materi";
    state.labIndex = 0;
    resetQuiz(ch.questions.map((_, i) => i), `Semua ${ch.questions.length} Soal Murni Bab ${ch.num}`);
    updateCheatButtonLabel();
    renderSidebar();
    renderChapterView();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function resetQuiz(indices, label) {
    state.quizIndices = indices;
    state.quizModeLabel = label;
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
    const saved = state.progress[ch.num];
    const done = isMastered(ch.num);

    ws.innerHTML = `
      <section class="chapter-header">
        <div class="chapter-header-top">
          <span class="zone-pill ${ZONE_META[ch.zone].cls}">${esc(ZONE_META[ch.zone].label)} · Tes Lama ${esc(ch.oldScore)}</span>
          ${done ? `<span class="zone-pill zone-green">✓ Tuntas (${saved.bestPct}%)</span>` : ""}
          <span class="zone-pill zone-neutral">Rumus Cepat Khusus Bab ${ch.num}</span>
        </div>
        <h1 class="page-title">Bab ${ch.num}: ${esc(ch.title)}</h1>
        <p class="page-lead">${esc(ch.shortBug)}</p>

        <div class="mode-tabs" role="tablist">
          <button type="button" class="mode-tab ${state.activeTab === "materi" ? "is-active" : ""}" id="tabMateri" role="tab" aria-selected="${state.activeTab === "materi"}">
            1. Rumus Cepat &amp; Materi Lengkap Bab ${ch.num}
          </button>
          <button type="button" class="mode-tab ${state.activeTab === "kuis" ? "is-active" : ""}" id="tabKuis" role="tab" aria-selected="${state.activeTab === "kuis"}">
            2. Kuis Murni Bab ${ch.num} (${ch.questions.length} Soal · Tanpa Waktu)
          </button>
        </div>
      </section>

      <div id="chapterBody"></div>
    `;

    document.getElementById("tabMateri").addEventListener("click", () => {
      state.activeTab = "materi";
      renderChapterView();
    });
    document.getElementById("tabKuis").addEventListener("click", () => {
      state.activeTab = "kuis";
      renderChapterView();
    });

    if (state.activeTab === "materi") {
      renderChapterMateri(ch);
    } else {
      renderQuizBody(ch);
    }
  }

  // ===== MATERI PER BAB (TERMASUK MERGED BAB 17 UTUH + RUMUS CEPAT UNIK TIAP BAB!) =====
  function renderChapterMateri(ch) {
    const body = document.getElementById("chapterBody");

    const bugsHtml = ch.bugs.map((b) => `
      <li>
        <strong>${esc(b.soal)}:</strong>
        <span class="bug-wrong">${esc(b.salah)}</span> →
        <span class="bug-right">${esc(b.benar)}</span>
        <div class="bug-why">${esc(b.kenapa)}</div>
      </li>
    `).join("");

    // Render grammar & vocab (handling both standard chapters AND merged original Bab 17!)
    let grammarHtml = "";
    let vocabHtml = "";
    let extraLabHtml = "";

    if (ch.isMergedBab17) {
      extraLabHtml = `
        <section class="study-section">
          <h2 class="study-section-title">Lab Konjugasi Interaktif Bab 17: Klik Kata Kerja, Lihat Rumus Turunannya</h2>
          <p class="section-sub">Pilih satu dari 14 kata kerja di bawah untuk melihat perubahan <code>ます形 → ない形 → 3 rumus Bab 17</code> secara instan.</p>
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
          <div class="example-list">
            ${g.examples.map((ex) => `
              <div class="example-item">
                <div class="example-jp">${esc(ex.jp)}</div>
                <span class="romaji example-romaji">${esc(ex.romaji)}</span>
                <span class="example-id">${esc(ex.id)}</span>
              </div>
            `).join("")}
          </div>
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
                  <thead><tr><th>Jepang (Kanji)</th><th>Kelompok</th><th>Bentuk -Nai</th><th>Arti Indonesia</th></tr></thead>
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
          <div class="example-list">
            ${g.examples.map((ex) => `
              <div class="example-item">
                <div class="example-jp">${esc(ex.jp)}</div>
                <span class="romaji example-romaji">${esc(ex.romaji)}</span>
                <span class="example-id">${esc(ex.id)}</span>
              </div>
            `).join("")}
          </div>
          <div class="trap-note"><strong>Catatan Jebakan:</strong> ${esc(g.trap)}</div>
        </article>
      `).join("");

      vocabHtml = `
        <div class="table-wrap">
          <table class="vocab-table">
            <thead><tr><th>Kosakata Jepang &amp; Romaji</th><th>Arti Indonesia</th></tr></thead>
            <tbody>
              ${ch.vocab.map((v) => `
                <tr>
                  <td>
                    <div class="jp">${esc(v.jp)}</div>
                    <div class="romaji">${esc(v.romaji)}</div>
                  </td>
                  <td>${esc(v.arti)}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      `;
    }

    body.innerHTML = `
      <!-- 1. RUMUS CEPAT KHUSUS BAB INI (LANGSUNG TAMPIL!) -->
      <section class="inline-cheatsheet">
        <div class="inline-cheatsheet-head">
          <div>
            <p class="eyebrow">CHEAT SHEET KHUSUS BAB ${ch.num}</p>
            <h2 class="inline-cheatsheet-title">${esc(ch.cheatSheet.title)}</h2>
          </div>
        </div>
        ${buildCheatSheetTablesHtml(ch.cheatSheet)}
      </section>

      <!-- 2. DIAGNOSTIK SKOR TES LAMA -->
      <section class="bug-callout ${ZONE_META[ch.zone].callout}">
        <div class="bug-callout-title">Catatan Hasil Tes 100 Soal di Bab ${ch.num}</div>
        <ul class="bug-list">${bugsHtml}</ul>
      </section>

      ${extraLabHtml}

      <!-- 3. MATERI TATA BAHASA LENGKAP -->
      <section class="study-section">
        <h2 class="study-section-title">Penjelasan Tata Bahasa Lengkap Bab ${ch.num}</h2>
        <div class="grammar-stack">${grammarHtml}</div>
      </section>

      <!-- 4. KOSAKATA LENGKAP BAB INI -->
      <section class="study-section">
        <h2 class="study-section-title">Kosakata Lengkap Bab ${ch.num} (Kotoba)</h2>
        ${vocabHtml}
      </section>

      <div class="study-footer-cta">
        <div>
          <h3>Siap latihan murni Bab ${ch.num}?</h3>
          <p style="font-size: 14px; color: var(--color-ink-muted); margin-top: 4px;">
            ${ch.questions.length} soal fokus murni materi Bab ${ch.num} (tidak kecampur bab lain, tanpa batas waktu).
          </p>
        </div>
        <button type="button" class="btn-primary" id="btnGoChapterQuiz">
          Mulai Kuis Bab ${ch.num} (${ch.questions.length} Soal) →
        </button>
      </div>
    `;

    if (ch.isMergedBab17) {
      renderBab17Lab(ch);
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
      <div>
        <span class="group-badge">Kelompok ${esc(cur.group)}</span>
        <h3 class="lab-word"><span class="jp">${esc(cur.masu)}</span> <span class="romaji">(${esc(cur.romaji)})</span> — ${esc(cur.arti)}</h3>
      </div>

      <div class="lab-pipeline">
        <div class="pipe-step">
          <span class="pipe-label">1. Bentuk ます</span>
          <strong class="jp">${esc(cur.masu)}</strong>
        </div>
        <span class="pipe-arrow" aria-hidden="true">→</span>
        <div class="pipe-step pipe-step-accent">
          <span class="pipe-label">2. Perubahan</span>
          <strong>${esc(cur.changeFrom)} → ${esc(cur.changeTo)}</strong>
        </div>
        <span class="pipe-arrow" aria-hidden="true">→</span>
        <div class="pipe-step pipe-step-result">
          <span class="pipe-label">3. Bentuk -Nai</span>
          <strong class="jp">${esc(cur.nai)}</strong>
          <span class="romaji">${esc(cur.naiRomaji)}</span>
        </div>
      </div>

      <p class="lab-rule"><strong>Aturan:</strong> ${esc(cur.rule)}</p>

      <div class="lab-derived-grid">
        <div class="derived-box">
          <span class="derived-label">Tolong jangan ~</span>
          <div class="jp">${esc(cur.nai)}で ください</div>
          <div class="romaji">${esc(cur.naiRomaji)}de kudasai</div>
        </div>
        <div class="derived-box">
          <span class="derived-label">HARUS ~ (coret い)</span>
          <div class="jp">${esc(naiStem)}ければ なりません</div>
          <div class="romaji">${esc(naiStemRomaji)}kereba narimasen</div>
        </div>
        <div class="derived-box">
          <span class="derived-label">TIDAK PERLU ~ (coret い)</span>
          <div class="jp">${esc(naiStem)}くても いいです</div>
          <div class="romaji">${esc(naiStemRomaji)}kute mo ii desu</div>
        </div>
      </div>

      <div class="trap-note" style="margin-top: 12px;"><strong>Tips:</strong> ${esc(cur.trap)}</div>
    `;
  }

  // ===== KUIS INTERAKTIF (PER BAB MAUPUN TES AKHIR) =====
  const finalExamObj = {
    num: "1–25",
    isFinalExam: true,
    title: "Tes Akhir Komprehensif Bab 1–25",
    questions: FINAL_EXAM
  };

  function openFinalExam() {
    state.view = "final_exam";
    state.selectedNum = null;
    state.activeTab = "kuis";
    resetQuiz(FINAL_EXAM.map((_, i) => i), `Tes Akhir Gabungan Bab 1–25 (${FINAL_EXAM.length} Soal)`);
    updateCheatButtonLabel();
    renderSidebar();

    const ws = document.getElementById("workspace");
    ws.innerHTML = `
      <section class="chapter-header">
        <div class="chapter-header-top">
          <span class="zone-pill zone-red">TES AKHIR GABUNGAN · BAB 1 – 25</span>
          <span class="zone-pill zone-neutral">Tanpa Timer</span>
        </div>
        <h1 class="page-title">Evaluasi Akhir Komprehensif: Bab 1 – 25</h1>
        <p class="page-lead">
          Di Tes Akhir ini barulah seluruh materi Bab 1–25, partikel, konjungsi (<code>から・が・てから・まえに・とき・と・たら・ても</code>), dan pemahaman kalimat diuji sekaligus!
        </p>
      </section>
      <div id="chapterBody"></div>
    `;
    renderQuizBody(finalExamObj);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderQuizBody(ch) {
    const body = document.getElementById("chapterBody");
    const total = state.quizIndices.length;

    // Sub-theme filter bar khusus Bab 17 (20 soal 4 tema!)
    const bab17FilterHtml = ch.isMergedBab17 ? `
      <div class="quiz-filter-btns">
        <button type="button" class="filter-chip ${state.quizModeLabel.startsWith("Semua") ? "is-active" : ""}" data-b17set="all">Semua (20)</button>
        <button type="button" class="filter-chip ${state.quizModeLabel.startsWith("Tema A") ? "is-active" : ""}" data-b17set="A">A: V-ない (6)</button>
        <button type="button" class="filter-chip ${state.quizModeLabel.startsWith("Tema B") ? "is-active" : ""}" data-b17set="B">B: ～ないでください (5)</button>
        <button type="button" class="filter-chip ${state.quizModeLabel.startsWith("Tema C") ? "is-active" : ""}" data-b17set="C">C: ～なければなりません (5)</button>
        <button type="button" class="filter-chip ${state.quizModeLabel.startsWith("Tema D") ? "is-active" : ""}" data-b17set="D">D: ～なくてもいいです (4)</button>
      </div>
    ` : "";

    const topBarHtml = `
      <div class="quiz-mode-bar">
        <div class="quiz-mode-left">
          <span class="no-timer-pill">Tanpa Batas Waktu</span>
          <span style="font-size: 13px; font-weight: 700;">${esc(state.quizModeLabel)}</span>
        </div>
        ${bab17FilterHtml}
      </div>
    `;

    // Hasil Kuis
    if (state.currentStep >= total) {
      const correctCount = Object.values(state.results).filter(Boolean).length;
      const pct = Math.round((correctCount / total) * 100);
      if (!ch.isFinalExam && total === ch.questions.length) {
        saveScore(ch.num, correctCount, total);
      }

      const nextCh = !ch.isFinalExam ? getNextChapter(ch.num) : null;
      const msg = pct >= 80
        ? `Mantap sekali! Skor kamu ${pct}% — materi ini sudah dikuasai dengan kuat.`
        : `Tidak masalah, tidak ada batas waktu! Intip lagi Rumus Cepat atau ulangi khusus soal yang meleset.`;

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
              ${!ch.isFinalExam ? `
                <button type="button" class="btn-secondary" id="btnBackMateri">← Lihat Materi Bab ${ch.num}</button>
              ` : `
                <button type="button" class="btn-secondary" id="btnBackMateri">← Kembali ke Peta Bab</button>
              `}
              ${nextCh ? `
                <button type="button" class="btn-primary" id="btnGoNextCh">
                  Lanjut ke Bab ${nextCh.num} →
                </button>
              ` : ""}
            </div>
          </div>
        </div>
      `;

      bindBab17Filters(body, ch);
      const btnWrong = document.getElementById("btnRetryWrong");
      if (btnWrong) {
        btnWrong.addEventListener("click", () => {
          const idxs = state.wrongIds.map((id) => ch.questions.findIndex((q) => q.id === id)).filter((i) => i >= 0);
          resetQuiz(idxs, `Ulangi ${idxs.length} Soal Salah`);
          renderQuizBody(ch);
        });
      }
      document.getElementById("btnRetrySet").addEventListener("click", () => {
        resetQuiz([...state.quizIndices], state.quizModeLabel);
        renderQuizBody(ch);
      });
      document.getElementById("btnBackMateri").addEventListener("click", () => {
        if (ch.isFinalExam) {
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
            return `
              <button type="button" class="option-btn ${cls}" data-opt="${idx}" ${state.answered ? "disabled" : ""}>
                <span class="option-key">${idx + 1}</span>
                <div class="option-content">
                  <span class="option-jp">${esc(opt.jp)}</span>
                  ${opt.romaji ? `<span class="romaji">${esc(opt.romaji)}</span>` : ""}
                </div>
              </button>
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
            spellcheck="false"
            ${state.answered ? "disabled" : ""}
          >
          ${!state.answered ? `<button type="submit" class="btn-primary">Cek Jawaban</button>` : ""}
        </form>
        ${state.answered && !state.isCorrectCurrent ? `
          <div class="expected-answer-line">Jawaban benar: <strong class="jp">${esc(q.displayAnswer)}</strong></div>
        ` : ""}
      `;
    }

    const peekText = ch.isFinalExam
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

          <div class="quiz-prompt">${esc(q.prompt)}</div>
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

    bindBab17Filters(body, ch);

    document.getElementById("btnPeekCheat").addEventListener("click", () => {
      if (ch.isFinalExam && q.bab) {
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
      if (input && !state.answered) input.focus();
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

  function bindBab17Filters(container, ch) {
    if (!ch.isMergedBab17) return;
    container.querySelectorAll("[data-b17set]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const s = btn.dataset.b17set;
        if (s === "all") resetQuiz(ch.questions.map((_, i) => i), "Semua 20 Soal Murni Bab 17");
        else if (s === "A") resetQuiz(ch.questions.map((q, i) => (q.section.startsWith("A") ? i : -1)).filter((i) => i >= 0), "Tema A · V-ない Murni");
        else if (s === "B") resetQuiz(ch.questions.map((q, i) => (q.section.startsWith("B") ? i : -1)).filter((i) => i >= 0), "Tema B · ～ないでください");
        else if (s === "C") resetQuiz(ch.questions.map((q, i) => (q.section.startsWith("C") ? i : -1)).filter((i) => i >= 0), "Tema C · ～なければなりません");
        else if (s === "D") resetQuiz(ch.questions.map((q, i) => (q.section.startsWith("D") ? i : -1)).filter((i) => i >= 0), "Tema D · ～なくてもいいです");
        renderQuizBody(ch);
      });
    });
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

  // ===== MODAL RUMUS CEPAT (DINAMIS PER BAB!) =====
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
    document.getElementById("cheatModalTitle").textContent = "Ringkasan 5 Perubahan & Partikel Paling Krusial (Klik Bab mana saja untuk Rumus Cepat khususnya!)";
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

  function closeDrawer() {
    document.getElementById("sidebar").classList.remove("is-open");
    document.getElementById("sidebarBackdrop").hidden = true;
    document.getElementById("btnToggleSidebar").setAttribute("aria-expanded", "false");
  }

  // ===== INIT =====
  function init() {
    applyTheme(state.theme);
    renderOverview();

    // Theme toggle (Dark / Light)
    document.getElementById("btnToggleTheme").addEventListener("click", () => {
      applyTheme(state.theme === "dark" ? "light" : "dark");
    });

    // Romaji toggle
    const btnRomaji = document.getElementById("btnToggleRomaji");
    btnRomaji.addEventListener("click", () => {
      state.showRomaji = !state.showRomaji;
      document.body.classList.toggle("hide-romaji", !state.showRomaji);
      btnRomaji.setAttribute("aria-pressed", String(state.showRomaji));
      document.getElementById("romajiLabel").textContent = state.showRomaji ? "Romaji: ON" : "Romaji: OFF";
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

    // Overview & Final Exam buttons
    document.getElementById("btnShowOverview").addEventListener("click", () => {
      renderOverview();
      closeDrawer();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    document.getElementById("brandHome").addEventListener("click", () => {
      renderOverview();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    document.getElementById("btnStartFinalExam").addEventListener("click", () => {
      openFinalExam();
      closeDrawer();
    });

    // Sort buttons
    document.querySelectorAll(".sort-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.sortMode = btn.dataset.sort;
        document.querySelectorAll(".sort-btn").forEach((b) => {
          const active = b === btn;
          b.classList.toggle("is-active", active);
          b.setAttribute("aria-selected", String(active));
        });
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
        closeCheatModal();
        closeDrawer();
        return;
      }
      if ((state.view !== "chapter" && state.view !== "final_exam") || state.activeTab !== "kuis") return;
      if (!document.getElementById("cheatModal").hidden) return;
      const ch = state.view === "final_exam" ? finalExamObj : getChapter(state.selectedNum);
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
