/* Data Lengkap Minna no Nihongo Bab 17: Bentuk -Nai (ない形) & Keharusan
 * Disusun khusus untuk menuntaskan bug tes 100 soal (Skor Bab 17: 1/4)
 */
window.BAB17_DATA = {
  "roadmapQueue": [
    {
      "num": 17,
      "title": "Bentuk -Nai & Keharusan",
      "zone": "orange",
      "oldScore": "1/4",
      "status": "active"
    },
    {
      "num": 2,
      "title": "Kata Tunjuk & Kepemilikan",
      "zone": "red",
      "oldScore": "0/4",
      "status": "queued"
    },
    {
      "num": 5,
      "title": "Partikel Mobilitas & Tanggal",
      "zone": "red",
      "oldScore": "0/4",
      "status": "queued"
    },
    {
      "num": 7,
      "title": "Alat & Memberi-Menerima Dasar",
      "zone": "red",
      "oldScore": "0/4",
      "status": "queued"
    },
    {
      "num": 20,
      "title": "Bentuk Biasa (Plain Form)",
      "zone": "red",
      "oldScore": "0/4",
      "status": "queued"
    },
    {
      "num": 4,
      "title": "Waktu & Perubahan Kata Kerja",
      "zone": "orange",
      "oldScore": "1/4",
      "status": "queued"
    },
    {
      "num": 6,
      "title": "Partikel Tempat Aksi & Ajakan",
      "zone": "orange",
      "oldScore": "1/4",
      "status": "queued"
    },
    {
      "num": 9,
      "title": "Partikel が (Suka & Kemampuan)",
      "zone": "amber",
      "oldScore": "2/4",
      "status": "queued"
    },
    {
      "num": 10,
      "title": "Keberadaan & Posisi",
      "zone": "amber",
      "oldScore": "2/4",
      "status": "queued"
    },
    {
      "num": 11,
      "title": "Kata Bantu Bilangan",
      "zone": "amber",
      "oldScore": "2/4",
      "status": "queued"
    },
    {
      "num": 13,
      "title": "Keinginan (ほしい & ～たい)",
      "zone": "amber",
      "oldScore": "2/4",
      "status": "queued"
    },
    {
      "num": 18,
      "title": "Bentuk Kamus & ことができます",
      "zone": "amber",
      "oldScore": "2/4",
      "status": "queued"
    },
    {
      "num": 19,
      "title": "Bentuk -Ta & Pengalaman",
      "zone": "amber",
      "oldScore": "2/4",
      "status": "queued"
    },
    {
      "num": 21,
      "title": "Pendapat & Kutipan (と思[おも]います)",
      "zone": "amber",
      "oldScore": "2/4",
      "status": "queued"
    },
    {
      "num": 22,
      "title": "Anak Kalimat Penjelas Benda",
      "zone": "amber",
      "oldScore": "2/4",
      "status": "queued"
    },
    {
      "num": 23,
      "title": "Operator Kondisi (とき & と)",
      "zone": "amber",
      "oldScore": "2/4",
      "status": "queued"
    },
    {
      "num": 24,
      "title": "Memberi-Menerima Aksi (くれます)",
      "zone": "amber",
      "oldScore": "2/4",
      "status": "queued"
    },
    {
      "num": 25,
      "title": "Pengandaian (～たら & ～ても)",
      "zone": "amber",
      "oldScore": "2/4",
      "status": "queued"
    }
  ],
  "bugs": [
    {
      "soal": "Soal 65",
      "salah": "Menjawab のみない (nominai) untuk bentuk -Nai dari のみます",
      "benar": "のまない (nomanai)",
      "kenapa": "のみます adalah Kelompok I. Sebelum ます ada bunyi み (mi). Vokal -i wajib turun ke baris -a: み (mi) → ま (ma), lalu tambah ない → のまない."
    },
    {
      "soal": "Soal 67",
      "salah": "Keliru menyusun rumus 'harus' (～なければ なりません)",
      "benar": "Potong い pada ない → tambah ければ なりません",
      "kenapa": "Contoh: だします → ださない → potong い jadi ださな + ければ なりません = ださなければ なりません (harus mengumpulkan)."
    },
    {
      "soal": "Soal 68",
      "salah": "Mengartikan ～なくても いいです menjadi 'harus'",
      "benar": "Artinya 'TIDAK PERLU / TIDAK USAH' (bebas, tidak wajib)",
      "kenapa": "Ingat tombol kata kuncinya: いいです = 'tidak apa-apa / boleh'. Jadi [tidak melakukan] + ても いいです = tidak melakukan pun tidak apa-apa (= TIDAK PERLU)."
    }
  ],
  "vocabGroups": [
    {
      "title": "Kata Kerja Bab 17 (Wajib Hafal Kelompoknya!)",
      "items": [
        {
          "jp": "おぼえます",
          "kanji": "覚えます",
          "romaji": "oboemasu",
          "group": "II",
          "nai": "おぼえない",
          "arti": "mengingat / menghafal"
        },
        {
          "jp": "わすれます",
          "kanji": "忘れます",
          "romaji": "wasuremasu",
          "group": "II",
          "nai": "わすれない",
          "arti": "lupa"
        },
        {
          "jp": "なくします",
          "kanji": "亡くします／無くします",
          "romaji": "nakushimasu",
          "group": "I",
          "nai": "なくさない",
          "arti": "kehilangan"
        },
        {
          "jp": "だします",
          "kanji": "出します",
          "romaji": "dashimasu",
          "group": "I",
          "nai": "ださない",
          "arti": "mengumpulkan / menyerahkan (laporan)"
        },
        {
          "jp": "はらいます",
          "kanji": "払います",
          "romaji": "haraimasu",
          "group": "I",
          "nai": "はらわない",
          "arti": "membayar (jebakan い→わ!)"
        },
        {
          "jp": "かえします",
          "kanji": "返します",
          "romaji": "kaeshimasu",
          "group": "I",
          "nai": "かえさない",
          "arti": "mengembalikan"
        },
        {
          "jp": "でかけます",
          "kanji": "出かけます",
          "romaji": "dekakemasu",
          "group": "II",
          "nai": "でかけない",
          "arti": "keluar rumah / berangkat"
        },
        {
          "jp": "ぬぎます",
          "kanji": "脱ぎます",
          "romaji": "nugimasu",
          "group": "I",
          "nai": "ぬがない",
          "arti": "melepas (pakaian/sepatu)"
        },
        {
          "jp": "もって いきます",
          "kanji": "持って 行きます",
          "romaji": "motte ikimasu",
          "group": "I",
          "nai": "もって いかない",
          "arti": "membawa pergi"
        },
        {
          "jp": "もって きます",
          "kanji": "持って 来ます",
          "romaji": "motte kimasu",
          "group": "III",
          "nai": "もって こない",
          "arti": "membawa datang (jebakan き→こ!)"
        },
        {
          "jp": "しんぱいします",
          "kanji": "心配します",
          "romaji": "shinpai shimasu",
          "group": "III",
          "nai": "しんぱいしない",
          "arti": "khawatir"
        },
        {
          "jp": "ざんぎょうします",
          "kanji": "残業します",
          "romaji": "zangyou shimasu",
          "group": "III",
          "nai": "ざんぎょうしない",
          "arti": "lembur"
        },
        {
          "jp": "しゅっちょうします",
          "kanji": "出張します",
          "romaji": "shucchou shimasu",
          "group": "III",
          "nai": "しゅっちょうしない",
          "arti": "dinas luar kota"
        },
        {
          "jp": "のみます（くすりを～）",
          "kanji": "飲みます",
          "romaji": "nomimasu",
          "group": "I",
          "nai": "のまない",
          "arti": "minum (obat)"
        },
        {
          "jp": "はいります（おふろに～）",
          "kanji": "入ります",
          "romaji": "hairimasu",
          "group": "I",
          "nai": "はいらない",
          "arti": "masuk (berendam/mandi)"
        }
      ]
    },
    {
      "title": "Kata Sifat, Kata Benda, & Ungkapan Penting Bab 17",
      "items": [
        {
          "jp": "たいせつ［な］",
          "kanji": "大切",
          "romaji": "taisetsu [na]",
          "group": "KS-な",
          "nai": "—",
          "arti": "penting / berharga"
        },
        {
          "jp": "だいじょうぶ［な］",
          "kanji": "大丈夫",
          "romaji": "daijoubu [na]",
          "group": "KS-な",
          "nai": "—",
          "arti": "tidak apa-apa / aman"
        },
        {
          "jp": "あぶない",
          "kanji": "危ない",
          "romaji": "abunai",
          "group": "KS-い",
          "nai": "—",
          "arti": "berbahaya"
        },
        {
          "jp": "もんだい",
          "kanji": "問題",
          "romaji": "mondai",
          "group": "N",
          "nai": "—",
          "arti": "masalah / soal"
        },
        {
          "jp": "こたえ",
          "kanji": "答え",
          "romaji": "kotae",
          "group": "N",
          "nai": "—",
          "arti": "jawaban"
        },
        {
          "jp": "きんえん",
          "kanji": "禁煙",
          "romaji": "kin'en",
          "group": "N",
          "nai": "—",
          "arti": "dilarang merokok"
        },
        {
          "jp": "けんこうほけんしょう",
          "kanji": "健康保険証",
          "romaji": "kenkou hokenshou",
          "group": "N",
          "nai": "—",
          "arti": "kartu asuransi kesehatan"
        },
        {
          "jp": "かぜ / ねつ / びょうき",
          "kanji": "風邪 / 熱 / 病気",
          "romaji": "kaze / netsu / byouki",
          "group": "N",
          "nai": "—",
          "arti": "masuk angin / demam / sakit"
        },
        {
          "jp": "くすり / おふろ",
          "kanji": "薬 / お風呂",
          "romaji": "kusuri / ofuro",
          "group": "N",
          "nai": "—",
          "arti": "obat / bak mandi (berendam)"
        },
        {
          "jp": "うわぎ / したぎ",
          "kanji": "上着 / 下着",
          "romaji": "uwagi / shitagi",
          "group": "N",
          "nai": "—",
          "arti": "jaket-jas / pakaian dalam"
        },
        {
          "jp": "～までに",
          "kanji": "～までに",
          "romaji": "~made ni",
          "group": "Partikel",
          "nai": "—",
          "arti": "paling lambat ~ (deadline)"
        },
        {
          "jp": "ですから",
          "kanji": "ですから",
          "romaji": "desukara",
          "group": "Konjungsi",
          "nai": "—",
          "arti": "oleh karena itu / jadi"
        }
      ]
    }
  ],
  "conjugationLab": [
    {
      "masu": "のみます",
      "romaji": "nomimasu",
      "arti": "minum",
      "group": "I",
      "stemBefore": "の",
      "changeFrom": "み (mi)",
      "changeTo": "ま (ma)",
      "nai": "のまない",
      "naiRomaji": "nomanai",
      "rule": "Kelompok I: ubah bunyi baris -i (み) ke baris -a (ま) + ない",
      "trap": "Ini bug Soal 65! Jangan 'のみない'."
    },
    {
      "masu": "いきます",
      "romaji": "ikimasu",
      "arti": "pergi",
      "group": "I",
      "stemBefore": "い",
      "changeFrom": "き (ki)",
      "changeTo": "か (ka)",
      "nai": "いかない",
      "naiRomaji": "ikanai",
      "rule": "Kelompok I: き (ki) → か (ka) + ない",
      "trap": "Di Bentuk-て memang pengecualian (いって), tapi di Bentuk-ない NORMAL (いかない)!"
    },
    {
      "masu": "はらいます",
      "romaji": "haraimasu",
      "arti": "membayar",
      "group": "I",
      "stemBefore": "はら",
      "changeFrom": "い (i)",
      "changeTo": "わ (wa)",
      "nai": "はらわない",
      "naiRomaji": "harawanai",
      "rule": "JEBAKAN KELOMPOK I: jika sebelum ます adalah い, ubah jadi わ (BUKAN あ) + ない!",
      "trap": "Jangan pernah tulis はらあない! Semua akhiran います (かいます・あいます・はらいます) jadi わない."
    },
    {
      "masu": "かいます",
      "romaji": "kaimasu",
      "arti": "membeli",
      "group": "I",
      "stemBefore": "か",
      "changeFrom": "い (i)",
      "changeTo": "わ (wa)",
      "nai": "かわない",
      "naiRomaji": "kawanai",
      "rule": "JEBAKAN KELOMPOK I: い → わ + ない",
      "trap": "Salah umum: かいない / かあない. Yang benar: かわない."
    },
    {
      "masu": "だします",
      "romaji": "dashimasu",
      "arti": "mengumpulkan",
      "group": "I",
      "stemBefore": "だ",
      "changeFrom": "し (shi)",
      "changeTo": "さ (sa)",
      "nai": "ださない",
      "naiRomaji": "dasanai",
      "rule": "Kelompok I: し (shi) → さ (sa) + ない",
      "trap": "Dipakai di Soal 67: レポートを ださなければ なりません."
    },
    {
      "masu": "まちます",
      "romaji": "machimasu",
      "arti": "menunggu",
      "group": "I",
      "stemBefore": "ま",
      "changeFrom": "ち (chi)",
      "changeTo": "た (ta)",
      "nai": "またない",
      "naiRomaji": "matanai",
      "rule": "Kelompok I: ち (chi) → た (ta) + ない",
      "trap": "Ingat deret hiragana: た・ち・つ・て・と (baris -a dari ち adalah た)."
    },
    {
      "masu": "ぬぎます",
      "romaji": "nugimasu",
      "arti": "melepas sepatu/baju",
      "group": "I",
      "stemBefore": "ぬ",
      "changeFrom": "ぎ (gi)",
      "changeTo": "が (ga)",
      "nai": "ぬがない",
      "naiRomaji": "nuganai",
      "rule": "Kelompok I: ぎ (gi) → が (ga) + ない",
      "trap": "Pertahankan tenten (゛): ぎ → が, jangan hilang jadi か."
    },
    {
      "masu": "はいります",
      "romaji": "hairimasu",
      "arti": "masuk",
      "group": "I",
      "stemBefore": "はい",
      "changeFrom": "り (ri)",
      "changeTo": "ら (ra)",
      "nai": "はいらない",
      "naiRomaji": "hairanai",
      "rule": "Kelompok I: り (ri) → ら (ra) + ない",
      "trap": "はいります (masuk) & かえります (pulang) termasuk Kelompok I!"
    },
    {
      "masu": "あります",
      "romaji": "arimasu",
      "arti": "ada / punya",
      "group": "I (Khusus)",
      "stemBefore": "",
      "changeFrom": "あります",
      "changeTo": "ない",
      "nai": "ない",
      "naiRomaji": "nai",
      "rule": "PENGECUALIAN TOTAL: あります tidak jadi あらない, melainkan langsung menjadi ない!",
      "trap": "Sangat penting buat Bab 20 & Bab 25 (おかねが なくても)."
    },
    {
      "masu": "たべます",
      "romaji": "tabemasu",
      "arti": "makan",
      "group": "II",
      "stemBefore": "たべ",
      "changeFrom": "ます",
      "changeTo": "ない",
      "nai": "たべない",
      "naiRomaji": "tabenai",
      "rule": "Kelompok II (bunyi -e sebelum ます): buang ます, langsung tempel ない!",
      "trap": "Paling gampang — tidak ada perubahan vokal."
    },
    {
      "masu": "わすれます",
      "romaji": "wasuremasu",
      "arti": "lupa",
      "group": "II",
      "stemBefore": "わすれ",
      "changeFrom": "ます",
      "changeTo": "ない",
      "nai": "わすれない",
      "naiRomaji": "wasurenai",
      "rule": "Kelompok II: buang ます + ない",
      "trap": "Sering dipakai dengan ないでください: わすれないで ください (tolong jangan lupa)."
    },
    {
      "masu": "みます",
      "romaji": "mimasu",
      "arti": "melihat",
      "group": "II (Khusus -i)",
      "stemBefore": "み",
      "changeFrom": "ます",
      "changeTo": "ない",
      "nai": "みない",
      "naiRomaji": "minai",
      "rule": "Kelompok II pengecualian bunyi -i (みます・おきます・かります・おります・います): cukup buang ます + ない.",
      "trap": "Jangan diubah jadi まない! Cukup みない."
    },
    {
      "masu": "きます",
      "romaji": "kimasu",
      "arti": "datang",
      "group": "III",
      "stemBefore": "",
      "changeFrom": "き (ki)",
      "changeTo": "こ (ko)",
      "nai": "こない",
      "naiRomaji": "konai",
      "rule": "Kelompok III (Irregular): きます (datang) berubah jadi こない!",
      "trap": "Jebakan maut! Bukan きない. Jadi 'tidak perlu datang' = こなくても いいです (Soal 68)."
    },
    {
      "masu": "します",
      "romaji": "shimasu",
      "arti": "melakukan",
      "group": "III",
      "stemBefore": "",
      "changeFrom": "します",
      "changeTo": "しない",
      "nai": "しない",
      "naiRomaji": "shinai",
      "rule": "Kelompok III (Irregular): します → しない (termasuk しんぱいします → しんぱいしない).",
      "trap": "Jangan jadi さない!"
    }
  ],
  "grammarPoints": [
    {
      "num": "POIN 01 · FONDASI",
      "title": "Cara Membentuk Bentuk -Nai (ない形[けい])",
      "formula": "Kelompok I: bunyi -i → -a + ない (khusus い → わ)  |  Kelompok II: buang ます + ない  |  Kelompok III: します→しない, きます→こない",
      "explain": "Bentuk -Nai adalah bentuk negatif biasa (kasual) dari kata kerja, sekaligus bahan baku WAJIB untuk semua pola kalimat Bab 17. Kalau pembentukan -Nai salah satu huruf saja, otomatis semua rumus turunannya ikut salah.",
      "table": [
        {
          "k": "Kelompok I (Normal)",
          "aturan": "き→か, ぎ→が, し→さ, ち→た, に→な, び→ば, み→ま, り→ら + ない",
          "contoh": "のみます → のまない · かきます → かかない · だします → ださない"
        },
        {
          "k": "Kelompok I (Akhiran い)",
          "aturan": "い → わ + ない (BUKAN あ!)",
          "contoh": "かいます → かわない · はらいます → はらわない · あいます → あわない"
        },
        {
          "k": "Kelompok I (Pengecualian)",
          "aturan": "あります → ない (langsung pendek)",
          "contoh": "おかねが あります → おかねが ない"
        },
        {
          "k": "Kelompok II",
          "aturan": "Coret ます + ない (termasuk みます・おきます・かります・います)",
          "contoh": "たべます → たべない · わすれます → わすれない · みます → みない"
        },
        {
          "k": "Kelompok III",
          "aturan": "Hafal mati hanya 2 kata!",
          "contoh": "します → しない · きます(datang) → こない"
        }
      ],
      "examples": [
        {
          "jp": "くすりを のまない",
          "romaji": "kusuri o nomanai",
          "id": "tidak minum obat"
        },
        {
          "jp": "あした こない",
          "romaji": "ashita konai",
          "id": "besok tidak datang"
        },
        {
          "jp": "おかねを はらわない",
          "romaji": "okane o harawanai",
          "id": "tidak membayar uang"
        }
      ],
      "trap": "Hati-hati membedakan き (ki) pada きます (datang, Kel. III → こない) vs きます (memakai baju, Kel. II → きない) vs ききます (mendengar, Kel. I → きかない)!",
      "formulaRomaji": "Kelompok I: bunyi -i → -a + nai (khusus i → wa) | Kelompok II: buang masu + nai | Kelompok III: shimasu → shinai, kimasu → konai",
      "formulaId": "Aturan mengubah kata kerja ke Bentuk-ない (negatif biasa) sebagai dasar pola Bab 17"
    },
    {
      "num": "POIN 02 · PERMINTAAN LARANGAN",
      "title": "V-ないで ください (Tolong jangan ~)",
      "formula": "[Bentuk -Nai] + で ください",
      "explain": "Digunakan untuk meminta atau menyarankan lawan bicara dengan sopan agar TIDAK melakukan suatu tindakan. Bentuknya sangat sederhana: ambil Bentuk -Nai utuh (jangan potong い!), lalu tempel で ください.",
      "examples": [
        {
          "jp": "ここで しゃしんを とらないで ください。",
          "romaji": "Koko de shashin o toranaide kudasai.",
          "id": "Tolong jangan mengambil foto di sini."
        },
        {
          "jp": "わたしは げんきですから、しんぱいしないで ください。",
          "romaji": "Watashi wa genki desu kara, shinpai shinaide kudasai.",
          "id": "Karena saya sehat, tolong jangan khawatir."
        },
        {
          "jp": "パスポートを わすれないで ください。",
          "romaji": "Pasupooto o wasurenaide kudasai.",
          "id": "Tolong jangan lupa paspor."
        }
      ],
      "trap": "Bedanya dengan Bab 15 (V-ては いけません): 'V-ては いけません' adalah larangan keras/aturan ('dilarang keras ~'), sedangkan 'V-ないで ください' lebih halus berupa permintaan/imbauan ('tolong jangan ~').",
      "formulaRomaji": "[Bentuk-nai] + de kudasai",
      "formulaId": "Tolong jangan melakukan ~ (permintaan/larangan halus)"
    },
    {
      "num": "POIN 03 · KEHARUSAN (BUG SOAL 67)",
      "title": "V-なければ なりません (Harus ~)",
      "formula": "[Bentuk -Nai (CORET い)] + ければ なりません",
      "explain": "Menyatakan kewajiban atau keharusan ('harus melakukan ~'). Secara harfiah bermakna 'kalau tidak melakukan ~, maka tidak jadi/tidak boleh' (double negative = wajib). Perhatikan: huruf い terakhir pada ない WAJIB dicoret sebelum menempelkan ければ なりません!",
      "examples": [
        {
          "jp": "まいにち くすりを のまなければ なりません。",
          "romaji": "Mainichi kusuri o nomanakereba narimasen.",
          "id": "Setiap hari harus minum obat."
        },
        {
          "jp": "きんようびまでに レポートを ださなければ なりません。",
          "romaji": "Kinyoubi made ni repooto o dasanakereba narimasen.",
          "id": "Paling lambat hari Jumat harus mengumpulkan laporan."
        },
        {
          "jp": "うちへ かえらなければ なりません。",
          "romaji": "Uchi e kaeranakereba narimasen.",
          "id": "Saya harus pulang ke rumah."
        }
      ],
      "trap": "Jangan lupa mencoret い! Salah: のまないければなりません ❌. Benar: のまな + ければ なりません = のまなければ なりません ✓.",
      "formulaRomaji": "[Bentuk-nai (coret i)] + kereba narimasen",
      "formulaId": "Harus / wajib melakukan ~"
    },
    {
      "num": "POIN 04 · TIDAK PERLU (BUG SOAL 68)",
      "title": "V-なくても いいです (Tidak perlu / tidak usah ~)",
      "formula": "[Bentuk -Nai (CORET い)] + くても いいです",
      "explain": "Menyatakan bahwa suatu tindakan TIDAK WAJIB / TIDAK PERLU dilakukan. Cara mudah mengingatnya: lihat ekor いいです ('tidak apa-apa / boleh'). Jadi [tidak melakukan] + ても いいです = tidak melakukannya pun tidak apa-apa (= TIDAK USAH / TIDAK PERLU).",
      "examples": [
        {
          "jp": "あした こなくても いいです。",
          "romaji": "Ashita konakute mo ii desu.",
          "id": "Besok tidak perlu datang (tidak datang pun tidak apa-apa)."
        },
        {
          "jp": "くつを ぬがなくても いいです。",
          "romaji": "Kutsu o nuganakute mo ii desu.",
          "id": "Tidak perlu melepas sepatu."
        },
        {
          "jp": "きょうは ざんぎょうしなくても いいです。",
          "romaji": "Kyou wa zangyou shinakute mo ii desu.",
          "id": "Hari ini tidak usah lembur."
        }
      ],
      "trap": "ANTI-TERBALIK (Bug Soal 68): Jika ujungnya なりません → HARUS (WAJIB). Jika ujungnya いいです → TIDAK PERLU (BEBAS). Bandingkan: のまなければ なりません (HARUS minum) vs のまなくても いいです (TIDAK PERLU minum)!",
      "formulaRomaji": "[Bentuk-nai (coret i)] + kute mo ii desu",
      "formulaId": "Tidak perlu / tidak usah melakukan ~"
    },
    {
      "num": "POIN 05 · TOPIK OBJEK & BATAS WAKTU",
      "title": "Objek menjadi は & Partikel Batas Waktu までに",
      "formula": "Objek を V  →  Objek は V   |   [Waktu] + までに (paling lambat ~)",
      "explain": "Ada 2 detail penting penutup Bab 17: (1) Objek yang biasanya memakai を bisa dipindahkan ke depan dan diganti は untuk dijadikan topik penekanan ('Kalau barang itu, tolong taruh di sini'). (2) Partikel までに menyatakan DEADLINE (batas waktu terakhir sebuah aksi harus selesai), berbeda dari まで di Bab 4 yang menyatakan durasi terus-menerus.",
      "examples": [
        {
          "jp": "ここに にもつを おかないで ください。→ にもつは ここに おかないで ください。",
          "romaji": "Nimotsu wa koko ni okanaide kudasai.",
          "id": "Kalau barang bawaan, tolong jangan ditaruh di sini."
        },
        {
          "jp": "どようびまでに ほんを かえさなければ なりません。",
          "romaji": "Doyoubi made ni hon o kaesanakereba narimasen.",
          "id": "Paling lambat hari Sabtu harus mengembalikan buku."
        },
        {
          "jp": "5じまで はたらきます。(Bab 4) vs 5じまでに かえります。(Bab 17)",
          "romaji": "5-ji made hatarakimasu vs 5-ji made ni kaerimasu.",
          "id": "Bekerja terus sampai jam 5 vs Pulang paling lambat jam 5."
        }
      ],
      "trap": "Ingat rumus bedanya: Aksi yang berlangsung terus-menerus (tidur, kerja, belajar) pakai まで. Aksi sekali selesai sebelum tenggat (kumpul tugas, kembalikan buku, bayar) pakai までに.",
      "formulaRomaji": "Objek o V  →  Objek wa V   |   [Waktu] + made ni",
      "formulaId": "Menonjolkan objek sebagai topik dengan は   |   Paling lambat sebelum [Waktu]"
    }
  ],
  "questions": [
    {
      "id": 1,
      "section": "A · Konjugasi Murni V-ない",
      "type": "mcq",
      "badge": "Tema 1 · Kelompok I (-mi → -ma)",
      "prompt": "のみます (minum) → Bentuk -Nai:",
      "promptRomaji": "nomimasu → ?",
      "sub": "Ubah langsung ke Bentuk -Nai (Kelompok I: み → ま + ない).",
      "options": [
        {
          "jp": "のみない",
          "romaji": "nominai"
        },
        {
          "jp": "のまない",
          "romaji": "nomanai"
        },
        {
          "jp": "のめない",
          "romaji": "nomenai"
        },
        {
          "jp": "のわない",
          "romaji": "nowanai"
        }
      ],
      "answer": 1,
      "explain": "BENAR: のまない! Kelompok I: huruf み (mi) sebelum ます berubah ke baris -a menjadi ま (ma) + ない = のまない."
    },
    {
      "id": 2,
      "section": "A · Konjugasi Murni V-ない",
      "type": "mcq",
      "badge": "Tema 1 · Kelompok I (-i → -wa)",
      "prompt": "はらいます (membayar) → Bentuk -Nai:",
      "promptRomaji": "haraimasu → ?",
      "sub": "Ubah langsung ke Bentuk -Nai (Kelompok I akhiran い → わ + ない).",
      "options": [
        {
          "jp": "はらあない",
          "romaji": "haraanai"
        },
        {
          "jp": "はらいない",
          "romaji": "harainai"
        },
        {
          "jp": "はらわない",
          "romaji": "harawanai"
        },
        {
          "jp": "はらない",
          "romaji": "haranai"
        }
      ],
      "answer": 2,
      "explain": "BENAR: はらわない! Pada Kelompok I, huruf い sebelum ます selalu berubah menjadi わ (bukan あ) + ない."
    },
    {
      "id": 3,
      "section": "A · Konjugasi Murni V-ない",
      "type": "mcq",
      "badge": "Tema 1 · Kelompok III (きます)",
      "prompt": "きます (datang) → Bentuk -Nai:",
      "promptRomaji": "kimasu → ?",
      "sub": "Ubah langsung kata kerja Kelompok III きます ke Bentuk -Nai.",
      "options": [
        {
          "jp": "きない",
          "romaji": "kinai"
        },
        {
          "jp": "かない",
          "romaji": "kanai"
        },
        {
          "jp": "こない",
          "romaji": "konai"
        },
        {
          "jp": "しない",
          "romaji": "shinai"
        }
      ],
      "answer": 2,
      "explain": "BENAR: こない! きます (datang) adalah Kelompok III; bunyi き berubah menjadi こ + ない = こない."
    },
    {
      "id": 4,
      "section": "A · Konjugasi Murni V-ない",
      "type": "input",
      "badge": "Tema 1 · Ketik Langsung",
      "prompt": "だします (mengumpulkan) → Bentuk -Nai:",
      "promptRomaji": "dashimasu → ?",
      "sub": "Ketik langsung Bentuk -Nai-nya (Hiragana: ださない atau Romaji: dasanai).",
      "placeholder": "Ketik: ださない atau dasanai",
      "accepted": [
        "ださない",
        "dasanai"
      ],
      "displayAnswer": "ださない (dasanai)",
      "explain": "BENAR: ださない! Kelompok I: し (shi) → さ (sa) + ない = ださない."
    },
    {
      "id": 5,
      "section": "A · Konjugasi Murni V-ない",
      "type": "mcq",
      "badge": "Tema 1 · Pengecualian あります",
      "prompt": "あります (ada / punya) → Bentuk -Nai:",
      "promptRomaji": "arimasu → ?",
      "sub": "Ubah langsung kata kerja あります ke Bentuk -Nai.",
      "options": [
        {
          "jp": "あらない",
          "romaji": "aranai"
        },
        {
          "jp": "ありない",
          "romaji": "arinai"
        },
        {
          "jp": "ない",
          "romaji": "nai"
        },
        {
          "jp": "わない",
          "romaji": "wanai"
        }
      ],
      "answer": 2,
      "explain": "BENAR: ない! Pengecualian mutlak: Bentuk -Nai dari あります adalah ない (bukan あらない)."
    },
    {
      "id": 6,
      "section": "A · Konjugasi Murni V-ない",
      "type": "input",
      "badge": "Tema 1 · Ketik Langsung",
      "prompt": "いきます (pergi) → Bentuk -Nai:",
      "promptRomaji": "ikimasu → ?",
      "sub": "Ketik langsung Bentuk -Nai dari いきます (Hiragana atau Romaji).",
      "placeholder": "Ketik: いかない atau ikanai",
      "accepted": [
        "いかない",
        "ikanai"
      ],
      "displayAnswer": "いかない (ikanai)",
      "explain": "BENAR: いかない! Kelompok I normal: き (ki) → か (ka) + ない = いかない."
    },
    {
      "id": 7,
      "section": "B · Rumus ～ないで ください",
      "type": "mcq",
      "badge": "Tema 2 · Tolong Jangan ~",
      "prompt": "わすれます (lupa) → 「Tolong jangan lupa」:",
      "promptRomaji": "wasuremasu + naide kudasai → ?",
      "sub": "Rumus: Bentuk -Nai utuh + で ください.",
      "options": [
        {
          "jp": "わすらないで ください",
          "romaji": "wasuranaide kudasai"
        },
        {
          "jp": "わすれないで ください",
          "romaji": "wasurenaide kudasai"
        },
        {
          "jp": "わすれなくて ください",
          "romaji": "wasurenakute kudasai"
        },
        {
          "jp": "わすれなければ ください",
          "romaji": "wasurenakereba kudasai"
        }
      ],
      "answer": 1,
      "explain": "BENAR: わすれないで ください! わすれます (Kelompok II) → わすれない + で ください."
    },
    {
      "id": 8,
      "section": "B · Rumus ～ないで ください",
      "type": "mcq",
      "badge": "Tema 2 · Tolong Jangan ~",
      "prompt": "とります (mengambil foto) → 「Tolong jangan mengambil (foto)」:",
      "promptRomaji": "torimasu + naide kudasai → ?",
      "sub": "Ubah とります (Kelompok I: り → ら) ke pola ～ないで ください.",
      "options": [
        {
          "jp": "とりないで ください",
          "romaji": "torinaide kudasai"
        },
        {
          "jp": "とらないで ください",
          "romaji": "toranaide kudasai"
        },
        {
          "jp": "とらなくて ください",
          "romaji": "toranakute kudasai"
        },
        {
          "jp": "とってないで ください",
          "romaji": "tottenaide kudasai"
        }
      ],
      "answer": 1,
      "explain": "BENAR: とらないで ください! とります → とらない + で ください."
    },
    {
      "id": 9,
      "section": "B · Rumus ～ないで ください",
      "type": "mcq",
      "badge": "Tema 2 · Tolong Jangan ~",
      "prompt": "すいます (merokok) → 「Tolong jangan merokok」:",
      "promptRomaji": "suimasu + naide kudasai → ?",
      "sub": "Ingat: すいます berakhiran い sebelum ます (い → わ).",
      "options": [
        {
          "jp": "すいないで ください",
          "romaji": "suinaide kudasai"
        },
        {
          "jp": "すわないで ください",
          "romaji": "suwanaide kudasai"
        },
        {
          "jp": "すあないで ください",
          "romaji": "suanaide kudasai"
        },
        {
          "jp": "すわなくて ください",
          "romaji": "suwanakute kudasai"
        }
      ],
      "answer": 1,
      "explain": "BENAR: すわないで ください! すいます → すわない + で ください."
    },
    {
      "id": 10,
      "section": "B · Rumus ～ないで ください",
      "type": "mcq",
      "badge": "Tema 2 · Tolong Jangan ~",
      "prompt": "はいります (masuk) → 「Tolong jangan masuk」:",
      "promptRomaji": "hairimasu + naide kudasai → ?",
      "sub": "はいります adalah Kelompok I (り → ら + ない).",
      "options": [
        {
          "jp": "はいらないで ください",
          "romaji": "hairanaide kudasai"
        },
        {
          "jp": "はいりないで ください",
          "romaji": "hairinaide kudasai"
        },
        {
          "jp": "はいれないで ください",
          "romaji": "hairenaide kudasai"
        },
        {
          "jp": "はいらなくて ください",
          "romaji": "hairanakute kudasai"
        }
      ],
      "answer": 0,
      "explain": "BENAR: はいらないで ください! はいります → はいらない + で ください."
    },
    {
      "id": 11,
      "section": "B · Rumus ～ないで ください",
      "type": "input",
      "badge": "Tema 2 · Ketik Langsung",
      "prompt": "しんぱいします (khawatir) → 「しんぱい（　　　　） ください」 (Tolong jangan khawatir):",
      "promptRomaji": "shinpai ( _____ ) kudasai",
      "sub": "Ketik bagian yang kosong: します → しない + で.",
      "placeholder": "Ketik: しないで atau shinaide",
      "accepted": [
        "しないで",
        "shinaide",
        "しんぱいしないで",
        "shinpai shinaide"
      ],
      "displayAnswer": "しないで (shinaide)",
      "explain": "BENAR: しんぱいしないで ください! します → しない + で ください."
    },
    {
      "id": 12,
      "section": "C · Rumus ～なければ なりません",
      "type": "mcq",
      "badge": "Tema 3 · HARUS ~ (Bug Soal 67)",
      "prompt": "だします (mengumpulkan) → 「HARUS mengumpulkan」:",
      "promptRomaji": "dashimasu → harus mengumpulkan",
      "sub": "Rumus: Bentuk -Nai (ださない) → coret い + ければ なりません.",
      "options": [
        {
          "jp": "ださないで ください",
          "romaji": "dasanaide kudasai"
        },
        {
          "jp": "ださなくても いいです",
          "romaji": "dasanakute mo ii desu"
        },
        {
          "jp": "ださなければ なりません",
          "romaji": "dasanakereba narimasen"
        },
        {
          "jp": "ださないければ なりません",
          "romaji": "dasanaikereba narimasen"
        }
      ],
      "answer": 2,
      "explain": "BENAR: ださなければ なりません! Coret い dari ださない → ださな + ければ なりません."
    },
    {
      "id": 13,
      "section": "C · Rumus ～なければ なりません",
      "type": "mcq",
      "badge": "Tema 3 · HARUS ~",
      "prompt": "のみます (minum) → 「HARUS minum (obat)」:",
      "promptRomaji": "nomimasu → harus minum",
      "sub": "のみます → のまない → coret い + ければ なりません.",
      "options": [
        {
          "jp": "のみなければ なりません",
          "romaji": "nominakereba narimasen"
        },
        {
          "jp": "のまなければ なりません",
          "romaji": "nomanakereba narimasen"
        },
        {
          "jp": "のまなくても いいです",
          "romaji": "nomanakute mo ii desu"
        },
        {
          "jp": "のまないければ なりません",
          "romaji": "nomanaikereba narimasen"
        }
      ],
      "answer": 1,
      "explain": "BENAR: のまなければ なりません! のまない → coret い → のまなければ なりません."
    },
    {
      "id": 14,
      "section": "C · Rumus ～なければ なりません",
      "type": "mcq",
      "badge": "Tema 3 · HARUS ~",
      "prompt": "おぼえます (menghafal) → 「HARUS menghafal」:",
      "promptRomaji": "oboemasu → harus menghafal",
      "sub": "おぼえます adalah Kelompok II (buang ます + ない → coret い + ければ なりません).",
      "options": [
        {
          "jp": "おぼえなければ なりません",
          "romaji": "oboenakereba narimasen"
        },
        {
          "jp": "おぼらなければ なりません",
          "romaji": "oboranakereba narimasen"
        },
        {
          "jp": "おぼえなくても いいです",
          "romaji": "oboenakute mo ii desu"
        },
        {
          "jp": "おぼえないければ なりません",
          "romaji": "oboenaikereba narimasen"
        }
      ],
      "answer": 0,
      "explain": "BENAR: おぼえなければ なりません! おぼえます → おぼえない → おぼえなければ なりません."
    },
    {
      "id": 15,
      "section": "C · Rumus ～なければ なりません",
      "type": "mcq",
      "badge": "Tema 3 · HARUS ~",
      "prompt": "はらいます (membayar) → 「HARUS membayar」:",
      "promptRomaji": "haraimasu → harus membayar",
      "sub": "はらいます → はらわない → coret い + ければ なりません.",
      "options": [
        {
          "jp": "はらいなければ なりません",
          "romaji": "harainakereba narimasen"
        },
        {
          "jp": "はらあなければ なりません",
          "romaji": "haraanakereba narimasen"
        },
        {
          "jp": "はらわなければ なりません",
          "romaji": "harawanakereba narimasen"
        },
        {
          "jp": "はらわなくても いいです",
          "romaji": "harawanakute mo ii desu"
        }
      ],
      "answer": 2,
      "explain": "BENAR: はらわなければ なりません! はらわない → coret い → はらわなければ なりません."
    },
    {
      "id": 16,
      "section": "C · Rumus ～なければ なりません",
      "type": "input",
      "badge": "Tema 3 · Ketik Langsung",
      "prompt": "かえります (pulang) → 「（　　　　　） なりません」 (HARUS pulang):",
      "promptRomaji": "( _____ ) narimasen",
      "sub": "Ketik bentuk -nakereba dari かえります (かえらない → coret い + ければ).",
      "placeholder": "Ketik: かえらなければ atau kaeranakereba",
      "accepted": [
        "かえらなければ",
        "kaeranakereba"
      ],
      "displayAnswer": "かえらなければ (kaeranakereba)",
      "explain": "BENAR: かえらなければ なりません! かえります → かえらない → かえらなければ."
    },
    {
      "id": 17,
      "section": "D · Rumus ～なくても いいです",
      "type": "mcq",
      "badge": "Tema 4 · TIDAK PERLU ~ (Bug Soal 68)",
      "prompt": "きます (datang) → 「TIDAK PERLU datang」:",
      "promptRomaji": "kimasu → tidak perlu datang",
      "sub": "きます → こない → coret い + くても いいです.",
      "options": [
        {
          "jp": "こなければ なりません",
          "romaji": "konakereba narimasen"
        },
        {
          "jp": "こなくても いいです",
          "romaji": "konakute mo ii desu"
        },
        {
          "jp": "きなくても いいです",
          "romaji": "kinakute mo ii desu"
        },
        {
          "jp": "こないで ください",
          "romaji": "konaide kudasai"
        }
      ],
      "answer": 1,
      "explain": "BENAR: こなくても いいです! きます → こない → coret い + くても いいです = tidak perlu datang."
    },
    {
      "id": 18,
      "section": "D · Rumus ～なくても いいです",
      "type": "mcq",
      "badge": "Tema 4 · TIDAK PERLU ~",
      "prompt": "ぬぎます (melepas sepatu) → 「TIDAK PERLU melepas」:",
      "promptRomaji": "nugimasu → tidak perlu melepas",
      "sub": "ぬぎます → ぬがない → coret い + くても いいです.",
      "options": [
        {
          "jp": "ぬがなければ なりません",
          "romaji": "nuganakereba narimasen"
        },
        {
          "jp": "ぬぎなくても いいです",
          "romaji": "nuginakute mo ii desu"
        },
        {
          "jp": "ぬがなくても いいです",
          "romaji": "nuganakute mo ii desu"
        },
        {
          "jp": "ぬかないでも いいです",
          "romaji": "nukanaide mo ii desu"
        }
      ],
      "answer": 2,
      "explain": "BENAR: ぬがなくても いいです! ぬぎます (ぎ→が) → ぬがない → ぬがなくても いいです."
    },
    {
      "id": 19,
      "section": "D · Rumus ～なくても いいです",
      "type": "mcq",
      "badge": "Tema 4 · Arti Rumus",
      "prompt": "Apa arti rumus 「V-なくても いいです」 (contoh: いかなくても いいです)?",
      "promptRomaji": "ikanakute mo ii desu = ?",
      "sub": "Bedakan tegas dengan ～なければ なりません!",
      "options": [
        {
          "jp": "Harus pergi (wajib)",
          "romaji": ""
        },
        {
          "jp": "Tolong jangan pergi (larangan)",
          "romaji": ""
        },
        {
          "jp": "Tidak perlu / tidak usah pergi (bebas)",
          "romaji": ""
        },
        {
          "jp": "Sudah pernah pergi",
          "romaji": ""
        }
      ],
      "answer": 2,
      "explain": "BENAR: Tidak perlu / tidak usah pergi! Ingat: ～なければ なりません = HARUS, sedangkan ～なくても いいです = TIDAK PERLU."
    },
    {
      "id": 20,
      "section": "D · Rumus ～なくても いいです",
      "type": "input",
      "badge": "Tema 4 · Ketik Langsung",
      "prompt": "ざんぎょうします (lembur) → 「ざんぎょうしなくても （　　　　）。」 (Tidak perlu lembur):",
      "promptRomaji": "zangyou shinakute mo ( _____ ).",
      "sub": "Ketik kata penutup rumus 'tidak perlu' (Hiragana atau Romaji).",
      "placeholder": "Ketik: いいです atau ii desu",
      "accepted": [
        "いいです",
        "iidesu",
        "ii desu"
      ],
      "displayAnswer": "いいです (ii desu)",
      "explain": "SEMPURNA! Rumus 'tidak perlu' selalu ditutup いいです (～なくても いいです)."
    }
  ]
};
