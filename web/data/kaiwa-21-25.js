/* Data Kaiwa Minna no Nihongo I — Bab 21–25
 * Struktur kompatibel 3-Layer Voice Router (gender: "male" | "female") + TTS override.
 */
window.MNN_KAIWA = window.MNN_KAIWA || {};

window.MNN_KAIWA[21] = {
  bab: 21,
  title: "わたしも そう おもいます — Pendapat soal Pertandingan Sepak Bola",
  scene: "Kepala Bagian Matsumoto (松本部長) dan José Santos kebetulan bertemu dan minum bersama sebentar, lalu membahas pertandingan sepak bola Jepang vs Brasil malam nanti memakai ～と思います.",
  intro: {
    speaker: "ナレーター (Narator CD)",
    gender: "female",
    tempo: "tenang",
    jp: "第21課、会話。「わたしも そう おもいます」。松本部長と サントスさんは サッカーの 試合に ついて 話します。よく 聞いて、まねして ください。",
    romaji: "Dai-nijuuikka, Kaiwa. \"Watashi mo sou omoimasu.\" Matsumoto-buchou to Santosu-san wa sakkaa no shiai ni tsuite hanashimasu. Yoku kiite, maneshite kudasai.",
    id: "Bab 21, Percakapan: \"Saya juga berpikir begitu\". Pak Kepala Bagian Matsumoto dan Pak Santos membahas pertandingan sepak bola. Dengarkan baik-baik, lalu tirukan."
  },
  outro: {
    speaker: "ナレーター (Narator CD)",
    gender: "female",
    tempo: "tenang",
    jp: "おつかれさまでした。もう 一度 聞いて みましょう。",
    romaji: "Otsukaresama deshita. Mou ichido kiite mimashou.",
    id: "Kerja bagus! Mari coba dengarkan sekali lagi."
  },
  roles: [
    {
      id: "matsumoto",
      name: "松本部長（まつもとぶちょう）",
      label: "Kepala Bagian Matsumoto · Pria (Berwibawa)",
      gender: "male",
      tempo: "berwibawa",
      avatar: "👨‍💼"
    },
    {
      id: "santos",
      name: "サントス",
      label: "José Santos · Pria (Penggemar Bola Brasil)",
      gender: "male",
      tempo: "normal",
      avatar: "🧑‍💼"
    }
  ],
  lines: [
    {
      speakerId: "matsumoto",
      speaker: "松本部長（まつもとぶちょう）",
      gender: "male",
      jp: "あ、サントスさん、ひさしぶりですね。",
      romaji: "A, Santosu-san, hisashiburi desu ne.",
      id: "Eh, Pak Santos, lama tidak berjumpa ya!",
      note: "ひさしぶりですね = lama tidak bertemu ya, sapaan khas saat bertemu kembali setelah lama."
    },
    {
      speakerId: "santos",
      speaker: "サントス",
      gender: "male",
      jp: "あ、まつもとぶちょう、おげんきですか。",
      romaji: "A, Matsumoto-buchou, o-genki desu ka.",
      id: "Oh, Pak Kabag Matsumoto, apa kabar?",
      note: "おげんきですか = apa kabar?; awalan お membuatnya lebih sopan."
    },
    {
      speakerId: "matsumoto",
      speaker: "松本部長（まつもとぶちょう）",
      gender: "male",
      jp: "ええ。ちょっと ビールでも のみませんか。",
      romaji: "Ee. Chotto biiru demo nomimasen ka.",
      id: "Baik. Mau minum bir sebentar?",
      note: "～でも di sini berarti \"misalnya ～\" untuk menawarkan pilihan ringan, bukan \"tetapi\". ～ませんか adalah ajakan sopan."
    },
    {
      speakerId: "santos",
      speaker: "サントス",
      gender: "male",
      jp: "いいですね。",
      romaji: "Ii desu ne.",
      id: "Boleh sekali!",
      note: "いいですね = kedengarannya bagus ya, dipakai untuk menyetujui ajakan."
    },
    {
      speakerId: "matsumoto",
      speaker: "松本部長（まつもとぶちょう）",
      gender: "male",
      jp: "こんばん 10じから にほんと ブラジルの サッカーの しあいが ありますね。サントスさんは どちらが かつと おもいますか。",
      romaji: "Konban juu-ji kara Nihon to Burajiru no sakkaa no shiai ga arimasu ne. Santosu-san wa dochira ga katsu to omoimasu ka.",
      id: "Malam ini jam 10 ada pertandingan bola Jepang vs Brasil ya. Menurut Pak Santos, siapa yang akan menang?",
      note: "Pendapat Bab 21: [bentuk biasa] + と おもいます → かつ と おもいます. どちら = yang mana (dari dua pihak).",
      tts: "こんばん じゅうじから にほんと ブラジルの サッカーの しあいが ありますね。サントスさんは どちらが かつと おもいますか。"
    },
    {
      speakerId: "santos",
      speaker: "サントス",
      gender: "male",
      jp: "もちろん ブラジルですよ。ブラジルは とても つよいですから。",
      romaji: "Mochiron Burajiru desu yo. Burajiru wa totemo tsuyoi desu kara.",
      id: "Tentu saja Brasil dong! Karena Brasil kuat sekali.",
      note: "もちろん = tentu saja; ～から di akhir kalimat menjelaskan alasan."
    },
    {
      speakerId: "matsumoto",
      speaker: "松本部長（まつもとぶちょう）",
      gender: "male",
      jp: "そうですね。でも、さいきん にほんも つよく なりましたよ。",
      romaji: "Sou desu ne. Demo, saikin Nihon mo tsuyoku narimashita yo.",
      id: "Betul sih. Tapi akhir-akhir ini Jepang juga sudah jadi makin kuat lho!",
      note: "Sifat-い + なります menyatakan perubahan: つよい → つよく なりました (menjadi kuat)."
    },
    {
      speakerId: "santos",
      speaker: "サントス",
      gender: "male",
      jp: "ええ、わたしも そう おもいますが……あ、もう かえらないと。しあいが はじまりますから。",
      romaji: "Ee, watashi mo sou omoimasu ga...... A, mou kaeranai to. Shiai ga hajimarimasu kara.",
      id: "Iya, saya juga berpikir begitu sih... Eh, saya harus pulang sekarang nih! Soalnya pertandingannya mau mulai.",
      note: "わたしも そう おもいます = saya juga berpikir begitu. ～ないと (ragam lisan) = \"harus ～\", setara ～なければ なりません."
    },
    {
      speakerId: "matsumoto",
      speaker: "松本部長（まつもとぶちょう）",
      gender: "male",
      jp: "じゃ、かえりましょう。",
      romaji: "Ja, kaerimashou.",
      id: "Baiklah, ayo pulang.",
      note: "～ましょう = \"ayo/mari ～\", ajakan halus untuk melakukan sesuatu bersama."
    }
  ],
  tips: [
    "Menyatakan pendapat: [bentuk biasa] + と おもいます — かつ と おもいます, つよい と おもいます.",
    "Kata benda dan sifat-な wajib memakai だ sebelum と: ブラジルだ と おもいます, しずかだ と おもいます.",
    "Untuk pendapat negatif, negatifkan isi kutipan: こない と おもいます (lebih natural daripada おもいません).",
    "Mengutip ucapan: [bentuk biasa] + と いいました. Meminta persetujuan: ～でしょう？ — untuk N/KS-な, だ dihilangkan (あした しあい でしょう？)."
  ]
};

