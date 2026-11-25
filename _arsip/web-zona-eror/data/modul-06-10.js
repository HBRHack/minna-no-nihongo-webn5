/* MODUL LENGKAP MINNA NO NIHONGO BAB 6 – 10
 * Setiap bab memiliki: Diagnostik Skor, Cheat Sheet KHUSUS Bab Tersebut, Materi Lengkap Silabus MNN, Kosakata Lengkap, & Kuis Murni 1 Tema.
 */
window.MNN_MODULES = window.MNN_MODULES || [];
window.MNN_MODULES.push(
  // ==================== BAB 6 ====================
  {
    num: 6,
    zone: "orange",
    oldScore: "1/4",
    title: "Objek (を), Tempat Aksi (で), Bertemu (に), & Ajakan (～ませんか・～ましょう)",
    shortBug: "Zona Oranye (1/4): Tertukar tempat aksi で dengan に (しょくどうで たべます) dan rumus ajakan ～ましょう.",
    bugs: [
      { soal: "Soal 22", salah: "しょくどう に たべます", benar: "しょくどう で たべます", kenapa: "Tempat terjadinya AKSI AKTIF wajib memakai partikel で!" },
      { soal: "Soal 23–24", salah: "Keliru rumus ajakan ～ましょう", benar: "Ajak sopan: V-ませんか · Ajak langsung / setuju: V-ましょう", kenapa: "Coret ます lalu ganti ましょう untuk arti 'Ayo ~!'." }
    ],
    cheatSheet: {
      title: "Cheat Sheet Bab 6: Partikel Aksi, なに vs なん, & Rumus Ajakan",
      takeaway: "Tempat melakukan kegiatan aktif = で! Pengecualian: bertemu orang (あいます) pakai に!",
      tables: [
        {
          heading: "1. Peta Partikel Bab 6",
          headers: ["Fungsi", "Rumus", "Contoh Wajib Ingat"],
          rows: [
            ["Objek Langsung", "[Benda] を V-ます (dibaca 'o')", "ジュースを のみます / サッカーを します"],
            ["Tempat Aksi Aktif", "[Tempat] で [Benda] を V-ます", "えきで しんぶんを かいます (BUKAN えきに!)"],
            ["Bertemu Seseorang", "[Orang] に あいます", "ともだちに あいます (Pengecualian: pakai に, bukan を!)"]
          ]
        },
        {
          heading: "2. Beda なに vs なん & Pasangan Ajakan",
          headers: ["Pola", "Aturan Pemakaian", "Contoh"],
          rows: [
            ["なに (nani)", "Dipakai sebelum を atau berdiri sendiri", "なにを たべますか / なにを しますか"],
            ["なん (nan)", "Sebelum bunyi t/d/n (です, の, dll) & kata bilangan", "なんですか / なんの ほんですか"],
            ["V-ませんか → V-ましょう", "Maukah ~? → Ya, ayo ~!", "いきませんか → ええ、いきましょう！"]
          ]
        }
      ]
    },
    grammar: [
      {
        num: "POIN 01",
        title: "Kata Kerja Transitif (を), Kata Kerja します, & Pengecualian あいます",
        formula: "[Objek] を V-ます   |   [Olahraga/Acara] を します   |   [Orang] に あいます",
        explain: "Partikel を (dibaca 'o') menandai objek yang dikenai tindakan. Kata kerja します sangat serbaguna untuk olahraga/permainan/acara (`サッカーを します`, `パーティーを します`, `しゅくだいを します`). Khusus kata kerja `あいます` (bertemu), orang yang ditemui memakai partikel `に`.",
        examples: [
          { jp: "まいあさ コーヒーを のみます。", romaji: "Maiasa koohii o nomimasu.", id: "Setiap pagi minum kopi." },
          { jp: "あした ともだちに あいます。", romaji: "Ashita tomodachi ni aimasu.", id: "Besok bertemu dengan teman." }
        ],
        trap: "Jangan tulis 'ともだちを あいます' ❌! Wajib 'ともだちに あいます' ✓."
      },
      {
        num: "POIN 02",
        title: "Tempat Terjadinya Aksi Aktif (で) & Kata Sambung それから",
        formula: "[Tempat] で [Objek] を V-ます   |   Kalimat 1。それから、Kalimat 2。",
        explain: "Jika ada kegiatan aktif berlangsung di suatu tempat (makan di kantin, beli di toko, belajar di perpustakaan), tempat tersebut ditandai dengan で. Gunakan `それから` ('setelah itu / kemudian') untuk mengurutkan kegiatan di kalimat berikutnya.",
        examples: [
          { jp: "しょくどうで ひるごはんを たべます。", romaji: "Shokudou de hirugohan o tabemasu.", id: "Makan siang di kantin." },
          { jp: "デパートで くつを かいました。それから、えいがを みました。", romaji: "Depaato de kutsu o kaimashita. Sorekara, eiga o mimashita.", id: "Membeli sepatu di dept. store. Setelah itu, menonton film." }
        ],
        trap: "Bug Soal 22: 'Makan di kantin' = しょくどうで たべます (bukan に!)."
      },
      {
        num: "POIN 03",
        title: "Mengajak & Menyetujui Ajakan: V-ませんか & V-ましょう",
        formula: "いっしょに V-ませんか (Maukah ~?)  →  ええ、V-ましょう (Ya, ayo ~!)",
        explain: "V-ませんか lebih sopan karena menanyakan kesediaan lawan bicara lebih dulu. V-ましょう dipakai untuk mengajak secara antusias atau menjawab setuju atas ajakan V-ませんか.",
        examples: [
          { jp: "いっしょに きょうとへ いきませんか。…ええ、いきましょう。", romaji: "Issho ni Kyouto e ikimasen ka. ...Ee, ikimashou.", id: "Maukah pergi ke Kyoto bersama? ...Ya, ayo pergi!" },
          { jp: "ちょっと やすみましょう。", romaji: "Chotto yasumimashou.", id: "Ayo beristirahat sebentar." }
        ],
        trap: "V-ませんか berakhiran ません + か, tapi artinya AJAKAN ('Maukah ~?'), bukan menanyakan alasan tidak melakukan!"
      }
    ],
    vocab: [
      { jp: "たべます / のみます / すいます（たばこを～）", romaji: "tabemasu / nomimasu / suimasu", arti: "makan / minum / menghisap (rokok)" },
      { jp: "みます / ききます / よみます / かきます", romaji: "mimasu / kikimasu / yomimasu / kakimasu", arti: "melihat, menonton / mendengar / membaca / menulis, menggambar" },
      { jp: "かいます / とります（しゃしんを～）", romaji: "kaimasu / torimasu (shashin o)", arti: "membeli / mengambil (foto)" },
      { jp: "します / あいます（ともだちに～）", romaji: "shimasu / aimasu (tomodachi ni)", arti: "melakukan / bertemu (teman)" },
      { jp: "ごはん / あさごはん / ひるごはん / ばんごはん", romaji: "gohan / asagohan / hirugohan / bangohan", arti: "nasi, makan / sarapan / makan siang / makan malam" },
      { jp: "パン / たまご / にく / さかな / やさい / くだもの", romaji: "pan / tamago / niku / sakana / yasai / kudamono", arti: "roti / telur / daging / ikan / sayur / buah-buahan" },
      { jp: "みず / おちゃ / こうちゃ / ぎゅうにゅう / ビール / おさけ", romaji: "mizu / ocha / koucha / gyuunyuu / biiru / osake", arti: "air / teh hijau / teh hitam / susu sapi / bir / minuman beralkohol" },
      { jp: "てがみ / レポート / しゃしん / しゅくだい", romaji: "tegami / repooto / shashin / shukudai", arti: "surat / laporan / foto / PR" },
      { jp: "にわ / いっしょに / ちょっと / いつも / ときどき / それから", romaji: "niwa / issho ni / chotto / itsumo / tokidoki / sorekara", arti: "halaman / bersama-sama / sebentar, sedikit / selalu / kadang-kadang / setelah itu" }
    ],
    questions: [
      { id: "b6_1", type: "mcq", badge: "Perbaikan Soal 22", prompt: "しょくどう （　　） ひるごはんを たべます。", promptRomaji: "Shokudou ( _ ) hirugohan o tabemasu.", sub: "Tempat melakukan aksi aktif (makan).", options: [{ jp: "に", romaji: "ni" }, { jp: "で", romaji: "de" }, { jp: "へ", romaji: "e" }, { jp: "を", romaji: "o" }], answer: 1, explain: "BENAR: しょくどうで たべます (tempat aksi aktif wajib pakai で)." },
      { id: "b6_2", type: "mcq", badge: "Perbaikan Soal 23", prompt: "いっしょに こうえんへ （　　　　　）。 (Ayo pergi ke taman bersama!)", promptRomaji: "Issho ni kouen e ( _____ ).", sub: "Rumus ajakan langsung 'Ayo ~!'.", options: [{ jp: "いきました", romaji: "ikimashita" }, { jp: "いきません", romaji: "ikimasen" }, { jp: "いきましょう", romaji: "ikimashou" }, { jp: "いきますか", romaji: "ikimasu ka" }], answer: 2, explain: "BENAR: いきましょう (Ayo pergi!)." },
      { id: "b6_3", type: "mcq", badge: "Perbaikan Soal 24", prompt: "A: 「いっしょに おちゃを のみませんか。」 B: 「ええ、（　　　　　）。」", promptRomaji: "Issho ni ocha o nomimasen ka.", sub: "Menyetujui ajakan ～ませんか.", options: [{ jp: "のみません", romaji: "nomimasen" }, { jp: "のみましょう", romaji: "nomimashou" }, { jp: "のみました", romaji: "nomimashita" }, { jp: "のみませんでした", romaji: "nomimasen deshita" }], answer: 1, explain: "BENAR: ええ、のみましょう!" },
      { id: "b6_4", type: "mcq", badge: "Murni Bab 6 · Bertemu", prompt: "ロビーで サントスさん （　　） あいました。 (Bertemu Sdr. Santos di lobi.)", promptRomaji: "Robii de Santosu-san ( _ ) aimashita.", sub: "Partikel pasangan kata kerja あいます.", options: [{ jp: "を", romaji: "o" }, { jp: "に", romaji: "ni" }, { jp: "で", romaji: "de" }, { jp: "へ", romaji: "e" }], answer: 1, explain: "BENAR: サントスさんに あいました (あいます wajib pakai に)." },
      { id: "b6_5", type: "mcq", badge: "Murni Bab 6 · なに vs なん", prompt: "けさ （　　）を たべましたか。 (Tadi pagi makan apa?)", promptRomaji: "Kesa ( __ ) o tabemashita ka.", sub: "Sebelum partikel を.", options: [{ jp: "なん", romaji: "nan" }, { jp: "なに", romaji: "nani" }, { jp: "どこ", romaji: "doko" }, { jp: "だれ", romaji: "dare" }], answer: 1, explain: "BENAR: なにを たべましたか (sebelum を selalu なに)." },
      { id: "b6_6", type: "input", badge: "Latihan Ketik", prompt: "Ubah 「やすみます」 menjadi ajakan 'Ayo istirahat!'", promptRomaji: "yasumimasu → Ayo istirahat!", sub: "Coret ます + ましょう (Hiragana atau Romaji).", placeholder: "Ketik: やすみましょう atau yasumimashou", accepted: ["やすみましょう", "yasumimashou"], displayAnswer: "やすみましょう (yasumimashou)", explain: "BENAR: やすみましょう!" }
    ]
  },

  // ==================== BAB 7 ====================
  {
    num: 7,
    zone: "red",
    oldScore: "0/4",
    title: "Alat & Bahasa (で), Memberi-Menerima Dasar (あげます・もらいます), & もう／まだ",
    shortBug: "Zona Merah (0/4): Salah partikel alat で, terbalik あげます vs もらいます, salah に saat menerima, dan keliru もう/まだ.",
    bugs: [
      { soal: "Soal 25", salah: "Salah memilih partikel alat (ナイフ)", benar: "ナイフ で きります", kenapa: "Alat/perkakas/bahasa selalu memakai partikel で." },
      { soal: "Soal 26", salah: "あげました diartikan menerima", benar: "あげます = MEMBERI · もらいます = MENERIMA", kenapa: "Jangan sampai terbalik arah keluar vs masuk!" },
      { soal: "Soal 27", salah: "Salah partikel pemberi pada もらいました", benar: "ともだち に (atau から) もらいました", kenapa: "Orang yang memberi kita ditandai dengan に (atau から)." },
      { soal: "Soal 28", salah: "Tertukar もう dan まだ", benar: "もう = SUDAH · まだ = BELUM", kenapa: "Pertanyaan もう V-ましたか jika belum dijawab: いいえ、まだです." }
    ],
    cheatSheet: {
      title: "Cheat Sheet Bab 7: Pasangan Memberi-Menerima, Alat で, & もう／まだ",
      takeaway: "Alat & Bahasa = で. Pemberi/Penerima orang = に. もう = Sudah, まだ = Belum!",
      tables: [
        {
          heading: "1. Tiga Pasang Kata Kerja Transaksi Bab 7 (Arah Keluar vs Masuk)",
          headers: ["Arah KELUAR dari Saya (Penerima + に)", "Arah MASUK ke Saya (Pemberi + に/から)", "Arti Pasangan"],
          rows: [
            ["あげます (memberi)", "もらいます (menerima)", "Memberi ↔ Menerima barang"],
            ["かします (meminjamkan)", "かります (meminjam)", "Meminjamkan ↔ Meminjam"],
            ["おしえます (mengajar/memberitahu)", "ならいます (belajar dari ~)", "Mengajar ↔ Belajar dari orang"]
          ]
        },
        {
          heading: "2. Alat, Bahasa, & もう (Sudah) vs まだ (Belum)",
          headers: ["Pola", "Rumus", "Contoh"],
          rows: [
            ["Alat / Bahasa", "[Alat/Bahasa] で V-ます", "はしで たべます / にほんごで かきます"],
            ["Tanya Terjemahan", "「X」は [Bahasa] で なんですか", "「Thank you」は にほんごで なんですか"],
            ["Sudah vs Belum", "もう V-ましたか → はい、もう V-ました / いいえ、まだです", "Jangan jawab いいえ、V-ませんでした!"]
          ]
        }
      ]
    },
    grammar: [
      {
        num: "POIN 01",
        title: "Partikel で untuk Alat, Sarana, & Bahasa",
        formula: "[Alat / Bahasa] で V-ます   |   「Kata」は [Bahasa] で なんですか",
        explain: "Benda yang dipakai sebagai alat makan/kerja/kirim (sumpit, pisau, gunting, fax, email) dan bahasa pengantar ditandai dengan で.",
        examples: [
          { jp: "ナイフと フォークで にくを たべます。", romaji: "Naifu to fooku de niku o tabemasu.", id: "Makan daging dengan pisau dan garpu." },
          { jp: "「ありがとう」は えいごで なんですか。…「Thank you」です。", romaji: "'Arigatou' wa eigo de nan desu ka. ...'Thank you' desu.", id: "'Arigatou' dalam bahasa Inggris apa? ...'Thank you'." }
        ],
        trap: "Bug Soal 25: Alat selalu で, bukan に atau を!"
      },
      {
        num: "POIN 02",
        title: "Memberi (あげます・かします・おしえます) vs Menerima (もらいます・かります・ならいます)",
        formula: "わたしは [Orang] に [Benda] を あげます／もらいます",
        explain: "Perhatikan keajaiban partikel に di Bab 7: pada kelompok MEMBERI, に berarti 'KEPADA'. Pada kelompok MENERIMA, に berarti 'DARI'! Jika menerima/meminjam dari institusi (bank, sekolah, perusahaan), gunakan から alih-alih に.",
        examples: [
          { jp: "わたしは きむらさんに はなを あげました。", romaji: "Watashi wa Kimura-san ni hana o agemashita.", id: "Saya memberi bunga KEPADA Sdr. Kimura." },
          { jp: "わたしは やまださんに ほんを もらいました。", romaji: "Watashi wa Yamada-san ni hon o moraimashita.", id: "Saya menerima buku DARI Sdr. Yamada." },
          { jp: "ワンさんに ちゅうごくごを ならいます。", romaji: "Wan-san ni chuugokugo o naraimasu.", id: "Belajar bahasa Mandarin dari Sdr. Wang." }
        ],
        trap: "Di Bab 7, jangan memakai あげます jika penerimanya adalah 'saya' (`わたしに`) — itu nanti memakai くれます di Bab 24!"
      },
      {
        num: "POIN 03",
        title: "もう V-ましたか (Apakah sudah ~?)",
        formula: "Ya: はい、もう V-ました。   |   Belum: いいえ、まだです。",
        explain: "もう berarti 'sudah'. Jika belum melakukannya saat ini (namun nanti akan dilakukan), jawabannya wajib `いいえ、まだです` (bukan V-ませんでした; di Bab 31 nanti dipelajari `まだ V-ていません`).",
        examples: [
          { jp: "もう にもつを おくりましたか。…いいえ、まだです。", romaji: "Mou nimotsu o okurimashita ka. ...Iie, mada desu.", id: "Apakah sudah mengirim paket? ...Belum." }
        ],
        trap: "Bug Soal 28: もう = sudah, まだ = belum!"
      }
    ],
    vocab: [
      { jp: "きります / おくります", romaji: "kirimasu / okurimasu", arti: "memotong, menggunting / mengirim" },
      { jp: "あげます / もらいます", romaji: "agemasu / moraimasu", arti: "memberi / menerima" },
      { jp: "かします / かります", romaji: "kashimasu / karimasu", arti: "meminjamkan / meminjam" },
      { jp: "おしえます / ならいます", romaji: "oshiemasu / naraimasu", arti: "mengajar, memberitahu / belajar (dari orang)" },
      { jp: "かけます（でんわを～）", romaji: "kakemasu (denwa o)", arti: "menelepon" },
      { jp: "て / はし / スプーン / ナイフ / フォーク / はさみ", romaji: "te / hashi / supuun / naifu / fooku / hasami", arti: "tangan / sumpit / sendok / pisau / garpu / gunting" },
      { jp: "パソコン / ケータイ / メール / ねんがじょう", romaji: "pasokon / keetai / meeru / nengajou", arti: "PC, laptop / HP / email / kartu tahun baru" },
      { jp: "けしゴム / かみ / はな / シャツ / プレゼント / にもつ / おかね / きっぷ", romaji: "keshigomu / kami / hana / shatsu / purezento / nimotsu / okane / kippu", arti: "penghapus / kertas / bunga / kemeja / hadiah / barang, paket / uang / tiket" },
      { jp: "ちち / はは / おとうさん / おかあさん", romaji: "chichi / haha / otousan / okaasan", arti: "ayah saya / ibu saya / ayah orang lain / ibu orang lain" },
      { jp: "もう / まだ / これから", romaji: "mou / mada / korekara", arti: "sudah / belum / mulai dari sekarang" }
    ],
    questions: [
      { id: "b7_1", type: "mcq", badge: "Perbaikan Soal 25", prompt: "はさみ （　　） かみを きります。 (Memotong kertas dengan gunting.)", promptRomaji: "Hasami ( _ ) kami o kirimasu.", sub: "Gunting adalah alat.", options: [{ jp: "に", romaji: "ni" }, { jp: "で", romaji: "de" }, { jp: "を", romaji: "o" }, { jp: "と", romaji: "to" }], answer: 1, explain: "BENAR: はさみで (alat selalu memakai で)." },
      { id: "b7_2", type: "mcq", badge: "Perbaikan Soal 26", prompt: "Apa arti dari: 「わたしは カリナさんに はなを あげました。」?", promptRomaji: "Watashi wa Karina-san ni hana o agemashita.", sub: "Perhatikan arti あげました.", options: [{ jp: "Saya menerima bunga dari Karina.", romaji: "" }, { jp: "Saya memberi bunga kepada Karina.", romaji: "" }, { jp: "Karina memberi bunga kepada saya.", romaji: "" }, { jp: "Saya meminjam bunga dari Karina.", romaji: "" }], answer: 1, explain: "BENAR: あげました = memberi!" },
      { id: "b7_3", type: "mcq", badge: "Perbaikan Soal 27", prompt: "わたしは ともだち （　　） プレゼントを もらいました。", promptRomaji: "Watashi wa tomodachi ( _ ) purezento o moraimashita.", sub: "Menerima hadiah dari teman.", options: [{ jp: "を", romaji: "o" }, { jp: "で", romaji: "de" }, { jp: "に", romaji: "ni" }, { jp: "へ", romaji: "e" }], answer: 2, explain: "BENAR: ともだちに もらいました (orang pemberi ditandai に)." },
      { id: "b7_4", type: "mcq", badge: "Perbaikan Soal 28", prompt: "A: 「もう きっぷを かいましたか。」 B: 「いいえ、（　　　　）。」 (Belum.)", promptRomaji: "Mou kippu o kaimashita ka.", sub: "Jawaban tepat untuk 'Belum'.", options: [{ jp: "もうです", romaji: "mou desu" }, { jp: "まだです", romaji: "mada desu" }, { jp: "かいません", romaji: "kaimasen" }, { jp: "そうです", romaji: "sou desu" }], answer: 1, explain: "BENAR: いいえ、まだです (Belum)." },
      { id: "b7_5", type: "mcq", badge: "Murni Bab 7 · Pasangan", prompt: "わたしは ワットせんせいに えいごを （　　　　　）。 (Saya belajar bahasa Inggris DARI Pak Watt.)", promptRomaji: "Watashi wa Watto-sensei ni eigo o ( _____ ).", sub: "Arah ilmu masuk ke saya dari guru.", options: [{ jp: "おしえました", romaji: "oshiemashita" }, { jp: "ならいました", romaji: "naraimashita" }, { jp: "かしました", romaji: "kashimashita" }, { jp: "あげました", romaji: "agemashita" }], answer: 1, explain: "BENAR: ならいました (belajar dari seseorang). おしえます = mengajar." },
      { id: "b7_6", type: "input", badge: "Latihan Ketik", prompt: "Lengkapi: 「にほんご （　） レポートを かきます。」 (Menulis laporan dalam bahasa Jepang.)", promptRomaji: "Nihongo ( _ ) repooto o kakimasu.", sub: "Ketik 1 partikel untuk bahasa (Hiragana atau Romaji).", placeholder: "Ketik: で atau de", accepted: ["で", "de"], displayAnswer: "で (de)", explain: "BENAR: にほんごで (bahasa memakai partikel で)." }
    ]
  },

  // ==================== BAB 8 ====================
  {
    num: 8,
    zone: "green",
    oldScore: "3/4",
    title: "Kata Sifat-い & Kata Sifat-な, とても／あまり, どう／どんな, & が (Tetapi)",
    shortBug: "Skor tes lama 3/4. Materi lengkap: KS-い vs KS-な, pengecualian いい/きれい/ゆうめい, どう vs どんな, dan が.",
    bugs: [
      { soal: "Soal 29–32", salah: "Sudah 3/4 benar", benar: "KS-い negatif: ～くないです (いい → よくない) | KS-な: ～じゃありません & + な di depan benda", kenapa: "Waspadai きれい dan ゆうめい berakhiran i tapi termasuk KS-な!" }
    ],
    cheatSheet: {
      title: "Cheat Sheet Bab 8: Perbandingan Total Kata Sifat-い vs Kata Sifat-な",
      takeaway: "きれい & ゆうめい = Kata Sifat-な! Negatif dari いいです adalah よくないです!",
      tables: [
        {
          heading: "1. Tabel Konjugasi & Modifikasi Kata Benda (Non-Lampau)",
          headers: ["Fungsi", "Kata Sifat-い (たかい / いい)", "Kata Sifat-な (しずか / きれい)"],
          rows: [
            ["Positif (+)", "たかい です / いい です", "しずか です / きれい です (TANPA な!)"],
            ["Negatif (-)", "たかくない です (いい → よくない です!)", "しずかじゃ ありません / きれいじゃ ありません"],
            ["Di Depan Benda (+ N)", "たかい やま (langsung tempel)", "しずかな まち / きれいな はな (WAJIB pakai な!)"]
          ]
        },
        {
          heading: "2. Kata Keterangan, Kata Tanya, & Konjungsi Bab 8",
          headers: ["Kata", "Pasangan Wajib", "Contoh"],
          rows: [
            ["とても (sangat)", "Kalimat Positif (+)", "とても おいしいです。"],
            ["あまり (tidak terlalu)", "WAJIB Kalimat Negatif (-)", "あまり おいしくないです。"],
            ["どう vs どんな N", "どうですか (kesan) vs どんな + N (jenis/sifat N)", "にほんの せいかつは どうですか / どんな まちですか"],
            ["S1 が、S2", "Menghubungkan 2 sifat kontras ('tetapi')", "おいしいですが、たかいです。 (Enak, tetapi mahal.)"]
          ]
        }
      ]
    },
    grammar: [
      {
        num: "POIN 01",
        title: "Positif, Negatif, & Modifikasi Kata Benda (KS-い vs KS-な)",
        formula: "KS-い: い → くないです  |  KS-い + N\nKS-な: + じゃありません  |  KS-な + な + N",
        explain: "Bahasa Jepang membagi kata sifat menjadi dua kelompok. KS-い berakhiran huruf hiragana い (kecuali kata seperti きれい dan ゆうめい yang berasal dari Kanji 綺麗 & 有名 sehingga masuk KS-な). Khusus kata sifat `いい` (bagus), semua perubahannya kembali ke bentuk asal `よい` (`よくないです`).",
        examples: [
          { jp: "この ほんは おもしろくないです。", romaji: "Kono hon wa omoshirokunai desu.", id: "Buku ini tidak menarik." },
          { jp: "キョウトは きれいな まちです。", romaji: "Kyouto wa kirei na machi desu.", id: "Kyoto adalah kota yang indah." }
        ],
        trap: "Jangan tulis 'きれいくないです' ❌! Karena きれい adalah KS-な, negatifnya 'きれいじゃ ありません' ✓."
      },
      {
        num: "POIN 02",
        title: "とても vs あまり & Pertanyaan どうですか vs どんな N ですか",
        formula: "とても + Positif   |   あまり + Negatif   |   どうですか vs どんな [N] ですか",
        explain: "`あまり` dalam kalimat negatif berarti 'tidak begitu / tidak terlalu'. Gunakan `どうですか` untuk menanyakan kesan umum, dan `どんな + Kata Benda` untuk meminta lawan bicara menjelaskan sifat benda/tempat/orang tersebut.",
        examples: [
          { jp: "この しけんは あまり むずかしくないです。", romaji: "Kono shiken wa amari muzukashikunai desu.", id: "Ujian ini tidak terlalu sulit." },
          { jp: "ならは どんな まちですか。…しずかな まちです。", romaji: "Nara wa donna machi desu ka. ...Shizuka na machi desu.", id: "Nara kota yang seperti apa? ...Kota yang tenang." }
        ],
        trap: "`どんな` WAJIB diikuti Kata Benda (`どんな ひと`, `どんな えいが`), sedangkan `どう` berdiri sendiri sebelum `ですか`!"
      },
      {
        num: "POIN 03",
        title: "Konjungsi Kontras が (Tetapi), そして (Dan juga), & どれ (Yang mana)",
        formula: "Kalimat 1 が、Kalimat 2 (tetapi)   |   どれ (yang mana dari ≥3 benda)",
        explain: "Gunakan `が` untuk menghubungkan dua kesan yang berlawanan (misal: mahal TAPI bagus), dan `そして` untuk dua kesan yang searah (ramah, DAN JUGA tampan). Kata tanya `どれ` dipakai memilih satu benda di antara 3 benda atau lebih.",
        examples: [
          { jp: "日本の たべものは おいしいですが、たかいです。", romaji: "Nihon no tabemono wa oishii desu ga, takai desu.", id: "Makanan Jepang enak, tetapi mahal." },
          { jp: "ミラーさんの かさは どれですか。…あの あおい かさです。", romaji: "Miraa-san no kasa wa dore desu ka. ...Ano aoi kasa desu.", id: "Payung Sdr. Miller yang mana? ...Payung biru yang itu." }
        ],
        trap: "Jangan menulis 'どれ かさ' ❌! `どれ` berdiri sendiri (sama seperti これ・それ・あれ)."
      }
    ],
    vocab: [
      { jp: "ハンサム［な］ / きれい［な］ / しずか［な］ / にぎやか［な］", romaji: "hansamu / kirei / shizuka / nigiyaka", arti: "tampan / cantik, bersih / tenang / ramai (KS-な)" },
      { jp: "ゆうめい［な］ / しんせつ［な］ / げんき［な］ / ひま［な］ / べんり［な］ / すてき［な］", romaji: "yuumei / shinsetsu / genki / hima / benri / suteki", arti: "terkenal / ramah / sehat / senggang / praktis / bagus sekali (KS-な)" },
      { jp: "おおきい / ちいさい / あたらしい / ふるい", romaji: "ookii / chiisai / atarashii / furui", arti: "besar / kecil / baru / lama, tua (benda)" },
      { jp: "いい（よい） / わるい / あつい / さむい / つめたい", romaji: "ii (yoi) / warui / atsui / samui / tsumetai", arti: "bagus / buruk / panas / dingin (cuaca) / dingin (benda/minuman)" },
      { jp: "むずかしい / やさしい / たかい / やすい / ひくい", romaji: "muzukashii / yasashii / takai / yasui / hikui", arti: "sulit / mudah / mahal, tinggi / murah / rendah" },
      { jp: "おもしろい / おいしい / いそがしい / たのしい", romaji: "omoshiroi / oishii / isogashii / tanoshii", arti: "menarik / enak / sibuk / menyenangkan" },
      { jp: "しろい / くろい / あかい / あおい", romaji: "shiroi / kuroi / akai / aoi", arti: "putih / hitam / merah / biru (semua KS-い)" },
      { jp: "さくら / やま / まち / たべもの / せいかつ", romaji: "sakura / yama / machi / tabemono / seikatsu", arti: "bunga sakura / gunung / kota / makanan / kehidupan" },
      { jp: "どう / どんな～ / どれ / とても / あまり / そして", romaji: "dou / donna~ / dore / totemo / amari / soshite", arti: "bagaimana / ~ yang bagaimana / yang mana / sangat / tidak terlalu / dan kemudian" }
    ],
    questions: [
      { id: "b8_1", type: "mcq", badge: "Murni Bab 8 · Negatif KS-い", prompt: "この パソコンは あまり （　　　　　）。 (Laptop ini tidak terlalu mahal. — たかい)", promptRomaji: "Kono pasokon wa amari ( _____ ).", sub: "あまり + negatif KS-い.", options: [{ jp: "たかいです", romaji: "takai desu" }, { jp: "たかくないです", romaji: "takakunai desu" }, { jp: "たかいじゃありません", romaji: "takai ja arimasen" }, { jp: "たかないです", romaji: "takanai desu" }], answer: 1, explain: "BENAR: たかくないです (い → くないです)." },
      { id: "b8_2", type: "mcq", badge: "Murni Bab 8 · Jebakan きれい", prompt: "ここは （　　　　） へやですね。 (Ini kamar yang bersih ya.)", promptRomaji: "Koko wa ( ____ ) heya desu ne.", sub: "きれい termasuk KS-な!", options: [{ jp: "きれい", romaji: "kirei" }, { jp: "きれいな", romaji: "kirei na" }, { jp: "きれいの", romaji: "kirei no" }, { jp: "きれいい", romaji: "kireii" }], answer: 1, explain: "BENAR: きれいな へや (KS-な wajib tambah な di depan kata benda)." },
      { id: "b8_3", type: "mcq", badge: "Murni Bab 8 · Pengecualian いい", prompt: "きょうは てんきが あまり （　　　　　）。 (Hari ini cuacanya tidak terlalu bagus. — いい)", promptRomaji: "Kyou wa tenki ga amari ( _____ ).", sub: "Negatif dari いいです.", options: [{ jp: "いくないです", romaji: "ikunai desu" }, { jp: "よくないです", romaji: "yokunai desu" }, { jp: "いいじゃありません", romaji: "ii ja arimasen" }, { jp: "よいないです", romaji: "yoinai desu" }], answer: 1, explain: "BENAR: よくないです (いい kembali ke よい saat dikonjugasikan)." },
      { id: "b8_4", type: "mcq", badge: "Murni Bab 8 · どう vs どんな", prompt: "ワットせんせいは （　　　） せんせいですか。…しんせつな せんせいです。", promptRomaji: "Watto-sensei wa ( ___ ) sensei desu ka.", sub: "Di belakang titik-titik langsung ada kata benda せんせい.", options: [{ jp: "どう", romaji: "dou" }, { jp: "どんな", romaji: "donna" }, { jp: "どれ", romaji: "dore" }, { jp: "なに", romaji: "nani" }], answer: 1, explain: "BENAR: どんな せんせい (guru yang seperti apa)." },
      { id: "b8_5", type: "mcq", badge: "Murni Bab 8 · Kontras が", prompt: "わたしの へやは ちいさいです（　　）、きれいです。 (Kecil, tetapi bersih.)", promptRomaji: "Watashi no heya wa chiisai desu ( _ ), kirei desu.", sub: "Kata sambung kontras 'tetapi'.", options: [{ jp: "と", romaji: "to" }, { jp: "が", romaji: "ga" }, { jp: "を", romaji: "o" }, { jp: "に", romaji: "ni" }], answer: 1, explain: "BENAR: ちいさいですが、きれいです (が di akhir klausa = tetapi)." },
      { id: "b8_6", type: "input", badge: "Latihan Ketik", prompt: "Ubah 「いそがしいです」 menjadi bentuk NEGATIF sopan!", promptRomaji: "isogashii desu → tidak sibuk", sub: "Ganti い terakhir dengan くないです (Hiragana atau Romaji).", placeholder: "Ketik: いそがしくないです atau isogashikunai desu", accepted: ["いそがしくないです", "isogashikunai desu", "isogashikunaidesu"], displayAnswer: "いそがしくないです (isogashikunai desu)", explain: "BENAR: いそがしくないです!" }
    ]
  },

  // ==================== BAB 9 ====================
  {
    num: 9,
    zone: "amber",
    oldScore: "2/4",
    title: "Partikel が (Suka, Pandai, Mengerti), Adverbia Tingkat, & Alasan から",
    shortBug: "Zona Kuning (2/4): Lupa すきです wajib pakai が (Soal 33) dan tertukar りょうりが じょうず (Soal 34).",
    bugs: [
      { soal: "Soal 33", salah: "Tidak memakai が di depan すきです", benar: "[Objek] が すきです", kenapa: "Keenam kata perasaan/kemampuan/kepemilikan di Bab 9 wajib memakai が!" },
      { soal: "Soal 34", salah: "Tertukar kosakata りょうりが じょうず", benar: "りょうり (masakan) + じょうず (pandai) = pandai memasak", kenapa: "Hafalkan pasangan: すき↔きらい dan じょうず↔へた." }
    ],
    cheatSheet: {
      title: "Cheat Sheet Bab 9: 6 Kata Wajib Partikel が, Adverbia Tingkat, & Alasan から",
      takeaway: "すき・きらい・じょうず・へた・わかります・あります → SEMUANYA wajib pakai が (BUKAN を)!",
      tables: [
        {
          heading: "1. Enam Predikat Wajib Partikel が di Bab 9",
          headers: ["Kategori", "Positif / Mahir", "Negatif / Kurang"],
          rows: [
            ["Kesukaan (KS-な)", "N が すきです (suka)", "N が きらいです (benci/tidak suka)"],
            ["Kemahiran (KS-な)", "N が じょうずです (pandai — untuk orang lain!)", "N が へたです (tidak pandai — untuk diri sendiri)"],
            ["Pemahaman & Kepemilikan", "N が わかります (mengerti)", "N が あります (mempunyai benda mati/waktu/uang)"]
          ]
        },
        {
          heading: "2. Tabel Adverbia Tingkat (Kualitas vs Kuantitas) & Alasan",
          headers: ["Tingkat", "Kualitas (わかります)", "Kuantitas (あります / Kata Kerja)"],
          rows: [
            ["Tinggi (+)", "よく わかります (mengerti dgn baik)", "たくさん あります (ada banyak)"],
            ["Sedang (+)", "だいたい (kira-kira) / すこし (sedikit)", "すこし あります (ada sedikit)"],
            ["Rendah (WAJIB Negatif!)", "あまり / ぜんぜん わかりません", "あまり / ぜんぜん ありません"],
            ["Alasan & Mengapa", "どうして ～か (Mengapa?)", "[Alasan] から、[Akibat] / ～からです (Karena ~)"]
          ]
        }
      ]
    },
    grammar: [
      {
        num: "POIN 01",
        title: "Objek dengan Partikel が: すき・きらい・じょうず・へた・わかります・あります",
        formula: "[Subjek] は [Objek] が すき／きらい／じょうず／へた です  |  わかります／あります",
        explain: "Keadaan hati (suka/benci), kemampuan (pandai/mengerti), dan kepemilikan (`おかねが あります`) bukanlah tindakan fisik yang mengubah objek, sehingga objeknya ditandai dengan が, bukan を.",
        examples: [
          { jp: "わたしは イタリアりょうりが すきです。", romaji: "Watashi wa Itaria ryouri ga suki desu.", id: "Saya suka masakan Italia." },
          { jp: "サントスさんは サッカーが じょうずです。", romaji: "Santosu-san wa sakkaa ga jouzu desu.", id: "Sdr. Santos pandai bermain sepak bola." },
          { jp: "こまかい おかねが ありますか。", romaji: "Komakai okane ga arimasu ka.", id: "Apakah punya uang receh?" }
        ],
        trap: "Jangan memuji diri sendiri dengan じょうず (`わたしは じょうずです` terdengar sombong)! Gunakan `とくい` nanti atau merendah dengan `すこし できます`."
      },
      {
        num: "POIN 02",
        title: "Kata Keterangan Tingkat (よく・だいたい・たくさん・すこし・あまり・ぜんぜん)",
        formula: "Positif: よく・だいたい・たくさん・すこし   |   Negatif: あまり・ぜんぜん + Negatif",
        explain: "`よく` dan `だいたい` mengatur tingkat pemahaman/kemahiran (`えいごが よく わかります`). `たくさん` mengatur jumlah (`じかんが たくさん あります`). Sedangkan `あまり` ('tidak terlalu') dan `ぜんぜん` ('sama sekali tidak') WAJIB diikuti bentuk negatif.",
        examples: [
          { jp: "ひらがなが だいたい わかります。", romaji: "Hiragana ga daitai wakarimasu.", id: "Mengerti hiragana secara garis besar." },
          { jp: "かんじが ぜんぜん わかりません。", romaji: "Kanji ga zenzen wakarimasen.", id: "Sama sekali tidak mengerti kanji." }
        ],
        trap: "Jangan menukar `よく` dan `たくさん`! Tidak bisa 'たくさん わかります' ❌ → wajib 'よく わかります' ✓."
      },
      {
        num: "POIN 03",
        title: "Kalimat Alasan (S1 から、S2) & Kata Tanya どうして",
        formula: "[Kalimat Alasan] から、[Kalimat Akibat]。  |  どうして ～か → ～からです。",
        explain: "`から` di akhir klausa pertama berarti 'karena'. Untuk menanyakan alasan gunakan `どうして`, dan jawabannya wajib ditutup dengan `～からです`.",
        examples: [
          { jp: "じかんが ありませんから、タクシーで いきます。", romaji: "Jikan ga arimasen kara, takushii de ikimasu.", id: "Karena tidak ada waktu, pergi naik taksi." },
          { jp: "どうして きのう はやく かえりましたか。…ようじが ありましたからです。", romaji: "Doushite kinou hayaku kaerimashita ka. ...Youji ga arimashita kara desu.", id: "Mengapa kemarin pulang cepat? ...Karena ada urusan." }
        ],
        trap: "Dalam bahasa Jepang urutan bakunya ALASAN dulu + から, baru AKIBAT di belakang!"
      }
    ],
    vocab: [
      { jp: "わかります / あります", romaji: "wakarimasu / arimasu", arti: "mengerti, paham / ada, punya" },
      { jp: "すき［な］ / きらい［な］", romaji: "suki / kirai", arti: "suka, gemar / benci, tidak suka" },
      { jp: "じょうず［な］ / へた［な］", romaji: "jouzu / heta", arti: "pandai, pintar / bodoh, payah" },
      { jp: "りょうり / のみもの / スポーツ / やきゅう / ダンス / おんがく / うた", romaji: "ryouri / nomimono / supootsu / yakyuu / dansu / ongaku / uta", arti: "masakan / minuman / olahraga / bisbol / dansa / musik / lagu" },
      { jp: "かんじ / ひらがな / カタカナ / ローマじ", romaji: "kanji / hiragana / katakana / roomaji", arti: "huruf Kanji / Hiragana / Katakana / huruf Latin" },
      { jp: "こまかい おかね / チケット / じかん / ようじ / やくそく", romaji: "komakai okane / chiketto / jikan / youji / yakusoku", arti: "uang kecil, receh / tiket / waktu / urusan / janji" },
      { jp: "ごしゅじん / おっと（しゅじん） / おくさん / つま（かない） / こども", romaji: "goshujin / otto / okusan / tsuma / kodomo", arti: "suami orang / suami saya / istri orang / istri saya / anak" },
      { jp: "よく / だいたい / たくさん / すこし / あまり / ぜんぜん", romaji: "yoku / daitai / takusan / sukoshi / amari / zenzen", arti: "dengan baik / kira-kira / banyak / sedikit / tidak begitu / sama sekali (negatif)" },
      { jp: "はやく / ～から / どうして / ざんねんですね", romaji: "hayaku / ~kara / doushite / zannen desu ne", arti: "cepat, lebih awal / karena ~ / mengapa / sayang sekali ya" }
    ],
    questions: [
      { id: "b9_1", type: "mcq", badge: "Perbaikan Soal 33", prompt: "わたしは おんがく （　　） すきです。", promptRomaji: "Watashi wa ongaku ( _ ) suki desu.", sub: "Partikel wajib di depan すきです.", options: [{ jp: "を", romaji: "o" }, { jp: "が", romaji: "ga" }, { jp: "で", romaji: "de" }, { jp: "に", romaji: "ni" }], answer: 1, explain: "BENAR: おんがくが すきです." },
      { id: "b9_2", type: "mcq", badge: "Perbaikan Soal 34", prompt: "Apa arti dari: 「マリアさんは りょうりが じょうずです。」?", promptRomaji: "Maria-san wa ryouri ga jouzu desu.", sub: "りょうり + じょうず.", options: [{ jp: "Maria tidak suka masakan.", romaji: "" }, { jp: "Maria pandai memasak.", romaji: "" }, { jp: "Maria payah memasak.", romaji: "" }, { jp: "Maria suka menyanyi.", romaji: "" }], answer: 1, explain: "BENAR: りょうりが じょうず = pandai memasak!" },
      { id: "b9_3", type: "mcq", badge: "Murni Bab 9 · ぜんぜん", prompt: "わたしは フランスごが ぜんぜん （　　　　　）。", promptRomaji: "Watashi wa Furansugo ga zenzen ( _____ ).", sub: "ぜんぜん wajib berpasangan dengan bentuk negatif.", options: [{ jp: "わかります", romaji: "wakarimasu" }, { jp: "わかりました", romaji: "wakarimashita" }, { jp: "わかりません", romaji: "wakarimasen" }, { jp: "じょうずです", romaji: "jouzu desu" }], answer: 2, explain: "BENAR: ぜんぜん わかりません." },
      { id: "b9_4", type: "mcq", badge: "Murni Bab 9 · Alasan", prompt: "あした やくそくが あります （　　）、いけません。 (KARENA besok ada janji, tidak bisa pergi.)", promptRomaji: "Ashita yakusoku ga arimasu ( __ ), ikemasen.", sub: "Kata penghubung alasan 'karena'.", options: [{ jp: "が", romaji: "ga" }, { jp: "から", romaji: "kara" }, { jp: "まで", romaji: "made" }, { jp: "と", romaji: "to" }], answer: 1, explain: "BENAR: から ('karena')." },
      { id: "b9_5", type: "mcq", badge: "Murni Bab 9 · Kata Tanya", prompt: "A: 「（　　　　） おさけを のみませんか。」 B: 「くるまですから。」 (Mengapa tidak minum alkohol? ...Karena bawa mobil.)", promptRomaji: "( ____ ) osake o nomimasen ka.", sub: "Kata tanya 'mengapa'.", options: [{ jp: "どう", romaji: "dou" }, { jp: "どんな", romaji: "donna" }, { jp: "どうして", romaji: "doushite" }, { jp: "どちら", romaji: "dochira" }], answer: 2, explain: "BENAR: どうして (mengapa) dijawab dengan ～から." },
      { id: "b9_6", type: "input", badge: "Latihan Ketik", prompt: "Lengkapi partikel: 「じかん （　） ありません。」 (Tidak ada waktu.)", promptRomaji: "Jikan ( _ ) arimasen.", sub: "Ketik 1 partikel (Hiragana atau Romaji).", placeholder: "Ketik: が atau ga", accepted: ["が", "ga"], displayAnswer: "が (ga)", explain: "BENAR: じかんが ありません (あります/ありません wajib pakai が)." }
    ]
  },

  // ==================== BAB 10 ====================
  {
    num: 10,
    zone: "amber",
    oldScore: "2/4",
    title: "Keberadaan (あります・います), 11 Kata Posisi, & や～など",
    shortBug: "Zona Kuning (2/4): Lupa あります pakai が (Soal 37) dan tertukar した (bawah) vs うえ (atas) di Soal 39.",
    bugs: [
      { soal: "Soal 37", salah: "Lupa partikel が sebelum あります", benar: "[Tempat] に [Benda] が あります", kenapa: "Keberadaan selalu memakai に untuk tempat dan が untuk subjek benda/orangnya." },
      { soal: "Soal 39", salah: "Tertukar した (bawah) dengan うえ (atas)", benar: "うえ = ATAS · した = BAWAH", kenapa: "Hafalkan pasangan posisi yang saling berlawanan!" }
    ],
    cheatSheet: {
      title: "Cheat Sheet Bab 10: Keberadaan (あります vs います) & Peta 11 Posisi",
      takeaway: "Keberadaan statis = Tempat に + Benda が あります (benda mati) / います (makhluk hidup)!",
      tables: [
        {
          heading: "1. Dua Pola Kalimat Keberadaan & Penyangkalan Total",
          headers: ["Tujuan Kalimat", "Rumus", "Contoh"],
          rows: [
            ["Menyebut ada apa di lokasi", "[Tempat] に [N] が あります／います", "にわに いぬが います。 (Di halaman ada anjing.)"],
            ["Menyebut lokasi benda tertentu", "[N] は [Tempat] に あります／います", "ミラーさんは じむしょに います。 (Miller ada di kantor.)"],
            ["Tidak ada apa/siapa pun", "なにも ありません / だれも いません", "へやに だれも いません。 (Di kamar tidak ada siapa pun.)"]
          ]
        },
        {
          heading: "2. Peta 11 Kata Posisi (Wajib Pakai: Benda の [Posisi] に)",
          headers: ["Pasangan Lawan", "Arti", "Posisi Lainnya", "Arti"],
          rows: [
            ["うえ ↔ した", "Atas ↔ Bawah", "となり", "Sebelah (persis berdampingan)"],
            ["まえ ↔ うしろ", "Depan ↔ Belakang", "ちかく", "Dekat (sekitar)"],
            ["みぎ ↔ ひだり", "Kanan ↔ Kiri", "A と B の あいだ", "Di antara A dan B"],
            ["なか ↔ そと", "Dalam ↔ Luar", "N1 や N2（など）", "N1, N2, dan lain-lain (contoh sebagian)"]
          ]
        }
      ]
    },
    grammar: [
      {
        num: "POIN 01",
        title: "あります (Benda Mati / Tumbuhan) vs います (Manusia / Hewan)",
        formula: "[Tempat] に [N] が あります／います   |   [N] は [Tempat] に あります／います",
        explain: "Benda mati, gedung, dan pohon/tanaman menggunakan `あります`. Manusia, kucing, anjing, ikan hidup, dan serangga menggunakan `います`. Lokasi keberadaan statis ditandai dengan partikel `に` (berbeda dengan `で` untuk aksi aktif di Bab 6!).",
        examples: [
          { jp: "あそこに コンビニが あります。", romaji: "Asoko ni konbini ga arimasu.", id: "Di sana ada minimarket." },
          { jp: "きょうしつに がくせいが います。", romaji: "Kyoushitsu ni gakusei ga imasu.", id: "Di kelas ada mahasiswa." },
          { jp: "とうきょうディズニーランドは ちばけんに あります。", romaji: "Toukyou Dizuniirando wa Chiba-ken ni arimasu.", id: "Tokyo Disneyland berada di Prefektur Chiba." }
        ],
        trap: "Pohon/bunga (`き`, `はな`) tidak bergerak sendiri → pakai `あります`, BUKAN `います`!"
      },
      {
        num: "POIN 02",
        title: "Menunjukkan Posisi Spesifik: N1 の [Kata Posisi] に",
        formula: "[Benda Acuan] の うえ／した／まえ／うしろ／なか／となり／ちかく／あいだ に",
        explain: "Semua kata posisi dalam bahasa Jepang berstatus Kata Benda, sehingga wajib disambung dengan partikel `の` setelah benda acuannya (`つくえの うえに` = di atas meja).",
        examples: [
          { jp: "つくえの したに ねこが います。", romaji: "Tsukue no shita ni neko ga imasu.", id: "Di bawah meja ada kucing." },
          { jp: "ぎんこうは スーパーの となりに あります。", romaji: "Ginkou wa suupaa no tonari ni arimasu.", id: "Bank ada di sebelah supermarket." }
        ],
        trap: "Bug Soal 39: `うえ` = ATAS ('U'p), `した` = BAWAH!"
      },
      {
        num: "POIN 03",
        title: "Menyebut Sebagian Contoh Benda: N1 や N2（など）",
        formula: "N1 や N2（など）が あります   (vs N1 と N2 = menyebut semuanya)",
        explain: "Jika di dalam kotak ada 5 barang tapi kamu hanya menyebutkan 2 sebagai perwakilan contoh ('ada surat, foto, dan sebagainya'), gunakan `や` (sering dipasangkan dengan `など` di akhir).",
        examples: [
          { jp: "はこの なかに てがみや しゃしんなどが あります。", romaji: "Hako no naka ni tegami ya shashin nado ga arimasu.", id: "Di dalam kotak ada surat, foto, dan lain-lain." }
        ],
        trap: "`と` = daftar tuntas (hanya itu saja). `や～など` = baru sebagian contoh!"
      }
    ],
    vocab: [
      { jp: "います / あります", romaji: "imasu / arimasu", arti: "ada (makhluk hidup) / ada (benda mati)" },
      { jp: "おとこの ひと（こ） / おんなの ひと（こ）", romaji: "otoko no hito (ko) / onna no hito (ko)", arti: "orang (anak) laki-laki / orang (anak) perempuan" },
      { jp: "いぬ / ねこ / き / もの / でんち / はこ", romaji: "inu / neko / ki / mono / denchi / hako", arti: "anjing / kucing / pohon / barang / baterai / kotak" },
      { jp: "スイッチ / れいぞうこ / テーブル / ベッド / たな / ドア / まど", romaji: "suicchi / reizouko / teeburu / beddo / tana / doa / mado", arti: "sakelar / kulkas / meja makan / tempat tidur / lemari rak / pintu / jendela" },
      { jp: "ポスト / ビル / こうえん / きっさてん / ほんや / のりば", romaji: "posuto / biru / kouen / kissaten / honya / noriba", arti: "kotak pos / gedung / taman / kafe / toko buku / tempat naik kendaraan" },
      { jp: "うえ / した / まえ / うしろ / みぎ / ひだり", romaji: "ue / shita / mae / ushiro / migi / hidari", arti: "atas / bawah / depan / belakang / kanan / kiri" },
      { jp: "なか / そと / となり / ちかく / あいだ", romaji: "naka / soto / tonari / chikaku / aida", arti: "dalam / luar / sebelah / dekat / antara" },
      { jp: "～や～［など］ / いちばん うえ（した）", romaji: "~ya~ [nado] / ichiban ue (shita)", arti: "~, ~, dan lain-lain / paling atas (paling bawah)" }
    ],
    questions: [
      { id: "b10_1", type: "mcq", badge: "Perbaikan Soal 37", prompt: "へやに ベッド （　　） あります。", promptRomaji: "Heya ni beddo ( _ ) arimasu.", sub: "Partikel subjek keberadaan sebelum あります.", options: [{ jp: "を", romaji: "o" }, { jp: "が", romaji: "ga" }, { jp: "で", romaji: "de" }, { jp: "に", romaji: "ni" }], answer: 1, explain: "BENAR: へやに ベッドが あります." },
      { id: "b10_2", type: "mcq", badge: "Perbaikan Soal 39", prompt: "Apa arti dari: 「いすの したに かばんが あります。」?", promptRomaji: "Isu no shita ni kaban ga arimasu.", sub: "した vs うえ.", options: [{ jp: "Di atas kursi ada tas.", romaji: "" }, { jp: "Di bawah kursi ada tas.", romaji: "" }, { jp: "Di depan kursi ada tas.", romaji: "" }, { jp: "Di sebelah kursi ada tas.", romaji: "" }], answer: 1, explain: "BENAR: した = bawah, うえ = atas!" },
      { id: "b10_3", type: "mcq", badge: "Murni Bab 10 · あります vs います", prompt: "こうえんに こどもが （　　　　）。 (Di taman ada anak-anak.)", promptRomaji: "Kouen ni kodomo ga ( _____ ).", sub: "こども (manusia) = makhluk hidup!", options: [{ jp: "あります", romaji: "arimasu" }, { jp: "います", romaji: "imasu" }, { jp: "します", romaji: "shimasu" }, { jp: "いきます", romaji: "ikimasu" }], answer: 1, explain: "BENAR: います (makhluk hidup memakai います)." },
      { id: "b10_4", type: "mcq", badge: "Murni Bab 10 · Contoh や", prompt: "かばんの なかに さいふ （　　） かぎなどが あります。", promptRomaji: "Kaban no naka ni saifu ( _ ) kagi nado ga arimasu.", sub: "Ada kata など ('dan lain-lain') di belakang!", options: [{ jp: "と", romaji: "to" }, { jp: "や", romaji: "ya" }, { jp: "も", romaji: "mo" }, { jp: "の", romaji: "no" }], answer: 1, explain: "BENAR: さいふや かぎなど (や berpasangan dengan など untuk menyebut contoh sebagian)." },
      { id: "b10_5", type: "mcq", badge: "Murni Bab 10 · Penyangkalan", prompt: "れいぞうこの なかに なにも （　　　　　）。 (Di dalam kulkas tidak ada apa pun.)", promptRomaji: "Reizouko no naka ni nani mo ( _____ ).", sub: "なにも wajib diikuti bentuk negatif benda mati!", options: [{ jp: "あります", romaji: "arimasu" }, { jp: "ありません", romaji: "arimasen" }, { jp: "いません", romaji: "imasen" }, { jp: "います", romaji: "imasu" }], answer: 1, explain: "BENAR: なにも ありません (tidak ada benda apa pun)." },
      { id: "b10_6", type: "input", badge: "Latihan Ketik", prompt: "Ketik kata bahasa Jepang untuk posisi 「ATAS」 dan 「BAWAH」 dipisah spasi? Cukup ketik kata untuk 「BAWAH」 saja!", promptRomaji: "Bawah = ?", sub: "Ketik dalam Hiragana atau Romaji.", placeholder: "Ketik: した atau shita", accepted: ["した", "shita"], displayAnswer: "した (shita)", explain: "BENAR: した (shita) = bawah!" }
    ]
  }
);
