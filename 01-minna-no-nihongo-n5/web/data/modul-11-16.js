/* MODUL LENGKAP MINNA NO NIHONGO BAB 11 – 16
 * Lengkap dengan Rumus Cepat (cheatSheet) berbeda di setiap bab, materi utuh silabus MNN, kosakata lengkap, & 6 soal murni per bab.
 */
window.MNN_MODULES = window.MNN_MODULES || [];
window.MNN_MODULES.push(
{
  "num": 11,
  "zone": "amber",
  "oldScore": "2/4",
  "title": "Kata Bantu Bilangan (～つ・～にん・～まい・～だい), Durasi, & だけ",
  "shortBug": "Zona Kuning (2/4): Salah hitungan 3 buah (みっつ, bukan さんつ) di Soal 41 dan jumlah orang (なんにん) di Soal 42.",
  "bugs": [
    {
      "soal": "Soal 41",
      "salah": "Menjawab さんつ untuk 3 buah",
      "benar": "みっつ (mittsu)",
      "kenapa": "Seri 1–10 benda umum memakai bacaan asli Jepang: ひとつ, ふたつ, みっつ..."
    },
    {
      "soal": "Soal 42",
      "salah": "Salah memilih kata tanya jumlah orang",
      "benar": "なんにん (berapa orang)",
      "kenapa": "Orang dihitung dengan ～にん (kecuali 1=ひとり, 2=ふたり)."
    }
  ],
  "cheatSheet": {
    "title": "Rumus Cepat Bab 11: Tabel Hitungan 1–10 (～つ), Orang, Durasi, & だけ",
    "takeaway": "Kata bilangan ditaruh SEBELUM kata kerja TANPA partikel! (りんごを みっつ かいました)",
    "tables": [
      {
        "heading": "1. Hitungan Benda Umum 1–10 (～つ) — WAJIB HAFAL MATI!",
        "headers": [
          "1 – 5",
          "Bacaan",
          "6 – 10 & Tanya",
          "Bacaan"
        ],
        "rows": [
          [
            "1つ / 2つ",
            "ひとつ / ふたつ",
            "6つ / 7つ",
            "むっつ / ななつ"
          ],
          [
            "3つ / 4つ",
            "みっつ / よっつ",
            "8つ / 9つ",
            "やっつ / ここのつ"
          ],
          [
            "5つ",
            "いつつ",
            "10 / Berapa?",
            "とお (TANPA つ!) / いくつ"
          ]
        ]
      },
      {
        "heading": "2. Satuan Hitung Lainnya, Durasi, Frekuensi, & だけ",
        "headers": [
          "Satuan / Pola",
          "Aturan & Pengecualian",
          "Contoh"
        ],
        "rows": [
          [
            "～にん (Orang)",
            "1=ひとり, 2=ふたり, 4=よにん, Tanya=なんにん",
            "がくせいが よにん います。"
          ],
          [
            "～まい / ～だい / ～かい",
            "まい (tipis: kertas/kemeja) · だい (mesin/mobil) · かい (kali: 1=いっかい, 6=ろっかい, 8=はっかい, 10=じゅっかい)",
            "きってを 5まい かいました。"
          ],
          [
            "Durasi (どのくらい)",
            "～じかん (jam), ～しゅうかん (minggu), ～かげつ (bulan), ～ねん (tahun) — TANPA に!",
            "にほんに 1ねん います。 / 3じかん かかります。"
          ],
          [
            "Frekuensi & だけ",
            "[Waktu] に [Jumlah] かい | [Jumlah/N] + だけ (hanya)",
            "1かげつに 2かい / やすみは にちようびだけです。"
          ]
        ]
      }
    ]
  },
  "grammar": [
    {
      "num": "POIN 01",
      "title": "Posisi Kata Bantu Bilangan dalam Kalimat",
      "formula": "[Objek] を + [Kata Bilangan] + V-ます   (TANPA partikel setelah kata bilangan!)",
      "explain": "Berbeda dengan bahasa Indonesia ('membeli 3 buah apel'), dalam bahasa Jepang kata bilangan diletakkan SETELAH partikel objek `を/が` dan tepat sebelum kata kerja, tanpa tambahan partikel apa pun.",
      "examples": [
        {
          "jp": "りんごを みっつ かいました。",
          "romaji": "Ringo o mittsu kaimashita.",
          "id": "Membeli 3 buah apel."
        },
        {
          "jp": "がっこうに がいこくじんの せんせいが ふたり います。",
          "romaji": "Gakkou ni gaikokujin no sensei ga futari imasu.",
          "id": "Di sekolah ada 2 orang guru asing."
        }
      ],
      "trap": "Jangan menulis 'みっつを かいました' ❌ bila bendanya disebut di depan! Langsung 'りんごを みっつ かいました' ✓.",
      "formulaRomaji": "[Objek] o + [Kata Bilangan] + V-masu",
      "formulaId": "Melakukan V terhadap sejumlah [Kata Bilangan] [Objek] (tanpa partikel setelah satuan)"
    },
    {
      "num": "POIN 02",
      "title": "Durasi Waktu (どのくらい) & かかります (Memakan Waktu/Biaya)",
      "formula": "どのくらい + V-ますか   |   [Tempat 1] から [Tempat 2] まで [Waktu/Uang] かかります",
      "explain": "Untuk menanyakan lamanya waktu gunakan `どのくらい` ('berapa lama'). Durasi waktu (`2じかん`, `3しゅうかん`, `6かげつ`, `1ねん`) TIDAK memakai partikel `に`.",
      "examples": [
        {
          "jp": "A：くにで どのくらい にほんごを べんきょうしましたか。\n\nB：3かげつ べんきょうしました。",
          "romaji": "A: Kuni de donokurai nihongo o benkyou shimashita ka.\nB: Sankagetsu benkyou shimashita.",
          "id": "Berapa lama belajar bahasa Jepang di negara asal? ...3 bulan."
        },
        {
          "jp": "東京[とうきょう]から 大阪[おおさか]まで しんかんせんで 2じかんはん かかります。",
          "romaji": "Toukyou kara Oosaka made shinkansen de nijikan-han kakarimasu.",
          "id": "Dari Tokyo ke Osaka naik Shinkansen memakan waktu 2,5 jam."
        }
      ],
      "trap": "Bedakan: `2じ に` (pada pukul 2 — titik waktu, pakai に) vs `2じかん` (selama 2 jam — durasi, TANPA に)!",
      "formulaRomaji": "Donokurai + V-masu ka   |   [Tempat 1] kara [Tempat 2] made [Waktu/Uang] kakarimasu",
      "formulaId": "Berapa lama melakukan V?   |   Dari [Tempat 1] ke [Tempat 2] memakan waktu/biaya ~"
    },
    {
      "num": "POIN 03",
      "title": "Frekuensi (Waktu に Jumlah かい) & Pembatas だけ (Hanya)",
      "formula": "[Kurun Waktu] に [Jumlah] かい V-ます   |   [Kata Bilangan / N] だけ",
      "explain": "Partikel `に` di sini berarti 'dalam / per' (`1しゅうかんに 2かい` = 2 kali dalam seminggu). Kata `だけ` berarti 'hanya / saja' dan kalimatnya tetap berbentuk positif.",
      "examples": [
        {
          "jp": "1かげつに 1かい（いっかい） えいがを みます。",
          "romaji": "Ikkagetsu ni ikkai eiga o mimasu.",
          "id": "Menonton film 1 kali sebulan."
        },
        {
          "jp": "やすみは にちようびだけです。",
          "romaji": "Yasumi wa nichiyoubi dake desu.",
          "id": "Liburnya hanya hari Minggu."
        }
      ],
      "trap": "`だけ` dipakai dengan kalimat POSITIF (`ひとつだけ あります`), berbeda dengan `しか～ません` di level lanjut.",
      "formulaRomaji": "[Kurun Waktu] ni [Jumlah] kai V-masu   |   [Kata Bilangan / N] dake",
      "formulaId": "Dalam [Kurun Waktu] melakukan V sebanyak [Jumlah] kali   |   Hanya [N / Jumlah]"
    }
  ],
  "vocab": [
    {
      "jp": "かかります",
      "romaji": "kakarimasu",
      "arti": "memakan waktu / memakan biaya"
    },
    {
      "jp": "います（こどもが～）",
      "romaji": "imasu (kodomo ga)",
      "arti": "mempunyai (anak/keluarga hidup)"
    },
    {
      "jp": "ひとつ・ふたつ・みっつ・よっつ・いつつ",
      "romaji": "hitotsu / futatsu / mittsu / yottsu / itsutsu",
      "arti": "1 / 2 / 3 / 4 / 5 buah"
    },
    {
      "jp": "むっつ・ななつ・やっつ・ここのつ・とお",
      "romaji": "muttsu / nanatsu / yattsu / kokonotsu / too",
      "arti": "6 / 7 / 8 / 9 / 10 buah"
    },
    {
      "jp": "いくつ / ひとり / ふたり / ～にん",
      "romaji": "ikutsu / hitori / futari / ~nin",
      "arti": "berapa buah / 1 orang / 2 orang / ~ orang"
    },
    {
      "jp": "～だい / ～まい / ～かい",
      "romaji": "~dai / ~mai / ~kai",
      "arti": "unit mesin-kendaraan / lembar benda tipis / ~ kali"
    },
    {
      "jp": "きって / はがき / ふうとう",
      "romaji": "kitte / hagaki / fuutou",
      "arti": "perangko / kartu pos / amplop"
    },
    {
      "jp": "りょうしん / きょうだい / あに / あね / おとうと / いもうと",
      "romaji": "ryoushin / kyoudai / ani / ane / otouto / imouto",
      "arti": "orang tua / saudara kandung / kakak lk / kakak pr / adik lk / adik pr (keluarga sendiri)"
    },
    {
      "jp": "～じかん / ～しゅうかん / ～かげつ / ～ねん",
      "romaji": "~jikan / ~shuukan / ~kagetsu / ~nen",
      "arti": "durasi: ~ jam / ~ minggu / ~ bulan / ~ tahun"
    },
    {
      "jp": "どのくらい / ぜんぶで / ～だけ / ～ぐらい",
      "romaji": "donokurai / zenbu de / ~dake / ~gurai",
      "arti": "berapa lama / semuanya total / hanya ~ / kira-kira ~"
    }
  ],
  "questions": [
    {
      "id": "b11_1",
      "type": "mcq",
      "badge": "Perbaikan Soal 41",
      "prompt": "みかんを （　　　） かいました。 (Membeli 3 buah jeruk.)",
      "promptRomaji": "Mikan o ( ___ ) kaimashita.",
      "sub": "Hitungan 3 buah.",
      "options": [
        {
          "jp": "さんつ",
          "romaji": "santsu"
        },
        {
          "jp": "みっつ",
          "romaji": "mittsu"
        },
        {
          "jp": "よっつ",
          "romaji": "yottsu"
        },
        {
          "jp": "むっつ",
          "romaji": "muttsu"
        }
      ],
      "answer": 1,
      "explain": "BENAR: みっつ (3 buah)."
    },
    {
      "id": "b11_2",
      "type": "mcq",
      "badge": "Perbaikan Soal 42",
      "prompt": "A：かぞくは （　　　　） ですか。\n\nB：4にんです。 (Keluarga Anda berapa orang?)",
      "promptRomaji": "A: Kazoku wa ( ____ ) desu ka.",
      "sub": "Kata tanya jumlah orang.",
      "options": [
        {
          "jp": "いくつ",
          "romaji": "ikutsu"
        },
        {
          "jp": "なんまい",
          "romaji": "nanmai"
        },
        {
          "jp": "なんにん",
          "romaji": "nannin"
        },
        {
          "jp": "どのくらい",
          "romaji": "donokurai"
        }
      ],
      "answer": 2,
      "explain": "BENAR: なんにん (berapa orang)."
    },
    {
      "id": "b11_3",
      "type": "mcq",
      "badge": "Murni Bab 11 · Satuan Tipis",
      "prompt": "80えんの きってを 5（　　） ください。 (Minta perangko 80 yen 5 lembar.)",
      "promptRomaji": "80-en no kitte o 5-( __ ) kudasai.",
      "sub": "Perangko adalah benda tipis.",
      "options": [
        {
          "jp": "だい",
          "romaji": "dai"
        },
        {
          "jp": "まい",
          "romaji": "mai"
        },
        {
          "jp": "にん",
          "romaji": "nin"
        },
        {
          "jp": "かい",
          "romaji": "kai"
        }
      ],
      "answer": 1,
      "explain": "BENAR: まい (satuan benda tipis seperti kertas, perangko, piring, kemeja)."
    },
    {
      "id": "b11_4",
      "type": "mcq",
      "badge": "Murni Bab 11 · Frekuensi",
      "prompt": "1しゅうかん （　　） 2かい テニスを します。",
      "promptRomaji": "Isshuukan ( _ ) nikai tenisu o shimasu.",
      "sub": "2 kali DALAM 1 minggu.",
      "options": [
        {
          "jp": "に",
          "romaji": "ni"
        },
        {
          "jp": "で",
          "romaji": "de"
        },
        {
          "jp": "を",
          "romaji": "o"
        },
        {
          "jp": "と",
          "romaji": "to"
        }
      ],
      "answer": 0,
      "explain": "BENAR: 1しゅうかんに 2かい."
    },
    {
      "id": "b11_5",
      "type": "mcq",
      "badge": "Murni Bab 11 · Durasi",
      "prompt": "A：うちから えきまで あるいて （　　　　　） かかりますか。\n\nB：15ふんぐらいです。",
      "promptRomaji": "A: Uchi kara eki made aruite ( _____ ) kakarimasu ka.",
      "sub": "Menanyakan berapa lama waktu yang dibutuhkan.",
      "options": [
        {
          "jp": "いくつ",
          "romaji": "ikutsu"
        },
        {
          "jp": "いくら",
          "romaji": "ikura"
        },
        {
          "jp": "どのくらい",
          "romaji": "donokurai"
        },
        {
          "jp": "なんかい",
          "romaji": "nankai"
        }
      ],
      "answer": 2,
      "explain": "BENAR: どのくらい かかりますか (memakan waktu berapa lama)."
    },
    {
      "id": "b11_6",
      "type": "input",
      "badge": "Latihan Ketik",
      "prompt": "Ketik bacaan bahasa Jepang untuk 「2 orang」!",
      "promptRomaji": "2 orang = ?",
      "sub": "Pengecualian ～にん (Hiragana atau Romaji).",
      "placeholder": "Ketik: ふたり atau futari",
      "accepted": [
        "ふたり",
        "futari"
      ],
      "displayAnswer": "ふたり (futari)",
      "explain": "BENAR: 1 orang = ひとり, 2 orang = ふたり!"
    }
  ]
},
{
  "num": 12,
  "zone": "green",
  "oldScore": "3/4",
  "title": "Kala Lampau Kata Sifat/Benda & Perbandingan (より・どちら・いちばん)",
  "shortBug": "Skor tes lama 3/4. Materi lengkap: lampau KS-い (～かったです), perbandingan 2 benda (より/どちら), dan superlatif (いちばん).",
  "bugs": [
    {
      "soal": "Soal 45–48",
      "salah": "Sudah 3/4 benar",
      "benar": "KS-い lampau: ～かったです / ～くなかったです | A は B より ～です | のなかで…いちばん",
      "kenapa": "Pastikan tidak salah pada lampau negatif KS-い (～くなかったです) dan いい → よかったです!"
    }
  ],
  "cheatSheet": {
    "title": "Rumus Cepat Bab 12: Kala Lampau Kata Sifat & 3 Rumus Perbandingan",
    "takeaway": "KS-い Lampau: coret い + かったです / くなかったです. Perbandingan 2 = より/どちら, 3+ = いちばん!",
    "tables": [
      {
        "heading": "1. Tabel Kala Lampau Kata Benda, KS-な, & KS-い",
        "headers": [
          "Jenis Kata",
          "Lampau Positif (+)",
          "Lampau Negatif (-)"
        ],
        "rows": [
          [
            "Kata Benda & KS-な",
            "あめ でした / しずか でした",
            "あめ じゃ ありませんでした"
          ],
          [
            "Kata Sifat-い",
            "あつかった です (coret い + かった)",
            "あつくなかった です (coret い + くなかった)"
          ],
          [
            "Pengecualian いい",
            "よかった です (BUKAN いかった!)",
            "よくなかった です"
          ]
        ]
      },
      {
        "heading": "2. Tiga Pola Perbandingan Bab 12",
        "headers": [
          "Jumlah",
          "Rumus",
          "Contoh"
        ],
        "rows": [
          [
            "2 Hal (Pernyataan)",
            "N1 は N2 より [KS] です",
            "この くるまは あの くるまより おおきいです。"
          ],
          [
            "2 Hal (Pilihan Tanya)",
            "N1 と N2 と どちらが [KS] ですか → N1 の ほうが [KS] です",
            "サッカーと やきゅうと どちらが おもしろいですか。"
          ],
          [
            "≥3 Hal (Superlatif)",
            "[Kategori] の なかで [Tanya] が いちばん [KS] ですか",
            "1ねんで いつが いちばん さむいですか。"
          ]
        ]
      }
    ]
  },
  "grammar": [
    {
      "num": "POIN 01",
      "title": "Kala Lampau Kata Benda, KS-な, & KS-い",
      "formula": "N / KS-な: ～でした / ～じゃありませんでした   |   KS-い: ～かったです / ～くなかったです",
      "explain": "Pada Kata Benda dan KS-な, yang berubah lampau adalah です → `でした`. Namun pada KS-い, kata sifatnya SENDIRI yang berubah lampau (`い → かった`, `くない → くなかった`), sedangkan `です` di belakang tetap `です`!",
      "examples": [
        {
          "jp": "きのうの しけんは かんたんでした。",
          "romaji": "Kinou no shiken wa kantan deshita.",
          "id": "Ujian kemarin mudah (かんたん = KS-な)."
        },
        {
          "jp": "きのうの パーティーは あまり たのしくなかったです。",
          "romaji": "Kinou no paatii wa amari tanoshikunakatta desu.",
          "id": "Pesta kemarin tidak terlalu menyenangkan."
        }
      ],
      "trap": "Jangan pernah menulis 'たのしいでした' ❌! Wajib 'たのしかったです' ✓.",
      "formulaRomaji": "N / KS-na: ~deshita / ~ja arimasen deshita   |   KS-i: ~katta desu / ~kunakatta desu",
      "formulaId": "Bentuk lampau (+/-) untuk Kata Benda, Kata Sifat-na, dan Kata Sifat-i"
    },
    {
      "num": "POIN 02",
      "title": "Membandingkan Dua Hal: より & どちらが ～ ですか",
      "formula": "A は B より [KS] です   |   A と B と どちらが [KS] ですか → A の ほうが [KS] です",
      "explain": "`より` berarti 'daripada' (A lebih ~ daripada B). Saat menanyakan mana yang lebih unggul di antara DUA pilihan, wajib memakai `どちら` (bukan どれ!), dan dijawab dengan `[Pilihan] の ほうが ...` (atau `どちらも ...` = dua-duanya).",
      "examples": [
        {
          "jp": "ひこうきは でんしゃより はやいです。",
          "romaji": "Hikouki wa densha yori hayai desu.",
          "id": "Pesawat lebih cepat daripada kereta."
        },
        {
          "jp": "A：コーヒーと こうちゃと どちらが すきですか。\n\nB：コーヒーの ほうが すきです。",
          "romaji": "A: Koohii to koucha to dochira ga suki desu ka.\nB: Koohii no hou ga suki desu.",
          "id": "Kopi dan teh hitam lebih suka mana? ...Lebih suka kopi."
        }
      ],
      "trap": "Membandingkan 2 hal SELALU pakai `どちら`, walaupun bendanya bukan tempat!",
      "formulaRomaji": "A wa B yori [KS] desu   |   A to B to dochira ga [KS] desu ka → A no hou ga [KS] desu",
      "formulaId": "A lebih [KS] daripada B   |   Antara A dan B mana lebih [KS]? → A lebih [KS]"
    },
    {
      "num": "POIN 03",
      "title": "Superlatif (Paling ~): [Kategori] の なかで … が いちばん [KS] です",
      "formula": "[Kelompok] の なかで なに／どこ／だれ／いつ が いちばん [KS] ですか",
      "explain": "Sesuaikan kata tanyanya dengan isi kelompok: benda/makanan/olahraga pakai `なに`, tempat/negara pakai `どこ`, orang pakai `だれ`, musim/bulan pakai `いつ` (khusus waktu seperti `1ねんで`, kata `のなかで` tidak dipakai, cukup `で`).",
      "examples": [
        {
          "jp": "A：にほんりょうりの なかで なにが いちばん おいしいですか。\n\nB：てんぷらが いちばん おいしいです。",
          "romaji": "A: Nihon ryouri no naka de nani ga ichiban oishii desu ka.\nB: Tenpura ga ichiban oishii desu.",
          "id": "Di antara masakan Jepang apa yang paling enak? ...Tempura paling enak."
        }
      ],
      "trap": "Subjek yang 'paling' di depan いちばん ditandai dengan partikel `が`!",
      "formulaRomaji": "[Kelompok] no naka de nani / doko / dare / itsu ga ichiban [KS] desu ka",
      "formulaId": "Di antara [Kelompok], apa / mana / siapa / kapan yang paling [KS]?"
    }
  ],
  "vocab": [
    {
      "jp": "かんたん［な］ / ひま［な］",
      "romaji": "kantan / hima",
      "arti": "mudah, gampang / senggang (KS-な)"
    },
    {
      "jp": "ちかい / とおい / はやい / おそい",
      "romaji": "chikai / tooi / hayai / osoi",
      "arti": "dekat / jauh / cepat / lambat (KS-い)"
    },
    {
      "jp": "おおい（ひとが～） / すくない（ひとが～）",
      "romaji": "ooi / sukunai",
      "arti": "banyak (orang) / sedikit (orang)"
    },
    {
      "jp": "あたたかい / すずしい / あまい / からい / おもい / かるい",
      "romaji": "atatakai / suzushii / amai / karai / omoi / karui",
      "arti": "hangat / sejuk / manis / pedas / berat / ringan (KS-い)"
    },
    {
      "jp": "きせつ / はる / なつ / あき / ふゆ",
      "romaji": "kisetsu / haru / natsu / aki / fuyu",
      "arti": "musim / semi / panas / gugur / dingin"
    },
    {
      "jp": "てんき / あめ / ゆき / くもり",
      "romaji": "tenki / ame / yuki / kumori",
      "arti": "cuaca / hujan / salju / mendung"
    },
    {
      "jp": "より / ～のほうが / どちら / どちらも / いちばん / ずっと",
      "romaji": "yori / ~no hou ga / dochira / dochira mo / ichiban / zutto",
      "arti": "daripada / lebih ~ / yang mana (dari 2) / dua-duanya / paling / jauh lebih ~"
    }
  ],
  "questions": [
    {
      "id": "b12_1",
      "type": "mcq",
      "badge": "Murni Bab 12 · Lampau KS-い",
      "prompt": "きのうは てんきが （　　　　　）。 (Kemarin cuacanya bagus. — いい)",
      "promptRomaji": "Kinou wa tenki ga ( _____ ).",
      "sub": "Lampau positif dari pengecualian いいです.",
      "options": [
        {
          "jp": "いいでした",
          "romaji": "ii deshita"
        },
        {
          "jp": "いかったです",
          "romaji": "ikatta desu"
        },
        {
          "jp": "よかったです",
          "romaji": "yokatta desu"
        },
        {
          "jp": "よいでした",
          "romaji": "yoi deshita"
        }
      ],
      "answer": 2,
      "explain": "BENAR: よかったです!"
    },
    {
      "id": "b12_2",
      "type": "mcq",
      "badge": "Murni Bab 12 · Negatif Lampau",
      "prompt": "せんしゅうは あまり （　　　　　）。 (Minggu lalu tidak terlalu sibuk. — いそがしい)",
      "promptRomaji": "Senshuu wa amari ( _____ ).",
      "sub": "Negatif LAMPAU KS-い.",
      "options": [
        {
          "jp": "いそがしくなかったです",
          "romaji": "isogashikunakatta desu"
        },
        {
          "jp": "いそがしくないでした",
          "romaji": "isogashikunai deshita"
        },
        {
          "jp": "いそがしかったです",
          "romaji": "isogashikatta desu"
        },
        {
          "jp": "いそがしじゃありませんでした",
          "romaji": "isogashija arimasen deshita"
        }
      ],
      "answer": 0,
      "explain": "BENAR: いそがしくなかったです (coret い + くなかったです)."
    },
    {
      "id": "b12_3",
      "type": "mcq",
      "badge": "Murni Bab 12 · より",
      "prompt": "ロシアは 日本[にほん] （　　） ずっと おおきいです。 (Rusia jauh lebih besar daripada Jepang.)",
      "promptRomaji": "Roshia wa Nihon ( __ ) zutto ookii desu.",
      "sub": "Kata pembanding 'daripada'.",
      "options": [
        {
          "jp": "から",
          "romaji": "kara"
        },
        {
          "jp": "より",
          "romaji": "yori"
        },
        {
          "jp": "まで",
          "romaji": "made"
        },
        {
          "jp": "ほど",
          "romaji": "hodo"
        }
      ],
      "answer": 1,
      "explain": "BENAR: 日本[にほん]より (daripada Jepang)."
    },
    {
      "id": "b12_4",
      "type": "mcq",
      "badge": "Murni Bab 12 · 2 Pilihan",
      "prompt": "なつと ふゆと （　　　）が すきですか。 (Musim panas dan musim dingin lebih suka yang mana?)",
      "promptRomaji": "Natsu to fuyu to ( ___ ) ga suki desu ka.",
      "sub": "Memilih di antara 2 hal.",
      "options": [
        {
          "jp": "どれ",
          "romaji": "dore"
        },
        {
          "jp": "どちら",
          "romaji": "dochira"
        },
        {
          "jp": "なに",
          "romaji": "nani"
        },
        {
          "jp": "どこ",
          "romaji": "doko"
        }
      ],
      "answer": 1,
      "explain": "BENAR: どちらが すきですか."
    },
    {
      "id": "b12_5",
      "type": "mcq",
      "badge": "Murni Bab 12 · Superlatif",
      "prompt": "スポーツの なかで サッカーが （　　　　） おもしろいです。",
      "promptRomaji": "Supootsu no naka de sakkaa ga ( ____ ) omoshiroi desu.",
      "sub": "Paling menarik.",
      "options": [
        {
          "jp": "より",
          "romaji": "yori"
        },
        {
          "jp": "いちばん",
          "romaji": "ichiban"
        },
        {
          "jp": "どちら",
          "romaji": "dochira"
        },
        {
          "jp": "ずっと",
          "romaji": "zutto"
        }
      ],
      "answer": 1,
      "explain": "BENAR: いちばん (paling)."
    },
    {
      "id": "b12_6",
      "type": "input",
      "badge": "Latihan Ketik",
      "prompt": "Ubah 「さむいです」 menjadi bentuk LAMPAU POSITIF sopan!",
      "promptRomaji": "samui desu → kemarin dingin",
      "sub": "Coret い + かったです (Hiragana atau Romaji).",
      "placeholder": "Ketik: さむかったです atau samukatta desu",
      "accepted": [
        "さむかったです",
        "samukatta desu",
        "samukattadesu"
      ],
      "displayAnswer": "さむかったです (samukatta desu)",
      "explain": "BENAR: さむかったです!"
    }
  ]
},
{
  "num": 13,
  "zone": "amber",
  "oldScore": "2/4",
  "title": "Keinginan Benda (がほしい), Keinginan Aksi (V-たい), & Tujuan Pergi",
  "shortBug": "Zona Kuning (2/4): Salah menempelkan ～たいです (menjawab いきますたいです / たべいです di Soal 50 & 52).",
  "bugs": [
    {
      "soal": "Soal 50 & 52",
      "salah": "いきますたいです & たべいです",
      "benar": "CORET ます + たいです → いきたいです & たべたいです",
      "kenapa": "Jangan pernah menyisakan ます atau menghilangkan huruf た!"
    }
  ],
  "cheatSheet": {
    "title": "Rumus Cepat Bab 13: ほしい vs ～たい & Pergi Untuk Tujuan (に 行[い]きます)",
    "takeaway": "Ingin BENDA = N が ほしいです. Ingin AKSI = Coret ます + たいです!",
    "tables": [
      {
        "heading": "1. Perbandingan Dua Rumus Keinginan & Konjugasinya",
        "headers": [
          "Pola",
          "Rumus Positif (+)",
          "Negatif (-) & Lampau"
        ],
        "rows": [
          [
            "Ingin Benda",
            "[Benda] が ほしいです",
            "ほしくないです / ほしかったです"
          ],
          [
            "Ingin Melakukan V",
            "[Objek] を(が) [Coret ます] + たいです",
            "～たくないです / ～たかったです (persis KS-い!)"
          ],
          [
            "Contoh いきます & たべます",
            "いきたいです / たべたいです",
            "いきたくないです / たべたかったです"
          ]
        ]
      },
      {
        "heading": "2. Tujuan Perpindahan & Kata Tak Tentu (どこか・なにか)",
        "headers": [
          "Pola",
          "Rumus",
          "Contoh"
        ],
        "rows": [
          [
            "Pergi untuk Aksi V",
            "[Tempat] へ [Coret ます] に 行[い]きます",
            "こうべへ えいがを みに いきます。"
          ],
          [
            "Pergi untuk Kata Benda",
            "[Tempat] へ [KB Kegiatan] に 行[い]きます",
            "日本[にほん]へ びじゅつの べんきょうに きました。"
          ],
          [
            "Suatu tempat / Sesuatu",
            "どこか (suatu tempat) / なにか (sesuatu)",
            "のどが かわきましたから、なにか のみたいです。"
          ]
        ]
      }
    ]
  },
  "grammar": [
    {
      "num": "POIN 01",
      "title": "Menginginkan Benda (N が ほしいです) vs Menginginkan Aksi (V-たいです)",
      "formula": "わたしは [Benda] が ほしいです   |   わたしは [Objek] を／が [V-ます coret ます] + たいです",
      "explain": "`ほしい` adalah Kata Sifat-い yang objeknya wajib memakai `が`. Untuk menyatakan ingin melakukan tindakan, buang `ます` lalu tempelkan `たいです`. Setelah ditempel `たい`, seluruh katanya berubah sifat menjadi Kata Sifat-い (`～たくないです`, `～たかったです`).",
      "examples": [
        {
          "jp": "わたしは あたらしい くるまが ほしいです。",
          "romaji": "Watashi wa atarashii kuruma ga hoshii desu.",
          "id": "Saya ingin mobil baru."
        },
        {
          "jp": "なつやすみに 沖縄[おきなわ]へ いきたいです。",
          "romaji": "Natsuyasumi ni Okinawa e ikitai desu.",
          "id": "Saat libur musim panas ingin pergi ke Okinawa."
        },
        {
          "jp": "おなかが いたいですから、なにも たべたくないです。",
          "romaji": "Onaka ga itai desu kara, nani mo tabetakunai desu.",
          "id": "Karena sakit perut, tidak ingin makan apa pun."
        }
      ],
      "trap": "Bug Soal 50 & 52: Coret `ます` bersih! `いきます` → `いき` + `たいです` = `いきたいです`.",
      "formulaRomaji": "Watashi wa [Benda] ga hoshii desu   |   Watashi wa [Objek] o/ga [V-masu coret masu] + tai desu",
      "formulaId": "Saya menginginkan [Benda]   |   Saya ingin melakukan [V] terhadap [Objek]"
    },
    {
      "num": "POIN 02",
      "title": "Pergi / Datang / Pulang untuk Tujuan Tertentu (～に 行[い]きます)",
      "formula": "[Tempat] へ [V-ます coret ます / Kata Benda Kegiatan] に 行[い]きます／来[き]ます／帰[かえ]ります",
      "explain": "Partikel `に` di depan kata kerja perpindahan (`行[い]きます・来[き]ます・帰[かえ]ります`) menandakan TUJUAN kedatangan ('untuk ~'). Yang boleh masuk sebelum `に` adalah kata kerja tanpa `ます` atau kata benda bermakna kegiatan (`かいもの`, `けんぶつ`, `つり`, `べんきょう`).",
      "examples": [
        {
          "jp": "デパートへ くつを かいに いきます。",
          "romaji": "Depaato e kutsu o kai ni ikimasu.",
          "id": "Pergi ke department store untuk membeli sepatu."
        },
        {
          "jp": "フランスへ りょうりの べんきょうに いきます。",
          "romaji": "Furansu e ryouri no benkyou ni ikimasu.",
          "id": "Pergi ke Prancis untuk belajar memasak."
        }
      ],
      "trap": "Jangan pakai bentuk kamus sebelum に (`かうに いきます` ❌)! Wajib coret ます: `かいに いきます` ✓.",
      "formulaRomaji": "[Tempat] e [V-masu coret masu / Kata Benda Kegiatan] ni ikimasu / kimasu / kaerimasu",
      "formulaId": "Pergi / datang / pulang ke [Tempat] untuk tujuan [V / Kegiatan]"
    },
    {
      "num": "POIN 03",
      "title": "どこか (Suatu Tempat) & なにか (Sesuatu)",
      "formula": "どこか［へ］ 行[い]きます   |   なにか［を］ 食[た]べます",
      "explain": "Menambahkan `か` pada kata tanya (`どこ→どこか`, `なに→なにか`) mengubahnya menjadi 'suatu tempat' dan 'sesuatu'. Partikel `へ` dan `を` setelahnya biasanya dihilangkan.",
      "examples": [
        {
          "jp": "A：ふゆやすみは どこか いきましたか。\n\nB：ええ、北海道[ほっかいどう]へ いきました。",
          "romaji": "A: Fuyuyasumi wa dokoka ikimashita ka.\nB: Ee, Hokkaidou e ikimashita.",
          "id": "Libur musim dingin pergi ke suatu tempat? ...Ya, pergi ke Hokkaido."
        }
      ],
      "trap": "Bedakan: `どこも + Negatif` (tidak ke mana pun) vs `どこか + Positif/Tanya` (ke suatu tempat)!",
      "formulaRomaji": "Dokoka [e] ikimasu   |   Nanika [o] tabemasu",
      "formulaId": "Pergi ke suatu tempat   |   Makan sesuatu"
    }
  ],
  "vocab": [
    {
      "jp": "あそびます / およぎます / むかえます / つかれます",
      "romaji": "asobimasu / oyogimasu / mukaemasu / tsukaremasu",
      "arti": "bermain / berenang / menjemput / lelah"
    },
    {
      "jp": "けっこんします / かいものします / しょくじします / さんぽします（こうえんを～）",
      "romaji": "kekkon shimasu / kaimono shimasu / shokuji shimasu / sanpo shimasu",
      "arti": "menikah / berbelanja / makan bersama / jalan-jalan (di taman — pakai を!)"
    },
    {
      "jp": "ほしい / さびしい / ひろい / せまい",
      "romaji": "hoshii / sabishii / hiroi / semai",
      "arti": "ingin (benda) / kesepian / luas / sempit (KS-い)"
    },
    {
      "jp": "たいへん［な］",
      "romaji": "taihen [na]",
      "arti": "berat, repot, luar biasa (KS-な)"
    },
    {
      "jp": "つり / スキー / かいぎ / とうろく / しゅうまつ",
      "romaji": "tsuri / sukii / kaigi / touroku / shuumatsu",
      "arti": "memancing / ski / rapat / pendaftaran / akhir pekan"
    },
    {
      "jp": "なにか / どこか",
      "romaji": "nanika / dokoka",
      "arti": "sesuatu / suatu tempat"
    },
    {
      "jp": "おなかが すきました / おなかが いっぱいです / のどが かわきました",
      "romaji": "onaka ga sukimashita / onaka ga ippai desu / nodo ga kawakimashita",
      "arti": "lapar / kenyang / haus"
    }
  ],
  "questions": [
    {
      "id": "b13_1",
      "type": "mcq",
      "badge": "Perbaikan Soal 50",
      "prompt": "わたしは 京都[きょうと]へ （　　　　　）。 (Saya ingin pergi ke Kyoto. — いきます)",
      "promptRomaji": "Watashi wa Kyouto e ( _____ ).",
      "sub": "Coret ます + たいです.",
      "options": [
        {
          "jp": "いきますたいです",
          "romaji": "ikimasutai desu"
        },
        {
          "jp": "いきたいです",
          "romaji": "ikitai desu"
        },
        {
          "jp": "いくたいです",
          "romaji": "ikutai desu"
        },
        {
          "jp": "いってたいです",
          "romaji": "ittetai desu"
        }
      ],
      "answer": 1,
      "explain": "BENAR: いきたいです!"
    },
    {
      "id": "b13_2",
      "type": "mcq",
      "badge": "Perbaikan Soal 52",
      "prompt": "すしを （　　　　　）。 (Saya ingin makan sushi. — たべます)",
      "promptRomaji": "Sushi o ( _____ ).",
      "sub": "Coret ます + たいです.",
      "options": [
        {
          "jp": "たべいです",
          "romaji": "tabei desu"
        },
        {
          "jp": "たべますたいです",
          "romaji": "tabemasutai desu"
        },
        {
          "jp": "たべたいです",
          "romaji": "tabetai desu"
        },
        {
          "jp": "たべるたいです",
          "romaji": "taberutai desu"
        }
      ],
      "answer": 2,
      "explain": "BENAR: たべたいです!"
    },
    {
      "id": "b13_3",
      "type": "mcq",
      "badge": "Murni Bab 13 · ほしい",
      "prompt": "A：いま なに （　　） いちばん ほしいですか。\n\nB：パソコンが ほしいです。",
      "promptRomaji": "A: Ima nani ( _ ) ichiban hoshii desu ka.",
      "sub": "Partikel wajib untuk ほしいです.",
      "options": [
        {
          "jp": "を",
          "romaji": "o"
        },
        {
          "jp": "が",
          "romaji": "ga"
        },
        {
          "jp": "に",
          "romaji": "ni"
        },
        {
          "jp": "で",
          "romaji": "de"
        }
      ],
      "answer": 1,
      "explain": "BENAR: なにが ほしいですか (ほしい wajib pakai が)."
    },
    {
      "id": "b13_4",
      "type": "mcq",
      "badge": "Murni Bab 13 · Negatif ～たい",
      "prompt": "Ubah 「のみたいです」 menjadi NEGATIF (tidak ingin minum):",
      "promptRomaji": "nomitai desu → tidak ingin minum",
      "sub": "Konjugasi ～たい sama seperti KS-い.",
      "options": [
        {
          "jp": "のみたいじゃありません",
          "romaji": "nomitai ja arimasen"
        },
        {
          "jp": "のみたくないです",
          "romaji": "nomitakunai desu"
        },
        {
          "jp": "のまたいです",
          "romaji": "nomatai desu"
        },
        {
          "jp": "のみませんたいです",
          "romaji": "nomimasentai desu"
        }
      ],
      "answer": 1,
      "explain": "BENAR: のみたくないです!"
    },
    {
      "id": "b13_5",
      "type": "mcq",
      "badge": "Murni Bab 13 · Tujuan",
      "prompt": "くうこうへ ともだちを （　　　　） いきます。 (Pergi ke bandara untuk menjemput teman. — むかえます)",
      "promptRomaji": "Kuukou e tomodachi o ( ____ ) ikimasu.",
      "sub": "Coret ます + に いきます.",
      "options": [
        {
          "jp": "むかえるに",
          "romaji": "mukaeru ni"
        },
        {
          "jp": "むかえに",
          "romaji": "mukae ni"
        },
        {
          "jp": "むかえてに",
          "romaji": "mukaete ni"
        },
        {
          "jp": "むかえますに",
          "romaji": "mukaemasu ni"
        }
      ],
      "answer": 1,
      "explain": "BENAR: むかえに いきます!"
    },
    {
      "id": "b13_6",
      "type": "input",
      "badge": "Latihan Ketik",
      "prompt": "Ubah 「かいます」 (membeli) menjadi 'ingin membeli' (bentuk sopan)!",
      "promptRomaji": "kaimasu → ingin membeli",
      "sub": "Coret ます + たいです (Hiragana atau Romaji).",
      "placeholder": "Ketik: かいたいです atau kaitai desu",
      "accepted": [
        "かいたいです",
        "kaitai desu",
        "kaitaidesu"
      ],
      "displayAnswer": "かいたいです (kaitai desu)",
      "explain": "BENAR: かいたいです!"
    }
  ]
},
{
  "num": 14,
  "zone": "green",
  "oldScore": "3/4",
  "title": "3 Kelompok Kata Kerja, Bentuk-て, ～てください, ～ています, & ～ましょうか",
  "shortBug": "Skor tes lama 3/4 (Kuat!). Materi lengkap aturan Bentuk-て, permintaan, aksi sedang berlangsung, & tawaran bantuan.",
  "bugs": [
    {
      "soal": "Soal 53–56",
      "salah": "Sudah 3/4 benar",
      "benar": "い・ち・り→って | み・び・に→んで | き→いて (いきます→いって) | ぎ→いで | し→して",
      "kenapa": "Pastikan hafal daftar kata pendek Kelompok II berbunyi -i (みます・おきます・かります・います・あびます・おります・できます)!"
    }
  ],
  "cheatSheet": {
    "title": "Rumus Cepat Bab 14: Tabel Master Bentuk-て (て形[けい]) & 3 Pola Utamanya",
    "takeaway": "Satu-satunya pengecualian -きます di Kelompok I adalah いきます → いって!",
    "tables": [
      {
        "heading": "1. Rumus Perubahan ke Bentuk-て (Kelompok I, II, III)",
        "headers": [
          "Kelompok",
          "Akhiran Sebelum ます",
          "Perubahan Bentuk-て & Contoh"
        ],
        "rows": [
          [
            "I (ちいさい つ)",
            "い ・ ち ・ り",
            "→ って (かいます→かって, まちます→まって, かえります→かえって)"
          ],
          [
            "I (ん + で)",
            "み ・ び ・ に",
            "→ んで (のみます→のんで, よびます→よんで, しにます→しんで)"
          ],
          [
            "I (き / ぎ / し)",
            "き / ぎ / し",
            "き→いて (かいて) *kecuali いって! | ぎ→いで (いそいで) | し→して (はなして)"
          ],
          [
            "II (-e & khusus -i)",
            "たべます / みます・おきます・かります・あびます・います",
            "Buang ます + て (たべて, みて, おきて, かりて)"
          ],
          [
            "III (Irregular)",
            "します / きます(datang)",
            "して / きて"
          ]
        ]
      },
      {
        "heading": "2. Tiga Pola Kalimat Bab 14",
        "headers": [
          "Pola",
          "Rumus",
          "Arti & Pemakaian"
        ],
        "rows": [
          [
            "Permintaan Sopan",
            "V-て ください",
            "Tolong ~ (ここに なまえを かいて ください)"
          ],
          [
            "Sedang Berlangsung",
            "V-て います",
            "Sedang ~ sekarang (いま あめが ふって います)"
          ],
          [
            "Menawarkan Bantuan",
            "[Coret ます] + ましょうか",
            "Mari saya bantu ~? (にもつを もちましょうか)"
          ]
        ]
      }
    ]
  },
  "grammar": [
    {
      "num": "POIN 01",
      "title": "Cara Membedakan Kelompok I, II, & III + Pembentukan Bentuk-て",
      "formula": "Cek vokal tepat sebelum ます: bunyi -e = Kel. II | bunyi -i = Kel. I (kecuali kata khusus Kel. II) | します・きます = Kel. III",
      "explain": "Menguasai pengelompokan kata kerja di Bab 14 adalah kunci untuk Bab 15, 16, 17, 18, 19, 20, dan 25. Hafalkan lagu Kelompok I: `i-chi-ri → tte`, `mi-bi-ni → nde`, `ki → ite (ikimasu → itte)`, `gi → ide`, `shi → shite`.",
      "examples": [
        {
          "jp": "かきます → かいて  |  いきます → いって",
          "romaji": "kakimasu → kaite | ikimasu → itte",
          "id": "menulis | pergi (pengecualian!)"
        },
        {
          "jp": "かります → かりて (Kel. II!)  vs  かえります → かえって (Kel. I!)",
          "romaji": "karite vs kaette",
          "id": "meminjam (Kel. II) vs pulang (Kel. I)"
        }
      ],
      "trap": "`かります` (pinjam), `おきます` (bangun), `みます` (lihat), `あびます` (mandi), `おります` (turun) adalah Kelompok II!",
      "formulaRomaji": "Cek vokal tepat sebelum masu: bunyi -e = Kel. II | bunyi -i = Kel. I | shimasu · kimasu = Kel. III",
      "formulaId": "Aturan pembagian Kelompok Kata Kerja sebagai dasar pembentukan Bentuk-て"
    },
    {
      "num": "POIN 02",
      "title": "V-て ください (Tolong ~) & V-て います (Sedang ~)",
      "formula": "[Bentuk-て] + ください   |   [Bentuk-て] + います",
      "explain": "`V-てください` dipakai untuk meminta, menyuruh dengan sopan, atau mempersilakan lawan bicara. `V-ています` di Bab 14 menyatakan aksi yang sedang terjadi tepat pada saat ini (sering disertai kata `いま`).",
      "examples": [
        {
          "jp": "すみませんが、もう すこし ゆっくり はなして ください。",
          "romaji": "Sumimasen ga, mou sukoshi yukkuri hanashite kudasai.",
          "id": "Maaf, tolong bicara sedikit lebih pelan."
        },
        {
          "jp": "ミラーさんは いま でんわを かけて います。",
          "romaji": "Miraa-san wa ima denwa o kakete imasu.",
          "id": "Sdr. Miller sekarang sedang menelepon."
        }
      ],
      "trap": "Jangan lupa `います` di belakang Bentuk-て untuk arti 'sedang'!",
      "formulaRomaji": "[Bentuk-te] + kudasai   |   [Bentuk-te] + imasu",
      "formulaId": "Tolong lakukan ~ (permintaan sopan)   |   Sedang melakukan ~ (aksi berlangsung)"
    },
    {
      "num": "POIN 03",
      "title": "Menawarkan Bantuan Diri Sendiri: V-ます coret ます + ましょうか",
      "formula": "A: [Coret ます] + ましょうか。 → B: すみません。おねがいします。 / いいえ、けっこうです。",
      "explain": "Berbeda dengan `～ましょう` di Bab 6 ('Ayo kita bareng-bareng'), `～ましょうか` di Bab 14 dipakai saat PEMBICARA menawarkan diri melakukan sesuatu untuk membantu lawan bicara ('Mau saya bawakan?', 'Mau saya panggilkan taksi?').",
      "examples": [
        {
          "jp": "A：タクシーを よびましょうか。\n\nB：すみません。おねがいします。",
          "romaji": "A: Takushii o yobimashou ka.\nB: Sumimasen. Onegaishimasu.",
          "id": "Mau saya panggilkan taksi? ...Maaf merepotkan, tolong ya."
        }
      ],
      "trap": "`～ましょうか` memakai batang `ます` (bukan Bentuk-て!): `もちましょうか`, bukan `もってましょうか`.",
      "formulaRomaji": "A: [Coret masu] + mashou ka. → B: Sumimasen. Onegaishimasu. / Iie, kekkou desu.",
      "formulaId": "A: Mau saya bantu ~? → B: Maaf merepotkan, tolong ya. / Tidak usah, terima kasih."
    }
  ],
  "vocab": [
    {
      "jp": "つけます / けします / あけます / しめます",
      "romaji": "tsukemasu / keshimasu / akemasu / shimemasu",
      "arti": "menyalakan / mematikan (Kel.I) / membuka / menutup (Kel.II)"
    },
    {
      "jp": "いそぎます / まちます / とめます / まがります",
      "romaji": "isogimasu / machimasu / tomemasu / magarimasu",
      "arti": "buru-buru / menunggu / menghentikan (Kel.II) / belok"
    },
    {
      "jp": "もちます / とります / てつだいます / よびます / はなします",
      "romaji": "mochimasu / torimasu / tetsudaimasu / yobimasu / hanashimasu",
      "arti": "membawa-memegang / mengambil / membantu / memanggil / berbicara (semua Kel.I)"
    },
    {
      "jp": "みせます / おしえます（じゅうしょを～） / はじめます",
      "romaji": "misemasu / oshiemasu / hajimemasu",
      "arti": "memperlihatkan / memberitahu (alamat) / memulai (semua Kel.II)"
    },
    {
      "jp": "ふります（あめが～） / コピーします",
      "romaji": "furimasu (ame ga) / kopii shimasu",
      "arti": "turun (hujan — pakai が!) / memfotokopi"
    },
    {
      "jp": "エアコン / パスポート / なまえ / じゅうしょ / ちず",
      "romaji": "eakon / pasupooto / namae / juusho / chizu",
      "arti": "AC / paspor / nama / alamat / peta"
    },
    {
      "jp": "ゆっくり / すぐ / また / あとで / もう すこし",
      "romaji": "yukkuri / sugu / mata / ato de / mou sukoshi",
      "arti": "pelan-pelan / segera / lagi / nanti / sedikit lagi"
    }
  ],
  "questions": [
    {
      "id": "b14_1",
      "type": "mcq",
      "badge": "Murni Bab 14 · Pengecualian",
      "prompt": "Ubah 「いきます」 (pergi) ke Bentuk-て:",
      "promptRomaji": "ikimasu → ?",
      "sub": "Satu-satunya pengecualian -きます.",
      "options": [
        {
          "jp": "いいて",
          "romaji": "iite"
        },
        {
          "jp": "いって",
          "romaji": "itte"
        },
        {
          "jp": "いんで",
          "romaji": "inde"
        },
        {
          "jp": "いきって",
          "romaji": "ikitte"
        }
      ],
      "answer": 1,
      "explain": "BENAR: いって!"
    },
    {
      "id": "b14_2",
      "type": "mcq",
      "badge": "Murni Bab 14 · ぎ → いで",
      "prompt": "じかんが ありません。ちょっと （　　　　） ください。 (Tolong cepat/buru-buru — いそぎます)",
      "promptRomaji": "isogimasu + te kudasai",
      "sub": "ぎ berubah menjadi いで.",
      "options": [
        {
          "jp": "いそいて",
          "romaji": "isoite"
        },
        {
          "jp": "いそいで",
          "romaji": "isoide"
        },
        {
          "jp": "いそっで",
          "romaji": "isodde"
        },
        {
          "jp": "いそぎて",
          "romaji": "isogite"
        }
      ],
      "answer": 1,
      "explain": "BENAR: いそいで ください (ぎ → いで)."
    },
    {
      "id": "b14_3",
      "type": "mcq",
      "badge": "Murni Bab 14 · Kelompok II -i",
      "prompt": "パスポートを （　　　） ください。 / ほんを （　　　） ください。 (みせます & かります)",
      "promptRomaji": "misemasu & karimasu → Bentuk-て",
      "sub": "Keduanya termasuk Kelompok II!",
      "options": [
        {
          "jp": "みせて ・ かりて",
          "romaji": "misete · karite"
        },
        {
          "jp": "みせて ・ かって",
          "romaji": "misete · katte"
        },
        {
          "jp": "みして ・ かりて",
          "romaji": "mishite · karite"
        },
        {
          "jp": "みせって ・ かって",
          "romaji": "misette · katte"
        }
      ],
      "answer": 0,
      "explain": "BENAR: みせて dan かりて (かります adalah Kelompok II, bukan かって!)."
    },
    {
      "id": "b14_4",
      "type": "mcq",
      "badge": "Murni Bab 14 · Sedang",
      "prompt": "いま ゆきが （　　　　　）。 (Sekarang sedang turun salju. — ふります)",
      "promptRomaji": "Ima yuki ga ( _____ ).",
      "sub": "ふります (Kel. I: り→って) + います.",
      "options": [
        {
          "jp": "ふりて います",
          "romaji": "furite imasu"
        },
        {
          "jp": "ふって います",
          "romaji": "futte imasu"
        },
        {
          "jp": "ふんで います",
          "romaji": "funde imasu"
        },
        {
          "jp": "ふいて います",
          "romaji": "fuite imasu"
        }
      ],
      "answer": 1,
      "explain": "BENAR: ふって います."
    },
    {
      "id": "b14_5",
      "type": "mcq",
      "badge": "Murni Bab 14 · Tawaran Bantuan",
      "prompt": "あついですね。まどを （　　　　　）。 (Mau saya bukakan jendela? — あけます)",
      "promptRomaji": "Mado o ( _____ ).",
      "sub": "Menawarkan bantuan diri sendiri ke lawan bicara.",
      "options": [
        {
          "jp": "あけて ください",
          "romaji": "akete kudasai"
        },
        {
          "jp": "あけましょうか",
          "romaji": "akemashou ka"
        },
        {
          "jp": "あけて いますか",
          "romaji": "akete imasu ka"
        },
        {
          "jp": "あけて ましょうか",
          "romaji": "akete mashou ka"
        }
      ],
      "answer": 1,
      "explain": "BENAR: あけましょうか (Mau saya bukakan?)."
    },
    {
      "id": "b14_6",
      "type": "input",
      "badge": "Latihan Ketik",
      "prompt": "Ketik Bentuk-て dari 「てつだいます」 (membantu)!",
      "promptRomaji": "tetsudaimasu → ?",
      "sub": "い・ち・り → って (Hiragana atau Romaji).",
      "placeholder": "Ketik: てつだって atau tetsudatte",
      "accepted": [
        "てつだって",
        "tetsudatte"
      ],
      "displayAnswer": "てつだって (tetsudatte)",
      "explain": "BENAR: てつだって!"
    }
  ]
},
{
  "num": 15,
  "zone": "green",
  "oldScore": "3/4",
  "title": "Izin (～てもいいですか), Larangan (～てはいけません), & Status Keadaan (～ています)",
  "shortBug": "Skor tes lama 3/4. Materi lengkap izin, larangan keras, dan jebakan しっています → しりません.",
  "bugs": [
    {
      "soal": "Soal 57–60",
      "salah": "Sudah 3/4 benar",
      "benar": "Izin: V-てもいいですか | Larangan: V-てはいけません | Negatif しっています = しりません!",
      "kenapa": "Jangan pernah menjawab 'しっていません' untuk 'tidak tahu'!"
    }
  ],
  "cheatSheet": {
    "title": "Rumus Cepat Bab 15: Izin, Larangan Keras, & 4 Status ～ています",
    "takeaway": "しっています (tahu) → Negatifnya WAJIB しりません (BUKAN しっていません)!",
    "tables": [
      {
        "heading": "1. Izin vs Larangan dengan Bentuk-て",
        "headers": [
          "Pola",
          "Rumus",
          "Contoh & Cara Jawab"
        ],
        "rows": [
          [
            "Meminta Izin",
            "V-て も いいですか",
            "しゃしんを とっても いいですか。→ ええ、いいですよ / すみません、ちょっと…"
          ],
          [
            "Larangan Aturan",
            "V-て は いけません",
            "ここで たばこを すっては いけません。 (Dilarang merokok di sini.)"
          ]
        ]
      },
      {
        "heading": "2. Empat Kata Kerja Status/Keadaan dengan ～ています (Bukan 'Sedang'!)",
        "headers": [
          "Kalimat Positif",
          "Arti",
          "Bentuk Negatifnya"
        ],
        "rows": [
          [
            "けっこんして います",
            "Sudah menikah (berstatus menikah)",
            "けっこんして いません / どくしんです"
          ],
          [
            "東京[とうきょう]に すんで います",
            "Tinggal di Tokyo (pakai partikel に!)",
            "すんで いません"
          ],
          [
            "くるまを もって います",
            "Memiliki mobil",
            "もって いません"
          ],
          [
            "しって います",
            "Tahu / Kenal",
            "しりません (JEBAKAN UTAMA UJIAN!)"
          ]
        ]
      }
    ]
  },
  "grammar": [
    {
      "num": "POIN 01",
      "title": "Meminta Izin (V-ても いいですか) & Larangan (V-ては いけません)",
      "formula": "[Bentuk-て] + も いいですか (Bolehkah ~?)   |   [Bentuk-て] + は いけません (Tidak boleh ~)",
      "explain": "`V-ても いいです` memberi izin ('boleh ~'). `V-ては いけません` menyatakan larangan aturan/hukum ('tidak boleh ~', tidak sopan bila diucapkan langsung ke atasan).",
      "examples": [
        {
          "jp": "A：この カタログを もらっても いいですか。\n\nB：ええ、いいですよ。どうぞ。",
          "romaji": "A: Kono katarogu o moratte mo ii desu ka.\nB: Ee, ii desu yo. Douzo.",
          "id": "Bolehkah saya meminta katalog ini? ...Ya, boleh. Silakan."
        },
        {
          "jp": "びじゅつかんで しゃしんを とっては いけません。",
          "romaji": "Bijutsukan de shashin o totte wa ikemasen.",
          "id": "Di museum seni dilarang mengambil foto."
        }
      ],
      "trap": "Menolak permintaan izin secara halus di Jepang tidak langsung bilang だめです, melainkan `すみません、ちょっと…`.",
      "formulaRomaji": "[Bentuk-te] + mo ii desu ka   |   [Bentuk-te] + wa ikemasen",
      "formulaId": "Bolehkah melakukan ~? (meminta izin)   |   Tidak boleh melakukan ~ (larangan)"
    },
    {
      "num": "POIN 02",
      "title": "V-て います untuk Status Keadaan & Profesi/Kebiasaan",
      "formula": "けっこんしています・すんでいます・もっています・しっています  |  [Tempat] で はたらいています／おしえています",
      "explain": "Selain bermakna 'sedang berlangsung saat ini' (Bab 14), `V-ています` juga dipakai untuk: (1) Keadaan hasil dari aksi di masa lalu yang masih bertahan sampai sekarang (`けっこんしています`, `東京[とうきょう]に すんでいます`), dan (2) Pekerjaan tetap/aktivitas berulang (`IMCで はたらいています`, `スーパーで うっています`).",
      "examples": [
        {
          "jp": "A：ミラーさんの でんわばんごうを しって いますか。\n\nB：いいえ、しりません。",
          "romaji": "A: Miraa-san no denwa bangou o shitte imasu ka.\nB: Iie, shirimasen.",
          "id": "Apakah tahu nomor telepon Sdr. Miller? ...Tidak, tidak tahu."
        },
        {
          "jp": "かぞくは 大阪[おおさか]に すんで います。",
          "romaji": "Kazoku wa Oosaka ni sunde imasu.",
          "id": "Keluarga saya tinggal di Osaka."
        }
      ],
      "trap": "1) `すんでいます` wajib memakai partikel `に` untuk kota/tempat tinggal (`大阪[おおさか]に すんでいます`). 2) Negatif `しっています` wajib `しりません`!",
      "formulaRomaji": "kekkon shite imasu · sunde imasu · motte imasu · shitte imasu  |  [Tempat] de hataraite imasu / oshiete imasu",
      "formulaId": "Menyatakan status/keadaan menetap (sudah menikah, tinggal, punya, kenal) & pekerjaan rutin"
    }
  ],
  "vocab": [
    {
      "jp": "おきます / つくります / うります",
      "romaji": "okimasu / tsukurimasu / urimasu",
      "arti": "meletakkan / membuat, memproduksi / menjual (semua Kel. I)"
    },
    {
      "jp": "しります / すみます / けんきゅうします",
      "romaji": "shirimasu / sumimasu / kenkyuu shimasu",
      "arti": "mengetahui-mengenal / tinggal / meneliti"
    },
    {
      "jp": "たちます / すわります / つかいます / のります / おります",
      "romaji": "tachimasu / suwarimasu / tsukaimasu / norimasu / orimasu",
      "arti": "berdiri / duduk / memakai / naik kendaraan / turun kendaraan (Kel.II!)"
    },
    {
      "jp": "しりょう / カタログ / じこくひょう / せいひん / ソフト",
      "romaji": "shiryou / katarogu / jikokuhyou / seihin / sofuto",
      "arti": "data dokumen / katalog / jadwal kereta / produk / perangkat lunak"
    },
    {
      "jp": "はいしゃ / とこや / どくしん",
      "romaji": "haisha / tokoya / dokushin",
      "arti": "dokter gigi / salon pangkas rambut / bujangan, lajang"
    },
    {
      "jp": "おもいだします",
      "romaji": "omoidashimasu",
      "arti": "teringat kembali"
    }
  ],
  "questions": [
    {
      "id": "b15_1",
      "type": "mcq",
      "badge": "Murni Bab 15 · Izin",
      "prompt": "ここに くるまを （　　　　　） いいですか。 (Bolehkah memarkir mobil di sini? — とめます Kel.II)",
      "promptRomaji": "Koko ni kuruma o ( _____ ) ii desu ka.",
      "sub": "とめます + ても いいですか.",
      "options": [
        {
          "jp": "とめても",
          "romaji": "tomete mo"
        },
        {
          "jp": "とまっては",
          "romaji": "tomatte wa"
        },
        {
          "jp": "とめっても",
          "romaji": "tomette mo"
        },
        {
          "jp": "とめては",
          "romaji": "tomete wa"
        }
      ],
      "answer": 0,
      "explain": "BENAR: とめても いいですか (meminta izin)."
    },
    {
      "id": "b15_2",
      "type": "mcq",
      "badge": "Murni Bab 15 · Larangan",
      "prompt": "きょうしつで たばこを （　　　　　） いけません。 (Dilarang merokok. — すいます)",
      "promptRomaji": "Kyoushitsu de tabako o ( _____ ) ikemasen.",
      "sub": "すいます → すって + は いけません.",
      "options": [
        {
          "jp": "すっても",
          "romaji": "sutte mo"
        },
        {
          "jp": "すっては",
          "romaji": "sutte wa"
        },
        {
          "jp": "すいては",
          "romaji": "suite wa"
        },
        {
          "jp": "すわっては",
          "romaji": "suwatte wa"
        }
      ],
      "answer": 1,
      "explain": "BENAR: すっては いけません (larangan)."
    },
    {
      "id": "b15_3",
      "type": "mcq",
      "badge": "Murni Bab 15 · Jebakan しります",
      "prompt": "A：「あのかたを しって いますか。」\n\nB：「いいえ、（　　　　　）。」 (Tidak, saya tidak kenal.)",
      "promptRomaji": "A: Ano kata o shitte imasu ka.",
      "sub": "Bentuk negatif wajib dari しっています!",
      "options": [
        {
          "jp": "しって いません",
          "romaji": "shitte imasen"
        },
        {
          "jp": "しりません",
          "romaji": "shirimasen"
        },
        {
          "jp": "しらないです",
          "romaji": "shiranai desu"
        },
        {
          "jp": "しりませんでした",
          "romaji": "shirimasen deshita"
        }
      ],
      "answer": 1,
      "explain": "BENAR: いいえ、しりません! (Bukan しっていません)."
    },
    {
      "id": "b15_4",
      "type": "mcq",
      "badge": "Murni Bab 15 · Tempat Tinggal",
      "prompt": "ミラーさんは 大阪[おおさか] （　　） すんで います。",
      "promptRomaji": "Miraa-san wa Oosaka ( _ ) sunde imasu.",
      "sub": "Partikel kota tempat tinggal dengan すんでいます.",
      "options": [
        {
          "jp": "で",
          "romaji": "de"
        },
        {
          "jp": "に",
          "romaji": "ni"
        },
        {
          "jp": "を",
          "romaji": "o"
        },
        {
          "jp": "へ",
          "romaji": "e"
        }
      ],
      "answer": 1,
      "explain": "BENAR: 大阪[おおさか]に すんでいます (tempat tinggal memakai に)."
    },
    {
      "id": "b15_5",
      "type": "mcq",
      "badge": "Murni Bab 15 · Kursi",
      "prompt": "この いす （　　） すわっても いいですか。 (Bolehkah duduk di kursi ini?)",
      "promptRomaji": "Kono isu ( _ ) suwatte mo ii desu ka.",
      "sub": "Titik tempat duduk menggunakan partikel apa?",
      "options": [
        {
          "jp": "で",
          "romaji": "de"
        },
        {
          "jp": "に",
          "romaji": "ni"
        },
        {
          "jp": "を",
          "romaji": "o"
        },
        {
          "jp": "と",
          "romaji": "to"
        }
      ],
      "answer": 1,
      "explain": "BENAR: いすに すわります (duduk di kursi selalu memakai に)."
    },
    {
      "id": "b15_6",
      "type": "input",
      "badge": "Latihan Ketik",
      "prompt": "Ketik jawaban negatif sopan dari 「しっていますか」 (Tidak tahu)!",
      "promptRomaji": "Tidak tahu = ?",
      "sub": "Ketik kata kerjanya saja (Hiragana atau Romaji).",
      "placeholder": "Ketik: しりません atau shirimasen",
      "accepted": [
        "しりません",
        "shirimasen"
      ],
      "displayAnswer": "しりません (shirimasen)",
      "explain": "BENAR: しりません!"
    }
  ]
},
{
  "num": 16,
  "zone": "green",
  "oldScore": "3/4",
  "title": "Urutan Aksi (V1-て、V2 / てから), Gabung Kata Sifat (～くて・～で), & Ciri (N1はN2が)",
  "shortBug": "Skor tes lama 3/4. Materi lengkap: urutan V-て, V-てから, menyambung kata sifat, N1はN2がKS, どうやって, & どのN.",
  "bugs": [
    {
      "soal": "Soal 61–64",
      "salah": "Sudah 3/4 benar",
      "benar": "KS-い → ～くて (いい → よくて) | KS-な / N → ～で | N1 は N2 が [KS] です",
      "kenapa": "Ingat: waktu (lampau/non-lampau) kalimat berantai ditentukan oleh kata paling AKHIR!"
    }
  ],
  "cheatSheet": {
    "title": "Rumus Cepat Bab 16: Menyambung Kalimat, てから, & Ciri Bagian (は…が)",
    "takeaway": "Menyambung KS-い = coret い + くて (いい→よくて). Menyambung KS-な & Kata Benda = + で!",
    "tables": [
      {
        "heading": "1. Tabel Cara Menyambung Dua Kalimat / Sifat (Dan...)",
        "headers": [
          "Jenis Kata",
          "Rumus Sambung",
          "Contoh"
        ],
        "rows": [
          [
            "Kata Kerja Berurutan",
            "V1-て、V2-て、V3 (tense di V3!)",
            "けさ おきて、シャワーを あびて、がっこうへ いきました。"
          ],
          [
            "Setelah V1, baru V2",
            "V1-て から、V2",
            "しごとが おわってから、のみに いきます。"
          ],
          [
            "Kata Sifat-い",
            "Coret い + くて (いい → よくて!)",
            "おおきくて、あたらしい うち / あたまが よくて、しんせつです。"
          ],
          [
            "Kata Sifat-な & Benda",
            "+ で (TANPA な / です)",
            "きれいで、しずかな まち / カリナさんは がくせいで、インドネシアじんです。"
          ]
        ]
      },
      {
        "heading": "2. Pola Ciri Bagian Tubuh/Kota & Kata Tanya Bab 16",
        "headers": [
          "Pola",
          "Rumus",
          "Contoh"
        ],
        "rows": [
          [
            "Ciri Spesifik Topik",
            "N1 は N2 が [Kata Sifat] です",
            "マリアさんは かみが ながいです。 / 大阪[おおさか]は たべものが おいしいです。"
          ],
          [
            "Cara / Metode",
            "どうやって ～ますか",
            "だいがくまで どうやって いきますか。 (Bagaimana caranya pergi ke kampus?)"
          ],
          [
            "Yang Mana (+ Benda)",
            "どの + Kata Benda (≥3 pilihan)",
            "サントスさんは どの ひとですか。 (Wajib + Kata Benda!)"
          ]
        ]
      }
    ]
  },
  "grammar": [
    {
      "num": "POIN 01",
      "title": "Aksi Berurutan (V1-て、V2) & Setelah Selesai (V1-て から、V2)",
      "formula": "V1-て、V2-て、V3（ます／ました）   |   V1-て から、V2",
      "explain": "Saat merangkai beberapa aktivitas berurutan, ubah kata kerja di tengah menjadi Bentuk-て, dan penentu waktu (lampau atau tidak) cukup diletakkan pada kata kerja PALING AKHIR. Pola `V1-て から、V2` menegaskan bahwa V2 baru dilakukan setelah V1 benar-benar tuntas.",
      "examples": [
        {
          "jp": "きのう デパートへ いって、くつを かって、えいがを みました。",
          "romaji": "Kinou depaato e itte, kutsu o katte, eiga o mimashita.",
          "id": "Kemarin pergi ke dept. store, membeli sepatu, lalu menonton film."
        },
        {
          "jp": "くにへ かえってから、ちちの かいしゃで はたらきます。",
          "romaji": "Kuni e kaette kara, chichi no kaisha de hatarakimasu.",
          "id": "Setelah pulang ke tanah air, akan bekerja di perusahaan ayah."
        }
      ],
      "trap": "Selain itu, perhatikan partikel kendaraan di Bab 16: NAIK kendaraan = `[Kendaraan] に のります`, TURUN dari kendaraan = `[Kendaraan] を おります` (pakai を!)!",
      "formulaRomaji": "V1-te, V2-te, V3 (masu / mashita)   |   V1-te kara, V2",
      "formulaId": "Melakukan V1, lalu V2, lalu V3 (urutan aksi)   |   Setelah selesai V1, melakukan V2"
    },
    {
      "num": "POIN 02",
      "title": "Menyambung Kata Sifat-い (～くて), KS-な (～で), & Kata Benda (～で)",
      "formula": "KS-い → ～くて   |   KS-な → ～で   |   Kata Benda → ～で",
      "explain": "Gunakan pola ini untuk menyambung dua sifat yang searah (positif + positif, atau negatif + negatif). Jika sifatnya berlawanan (mahal TAPI enak), tetap gunakan `が` (Bab 8), bukan `くて/で`!",
      "examples": [
        {
          "jp": "この レストランは やすくて、おいしいです。",
          "romaji": "Kono resutoran wa yasukute, oishii desu.",
          "id": "Restoran ini murah dan enak."
        },
        {
          "jp": "ミラーさんは わかいですが、あたまが よくて、しんせつです。",
          "romaji": "Miraa-san wa wakai desu ga, atama ga yokute, shinsetsu desu.",
          "id": "Sdr. Miller muda, pintar, dan ramah (`いい → よくて`)."
        }
      ],
      "trap": "Jangan menyambung sifat yang bertolak belakang dengan `くて` (`たかくて、おいしい` terdengar aneh; gunakan `たかいですが、おいしい`).",
      "formulaRomaji": "KS-i → ~kute   |   KS-na → ~de   |   Kata Benda → ~de",
      "formulaId": "Menyambungkan dua sifat atau kata benda menjadi satu kalimat"
    },
    {
      "num": "POIN 03",
      "title": "Ciri Fisik/Bagian (N1 は N2 が KS です), どうやって, & どの N",
      "formula": "[Topik] は [Bagian/Atribut] が [Kata Sifat] です   |   どうやって V-ますか   |   どの + N",
      "explain": "Untuk mendeskripsikan bagian tubuh atau keistimewaan suatu tempat, topik utamanya memakai `は` dan bagiannya memakai `が`. Kata tanya `どうやって` menanyakan langkah/cara, sedangkan `どの + N` memilih satu dari ≥3 benda.",
      "examples": [
        {
          "jp": "サントスさんは せが たかいです。",
          "romaji": "Santosu-san wa se ga takai desu.",
          "id": "Sdr. Santos badannya tinggi."
        },
        {
          "jp": "あの せが たかくて、かみが くろい ひとは だれですか。",
          "romaji": "Ano se ga takakute, kami ga kuroi hito wa dare desu ka.",
          "id": "Siapa orang yang tinggi dan berambut hitam itu?"
        }
      ],
      "trap": "Bedakan: `どれ` (berdiri sendiri: `どれですか`) vs `どの + Kata Benda` (`どの ほんですか`)!",
      "formulaRomaji": "[Topik] wa [Bagian/Atribut] ga [Kata Sifat] desu   |   Douyatte V-masu ka   |   Dono + N",
      "formulaId": "[Topik] memiliki ciri [Bagian] yang [Sifat]   |   Bagaimana caranya V?   |   N yang mana?"
    }
  ],
  "vocab": [
    {
      "jp": "のります（でんしゃに～） / おります（でんしゃを～） / のりかえます",
      "romaji": "norimasu (ni) / orimasu (o) / norikaemasu",
      "arti": "naik kereta (に) / turun dari kereta (を!) / ganti kereta, transit"
    },
    {
      "jp": "あびます（シャワーを～） / いれます / だします / おろします（おかねを～）",
      "romaji": "abimasu / iremasu / dashimasu / oroshimasu",
      "arti": "mandi shower (Kel.II) / memasukkan / mengeluarkan / menarik uang ATM"
    },
    {
      "jp": "はいります（だいがくに～） / でます（だいがくを～） / おします",
      "romaji": "hairimasu / demasu / oshimasu",
      "arti": "masuk kuliah (に) / tamat kuliah (を) / menekan tombol"
    },
    {
      "jp": "わかい / ながい / みじかい / あかるい / くらい",
      "romaji": "wakai / nagai / mijikai / akarui / kurai",
      "arti": "muda / panjang / pendek / terang / gelap"
    },
    {
      "jp": "せが たかい / あたまが いい",
      "romaji": "se ga takai / atama ga ii",
      "arti": "badan tinggi / pintar, cerdas"
    },
    {
      "jp": "からだ / あたま / かみ / かお / め / みみ / くち / は / おなか / あし",
      "romaji": "karada / atama / kami / kao / me / mimi / kuchi / ha / onaka / ashi",
      "arti": "tubuh / kepala / rambut / wajah / mata / telinga / mulut / gigi / perut / kaki"
    },
    {
      "jp": "どうやって / どの～ / まず / つぎに",
      "romaji": "douyatte / dono~ / mazu / tsugi ni",
      "arti": "bagaimana caranya / ~ yang mana / pertama-tama / selanjutnya"
    }
  ],
  "questions": [
    {
      "id": "b16_1",
      "type": "mcq",
      "badge": "Murni Bab 16 · Sambung KS-い",
      "prompt": "この かばんは （　　　　）、べんりです。 (Tas ini ringan dan praktis. — かるい)",
      "promptRomaji": "Kono kaban wa ( ____ ), benri desu.",
      "sub": "かるい adalah KS-い (coret い + くて).",
      "options": [
        {
          "jp": "かるいで",
          "romaji": "karui de"
        },
        {
          "jp": "かるくて",
          "romaji": "karukute"
        },
        {
          "jp": "かるいくて",
          "romaji": "karuikute"
        },
        {
          "jp": "かるに",
          "romaji": "karu ni"
        }
      ],
      "answer": 1,
      "explain": "BENAR: かるくて、べんりです."
    },
    {
      "id": "b16_2",
      "type": "mcq",
      "badge": "Murni Bab 16 · Sambung KS-な",
      "prompt": "奈良[なら]は （　　　　）、きれいな まちです。 (Nara kota yang tenang dan indah. — しずか)",
      "promptRomaji": "Nara wa ( ____ ), kirei na machi desu.",
      "sub": "しずか adalah KS-な (+ で).",
      "options": [
        {
          "jp": "しずかくて",
          "romaji": "shizukakute"
        },
        {
          "jp": "しずかで",
          "romaji": "shizuka de"
        },
        {
          "jp": "しずかなで",
          "romaji": "shizuka na de"
        },
        {
          "jp": "しずかに",
          "romaji": "shizuka ni"
        }
      ],
      "answer": 1,
      "explain": "BENAR: しずかで、きれいな まちです."
    },
    {
      "id": "b16_3",
      "type": "mcq",
      "badge": "Murni Bab 16 · てから",
      "prompt": "ごはんを （　　　　）、くすりを のみます。 (SETELAH makan nasi, minum obat.)",
      "promptRomaji": "Gohan o ( ____ ), kusuri o nomimasu.",
      "sub": "Rumus 'setelah V1 selesai, baru V2'.",
      "options": [
        {
          "jp": "たべるから",
          "romaji": "taberu kara"
        },
        {
          "jp": "たべてから",
          "romaji": "tabete kara"
        },
        {
          "jp": "たべたから",
          "romaji": "tabeta kara"
        },
        {
          "jp": "たべますから",
          "romaji": "tabemasu kara"
        }
      ],
      "answer": 1,
      "explain": "BENAR: たべてから (Bentuk-て + から = setelah ~). Kalau たべるから artinya 'karena makan'!"
    },
    {
      "id": "b16_4",
      "type": "mcq",
      "badge": "Murni Bab 16 · Ciri Bagian",
      "prompt": "カリナさんは め （　　） おおきいです。 (Karina matanya besar.)",
      "promptRomaji": "Karina-san wa me ( _ ) ookii desu.",
      "sub": "Pola N1 は N2 (bagian tubuh) [?] KS です.",
      "options": [
        {
          "jp": "は",
          "romaji": "wa"
        },
        {
          "jp": "が",
          "romaji": "ga"
        },
        {
          "jp": "を",
          "romaji": "o"
        },
        {
          "jp": "で",
          "romaji": "de"
        }
      ],
      "answer": 1,
      "explain": "BENAR: カリナさんは めが おおきいです."
    },
    {
      "id": "b16_5",
      "type": "mcq",
      "badge": "Murni Bab 16 · Turun Kereta",
      "prompt": "東京[とうきょう]えきで でんしゃ （　　） おります。 (Turun dari kereta di Stasiun Tokyo.)",
      "promptRomaji": "Toukyou-eki de densha ( _ ) orimasu.",
      "sub": "Jebakan partikel pasangan kata kerja おります (turun kendaraan)!",
      "options": [
        {
          "jp": "に",
          "romaji": "ni"
        },
        {
          "jp": "を",
          "romaji": "o"
        },
        {
          "jp": "で",
          "romaji": "de"
        },
        {
          "jp": "から",
          "romaji": "kara"
        }
      ],
      "answer": 1,
      "explain": "BENAR: でんしゃを おります! Naik kendaraan = に のります, turun kendaraan = を おります."
    },
    {
      "id": "b16_6",
      "type": "input",
      "badge": "Latihan Ketik",
      "prompt": "Ubah 「いいです」 menjadi bentuk sambung 'bagus dan...' (～くて)!",
      "promptRomaji": "ii → bagus dan...",
      "sub": "Pengecualian いい → よ... (Hiragana atau Romaji).",
      "placeholder": "Ketik: よくて atau yokute",
      "accepted": [
        "よくて",
        "yokute"
      ],
      "displayAnswer": "よくて (yokute)",
      "explain": "BENAR: よくて (bukan いくて)!"
    }
  ]
}
);