window.MNN_KAIWA[22] = {
  bab: 22,
  title: "どんな へやを おさがしですか — Mencari Apartemen Baru",
  scene: "Wang mendatangi agen properti untuk mencari apartemen baru. Agen menjelaskan kamar dengan dapur-ruang makan dan kamar bergaya Jepang, menerangkan fungsi oshiire, lalu mereka berangkat melihat kamar itu langsung.",
  intro: {
    speaker: "ナレーター (Narator CD)",
    gender: "female",
    tempo: "tenang",
    jp: "第22課、会話。「どんな へやを おさがしですか」。ワンさんは 不動産屋へ 行って、新しい アパートを さがします。よく 聞いて、まねして ください。",
    romaji: "Dai-nijuunika, Kaiwa. \"Donna heya o o-sagashi desu ka.\" Wan-san wa fudousanya e itte, atarashii apaato o sagashimasu. Yoku kiite, maneshite kudasai.",
    id: "Bab 22, Percakapan: \"Kamar seperti apa yang sedang Anda cari?\". Pak Wang pergi ke agen properti mencari apartemen baru. Dengarkan baik-baik, lalu tirukan."
  },
  outro: {
    speaker: "ナレーター (Narator CD)",
    gender: "female",
    tempo: "tenang",
    jp: "おつかれさまでした。もう 一度 聞いて みましょう。",
    romaji: "Otsukaresama deshita. Mou ichido kiite mimashou.",
    id: "Kerja bagus! Mari coba dengarkan sekali lagi."
  },
  roles: [
    { id: "fudousan", name: "不動産屋（ふどうさんや）", label: "Agen Properti · Pria", gender: "male", tempo: "berwibawa", avatar: "👨‍💼" },
    { id: "wan", name: "ワン", label: "Wang · Pria (Calon Penyewa)", gender: "male", tempo: "lincah", avatar: "🧑‍💼" }
  ],
  lines: [
    {
      speakerId: "fudousan",
      speaker: "不動産屋（ふどうさんや）",
      gender: "male",
      jp: "どんな へやを おさがしですか。",
      romaji: "Donna heya o o-sagashi desu ka.",
      id: "Kamar seperti apa yang sedang Anda cari?",
      note: "おさがしですか adalah bentuk sopan dari さがして いますか (sedang mencari)."
    },
    {
      speakerId: "wan",
      speaker: "ワン",
      gender: "male",
      jp: "そうですね。やちんは 8まんえんぐらいで、えきから とおくない ところが いいです。",
      romaji: "Sou desu ne. Yachin wa hachiman-en gurai de, eki kara tookunai tokoro ga ii desu.",
      id: "Hmm, biaya sewanya sekitar 80.000 yen, dan tempat yang tidak jauh dari stasiun bagus tuh.",
      note: "Anak kalimat penjelas kata benda: えきから とおくない ところ = tempat yang tidak jauh dari stasiun. で di sini menyambung dua syarat.",
      tts: "そうですね。やちんは はちまんえんぐらいで、えきから とおくない ところが いいです。"
    },
    {
      speakerId: "fudousan",
      speaker: "不動産屋（ふどうさんや）",
      gender: "male",
      jp: "では、こちらは いかがですか。えきから 10ぷんで、やちんは 83,000えんです。",
      romaji: "De wa, kochira wa ikaga desu ka. Eki kara juppun de, yachin wa hachiman-sanzen-en desu.",
      id: "Kalau begitu, bagaimana dengan yang ini? 10 menit dari stasiun, dan sewanya 83.000 yen.",
      note: "～は いかがですか = bagaimana kalau ～ (menawarkan pilihan). 10ぷん dibaca じゅっぷん.",
      tts: "では、こちらは いかがですか。えきから じゅっぷんで、やちんは はちまんさんぜんえんです。"
    },
    {
      speakerId: "wan",
      speaker: "ワン",
      gender: "male",
      jp: "ダイニングキッチンと わしつですね。すみません、ここは なんですか。",
      romaji: "Dainingu kicchin to washitsu desu ne. Sumimasen, koko wa nan desu ka.",
      id: "Dapur ruang makan dan kamar bergaya Jepang ya. Permisi, bagian ini apa?",
      note: "ダイニングキッチン = dapur sekaligus ruang makan; わしつ = kamar berlantai tatami."
    },
    {
      speakerId: "fudousan",
      speaker: "不動産屋（ふどうさんや）",
      gender: "male",
      jp: "おしいれです。ふとんを いれる ところですよ。",
      romaji: "Oshiire desu. Futon o ireru tokoro desu yo.",
      id: "Itu oshiire (lemari tanam Jepang). Tempat untuk menyimpan futon lho.",
      note: "Pola definisi tempat/benda: ふとんを いれる ところ = tempat untuk menyimpan futon (anak kalimat penjelas kata benda)."
    },
    {
      speakerId: "wan",
      speaker: "ワン",
      gender: "male",
      jp: "そうですか。この へや、きょう みる ことが できますか。",
      romaji: "Sou desu ka. Kono heya, kyou miru koto ga dekimasu ka.",
      id: "Oh begitu. Kamar ini, apakah bisa dilihat hari ini?",
      note: "～ことが できます = bisa ～ (menyatakan kemungkinan). この へや menjadi topik, partikel を dihilangkan."
    },
    {
      speakerId: "fudousan",
      speaker: "不動産屋（ふどうさんや）",
      gender: "male",
      jp: "ええ。いまから いきましょうか。",
      romaji: "Ee. Ima kara ikimashou ka.",
      id: "Bisa. Bagaimana kalau kita ke sana sekarang?",
      note: "～ましょうか = maukah kita ～?; dipakai untuk mengajak sekaligus menawarkan diri."
    },
    {
      speakerId: "wan",
      speaker: "ワン",
      gender: "male",
      jp: "ええ、おねがいします。",
      romaji: "Ee, onegaishimasu.",
      id: "Ya, mohon bantuannya!",
      note: "おねがいします dipakai untuk menerima tawaran bantuan atau jasa dengan sopan."
    }
  ],
  tips: [
    "Anak kalimat penjelas selalu diletakkan di depan kata benda dan memakai bentuk biasa: わたしが きのう 買った 本.",
    "Subjek di dalam anak kalimat memakai が, bukan は: わたしが とった しゃしん.",
    "Sifat-な memakai な dan kata benda memakai の sebelum kata benda: しずかな へや, にほんごの ほん.",
    "Pola tambahan: V-る じかん／やくそく／ようじが あります = ada waktu/janji/urusan untuk melakukan ～."
  ]
};

