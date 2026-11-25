/* Melengkapi Bab 1–25: Bab 17 (Zona Oranye) + Zona Hijau (Bab 1, 3, 8, 12, 14, 15, 16)
 * Semua soal per bab 100% MURNI satu tema bab tersebut (tidak dicampur bab lain).
 * Plus: TES AKHIR GABUNGAN BAB 1–25 (25 soal komprehensif lintas bab, baru di sini semuanya digabung!).
 */
window.ERROR_CHAPTERS.push(
  // ==================== BAB 17 (Murni Bentuk -Nai) ====================
  {
    num: 17,
    zone: "orange",
    oldScore: "1/4",
    title: "Bentuk -Nai (ない形), ～ないでください, ～なければなりません, ～なくてもいいです",
    shortBug: "Murni latihan perubahan V-ない (のみます→のまない) dan 3 rumus inti tanpa campuran bab lain.",
    bugs: [
      { soal: "Soal 65", salah: "のみます → のみない", benar: "のまない (Kelompok I: み → ま + ない)", kenapa: "Vokal -i sebelum ます pada Kelompok I wajib berubah ke -a." },
      { soal: "Soal 67", salah: "Salah menyusun rumus 'harus'", benar: "Coret い + ければ なりません (ださなければ なりません)", kenapa: "Huruf い pada ない wajib dicoret." },
      { soal: "Soal 68", salah: "Mengartikan ～なくても いいです sebagai 'harus'", benar: "～なくても いいです = TIDAK PERLU", kenapa: "Ekor いいです = tidak apa-apa / tidak usah." }
    ],
    grammar: [
      {
        num: "TEMA 01",
        title: "Konjugasi Murni Bentuk -Nai (ない形)",
        formula: "Kel. I: vokal -i → -a + ない (khusus い → わ, あります → ない) | Kel. II: buang ます + ない | Kel. III: します→しない, きます→こない",
        explain: "Pastikan perubahan ke Bentuk -Nai benar lebih dulu sebelum menempelkan rumus turunan.",
        examples: [
          { jp: "のみます → のまない  |  はらいます → はらわない", romaji: "nomanai | harawanai", id: "tidak minum | tidak membayar" },
          { jp: "わすれます → わすれない  |  きます → こない", romaji: "wasurenai | konai", id: "tidak lupa | tidak datang" }
        ],
        trap: "Akhiran い sebelum ます selalu jadi わ (かわない, はらわない), bukan あ!"
      },
      {
        num: "TEMA 02",
        title: "3 Rumus Murni Turunan Bentuk -Nai",
        formula: "1. V-ないで ください (Tolong jangan ~)\n2. V-なければ なりません (Harus ~)\n3. V-なくても いいです (Tidak perlu ~)",
        explain: "Rumus 1 mempertahankan い (`ない + でください`). Rumus 2 dan 3 mencoret い (`な + ければなりません` / `な + くてもいいです`).",
        examples: [
          { jp: "しゃしんを とらないで ください。", romaji: "Shashin o toranaide kudasai.", id: "Tolong jangan mengambil foto." },
          { jp: "くすりを のまなければ なりません。", romaji: "Kusuri o nomanakereba narimasen.", id: "Harus minum obat." },
          { jp: "くつを ぬがなくても いいです。", romaji: "Kutsu o nuganakute mo ii desu.", id: "Tidak perlu melepas sepatu." }
        ],
        trap: "なりません = HARUS. いいです = TIDAK PERLU."
      }
    ],
    vocab: [
      { jp: "おぼえます / わすれます", romaji: "oboemasu / wasuremasu", arti: "menghafal / lupa (Kel. II)" },
      { jp: "だします / かえします / なくします", romaji: "dashimasu / kaeshimasu / nakushimasu", arti: "mengumpulkan / mengembalikan / kehilangan (Kel. I)" },
      { jp: "はらいます / ぬぎます", romaji: "haraimasu / nugimasu", arti: "membayar / melepas sepatu-baju (Kel. I)" },
      { jp: "しんぱいします / ざんぎょうします", romaji: "shinpai shimasu / zangyou shimasu", arti: "khawatir / lembur (Kel. III)" }
    ],
    questions: [
      {
        id: "b17_1", type: "mcq", badge: "Murni V-ない",
        prompt: "のみます (minum) → Bentuk -Nai:",
        promptRomaji: "nomimasu → ?",
        sub: "Ubah langsung ke Bentuk -Nai.",
        options: [
          { jp: "のみない", romaji: "nominai" },
          { jp: "のまない", romaji: "nomanai" },
          { jp: "のめない", romaji: "nomenai" },
          { jp: "のわない", romaji: "nowanai" }
        ],
        answer: 1,
        explain: "BENAR: のまない (み → ま + ない)."
      },
      {
        id: "b17_2", type: "mcq", badge: "Murni V-ない",
        prompt: "はらいます (membayar) → Bentuk -Nai:",
        promptRomaji: "haraimasu → ?",
        sub: "Huruf sebelum ます adalah い.",
        options: [
          { jp: "はらいない", romaji: "harainai" },
          { jp: "はらあない", romaji: "haraanai" },
          { jp: "はらわない", romaji: "harawanai" },
          { jp: "はらない", romaji: "haranai" }
        ],
        answer: 2,
        explain: "BENAR: はらわない (い → わ + ない)."
      },
      {
        id: "b17_3", type: "mcq", badge: "Murni ～ないでください",
        prompt: "わすれます (lupa) → 「Tolong jangan lupa」:",
        promptRomaji: "wasuremasu + naide kudasai",
        sub: "Pasang rumus ～ないで ください langsung.",
        options: [
          { jp: "わすらないで ください", romaji: "wasuranaide kudasai" },
          { jp: "わすれないで ください", romaji: "wasurenaide kudasai" },
          { jp: "わすれなくて ください", romaji: "wasurenakute kudasai" },
          { jp: "わすれなければ ください", romaji: "wasurenakereba kudasai" }
        ],
        answer: 1,
        explain: "BENAR: わすれないで ください!"
      },
      {
        id: "b17_4", type: "mcq", badge: "Murni ～なければなりません",
        prompt: "だします (mengumpulkan) → 「HARUS mengumpulkan」:",
        promptRomaji: "dashimasu → harus mengumpulkan",
        sub: "ださない → coret い + ければ なりません.",
        options: [
          { jp: "ださないで ください", romaji: "dasanaide kudasai" },
          { jp: "ださなくても いいです", romaji: "dasanakute mo ii desu" },
          { jp: "ださなければ なりません", romaji: "dasanakereba narimasen" },
          { jp: "ださないければ なりません", romaji: "dasanaikereba narimasen" }
        ],
        answer: 2,
        explain: "BENAR: ださなければ なりません!"
      },
      {
        id: "b17_5", type: "mcq", badge: "Murni ～なくてもいいです",
        prompt: "きます (datang) → 「TIDAK PERLU datang」:",
        promptRomaji: "kimasu → tidak perlu datang",
        sub: "きます → こない → coret い + くても いいです.",
        options: [
          { jp: "こなければ なりません", romaji: "konakereba narimasen" },
          { jp: "こなくても いいです", romaji: "konakute mo ii desu" },
          { jp: "きなくても いいです", romaji: "kinakute mo ii desu" },
          { jp: "こないで ください", romaji: "konaide kudasai" }
        ],
        answer: 1,
        explain: "BENAR: こなくても いいです!"
      }
    ]
  },

  // ==================== BAB 1 (Zona Hijau · 4/4) ====================
  {
    num: 1,
    zone: "green",
    oldScore: "4/4",
    title: "Kalimat Nominal (は・です・じゃありません・も・の)",
    shortBug: "Bab terkuatmu (4/4). Review cepat kalimat dasar N1 は N2 です.",
    bugs: [
      { soal: "Soal 1–4", salah: "Tidak ada yang salah (4/4 Sempurna!)", benar: "は (topik), も (juga), じゃありません (bukan), か (tanya)", kenapa: "Pondasi Bab 1 sudah 100% dikuasai." }
    ],
    grammar: [
      {
        num: "TEMA 01",
        title: "N1 は N2 です / じゃありません / も",
        formula: "(+) N1 は N2 です  |  (-) N1 は N2 じゃありません  |  (Juga) N1 も N2 です",
        explain: "Pola dasar memperkenalkan nama, status, pekerjaan, dan afiliasi.",
        examples: [
          { jp: "わたしは かいしゃいんです。", romaji: "Watashi wa kaishain desu.", id: "Saya pegawai perusahaan." },
          { jp: "サントスさんは がくせいじゃ ありません。", romaji: "Santosu-san wa gakusei ja arimasen.", id: "Sdr. Santos bukan mahasiswa." }
        ],
        trap: "Jangan pakai ～さん untuk nama sendiri!"
      }
    ],
    vocab: [
      { jp: "わたし / がくせい / かいしゃいん", romaji: "watashi / gakusei / kaishain", arti: "saya / mahasiswa / pegawai perusahaan" },
      { jp: "せんせい / いしゃ / けんきゅうしゃ", romaji: "sensei / isha / kenkyuusha", arti: "guru / dokter / peneliti" }
    ],
    questions: [
      {
        id: "b1_1", type: "mcq", badge: "Murni Bab 1",
        prompt: "わたし （　　） がくせいです。",
        promptRomaji: "Watashi ( _ ) gakusei desu.",
        sub: "Partikel penanda topik kalimat.",
        options: [
          { jp: "は", romaji: "wa" },
          { jp: "を", romaji: "o" },
          { jp: "に", romaji: "ni" },
          { jp: "で", romaji: "de" }
        ],
        answer: 0,
        explain: "BENAR: は (dibaca wa)."
      },
      {
        id: "b1_2", type: "mcq", badge: "Murni Bab 1",
        prompt: "ミラーさんは いしゃです。グプタさん （　　） いしゃです。 (Sdr. Gupta JUGA dokter.)",
        promptRomaji: "Guputa-san ( _ ) isha desu.",
        sub: "Partikel 'juga'.",
        options: [
          { jp: "は", romaji: "wa" },
          { jp: "も", romaji: "mo" },
          { jp: "の", romaji: "no" },
          { jp: "か", romaji: "ka" }
        ],
        answer: 1,
        explain: "BENAR: も (juga)."
      },
      {
        id: "b1_3", type: "mcq", badge: "Murni Bab 1",
        prompt: "Ubah 「がくせいです」 ke bentuk NEGATIF:",
        promptRomaji: "gakusei desu → bukan mahasiswa",
        sub: "Negatif dari です.",
        options: [
          { jp: "がくせいじゃ ありません", romaji: "gakusei ja arimasen" },
          { jp: "がくせいくないです", romaji: "gakuseikunai desu" },
          { jp: "がくせいせん", romaji: "gakuseisen" },
          { jp: "がくせいでない", romaji: "gakusei de nai" }
        ],
        answer: 0,
        explain: "BENAR: がくせいじゃ ありません."
      }
    ]
  },

  // ==================== BAB 3 (Zona Hijau · 3/4) ====================
  {
    num: 3,
    zone: "green",
    oldScore: "3/4",
    title: "Kata Tunjuk Tempat (ここ・そこ・あそこ・どこ) & Harga (いくら)",
    shortBug: "Sudah kuat (3/4). Fokus murni lokasi ここ・そこ・あそこ dan menanyakan harga いくら.",
    bugs: [
      { soal: "Soal 9–12", salah: "Hanya terpeleset 1 soal detail", benar: "ここ(sini) · そこ(situ) · あそこ(sana) · どこ(mana) / こちら・そちら・あちら・どちら", kenapa: "Sudah dikuasai dengan baik." }
    ],
    grammar: [
      {
        num: "TEMA 01",
        title: "Lokasi Tempat & Asal Produk",
        formula: "[Tempat/Benda] は ここ／そこ／あそこ です  |  どこの [Benda] ですか (buatan mana?)  |  いくらですか (berapa harganya?)",
        explain: "ここ dekat pembicara, そこ dekat lawan bicara, あそこ jauh dari keduanya. こちら・そちら・あちら・どちら adalah bentuk sopannya.",
        examples: [
          { jp: "トイレは あそこです。", romaji: "Toire wa asoko desu.", id: "Toilet ada di sana." },
          { jp: "この ネクタイは いくらですか。", romaji: "Kono nekutai wa ikura desu ka.", id: "Dasi ini harganya berapa?" }
        ],
        trap: "どこの くるま = mobil buatan negara/perusahaan mana."
      }
    ],
    vocab: [
      { jp: "ここ / そこ / あそこ / どこ", romaji: "koko / soko / asoko / doko", arti: "di sini / di situ / di sana / di mana" },
      { jp: "こちら / そちら / あちら / どちら", romaji: "kochira / sochira / achira / dochira", arti: "sebelah sini / situ / sana / mana (sopan)" },
      { jp: "いくら", romaji: "ikura", arti: "berapa harganya" }
    ],
    questions: [
      {
        id: "b3_1", type: "mcq", badge: "Murni Bab 3",
        prompt: "うけつけは （　　　） ですか。…あそこです。 (Resepsionis di mana?)",
        promptRomaji: "Uketsuke wa ( ___ ) desu ka.",
        sub: "Kata tanya tempat.",
        options: [
          { jp: "だれ", romaji: "dare" },
          { jp: "どこ", romaji: "doko" },
          { jp: "なに", romaji: "nani" },
          { jp: "いつ", romaji: "itsu" }
        ],
        answer: 1,
        explain: "BENAR: どこ (di mana)."
      },
      {
        id: "b3_2", type: "mcq", badge: "Murni Bab 3",
        prompt: "この かばんは （　　　） ですか。…5,000えんです。 (Tas ini berapa harganya?)",
        promptRomaji: "Kono kaban wa ( ___ ) desu ka.",
        sub: "Kata tanya harga.",
        options: [
          { jp: "いくつ", romaji: "ikutsu" },
          { jp: "いくら", romaji: "ikura" },
          { jp: "どこ", romaji: "doko" },
          { jp: "なん", romaji: "nan" }
        ],
        answer: 1,
        explain: "BENAR: いくら (berapa harganya)."
      },
      {
        id: "b3_3", type: "mcq", badge: "Murni Bab 3",
        prompt: "これは （　　　）の くるまですか。…にほんの くるまです。 (Ini mobil buatan mana?)",
        promptRomaji: "Kore wa ( ___ ) no kuruma desu ka.",
        sub: "Menanyakan negara/perusahaan pembuat.",
        options: [
          { jp: "どこ", romaji: "doko" },
          { jp: "なに", romaji: "nani" },
          { jp: "いつ", romaji: "itsu" },
          { jp: "いくら", romaji: "ikura" }
        ],
        answer: 0,
        explain: "BENAR: どこの くるま (mobil buatan mana)."
      }
    ]
  },

  // ==================== BAB 8 (Zona Hijau · 3/4) ====================
  {
    num: 8,
    zone: "green",
    oldScore: "3/4",
    title: "Kata Sifat-い & Kata Sifat-な (Non-Lampau)",
    shortBug: "Sudah kuat (3/4). Fokus murni perubahan negatif KS-い (～くない) vs KS-な (～じゃありません).",
    bugs: [
      { soal: "Soal 29–32", salah: "Sudah 3/4 benar", benar: "KS-い negatif: ～くないです (いい → よくないです) | KS-な negatif: ～じゃありません", kenapa: "Waspadai きれい dan ゆうめい = KS-な!" }
    ],
    grammar: [
      {
        num: "TEMA 01",
        title: "Negatif & Modifikasi Benda KS-い vs KS-な",
        formula: "KS-い: たかい → たかくないです | たかい やま\nKS-な: しずかです → しずかじゃ ありません | しずかな まち",
        explain: "Ketika menjelaskan kata benda di belakangnya, KS-い langsung menempel, sedangkan KS-な wajib memunculkan な.",
        examples: [
          { jp: "この りょうりは おいしくないです。", romaji: "Kono ryouri wa oishikunai desu.", id: "Masakan ini tidak enak." },
          { jp: "ここは きれいな まちです。", romaji: "Koko wa kirei na machi desu.", id: "Ini adalah kota yang bersih/indah." }
        ],
        trap: "いいです → negatifnya よくないです (bukan いくないです)."
      }
    ],
    vocab: [
      { jp: "たかい / やすい / おいしい", romaji: "takai / yasui / oishii", arti: "mahal / murah / enak (KS-い)" },
      { jp: "きれい［な］ / しずか［な］ / ゆうめい［な］", romaji: "kirei / shizuka / yuumei", arti: "cantik-bersih / tenang / terkenal (KS-な)" }
    ],
    questions: [
      {
        id: "b8_1", type: "mcq", badge: "Murni Bab 8",
        prompt: "Ubah 「あついです」 (panas) ke bentuk NEGATIF:",
        promptRomaji: "atsui desu → tidak panas",
        sub: "KS-い: ganti い dengan くないです.",
        options: [
          { jp: "あついじゃ ありません", romaji: "atsui ja arimasen" },
          { jp: "あつくないです", romaji: "atsukunai desu" },
          { jp: "あつないです", romaji: "atsunai desu" },
          { jp: "あついくないです", romaji: "atsuikunai desu" }
        ],
        answer: 1,
        explain: "BENAR: あつくないです."
      },
      {
        id: "b8_2", type: "mcq", badge: "Murni Bab 8",
        prompt: "ならは （　　　　） まちです。 (Nara adalah kota yang tenang. — しずか)",
        promptRomaji: "Nara wa ( ____ ) machi desu.",
        sub: "KS-な di depan kata benda まち.",
        options: [
          { jp: "しずかい", romaji: "shizukai" },
          { jp: "しずかな", romaji: "shizuka na" },
          { jp: "しずかの", romaji: "shizuka no" },
          { jp: "しずか", romaji: "shizuka" }
        ],
        answer: 1,
        explain: "BENAR: しずかな まちです."
      },
      {
        id: "b8_3", type: "mcq", badge: "Murni Bab 8",
        prompt: "Ubah 「いいです」 (bagus) ke bentuk NEGATIF:",
        promptRomaji: "ii desu → tidak bagus",
        sub: "Pengecualian KS-い いいです.",
        options: [
          { jp: "いくないです", romaji: "ikunai desu" },
          { jp: "よくないです", romaji: "yokunai desu" },
          { jp: "いいじゃ ありません", romaji: "ii ja arimasen" },
          { jp: "よいないです", romaji: "yoinai desu" }
        ],
        answer: 1,
        explain: "BENAR: よくないです."
      }
    ]
  },

  // ==================== BAB 12 (Zona Hijau · 3/4) ====================
  {
    num: 12,
    zone: "green",
    oldScore: "3/4",
    title: "Lampau Kata Sifat (～かったです・～でした) & Perbandingan (より・いちばん)",
    shortBug: "Sudah kuat (3/4). Review cepat lampau KS-い (～かったです) dan perbandingan より / いちばん.",
    bugs: [
      { soal: "Soal 45–48", salah: "Sudah 3/4 benar", benar: "KS-い lampau: ～かったです / ～くなかったです | Perbandingan: A は B より ～です", kenapa: "Logika perbandingan sudah aman." }
    ],
    grammar: [
      {
        num: "TEMA 01",
        title: "Kala Lampau KS-い / KS-な & Perbandingan",
        formula: "KS-い: ～かったです / ～くなかったです | KS-な/N: ～でした / ～じゃありませんでした\nA は B より [KS] です | [Kategori] の なかで [N] が いちばん [KS] です",
        explain: "Perbandingan 2 benda memakai より ('daripada'); paling di antara kelompok (3+) memakai のなかで ... が いちばん.",
        examples: [
          { jp: "きのうは さむかったです。", romaji: "Kinou wa samukatta desu.", id: "Kemarin dingin." },
          { jp: "ひこうきは しんかんせんより はやいです。", romaji: "Hikouki wa shinkansen yori hayai desu.", id: "Pesawat lebih cepat daripada Shinkansen." }
        ],
        trap: "いいです → lampaunya よかったです (bukan いかったです)."
      }
    ],
    vocab: [
      { jp: "より / いちばん / どちら", romaji: "yori / ichiban / dochira", arti: "daripada / paling / yang mana (di antara 2)" }
    ],
    questions: [
      {
        id: "b12_1", type: "mcq", badge: "Murni Bab 12",
        prompt: "Ubah 「いそがしいです」 (sibuk) ke bentuk LAMPAU POSITIF:",
        promptRomaji: "isogashii desu → kemarin sibuk",
        sub: "KS-い lampau: ganti い dengan かったです.",
        options: [
          { jp: "いそがしいでした", romaji: "isogashii deshita" },
          { jp: "いそがしかったです", romaji: "isogashikatta desu" },
          { jp: "いそがしでした", romaji: "isogashi deshita" },
          { jp: "いそがしくかったです", romaji: "isogashikukatta desu" }
        ],
        answer: 1,
        explain: "BENAR: いそがしかったです."
      },
      {
        id: "b12_2", type: "mcq", badge: "Murni Bab 12",
        prompt: "東京は 大阪 （　　） ひとが おおいです。 (Tokyo lebih banyak orang daripada Osaka.)",
        promptRomaji: "Toukyou wa Oosaka ( __ ) hito ga ooi desu.",
        sub: "Kata pembanding 'daripada'.",
        options: [
          { jp: "ほど", romaji: "hodo" },
          { jp: "より", romaji: "yori" },
          { jp: "から", romaji: "kara" },
          { jp: "まで", romaji: "made" }
        ],
        answer: 1,
        explain: "BENAR: より (daripada)."
      },
      {
        id: "b12_3", type: "mcq", badge: "Murni Bab 12",
        prompt: "くだものの なかで りんごが （　　　　） すきです。 (Di antara buah, paling suka apel.)",
        promptRomaji: "Kudamono no naka de ringo ga ( ____ ) suki desu.",
        sub: "Kata superlatif 'paling'.",
        options: [
          { jp: "より", romaji: "yori" },
          { jp: "いちばん", romaji: "ichiban" },
          { jp: "どちら", romaji: "dochira" },
          { jp: "とても", romaji: "totemo" }
        ],
        answer: 1,
        explain: "BENAR: いちばん (paling)."
      }
    ]
  },

  // ==================== BAB 14 (Zona Hijau · 3/4) ====================
  {
    num: 14,
    zone: "green",
    oldScore: "3/4",
    title: "Bentuk -Te (て形), ～てください, & ～ています (Sedang)",
    shortBug: "Sudah sangat kuat (3/4). Review cepat pembentukan V-て, ～てください, dan ～ています.",
    bugs: [
      { soal: "Soal 53–56", salah: "Sudah 3/4 benar", benar: "い・ち・り→って | み・び・に→んで | き→いて (いきます→いって) | ぎ→いで | し→して", kenapa: "Bentuk -Te adalah kekuatan utamamu!" }
    ],
    grammar: [
      {
        num: "TEMA 01",
        title: "V-て ください (Tolong ~) & V-て います (Sedang ~)",
        formula: "[Bentuk -Te] + ください  |  [Bentuk -Te] + います",
        explain: "Permintaan sopan memakai V-てください; aksi yang sedang berlangsung sekarang memakai V-ています.",
        examples: [
          { jp: "ちょっと まって ください。", romaji: "Chotto matte kudasai.", id: "Tolong tunggu sebentar." },
          { jp: "いま あめが ふって います。", romaji: "Ima ame ga futte imasu.", id: "Sekarang sedang turun hujan." }
        ],
        trap: "いきます → いって (pengecualian tunggal Kelompok I)."
      }
    ],
    vocab: [
      { jp: "まちます / よびます / いそぎます", romaji: "machimasu / yobimasu / isogimasu", arti: "menunggu / memanggil / buru-buru" }
    ],
    questions: [
      {
        id: "b14_1", type: "mcq", badge: "Murni Bab 14",
        prompt: "まちます (menunggu) → 「Tolong tunggu」:",
        promptRomaji: "machimasu + te kudasai",
        sub: "い・ち・り → って.",
        options: [
          { jp: "まちて ください", romaji: "machite kudasai" },
          { jp: "まって ください", romaji: "matte kudasai" },
          { jp: "まんで ください", romaji: "mande kudasai" },
          { jp: "まいて ください", romaji: "maite kudasai" }
        ],
        answer: 1,
        explain: "BENAR: まって ください."
      },
      {
        id: "b14_2", type: "mcq", badge: "Murni Bab 14",
        prompt: "よみます (membaca) → 「Sedang membaca」:",
        promptRomaji: "yomimasu + te imasu",
        sub: "み・び・に → んで.",
        options: [
          { jp: "よみて います", romaji: "yomite imasu" },
          { jp: "よって います", romaji: "yotte imasu" },
          { jp: "よんで います", romaji: "yonde imasu" },
          { jp: "よいて います", romaji: "yoite imasu" }
        ],
        answer: 2,
        explain: "BENAR: よんで います."
      }
    ]
  },

  // ==================== BAB 15 (Zona Hijau · 3/4) ====================
  {
    num: 15,
    zone: "green",
    oldScore: "3/4",
    title: "Izin (～てもいいですか), Larangan (～てはいけません), & Status (～ています)",
    shortBug: "Sudah sangat kuat (3/4). Review cepat izin dan larangan Bentuk -Te.",
    bugs: [
      { soal: "Soal 57–60", salah: "Sudah 3/4 benar", benar: "V-ても いいですか (Bolehkah?) | V-ては いけません (Tidak boleh!) | しっています → しりません", kenapa: "Sudah dikuasai." }
    ],
    grammar: [
      {
        num: "TEMA 01",
        title: "Izin & Larangan dengan Bentuk -Te",
        formula: "V-ても いいですか (Bolehkah ~?)  |  V-ては いけません (Dilarang ~)",
        explain: "Gunakan Bentuk -Te + もいいですか untuk meminta izin, dan Bentuk -Te + はいけません untuk larangan.",
        examples: [
          { jp: "ここに すわっても いいですか。", romaji: "Koko ni suwatte mo ii desu ka.", id: "Bolehkah duduk di sini?" },
          { jp: "ここで たばこを すっては いけません。", romaji: "Koko de tabako o sutte wa ikemasen.", id: "Di sini tidak boleh merokok." }
        ],
        trap: "Negatif dari しっています (tahu) adalah しりません (tidak tahu)."
      }
    ],
    vocab: [
      { jp: "すわります / たちます / つかいます", romaji: "suwarimasu / tachimasu / tsukaimasu", arti: "duduk / berdiri / memakai" },
      { jp: "しっています / すんでいます", romaji: "shitte imasu / sunde imasu", arti: "tahu / tinggal" }
    ],
    questions: [
      {
        id: "b15_1", type: "mcq", badge: "Murni Bab 15",
        prompt: "つかいます (memakai) → 「Bolehkah memakai?」:",
        promptRomaji: "tsukaimasu + temo ii desu ka",
        sub: "つかいます → つかって + も いいですか.",
        options: [
          { jp: "つかいも いいですか", romaji: "tsukaimo ii desu ka" },
          { jp: "つかっても いいですか", romaji: "tsukatte mo ii desu ka" },
          { jp: "つかっては いいですか", romaji: "tsukatte wa ii desu ka" },
          { jp: "つかいても いいですか", romaji: "tsukaite mo ii desu ka" }
        ],
        answer: 1,
        explain: "BENAR: つかっても いいですか."
      },
      {
        id: "b15_2", type: "mcq", badge: "Murni Bab 15",
        prompt: "はいります (masuk) → 「Dilarang masuk!」:",
        promptRomaji: "hairimasu + te wa ikemasen",
        sub: "はいります → はいって + は いけません.",
        options: [
          { jp: "はいっては いけません", romaji: "haitte wa ikemasen" },
          { jp: "はいっても いけません", romaji: "haitte mo ikemasen" },
          { jp: "はいりては いけません", romaji: "hairite wa ikemasen" },
          { jp: "はいっては いいです", romaji: "haitte wa ii desu" }
        ],
        answer: 0,
        explain: "BENAR: はいっては いけません."
      }
    ]
  },

  // ==================== BAB 16 (Zona Hijau · 3/4) ====================
  {
    num: 16,
    zone: "green",
    oldScore: "3/4",
    title: "Urutan Aksi (V1-て、V2 / V1-てから), Gabung Kata Sifat (～くて・～で)",
    shortBug: "Sudah sangat kuat (3/4). Review cepat menyambung kalimat dan kata sifat.",
    bugs: [
      { soal: "Soal 61–64", salah: "Sudah 3/4 benar", benar: "KS-い → ～くて | KS-な / N → ～で | V1-て から、V2 (Setelah V1, baru V2)", kenapa: "Sudah dikuasai." }
    ],
    grammar: [
      {
        num: "TEMA 01",
        title: "Menyambung Kata Kerja & Kata Sifat",
        formula: "V1-て、V2-て、V3  |  V1-て から、V2 (Setelah V1, V2)\nKS-い: coret い + くて  |  KS-な / N + で",
        explain: "Untuk menyambung dua kata sifat: KS-い berubah jadi ～くて, sedangkan KS-な dan Kata Benda ditambah で.",
        examples: [
          { jp: "この へやは ひろくて、あかるいです。", romaji: "Kono heya wa hirokute, akarui desu.", id: "Kamar ini luas dan terang." },
          { jp: "しごとが おわってから、かえります。", romaji: "Shigoto ga owatte kara, kaerimasu.", id: "Setelah pekerjaan selesai, saya pulang." }
        ],
        trap: "いい → よくて (bukan いくて)."
      }
    ],
    vocab: [
      { jp: "かります / おろします / のりかえます", romaji: "karimasu / oroshimasu / norikaemasu", arti: "meminjam / menarik uang / transit ganti kereta" }
    ],
    questions: [
      {
        id: "b16_1", type: "mcq", badge: "Murni Bab 16",
        prompt: "Sambungkan KS-い: 「やすいです」 + 「おいしいです」 → （　　　）、おいしいです。",
        promptRomaji: "yasui + oishii",
        sub: "KS-い disambung dengan mengubah い → くて.",
        options: [
          { jp: "やすいで", romaji: "yasui de" },
          { jp: "やすくて", romaji: "yasukute" },
          { jp: "やすいくて", romaji: "yasuikute" },
          { jp: "やすかって", romaji: "yasukatte" }
        ],
        answer: 1,
        explain: "BENAR: やすくて、おいしいです."
      },
      {
        id: "b16_2", type: "mcq", badge: "Murni Bab 16",
        prompt: "Sambungkan KS-な: 「きれい［な］」 + 「しずかです」 → （　　　　）、しずかです。",
        promptRomaji: "kirei + shizuka",
        sub: "KS-な disambung dengan で.",
        options: [
          { jp: "きれいくて", romaji: "kireikute" },
          { jp: "きれいで", romaji: "kirei de" },
          { jp: "きれいなで", romaji: "kirei na de" },
          { jp: "きれいと", romaji: "kirei to" }
        ],
        answer: 1,
        explain: "BENAR: きれいで、しずかです."
      }
    ]
  }
);

