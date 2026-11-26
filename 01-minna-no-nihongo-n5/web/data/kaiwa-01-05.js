/* Data Kaiwa (Percakapan) Minna no Nihongo I — Bab 1–5
 * Struktur kompatibel 3-Layer Voice Router (gender: "male" | "female") + TTS override.
 */
window.MNN_KAIWA = {
  1: {
    bab: 1,
    title: "はじめまして — Perkenalan Pertama",
    scene: "佐藤（さとう）さん bertemu dengan pegawai baru dari Amerika, マイク・ミラーさん, yang diperkenalkan oleh 山田（やまだ）さん di kantor IMC.",
    intro: {
      speaker: "ナレーター (Narator CD)",
      gender: "female",
      tempo: "tenang",
      jp: "第1課、会話。「はじめまして」。朝、IMCの 会社で、山田さんが 佐藤さんに アメリカから 来た マイク・ミラーさんを 紹介します。よく 聞いて、まねして ください。",
      romaji: "Dai-ikka, Kaiwa. \"Hajimemashite.\" Asa, IMC no kaisha de, Yamada-san ga Satou-san ni Amerika kara kita Maiku Miraa-san o shoukai shimasu. Yoku kiite, maneshite kudasai.",
      id: "Bab 1, Percakapan: \"Perkenalan Pertama\". Pagi hari di kantor IMC, Pak Yamada memperkenalkan Mike Miller yang datang dari Amerika kepada Bu Sato. Dengarkan baik-baik, lalu tirukan."
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
      { id: "sato", name: "佐藤（さとう）", label: "Sato · Wanita", gender: "female", tempo: "normal", avatar: "👩‍💼" },
      {
        id: "yamada",
        name: "山田（やまだ）",
        label: "Yamada · Pria (Senior)",
        gender: "male",
        tempo: "tenang",
        avatar: "👨‍💼",
        rateBias: 0.9
      },
      {
        id: "miller",
        name: "ミラー",
        label: "Mike Miller · Pria (Baru)",
        gender: "male",
        tempo: "lincah",
        avatar: "🙋‍♂️",
        rateBias: 1.13
      }
    ],
    lines: [
      {
        speakerId: "yamada",
        speaker: "山田（やまだ）",
        gender: "male",
        jp: "おはよう ございます。",
        romaji: "Ohayou gozaimasu.",
        id: "Selamat pagi.",
        note: "Salam pagi sopan untuk rekan kerja atau orang yang lebih tua/dihormati."
      },
      {
        speakerId: "sato",
        speaker: "佐藤（さとう）",
        gender: "female",
        jp: "おはよう ございます。山田さん、こちらは どなたですか。",
        romaji: "Ohayou gozaimasu. Yamada-san, kochira wa donata desu ka.",
        id: "Selamat pagi. Pak Yamada, beliau ini siapa?",
        note: "こちらは (kochira) dan どなた (donata) lebih sopan daripada このひと / だれ."
      },
      {
        speakerId: "yamada",
        speaker: "山田（やまだ）",
        gender: "male",
        jp: "こちらは マイク・ミラーさんです。IMCの しゃいんです。",
        romaji: "Kochira wa Maiku Miraa-san desu. IMC no shain desu.",
        id: "Ini Pak Mike Miller. Beliau karyawan IMC.",
        note: "Partikel の menghubungkan dua kata benda: IMC の しゃいん (karyawan milik/dari IMC)."
      },
      {
        speakerId: "miller",
        speaker: "ミラー",
        gender: "male",
        jp: "はじめまして。マイク・ミラーです。アメリカから きました。",
        romaji: "Hajimemashite. Maiku Miraa desu. Amerika kara kimashita.",
        id: "Perkenalkan. Saya Mike Miller. Saya datang dari Amerika.",
        note: "～から きました (datang dari ~) adalah frasa tetap Bab 1 untuk asal negara/kota."
      },
      {
        speakerId: "miller",
        speaker: "ミラー",
        gender: "male",
        jp: "どうぞ よろしく おねがいします。",
        romaji: "Douzo yoroshiku onegaishimasu.",
        id: "Senang berkenalan dengan Anda (mohon bimbingannya).",
        note: "Ungkapan penutup wajib saat pertama kali berkenalan, diucapkan sambil membungkuk ringan."
      },
      {
        speakerId: "sato",
        speaker: "佐藤（さとう）",
        gender: "female",
        jp: "佐藤 けい子です。こちらこそ どうぞ よろしく おねがいします。",
        romaji: "Satou Keiko desu. Kochirakoso douzo yoroshiku onegaishimasu.",
        id: "Saya Keiko Sato. Sama-sama, senang berkenalan dengan Anda.",
        note: "Jangan pernah memakai 「～さん」 untuk nama diri sendiri! Gunakan 「こちらこそ」 untuk membalas 「どうぞ よろしく」."
      },
      {
        speakerId: "yamada",
        speaker: "山田（やまだ）",
        gender: "male",
        jp: "ミラーさんは かいしゃいんです。わたしは ぎんこういんでは ありません。",
        romaji: "Miraa-san wa kaishain desu. Watashi wa ginkouin de wa arimasen.",
        id: "Pak Miller adalah pegawai perusahaan. Saya bukan pegawai bank.",
        note: "Membedakan profesi umum (かいしゃいん) vs karyawan perusahaan tertentu (IMCの しゃいん) serta bentuk negatif sopan (では ありません)."
      }
    ],
    tips: [
      "「はじめまして」 hanya diucapkan sekali saat baru pertama kali bertemu seseorang.",
      "Saat menyebut nama sendiri, jangan pernah menambahkan akhiran 「～さん」.",
      "Gunakan tombol 「🎭 Latih Peran Pria/Wanita」 di atas untuk membisukan suara salah satu tokoh lalu ucapkan sendiri bagiannya!"
    ]
  },
  2: {
    bab: 2,
    title: "これから おせわに なります — Salam Tetangga Baru",
    scene: "José Santos, penghuni baru apartemen kamar 408, bertamu ke kamar tetangganya, Ichiro Yamada, untuk memperkenalkan diri dan memberikan bingkisan kecil kopi.",
    intro: {
      speaker: "ナレーター (Narator CD)",
      gender: "female",
      tempo: "tenang",
      jp: "第2課、会話。「これから おせわに なります」。サントスさんは あたらしい アパートの となりに すんでいる 山田さんの へやを たずねます。よく 聞いて、まねして ください。",
      romaji: "Dai-nika, kaiwa. \"Korekara osewa ni narimasu.\" Santosu-san wa atarashii apaato no tonari ni sunde iru Yamada-san no heya o tazunemasu. Yoku kiite, maneshite kudasai.",
      id: "Bab 2, Percakapan: \"Mulai sekarang saya akan banyak merepotkan Anda.\" Pak Santos mengunjungi kamar Pak Yamada, tetangga di apartemen barunya. Dengarkan baik-baik, lalu tirukan."
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
      { id: "yamada", name: "山田（やまだ）", label: "Yamada · Pria (Tetangga Senior)", gender: "male", tempo: "tenang", avatar: "👨‍💼" },
      { id: "santos", name: "サントス", label: "José Santos · Pria (Penghuni Baru)", gender: "male", tempo: "normal", avatar: "🧑‍💼" }
    ],
    lines: [
      {
        speakerId: "yamada",
        speaker: "山田（やまだ）",
        gender: "male",
        jp: "はい。どなたですか。",
        romaji: "Hai. Donata desu ka.",
        id: "Ya, siapa ya?",
        note: "どなた adalah bentuk sopan dari だれ (siapa)."
      },
      {
        speakerId: "santos",
        speaker: "サントス",
        gender: "male",
        jp: "408の サントスです。",
        romaji: "Yon-maru-hachi no Santosu desu.",
        id: "Saya Santos dari kamar 408.",
        note: "Nomor kamar dibaca per digit: 4-0-8 → よん・まる・はち. Partikel の menghubungkan nomor kamar dengan nama.",
        tts: "よんまるはちの サントスです。"
      },
      {
        speakerId: "santos",
        speaker: "サントス",
        gender: "male",
        jp: "こんにちは。サントスです。これから おせわに なります。どうぞ よろしく おねがいします。",
        romaji: "Konnichiwa. Santosu desu. Korekara osewa ni narimasu. Douzo yoroshiku onegaishimasu.",
        id: "Selamat siang. Saya Santos. Mulai sekarang saya akan banyak merepotkan Anda. Mohon bimbingannya.",
        note: "これから おせわに なります adalah salam wajib saat baru pindah rumah atau masuk lingkungan baru."
      },
      {
        speakerId: "yamada",
        speaker: "山田（やまだ）",
        gender: "male",
        jp: "こちらこそ よろしく おねがいします。どうぞ おはいり ください。",
        romaji: "Kochirakoso yoroshiku onegaishimasu. Douzo ohairi kudasai.",
        id: "Sama-sama, mohon bimbingannya juga. Silakan masuk.",
        note: "こちらこそ dipakai untuk membalas salam. どうぞ おはいり ください adalah frasa sopan untuk mempersilakan masuk."
      },
      {
        speakerId: "santos",
        speaker: "サントス",
        gender: "male",
        jp: "しつれいします。",
        romaji: "Shitsurei shimasu.",
        id: "Permisi, saya masuk.",
        note: "しつれいします diucapkan saat masuk ke rumah/kantor orang lain atau saat pamit."
      },
      {
        speakerId: "santos",
        speaker: "サントス",
        gender: "male",
        jp: "あのう、これ、ほんの きもちです。どうぞ。",
        romaji: "Anou, kore, hon no kimochi desu. Douzo.",
        id: "Anu, ini sekadar tanda mata saya. Silakan diterima.",
        note: "これ menunjuk benda yang dekat dengan pembicara. ほんの きもちです dipakai agar pemberian terdengar rendah hati."
      },
      {
        speakerId: "yamada",
        speaker: "山田（やまだ）",
        gender: "male",
        jp: "あ、どうも……。なんですか。",
        romaji: "A, doumo...... Nan desu ka.",
        id: "Oh, terima kasih banyak... Apa ini?",
        note: "なんですか menanyakan benda; jawabannya bisa langsung menyebut nama bendanya."
      },
      {
        speakerId: "santos",
        speaker: "サントス",
        gender: "male",
        jp: "コーヒーです。",
        romaji: "Koohii desu.",
        id: "Ini kopi.",
        note: "Pola kata benda + です untuk menjelaskan identitas benda."
      },
      {
        speakerId: "yamada",
        speaker: "山田（やまだ）",
        gender: "male",
        jp: "どうも ありがとうございます。",
        romaji: "Doumo arigatou gozaimasu.",
        id: "Terima kasih banyak.",
        note: "どうも ありがとうございます adalah ucapan terima kasih yang sopan."
      }
    ],
    tips: [
      "「どなた」 lebih sopan daripada 「だれ」; pakai saat bertamu atau berbicara dengan orang yang belum dikenal.",
      "「これから おせわに なります」 diucapkan sekali saat baru pindah ke lingkungan/apartemen baru.",
      "Saat memberi oleh-oleh, gunakan 「ほんの きもちです」 agar terdengar rendah hati, bukan sombong.",
      "Nomor kamar 408 dibaca 「よん・まる・はち」, bukan 「よんひゃくはち」."
    ]
  },
  3: {
    bab: 3,
    title: "これを ください — Berbelanja di Departemen Store",
    scene: "Maria mencari konter wine di sebuah department store, bertanya kepada pramuniaga A, lalu memilih dan membeli wine dari pramuniaga B.",
    intro: {
      speaker: "ナレーター (Narator CD)",
      gender: "female",
      tempo: "tenang",
      jp: "第3課、会話。「これを ください」。マリアさんは デパートで ワインを さがします。うりばを きいて、ねだんを たしかめてから かいます。よく 聞いて、まねして ください。",
      romaji: "Dai-sanka, kaiwa. \"Kore o kudasai.\" Maria-san wa depaato de wain o sagashimasu. Uriba o kiite, nedan o tashikamete kara kaimasu. Yoku kiite, maneshite kudasai.",
      id: "Bab 3, Percakapan: \"Saya ambil yang ini.\" Maria mencari wine di department store. Ia menanyakan konternya, memastikan harga, lalu membeli. Dengarkan baik-baik, lalu tirukan."
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
      { id: "tenin_a", name: "店員A（てんいん）", label: "Pramuniaga A · Pria (Info)", gender: "male", tempo: "normal", avatar: "👨‍💼" },
      { id: "maria", name: "マリア", label: "Maria · Wanita (Pembeli)", gender: "female", tempo: "lincah", avatar: "👩" },
      {
        id: "tenin_b",
        name: "店員B（てんいん）",
        label: "Pramuniaga B · Wanita (Konter Wine)",
        gender: "female",
        tempo: "tenang",
        avatar: "👩‍💼"
      }
    ],
    lines: [
      {
        speakerId: "tenin_a",
        speaker: "店員A（てんいん）",
        gender: "male",
        jp: "いらっしゃいませ。",
        romaji: "Irasshaimase.",
        id: "Selamat datang.",
        note: "Sapaan standar staf toko kepada pelanggan; pembeli tidak perlu menjawabnya."
      },
      {
        speakerId: "maria",
        speaker: "マリア",
        gender: "female",
        jp: "すみません。ワインうりばは どこですか。",
        romaji: "Sumimasen. Wain uriba wa doko desu ka.",
        id: "Permisi. Konter wine di mana ya?",
        note: "Pola ～うりばは どこですか untuk menanyakan letak konter/bagian penjualan."
      },
      {
        speakerId: "tenin_a",
        speaker: "店員A（てんいん）",
        gender: "male",
        jp: "ちか 1かいです。",
        romaji: "Chika ikkai desu.",
        id: "Di lantai basement 1 (B1).",
        note: "ちか = bawah tanah. 1かい dibaca いっかい (ikkai), bukan いちかい.",
        tts: "ちか いっかいです。"
      },
      {
        speakerId: "maria",
        speaker: "マリア",
        gender: "female",
        jp: "どうも。",
        romaji: "Doumo.",
        id: "Terima kasih.",
        note: "どうも adalah ucapan terima kasih singkat dan santai."
      },
      {
        speakerId: "maria",
        speaker: "マリア",
        gender: "female",
        jp: "すみません。その ワインを みせて ください。",
        romaji: "Sumimasen. Sono wain o misete kudasai.",
        id: "Permisi. Tolong perlihatkan wine yang itu.",
        note: "その menunjuk benda dekat lawan bicara. ～て ください adalah bentuk permintaan sopan (pola て形 dipelajari lebih lanjut di Bab 14)."
      },
      {
        speakerId: "tenin_b",
        speaker: "店員B（てんいん）",
        gender: "female",
        jp: "はい、どうぞ。",
        romaji: "Hai, douzo.",
        id: "Ya, silakan.",
        note: "どうぞ dipakai saat menyerahkan atau mempersilakan sesuatu."
      },
      {
        speakerId: "maria",
        speaker: "マリア",
        gender: "female",
        jp: "これは どこの ワインですか。",
        romaji: "Kore wa doko no wain desu ka.",
        id: "Ini wine buatan mana?",
        note: "どこの + kata benda menanyakan asal negara, daerah, atau produsen."
      },
      {
        speakerId: "tenin_b",
        speaker: "店員B（てんいん）",
        gender: "female",
        jp: "イタリアのです。",
        romaji: "Itaria no desu.",
        id: "Buatan Italia.",
        note: "Saat bendanya sudah disebut, cukup ～のです tanpa mengulang ワイン."
      },
      {
        speakerId: "maria",
        speaker: "マリア",
        gender: "female",
        jp: "いくらですか。",
        romaji: "Ikura desu ka.",
        id: "Berapa harganya?",
        note: "いくら = berapa (harga)."
      },
      {
        speakerId: "tenin_b",
        speaker: "店員B（てんいん）",
        gender: "female",
        jp: "2,500えんです。",
        romaji: "Nisen-gohyaku-en desu.",
        id: "2.500 yen.",
        note: "2,500 dibaca にせんごひゃく; ～えん = yen.",
        tts: "にせんごひゃくえんです。"
      },
      {
        speakerId: "maria",
        speaker: "マリア",
        gender: "female",
        jp: "じゃ、これを ください。",
        romaji: "Ja, kore o kudasai.",
        id: "Kalau begitu, saya ambil yang ini.",
        note: "～を ください dipakai saat memesan atau membeli barang yang ditunjuk."
      }
    ],
    tips: [
      "「うりば」 berarti konter/bagian penjualan; contohnya 「ワインうりば」 = konter wine.",
      "「ちか 1かい」 = lantai basement 1; angka 1 di sini dibaca 「いっかい」.",
      "「どこの」 menanyakan asal produk: 「どこの ワインですか」 = wine buatan mana?",
      "「みせて ください」 adalah permintaan sopan; pola て形 formalnya dipelajari di Bab 14, jadi di sini cukup hafalkan sebagai ungkapan."
    ]
  },
  4: {
    bab: 4,
    title: "そちらは なんじから なんじまでですか — Jam Buka & Hari Libur",
    scene: "Karina menelepon layanan informasi nomor telepon 104 untuk mencari nomor Museum Seni Yamato, lalu menelepon museum itu untuk menanyakan jam buka dan hari liburnya.",
    intro: {
      speaker: "ナレーター (Narator CD)",
      gender: "female",
      tempo: "tenang",
      jp: "第4課、会話。「そちらは なんじから なんじまでですか」。カリナさんは 104で やまとびじゅつかんの でんわばんごうを しらべて、それから びじゅつかんに でんわを かけます。よく 聞いて、まねして ください。",
      romaji: "Dai-yonka, kaiwa. \"Sochira wa nanji kara nanji made desu ka.\" Karina-san wa ichi-maru-yon de Yamato bijutsukan no denwa bangou o shirabete, sorekara bijutsukan ni denwa o kakemasu. Yoku kiite, maneshite kudasai.",
      id: "Bab 4, Percakapan: \"Di sana buka dari jam berapa sampai jam berapa?\" Karina mencari nomor telepon Museum Seni Yamato lewat layanan 104, lalu menelepon museum tersebut. Dengarkan baik-baik, lalu tirukan."
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
        id: "ishida",
        name: "番号案内・石田（いしだ）",
        label: "Operator 104 · Ishida (Wanita)",
        gender: "female",
        tempo: "tenang",
        avatar: "👩‍💼"
      },
      { id: "karina", name: "カリナ", label: "Karina · Wanita (Mahasiswi)", gender: "female", tempo: "lincah", avatar: "👩‍🎓" },
      { id: "tape", name: "テープ案内（あんない）", label: "Rekaman Otomatis 104 (Pria)", gender: "male", tempo: "normal", avatar: "🤖" },
      {
        id: "museum",
        name: "やまと美術館の人（びじゅつかん）",
        label: "Staf Museum Yamato (Pria)",
        gender: "male",
        tempo: "berwibawa",
        avatar: "👨‍💼"
      }
    ],
    lines: [
      {
        speakerId: "ishida",
        speaker: "番号案内・石田（いしだ）",
        gender: "female",
        jp: "はい、104の いしだです。",
        romaji: "Hai, ichi-maru-yon no Ishida desu.",
        id: "Ya, layanan 104 dengan Ishida.",
        note: "104 dibaca いち・まる・よん, per digit.",
        tts: "はい、いちまるよんの いしだです。"
      },
      {
        speakerId: "karina",
        speaker: "カリナ",
        gender: "female",
        jp: "やまとびじゅつかんの でんわばんごうを おねがいします。",
        romaji: "Yamato bijutsukan no denwa bangou o onegaishimasu.",
        id: "Tolong nomor telepon Museum Seni Yamato.",
        note: "Pola ～を おねがいします dipakai untuk meminta sesuatu dengan sopan."
      },
      {
        speakerId: "ishida",
        speaker: "番号案内・石田（いしだ）",
        gender: "female",
        jp: "やまとびじゅつかんでございますね。かしこまりました。",
        romaji: "Yamato bijutsukan de gozaimasu ne. Kashikomarimashita.",
        id: "Museum Seni Yamato ya. Baik, saya carikan.",
        note: "でございます adalah bentuk sangat sopan dari です; かしこまりました = baik, siap."
      },
      {
        speakerId: "tape",
        speaker: "テープ案内（あんない）",
        gender: "male",
        jp: "おといあわせの ばんごうは、0797の 38の 5432です。",
        romaji: "Otoiawase no bangou wa, zero-nana-kyuu-nana no san-hachi no go-yon-san-ni desu.",
        id: "Nomor yang Anda tanyakan adalah 0797-38-5432.",
        note: "Tanda hubung pada nomor telepon dibaca の: 0797の 38の 5432.",
        tts: "おといあわせの ばんごうは、ぜろななきゅうななの さんはちの ごよんさんにです。"
      },
      {
        speakerId: "museum",
        speaker: "やまと美術館の人（びじゅつかん）",
        gender: "male",
        jp: "はい、やまとびじゅつかんです。",
        romaji: "Hai, Yamato bijutsukan desu.",
        id: "Halo, ini Museum Seni Yamato.",
        note: "Saat menjawab telepon, sebutkan nama instansi lalu です."
      },
      {
        speakerId: "karina",
        speaker: "カリナ",
        gender: "female",
        jp: "すみません。そちらは なんじから なんじまでですか。",
        romaji: "Sumimasen. Sochira wa nanji kara nanji made desu ka.",
        id: "Permisi. Di sana buka dari jam berapa sampai jam berapa?",
        note: "そちら menunjuk tempat/instansi lawan bicara secara sopan, terutama di telepon. Pola から～まで = dari～sampai～."
      },
      {
        speakerId: "museum",
        speaker: "やまと美術館の人（びじゅつかん）",
        gender: "male",
        jp: "10じから 4じまでです。",
        romaji: "Juu-ji kara yo-ji made desu.",
        id: "Dari jam 10 sampai jam 4.",
        note: "Jam 4 dibaca よじ (yo-ji), bukan よんじ. から menandai awal, まで menandai akhir.",
        tts: "じゅうじから よじまでです。"
      },
      {
        speakerId: "karina",
        speaker: "カリナ",
        gender: "female",
        jp: "やすみは なんようびですか。",
        romaji: "Yasumi wa nan-youbi desu ka.",
        id: "Hari liburnya hari apa?",
        note: "なんようび = hari apa; やすみ = hari libur."
      },
      {
        speakerId: "museum",
        speaker: "やまと美術館の人（びじゅつかん）",
        gender: "male",
        jp: "げつようびです。",
        romaji: "Getsuyoubi desu.",
        id: "Hari Senin.",
        note: "げつようび = Senin. Hari dalam seminggu memakai akhiran ～ようび."
      },
      {
        speakerId: "karina",
        speaker: "カリナ",
        gender: "female",
        jp: "どうも ありがとうございました。",
        romaji: "Doumo arigatou gozaimashita.",
        id: "Terima kasih banyak.",
        note: "ありがとうございました (bentuk lampau) dipakai setelah urusan selesai."
      }
    ],
    tips: [
      "「そちら」 lebih sopan daripada 「そこ」 saat menanyakan tempat/instansi lawan bicara di telepon.",
      "Pola 「なんじから なんじまで」 = dari jam berapa sampai jam berapa.",
      "Jam 4 = 「よじ」, jam 9 = 「くじ」; jangan dibaca よんじ / きゅうじ.",
      "Tanda hubung nomor telepon diucapkan 「の」: 0797-38-5432 → 0797の 38の 5432."
    ]
  },
  5: {
    bab: 5,
    title: "この でんしゃは こうしえんへ いきますか — Membeli Tiket & Naik Kereta",
    scene: "José Santos ingin pergi ke Koshien dengan kereta. Ia menanyakan harga tiket di loket, menanyakan nomor peron kepada petugas stasiun, lalu memastikan kereta yang ia naiki kepada penumpang lain.",
    intro: {
      speaker: "ナレーター (Narator CD)",
      gender: "female",
      tempo: "tenang",
      jp: "第5課、会話。「この でんしゃは こうしえんへ いきますか」。サントスさんは こうしえんへ いきます。えきで きっぷを かいます。それから、でんしゃに のります。よく 聞いて、まねして ください。",
      romaji: "Dai-goka, kaiwa. \"Kono densha wa Koushien e ikimasu ka.\" Santosu-san wa Koushien e ikimasu. Eki de kippu o kaimasu. Sorekara, densha ni norimasu. Yoku kiite, maneshite kudasai.",
      id: "Bab 5, Percakapan: \"Apakah kereta ini pergi ke Koshien?\" Pak Santos pergi ke Koshien. Di stasiun ia membeli tiket, lalu naik kereta. Dengarkan baik-baik, lalu tirukan."
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
      { id: "santos", name: "サントス", label: "José Santos · Pria (Penumpang)", gender: "male", tempo: "normal", avatar: "🧑‍💼" },
      { id: "onna", name: "女の人（おんなのひと）", label: "Petugas Loket · Wanita", gender: "female", tempo: "normal", avatar: "👩‍💼" },
      { id: "ekiin", name: "駅員（えきいん）", label: "Petugas Peron · Pria", gender: "male", tempo: "berwibawa", avatar: "👮" },
      { id: "otoko", name: "男の人（おとこのひと）", label: "Penumpang · Pria", gender: "male", tempo: "lincah", avatar: "👨" }
    ],
    lines: [
      {
        speakerId: "santos",
        speaker: "サントス",
        gender: "male",
        jp: "すみません。こうしえんまで いくらですか。",
        romaji: "Sumimasen. Koushien made ikura desu ka.",
        id: "Permisi. Sampai Koshien berapa harga tiketnya?",
        note: "Pola ～まで いくらですか menanyakan harga sampai tujuan."
      },
      {
        speakerId: "onna",
        speaker: "女の人（おんなのひと）",
        gender: "female",
        jp: "350えんです。",
        romaji: "Sanbyaku-gojuu-en desu.",
        id: "350 yen.",
        note: "350 dibaca さんびゃくごじゅう; ～えん = yen.",
        tts: "さんびゃくごじゅうえんです。"
      },
      {
        speakerId: "santos",
        speaker: "サントス",
        gender: "male",
        jp: "350えんですね。ありがとうございました。",
        romaji: "Sanbyaku-gojuu-en desu ne. Arigatou gozaimashita.",
        id: "350 yen ya. Terima kasih.",
        note: "～ですね dipakai untuk mengonfirmasi informasi yang baru diterima.",
        tts: "さんびゃくごじゅうえんですね。ありがとう ございました。"
      },
      {
        speakerId: "onna",
        speaker: "女の人（おんなのひと）",
        gender: "female",
        jp: "どう いたしまして。",
        romaji: "Dou itashimashite.",
        id: "Sama-sama.",
        note: "どう いたしまして adalah balasan sopan untuk ありがとうございました."
      },
      {
        speakerId: "santos",
        speaker: "サントス",
        gender: "male",
        jp: "すみません。こうしえんは なんばんせんですか。",
        romaji: "Sumimasen. Koushien wa nanbansen desu ka.",
        id: "Permisi. Kereta ke Koshien di peron nomor berapa?",
        note: "なんばんせん = jalur/peron nomor berapa."
      },
      {
        speakerId: "ekiin",
        speaker: "駅員（えきいん）",
        gender: "male",
        jp: "5ばんせんです。",
        romaji: "Gobansen desu.",
        id: "Peron nomor 5.",
        note: "5ばんせん dibaca ごばんせん.",
        tts: "ごばんせんです。"
      },
      {
        speakerId: "santos",
        speaker: "サントス",
        gender: "male",
        jp: "どうも。",
        romaji: "Doumo.",
        id: "Terima kasih.",
        note: "どうも adalah ucapan terima kasih singkat."
      },
      {
        speakerId: "santos",
        speaker: "サントス",
        gender: "male",
        jp: "あのう、この でんしゃは こうしえんへ いきますか。",
        romaji: "Anou, kono densha wa Koushien e ikimasu ka.",
        id: "Permisi, apakah kereta ini pergi ke Koshien?",
        note: "Partikel へ dibaca e dan menandai arah tujuan. この + kata benda = kereta ini."
      },
      {
        speakerId: "otoko",
        speaker: "男の人（おとこのひと）",
        gender: "male",
        jp: "いいえ。つぎの 「ふつう」ですよ。",
        romaji: "Iie. Tsugi no \"futsuu\" desu yo.",
        id: "Bukan. Kereta \"lokal\" berikutnya ya.",
        note: "ふつう (普通) = kereta lokal yang berhenti di setiap stasiun. つぎの = berikutnya."
      },
      {
        speakerId: "santos",
        speaker: "サントス",
        gender: "male",
        jp: "そうですか。どうも。",
        romaji: "Sou desu ka. Doumo.",
        id: "Oh begitu ya. Terima kasih.",
        note: "そうですか dengan intonasi turun berarti \"oh, begitu ya\"."
      }
    ],
    tips: [
      "Partikel 「へ」 sebagai penunjuk arah dibaca 「e」, bukan 「he」: こうしえんへ いきます.",
      "「～まで いくらですか」 = berapa harga sampai ～.",
      "「なんばんせん」 menanyakan nomor jalur/peron kereta.",
      "「ふつう」 = kereta lokal; bandingkan dengan 「きゅうこう」 (ekspres) dan 「とっきゅう」 (ekspres terbatas)."
    ]
  }
};