window.MNN_KAIWA[23] = {
  bab: 23,
  title: "どうやって いきますか — Rute Bus & Syarat Pinjam Buku",
  scene: "Karina menelepon Perpustakaan Midori untuk menanyakan rute bus dari Stasiun Honda. Petugas menjelaskan halte ketiga dan bangunan perpustakaan di dalam taman, lalu menyebut dokumen yang harus dibawa saat meminjam buku.",
  intro: {
    speaker: "ナレーター (Narator CD)",
    gender: "female",
    tempo: "tenang",
    jp: "第23課、会話。「どうやって いきますか」。カリナさんは みどり図書館へ 電話を かけて、行き方を 聞きます。よく 聞いて、まねして ください。",
    romaji: "Dai-nijuusanka, Kaiwa. \"Dou yatte ikimasu ka.\" Karina-san wa Midori Toshokan e denwa o kakete, ikikata o kikimasu. Yoku kiite, maneshite kudasai.",
    id: "Bab 23, Percakapan: \"Bagaimana cara pergi ke sana?\". Karina menelepon Perpustakaan Midori untuk menanyakan arah perjalanan. Dengarkan baik-baik, lalu tirukan."
  },
  outro: {
    speaker: "ナレーター (Narator CD)",
    gender: "female",
    tempo: "tenang",
    jp: "おつかれさまでした。もう 一度 聞いて みましょう。",
    romaji: "Otsukaresama deshita. Mou ichido kiite mimashou.",
    id: "Kerja bagus! Mari coba dengarkan sekali lagi."
  },
  roles: [
    {
      id: "toshokan",
      name: "図書館の人（としょかんのひと）",
      label: "Petugas Perpustakaan · Pria",
      gender: "male",
      tempo: "berwibawa",
      avatar: "👨‍💼"
    },
    { id: "karina", name: "カリナ", label: "Karina · Wanita (Mahasiswi)", gender: "female", tempo: "lincah", avatar: "👩‍🎓" }
  ],
  lines: [
    {
      speakerId: "toshokan",
      speaker: "図書館の人（としょかんのひと）",
      gender: "male",
      jp: "はい、みどりとしょかんです。",
      romaji: "Hai, Midori Toshokan desu.",
      id: "Halo, Perpustakaan Midori.",
      note: "Saat menerima telepon, sebut nama lembaga diikuti です."
    },
    {
      speakerId: "karina",
      speaker: "カリナ",
      gender: "female",
      jp: "あのう、そちらまで、どうやって いきますか。",
      romaji: "Anou, sochira made, dou yatte ikimasu ka.",
      id: "Permisi, bagaimana cara pergi ke sana ya?",
      note: "どうやって = dengan cara bagaimana. そちら = ke tempat Anda (bentuk sopan dari そこ)."
    },
    {
      speakerId: "toshokan",
      speaker: "図書館の人（としょかんのひと）",
      gender: "male",
      jp: "ほんだえきから 12ばんの バスに のって、としょかんまえで おりて ください。みっつめです。",
      romaji: "Honda-eki kara juuni-ban no basu ni notte, Toshokan-mae de orite kudasai. Mittsu-me desu.",
      id: "Dari Stasiun Honda naik bus nomor 12, lalu turun di halte Depan Perpustakaan (halte ke-3).",
      note: "～て ください untuk instruksi. ～め membentuk bilangan urutan: みっつめ = yang ketiga.",
      tts: "ほんだえきから じゅうにばんの バスに のって、としょかんまえで おりて ください。みっつめです。"
    },
    {
      speakerId: "karina",
      speaker: "カリナ",
      gender: "female",
      jp: "みっつめですね。",
      romaji: "Mittsu-me desu ne.",
      id: "Halte ke-3 ya.",
      note: "Mengulang informasi untuk memastikan pemahaman; ～ですね = ～ ya."
    },
    {
      speakerId: "toshokan",
      speaker: "図書館の人（としょかんのひと）",
      gender: "male",
      jp: "ええ。おりると、まえに こうえんが あります。としょかんは その こうえんの なかの しろい たてものです。",
      romaji: "Ee. Oriru to, mae ni kouen ga arimasu. Toshokan wa sono kouen no naka no shiroi tatemono desu.",
      id: "Ya. Begitu turun, di depannya langsung ada taman. Perpustakaan adalah bangunan putih di dalam taman itu.",
      note: "Pola konsekuensi/petunjuk arah Bab 23: [V-kamus] + と = kalau/begitu ～, pasti terjadi (oriru to = begitu turun, tampak...)."
    },
    {
      speakerId: "karina",
      speaker: "カリナ",
      gender: "female",
      jp: "わかりました。それから、ほんを かりるとき、なにか いりますか。",
      romaji: "Wakarimashita. Sorekara, hon o kariru toki, nanika irimasu ka.",
      id: "Mengerti. Lalu, saat meminjam buku, apakah perlu membawa sesuatu?",
      note: "Klausa waktu ～とき: V-る とき = saat akan melakukan (belum terjadi). なにか = sesuatu."
    },
    {
      speakerId: "toshokan",
      speaker: "図書館の人（としょかんのひと）",
      gender: "male",
      jp: "がいこくの かたですか。",
      romaji: "Gaikoku no kata desu ka.",
      id: "Apakah Anda warga negara asing?",
      note: "かた adalah bentuk sopan dari ひと, dipakai untuk menyebut lawan bicara atau orang lain."
    },
    {
      speakerId: "karina",
      speaker: "カリナ",
      gender: "female",
      jp: "はい。",
      romaji: "Hai.",
      id: "Ya.",
      note: "はい menjawab pertanyaan ～ですか secara lugas dan sopan."
    },
    {
      speakerId: "toshokan",
      speaker: "図書館の人（としょかんのひと）",
      gender: "male",
      jp: "じゃ、がいこくじんとうろくしょうを もって きて ください。",
      romaji: "Ja, gaikokujin tourokushou o motte kite kudasai.",
      id: "Kalau begitu, tolong bawa kartu registrasi orang asing (kartu izin tinggal) Anda.",
      note: "がいこくじんとうろくしょう = kartu registrasi orang asing; kini digantikan 在留カード (kartu izin tinggal). もって きて = membawa datang."
    },
    {
      speakerId: "karina",
      speaker: "カリナ",
      gender: "female",
      jp: "はい。どうも ありがとう ございました。",
      romaji: "Hai. Doumo arigatou gozaimashita.",
      id: "Baik. Terima kasih banyak.",
      note: "ありがとう ございました (bentuk lampau) dipakai setelah bantuan/percakapan selesai."
    }
  ],
  tips: [
    "～とき: V-る とき = saat akan melakukan; V-た とき = saat sudah/setelah melakukan.",
    "Sambungan ～とき: sifat-い + とき (いそがしい とき), sifat-な + な とき (ひまな とき), kata benda + の とき (こどもの とき).",
    "V-る と menyatakan akibat yang pasti (arah jalan, mesin); kalimat kedua tidak boleh berisi ajakan, perintah, atau permintaan.",
    "Bilangan urutan memakai ～め: ひとつめ, ふたつめ, みっつめ = halte/pemberhentian pertama, kedua, ketiga."
  ]
};

