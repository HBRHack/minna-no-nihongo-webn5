/* MODUL LENGKAP MINNA NO NIHONGO BAB 18 – 25
 * (Bab 17 diambil utuh/digabung langsung dari file bab-17.js tanpa dibuat ulang!)
 * Setiap bab memiliki Rumus Cepat (cheatSheet) unik tersendiri, materi utuh silabus MNN, kosakata lengkap, & 6 soal murni per bab.
 */
window.MNN_MODULES = window.MNN_MODULES || [];
window.MNN_MODULES.push(
{
  "num": 18,
  "zone": "amber",
  "oldScore": "2/4",
  "title": "Bentuk Kamus (辞書形[じしょけい]), ことができます, しゅみは～ことです, & まえに",
  "shortBug": "Zona Kuning (2/4): Tertukar こと dengan もの pada ことができます (Soal 70) dan しゅみは～ことです (Soal 71).",
  "bugs": [
    {
      "soal": "Soal 70 & 71",
      "salah": "Memakai もの untuk membendakan kata kerja",
      "benar": "V-る こと が できます & しゅみは V-る こと です",
      "kenapa": "こと = hal/aktivitas abstrak. もの = barang fisik. Membendakan kata kerja WAJIB memakai こと!"
    }
  ],
  "cheatSheet": {
    "title": "Rumus Cepat Bab 18: Bentuk Kamus (辞書形[じしょけい]), Kemampuan, Hobi, & まえに",
    "takeaway": "Bentuk Kamus selalu berakhiran vokal -u! Membendakan kata kerja WAJIB pakai こと (BUKAN もの)!",
    "tables": [
      {
        "heading": "1. Cara Mengubah V-ます ke Bentuk Kamus (辞書形[じしょけい])",
        "headers": [
          "Kelompok",
          "Aturan Perubahan",
          "Contoh"
        ],
        "rows": [
          [
            "I (Godan)",
            "Ubah bunyi -i sebelum ます ke baris -u (き→く, み→む, い→う, ち→つ, し→す, り→る)",
            "かきます→かく · のみます→のむ · かいます→かう · まちます→まつ"
          ],
          [
            "II (Ichidan)",
            "Buang ます + る",
            "たべます→たべる · みます→みる · かります→かりる"
          ],
          [
            "III (Irregular)",
            "します → する  |  きます(datang) → くる",
            "うんてんします→うんてんする · もってきます→もってくる"
          ]
        ]
      },
      {
        "heading": "2. Tiga Pola Utama Bentuk Kamus di Bab 18",
        "headers": [
          "Pola",
          "Rumus",
          "Contoh"
        ],
        "rows": [
          [
            "Kemampuan (Bisa)",
            "[KB] が できます  |  [V Kamus] ことが できます",
            "かんじを よむ ことが できます。"
          ],
          [
            "Hobi",
            "しゅみは [KB / V Kamus こと] です",
            "しゅみは えいがを みる ことです。"
          ],
          [
            "Sebelum ~",
            "[V Kamus] まえに / [KB] の まえに / [Durasi] まえに",
            "ねる まえに / しょくじの まえに / 3ねんまえに"
          ]
        ]
      }
    ]
  },
  "grammar": [
    {
      "num": "POIN 01",
      "title": "Pembentukan Bentuk Kamus & Pola Kemampuan (ことができます)",
      "formula": "[Subjek] は [Kata Benda / V-る こと] が できます",
      "explain": "Bentuk Kamus adalah bentuk dasar kata kerja yang tercantum di kamus. Untuk menyatakan bisa melakukan sesuatu, tambahkan `こと` setelah Bentuk Kamus agar berubah menjadi frasa kata benda, lalu diikuti `が できます`.",
      "examples": [
        {
          "jp": "ミラーさんは 日本語[にほんご]が できます。",
          "romaji": "Miraa-san wa nihongo ga dekimasu.",
          "id": "Sdr. Miller bisa bahasa Jepang."
        },
        {
          "jp": "わたしは 200メートル およぐ ことが できます。",
          "romaji": "Watashi wa 200-meetoru oyogu koto ga dekimasu.",
          "id": "Saya bisa berenang 200 meter."
        }
      ],
      "trap": "Bug Soal 70: Jangan pernah memakai `もの` untuk `できます` (`およぐものが できます` ❌ → `およぐことが できます` ✓)!",
      "formulaRomaji": "[Subjek] wa [Kata Benda / V-ru koto] ga dekimasu",
      "formulaId": "[Subjek] dapat / bisa [Benda / melakukan V]"
    },
    {
      "num": "POIN 02",
      "title": "Menyatakan Hobi: わたしの しゅみは [N / V-る こと] です",
      "formula": "わたしの しゅみは [Kata Benda] です  |  [V Bentuk Kamus] + ことです",
      "explain": "Jika hobi cukup berupa kata benda (`おんがく`, `スポーツ`), pasang langsung sebelum です. Namun jika lebih spesifik berupa tindakan ('mendengarkan musik', 'mengumpulkan perangko'), gunakan `V-る ことです`.",
      "examples": [
        {
          "jp": "わたしの しゅみは ふるい とけいを あつめる ことです。",
          "romaji": "Watashi no shumi wa furui tokei o atsumeru koto desu.",
          "id": "Hobi saya adalah mengoleksi jam tua."
        }
      ],
      "trap": "Jangan menulis 'しゅみは えいがを みますです' ❌! Wajib diubah jadi `みる ことです` ✓.",
      "formulaRomaji": "Watashi no shumi wa [Kata Benda] desu  |  [V Bentuk Kamus] + koto desu",
      "formulaId": "Hobi saya adalah [Benda / melakukan V]"
    },
    {
      "num": "POIN 03",
      "title": "Sebelum ~ (まえに) & Kata Keterangan なかなか (+ Negatif)",
      "formula": "[V1 Kamus] まえに  |  [N] の まえに  |  [Angka Waktu] まえに  |  なかなか + Negatif",
      "explain": "Kata kerja di depan `まえに` SELALU berbentuk Kamus walaupun kalimat utamanya lampau. Untuk kata benda tambahkan `の` (`しょくじの まえに`), sedangkan untuk angka waktu langsung tempel tanpa `の` (`5ふんまえに`). Kata `なかなか` diikuti bentuk negatif berarti 'susah / tidak kunjung bisa ~'.",
      "examples": [
        {
          "jp": "日本[にほん]へ くる まえに、かんじを べんきょうしました。",
          "romaji": "Nihon e kuru mae ni, kanji o benkyou shimashita.",
          "id": "Sebelum datang ke Jepang, saya sudah belajar kanji."
        },
        {
          "jp": "日本[にほん]では なかなか うまを みる ことが できません。",
          "romaji": "Nihon dewa nakanaka uma o miru koto ga dekimasen.",
          "id": "Di Jepang susah (jarang) bisa melihat kuda."
        }
      ],
      "trap": "`3ねんまえに` ('3 tahun yang lalu') TIDAK memakai `の`!",
      "formulaRomaji": "[V1 Kamus] mae ni  |  [N] no mae ni  |  [Angka Waktu] mae ni  |  nakanaka + Negatif",
      "formulaId": "Sebelum melakukan V1 / sebelum [N] / [Waktu] yang lalu   |   Tidak mudah / jarang sekali ~"
    }
  ],
  "vocab": [
    {
      "jp": "できます / あらいます / ひきます / うたいます",
      "romaji": "dekimasu / araimasu / hikimasu / utaimasu",
      "arti": "bisa, mampu (Kel.II) / mencuci / bermain piano-gitar / menyanyi"
    },
    {
      "jp": "あつめます / すてます / かえます",
      "romaji": "atsumemasu / sutemasu / kaemasu",
      "arti": "mengumpulkan, mengoleksi / membuang / menukar, mengganti (semua Kel.II)"
    },
    {
      "jp": "うんてんします / よやくします / けんがくします",
      "romaji": "unten shimasu / yoyaku shimasu / kengaku shimasu",
      "arti": "menyetir / memesan, reservasi / meninjau pabrik"
    },
    {
      "jp": "ピアノ / げんきん / しゅみ / にっき / おいのり",
      "romaji": "piano / genkin / shumi / nikki / oinori",
      "arti": "piano / uang tunai / hobi / buku harian / doa"
    },
    {
      "jp": "しゃちょう / ぶちょう / かちょう",
      "romaji": "shachou / buchou / kachou",
      "arti": "presiden direktur / kepala divisi / kepala seksi"
    },
    {
      "jp": "どうぶつ / うま / なかなか / ぜひ / まえに",
      "romaji": "doubutsu / uma / nakanaka / zehi / mae ni",
      "arti": "hewan / kuda / susah untuk (+ negatif) / benar-benar, silakan / sebelum"
    }
  ],
  "questions": [
    {
      "id": "b18_1",
      "type": "mcq",
      "badge": "Perbaikan Soal 70",
      "prompt": "カードで はらう （　　）が できます。 (Bisa membayar dengan kartu.)",
      "promptRomaji": "Kaado de harau ( __ ) ga dekimasu.",
      "sub": "Pembenda kata kerja sebelum が できます.",
      "options": [
        {
          "jp": "もの",
          "romaji": "mono"
        },
        {
          "jp": "こと",
          "romaji": "koto"
        },
        {
          "jp": "とき",
          "romaji": "toki"
        },
        {
          "jp": "ひと",
          "romaji": "hito"
        }
      ],
      "answer": 1,
      "explain": "BENAR: はらう ことが できます!"
    },
    {
      "id": "b18_2",
      "type": "mcq",
      "badge": "Perbaikan Soal 71",
      "prompt": "わたしの しゅみは えを かく （　　　　）。 (Hobi saya menggambar.)",
      "promptRomaji": "Watashi no shumi wa e o kaku ( ____ ).",
      "sub": "Rumus hobi dengan kata kerja.",
      "options": [
        {
          "jp": "ものです",
          "romaji": "mono desu"
        },
        {
          "jp": "ことです",
          "romaji": "koto desu"
        },
        {
          "jp": "ときです",
          "romaji": "toki desu"
        },
        {
          "jp": "まえです",
          "romaji": "mae desu"
        }
      ],
      "answer": 1,
      "explain": "BENAR: かく ことです!"
    },
    {
      "id": "b18_3",
      "type": "mcq",
      "badge": "Murni Bab 18 · Bentuk Kamus",
      "prompt": "Manakah Bentuk Kamus yang BENAR untuk 「まちます」 dan 「あつめます」?",
      "promptRomaji": "machimasu (Kel.I) & atsumemasu (Kel.II)",
      "sub": "ち → つ | Kel.II buang ます + る.",
      "options": [
        {
          "jp": "まちる ・ あつめる",
          "romaji": "machiru · atsumeru"
        },
        {
          "jp": "まつ ・ あつめる",
          "romaji": "matsu · atsumeru"
        },
        {
          "jp": "まつ ・ あつむ",
          "romaji": "matsu · atsumu"
        },
        {
          "jp": "ま투 ・ あつまる",
          "romaji": "matsu · atsumaru"
        }
      ],
      "answer": 1,
      "explain": "BENAR: まつ dan あつめる!"
    },
    {
      "id": "b18_4",
      "type": "mcq",
      "badge": "Murni Bab 18 · まえに",
      "prompt": "しょくじ （　　） まえに、てを あらいます。 (Sebelum makan, mencuci tangan.)",
      "promptRomaji": "Shokuji ( _ ) mae ni, te o araimasu.",
      "sub": "しょくじ adalah Kata Benda.",
      "options": [
        {
          "jp": "を",
          "romaji": "o"
        },
        {
          "jp": "の",
          "romaji": "no"
        },
        {
          "jp": "に",
          "romaji": "ni"
        },
        {
          "jp": "な",
          "romaji": "na"
        }
      ],
      "answer": 1,
      "explain": "BENAR: しょくじの まえに (Kata Benda + の まえに)."
    },
    {
      "id": "b18_5",
      "type": "mcq",
      "badge": "Murni Bab 18 · なかなか",
      "prompt": "かんじが なかなか （　　　　　）。 (Susah menghafal/bisa kanji.)",
      "promptRomaji": "Kanji ga nakanaka ( _____ ).",
      "sub": "なかなか wajib diikuti bentuk negatif.",
      "options": [
        {
          "jp": "おぼえます",
          "romaji": "oboemasu"
        },
        {
          "jp": "おぼえられません / わかりません",
          "romaji": "wakarimasen"
        },
        {
          "jp": "できます",
          "romaji": "dekimasu"
        },
        {
          "jp": "わかりました",
          "romaji": "wakarimashita"
        }
      ],
      "answer": 1,
      "explain": "BENAR: なかなか selalu dipasangkan dengan bentuk negatif!"
    },
    {
      "id": "b18_6",
      "type": "input",
      "badge": "Latihan Ketik",
      "prompt": "Ketik Bentuk Kamus dari 「およぎます」 (berenang)!",
      "promptRomaji": "oyogimasu → ?",
      "sub": "ぎ (gi) → ぐ (gu). Ketik Hiragana atau Romaji.",
      "placeholder": "Ketik: およぐ atau oyogu",
      "accepted": [
        "およぐ",
        "oyogu"
      ],
      "displayAnswer": "およぐ (oyogu)",
      "explain": "BENAR: およぐ (oyogu)!"
    }
  ]
},
{
  "num": 19,
  "zone": "amber",
  "oldScore": "2/4",
  "title": "Bentuk -Ta (た形[けい]), Pengalaman (～たことがあります), ～たり～たり, & なります",
  "shortBug": "Zona Kuning (2/4): Salah konjugasi のみます→のんだ (Soal 73) dan lupa ubah -i jadi -ku pada あつく なります (Soal 76).",
  "bugs": [
    {
      "soal": "Soal 73",
      "salah": "のみます → のった",
      "benar": "のみます → のんだ (み・び・に → んだ!)",
      "kenapa": "Bentuk -Ta sama persis dengan Bentuk -Te (のんで → のんだ). Yang jadi のった itu のります (naik)!"
    },
    {
      "soal": "Soal 76",
      "salah": "あつい なります",
      "benar": "あつく なります (KS-い: coret い + く なります)",
      "kenapa": "Sebelum なります, KS-い wajib berubah menjadi ～く, sedangkan KS-な/Benda ditambah に."
    }
  ],
  "cheatSheet": {
    "title": "Rumus Cepat Bab 19: Bentuk -Ta, Pengalaman, ～たり～たり, & なります",
    "takeaway": "Bentuk -Ta = Bentuk -Te (cukup ganti て→た, で→だ)! KS-い + なります wajib ubah い → く!",
    "tables": [
      {
        "heading": "1. Rumus Kilat Bentuk -Ta & Dua Polanya",
        "headers": [
          "Pola",
          "Rumus",
          "Contoh"
        ],
        "rows": [
          [
            "Konjugasi Bentuk -Ta",
            "って→った | んで→んだ | いて→いた | いで→いだ | して→した",
            "のんで→のんだ · いって→いった · きて→きた"
          ],
          [
            "Pengalaman (Pernah)",
            "[V Bentuk-た] ことが あります",
            "北海道[ほっかいどう]へ いった ことが あります。 (Negatif: いちども ～ありません)"
          ],
          [
            "Daftar Contoh Aksi",
            "V1-たり、V2-たり します (tense di します!)",
            "にちようびは そうじしたり、せんたくしたり します。"
          ]
        ]
      },
      {
        "heading": "2. Perubahan Keadaan dengan なります (Menjadi ~)",
        "headers": [
          "Jenis Kata",
          "Rumus Perubahan",
          "Contoh"
        ],
        "rows": [
          [
            "Kata Sifat-い",
            "Coret い + く なります (いい → よく なります!)",
            "さむい → さむく なります / つよい → つよく なります"
          ],
          [
            "Kata Sifat-な",
            "Buang な + に なります",
            "げんき → げんきに なります / きれい → きれいに なります"
          ],
          [
            "Kata Benda",
            "+ に なります",
            "25さいに なります / よるに なりました"
          ]
        ]
      }
    ]
  },
  "grammar": [
    {
      "num": "POIN 01",
      "title": "Bentuk -Ta & Menyatakan Pengalaman: V-た ことが あります",
      "formula": "[V Bentuk -Ta] + ことが あります (Pernah ~)   |   いちども ～た ことが ありません (Belum pernah sekali pun)",
      "explain": "Pola ini menyebutkan pengalaman hidup di masa lampau hingga sekarang (tanpa titik waktu kemarin/tadi). Jika disebutkan waktu spesifik seperti `きのう`, gunakan `V-ました` biasa, bukan `たことがあります`.",
      "examples": [
        {
          "jp": "わたしは うまに のった ことが あります。",
          "romaji": "Watashi wa uma ni notta koto ga arimasu.",
          "id": "Saya pernah menunggang kuda."
        },
        {
          "jp": "いちども すもうを みた ことが ありません。",
          "romaji": "Ichido mo sumou o mita koto ga arimasen.",
          "id": "Sekali pun saya belum pernah menonton sumo."
        }
      ],
      "trap": "Bug Soal 73: のみます (minum) → のんだ. のります (naik) → のった!",
      "formulaRomaji": "[V Bentuk-ta] + koto ga arimasu   |   ichido mo ~ta koto ga arimasen",
      "formulaId": "Pernah melakukan ~ (pengalaman)   |   Belum pernah sekali pun melakukan ~"
    },
    {
      "num": "POIN 02",
      "title": "Menyebut Beberapa Aktivitas Perwakilan: V1-たり、V2-たり します",
      "formula": "[V1 Bentuk-た] り、[V2 Bentuk-た] り します／しました／したいです",
      "explain": "Berbeda dengan `V1-て、V2` (Bab 16) yang berurutan kronologis, `～たり～たりします` mengambil 2 contoh aktivitas acak di antara kegiatan lainnya. Wajib ditutup dengan `します` (atau konjugasinya: `しました`, `したいです`).",
      "examples": [
        {
          "jp": "きのうは テレビを みたり、ほんを よんだり しました。",
          "romaji": "Kinou wa terebi o mitari, hon o yondari shimashita.",
          "id": "Kemarin saya menonton TV, membaca buku, dan sebagainya."
        }
      ],
      "trap": "Jangan lupa menutup kalimat `～たり～たり` dengan `します / しました`!",
      "formulaRomaji": "[V1 Bentuk-ta] ri, [V2 Bentuk-ta] ri shimasu / shimashita / shitai desu",
      "formulaId": "Melakukan berbagai kegiatan seperti V1, V2, dan sebagainya"
    },
    {
      "num": "POIN 03",
      "title": "Perubahan Keadaan: ～く／に なります (Menjadi ~)",
      "formula": "KS-い (coret い) + く なります   |   KS-な / Kata Benda + に なります",
      "explain": "Gunakan pola ini saat keadaan berubah dari kondisi sebelumnya (misal cuaca mulai panas, badan sudah sembuh/sehat, umur bertambah).",
      "examples": [
        {
          "jp": "だんだん あつく なります。",
          "romaji": "Dandan atsuku narimasu.",
          "id": "Lama-kelamaan menjadi panas."
        },
        {
          "jp": "びょうきが よくなって、げんきに なりました。",
          "romaji": "Byouki ga yokunatte, genki ni narimashita.",
          "id": "Sakitnya membaik dan menjadi sehat."
        }
      ],
      "trap": "Bug Soal 76: KS-い WAJIB ubah い → く (`あつく なります`), jangan langsung tempel!",
      "formulaRomaji": "KS-i (coret i) + ku narimasu   |   KS-na / Kata Benda + ni narimasu",
      "formulaId": "Menjadi [Kata Sifat / Kata Benda] (perubahan keadaan)"
    }
  ],
  "vocab": [
    {
      "jp": "のぼります（やまに～） / とまります（ホテルに～）",
      "romaji": "noborimasu / tomarimasu",
      "arti": "mendaki gunung (に) / menginap di hotel (に)"
    },
    {
      "jp": "そうじします / せんたくします / れんしゅうします / なります",
      "romaji": "souji shimasu / sentaku shimasu / renshuu shimasu / narimasu",
      "arti": "membersihkan / mencuci pakaian / berlatih / menjadi"
    },
    {
      "jp": "ねむい / つよい / よわい / ちょうしが いい（わるい）",
      "romaji": "nemui / tsuyoi / yowai / choushi ga ii (warui)",
      "arti": "mengantuk / kuat / lemah / kondisi badan-mesin bagus (buruk)"
    },
    {
      "jp": "すもう / おちゃ / かぶき / ゴルフ",
      "romaji": "sumou / ocha / kabuki / gorufu",
      "arti": "gulat sumo / upacara minum teh / kabuki / golf"
    },
    {
      "jp": "いちど / いちども / だんだん / もうすぐ / おかげさまで",
      "romaji": "ichido / ichido mo / dandan / mousugu / okagesama de",
      "arti": "sekali / sekali pun (+ negatif) / berangsur-angsur / sebentar lagi / berkat doa Anda"
    }
  ],
  "questions": [
    {
      "id": "b19_1",
      "type": "mcq",
      "badge": "Perbaikan Soal 73",
      "prompt": "Ubah 「のみます」 (minum) ke Bentuk -Ta:",
      "promptRomaji": "nomimasu → ?",
      "sub": "み・び・に → んだ.",
      "options": [
        {
          "jp": "のった",
          "romaji": "notta"
        },
        {
          "jp": "のんだ",
          "romaji": "nonda"
        },
        {
          "jp": "のみた",
          "romaji": "nomita"
        },
        {
          "jp": "のいた",
          "romaji": "noita"
        }
      ],
      "answer": 1,
      "explain": "BENAR: のんだ!"
    },
    {
      "id": "b19_2",
      "type": "mcq",
      "badge": "Perbaikan Soal 76",
      "prompt": "もうすぐ （　　　　） なります。 (Sebentar lagi menjadi panas. — あつい)",
      "promptRomaji": "Mousugu ( ____ ) narimasu.",
      "sub": "KS-い sebelum なります.",
      "options": [
        {
          "jp": "あつい",
          "romaji": "atsui"
        },
        {
          "jp": "あついに",
          "romaji": "atsui ni"
        },
        {
          "jp": "あつく",
          "romaji": "atsuku"
        },
        {
          "jp": "あつに",
          "romaji": "atsu ni"
        }
      ],
      "answer": 2,
      "explain": "BENAR: あつく なります!"
    },
    {
      "id": "b19_3",
      "type": "mcq",
      "badge": "Murni Bab 19 · Pengalaman",
      "prompt": "富士山[ふじさん]に （　　　　） ことが ありますか。 (Pernahkah mendaki Gunung Fuji? — のぼります)",
      "promptRomaji": "Fujisan ni ( ____ ) koto ga arimasu ka.",
      "sub": "のぼります (り → った) + ことが あります.",
      "options": [
        {
          "jp": "のぼる",
          "romaji": "noboru"
        },
        {
          "jp": "のぼった",
          "romaji": "nobotta"
        },
        {
          "jp": "のぼって",
          "romaji": "nobotte"
        },
        {
          "jp": "のぼりた",
          "romaji": "noborita"
        }
      ],
      "answer": 1,
      "explain": "BENAR: のぼった ことが ありますか!"
    },
    {
      "id": "b19_4",
      "type": "mcq",
      "badge": "Murni Bab 19 · ～たり～たり",
      "prompt": "やすみの ひは かいもの（　　　　）、さんぽしたり します。",
      "promptRomaji": "Yasumi no hi wa kaimono ( ____ ), sanpo shitari shimasu.",
      "sub": "します → した + り.",
      "options": [
        {
          "jp": "して",
          "romaji": "shite"
        },
        {
          "jp": "したり",
          "romaji": "shitari"
        },
        {
          "jp": "した",
          "romaji": "shita"
        },
        {
          "jp": "するり",
          "romaji": "sururi"
        }
      ],
      "answer": 1,
      "explain": "BENAR: かいものしたり、さんぽしたり します."
    },
    {
      "id": "b19_5",
      "type": "mcq",
      "badge": "Murni Bab 19 · KS-な + なります",
      "prompt": "へやが （　　　　） なりました。 (Kamar menjadi bersih. — きれい)",
      "promptRomaji": "Heya ga ( ____ ) narimashita.",
      "sub": "きれい adalah KS-な!",
      "options": [
        {
          "jp": "きれいく",
          "romaji": "kireiku"
        },
        {
          "jp": "きれいに",
          "romaji": "kirei ni"
        },
        {
          "jp": "きれいな",
          "romaji": "kirei na"
        },
        {
          "jp": "きれいで",
          "romaji": "kirei de"
        }
      ],
      "answer": 1,
      "explain": "BENAR: きれいに なりました (KS-な memakai に なります)."
    },
    {
      "id": "b19_6",
      "type": "input",
      "badge": "Latihan Ketik",
      "prompt": "Ubah 「ねむい」 (mengantuk) menjadi 'menjadi mengantuk' (sebelum なりました)!",
      "promptRomaji": "nemui → ( ? ) narimashita",
      "sub": "Coret い + く (Hiragana atau Romaji).",
      "placeholder": "Ketik: ねむく atau nemuku",
      "accepted": [
        "ねむく",
        "nemuku",
        "ねむくなりました",
        "nemuku narimashita"
      ],
      "displayAnswer": "ねむく (nemuku)",
      "explain": "BENAR: ねむく なりました!"
    }
  ]
},
{
  "num": 20,
  "zone": "red",
  "oldScore": "0/4",
  "title": "Bentuk Biasa / Kasual (普通形[ふつうけい] / Plain Form) & Percakapan Akrab",
  "shortBug": "Zona Merah (0/4): Salah いきません→いかない, たかいです→たかい, うん vs ううん, dan べんきょうしました→べんきょうした.",
  "bugs": [
    {
      "soal": "Soal 77",
      "salah": "いきません → いきない",
      "benar": "いかない (Bentuk -Nai)",
      "kenapa": "Negatif non-lampau biasa kata kerja = Bentuk -Nai!"
    },
    {
      "soal": "Soal 78",
      "salah": "たかいです (+) → たかくない (-)",
      "benar": "たかい (cukup buang です!)",
      "kenapa": "Jangan ubah positif menjadi negatif! KS-い cukup hapus です."
    },
    {
      "soal": "Soal 79",
      "salah": "Tertukar うん dan ううん",
      "benar": "うん (1 u) = YA · ううん (2 u) = TIDAK",
      "kenapa": "Satu う pendek = angguk Ya; dua う panjang = geleng Tidak."
    },
    {
      "soal": "Soal 80",
      "salah": "Salah mengubah べんきょうしました",
      "benar": "べんきょうした (Bentuk -Ta)",
      "kenapa": "Lampau positif biasa kata kerja = Bentuk -Ta!"
    }
  ],
  "cheatSheet": {
    "title": "Rumus Cepat Bab 20: Matriks 4×4 Bentuk Sopan vs Bentuk Biasa (普通形[ふつうけい])",
    "takeaway": "KS-い cukup BUANG です (JANGAN tambah だ!). うん = YA, ううん = TIDAK!",
    "tables": [
      {
        "heading": "1. Matriks Lengkap Bentuk Biasa (Wajib Kuasai untuk Bab 21–25!)",
        "headers": [
          "Jenis Kata",
          "Non-Lampau (+)",
          "Non-Lampau (-)",
          "Lampau (+)",
          "Lampau (-)"
        ],
        "rows": [
          [
            "Kata Kerja",
            "いく (Kamus)",
            "いかない (-Nai)",
            "いった (-Ta)",
            "いかなかった (-nakatta)"
          ],
          [
            "Kata Sifat-い",
            "たかい (tanpa だ!)",
            "たかくない",
            "たかかった",
            "たかくなかった"
          ],
          [
            "Kata Sifat-な",
            "ひまだ",
            "ひまじゃない",
            "ひまだった",
            "ひまじゃなかった"
          ],
          [
            "Kata Benda",
            "あめだ",
            "あめじゃない",
            "あめだった",
            "あめじゃなかった"
          ]
        ]
      },
      {
        "heading": "2. Aturan Percakapan Kasual Antar Teman",
        "headers": [
          "Sopan",
          "Kasual (Biasa)",
          "Catatan Penting"
        ],
        "rows": [
          [
            "はい / いいえ",
            "うん (Ya) / ううん (Tidak)",
            "Jangan tertukar jumlah huruf う!"
          ],
          [
            "～ですか？",
            "Hapus か + intonasi naik (↗)",
            "Pada KS-な/N, だ ikut dihapus: あした ひま？"
          ],
          [
            "～て います",
            "～て いる (lisan sering jadi ～てる)",
            "いま なに してる？ (Sekarang lagi ngapain?)"
          ]
        ]
      }
    ]
  },
  "grammar": [
    {
      "num": "POIN 01",
      "title": "Mengubah Kata Kerja, KS-い, KS-な, & Kata Benda ke Bentuk Biasa",
      "formula": "V: Kamus / ない / た / なかった  |  KS-い: buang です  |  KS-な & N: だ / じゃない / だった / じゃなかった",
      "explain": "Bentuk Biasa dipakai untuk dua hal besar: (1) Berbicara santai dengan teman dekat/keluarga, dan (2) Menjadi bahan wajib sebelum `とおもいます`, `といいました`, anak kalimat Bab 22, dan `とき` di Bab 23! Khusus negatif lampau kata kerja (`V-ませんでした`), ubah ke Bentuk -Nai lalu ganti `い` dengan `かった` (`いきませんでした → いかない → いかなかった`).",
      "examples": [
        {
          "jp": "かいます → かう / かわない / かった / かわなかった",
          "romaji": "kau / kawanai / katta / kawanakatta",
          "id": "beli / tidak beli / sudah beli / kemarin tidak beli"
        },
        {
          "jp": "おいしいです → おいしい (JANGAN おいしいだ!)",
          "romaji": "oishii desu → oishii",
          "id": "KS-い tidak pernah memakai だ!"
        }
      ],
      "trap": "Pengecualian `あります`: Positif = `ある`, Negatif = `ない`, Lampau (+) = `あった`, Lampau (-) = `なかった`!",
      "formulaRomaji": "V: Kamus / nai / ta / nakatta  |  KS-i: buang desu  |  KS-na & N: da / ja nai / datta / ja nakatta",
      "formulaId": "Ringkasan Bentuk Biasa (Plain Form) untuk percakapan kasual dan anak kalimat"
    },
    {
      "num": "POIN 02",
      "title": "Aturan Kalimat Tanya Kasual, Penghilangan Partikel, & うん／ううん",
      "formula": "コーヒー［を］ のむ？  →  うん、のむ。 / ううん、のまない。",
      "explain": "Dalam kalimat tanya kasual, partikel `か` dihapus dan diganti intonasi naik di ujung kalimat. Untuk Kata Benda dan KS-な, kopula `だ` dihapus saat bertanya (`きょうは やすみ？`). Partikel `は`, `を`, `が`, `へ` sering dihilangkan jika maknanya sudah jelas.",
      "examples": [
        {
          "jp": "A：きのう パーティーに いった？\n\nB：ううん、いかなかった。",
          "romaji": "A: Kinou paatii ni itta?\nB: Uun, ikanakatta.",
          "id": "Kemarin pergi ke pesta? ...Enggak, tidak pergi."
        },
        {
          "jp": "A：じしょ、もってる？\n\nB：うん、もってるよ。",
          "romaji": "A: Jisho, motteru?\nB: Un, motteru yo.",
          "id": "Punya kamus? ...Ya, punya kok (`もっている → もってる`)."
        }
      ],
      "trap": "Bug Soal 79: `うん` = YA, `ううん` = TIDAK!",
      "formulaRomaji": "Koohii [o] nomu?  →  Un, nomu. / Uun, nomanai.",
      "formulaId": "Pertanyaan santai cukup menaikkan intonasi (tanpa か) · Jawab santai: Un (Ya) / Uun (Tidak)"
    }
  ],
  "vocab": [
    {
      "jp": "いります（ビザが～） / しらべます / なおします / しゅうりします / でんわします",
      "romaji": "irimasu (ga) / shirabemasu / naoshimasu / shuuri shimasu / denwa shimasu",
      "arti": "memerlukan (Kel.I! pakai が: いらない) / memeriksa-mencari tahu / memperbaiki / mereparasi / menelepon"
    },
    {
      "jp": "ぼく / きみ / ～くん",
      "romaji": "boku / kimi / ~kun",
      "arti": "aku (pria akrab) / kamu (akrab) / panggilan akrab pria/sebaya"
    },
    {
      "jp": "うん / ううん / かいしゃいん / ことば / ぶっか / 着物[きもの] / ビザ",
      "romaji": "un / uun / kaishain / kotoba / bukka / kimono / biza",
      "arti": "ya / tidak / karyawan perusahaan / kosakata-bahasa / harga barang kebutuhan / kimono / visa"
    },
    {
      "jp": "はじめ / おわり / こっち / そっち / あっち / どっち",
      "romaji": "hajime / owari / kocchi / socchi / acchi / docchi",
      "arti": "awal / akhir / sebelah sini / situ / sana / mana (kasual dari こちら dst.)"
    }
  ],
  "questions": [
    {
      "id": "b20_1",
      "type": "mcq",
      "badge": "Perbaikan Soal 77",
      "prompt": "Ubah 「いきません」 ke Bentuk Biasa:",
      "promptRomaji": "ikimasen → ?",
      "sub": "Negatif non-lampau biasa kata kerja.",
      "options": [
        {
          "jp": "いきない",
          "romaji": "ikinai"
        },
        {
          "jp": "いかない",
          "romaji": "ikanai"
        },
        {
          "jp": "いくない",
          "romaji": "ikunai"
        },
        {
          "jp": "いった",
          "romaji": "itta"
        }
      ],
      "answer": 1,
      "explain": "BENAR: いかない!"
    },
    {
      "id": "b20_2",
      "type": "mcq",
      "badge": "Perbaikan Soal 78",
      "prompt": "Ubah 「たかいです」 (positif!) ke Bentuk Biasa:",
      "promptRomaji": "takai desu → ?",
      "sub": "KS-い positif non-lampau.",
      "options": [
        {
          "jp": "たかくない",
          "romaji": "takakunai"
        },
        {
          "jp": "たかいだ",
          "romaji": "takai da"
        },
        {
          "jp": "たかい",
          "romaji": "takai"
        },
        {
          "jp": "たかかった",
          "romaji": "takakatta"
        }
      ],
      "answer": 2,
      "explain": "BENAR: たかい (cukup buang です, tanpa だ!)."
    },
    {
      "id": "b20_3",
      "type": "mcq",
      "badge": "Perbaikan Soal 79",
      "prompt": "A：「おなか すいた？」\nB：「（　）」 (Ingin menjawab santai: 'Tidak.')",
      "promptRomaji": "A: Onaka suita?\nB: 'Tidak' dalam bahasa kasual = ?",
      "sub": "Hitung huruf う-nya!",
      "options": [
        {
          "jp": "うん",
          "romaji": "un"
        },
        {
          "jp": "ううん",
          "romaji": "uun"
        },
        {
          "jp": "はい",
          "romaji": "hai"
        },
        {
          "jp": "ええ",
          "romaji": "ee"
        }
      ],
      "answer": 1,
      "explain": "BENAR: ううん (2 huruf u = Tidak)."
    },
    {
      "id": "b20_4",
      "type": "mcq",
      "badge": "Perbaikan Soal 80",
      "prompt": "Ubah 「べんきょうしました」 ke Bentuk Biasa:",
      "promptRomaji": "benkyou shimashita → ?",
      "sub": "Lampau positif biasa kata kerja.",
      "options": [
        {
          "jp": "べんきょうする",
          "romaji": "benkyou suru"
        },
        {
          "jp": "べんきょうしない",
          "romaji": "benkyou shinai"
        },
        {
          "jp": "べんきょうした",
          "romaji": "benkyou shita"
        },
        {
          "jp": "べんきょうして",
          "romaji": "benkyou shite"
        }
      ],
      "answer": 2,
      "explain": "BENAR: べんきょうした!"
    },
    {
      "id": "b20_5",
      "type": "mcq",
      "badge": "Murni Bab 20 · Pengecualian ありませんでした",
      "prompt": "Ubah 「おかねが ありませんでした」 (Kemarin tidak punya uang) ke Bentuk Biasa:",
      "promptRomaji": "arimasen deshita → ?",
      "sub": "あります → ない → lampaunya?",
      "options": [
        {
          "jp": "あらなかった",
          "romaji": "aranakatta"
        },
        {
          "jp": "なかった",
          "romaji": "nakatta"
        },
        {
          "jp": "ないだった",
          "romaji": "naidatta"
        },
        {
          "jp": "ありなかった",
          "romaji": "arinakatta"
        }
      ],
      "answer": 1,
      "explain": "BENAR: おかねが なかった! (ない → なかった)."
    },
    {
      "id": "b20_6",
      "type": "input",
      "badge": "Latihan Ketik",
      "prompt": "Ketik Bentuk Biasa dari 「あめでした」 (Kemarin hujan)!",
      "promptRomaji": "ame deshita → ?",
      "sub": "でした berubah menjadi だった (Hiragana atau Romaji).",
      "placeholder": "Ketik: あめだった atau ame datta",
      "accepted": [
        "あめだった",
        "ame datta",
        "amedatta"
      ],
      "displayAnswer": "あめだった (ame datta)",
      "explain": "BENAR: あめだった!"
    }
  ]
},
{
  "num": 21,
  "zone": "amber",
  "oldScore": "2/4",
  "title": "Pendapat (と思[おも]います), Kutipan (と言[い]いました), でしょう？, & Acara (で…があります)",
  "shortBug": "Zona Kuning (2/4): Salah mengartikan らいしゅう くると いいました (Soal 82) dan kosakata いけん (Soal 84).",
  "bugs": [
    {
      "soal": "Soal 82",
      "salah": "らいしゅう くると いいました diartikan datang minggu lalu",
      "benar": "Bilang akan datang MINGGU DEPAN",
      "kenapa": "と いいました mengutip ucapan, dan らいしゅう = minggu depan."
    },
    {
      "soal": "Soal 84",
      "salah": "いけん dikira alasan",
      "benar": "いけん (意見[いけん]) = PENDAPAT / OPINI",
      "kenapa": "いけんを いいます = mengutarakan pendapat."
    }
  ],
  "cheatSheet": {
    "title": "Rumus Cepat Bab 21: とおもいます, といいました, & でしょう？ (Kapan Pakai だ?)",
    "takeaway": "Sebelum とおもいます / といいました → KS-な & Benda WAJIB pakai だ! Sebelum でしょう？ → HAPUS だ!",
    "tables": [
      {
        "heading": "1. Perbandingan Sambungan Tiga Pola Bab 21",
        "headers": [
          "Jenis Kata",
          "+ とおもいます / といいました",
          "+ でしょう？ (...kan?)"
        ],
        "rows": [
          [
            "Kata Kerja",
            "いく と おもいます",
            "いく でしょう？"
          ],
          [
            "Kata Sifat-い",
            "たかい と おもいます",
            "たかい でしょう？"
          ],
          [
            "Kata Sifat-な",
            "べんりだ と おもいます (WAJIB だ!)",
            "べんり でしょう？ (TANPA だ!)"
          ],
          [
            "Kata Benda",
            "あめだ と おもいます (WAJIB だ!)",
            "あめ でしょう？ (TANPA だ!)"
          ]
        ]
      },
      {
        "heading": "2. Pola Tambahan Penting Bab 21",
        "headers": [
          "Pola",
          "Rumus",
          "Contoh"
        ],
        "rows": [
          [
            "Tanya Pendapat",
            "[Topik] に ついて どう おもいますか",
            "日本[にほん]の せいかつに ついて どう おもいますか。"
          ],
          [
            "Tempat Acara",
            "[Tempat] で [Acara/Pesta/Lomba] が あります",
            "東京[とうきょう]で しあいが あります。 (Acara = kejadian, pakai で bukan に!)"
          ]
        ]
      }
    ]
  },
  "grammar": [
    {
      "num": "POIN 01",
      "title": "Menyatakan Pendapat/Dugaan (～と おもいます) & に ついて",
      "formula": "[Kalimat Bentuk Biasa] + と おもいます   |   [N] に ついて どう おもいますか",
      "explain": "Digunakan untuk menyatakan opini maupun perkiraan pembicara. Untuk kalimat negatif ('Saya rasa dia tidak tahu'), bentuk negatif diletakkan DI DALAM klausa sebelum と (`しらないと おもいます`).",
      "examples": [
        {
          "jp": "こんばん あめが ふると おもいます。",
          "romaji": "Konban ame ga furu to omoimasu.",
          "id": "Saya rasa malam ini akan turun hujan."
        },
        {
          "jp": "この ほんは やくに たつと おもいます。",
          "romaji": "Kono hon wa yaku ni tatsu to omoimasu.",
          "id": "Menurut saya buku ini bermanfaat."
        }
      ],
      "trap": "Jangan lupa `だ` untuk KS-な dan Kata Benda sebelum `と`: `きれいだと おもいます` ✓ (`きれいとおもいます` ❌)!",
      "formulaRomaji": "[Kalimat Bentuk Biasa] + to omoimasu   |   [N] ni tsuite dou omoimasu ka",
      "formulaId": "Saya pikir / menurut saya [Kalimat]   |   Bagaimana pendapat Anda tentang [N]?"
    },
    {
      "num": "POIN 02",
      "title": "Mengutip Ucapan: 「…」と いいました vs [Bentuk Biasa] と いいました",
      "formula": "Langsung: 「あした やすみます」と いいました   |   Tidak langsung: あした やすむと いいました",
      "explain": "Saat menyampaikan kembali perkataan orang lain secara tidak langsung, ubah ucapannya ke Bentuk Biasa lalu tambahkan `と いいました`.",
      "examples": [
        {
          "jp": "ミラーさんは らいしゅう 大阪[おおさか]へ いくと いいました。",
          "romaji": "Miraa-san wa raishuu Oosaka e iku to iimashita.",
          "id": "Sdr. Miller berkata bahwa minggu depan akan pergi ke Osaka."
        }
      ],
      "trap": "Bug Soal 82: `いいました` lampau karena berbicaranya sudah lewat, tapi isi kutipan `らいしゅう いく` tetap berarti minggu depan!",
      "formulaRomaji": "Langsung: 'Ashita yasumimasu' to iimashita  |  Tidak langsung: Ashita yasumu to iimashita",
      "formulaId": "Mengutip ucapan langsung (persis diucapkan) vs tidak langsung (memakai Bentuk Biasa)"
    },
    {
      "num": "POIN 03",
      "title": "Konfirmasi ～でしょう？ & Tempat Acara ([Tempat] で [Acara] が あります)",
      "formula": "[Bentuk Biasa tanpa だ] + でしょう？（↗）   |   [Tempat] で [Acara] が あります",
      "explain": "`～でしょう？` dengan intonasi naik meminta persetujuan lawan bicara ('...iya kan?'). Selain itu, khusus kata benda berupa ACARA/KEJADIAN (`パーティー, コンサート, おまつり, しあい, じこ`), tempat penyelenggaraannya memakai `で` meskipun predikatnya `あります`!",
      "examples": [
        {
          "jp": "北海道[ほっかいどう]は さむかったでしょう？",
          "romaji": "Hokkaidou wa samukatta deshou?",
          "id": "Hokkaido kemarin dingin, kan?"
        },
        {
          "jp": "あした こうえんで おまつりが あります。",
          "romaji": "Ashita kouen de omatsuri ga arimasu.",
          "id": "Besok di taman diadakan festival."
        }
      ],
      "trap": "Jangan menulis `あした ひまだでしょう？` ❌ → wajib hapus `だ` menjadi `あした ひまでしょう？` ✓!",
      "formulaRomaji": "[Bentuk Biasa tanpa da] + deshou? (↗)   |   [Tempat] de [Acara] ga arimasu",
      "formulaId": "Konfirmasi lunak '...kan?' (intonasi naik)   |   Di [Tempat] diadakan [Acara]"
    }
  ],
  "vocab": [
    {
      "jp": "おもいます / いいます / たります / かちます / まけます",
      "romaji": "omoimasu / iimasu / tarimasu / kachimasu / makemasu",
      "arti": "mengira-merasa / berkata / cukup (Kel.II) / menang / kalah"
    },
    {
      "jp": "あります（おまつりが～） / やくに たちます",
      "romaji": "arimasu / yaku ni tachimasu",
      "arti": "diadakan (festival) / berguna, bermanfaat"
    },
    {
      "jp": "むだ［な］ / ふべん［な］ / おなじ / すごい",
      "romaji": "muda / fuben / onaji / sugoi",
      "arti": "sia-sia / tidak praktis / sama / hebat, luar biasa"
    },
    {
      "jp": "しゅしょう / だいとうりょう / せいじ / ニュース / スピーチ / しあい",
      "romaji": "shushou / daitouryou / seiji / nyuusu / supiichi / shiai",
      "arti": "perdana menteri / presiden / politik / berita / pidato / pertandingan"
    },
    {
      "jp": "いけん / はなし / ユーモア / デザイン / こうつう / ラッシュ",
      "romaji": "iken / hanashi / yuumoa / dezain / koutsuu / rasshu",
      "arti": "pendapat-opini / pembicaraan-cerita / humor / desain / lalu lintas / jam sibuk"
    },
    {
      "jp": "たぶん / きっと / ほんとうに / ～に ついて",
      "romaji": "tabun / kitto / hontou ni / ~ni tsuite",
      "arti": "mungkin / pasti / benar-benar / tentang ~"
    }
  ],
  "questions": [
    {
      "id": "b21_1",
      "type": "mcq",
      "badge": "Perbaikan Soal 82",
      "prompt": "Apa arti dari: 「たなかさんは らいしゅう くると いいました。」?",
      "promptRomaji": "Tanaka-san wa raishuu kuru to iimashita.",
      "sub": "らいしゅう + くると いいました.",
      "options": [
        {
          "jp": "Tanaka datang minggu lalu.",
          "romaji": ""
        },
        {
          "jp": "Tanaka bilang akan datang minggu depan.",
          "romaji": ""
        },
        {
          "jp": "Saya rasa Tanaka datang minggu depan.",
          "romaji": ""
        },
        {
          "jp": "Tanaka bilang tidak datang minggu depan.",
          "romaji": ""
        }
      ],
      "answer": 1,
      "explain": "BENAR: Tanaka bilang akan datang minggu depan!"
    },
    {
      "id": "b21_2",
      "type": "mcq",
      "badge": "Perbaikan Soal 84",
      "prompt": "かいぎで （　　　）を いいました。 (Menyampaikan PENDAPAT di rapat.)",
      "promptRomaji": "Kaigi de ( ___ ) o iimashita.",
      "sub": "Kosakata untuk 'pendapat / opini'.",
      "options": [
        {
          "jp": "ラッシュ",
          "romaji": "rasshu"
        },
        {
          "jp": "いけん",
          "romaji": "iken"
        },
        {
          "jp": "こうつう",
          "romaji": "koutsuu"
        },
        {
          "jp": "ぶっか",
          "romaji": "bukka"
        }
      ],
      "answer": 1,
      "explain": "BENAR: いけん = pendapat / opini!"
    },
    {
      "id": "b21_3",
      "type": "mcq",
      "badge": "Murni Bab 21 · KS-な + とおもいます",
      "prompt": "この ケータイは （　　　　） と おもいます。 (Saya rasa HP ini praktis. — べんり)",
      "promptRomaji": "Kono keetai wa ( ____ ) to omoimasu.",
      "sub": "KS-な sebelum と おもいます.",
      "options": [
        {
          "jp": "べんり",
          "romaji": "benri"
        },
        {
          "jp": "べんりだ",
          "romaji": "benri da"
        },
        {
          "jp": "べんりな",
          "romaji": "benri na"
        },
        {
          "jp": "べんりです",
          "romaji": "benri desu"
        }
      ],
      "answer": 1,
      "explain": "BENAR: べんりだと おもいます (wajib pakai だ!)."
    },
    {
      "id": "b21_4",
      "type": "mcq",
      "badge": "Murni Bab 21 · でしょう？",
      "prompt": "あしたは やすみ （　　　　　）？ (Besok libur, kan?)",
      "promptRomaji": "Ashita wa yasumi ( _____ )?",
      "sub": "Kata benda + でしょう？ (cek apakah pakai だ!).",
      "options": [
        {
          "jp": "だでしょう",
          "romaji": "da deshou"
        },
        {
          "jp": "でしょう",
          "romaji": "deshou"
        },
        {
          "jp": "のでしょう",
          "romaji": "no deshou"
        },
        {
          "jp": "なでしょう",
          "romaji": "na deshou"
        }
      ],
      "answer": 1,
      "explain": "BENAR: あしたは やすみでしょう？ (sebelum でしょう, だ wajib dihapus!)."
    },
    {
      "id": "b21_5",
      "type": "mcq",
      "badge": "Murni Bab 21 · Tempat Acara",
      "prompt": "きのう ホテル （　　） パーティーが ありました。 (Kemarin diadakan pesta di hotel.)",
      "promptRomaji": "Kinou hoteru ( _ ) paatii ga arimashita.",
      "sub": "パーティー adalah acara/kegiatan!",
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
      "answer": 1,
      "explain": "BENAR: ホテルで パーティーが ありました (tempat diselenggarakannya acara memakai で)."
    },
    {
      "id": "b21_6",
      "type": "input",
      "badge": "Latihan Ketik",
      "prompt": "Lengkapi frasa 'tentang Jepang': 「日本[にほん] （　　　　） どう おもいますか。」",
      "promptRomaji": "Nihon ( ____ ) dou omoimasu ka.",
      "sub": "Ketik ungkapan 'tentang ~' (Hiragana atau Romaji).",
      "placeholder": "Ketik: について atau ni tsuite",
      "accepted": [
        "について",
        "ni tsuite",
        "nitsuite"
      ],
      "displayAnswer": "について (ni tsuite)",
      "explain": "BENAR: 日本[にほん]について (tentang Jepang)!"
    }
  ]
},
{
  "num": 22,
  "zone": "amber",
  "oldScore": "2/4",
  "title": "Anak Kalimat Penjelas Kata Benda (名詞修飾[めいししゅうしょく]) & Kata Kerja Memakai Pakaian",
  "shortBug": "Zona Kuning (2/4): Menambah partikel ekstra ほんがです (Soal 86) dan salah baca tense はなしている ひと (Soal 87).",
  "bugs": [
    {
      "soal": "Soal 86",
      "salah": "わたしが きのう よんだ ほんが です",
      "benar": "わたしが きのう よんだ ほん です",
      "kenapa": "Kata kerja biasa menempel langsung ke kata benda, dan di depan です tidak boleh ada partikel が/を."
    },
    {
      "soal": "Soal 87",
      "salah": "はなしている ひと diartikan 'yang akan bicara'",
      "benar": "はなしている ひと = orang yang SEDANG berbicara",
      "kenapa": "～ている menyatakan sedang berlangsung atau status pakaian yang sedang dikenakan."
    }
  ],
  "cheatSheet": {
    "title": "Rumus Cepat Bab 22: Anak Kalimat Penjelas Benda & 4 Kata Kerja Pakaian",
    "takeaway": "Subjek di dalam anak kalimat WAJIB pakai が (BUKAN は)! Tidak ada kata 'yang' di bahasa Jepang!",
    "tables": [
      {
        "heading": "1. Struktur Anak Kalimat Penjelas Kata Benda (名詞修飾[めいししゅうしょく])",
        "headers": [
          "Aturan",
          "Benar (✓)",
          "Salah Umum (❌)"
        ],
        "rows": [
          [
            "Subjek di dalam klausa = が",
            "わたし が つくった ケーキ (kue yg saya buat)",
            "わたしは つくった ケーキ ❌"
          ],
          [
            "Bentuk Biasa langsung + Benda",
            "きのう かった ほん です",
            "きのう かったの ほんが です ❌"
          ],
          [
            "Beda Waktu di depan ひと",
            "いく ひと (yg akan pergi) · いっている / はなしている ひと (yg sedang ~) · いった ひと (yg sudah pergi)",
            "Jangan tertukar tense!"
          ]
        ]
      },
      {
        "heading": "2. Empat Kata Kerja 'Memakai' di Bahasa Jepang (Wajib ～ている untuk Ciri Orang!)",
        "headers": [
          "Kata Kerja",
          "Bentuk ～ている",
          "Dipakai Untuk"
        ],
        "rows": [
          [
            "きます (Kel. II)",
            "きて いる ひと",
            "Pakaian ATAS bahu ke pinggang (シャツ, コート, スーツ, セーター)"
          ],
          [
            "はきます (Kel. I)",
            "はいて いる ひと",
            "Bagian BAWAH pinggang & kaki (ズボン, スカート, くつ, くつした)"
          ],
          [
            "かぶります (Kel. I)",
            "かぶって いる ひと",
            "KEPALA (ぼうし / topi, ヘルメット)"
          ],
          [
            "かけます (Kel. II)",
            "かけて いる ひと",
            "KACAMATA (めがねを かけている ひと) — dasi/jam pakai しています!"
          ]
        ]
      }
    ]
  },
  "grammar": [
    {
      "num": "POIN 01",
      "title": "Membuat Anak Kalimat Penjelas Kata Benda (Posisi Subjek, Objek, Predikat)",
      "formula": "[Kalimat Bentuk Biasa (Subjek が)] + Kata Benda",
      "explain": "Semua kata kerja di depan kata benda yang dijelaskan harus dalam Bentuk Biasa (`よむ`, `よまない`, `よんだ`, `よんでいる`). Kata benda yang sudah ditempeli anak kalimat ini bisa berfungsi sebagai predikat (`これは ～ほんです`), subjek (`～ひとは ミラーさんです`), maupun objek (`～しゃしんを みせてください`).",
      "examples": [
        {
          "jp": "これは ミラーさんが すんでいた うちです。",
          "romaji": "Kore wa Miraa-san ga sunde ita uchi desu.",
          "id": "Ini adalah rumah yang dulu ditinggali Sdr. Miller."
        },
        {
          "jp": "きのう かった CDを なくしました。",
          "romaji": "Kinou katta CD o nakushimashita.",
          "id": "Saya menghilangkan CD yang saya beli kemarin."
        }
      ],
      "trap": "Semua partikel di dalam klausa penjelas tetap normal, KECUALI partikel topik `は` yang wajib diganti menjadi `が` (atau `の`)!",
      "formulaRomaji": "[Kalimat Bentuk Biasa (Subjek ga)] + Kata Benda",
      "formulaId": "Memakai anak kalimat Bentuk Biasa di depan Kata Benda untuk menjelaskan/memodifikasi benda tersebut"
    },
    {
      "num": "POIN 02",
      "title": "Mendeskripsikan Pakaian Seseorang & Pola じかん／やくそく／ようじ",
      "formula": "[Pakaian] を きて／はいて／かぶって／かけて いる ひと   |   V-る じかん／やくそく／ようじ が あります",
      "explain": "Saat menunjuk orang berdasarkan apa yang sedang ia kenakan, gunakan Bentuk `～ている` di depan `ひと`. Selain itu, Bentuk Kamus dipakai langsung di depan `じかん` (waktu untuk ~), `やくそく` (janji untuk ~), dan `ようじ` (urusan untuk ~).",
      "examples": [
        {
          "jp": "あの しろい シャツを きている ひとは だれですか。",
          "romaji": "Ano shiroi shatsu o kite iru hito wa dare desu ka.",
          "id": "Siapa orang yang memakai kemeja putih itu?"
        },
        {
          "jp": "こんばん ともだちと しょくじする やくそくが あります。",
          "romaji": "Konban tomodachi to shokuji suru yakusoku ga arimasu.",
          "id": "Malam ini ada janji makan bersama teman."
        }
      ],
      "trap": "Kacamata = `めがねを かけている`, topi = `ぼうしを かぶっている`, sepatu/celana = `くつを はいている`!",
      "formulaRomaji": "[Pakaian] o kite / haite / kabutte / kakete iru hito   |   V-ru jikan / yakusoku / youji ga arimasu",
      "formulaId": "Orang yang sedang memakai [Pakaian/Kacamata]   |   Ada waktu / janji / urusan untuk V"
    }
  ],
  "vocab": [
    {
      "jp": "きます / はきます / かぶります / かけます（めがねを～）",
      "romaji": "kimasu / hakimasu / kaburimasu / kakemasu",
      "arti": "memakai baju atas (Kel.II) / memakai celana-sepatu (Kel.I) / memakai topi (Kel.I) / memakai kacamata (Kel.II)"
    },
    {
      "jp": "します（ネクタイを～） / うまれます",
      "romaji": "shimasu / umaremasu",
      "arti": "memakai dasi-jam-aksesoris / lahir (Kel.II)"
    },
    {
      "jp": "コート / スーツ / セーター / ぼうし / めがね",
      "romaji": "kooto / suutsu / seetaa / boushi / megane",
      "arti": "mantel / setelan jas / sweter / topi / kacamata"
    },
    {
      "jp": "よく / おめでとうございます / やちん / わしつ / ふとん",
      "romaji": "yoku / omedetou gozaimasu / yachin / washitsu / futon",
      "arti": "sering / selamat! / uang sewa kamar / kamar gaya Jepang / kasur lipat Jepang"
    }
  ],
  "questions": [
    {
      "id": "b22_1",
      "type": "mcq",
      "badge": "Perbaikan Soal 86",
      "prompt": "これは わたしが 京都[きょうと]で とった （　　　　） です。 (Ini foto yang saya ambil di Kyoto.)",
      "promptRomaji": "Kore wa watashi ga Kyouto de totta ( ____ ) desu.",
      "sub": "Langsung kata benda sebelum です!",
      "options": [
        {
          "jp": "しゃしんが",
          "romaji": "shashin ga"
        },
        {
          "jp": "しゃしんを",
          "romaji": "shashin o"
        },
        {
          "jp": "しゃしん",
          "romaji": "shashin"
        },
        {
          "jp": "しゃしんの",
          "romaji": "shashin no"
        }
      ],
      "answer": 2,
      "explain": "BENAR: とった しゃしん です (tanpa partikel tambahan!)."
    },
    {
      "id": "b22_2",
      "type": "mcq",
      "badge": "Perbaikan Soal 87",
      "prompt": "Apa arti dari: 「あそこで しんぶんを よんでいる ひと」?",
      "promptRomaji": "Asoko de shinbun o yonde iru hito",
      "sub": "Perhatikan ～ている.",
      "options": [
        {
          "jp": "Orang yang akan membaca koran di sana",
          "romaji": ""
        },
        {
          "jp": "Orang yang sedang membaca koran di sana",
          "romaji": ""
        },
        {
          "jp": "Orang yang tidak membaca koran di sana",
          "romaji": ""
        },
        {
          "jp": "Koran yang dibaca orang di sana",
          "romaji": ""
        }
      ],
      "answer": 1,
      "explain": "BENAR: Orang yang SEDANG membaca koran di sana!"
    },
    {
      "id": "b22_3",
      "type": "mcq",
      "badge": "Murni Bab 22 · Subjek Klausa",
      "prompt": "カリナさん （　　） かいた えは どれですか。 (Gambar yang dilukis Karina yang mana?)",
      "promptRomaji": "Karina-san ( _ ) kaita e wa dore desu ka.",
      "sub": "Subjek di dalam anak kalimat penjelas benda.",
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
          "jp": "に",
          "romaji": "ni"
        }
      ],
      "answer": 1,
      "explain": "BENAR: カリナさんが かいた え (subjek anak kalimat wajib pakai が, bukan は!)."
    },
    {
      "id": "b22_4",
      "type": "mcq",
      "badge": "Murni Bab 22 · Pakaian",
      "prompt": "あかい ぼうしを （　　　　　） こどもは たろうちゃんです。 (Anak yang memakai topi merah.)",
      "promptRomaji": "Akai boushi o ( _____ ) kodomo...",
      "sub": "ぼうし (topi) memakai kata kerja かぶります!",
      "options": [
        {
          "jp": "きている",
          "romaji": "kite iru"
        },
        {
          "jp": "はいている",
          "romaji": "haite iru"
        },
        {
          "jp": "かぶっている",
          "romaji": "kabutte iru"
        },
        {
          "jp": "かけている",
          "romaji": "kakete iru"
        }
      ],
      "answer": 2,
      "explain": "BENAR: ぼうしを かぶっている (topi di kepala = かぶります)."
    },
    {
      "id": "b22_5",
      "type": "mcq",
      "badge": "Murni Bab 22 · じかん",
      "prompt": "けさは あさごはんを （　　　） じかんが ありませんでした。",
      "promptRomaji": "Kesa wa asagohan o ( ___ ) jikan ga arimasen deshita.",
      "sub": "Bentuk Kamus langsung di depan じかん.",
      "options": [
        {
          "jp": "たべます",
          "romaji": "tabemasu"
        },
        {
          "jp": "たべて",
          "romaji": "tabete"
        },
        {
          "jp": "たべる",
          "romaji": "taberu"
        },
        {
          "jp": "たべた",
          "romaji": "tabeta"
        }
      ],
      "answer": 2,
      "explain": "BENAR: たべる じかんが ありませんでした."
    },
    {
      "id": "b22_6",
      "type": "input",
      "badge": "Latihan Ketik",
      "prompt": "Lengkapi untuk kacamata: 「めがねを （　　　　） いる ひと」 (Orang yang memakai kacamata)",
      "promptRomaji": "megane o ( ____ ) iru hito",
      "sub": "Bentuk-て dari かけます (Hiragana atau Romaji).",
      "placeholder": "Ketik: かけて atau kakete",
      "accepted": [
        "かけて",
        "kakete",
        "かけている",
        "kakete iru"
      ],
      "displayAnswer": "かけて (kakete)",
      "explain": "BENAR: めがねを かけている ひと!"
    }
  ]
},
{
  "num": 23,
  "zone": "amber",
  "oldScore": "2/4",
  "title": "Klausa Waktu (～とき), Kondisi Pasti (～と), & Partikel Gerak を",
  "shortBug": "Zona Kuning (2/4): Tertukar とき vs まえに (Soal 91) dan arah みぎ (kanan) vs ひだり (kiri) di Soal 92.",
  "bugs": [
    {
      "soal": "Soal 91",
      "salah": "Memakai まえに untuk 'Ketika sibuk'",
      "benar": "いそがしい とき (ketika/saat = とき)",
      "kenapa": "とき dipakai untuk keadaan yang sedang berlangsung ('saat sibuk/sakit/kecil')."
    },
    {
      "soal": "Soal 92",
      "salah": "みぎ diartikan kiri",
      "benar": "みぎ = KANAN · ひだり = KIRI",
      "kenapa": "Pastikan hafal mati みぎ (kanan) dan ひだり (kiri) untuk soal petunjuk jalan!"
    }
  ],
  "cheatSheet": {
    "title": "Rumus Cepat Bab 23: Sambungan Lengkap ～とき, V-る vs V-た とき, ～と, & を",
    "takeaway": "KS-な + な とき | Kata Benda + の とき | Arah jalan & mesin otomatis = Kamus + と!",
    "tables": [
      {
        "heading": "1. Tabel Sambungan Lengkap di Depan とき (Ketika / Saat ~)",
        "headers": [
          "Jenis Kata",
          "Rumus Sambungan",
          "Contoh"
        ],
        "rows": [
          [
            "Kata Kerja",
            "V-る / V-ない / V-た + とき",
            "としょかんで ほんを かりる とき、カードが いります。"
          ],
          [
            "Kata Sifat-い",
            "KS-い + とき (tetap い)",
            "あたまが いたい とき / ねむい とき"
          ],
          [
            "Kata Sifat-な",
            "KS-な + な + とき (WAJIB な!)",
            "ひまな とき / げんきじゃ ない とき"
          ],
          [
            "Kata Benda",
            "Kata Benda + の + とき (WAJIB の!)",
            "こどもの とき / びょうきの とき / 20さいの とき"
          ]
        ]
      },
      {
        "heading": "2. Beda V-る とき vs V-た とき, Kondisi ～と, & Partikel Lintas を",
        "headers": [
          "Pola",
          "Makna & Pantangan",
          "Contoh"
        ],
        "rows": [
          [
            "いく とき vs いった とき",
            "いく とき (sebelum/dalam perjalanan) vs いった とき (setelah sampai tujuan)",
            "くにへ かえる とき vs くにへ かえった とき"
          ],
          [
            "[Kamus] + と",
            "Akibat otomatis/pasti (mesin, alam, arah). PANTANGAN: tidak boleh diikuti ajakan/keinginan!",
            "この ボタンを おすと、おつりが でます。"
          ],
          [
            "[Tempat] を + Gerak",
            "Tempat yang dilewati/diseberangi/dibeloki memakai を!",
            "はしを わたります / かどを みぎへ まがります"
          ]
        ]
      }
    ]
  },
  "grammar": [
    {
      "num": "POIN 01",
      "title": "Klausa Waktu ～とき & Perbedaan V-る とき vs V-た とき",
      "formula": "[V-る / V-ない / V-た / KS-い / KS-な+な / N+の] + とき、Kalimat Utama",
      "explain": "`とき` adalah kata benda yang berarti 'waktu/saat', sehingga penyambungannya sama persis dengan memodifikasi kata benda (KS-な pakai `な`, Kata Benda pakai `の`). Perhatikan: `うちへ かえる とき` berarti dalam perjalanan pulang (belum sampai rumah), sedangkan `うちへ かえった とき` berarti sesaat setelah tiba di rumah!",
      "examples": [
        {
          "jp": "ひまな とき、うちへ あそびに きて ください。",
          "romaji": "Hima na toki, uchi e asobi ni kite kudasai.",
          "id": "Ketika senggang, mainlah ke rumah."
        },
        {
          "jp": "うちへ かえる とき、ケーキを かいました。",
          "romaji": "Uchi e kaeru toki, keeki o kaimashita.",
          "id": "Saat perjalanan pulang (di jalan), saya membeli kue."
        },
        {
          "jp": "うちへ かえった とき、「ただいま」と いいます。",
          "romaji": "Uchi e kaetta toki, 'tadaima' to iimasu.",
          "id": "Saat sudah sampai di rumah, mengucapkan 'tadaima'."
        }
      ],
      "trap": "Jangan pakai `だ` sebelum `とき`! KS-な wajib `な とき`, Kata Benda wajib `の とき`.",
      "formulaRomaji": "[V-ru / V-nai / V-ta / KS-i / KS-na+na / N+no] + toki, Kalimat Utama",
      "formulaId": "Ketika / saat ~, melakukan Kalimat Utama (membedakan sebelum/sesudah kejadian)"
    },
    {
      "num": "POIN 02",
      "title": "Kondisi Otomatis (～と) & Partikel Tempat Lintas (を)",
      "formula": "[V Kamus / V-ない] + と、[Akibat Pasti]   |   [Jalan/Jembatan/Taman/Sudut] を V(Gerak)",
      "explain": "Konjungsi `と` dipakai jika aksi pertama PASTI memicu hasil kedua secara otomatis (tombol mesin, pergantian musim, petunjuk jalan). Selain itu, kata kerja berpindah melewati ruang (`わたります`, `あるきます`, `さんぽします`, `まがります`) memakai partikel `を` untuk tempat yang dilalui!",
      "examples": [
        {
          "jp": "これを まわすと、おとが おおきく なります。",
          "romaji": "Kore o mawasu to, oto ga ookiku narimasu.",
          "id": "Kalau memutar ini, suaranya menjadi besar."
        },
        {
          "jp": "あの しんごうを みぎへ まがると、ゆうびんきょくが あります。",
          "romaji": "Ano shingou o migi e magaru to, yuubinkyoku ga arimasu.",
          "id": "Kalau belok kanan di lampu merah itu, ada kantor pos."
        }
      ],
      "trap": "Kalimat setelah `～と` TIDAK BOLEH berupa keinginan/permintaan (`じかんが あると、えいがを みたいです` ❌ → harus pakai `あったら` di Bab 25!).",
      "formulaRomaji": "[V Kamus / V-nai] + to, [Akibat Pasti]   |   [Jalan/Jembatan/Taman/Sudut] o V(Gerak)",
      "formulaId": "Kalau melakukan / tidak melakukan ~, pasti terjadi [Akibat]   |   Melintasi / menyusuri [Tempat] (partikel を)"
    }
  ],
  "vocab": [
    {
      "jp": "ききます（せんせいに～） / まわします / ひきます / かえます / さわります（ドアに～）",
      "romaji": "kikimasu (ni) / mawashimasu / hikimasu / kaemasu / sawarimasu (ni)",
      "arti": "bertanya pada guru (に) / memutar / menarik / mengubah / menyentuh (pakai に!)"
    },
    {
      "jp": "でます（おつりが～） / うごきます / あるきます / わたります（はしを～） / まがります",
      "romaji": "demasu / ugokimasu / arukimasu / watarimasu / magarimasu",
      "arti": "keluar (kembalian) / bergerak-bekerja (mesin) / berjalan / menyeberang jembatan (を) / belok"
    },
    {
      "jp": "さびしい / おゆ / おと / サイズ / こしょう",
      "romaji": "sabishii / oyu / oto / saizu / koshou",
      "arti": "sepi, kesepian / air panas / bunyi, suara / ukuran / kerusakan mesin"
    },
    {
      "jp": "みち / こうさてん / しんごう / かど / はし / ちゅうしゃじょう",
      "romaji": "michi / kousaten / shingou / kado / hashi / chuushajou",
      "arti": "jalan / perempatan / lampu lalu lintas / sudut tikungan / jembatan / tempat parkir"
    },
    {
      "jp": "まっすぐ / みぎ / ひだり / ～め",
      "romaji": "massugu / migi / hidari / ~me",
      "arti": "lurus / kanan / kiri / yang ke-~ (ふたつめの かど = tikungan kedua)"
    }
  ],
  "questions": [
    {
      "id": "b23_1",
      "type": "mcq",
      "badge": "Perbaikan Soal 91",
      "prompt": "つかれた （　　）、はやく ねます。 (KETIKA lelah, tidur cepat.)",
      "promptRomaji": "Tsukareta ( __ ), hayaku nemasu.",
      "sub": "Kata untuk 'ketika / saat'.",
      "options": [
        {
          "jp": "まえに",
          "romaji": "mae ni"
        },
        {
          "jp": "とき",
          "romaji": "toki"
        },
        {
          "jp": "まで",
          "romaji": "made"
        },
        {
          "jp": "より",
          "romaji": "yori"
        }
      ],
      "answer": 1,
      "explain": "BENAR: つかれた とき (ketika lelah)."
    },
    {
      "id": "b23_2",
      "type": "mcq",
      "badge": "Perbaikan Soal 92",
      "prompt": "しんごうを （　　）へ まがると、ぎんこうが あります。 (Belok KANAN di lampu merah.)",
      "promptRomaji": "Belok kanan = ?",
      "sub": "みぎ vs ひだり.",
      "options": [
        {
          "jp": "ひだり",
          "romaji": "hidari"
        },
        {
          "jp": "みぎ",
          "romaji": "migi"
        },
        {
          "jp": "うしろ",
          "romaji": "ushiro"
        },
        {
          "jp": "した",
          "romaji": "shita"
        }
      ],
      "answer": 1,
      "explain": "BENAR: みぎ = kanan! (ひだり = kiri)."
    },
    {
      "id": "b23_3",
      "type": "mcq",
      "badge": "Murni Bab 23 · KS-な & N + とき",
      "prompt": "ひま（　） とき、本[ほん]を よみます。こども（　） とき、よく およぎました。",
      "promptRomaji": "hima (KS-な) + toki & kodomo (Kata Benda) + toki",
      "sub": "Cek penghubung KS-な dan Kata Benda ke とき!",
      "options": [
        {
          "jp": "な ・ の",
          "romaji": "na · no"
        },
        {
          "jp": "の ・ な",
          "romaji": "no · na"
        },
        {
          "jp": "だ ・ の",
          "romaji": "da · no"
        },
        {
          "jp": "で ・ に",
          "romaji": "de · ni"
        }
      ],
      "answer": 0,
      "explain": "BENAR: ひまな とき (KS-な + な) dan こどもの とき (N + の)!"
    },
    {
      "id": "b23_4",
      "type": "mcq",
      "badge": "Murni Bab 23 · Kondisi Pasti と",
      "prompt": "はるに （　　　　）、さくらが さきます。 (Begitu musim semi tiba, sakura mekar.)",
      "promptRomaji": "Haru ni ( ____ ), sakura ga sakimasu.",
      "sub": "Hukum alam pasti: Bentuk Kamus dari なります + と.",
      "options": [
        {
          "jp": "なると",
          "romaji": "naru to"
        },
        {
          "jp": "なったと",
          "romaji": "natta to"
        },
        {
          "jp": "なってと",
          "romaji": "natte to"
        },
        {
          "jp": "なりのとき",
          "romaji": "nari no toki"
        }
      ],
      "answer": 0,
      "explain": "BENAR: はるに なると (Bentuk Kamus + と)."
    },
    {
      "id": "b23_5",
      "type": "mcq",
      "badge": "Murni Bab 23 · Partikel Gerak を",
      "prompt": "あの はし （　　） わたって、まっすぐ いって ください。 (Seberangi jembatan itu.)",
      "promptRomaji": "Ano hashi ( _ ) watatte...",
      "sub": "Tempat yang diseberangi/dilewati dengan わたります.",
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
          "jp": "へ",
          "romaji": "e"
        }
      ],
      "answer": 2,
      "explain": "BENAR: はしを わたります (tempat yang dilintasi memakai を!)."
    },
    {
      "id": "b23_6",
      "type": "input",
      "badge": "Latihan Ketik",
      "prompt": "Ketik kata bahasa Jepang untuk arah 「KIRI」!",
      "promptRomaji": "Kiri = ?",
      "sub": "Lawan dari みぎ (Hiragana atau Romaji).",
      "placeholder": "Ketik: ひだり atau hidari",
      "accepted": [
        "ひだり",
        "hidari"
      ],
      "displayAnswer": "ひだり (hidari)",
      "explain": "BENAR: ひだり (kiri), みぎ (kanan)!"
    }
  ]
},
{
  "num": 24,
  "zone": "amber",
  "oldScore": "2/4",
  "title": "くれます & Memberi-Menerima Jasa (～てあげます・～てもらいます・～てくれます)",
  "shortBug": "Zona Kuning (2/4): Saat orang lain memberi ke SAYA (わたしに), masih salah menjawab もらいました/あげました padahal wajib くれました (Soal 93 & 96).",
  "bugs": [
    {
      "soal": "Soal 93 & 96",
      "salah": "ミラーさんは わたしに もらいました / あげました",
      "benar": "ミラーさんは わたしに くれました / ははが つくって くれました",
      "kenapa": "Jika SUBJEKNYA orang lain dan PENERIMANYA adalah SAYA (わたしに), wajib 100% memakai くれます!"
    }
  ],
  "cheatSheet": {
    "title": "Rumus Cepat Bab 24: Segitiga Arah Pemberian Benda & Jasa (Anti-Terbalik!)",
    "takeaway": "Cek SUBJEK di depan は/が! Subjek Orang Lain → ke SAYA = くれます! Subjek SAYA terima = もらいます!",
    "tables": [
      {
        "heading": "1. Tabel Master 3 Arah Pemberian Benda & Tindakan (Jasa)",
        "headers": [
          "Arah Transaksi",
          "Siapa Subjek (は/が)?",
          "Rumus Benda & Rumus Tindakan (V-て)"
        ],
        "rows": [
          [
            "1. SAYA → Orang Lain",
            "わたし は",
            "[Orang] に あげます / V-て あげます"
          ],
          [
            "2. SAYA ← Terima dari Orang",
            "わたし は",
            "[Orang] に もらいます / V-て もらいます"
          ],
          [
            "3. ORANG LAIN → ke SAYA",
            "[Orang Lain] は／が",
            "(わたしに) くれます / V-て くれます (WAJIB!)"
          ]
        ]
      },
      {
        "heading": "2. Contoh Perbandingan Kejadian yang Sama (Yamada membetulkan sepeda saya)",
        "headers": [
          "Sudut Pandang Subjek",
          "Kalimat Bahasa Jepang",
          "Penekanan"
        ],
        "rows": [
          [
            "Subjek = わたし (Saya)",
            "わたしは やまださんに じてんしゃを なおして もらいました。",
            "Saya meminta/menerima bantuan dari Yamada"
          ],
          [
            "Subjek = やまださん (Dia)",
            "やまださんが（わたしに）じてんしゃを なおして くれました。",
            "Yamada berbaik hati sukarela membantu saya"
          ]
        ]
      }
    ]
  },
  "grammar": [
    {
      "num": "POIN 01",
      "title": "Kata Kerja くれます (Orang Lain Memberi Benda ke Saya / Keluarga Saya)",
      "formula": "[Pemberi] は／が わたし（／かぞく）に [Benda] を くれます",
      "explain": "Di Bab 7 kita belajar `あげます`, tetapi `あげます` TIDAK BOLEH dipakai jika penerimanya adalah pembicara (`わたし`) atau anggota keluarga pembicara (`いもうと`, `むすこ`). Jika arah pemberian mengarah masuk ke diri kita dan subjek kalimatnya adalah si pemberi, wajib memakai `くれます`!",
      "examples": [
        {
          "jp": "サントスさんは わたしに ブラジルの コーヒーを くれました。",
          "romaji": "Santosu-san wa watashi ni Burajiru no koohii o kuremashita.",
          "id": "Sdr. Santos memberi saya kopi Brasil."
        },
        {
          "jp": "たなかさんは いもうとに にんぎょうを くれました。",
          "romaji": "Tanaka-san wa imouto ni ningyou o kuremashita.",
          "id": "Sdr. Tanaka memberi boneka kepada adik perempuan saya."
        }
      ],
      "trap": "Bug Soal 93: Melihat kata `わたしに` di kalimat pemberian? Coret `あげました` dan `もらいました`, langsung pilih `くれました`!",
      "formulaRomaji": "[Pemberi] wa/ga watashi (/ kazoku) ni [Benda] o kuremasu",
      "formulaId": "[Orang lain] memberi [Benda] kepada saya (atau keluarga saya)"
    },
    {
      "num": "POIN 02",
      "title": "Memberi & Menerima Tindakan/Kebaikan: V-て あげます・もらいます・くれます",
      "formula": "V-て あげます (saya bantu dia)  |  V-て もらいます (saya dibantu dia)  |  V-て くれます (dia bantu saya)",
      "explain": "Menggabungkan Bentuk-て dengan `あげます・もらいます・くれます` menunjukkan adanya rasa terima kasih atau niat baik atas suatu tindakan. Karena penerima pada `てくれます` pasti `わたし`, kata `わたしに` sering dihilangkan!",
      "examples": [
        {
          "jp": "わたしは カリナさんに CDを かして あげました。",
          "romaji": "Watashi wa Karina-san ni CD o kashite agemashita.",
          "id": "Saya meminjamkan CD kepada Sdr. Karina."
        },
        {
          "jp": "わたしは すずきさんに 東京[とうきょう]を あんないして もらいました。",
          "romaji": "Watashi wa Suzuki-san ni Toukyou o annai shite moraimashita.",
          "id": "Saya dipandu keliling Tokyo oleh Sdr. Suzuki."
        },
        {
          "jp": "ははが セーターを おくって くれました。",
          "romaji": "Haha ga seetaa o okutte kuremashita.",
          "id": "Ibu mengirimkan sweter untuk saya."
        }
      ],
      "trap": "Etika Jepang: Jangan berkata `～て あげましょうか` ke atasan/orang yang belum akrab karena terdengar pamer jasa — tetap gunakan `～ましょうか` (Bab 14)!",
      "formulaRomaji": "V-te agemasu  |  V-te moraimasu  |  V-te kuremasu",
      "formulaId": "Saya lakukan untuk orang lain (agemasu) · Saya menerima bantuan orang lain (moraimasu) · Orang lain lakukan untuk saya (kuremasu)"
    }
  ],
  "vocab": [
    {
      "jp": "くれます",
      "romaji": "kuremasu",
      "arti": "memberi (kepada saya / keluarga saya — Kel.II!)"
    },
    {
      "jp": "つれて いきます / つれて きます",
      "romaji": "tsurete ikimasu / tsurete kimasu",
      "arti": "mengajak pergi / mengajak datang (seseorang)"
    },
    {
      "jp": "おくります（ひとを～）",
      "romaji": "okurimasu (hito o)",
      "arti": "mengantar seseorang (ke stasiun/bandara)"
    },
    {
      "jp": "しょうかいします / あんないします / せつめいします",
      "romaji": "shoukai shimasu / annai shimasu / setsumei shimasu",
      "arti": "memperkenalkan / memandu jalan / menjelaskan"
    },
    {
      "jp": "いれます（コーヒーを～） / じゅんび / ひっこし",
      "romaji": "iremasu / junbi / hikkoshi",
      "arti": "menyeduh kopi / persiapan / pindah rumah"
    },
    {
      "jp": "おじいさん（おじいちゃん） / おばあさん（おばあちゃん） / おかし / ぜんぶ / じぶんで",
      "romaji": "ojiisan / obaasan / okashi / zenbu / jibun de",
      "arti": "kakek / nenek / kue-camilan-permen / semuanya / oleh diri sendiri"
    }
  ],
  "questions": [
    {
      "id": "b24_1",
      "type": "mcq",
      "badge": "Perbaikan Soal 93",
      "prompt": "ミラーさんは わたしに ワインを （　　　　　）。",
      "promptRomaji": "Miraa-san wa watashi ni wain o ( _____ ).",
      "sub": "Subjek = Miller, Penerima = わたしに!",
      "options": [
        {
          "jp": "あげました",
          "romaji": "agemashita"
        },
        {
          "jp": "もらいました",
          "romaji": "moraimashita"
        },
        {
          "jp": "くれました",
          "romaji": "kuremashita"
        },
        {
          "jp": "かりました",
          "romaji": "karimashita"
        }
      ],
      "answer": 2,
      "explain": "BENAR: くれました! (Orang lain memberi ke わたしに)."
    },
    {
      "id": "b24_2",
      "type": "mcq",
      "badge": "Perbaikan Soal 96",
      "prompt": "ははが おべんとうを つくって （　　　　　）。 (Ibu membuatkan bekal untuk saya.)",
      "promptRomaji": "Haha ga obentou o tsukutte ( _____ ).",
      "sub": "Subjek = ははが (Ibu), berbuat baik untuk saya.",
      "options": [
        {
          "jp": "あげました",
          "romaji": "agemashita"
        },
        {
          "jp": "もらいました",
          "romaji": "moraimashita"
        },
        {
          "jp": "くれました",
          "romaji": "kuremashita"
        },
        {
          "jp": "しました",
          "romaji": "shimashita"
        }
      ],
      "answer": 2,
      "explain": "BENAR: つくって くれました!"
    },
    {
      "id": "b24_3",
      "type": "mcq",
      "badge": "Murni Bab 24 · てもらいます",
      "prompt": "わたしは ともだちに ひっこしを てつだって （　　　　　）。",
      "promptRomaji": "Watashi wa tomodachi ni hikkoshi o tetsudatte ( _____ ).",
      "sub": "Subjek = わたしは, dibantu oleh teman (ともだちに).",
      "options": [
        {
          "jp": "あげました",
          "romaji": "agemashita"
        },
        {
          "jp": "もらいました",
          "romaji": "moraimashita"
        },
        {
          "jp": "くれました",
          "romaji": "kuremashita"
        },
        {
          "jp": "ください",
          "romaji": "kudasai"
        }
      ],
      "answer": 1,
      "explain": "BENAR: てつだって もらいました (Subjek わたし menerima bantuan dari teman)."
    },
    {
      "id": "b24_4",
      "type": "mcq",
      "badge": "Murni Bab 24 · てあげます",
      "prompt": "わたしは おばあさんに にもつを もって （　　　　　）。",
      "promptRomaji": "Watashi wa obaasan ni nimotsu o motte ( _____ ).",
      "sub": "Subjek = わたしは, membawakan barang untuk nenek.",
      "options": [
        {
          "jp": "あげました",
          "romaji": "agemashita"
        },
        {
          "jp": "もらいました",
          "romaji": "moraimashita"
        },
        {
          "jp": "くれました",
          "romaji": "kuremashita"
        },
        {
          "jp": "いきました",
          "romaji": "ikimashita"
        }
      ],
      "answer": 0,
      "explain": "BENAR: もって あげました (Saya membantu orang lain)."
    },
    {
      "id": "b24_5",
      "type": "mcq",
      "badge": "Murni Bab 24 · Partikel Pemberi Jasa",
      "prompt": "わたしは ワットさんに レポートを なおして （　） もらいました → partikel setelah ワットさん?",
      "promptRomaji": "わたしは ワットさん（　） レポートを なおして もらいました。",
      "sub": "Partikel untuk orang yang memberi bantuan pada てもらいます.",
      "options": [
        {
          "jp": "を",
          "romaji": "o"
        },
        {
          "jp": "に",
          "romaji": "ni"
        },
        {
          "jp": "が",
          "romaji": "ga"
        },
        {
          "jp": "で",
          "romaji": "de"
        }
      ],
      "answer": 1,
      "explain": "BENAR: ワットさんに なおして もらいました!"
    },
    {
      "id": "b24_6",
      "type": "input",
      "badge": "Latihan Ketik",
      "prompt": "Lengkapi: 「ぶちょうが くうこうまで おくって （　　　　　）。」 (Kepala divisi mengantar saya sampai bandara [lampau].)",
      "promptRomaji": "Buchou ga kuukou made okutte ( _____ ).",
      "sub": "Ketik kata penutup sopan lampau (Hiragana atau Romaji).",
      "placeholder": "Ketik: くれました atau kuremashita",
      "accepted": [
        "くれました",
        "kuremashita"
      ],
      "displayAnswer": "くれました (kuremashita)",
      "explain": "BENAR: おくって くれました!"
    }
  ]
},
{
  "num": 25,
  "zone": "amber",
  "oldScore": "2/4",
  "title": "Pengandaian & Urutan Masa Depan (～たら) serta Kontradiksi (～ても)",
  "shortBug": "Zona Kuning (2/4): Mengartikan なくても jadi 'karena' (Soal 99) dan menjawab あるたら alih-alih あったら (Soal 100).",
  "bugs": [
    {
      "soal": "Soal 99",
      "salah": "おかねが なくても diartikan 'karena tidak punya uang'",
      "benar": "WALAUPUN / MESKIPUN tidak punya uang",
      "kenapa": "～ても / ～なくても adalah operator kontradiksi ('meskipun'), bukan alasan!"
    },
    {
      "soal": "Soal 100",
      "salah": "あります → あるたら",
      "benar": "あったら (Bentuk Lampau Biasa あった + ら!)",
      "kenapa": "～たら wajib dibentuk dari Bentuk Lampau Biasa (た / なかった / かった / だった) + ら!"
    }
  ],
  "cheatSheet": {
    "title": "Rumus Cepat Bab 25: Tabel Pembentukan Lengkap ～たら vs ～ても",
    "takeaway": "～たら = Lampau Biasa + ら (Kalau / Setelah). ～ても = Bentuk-て + も (Walaupun / Meskipun)!",
    "tables": [
      {
        "heading": "1. Matriks Pembentukan ～たら (Kalau ~) vs ～ても (Walaupun ~)",
        "headers": [
          "Jenis Kata",
          "Rumus ～たら (Kalau / Jika)",
          "Rumus ～ても (Walaupun / Meskipun)"
        ],
        "rows": [
          [
            "Kata Kerja (+)",
            "Bentuk-た + ら (いったら, のんだら, あったら!)",
            "Bentuk-て + も (いっても, のんでも, あっても)"
          ],
          [
            "Kata Kerja (-)",
            "～なかったら (いかなかったら, なかったら!)",
            "～なくても (いかなくても, なくても)"
          ],
          [
            "Kata Sifat-い",
            "～かったら (やすかったら, よかったら!)",
            "～くても (やすくても, よくても)"
          ],
          [
            "KS-な & Benda",
            "～だったら (ひまだったら, あめだったら)",
            "～でも (ひまでも, あめでも)"
          ]
        ]
      },
      {
        "heading": "2. Kata Pasangan & Fungsi Kedua ～たら",
        "headers": [
          "Pola",
          "Fungsi",
          "Contoh"
        ],
        "rows": [
          [
            "もし ～たら",
            "Menegaskan pengandaian ('Seandainya kalau ~')",
            "もし 1おくえん あったら、りょこうします。"
          ],
          [
            "いくら ～ても",
            "Menegaskan kontradiksi ('Seberapa pun ~nya, tetap')",
            "いくら かんがえても、わかりません。"
          ],
          [
            "[Waktu/Selesai] たら",
            "Setelah / Begitu ~ terjadi (pasti di masa depan)",
            "10じに なったら、でかけましょう。"
          ]
        ]
      }
    ]
  },
  "grammar": [
    {
      "num": "POIN 01",
      "title": "Pengandaian (もし ～たら) & Urutan Setelah Pasti (～たら)",
      "formula": "[Bentuk Lampau Biasa] + ら、Kalimat Utama (bebas: boleh keinginan, ajakan, perintah!)",
      "explain": "Keunggulan utama `～たら` dibanding `～と` (Bab 23) adalah kalimat utamanya BEBAS berisi keinginan (`～たい`), ajakan (`～ましょう`), atau permintaan (`～てください`). Selain berarti 'kalau', `～たら` juga berarti 'begitu/setelah kondisi A tercapai nanti, kita lakukan B' (`えきに ついたら、でんわしてください`).",
      "examples": [
        {
          "jp": "おかねが あったら、パソコンを かいたいです。",
          "romaji": "Okane ga attara, pasokon o kaitai desu.",
          "id": "Kalau punya uang, ingin membeli laptop."
        },
        {
          "jp": "えきに ついたら、でんわを ください。",
          "romaji": "Eki ni tsuitara, denwa o kudasai.",
          "id": "Begitu sampai di stasiun, tolong telepon ya."
        }
      ],
      "trap": "Bug Soal 100: Ubah ke bentuk LAMPAU biasa dulu baru tambah ら! `あります → あった → あったら`, `いい → よかった → よかったら`!",
      "formulaRomaji": "[Bentuk Lampau Biasa] + ra, Kalimat Utama",
      "formulaId": "Kalau / apabila ~ terjadi, lakukan/terjadi Kalimat Utama (bebas ajakan, perintah, keinginan)"
    },
    {
      "num": "POIN 02",
      "title": "Kontradiksi Hipotetis: [いくら] ～ても / ～でも (Walaupun / Meskipun ~)",
      "formula": "V-ても / V-なくても / KS-い→くても / KS-な・N→でも、[Hasil tetap tidak berubah]",
      "explain": "Menyatakan bahwa meskipun syarat A dilakukan atau terjadi, hasil yang diharapkan tidak terjadi (atau sebaliknya, tetap jalan terus). Sering diperkuat dengan kata `いくら` di awal kalimat.",
      "examples": [
        {
          "jp": "あめが ふっても、せんたくします。",
          "romaji": "Ame ga futte mo, sentaku shimasu.",
          "id": "Walaupun turun hujan, tetap mencuci baju."
        },
        {
          "jp": "いくら やすくても、わたしは かいません。",
          "romaji": "Ikura yasukute mo, watashi wa kaimasen.",
          "id": "Semurah apa pun, saya tidak membelinya."
        },
        {
          "jp": "にちようびでも、はたらきます。",
          "romaji": "Nichiyoubi demo, hatarakimasu.",
          "id": "Meskipun hari Minggu, tetap bekerja."
        }
      ],
      "trap": "Bug Soal 99: `おかねが なくても` = WALAUPUN tidak punya uang (bukan karena!).",
      "formulaRomaji": "V-te mo / V-nakute mo / KS-i→kute mo / KS-na·N→de mo, [Hasil tetap tidak berubah]",
      "formulaId": "Walaupun / meskipun ~, [hasilnya tetap tidak berubah]"
    }
  ],
  "vocab": [
    {
      "jp": "かんがえます / つきます（えきに～） / りゅうがくします / とります（としを～）",
      "romaji": "kangaemasu / tsukimasu (ni) / ryuugaku shimasu / torimasu (toshi o)",
      "arti": "berpikir-mempertimbangkan (Kel.II) / tiba di stasiun (に!) / kuliah di luar negeri / bertambah usia"
    },
    {
      "jp": "いなか / たいしかん / グループ / チャンス / おく",
      "romaji": "inaka / taishikan / guruupu / chansu / oku",
      "arti": "desa, kampung halaman / kedutaan besar / grup / kesempatan / seratus juta"
    },
    {
      "jp": "もし［～たら］ / いくら［～ても］",
      "romaji": "moshi [~tara] / ikura [~temo]",
      "arti": "kalau seandainya / betapa pun, seberapa pun"
    },
    {
      "jp": "てんきん / こと（～の こと） / いっぱい のみましょう",
      "romaji": "tenkin / koto / ippai nomimashou",
      "arti": "pindah tugas kantor / hal tentang ~ / mari minum segelas"
    }
  ],
  "questions": [
    {
      "id": "b25_1",
      "type": "mcq",
      "badge": "Perbaikan Soal 100",
      "prompt": "じかんが （　　　　）、てつだって ください。 (Kalau ada waktu, tolong bantu. — あります)",
      "promptRomaji": "Jikan ga ( ____ ), tetsudatte kudasai.",
      "sub": "あります → あった + ら.",
      "options": [
        {
          "jp": "あるたら",
          "romaji": "arutara"
        },
        {
          "jp": "ありたら",
          "romaji": "aritara"
        },
        {
          "jp": "あったら",
          "romaji": "attara"
        },
        {
          "jp": "あっても",
          "romaji": "atte mo"
        }
      ],
      "answer": 2,
      "explain": "BENAR: あったら!"
    },
    {
      "id": "b25_2",
      "type": "mcq",
      "badge": "Perbaikan Soal 99",
      "prompt": "Apa arti dari: 「おかねが なくても、げんきなら いいです。」?",
      "promptRomaji": "Okane ga nakute mo...",
      "sub": "Arti dari おかねが なくても.",
      "options": [
        {
          "jp": "Karena tidak punya uang...",
          "romaji": ""
        },
        {
          "jp": "Walaupun tidak punya uang...",
          "romaji": ""
        },
        {
          "jp": "Kalau punya uang...",
          "romaji": ""
        },
        {
          "jp": "Sebelum punya uang...",
          "romaji": ""
        }
      ],
      "answer": 1,
      "explain": "BENAR: Walaupun / meskipun tidak punya uang!"
    },
    {
      "id": "b25_3",
      "type": "mcq",
      "badge": "Murni Bab 25 · KS-い + たら",
      "prompt": "てんきが （　　　　　）、さんぽしましょう。 (Kalau cuacanya bagus, ayo jalan-jalan. — いい)",
      "promptRomaji": "Tenki ga ( _____ ), sanpo shimashou.",
      "sub": "Lampau biasa dari いい + ら!",
      "options": [
        {
          "jp": "いかったら",
          "romaji": "ikattara"
        },
        {
          "jp": "よかったら",
          "romaji": "yokattara"
        },
        {
          "jp": "いいだったら",
          "romaji": "ii dattara"
        },
        {
          "jp": "よくても",
          "romaji": "yokute mo"
        }
      ],
      "answer": 1,
      "explain": "BENAR: よかったら (いい → よかった + ら)!"
    },
    {
      "id": "b25_4",
      "type": "mcq",
      "badge": "Murni Bab 25 · KS-な/N + ても",
      "prompt": "（　　　　　）、パソコンを つかいます。 (Meskipun tidak praktis, tetap memakai PC. — ふべん［な］)",
      "promptRomaji": "fuben [na] + temo",
      "sub": "KS-な dan Kata Benda memakai でも!",
      "options": [
        {
          "jp": "ふべんでも",
          "romaji": "fuben demo"
        },
        {
          "jp": "ふべんくても",
          "romaji": "fubenkute mo"
        },
        {
          "jp": "ふべんなても",
          "romaji": "fuben na temo"
        },
        {
          "jp": "ふべんだったら",
          "romaji": "fuben dattara"
        }
      ],
      "answer": 0,
      "explain": "BENAR: ふべんでも (KS-な / Kata Benda + でも)!"
    },
    {
      "id": "b25_5",
      "type": "mcq",
      "badge": "Murni Bab 25 · いくら ～ても",
      "prompt": "いくら スイッチを （　　　　）、うごきません。 (Berapa kali pun menekan sakelar, tidak bergerak. — おします)",
      "promptRomaji": "Ikura suicchi o ( ____ ), ugokimasen.",
      "sub": "いくら berpasangan dengan Bentuk-て + も.",
      "options": [
        {
          "jp": "おしたら",
          "romaji": "oshitara"
        },
        {
          "jp": "おしても",
          "romaji": "oshite mo"
        },
        {
          "jp": "おすと",
          "romaji": "osu to"
        },
        {
          "jp": "おすても",
          "romaji": "osutemo"
        }
      ],
      "answer": 1,
      "explain": "BENAR: いくら おしても (おします → おして + も)."
    },
    {
      "id": "b25_6",
      "type": "input",
      "badge": "Latihan Ketik",
      "prompt": "Ubah 「あめです」 menjadi 'kalau hujan' (～たら)!",
      "promptRomaji": "ame desu → kalau hujan",
      "sub": "Kata benda → だった + ら (Hiragana atau Romaji).",
      "placeholder": "Ketik: あめだったら atau ame dattara",
      "accepted": [
        "あめだったら",
        "ame dattara",
        "amedattara"
      ],
      "displayAnswer": "あめだったら (ame dattara)",
      "explain": "BENAR: あめだったら!"
    }
  ]
}
);
