/* ZONA KUNING BAGIAN A (Skor 2/4): Bab 9, 10, 11, 13, 18, 19 */
window.ERROR_CHAPTERS.push(
  // ==================== BAB 9 ====================
  {
    num: 9,
    zone: "amber",
    oldScore: "2/4",
    title: "Partikel が (Suka, Pandai, Mengerti) & Alasan から",
    shortBug: "Lupa objek すきです wajib pakai が (Soal 33) dan tertukar kosakata りょうりが じょうず (Soal 34).",
    bugs: [
      { soal: "Soal 33", salah: "Tidak memakai partikel が di depan すきです", benar: "イタリアりょうり が すきです (objek perasaan/kemampuan = が!)", kenapa: "すき, きらい, じょうず, へた, わかります, あります SEMUANYA wajib memakai が (bukan を)!" },
      { soal: "Soal 34", salah: "Tertukar arti りょうりが じょうずです", benar: "りょうり = masakan · じょうず = pandai → 'pandai memasak'", kenapa: "Hafalkan pasangan lawannya: じょうず (pandai) vs へた (payah/tidak pandai)." }
    ],
    grammar: [
      {
        num: "POIN 01",
        title: "Partikel が untuk Suka, Benci, Pandai, Payah, Mengerti, & Punya",
        formula: "[Subjek] は [Objek] が すき／きらい／じょうず／へた です  |  わかります／あります",
        explain: "Walaupun dalam bahasa Indonesia terasa seperti objek biasa ('suka musik', 'mengerti bahasa Jepang'), dalam bahasa Jepang keenam predikat ini WAJIB memakai partikel が.",
        examples: [
          { jp: "わたしは おんがくが すきです。", romaji: "Watashi wa ongaku ga suki desu.", id: "Saya suka musik." },
          { jp: "かりなさんは りょうりが じょうずです。", romaji: "Karina-san wa ryouri ga jouzu desu.", id: "Sdr. Karina pandai memasak." },
          { jp: "わたしは にほんごが すこし わかります。", romaji: "Watashi wa nihongo ga sukoshi wakarimasu.", id: "Saya sedikit mengerti bahasa Jepang." }
        ],
        trap: "Bug Soal 33: Jangan pernah menulis 'おんがくを すきです' ❌! Selalu 'おんがくが すきです' ✓."
      },
      {
        num: "POIN 02",
        title: "Kata Keterangan Tingkat & Alasan から",
        formula: "Positif: よく・だいたい・たくさん・すこし  |  Negatif: あまり・ぜんぜん  |  [Alasan] から、[Akibat]",
        explain: "あまり (tidak terlalu) dan ぜんぜん (sama sekali tidak) WAJIB diikuti bentuk negatif. Partikel から menghubungkan alasan di depan dan akibat di belakang.",
        examples: [
          { jp: "じかんが ありませんから、しんぶんを よみません。", romaji: "Jikan ga arimasen kara, shinbun o yomimasen.", id: "Karena tidak ada waktu, tidak membaca koran." },
          { jp: "かんじが ぜんぜん わかりません。", romaji: "Kanji ga zenzen wakarimasen.", id: "Sama sekali tidak mengerti kanji." }
        ],
        trap: "ぜんぜん tidak pernah dipakai di kalimat positif!"
      }
    ],
    vocab: [
      { jp: "すき［な］ / きらい［な］", romaji: "suki / kirai", arti: "suka / benci" },
      { jp: "じょうず［な］ / へた［な］", romaji: "jouzu / heta", arti: "pandai / payah (tidak pandai)" },
      { jp: "りょうり / スポーツ / おんがく", romaji: "ryouri / supootsu / ongaku", arti: "masakan / olahraga / musik" },
      { jp: "わかります / あります", romaji: "wakarimasu / arimasu", arti: "mengerti / punya" },
      { jp: "よく / だいたい / ぜんぜん", romaji: "yoku / daitai / zenzen", arti: "dengan baik / kira-kira / sama sekali (negatif)" }
    ],
    questions: [
      {
        id: "b9_1", type: "mcq", badge: "Perbaikan Soal 33",
        prompt: "わたしは スポーツ （　　） すきです。 (Saya suka olahraga.)",
        promptRomaji: "Watashi wa supootsu ( _ ) suki desu.",
        sub: "Partikel wajib di depan すきです adalah...",
        options: [
          { jp: "を", romaji: "o" },
          { jp: "が", romaji: "ga" },
          { jp: "で", romaji: "de" },
          { jp: "に", romaji: "ni" }
        ],
        answer: 1,
        explain: "BENAR: が! すき, きらい, じょうず, へた, わかります, あります wajib pakai が."
      },
      {
        id: "b9_2", type: "mcq", badge: "Perbaikan Soal 34",
        prompt: "Apa arti dari: 「ははは りょうりが じょうずです。」?",
        promptRomaji: "Haha wa ryouri ga jouzu desu.",
        sub: "Cek arti りょうり dan じょうず!",
        options: [
          { jp: "Ibu tidak suka memasak.", romaji: "" },
          { jp: "Ibu pandai memasak.", romaji: "" },
          { jp: "Ibu payah memasak.", romaji: "" },
          { jp: "Ibu pandai menyanyi.", romaji: "" }
        ],
        answer: 1,
        explain: "BENAR: Ibu pandai memasak! りょうり = masakan, じょうず = pandai."
      },
      {
        id: "b9_3", type: "mcq", badge: "Pasangan ぜんぜん",
        prompt: "わたしは えいごが ぜんぜん （　　　　　）。",
        promptRomaji: "Watashi wa eigo ga zenzen ( _____ ).",
        sub: "ぜんぜん wajib berpasangan dengan bentuk apa?",
        options: [
          { jp: "わかります", romaji: "wakarimasu" },
          { jp: "わかりました", romaji: "wakarimashita" },
          { jp: "わかりません", romaji: "wakarimasen" },
          { jp: "じょうずです", romaji: "jouzu desu" }
        ],
        answer: 2,
        explain: "BENAR: わかりません! ぜんぜん (sama sekali tidak) wajib ditutup bentuk negatif."
      },
      {
        id: "b9_4", type: "mcq", badge: "Alasan から",
        prompt: "あした テストが あります （　　）、こんばん べんきょうします。",
        promptRomaji: "Ashita tesuto ga arimasu ( __ ), konban benkyou shimasu.",
        sub: "Artinya: 'KARENA besok ada ujian, malam ini belajar.'",
        options: [
          { jp: "が", romaji: "ga" },
          { jp: "から", romaji: "kara" },
          { jp: "まで", romaji: "made" },
          { jp: "と", romaji: "to" }
        ],
        answer: 1,
        explain: "BENAR: から ('karena') menghubungkan alasan di depan dengan akibat di belakang."
      },
      {
        id: "b9_5", type: "input", badge: "Latihan Ketik",
        prompt: "Lengkapi partikel: 「おかね （　） ありませんから、かいません。」 (Karena tidak punya uang, tidak beli.)",
        promptRomaji: "Okane ( _ ) arimasen kara, kaimasen.",
        sub: "Ketik 1 partikel (Hiragana atau Romaji).",
        placeholder: "Ketik: が atau ga",
        accepted: ["が", "ga"],
        displayAnswer: "が (ga)",
        explain: "BENAR: が! あります (punya/ada) selalu menggunakan partikel が."
      }
    ]
  },

  // ==================== BAB 10 ====================
  {
    num: 10,
    zone: "amber",
    oldScore: "2/4",
    title: "Keberadaan (あります・います) & Kosakata Posisi (うえ・した)",
    shortBug: "Lupa あります memakai が (Soal 37) dan tertukar した (bawah) vs うえ (atas) di Soal 39.",
    bugs: [
      { soal: "Soal 37", salah: "Tidak memakai が pada pola keberadaan あります", benar: "[Tempat] に [Benda] が あります", kenapa: "Di pola keberadaan, tempat memakai に dan benda/makhluk yang ada memakai が!" },
      { soal: "Soal 39", salah: "Tertukar した (bawah) dengan うえ (atas)", benar: "うえ (上) = ATAS · した (下) = BAWAH", kenapa: "Hafalkan pasangan posisi: うえ(atas)/した(bawah), まえ(depan)/うしろ(belakang), みぎ(kanan)/ひだり(kiri), なか(dalam)/そと(luar)." }
    ],
    grammar: [
      {
        num: "POIN 01",
        title: "2 Pola Keberadaan: あります (Benda Mati) vs います (Makhluk Hidup)",
        formula: "Pola 1: [Tempat] に [N] が あります／います\nPola 2: [N] は [Tempat] に あります／います",
        explain: "Pola 1 dipakai untuk memperkenalkan apa yang ada di suatu tempat ('Di kamar ada meja'). Pola 2 dipakai saat menanyakan/menjawab posisi benda yang sudah dibicarakan ('Sdr. Miller ada di kantor').",
        examples: [
          { jp: "へやに つくえが あります。", romaji: "Heya ni tsukue ga arimasu.", id: "Di kamar ada meja (benda mati → あります)." },
          { jp: "にわに いぬが います。", romaji: "Niwa ni inu ga imasu.", id: "Di halaman ada anjing (makhluk hidup → います)." },
          { jp: "つくえの したに ねこが います。", romaji: "Tsukue no shita ni neko ga imasu.", id: "Di bawah meja ada kucing." }
        ],
        trap: "Bug Soal 37: Lokasi keberadaan statis memakai に (bukan で), dan benda yang ada memakai が (bukan を)!"
      },
      {
        num: "POIN 02",
        title: "Menyebut Posisi Spesifik dengan の",
        formula: "[Benda Acuan] の [Posisi] に [N] が あります／います",
        explain: "Kata posisi (うえ, した, なか, となり, あいだ) adalah Kata Benda, jadi wajib dihubungkan dengan の.",
        examples: [
          { jp: "いすの したに かばんが あります。", romaji: "Isu no shita ni kaban ga arimasu.", id: "Di bawah kursi ada tas." },
          { jp: "ほんやは ぎんこうと ゆうびんきょくの あいだに あります。", romaji: "Honya wa ginkou to yuubinkyoku no aida ni arimasu.", id: "Toko buku ada di antara bank dan kantor pos." }
        ],
        trap: "Bug Soal 39: うえ = ATAS, した = BAWAH! Bayangkan: 'U'e = Up (atas)!"
      }
    ],
    vocab: [
      { jp: "うえ / した", romaji: "ue / shita", arti: "atas / bawah" },
      { jp: "まえ / うしろ", romaji: "mae / ushiro", arti: "depan / belakang" },
      { jp: "みぎ / ひだり", romaji: "migi / hidari", arti: "kanan / kiri" },
      { jp: "なか / そと", romaji: "naka / soto", arti: "dalam / luar" },
      { jp: "となり / ちかく / あいだ", romaji: "tonari / chikaku / aida", arti: "sebelah / dekat / antara" }
    ],
    questions: [
      {
        id: "b10_1", type: "mcq", badge: "Perbaikan Soal 37",
        prompt: "つくえの うえに パソコン （　　） あります。",
        promptRomaji: "Tsukue no ue ni pasokon ( _ ) arimasu.",
        sub: "Partikel wajib sebelum あります／います adalah...",
        options: [
          { jp: "を", romaji: "o" },
          { jp: "が", romaji: "ga" },
          { jp: "で", romaji: "de" },
          { jp: "に", romaji: "ni" }
        ],
        answer: 1,
        explain: "BENAR: が! Pola keberadaan: [Tempat] に [Benda] が あります."
      },
      {
        id: "b10_2", type: "mcq", badge: "Perbaikan Soal 39",
        prompt: "Apa arti dari: 「テーブルの したに ねこが います。」?",
        promptRomaji: "Teeburu no shita ni neko ga imasu.",
        sub: "Ingat: うえ = atas (Up), した = ?",
        options: [
          { jp: "Di atas meja ada kucing.", romaji: "" },
          { jp: "Di bawah meja ada kucing.", romaji: "" },
          { jp: "Di belakang meja ada kucing.", romaji: "" },
          { jp: "Di dalam meja ada kucing.", romaji: "" }
        ],
        answer: 1,
        explain: "BENAR: Di bawah meja ada kucing! した = bawah, うえ = atas."
      },
      {
        id: "b10_3", type: "mcq", badge: "あります vs います",
        prompt: "あそこに おとこの ひとが （　　　　）。 (Di sana ada seorang laki-laki.)",
        promptRomaji: "Asoko ni otoko no hito ga ( _____ ).",
        sub: "Manusia / hewan memakai あります atau います?",
        options: [
          { jp: "あります", romaji: "arimasu" },
          { jp: "います", romaji: "imasu" },
          { jp: "します", romaji: "shimasu" },
          { jp: "です", romaji: "desu" }
        ],
        answer: 1,
        explain: "BENAR: います! Makhluk hidup (manusia & hewan) selalu memakai います."
      },
      {
        id: "b10_4", type: "mcq", badge: "Posisi あいだ",
        prompt: "ぎんこうは スーパーと えきの （　　　）に あります。 (Bank ada di ANTARA supermarket dan stasiun.)",
        promptRomaji: "Ginkou wa suupaa to eki no ( ___ ) ni arimasu.",
        sub: "Pilih kosakata posisi 'antara'!",
        options: [
          { jp: "となり", romaji: "tonari" },
          { jp: "あいだ", romaji: "aida" },
          { jp: "うしろ", romaji: "ushiro" },
          { jp: "なか", romaji: "naka" }
        ],
        answer: 1,
        explain: "BENAR: あいだ (di antara A dan B: AとBの あいだに)."
      },
      {
        id: "b10_5", type: "input", badge: "Latihan Ketik",
        prompt: "Ketik kata bahasa Jepang untuk posisi 'BAWAH'!",
        promptRomaji: "Bawah = ?",
        sub: "Boleh ketik Hiragana atau Romaji.",
        placeholder: "Ketik: した atau shita",
        accepted: ["した", "shita"],
        displayAnswer: "した (shita)",
        explain: "BENAR: した (shita) = bawah! Lawannya うえ (ue) = atas."
      }
    ]
  },

  // ==================== BAB 11 ====================
  {
    num: 11,
    zone: "amber",
    oldScore: "2/4",
    title: "Kata Bantu Bilangan (～つ・～にん) & Durasi",
    shortBug: "Salah hitungan 3 buah (menjawab さんつ, seharusnya みっつ) dan kata tanya jumlah orang (なんにん).",
    bugs: [
      { soal: "Soal 41", salah: "Menjawab さんつ untuk '3 buah'", benar: "3 buah = みっつ (mittsu)", kenapa: "Hitungan umum 1–10 (～つ) memakai bacaan asli Jepang (Kun-yomi), BUKAN ichi-ni-san! 1: ひとつ, 2: ふたつ, 3: みっつ, 4: よっつ..." },
      { soal: "Soal 42", salah: "Salah memilih kata tanya jumlah orang", benar: "Berapa orang = なんにん (nannin)", kenapa: "1 orang = ひとり, 2 orang = ふたり, 3 orang = さんにん, 4 orang = よにん, berapa orang = なんにん!" }
    ],
    grammar: [
      {
        num: "POIN 01",
        title: "Hitungan Benda Umum 1–10 (～つ) — Wajib Hafal Urut!",
        formula: "ひとつ(1) · ふたつ(2) · みっつ(3) · よっつ(4) · いつつ(5) · むっつ(6) · ななつ(7) · やっつ(8) · ここのつ(9) · とお(10) · いくつ(berapa?)",
        explain: "Satuan ～つ dipakai untuk benda bulat/umum seperti buah (apel, jeruk), kursi, tas, dll. Kata bilangan ditaruh SEBELUM kata kerja, TANPA partikel di belakangnya.",
        examples: [
          { jp: "りんごを みっつ かいました。", romaji: "Ringo o mittsu kaimashita.", id: "Membeli 3 buah apel." },
          { jp: "みかんを いくつ かいましたか。…よっつ かいました。", romaji: "Mikan o ikutsu kaimashita ka. ...Yottsu kaimashita.", id: "Membeli berapa buah jeruk? ...Membeli 4 buah." }
        ],
        trap: "Bug Soal 41: Tidak ada kata 'いちつ・につ・さんつ' ❌! Harus ひとつ・ふたつ・みっつ ✓."
      },
      {
        num: "POIN 02",
        title: "Hitungan Orang (～にん) & Frekuensi",
        formula: "ひとり(1) · ふたり(2) · さんにん(3) · よにん(4) · なんにん(berapa orang?)",
        explain: "Perhatikan 1 orang (ひとり), 2 orang (ふたり), dan 4 orang (よにん — bukan よんにん!). Untuk frekuensi: 1しゅうかんに 2かい (2 kali dalam 1 minggu).",
        examples: [
          { jp: "かぞくは なんにんですか。…よにんです。", romaji: "Kazoku wa nannin desu ka. ...Yonin desu.", id: "Keluarga Anda berapa orang? ...4 orang." },
          { jp: "1か月に 2かい えいがを みます。", romaji: "Ikkagetsu ni nikai eiga o mimasu.", id: "Menonton film 2 kali dalam 1 bulan." }
        ],
        trap: "Bug Soal 42: Kata tanya jumlah orang = なんにん (bukan いくつ)."
      }
    ],
    vocab: [
      { jp: "ひとつ / ふたつ / みっつ / よっつ", romaji: "hitotsu / futatsu / mittsu / yottsu", arti: "1 / 2 / 3 / 4 buah" },
      { jp: "ひとり / ふたり / さんにん / よにん", romaji: "hitori / futari / sannin / yonin", arti: "1 / 2 / 3 / 4 orang" },
      { jp: "いくつ / なんにん / どのくらい", romaji: "ikutsu / nannin / donokurai", arti: "berapa buah / berapa orang / berapa lama" },
      { jp: "～だい / ～まい / ～かい", romaji: "~dai / ~mai / ~kai", arti: "unit mesin / lembar benda tipis / kali (frekuensi)" }
    ],
    questions: [
      {
        id: "b11_1", type: "mcq", badge: "Perbaikan Soal 41",
        prompt: "りんごを （　　　） かいました。 (Membeli 3 buah apel.)",
        promptRomaji: "Ringo o ( ___ ) kaimashita.",
        sub: "Hitungan 3 buah dalam seri ひとつ・ふたつ...",
        options: [
          { jp: "さんつ", romaji: "santsu" },
          { jp: "みっつ", romaji: "mittsu" },
          { jp: "よっつ", romaji: "yottsu" },
          { jp: "むっつ", romaji: "muttsu" }
        ],
        answer: 1,
        explain: "BENAR: みっつ (mittsu)! 1=ひとつ, 2=ふたつ, 3=みっつ, 4=よっつ."
      },
      {
        id: "b11_2", type: "mcq", badge: "Perbaikan Soal 42",
        prompt: "きょうしつに がくせいが （　　　　） いますか。 (Di kelas ada BERAPA ORANG mahasiswa?)",
        promptRomaji: "Kyoushitsu ni gakusei ga ( ____ ) imasu ka.",
        sub: "Kata tanya untuk jumlah ORANG adalah...",
        options: [
          { jp: "いくつ", romaji: "ikutsu" },
          { jp: "なんまい", romaji: "nanmai" },
          { jp: "なんにん", romaji: "nannin" },
          { jp: "なんだい", romaji: "nandai" }
        ],
        answer: 2,
        explain: "BENAR: なんにん (nannin) untuk menanyakan jumlah orang!"
      },
      {
        id: "b11_3", type: "mcq", badge: "Jebakan 4 Orang",
        prompt: "Bagaimana cara membaca 「4人」 (4 orang) yang BENAR?",
        promptRomaji: "4 orang = ?",
        sub: "Hati-hati huruf 'n'!",
        options: [
          { jp: "しにん", romaji: "shinin" },
          { jp: "よんにん", romaji: "yonnin" },
          { jp: "よにん", romaji: "yonin" },
          { jp: "よっつ", romaji: "yottsu" }
        ],
        answer: 2,
        explain: "BENAR: よにん (yonin)! (Jangan しにん karena artinya jenazah/orang mati!)."
      },
      {
        id: "b11_4", type: "mcq", badge: "Frekuensi",
        prompt: "1しゅうかん （　　） 3かい テニスを します。 (Dalam 1 minggu bermain tenis 3 kali.)",
        promptRomaji: "Isshuukan ( _ ) sankai tenisu o shimasu.",
        sub: "Partikel di antara kurun waktu dan frekuensi adalah...",
        options: [
          { jp: "に", romaji: "ni" },
          { jp: "で", romaji: "de" },
          { jp: "を", romaji: "o" },
          { jp: "へ", romaji: "e" }
        ],
        answer: 0,
        explain: "BENAR: に! Rumus frekuensi: [Kurun Waktu] に [Jumlah] かい."
      },
      {
        id: "b11_5", type: "input", badge: "Latihan Ketik",
        prompt: "Ketik bacaan bahasa Jepang untuk 「3 buah」 (apel/jeruk)!",
        promptRomaji: "3 buah = ?",
        sub: "Boleh Hiragana atau Romaji.",
        placeholder: "Ketik: みっつ atau mittsu",
        accepted: ["みっつ", "mittsu"],
        displayAnswer: "みっつ (mittsu)",
        explain: "BENAR: みっつ (mittsu)! Sudah beres bug Soal 41!"
      }
    ]
  },

  // ==================== BAB 13 ====================
  {
    num: 13,
    zone: "amber",
    oldScore: "2/4",
    title: "Keinginan Melakukan Aksi (V-たいです) & Tujuan Pergi",
    shortBug: "Salah menempelkan ～たいです (menjawab いきますたいです dan たべいです, padahal cukup coret ます + たいです).",
    bugs: [
      { soal: "Soal 50 & 52", salah: "Menulis いきますたいです dan たべいです", benar: "CORET ます → tempel たいです: いきたいです & たべたいです", kenapa: "Rumus V-たい adalah yang PALING SIMPEL di seluruh buku! Cukup hapus ます di belakang kata kerja, lalu ganti dengan たいです. Tidak ada perubahan huruf lain!" }
    ],
    grammar: [
      {
        num: "POIN 01",
        title: "Rumus Keinginan Aksi: Coret ます + たいです",
        formula: "V-ます (CORET ます) + たいです   |   Negatif: ～たくないです   |   Lampau: ～たかったです",
        explain: "Gunakan pola ini jika ingin MELAKUKAN suatu kata kerja. Konjugasinya persis seperti Kata Sifat-い! Partikel objek boleh を atau が.",
        examples: [
          { jp: "いきます → いき + たいです ＝ にほんへ いきたいです。", romaji: "Nihon e ikitai desu.", id: "Saya ingin pergi ke Jepang." },
          { jp: "たべます → たべ + たいです ＝ すしを たべたいです。", romaji: "Sushi o tabetai desu.", id: "Saya ingin makan sushi." },
          { jp: "なにも たべたくないです。", romaji: "Nani mo tabetakunai desu.", id: "Saya tidak ingin makan apa-apa." }
        ],
        trap: "Bug Soal 50 & 52: Jangan pernah menyisakan ます (いきますたい ❌) atau menghilangkan た (たべいです ❌)!"
      },
      {
        num: "POIN 02",
        title: "Beda ほしいです (Ingin Benda) vs ～たいです (Ingin Aksi)",
        formula: "[Benda] が ほしいです   |   [Objek] を／が V-たいです",
        explain: "Jika yang diinginkan adalah BENDA (mobil, komputer, pacar), pakai が ほしいです. Jika yang diinginkan adalah AKSI (beli mobil, makan ramen), pakai V-たいです.",
        examples: [
          { jp: "あたらしい くるまが ほしいです。", romaji: "Atarashii kuruma ga hoshii desu.", id: "Saya ingin mobil baru." },
          { jp: "デパートへ くつを かいに いきます。", romaji: "Depaato e kutsu o kai ni ikimasu.", id: "Pergi ke department store untuk membeli sepatu (coret ます + に いきます)." }
        ],
        trap: "Rumus tujuan pergi juga sama: Coret ます + に いきます (かいます → かいに いきます)."
      }
    ],
    vocab: [
      { jp: "ほしい", romaji: "hoshii", arti: "ingin (benda — pakai が)" },
      { jp: "V-たいです", romaji: "V-tai desu", arti: "ingin melakukan V" },
      { jp: "あそびます / およぎます", romaji: "asobimasu / oyogimasu", arti: "bermain / berenang" },
      { jp: "むかえます / つかれます", romaji: "mukaemasu / tsukaremasu", arti: "menjemput / lelah" },
      { jp: "けっこんします / かいものします", romaji: "kekkon shimasu / kaimono shimasu", arti: "menikah / berbelanja" }
    ],
    questions: [
      {
        id: "b13_1", type: "mcq", badge: "Perbaikan Soal 50",
        prompt: "わたしは にほんへ （　　　　　）。 (Saya ingin pergi ke Jepang. — いきます)",
        promptRomaji: "Watashi wa Nihon e ( _____ ).",
        sub: "Coret ます dari いきます, lalu tempel たいです!",
        options: [
          { jp: "いきますたいです", romaji: "ikimasutai desu" },
          { jp: "いきたいです", romaji: "ikitai desu" },
          { jp: "いくたいです", romaji: "ikutai desu" },
          { jp: "いってたいです", romaji: "ittetai desu" }
        ],
        answer: 1,
        explain: "BENAR: いきたいです! いきます → coret ます jadi いき + たいです = いきたいです."
      },
      {
        id: "b13_2", type: "mcq", badge: "Perbaikan Soal 52",
        prompt: "てんぷらを （　　　　　）。 (Saya ingin makan tempura. — たべます)",
        promptRomaji: "Tenpura o ( _____ ).",
        sub: "Coret ます dari たべます + たいです!",
        options: [
          { jp: "たべいです", romaji: "tabei desu" },
          { jp: "たべますたいです", romaji: "tabemasutai desu" },
          { jp: "たべたいです", romaji: "tabetai desu" },
          { jp: "たべるたいです", romaji: "taberutai desu" }
        ],
        answer: 2,
        explain: "BENAR: たべたいです! Pastikan huruf た tetap lengkap: たべ + たいです."
      },
      {
        id: "b13_3", type: "mcq", badge: "Bentuk Negatif ～たい",
        prompt: "Ubah 「いきたいです」 (ingin pergi) ke bentuk NEGATIF (tidak ingin pergi):",
        promptRomaji: "ikitai desu → tidak ingin pergi",
        sub: "～たい berubah negatif seperti Kata Sifat-い (い → くない)!",
        options: [
          { jp: "いきたいじゃありません", romaji: "ikitai ja arimasen" },
          { jp: "いきたくないです", romaji: "ikitakunai desu" },
          { jp: "いかたいです", romaji: "ikatai desu" },
          { jp: "いきますくないです", romaji: "ikimasukunai desu" }
        ],
        answer: 1,
        explain: "BENAR: いきたくないです! たい adalah akhiran KS-い, jadi negatifnya たくないです."
      },
      {
        id: "b13_4", type: "mcq", badge: "Tujuan Pergi",
        prompt: "こうえんへ しゃしんを （　　　　） いきます。 (Pergi ke taman untuk mengambil foto. — とります)",
        promptRomaji: "Kouen e shashin o ( ____ ) ikimasu.",
        sub: "Coret ます dari とります + partikel tujuan に!",
        options: [
          { jp: "とるに", romaji: "toru ni" },
          { jp: "とりに", romaji: "tori ni" },
          { jp: "とってに", romaji: "totte ni" },
          { jp: "とりますに", romaji: "torimasu ni" }
        ],
        answer: 1,
        explain: "BENAR: とりに いきます! Sama seperti ～たい, cukup coret ます lalu tambah に いきます."
      },
      {
        id: "b13_5", type: "input", badge: "Latihan Ketik",
        prompt: "Ubah 「のみます」 menjadi 'ingin minum' (bentuk sopan)!",
        promptRomaji: "nomimasu → ingin minum",
        sub: "Coret ます + たいです. Boleh Hiragana atau Romaji.",
        placeholder: "Ketik: のみたいです atau nomitai desu",
        accepted: ["のみたいです", "nomitai desu", "nomitaidesu"],
        displayAnswer: "のみたいです (nomitai desu)",
        explain: "BENAR: のみたいです (nomitai desu)! Sangat bersih dan simpel!"
      }
    ]
  },

  // ==================== BAB 18 ====================
  {
    num: 18,
    zone: "amber",
    oldScore: "2/4",
    title: "Bentuk Kamus, Kemampuan (ことができます), & Hobi (～ことです)",
    shortBug: "Tertukar こと dengan もの pada ことができます (Soal 70) dan しゅみは～ことです (Soal 71).",
    bugs: [
      { soal: "Soal 70 & 71", salah: "Memakai もの (benda fisik) alih-alih こと (hal/aktivitas abstrak)", benar: "V-る こと が できます (bisa)  &  しゅみは V-る こと です (hobi)", kenapa: "もの = benda berwujud (makanan, barang). こと = hal/aktivitas abstrak (membaca kanji, menonton film). Mengubah kata kerja jadi kata benda SELALU pakai こと!" }
    ],
    grammar: [
      {
        num: "POIN 01",
        title: "Mengubah Kata Kerja Jadi 'Hal' dengan こと (BUKAN もの!)",
        formula: "Kemampuan: [Bentuk Kamus] + ことが できます\nHobi: わたしの しゅみは [Bentuk Kamus] + ことです",
        explain: "Saat ingin menyatakan kemampuan melakukan aksi atau hobi berupa aktivitas, kita pakai Bentuk Kamus (辞書形) + こと. Ingat: V-る + こと = membendakan aktivitas!",
        examples: [
          { jp: "ミラーさんは かんじを よむ ことが できます。", romaji: "Miraa-san wa kanji o yomu koto ga dekimasu.", id: "Sdr. Miller bisa membaca kanji." },
          { jp: "わたしの しゅみは えいがを みる ことです。", romaji: "Watashi no shumi wa eiga o miru koto desu.", id: "Hobi saya adalah menonton film." }
        ],
        trap: "Bug Soal 70–71: Untuk rumus kemampuan dan hobi, WAJIB こと (bukan もの)!"
      },
      {
        num: "POIN 02",
        title: "Sebelum ~: [Bentuk Kamus / N の] + まえに",
        formula: "V1-る まえに、V2   |   N の まえに、V2",
        explain: "Kata kerja sebelum まえに SELALU berbentuk Kamus (meskipun V2 di belakangnya berbentuk lampau!).",
        examples: [
          { jp: "ねる まえに、ほんを よみます。", romaji: "Neru mae ni, hon o yomimasu.", id: "Sebelum tidur, membaca buku." },
          { jp: "にほんへ くる まえに、にほんごを べんきょうしました。", romaji: "Nihon e kuru mae ni, nihongo o benkyou shimashita.", id: "Sebelum datang ke Jepang, saya sudah belajar bahasa Jepang." }
        ],
        trap: "Jangan ubah kata kerja sebelum まえに jadi lampau (きたまえに ❌ → くるまえに ✓)!"
      }
    ],
    vocab: [
      { jp: "できます", romaji: "dekimasu", arti: "bisa / mampu" },
      { jp: "しゅみ", romaji: "shumi", arti: "hobi" },
      { jp: "こと / もの", romaji: "koto / mono", arti: "hal, aktivitas (abstrak) / barang (fisik)" },
      { jp: "うんてんします / ひきます / うたいます", romaji: "unten shimasu / hikimasu / utaimasu", arti: "menyetir / bermain alat musik petik / menyanyi" },
      { jp: "まえに", romaji: "mae ni", arti: "sebelum" }
    ],
    questions: [
      {
        id: "b18_1", type: "mcq", badge: "Perbaikan Soal 70",
        prompt: "わたしは ピアノを ひく （　　）が できます。 (Saya bisa bermain piano.)",
        promptRomaji: "Watashi wa piano o hiku ( __ ) ga dekimasu.",
        sub: "Pilih pembenda aktivitas yang tepat!",
        options: [
          { jp: "もの", romaji: "mono" },
          { jp: "こと", romaji: "koto" },
          { jp: "ひと", romaji: "hito" },
          { jp: "とき", romaji: "toki" }
        ],
        answer: 1,
        explain: "BENAR: こと! Rumus kemampuan kata kerja selalu V-る ことが できます (bukan もの)."
      },
      {
        id: "b18_2", type: "mcq", badge: "Perbaikan Soal 71",
        prompt: "わたしの しゅみは しゃしんを とる （　　　　）。 (Hobi saya adalah mengambil foto.)",
        promptRomaji: "Watashi no shumi wa shashin o toru ( ____ ).",
        sub: "Rumus hobi dengan kata kerja!",
        options: [
          { jp: "ものです", romaji: "mono desu" },
          { jp: "ことです", romaji: "koto desu" },
          { jp: "ときです", romaji: "toki desu" },
          { jp: "まえにです", romaji: "mae ni desu" }
        ],
        answer: 1,
        explain: "BENAR: ことです! しゅみは [V-る] ことです."
      },
      {
        id: "b18_3", type: "mcq", badge: "Bentuk Kamus",
        prompt: "Manakah Bentuk Kamus (辞書形) yang BENAR dari 「あそびます」 dan 「きます(datang)」?",
        promptRomaji: "asobimasu & kimasu → ?",
        sub: "Kelompok I ubah -i ke -u, Kelompok III きます → ?",
        options: [
          { jp: "あそびる ・ きる", romaji: "asobiru · kiru" },
          { jp: "あそぶ ・ くる", romaji: "asobu · kuru" },
          { jp: "あそぶ ・ きる", romaji: "asobu · kiru" },
          { jp: "あそばる ・ こる", romaji: "asobaru · koru" }
        ],
        answer: 1,
        explain: "BENAR: あそぶ (び→ぶ) dan くる (きます Kelompok III → くる)!"
      },
      {
        id: "b18_4", type: "mcq", badge: "Pola まえに",
        prompt: "ごはんを （　　　） まえに、てを あらいます。 (Sebelum makan nasi, mencuci tangan.)",
        promptRomaji: "Gohan o ( ___ ) mae ni, te o araimasu.",
        sub: "Sebelum まえに wajib bentuk apa?",
        options: [
          { jp: "たべて", romaji: "tabete" },
          { jp: "たべた", romaji: "tabeta" },
          { jp: "たべる", romaji: "taberu" },
          { jp: "たべ", romaji: "tabe" }
        ],
        answer: 2,
        explain: "BENAR: たべる まえに! Sebelum まえに selalu Bentuk Kamus."
      },
      {
        id: "b18_5", type: "input", badge: "Latihan Ketik",
        prompt: "Lengkapi: 「くるまを うんてんする （　　）が できます。」 (Bisa menyetir mobil.)",
        promptRomaji: "Kuruma o unten suru ( __ ) ga dekimasu.",
        sub: "Ketik 1 kata kunci (Hiragana atau Romaji).",
        placeholder: "Ketik: こと atau koto",
        accepted: ["こと", "koto"],
        displayAnswer: "こと (koto)",
        explain: "BENAR: こと! Kunci Soal 70 & 71 sudah aman!"
      }
    ]
  },

  // ==================== BAB 19 ====================
  {
    num: 19,
    zone: "amber",
    oldScore: "2/4",
    title: "Bentuk -Ta (た形), Pengalaman, & Perubahan Keadaan (なります)",
    shortBug: "Salah konjugasi -ta dari のみます (menjawab のった, seharusnya のんだ) dan lupa ubah -i jadi -ku pada あつく なります.",
    bugs: [
      { soal: "Soal 73", salah: "Mengubah のみます ke Bentuk -Ta menjadi のった", benar: "のみます → のんだ (nonda!)", kenapa: "Ingat: Bentuk -Ta 100% IDENTIK dengan Bentuk -Te! Karena kamu sudah kuat di Bentuk -Te: のみます → のんで → cukup ganti で jadi だ = のんだ!" },
      { soal: "Soal 76", salah: "Lupa mengubah akhiran -i menjadi -ku di depan なります (あつい なります)", benar: "あつく なります (menjadi panas)", kenapa: "Rumus なります (menjadi): KS-い coret い + く なります! KS-な / Kata Benda + に なります!" }
    ],
    grammar: [
      {
        num: "POIN 01",
        title: "Bentuk -Ta = Copy-Paste dari Bentuk -Te!",
        formula: "て → た   |   で → だ   (Contoh: のんで → のんだ · かいて → かいた · いって → いった)",
        explain: "Kamu sudah sangat kuat di Bentuk -Te (skor 3/4 di Bab 14–16)! Jadi untuk Bentuk -Ta, cukup bikin Bentuk -Te dulu di kepalamu, lalu ganti て→た dan で→だ. Dipakai untuk pengalaman: V-た ことが あります (pernah ~).",
        examples: [
          { jp: "にほんの おさけを のんだ ことが あります。", romaji: "Nihon no osake o nonda koto ga arimasu.", id: "Saya pernah minum sake Jepang." },
          { jp: "うまに のった ことが ありません。", romaji: "Uma ni notta koto ga arimasen.", id: "Saya belum pernah menunggang kuda (のります → のって → のった)." }
        ],
        trap: "Bug Soal 73: Bedakan のみます (minum → のんだ) dengan のります (naik kendaraan/kuda → のった)!"
      },
      {
        num: "POIN 02",
        title: "Perubahan Keadaan: なります (Menjadi)",
        formula: "KS-い: coret い + く なります   |   KS-な: buang な + に なります   |   Kata Benda + に なります",
        explain: "Jangan pernah menempelkan KS-い langsung ke なります tanpa mengubah い menjadi く!",
        examples: [
          { jp: "もうすぐ あつく なります。", romaji: "Mousugu atsuku narimasu.", id: "Sebentar lagi menjadi panas (あつい → あつく)." },
          { jp: "へやが きれいに なりました。", romaji: "Heya ga kirei ni narimashita.", id: "Kamar menjadi bersih (きれい = KS-な → に)." },
          { jp: "らいげつ 25さいに なります。", romaji: "Raigetsu nijuugosai ni narimasu.", id: "Bulan depan menjadi umur 25 tahun." }
        ],
        trap: "Bug Soal 76: あつい → あつく なります! いい → よく なります!"
      }
    ],
    vocab: [
      { jp: "のぼります / とまります", romaji: "noborimasu / tomarimasu", arti: "mendaki / menginap" },
      { jp: "そうじします / せんたくします", romaji: "souji shimasu / sentaku shimasu", arti: "membersihkan / mencuci baju" },
      { jp: "なります", romaji: "narimasu", arti: "menjadi" },
      { jp: "ねむい / つよい / よわい", romaji: "nemui / tsuyoi / yowai", arti: "mengantuk / kuat / lemah" },
      { jp: "いちども（～ません）", romaji: "ichido mo (~masen)", arti: "sekali pun (tidak pernah)" }
    ],
    questions: [
      {
        id: "b19_1", type: "mcq", badge: "Perbaikan Soal 73",
        prompt: "Ubah 「のみます」 (minum) ke Bentuk -Ta!",
        promptRomaji: "nomimasu → (Bentuk -Te: のんで) → ?",
        sub: "Ingat: のんで (み・び・に → んで) ganti で jadi だ!",
        options: [
          { jp: "のった", romaji: "notta" },
          { jp: "のんだ", romaji: "nonda" },
          { jp: "のみた", romaji: "nomita" },
          { jp: "のいた", romaji: "noita" }
        ],
        answer: 1,
        explain: "BENAR: のんだ! (のった adalah bentuk -ta dari のります = naik/menunggang, bukan のみます = minum)."
      },
      {
        id: "b19_2", type: "mcq", badge: "Perbaikan Soal 76",
        prompt: "だんだん （　　　　） なりました。 (Pelan-pelan menjadi panas. — あつい)",
        promptRomaji: "Dandan ( ____ ) narimashita.",
        sub: "あつい adalah Kata Sifat-い! Coret い tambah apa?",
        options: [
          { jp: "あつい", romaji: "atsui" },
          { jp: "あついに", romaji: "atsui ni" },
          { jp: "あつく", romaji: "atsuku" },
          { jp: "あつに", romaji: "atsu ni" }
        ],
        answer: 2,
        explain: "BENAR: あつく なりました! KS-い sebelum なります wajib ubah い → く."
      },
      {
        id: "b19_3", type: "mcq", badge: "KS-な + なります",
        prompt: "にほんごが （　　　　　） なりました。 (Bahasa Jepangnya menjadi pandai. — じょうず［な］)",
        promptRomaji: "Nihongo ga ( _____ ) narimashita.",
        sub: "じょうず adalah Kata Sifat-な!",
        options: [
          { jp: "じょうずく", romaji: "jouzuku" },
          { jp: "じょうずに", romaji: "jouzu ni" },
          { jp: "じょうずな", romaji: "jouzu na" },
          { jp: "じょうずで", romaji: "jouzu de" }
        ],
        answer: 1,
        explain: "BENAR: じょうずに なりました! KS-な dan Kata Benda menggunakan に なります."
      },
      {
        id: "b19_4", type: "mcq", badge: "Pola ～たり～たり",
        prompt: "にちようびは テニスを （　　　）、えいがを （　　　） します。",
        promptRomaji: "Nichiyoubi wa tenisu o ( ___ ), eiga o ( ___ ) shimasu.",
        sub: "Ambil Bentuk -Ta + り (します → した + り, みます → みた + り)!",
        options: [
          { jp: "して ・ みて", romaji: "shite · mite" },
          { jp: "したり ・ みたり", romaji: "shitari · mitari" },
          { jp: "した ・ みた", romaji: "shita · mita" },
          { jp: "するり ・ みるり", romaji: "sururi · miruri" }
        ],
        answer: 1,
        explain: "BENAR: したり、みたり します! Daftar contoh aktivitas selalu pakai Bentuk -Ta + り, ditutup します."
      },
      {
        id: "b19_5", type: "input", badge: "Latihan Ketik",
        prompt: "Ubah 「さむい」 (dingin) menjadi 'menjadi dingin' (～なります)!",
        promptRomaji: "samui → menjadi dingin (coret い + く なります)",
        sub: "Ketik bagian yang berubahnya saja (contoh: さむく atau samuku).",
        placeholder: "Ketik: さむく atau samuku",
        accepted: ["さむく", "samuku", "さむくなります", "samuku narimasu"],
        displayAnswer: "さむく (なります)",
        explain: "BENAR: さむく なります! Bug Soal 76 resmi tuntas!"
      }
    ]
  }
);