window.MNN_KAIWA[24] = {
  bab: 24,
  title: "てつだって くれますか — Bantuan Pindahan Rumah",
  scene: "Karina menawarkan bantuan untuk pindahan rumah Wang besok pagi. Wang menjelaskan siapa saja yang datang membantu dan bahwa ia akan dipinjami mobil van oleh Yamada, lalu Karina mengusulkan membawakan bekal makan siang.",
  intro: {
    speaker: "ナレーター (Narator CD)",
    gender: "female",
    tempo: "tenang",
    jp: "第24課、会話。「てつだって くれますか」。カリナさんは あした 引越しする ワンさんに 手伝いを 申し出ます。よく 聞いて、まねして ください。",
    romaji: "Dai-nijuuyonka, Kaiwa. \"Tetsudatte kuremasu ka.\" Karina-san wa ashita hikkoshi suru Wan-san ni tetsudai o moushidemasu. Yoku kiite, maneshite kudasai.",
    id: "Bab 24, Percakapan: \"Maukah membantu saya?\". Karina menawarkan bantuan kepada Pak Wang yang akan pindah rumah besok. Dengarkan baik-baik, lalu tirukan."
  },
  outro: {
    speaker: "ナレーター (Narator CD)",
    gender: "female",
    tempo: "tenang",
    jp: "おつかれさまでした。もう 一度 聞いて みましょう。",
    romaji: "Otsukaresama deshita. Mou ichido kiite mimashou.",
    id: "Kerja bagus! Mari coba dengarkan sekali lagi."
  },
  roles: [
    { id: "karina", name: "カリナ", label: "Karina · Wanita (Teman yang Peduli)", gender: "female", tempo: "lincah", avatar: "👩‍🎓" },
    { id: "wan", name: "ワン", label: "Wang · Pria (Yang Pindahan)", gender: "male", tempo: "lincah", avatar: "🧑‍💼" }
  ],
  lines: [
    {
      speakerId: "karina",
      speaker: "カリナ",
      gender: "female",
      jp: "ワンさん、あした ひっこしですね。てつだいに いきましょうか。",
      romaji: "Wan-san, ashita hikkoshi desu ne. Tetsudai ni ikimashou ka.",
      id: "Pak Wang, besok pindahan ya? Perlu saya datang membantu?",
      note: "てつだいに いきます = pergi untuk membantu (V-ます stem + に いきます). ～ましょうか di sini menawarkan bantuan."
    },
    {
      speakerId: "wan",
      speaker: "ワン",
      gender: "male",
      jp: "ありがとう ございます。じゃ、すみませんが、9じごろ おねがいします。",
      romaji: "Arigatou gozaimasu. Ja, sumimasen ga, ku-ji goro onegaishimasu.",
      id: "Terima kasih! Kalau begitu, maaf merepotkan, mohon datang sekitar jam 9 ya.",
      note: "すみませんが = maaf, tetapi... (meminta dengan halus). ごろ = sekitar (untuk jam).",
      tts: "ありがとう ございます。じゃ、すみませんが、くじごろ おねがいします。"
    },
    {
      speakerId: "karina",
      speaker: "カリナ",
      gender: "female",
      jp: "ほかに だれが てつだいに いきますか。",
      romaji: "Hoka ni dare ga tetsudai ni ikimasu ka.",
      id: "Selain saya, siapa lagi yang datang membantu?",
      note: "ほかに = selain itu. だれが menandai subjek pertanyaan (siapa yang)."
    },
    {
      speakerId: "wan",
      speaker: "ワン",
      gender: "male",
      jp: "やまださんと ミラーさんが きて くれます。",
      romaji: "Yamada-san to Miraa-san ga kite kuremasu.",
      id: "Pak Yamada dan Pak Miller mau datang (membantu saya).",
      note: "～て くれます = orang lain melakukan kebaikan untuk pembicara. Subjeknya si pemberi: やまださんと ミラーさんが."
    },
    {
      speakerId: "karina",
      speaker: "カリナ",
      gender: "female",
      jp: "くるまは？",
      romaji: "Kuruma wa?",
      id: "Mobilnya bagaimana?",
      note: "Pertanyaan singkat; maksud lengkapnya くるまは どう しますか."
    },
    {
      speakerId: "wan",
      speaker: "ワン",
      gender: "male",
      jp: "やまださんに ワゴンしゃを かして もらいます。",
      romaji: "Yamada-san ni wagonsha o kashite moraimasu.",
      id: "Saya dipinjami (mendapat pinjaman) mobil van dari Pak Yamada.",
      note: "[pemberi] に V-て もらいます = menerima bantuan/jasa dari seseorang. かして adalah bentuk-て dari かします (meminjamkan)."
    },
    {
      speakerId: "karina",
      speaker: "カリナ",
      gender: "female",
      jp: "ひるごはんは どう しますか。",
      romaji: "Hirugohan wa dou shimasu ka.",
      id: "Makan siangnya bagaimana?",
      note: "どう しますか = bagaimana (mau diapakan/diurus bagaimana)."
    },
    {
      speakerId: "wan",
      speaker: "ワン",
      gender: "male",
      jp: "えーと……。",
      romaji: "Eeto.......",
      id: "Hmm, gimana ya...",
      note: "えーと = anu..., penanda pembicara sedang berpikir mencari jawaban."
    },
    {
      speakerId: "karina",
      speaker: "カリナ",
      gender: "female",
      jp: "わたしが おべんとうを もって いきましょうか。ミラーさんにも たべて もらいましょう。",
      romaji: "Watashi ga o-bentou o motte ikimashou ka. Miraa-san ni mo tabete moraimashou.",
      id: "Bagaimana kalau saya bawakan bekal makan siang? Kita ajak Pak Miller makan bersama juga.",
      note: "わたしが menonjolkan pelaku. ～にも = juga kepada ～. ～て もらいましょう = mari (kita) minta/ajak orang lain melakukan ～."
    },
    {
      speakerId: "wan",
      speaker: "ワン",
      gender: "male",
      jp: "すみません。おねがいします。ほんとうに たすかります。",
      romaji: "Sumimasen. Onegaishimasu. Hontou ni tasukarimasu.",
      id: "Maaf merepotkan. Tolong ya, sangat terbantu sekali!",
      note: "たすかります = sangat terbantu/tertolong; ungkapan wajar saat menerima bantuan."
    },
    {
      speakerId: "karina",
      speaker: "カリナ",
      gender: "female",
      jp: "じゃ、また あした。",
      romaji: "Ja, mata ashita.",
      id: "Sampai jumpa besok!",
      note: "じゃ、また あした = salam perpisahan santai untuk bertemu lagi besok."
    }
  ],
  tips: [
    "てあげます: pembicara/kelompoknya berbuat baik untuk orang lain — わたしは ヤンさんに かさを かして あげました.",
    "てもらいます: pembicara menerima kebaikan dari orang lain — やまださんに くるまを かして もらいました.",
    "てくれます: orang lain berbuat baik untuk pembicara/keluarganya — ミラーさんが てつだって くれました.",
    "Hindari てあげます langsung kepada atasan karena terkesan menggurui; gunakan ～ましょうか agar lebih sopan."
  ]
};