// ==================== TES AKHIR GABUNGAN BAB 1–25 ====================
// Baru di menu Tes Akhir ini soalnya menggabungkan seluruh Bab 1–25 + konjungsi + pemahaman kalimat!
window.FINAL_EXAM_QUESTIONS = [
  { id: "fe_1",  bab: 1,  type: "mcq", badge: "Tes Akhir · Bab 1", prompt: "あの かたは どなたですか。…IMCの サントスさん（　　）。", promptRomaji: "Ano kata wa donata desu ka.", sub: "Penutup kalimat nominal positif sopan.", options: [{ jp: "です", romaji: "desu" }, { jp: "ます", romaji: "masu" }, { jp: "でしたか", romaji: "deshita ka" }, { jp: "の", romaji: "no" }], answer: 0, explain: "Bab 1: Kalimat kata benda ditutup dengan です." },
  { id: "fe_2",  bab: 2,  type: "mcq", badge: "Tes Akhir · Bab 2", prompt: "A: 「その かさは だれの ですか。」 B: 「（　　　　　）。」 (Milik Sdr. Santos)", promptRomaji: "Sono kasa wa dare no desu ka.", sub: "Kepemilikan saat bendanya disingkat.", options: [{ jp: "サントスさんです", romaji: "Santosu-san desu" }, { jp: "サントスさんのです", romaji: "Santosu-san no desu" }, { jp: "サントスさんにです", romaji: "Santosu-san ni desu" }, { jp: "サントスさんのですか", romaji: "Santosu-san no desu ka" }], answer: 1, explain: "Bab 2: Wajib ada の → サントスさんのです." },
  { id: "fe_3",  bab: 3,  type: "mcq", badge: "Tes Akhir · Bab 3", prompt: "エレベーターは （　　　） ですか。…あちらです。", promptRomaji: "Erebeetaa wa ( ___ ) desu ka. ...Achira desu.", sub: "Lihat jawabannya memakai あちら!", options: [{ jp: "だれ", romaji: "dare" }, { jp: "どちら", romaji: "dochira" }, { jp: "いくら", romaji: "ikura" }, { jp: "なに", romaji: "nani" }], answer: 1, explain: "Bab 3: Pasangan tanya untuk あちら adalah どちら." },
  { id: "fe_4",  bab: 4,  type: "mcq", badge: "Tes Akhir · Bab 4", prompt: "きのうの ばん 11じ （　　） ねました。けさは 6じに （　　　　　）。 (Tadi pagi tidak bangun jam 6.)", promptRomaji: "Kinou no ban 11-ji ( _ ) nemashita. Kesa wa 6-ji ni ( _____ ).", sub: "Partikel jam + negatif lampau!", options: [{ jp: "に ・ おきませんでした", romaji: "ni · okimasen deshita" }, { jp: "で ・ おきません", romaji: "de · okimasen" }, { jp: "に ・ おきません", romaji: "ni · okimasen" }, { jp: "を ・ おきませんでした", romaji: "o · okimasen deshita" }], answer: 0, explain: "Bab 4: Waktu jam pakai に, dan negatif lampau pakai おきませんでした." },
  { id: "fe_5",  bab: 5,  type: "mcq", badge: "Tes Akhir · Bab 5", prompt: "らいしゅうの 24か（　　　　　）に ともだち（　） でんしゃ（　） きょうとへ いきます。", promptRomaji: "Tanggal 24 minggu depan pergi ke Kyoto naik kereta bersama teman.", sub: "Bacaan 24日 + partikel bersama + partikel kendaraan!", options: [{ jp: "にじゅうよっか ・ と ・ で", romaji: "nijuuyokka · to · de" }, { jp: "にじゅうよんにち ・ で ・ に", romaji: "nijuuyonnichi · de · ni" }, { jp: "にじゅうよっか ・ で ・ と", romaji: "nijuuyokka · de · to" }, { jp: "はつか ・ と ・ で", romaji: "hatsuka · to · de" }], answer: 0, explain: "Bab 5: 24日 = にじゅうよっか, bersama teman = と, naik kereta = で." },
  { id: "fe_6",  bab: 6,  type: "mcq", badge: "Tes Akhir · Bab 6", prompt: "A: 「しょくどう（　） いっしょに ひるごはんを たべませんか。」 B: 「ええ、（　　　　　）。」", promptRomaji: "Shokudou ( _ ) issho ni hirugohan o tabemasen ka.", sub: "Partikel tempat aksi + menyetujui ajakan!", options: [{ jp: "に ・ たべません", romaji: "ni · tabemasen" }, { jp: "で ・ たべましょう", romaji: "de · tabemashou" }, { jp: "に ・ たべましょう", romaji: "ni · tabemashou" }, { jp: "で ・ たべました", romaji: "de · tabemashita" }], answer: 1, explain: "Bab 6: Tempat aksi aktif = で, menyetujui ajakan ～ませんか = ～ましょう." },
  { id: "fe_7",  bab: 7,  type: "mcq", badge: "Tes Akhir · Bab 7", prompt: "わたしは ともだち（　） この ほんを （　　　　　）。 (Saya menerima buku ini dari teman.)", promptRomaji: "Watashi wa tomodachi ( _ ) kono hon o ( _____ ).", sub: "Menerima dari teman.", options: [{ jp: "に ・ もらいました", romaji: "ni · moraimashita" }, { jp: "で ・ あげました", romaji: "de · agemashita" }, { jp: "を ・ もらいました", romaji: "o · moraimashita" }, { jp: "に ・ あげました", romaji: "ni · agemashita" }], answer: 0, explain: "Bab 7: Menerima dari seseorang = [Orang] に もらいました." },
  { id: "fe_8",  bab: 8,  type: "mcq", badge: "Tes Akhir · Bab 8", prompt: "この カメラは あまり （　　　　　）。 (Kamera ini tidak terlalu mahal. — たかい)", promptRomaji: "Kono kamera wa amari ( _____ ).", sub: "あまり wajib diikuti bentuk negatif KS-い!", options: [{ jp: "たかいです", romaji: "takai desu" }, { jp: "たかくないです", romaji: "takakunai desu" }, { jp: "たかいじゃありません", romaji: "takai ja arimasen" }, { jp: "たかかったです", romaji: "takakatta desu" }], answer: 1, explain: "Bab 8: あまり + negatif KS-い = たかくないです." },
  { id: "fe_9",  bab: 9,  type: "mcq", badge: "Tes Akhir · Bab 9", prompt: "わたしは りょうり（　） すきです（　　）、まいにち じぶんで つくります。", promptRomaji: "Karena saya suka memasak, setiap hari masak sendiri.", sub: "Partikel objek すき + konjungsi alasan 'karena'!", options: [{ jp: "を ・ から", romaji: "o · kara" }, { jp: "が ・ から", romaji: "ga · kara" }, { jp: "が ・ が", romaji: "ga · ga" }, { jp: "に ・ から", romaji: "ni · kara" }], answer: 1, explain: "Bab 9: すき wajib pakai が, dan alasan 'karena' pakai から." },
  { id: "fe_10", bab: 10, type: "mcq", badge: "Tes Akhir · Bab 10", prompt: "つくえの （　　）に かばん（　） あります。 (Di BAWAH meja ada tas.)", promptRomaji: "Tsukue no ( __ ) ni kaban ( _ ) arimasu.", sub: "Kosakata 'bawah' + partikel あります!", options: [{ jp: "うえ ・ を", romaji: "ue · o" }, { jp: "した ・ が", romaji: "shita · ga" }, { jp: "うえ ・ が", romaji: "ue · ga" }, { jp: "した ・ を", romaji: "shita · o" }], answer: 1, explain: "Bab 10: Bawah = した, dan keberadaan あります wajib pakai が." },
  { id: "fe_11", bab: 11, type: "mcq", badge: "Tes Akhir · Bab 11", prompt: "へやに がくせいが 4にん（　　　） います。りんごを 3つ（　　　） たべました。", promptRomaji: "Bacaan untuk 4人 (4 orang) dan 3つ (3 buah).", sub: "Hati-hati pengecualian kata bantu bilangan!", options: [{ jp: "よにん ・ みっつ", romaji: "yonin · mittsu" }, { jp: "よんにん ・ さんつ", romaji: "yonnin · santsu" }, { jp: "よにん ・ さんつ", romaji: "yonin · santsu" }, { jp: "しにん ・ みっつ", romaji: "shinin · mittsu" }], answer: 0, explain: "Bab 11: 4人 = よにん, 3つ = みっつ." },
  { id: "fe_12", bab: 13, type: "mcq", badge: "Tes Akhir · Bab 13", prompt: "なつやすみに にほんへ （　　　　　）。 (Saat liburan musim panas saya ingin pergi ke Jepang.)", promptRomaji: "Natsuyasumi ni Nihon e ( _____ ).", sub: "Rumus keinginan aksi dari いきます.", options: [{ jp: "いきますたいです", romaji: "ikimasutai desu" }, { jp: "いきたいです", romaji: "ikitai desu" }, { jp: "いくたいです", romaji: "ikutai desu" }, { jp: "いがほしいです", romaji: "i ga hoshii desu" }], answer: 1, explain: "Bab 13: Coret ます + たいです = いきたいです." },
  { id: "fe_13", bab: 17, type: "mcq", badge: "Tes Akhir · Bab 17", prompt: "あしたは やすみですから、かいしゃへ （　　　　　）。 (Karena besok libur, TIDAK PERLU datang ke kantor.)", promptRomaji: "Ashita wa yasumi desu kara, kaisha e ( _____ ).", sub: "Gabungan alasan から + rumus 'tidak perlu datang'!", options: [{ jp: "こなければ なりません", romaji: "konakereba narimasen" }, { jp: "こなくても いいです", romaji: "konakute mo ii desu" }, { jp: "きなくても いいです", romaji: "kinakute mo ii desu" }, { jp: "こないで ください", romaji: "konaide kudasai" }], answer: 1, explain: "Bab 17: きます → こない → こなくても いいです (tidak perlu datang)." },
  { id: "fe_14", bab: 18, type: "mcq", badge: "Tes Akhir · Bab 18", prompt: "ねる （　　　）、にっきを かきます。わたしの しゅみは ほんを よむ （　　）です。", promptRomaji: "SEBELUM tidur menulis buku harian. Hobi saya adalah membaca buku.", sub: "Kata 'sebelum' + pembenda hobi!", options: [{ jp: "まえに ・ こと", romaji: "mae ni · koto" }, { jp: "とき ・ もの", romaji: "toki · mono" }, { jp: "まえに ・ もの", romaji: "mae ni · mono" }, { jp: "てから ・ こと", romaji: "te kara · koto" }], answer: 0, explain: "Bab 18: Sebelum = V-る まえに, dan pembenda hobi/kemampuan = こと (bukan もの)." },
  { id: "fe_15", bab: 19, type: "mcq", badge: "Tes Akhir · Bab 19", prompt: "だんだん （　　　） なりましたね。わたしは まだ にほんの おさけを （　　　） ことが ありません。", promptRomaji: "Lama-lama menjadi panas ya. Saya belum pernah minum sake Jepang.", sub: "あつい + なります dan Bentuk -Ta dari のみます!", options: [{ jp: "あつい ・ のった", romaji: "atsui · notta" }, { jp: "あつく ・ のんだ", romaji: "atsuku · nonda" }, { jp: "あつく ・ のった", romaji: "atsuku · notta" }, { jp: "あつに ・ のんだ", romaji: "atsu ni · nonda" }], answer: 1, explain: "Bab 19: あつい → あつく なりました, dan のみます → のんだ ことが ありません." },
  { id: "fe_16", bab: 20, type: "mcq", badge: "Tes Akhir · Bab 20", prompt: "A: 「きのう べんきょうした？」 B: 「（　　　）、（　　　　　）。」 (Tidak, kemarin tidak belajar.)", promptRomaji: "Dialog kasual Bentuk Biasa!", sub: "'Tidak' kasual (2 huruf u) + negatif lampau biasa dari します.", options: [{ jp: "うん ・ しなかった", romaji: "un · shinakatta" }, { jp: "ううん ・ しなかった", romaji: "uun · shinakatta" }, { jp: "ううん ・ しない", romaji: "uun · shinai" }, { jp: "うん ・ しないだった", romaji: "un · shinaidatta" }], answer: 1, explain: "Bab 20: ううん = Tidak, dan क्योंकि きのう (lampau) → しなかった." },
  { id: "fe_17", bab: 21, type: "mcq", badge: "Tes Akhir · Bab 21", prompt: "ミラーさんは 「らいしゅう にほんへ いく」 と （　　　　　）。", promptRomaji: "Sdr. Miller BERKATA bahwa minggu depan pergi ke Jepang.", sub: "Kutipan ucapan orang lain.", options: [{ jp: "おもいました", romaji: "omoimashita" }, { jp: "いいました", romaji: "iimashita" }, { jp: "ありました", romaji: "arimashita" }, { jp: "ききました", romaji: "kikimashita" }], answer: 1, explain: "Bab 21: ～と いいました = berkata bahwa..." },
  { id: "fe_18", bab: 22, type: "mcq", badge: "Tes Akhir · Bab 22", prompt: "あそこで でんわを （　　　　　） ひとは だれですか。 (Siapa orang yang SEDANG menelepon di sana?)", promptRomaji: "Asoko de denwa o ( _____ ) hito wa dare desu ka.", sub: "Anak kalimat penjelas benda yang SEDANG berlangsung (bentuk biasa dari かけています).", options: [{ jp: "かける", romaji: "kakeru" }, { jp: "かけている", romaji: "kakete iru" }, { jp: "かけているの", romaji: "kakete iru no" }, { jp: "かけています", romaji: "kakete imasu" }], answer: 1, explain: "Bab 22: Sedang berlangsung di depan kata benda ひと = かけている ひと (tanpa の!)." },
  { id: "fe_19", bab: 23, type: "mcq", badge: "Tes Akhir · Bab 23", prompt: "ひまな （　　）、うちへ あそびに きて ください。この みちを まっすぐ いく（　）、（　　）に あります。", promptRomaji: "KETIKA senggang, mainlah ke rumah. KALAU jalan lurus di jalan ini, ada di sebelah KANAN.", sub: "Gabungan Bab 23: 'ketika', 'kalau pasti', dan 'kanan'!", options: [{ jp: "とき ・ と ・ みぎ", romaji: "toki · to · migi" }, { jp: "まえに ・ と ・ ひだり", romaji: "mae ni · to · hidari" }, { jp: "とき ・ から ・ ひだり", romaji: "toki · kara · hidari" }, { jp: "まえに ・ たら ・ みぎ", romaji: "mae ni · tara · migi" }], answer: 0, explain: "Bab 23: Ketika = とき, petunjuk arah otomatis = と, kanan = みぎ." },
  { id: "fe_20", bab: 24, type: "mcq", badge: "Tes Akhir · Bab 24", prompt: "ははは わたしに セーターを おくって （　　　　　）。わたしは おとうとに かんじを おしえて （　　　　　）。", promptRomaji: "Ibu mengirimkan sweter untuk SAYA. Saya mengajari adik kanji.", sub: "Bedakan: Orang → Saya vs Saya → Orang!", options: [{ jp: "くれました ・ あげました", romaji: "kuremashita · agemashita" }, { jp: "もらいました ・ くれました", romaji: "moraimashita · kuremashita" }, { jp: "あげました ・ もらいました", romaji: "agemashita · moraimashita" }, { jp: "くれました ・ もらいました", romaji: "kuremashita · moraimashita" }], answer: 0, explain: "Bab 24: Ibu (subjek) memberi ke saya = くれました. Saya (subjek) memberi ke adik = あげました." },
  { id: "fe_21", bab: 25, type: "mcq", badge: "Tes Akhir · Bab 25", prompt: "じかんが （　　　　）、えいがを みに いきます。おかねが （　　　　）、たのしいです。", promptRomaji: "KALAU ada waktu, pergi nonton film. WALAUPUN tidak punya uang, tetap senang.", sub: "Gabungan Bab 25: あります → ～たら dan ない → ～ても!", options: [{ jp: "あったら ・ なくても", romaji: "attara · nakute mo" }, { jp: "あるたら ・ ないでも", romaji: "arutara · naidemo" }, { jp: "あったら ・ ないから", romaji: "attara · nai kara" }, { jp: "あっても ・ なかったら", romaji: "atte mo · nakattara" }], answer: 0, explain: "Bab 25: Kalau ada = あったら (dari あった + ら). Walaupun tidak ada = なくても." }
];