window.MNN_KAIWA[25] = {
  bab: 25,
  title: "いろいろ おせわに なりました — Salam Perpisahan Mutasi Kerja",
  scene: "Hari terakhir Mike Miller di kantor Osaka sebelum mutasi ke Tokyo. Kimura, Sato, dan Santos berkumpul mengucapkan selamat sekaligus perpisahan, lalu berjanji tetap saling menghubungi dan menjaga silaturahmi.",
  intro: {
    speaker: "ナレーター (Narator CD)",
    gender: "female",
    tempo: "tenang",
    jp: "第25課、会話。「いろいろ おせわに なりました」。東京へ 転勤する ミラーさんに、みんなが お別れの 挨拶を します。よく 聞いて、まねして ください。",
    romaji: "Dai-nijuugoka, Kaiwa. \"Iroiro o-sewa ni narimashita.\" Toukyou e tenkin suru Miraa-san ni, minna ga o-wakare no aisatsu o shimasu. Yoku kiite, maneshite kudasai.",
    id: "Bab 25, Percakapan: \"Terima kasih atas segala bantuannya selama ini\". Teman-teman mengucapkan salam perpisahan kepada Pak Miller yang pindah tugas ke Tokyo. Dengarkan baik-baik, lalu tirukan."
  },
  outro: {
    speaker: "ナレーター (Narator CD)",
    gender: "female",
    tempo: "tenang",
    jp: "おつかれさまでした。みんなの日本語 初級Ⅰ、会話の 練習は これで 終わりです。よく 頑張りましたね！",
    romaji: "Otsukaresama deshita. Minna no Nihongo Shokyuu I, kaiwa no renshuu wa kore de owari desu. Yoku ganbarimashita ne!",
    id: "Kerja bagus! Latihan percakapan Minna no Nihongo Shokyuu I selesai sampai di sini. Usaha Anda hebat sekali!"
  },
  roles: [
    {
      id: "kimura",
      name: "木村（きむら）",
      label: "Kimura Reiko · Wanita (Rekan Kerja)",
      gender: "female",
      tempo: "tenang",
      avatar: "👩‍💼"
    },
    {
      id: "sato",
      name: "佐藤（さとう）",
      label: "Sato Keiko · Wanita (Rekan Kerja)",
      gender: "female",
      tempo: "normal",
      avatar: "👩",
      rateBias: 1.08
    },
    { id: "santos", name: "サントス", label: "José Santos · Pria (Sahabat Kerja)", gender: "male", tempo: "tenang", avatar: "🧑‍💼" },
    { id: "miller", name: "ミラー", label: "Mike Miller · Pria (Yang Dimutasi)", gender: "male", tempo: "lincah", avatar: "🙋‍♂️" }
  ],
  lines: [
    {
      speakerId: "kimura",
      speaker: "木村（きむら）",
      gender: "female",
      jp: "てんきん、おめでとう ございます。",
      romaji: "Tenkin, omedetou gozaimasu.",
      id: "Selamat atas mutasi kerjanya!",
      note: "おめでとう ございます = selamat, dipakai untuk kabar baik seperti mutasi, pernikahan, atau kelulusan."
    },
    {
      speakerId: "miller",
      speaker: "ミラー",
      gender: "male",
      jp: "ありがとう ございます。",
      romaji: "Arigatou gozaimasu.",
      id: "Terima kasih banyak.",
      note: "ありがとう ございます adalah ucapan terima kasih sopan untuk situasi resmi."
    },
    {
      speakerId: "kimura",
      speaker: "木村（きむら）",
      gender: "female",
      jp: "ミラーさんが とうきょうへ いったら、さびしく なりますね。",
      romaji: "Miraa-san ga Toukyou e ittara, sabishiku narimasu ne.",
      id: "Kalau Pak Miller pergi ke Tokyo nanti, suasana jadi sepi ya.",
      note: "Pengandaian ～たら dibentuk dari bentuk lampau biasa + ら: いきます → いったら. Sifat-い + なります = menjadi ～."
    },
    {
      speakerId: "sato",
      speaker: "佐藤（さとう）",
      gender: "female",
      jp: "そうですね。",
      romaji: "Sou desu ne.",
      id: "Iya betul ya.",
      note: "そうですね = setuju/merasa hal yang sama; ね mengajak lawan bicara menyetujui."
    },
    {
      speakerId: "kimura",
      speaker: "木村（きむら）",
      gender: "female",
      jp: "とうきょうへ いっても、おおさかの ことを わすれないで くださいね。",
      romaji: "Toukyou e itte mo, Oosaka no koto o wasurenaide kudasai ne.",
      id: "Meskipun sudah pergi ke Tokyo, jangan lupakan kenangan di Osaka ya!",
      note: "Pola kontras Bab 25: [V-て] + も = meskipun ～ (いっても = meskipun pergi). ～ないで ください = jangan ～."
    },
    {
      speakerId: "miller",
      speaker: "ミラー",
      gender: "male",
      jp: "もちろん。みなさん、ひまが あったら、ぜひ とうきょうへ あそびに きて ください。",
      romaji: "Mochiron. Minasan, hima ga attara, zehi Toukyou e asobi ni kite kudasai.",
      id: "Tentu saja! Semuanya, kalau ada waktu luang, silakan sekali main ke Tokyo ya.",
      note: "ひまが あったら = kalau ada waktu luang; あったら berasal dari あります (bentuk lampau biasa + ら). あそびに きます = datang untuk mengunjungi."
    },
    {
      speakerId: "santos",
      speaker: "サントス",
      gender: "male",
      jp: "ミラーさんも おおさかへ きたら、でんわを ください。いっしょに のみましょう。",
      romaji: "Miraa-san mo Oosaka e kitara, denwa o kudasai. Issho ni nomimashou.",
      id: "Pak Miller juga kalau datang ke Osaka lagi, hubungi kami ya. Ayo minum bersama!",
      note: "きたら dari きます (bentuk lampau biasa + ら). でんわを ください = tolong telepon/hubungi."
    },
    {
      speakerId: "miller",
      speaker: "ミラー",
      gender: "male",
      jp: "ええ、ぜひ。……みなさん、ほんとうに いろいろ おせわに なりました。",
      romaji: "Ee, zehi. ...... Minasan, hontou ni iroiro o-sewa ni narimashita.",
      id: "Ya, pasti! ...Semuanya, sungguh terima kasih banyak atas segala bantuan selama ini.",
      note: "いろいろ おせわに なりました = terima kasih atas segala bantuan selama ini; ungkapan khas saat pamit/mutasi."
    },
    {
      speakerId: "sato",
      speaker: "佐藤（さとう）",
      gender: "female",
      jp: "がんばって ください。おからだに きを つけて。",
      romaji: "Ganbatte kudasai. O-karada ni ki o tsukete.",
      id: "Semangat ya. Jaga kesehatan selalu.",
      note: "おからだに きを つけて = jaga kesehatan; ungkapan tetap saat melepas kepergian seseorang."
    },
    {
      speakerId: "miller",
      speaker: "ミラー",
      gender: "male",
      jp: "はい。みなさんも どうぞ おげんきで。",
      romaji: "Hai. Minasan mo douzo o-genki de.",
      id: "Baik. Semuanya juga semoga selalu sehat dan bahagia!",
      note: "どうぞ おげんきで = semoga tetap sehat; salam perpisahan untuk waktu yang lama."
    }
  ],
  tips: [
    "～たら dibentuk dari bentuk lampau biasa + ら: いったら, あったら, だったら.",
    "～たら punya dua fungsi: pengandaian (kalau) dan urutan pasti di masa depan (setelah ～).",
    "～ても dibentuk dari bentuk-て + も: いっても, あめが ふっても; bentuk negatif ～なくても.",
    "いくら ～ても = seberapa pun ～; もし ～たら memperjelas makna pengandaian."
  ]
};
