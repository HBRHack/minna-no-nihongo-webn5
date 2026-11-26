/* Data Kaiwa Minna no Nihongo I — Bab 11–15
 * Struktur kompatibel 3-Layer Voice Router (gender: "male" | "female") + TTS override.
 */
window.MNN_KAIWA = window.MNN_KAIWA || {};

window.MNN_KAIWA[11] = {
  bab: 11,
  title: "これ、おねがいします — Mengirim Paket ke Luar Negeri",
  scene: "Wang berpamitan sebentar kepada penjaga asrama sebelum pergi ke kantor pos. Di loket ia menyerahkan paket ke Australia, lalu menanyakan ongkos serta lama pengiriman lewat pos laut (ふなびん) dan pos udara (こうくうびん).",
  intro: {
    speaker: "ナレーター (Narator CD)",
    gender: "female",
    tempo: "tenang",
    jp: "第11課、会話。「これ、おねがいします」。ワンさんは 郵便局で オーストラリアへ 荷物を 送ります。よく 聞いて、まねして ください。",
    romaji: "Dai-juuikka, Kaiwa. \"Kore, onegaishimasu.\" Wan-san wa yuubinkyoku de Oosutoraria e nimotsu o okurimasu. Yoku kiite, maneshite kudasai.",
    id: "Bab 11, Percakapan: \"Tolong kirimkan ini\". Pak Wang mengirim paket ke Australia di kantor pos. Dengarkan baik-baik, lalu tirukan."
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
    { id: "kanrinin", name: "管理人（かんりにん）", label: "Penjaga Asrama · Pria", gender: "male", tempo: "tenang", avatar: "👨‍🦳" },
    { id: "wan", name: "ワン", label: "Wang · Pria (Mahasiswa Asing)", gender: "male", tempo: "lincah", avatar: "🧑‍💼" },
    { id: "yubin", name: "郵便局員（ゆうびんきょくいん）", label: "Petugas Kantor Pos · Wanita", gender: "female", tempo: "normal", avatar: "👩‍💼" }
  ],
  lines: [
    {
      speakerId: "kanrinin",
      speaker: "管理人（かんりにん）",
      gender: "male",
      jp: "いい てんきですね。おでかけですか。",
      romaji: "Ii tenki desu ne. O-dekake desu ka.",
      id: "Cuacanya cerah ya. Mau keluar?",
      note: "Sapaan basa-basi khas tetangga: いい てんきですね = cuacanya bagus ya. おでかけですか = mau pergi keluar?"
    },
    {
      speakerId: "wan",
      speaker: "ワン",
      gender: "male",
      jp: "ええ。ちょっと ゆうびんきょくまで。",
      romaji: "Ee. Chotto yuubinkyoku made.",
      id: "Ya, sebentar ke kantor pos.",
      note: "ちょっと ～まで = \"sebentar ke ～\". まで menandai batas tujuan, ちょっと membuatnya terdengar ringan."
    },
    {
      speakerId: "kanrinin",
      speaker: "管理人（かんりにん）",
      gender: "male",
      jp: "そうですか。いってらっしゃい。",
      romaji: "Sou desu ka. Itterasshai.",
      id: "Oh begitu. Hati-hati di jalan.",
      note: "いってらっしゃい diucapkan oleh orang yang tinggal kepada orang yang pergi."
    },
    {
      speakerId: "wan",
      speaker: "ワン",
      gender: "male",
      jp: "いってきます。",
      romaji: "Ittekimasu.",
      id: "Saya berangkat.",
      note: "いってきます diucapkan oleh yang pergi, mengandung makna \"saya pergi dan akan kembali\"."
    },
    {
      speakerId: "wan",
      speaker: "ワン",
      gender: "male",
      jp: "これ、オーストラリアまで おねがいします。",
      romaji: "Kore, Oosutoraria made onegaishimasu.",
      id: "Tolong kirimkan ini ke Australia.",
      note: "Pola ～まで おねがいします dipakai untuk meminta pengiriman sampai tujuan."
    },
    {
      speakerId: "yubin",
      speaker: "郵便局員（ゆうびんきょくいん）",
      gender: "female",
      jp: "はい。ふなびんですか、こうくうびんですか。",
      romaji: "Hai. Funabin desu ka, koukuubin desu ka.",
      id: "Baik. Via pos laut (funabin) atau pos udara (koukuubin)?",
      note: "ふなびん = pos laut, こうくうびん = pos udara (airmail). Pilihan ditawarkan dengan pola ～ですか、～ですか."
    },
    {
      speakerId: "wan",
      speaker: "ワン",
      gender: "male",
      jp: "こうくうびんは いくらですか。",
      romaji: "Koukuubin wa ikura desu ka.",
      id: "Kalau pos udara berapa biayanya?",
      note: "いくらですか menanyakan harga; partikel は menandai topik yang sedang dibandingkan."
    },
    {
      speakerId: "yubin",
      speaker: "郵便局員（ゆうびんきょくいん）",
      gender: "female",
      jp: "7,600えんです。",
      romaji: "Nanasen-roppyaku-en desu.",
      id: "7.600 yen.",
      note: "7,600 dibaca ななせんろっぴゃく; perhatikan 600 = ろっぴゃく.",
      tts: "ななせんろっぴゃくえんです。"
    },
    {
      speakerId: "wan",
      speaker: "ワン",
      gender: "male",
      jp: "ふなびんは？",
      romaji: "Funabin wa?",
      id: "Kalau pos laut?",
      note: "Pertanyaan singkat; maksudnya ふなびんは いくらですか."
    },
    {
      speakerId: "yubin",
      speaker: "郵便局員（ゆうびんきょくいん）",
      gender: "female",
      jp: "3,450えんです。",
      romaji: "Sanzen-yonhyaku-gojuu-en desu.",
      id: "3.450 yen.",
      note: "3,450 dibaca さんぜんよんひゃくごじゅう.",
      tts: "さんぜんよんひゃくごじゅうえんです。"
    },
    {
      speakerId: "wan",
      speaker: "ワン",
      gender: "male",
      jp: "どのくらい かかりますか。",
      romaji: "Dono kurai kakarimasu ka.",
      id: "Kira-kira memakan waktu berapa lama?",
      note: "Kata tanya durasi Bab 11: どのくらい かかりますか. かかります = memerlukan (waktu/biaya)."
    },
    {
      speakerId: "yubin",
      speaker: "郵便局員（ゆうびんきょくいん）",
      gender: "female",
      jp: "こうくうびんは 1しゅうかんぐらい、ふなびんは 1かげつ かかります。",
      romaji: "Koukuubin wa isshuukan gurai, funabin wa ikkagetsu kakarimasu.",
      id: "Pos udara sekitar 1 minggu, pos laut memakan waktu 1 bulan.",
      note: "1しゅうかん (1 minggu) dan 1かげつ (1 bulan) adalah satuan durasi dan tidak memakai partikel に. ぐらい = kira-kira.",
      tts: "こうくうびんは いっしゅうかんぐらい、ふなびんは いっかげつ かかります。"
    },
    {
      speakerId: "wan",
      speaker: "ワン",
      gender: "male",
      jp: "じゃ、こうくうびんで おねがいします。きってを 2まい ください。",
      romaji: "Ja, koukuubin de onegaishimasu. Kitte o nimai kudasai.",
      id: "Kalau begitu, tolong lewat pos udara. Saya minta 2 lembar prangko juga.",
      note: "Improvisasi bilangan Bab 11: ～まい untuk benda tipis seperti prangko. こうくうびんで memakai で untuk cara/alat.",
      tts: "じゃ、こうくうびんで おねがいします。きってを にまい ください。"
    }
  ],
  tips: [
    "Kata bantu bilangan diletakkan sebelum kata kerja tanpa partikel: きってを 2まい ください.",
    "Durasi waktu tidak memakai partikel に: 1かげつ かかります, 1しゅうかん かかります.",
    "どのくらい かかりますか = berapa lama / berapa biaya; ～ぐらい berarti \"kira-kira\".",
    "ふなびん = pos laut, こうくうびん = pos udara; ～まい untuk benda tipis, ～にん untuk orang."
  ]
};

window.MNN_KAIWA[12] = {
  bab: 12,
  title: "ぎおんまつりは どうでしたか — Kesan Festival Kyoto",
  scene: "Mike Miller baru pulang dari Kyoto setelah menonton Festival Gion. Ia menyerahkan oleh-oleh kepada penjaga apartemen, lalu menceritakan kesan festival dengan kata sifat bentuk lampau dan membandingkan cuaca Kyoto dengan Osaka.",
  intro: {
    speaker: "ナレーター (Narator CD)",
    gender: "female",
    tempo: "tenang",
    jp: "第12課、会話。「ぎおんまつりは どうでしたか」。京都から 帰った ミラーさんは 管理人さんと 話します。よく 聞いて、まねして ください。",
    romaji: "Dai-juunika, Kaiwa. \"Gion Matsuri wa dou deshita ka.\" Kyouto kara kaetta Miraa-san wa kanrinin-san to hanashimasu. Yoku kiite, maneshite kudasai.",
    id: "Bab 12, Percakapan: \"Bagaimana Festival Gion-nya?\". Pak Miller yang baru pulang dari Kyoto mengobrol dengan penjaga apartemen. Dengarkan baik-baik, lalu tirukan."
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
    { id: "miller", name: "ミラー", label: "Mike Miller · Pria (Baru Pulang)", gender: "male", tempo: "lincah", avatar: "🙋‍♂️" },
    { id: "kanrinin", name: "管理人（かんりにん）", label: "Penjaga Apartemen · Pria Senior", gender: "male", tempo: "tenang", avatar: "👨‍🦳" }
  ],
  lines: [
    {
      speakerId: "miller",
      speaker: "ミラー",
      gender: "male",
      jp: "ただいま。",
      romaji: "Tadaima.",
      id: "Saya pulang.",
      note: "ただいま diucapkan saat pulang ke rumah atau tempat tinggal sendiri."
    },
    {
      speakerId: "kanrinin",
      speaker: "管理人（かんりにん）",
      gender: "male",
      jp: "おかえりなさい。",
      romaji: "Okaerinasai.",
      id: "Selamat datang kembali.",
      note: "おかえりなさい adalah balasan tetap untuk ただいま."
    },
    {
      speakerId: "miller",
      speaker: "ミラー",
      gender: "male",
      jp: "これ、きょうとの おみやげです。",
      romaji: "Kore, Kyouto no o-miyage desu.",
      id: "Ini oleh-oleh dari Kyoto.",
      note: "おみやげ = oleh-oleh. きょうとの おみやげ = oleh-oleh khas Kyoto."
    },
    {
      speakerId: "kanrinin",
      speaker: "管理人（かんりにん）",
      gender: "male",
      jp: "どうも すみません。ぎおんまつりは どうでしたか。",
      romaji: "Doumo sumimasen. Gion Matsuri wa dou deshita ka.",
      id: "Terima kasih banyak (maaf merepotkan). Bagaimana Festival Gion-nya?",
      note: "どうでしたか adalah bentuk lampau dari どうですか, dipakai menanyakan kesan setelah kejadian selesai."
    },
    {
      speakerId: "miller",
      speaker: "ミラー",
      gender: "male",
      jp: "おもしろかったです。とても にぎやかでした。きょうとは おおさかより あつかったです。",
      romaji: "Omoshirokatta desu. Totemo nigiyaka deshita. Kyouto wa Oosaka yori atsukatta desu.",
      id: "Menarik sekali! Sangat ramai. Kyoto lebih panas daripada Osaka.",
      note: "Bentuk lampau sifat-い (～かったです) vs sifat-な (～でした), plus perbandingan A は B より [sifat] — improvisasi perbandingan Bab 12."
    },
    {
      speakerId: "kanrinin",
      speaker: "管理人（かんりにん）",
      gender: "male",
      jp: "ぎおんまつりは きょうとの まつりで いちばん ゆうめいですからね。",
      romaji: "Gion Matsuri wa Kyouto no matsuri de ichiban yuumei desu kara ne.",
      id: "Soalnya Festival Gion memang yang paling terkenal di antara festival di Kyoto ya.",
      note: "Pola superlatif: [kategori] で いちばん ～. からね menambahkan alasan yang sama-sama diketahui."
    },
    {
      speakerId: "miller",
      speaker: "ミラー",
      gender: "male",
      jp: "そうですか。しゃしんを たくさん とりました。これです。",
      romaji: "Sou desu ka. Shashin o takusan torimashita. Kore desu.",
      id: "Oh begitu ya. Saya mengambil banyak foto. Ini dia.",
      note: "たくさん diletakkan sebelum kata kerja: しゃしんを たくさん とりました."
    },
    {
      speakerId: "kanrinin",
      speaker: "管理人（かんりにん）",
      gender: "male",
      jp: "わあ、すごい ひとですね。",
      romaji: "Waa, sugoi hito desu ne.",
      id: "Wah, ramai sekali orangnya ya!",
      note: "すごい ひとですね di sini berarti \"ramai sekali orangnya\", bukan \"orang hebat\"."
    },
    {
      speakerId: "miller",
      speaker: "ミラー",
      gender: "male",
      jp: "ええ。ちょっと つかれました。",
      romaji: "Ee. Chotto tsukaremashita.",
      id: "Iya. Agak capek juga sih.",
      note: "つかれました adalah bentuk lampau dari つかれます, menyatakan kondisi \"sudah capek\"."
    }
  ],
  tips: [
    "Kata sifat-い bentuk lampau: おもしろい → おもしろかったです; negatifnya ～くなかったです.",
    "Kata sifat-な dan kata benda bentuk lampau memakai ～でした: にぎやかでした, 雨でした.",
    "Perbandingan dua hal: A は B より [sifat] です = A lebih [sifat] daripada B.",
    "Superlatif: [kategori] で いちばん [sifat] です = paling [sifat] di antara [kategori].",
    "Ingat pengecualian: いい → よかったです (bukan いくかったです)."
  ]
};

window.MNN_KAIWA[13] = {
  bab: 13,
  title: "べつべつに おねがいします — Makan Siang & Keinginan (～たい)",
  scene: "Saat jam makan siang, Ichiro Yamada mengajak Mike Miller makan masakan Jepang di kedai \"Tsuruya\". Mereka memesan menu masing-masing, lalu Miller meminta pembayaran terpisah di kasir.",
  intro: {
    speaker: "ナレーター (Narator CD)",
    gender: "female",
    tempo: "tenang",
    jp: "第13課、会話。「べつべつに おねがいします」。山田さんと ミラーさんは レストランへ 昼ごはんを 食べに 行きます。よく 聞いて、まねして ください。",
    romaji: "Dai-juusanka, Kaiwa. \"Betsubetsu ni onegaishimasu.\" Yamada-san to Miraa-san wa resutoran e hirugohan o tabe ni ikimasu. Yoku kiite, maneshite kudasai.",
    id: "Bab 13, Percakapan: \"Tolong bayar terpisah\". Pak Yamada dan Pak Miller pergi makan siang ke restoran. Dengarkan baik-baik, lalu tirukan."
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
    { id: "yamada", name: "山田（やまだ）", label: "Yamada Ichiro · Pria (Senior)", gender: "male", tempo: "tenang", avatar: "👨‍💼" },
    { id: "miller", name: "ミラー", label: "Mike Miller · Pria (Rekan Kerja)", gender: "male", tempo: "lincah", avatar: "🙋‍♂️" },
    { id: "tenin", name: "店の人（てんのひと）", label: "Pelayan Restoran · Wanita", gender: "female", tempo: "normal", avatar: "👩‍🍳" }
  ],
  lines: [
    {
      speakerId: "yamada",
      speaker: "山田（やまだ）",
      gender: "male",
      jp: "もう 12じですよ。ひるごはんを たべに いきませんか。",
      romaji: "Mou juuni-ji desu yo. Hirugohan o tabe ni ikimasen ka.",
      id: "Sudah jam 12 lho. Mau pergi makan siang?",
      note: "Pola tujuan pergi Bab 13: [V-ます stem] に いきます (pergi untuk makan). ～ませんか adalah ajakan sopan.",
      tts: "もう じゅうにじですよ。ひるごはんを たべに いきませんか。"
    },
    {
      speakerId: "miller",
      speaker: "ミラー",
      gender: "male",
      jp: "ええ。おなかが すきましたね。",
      romaji: "Ee. Onaka ga sukimashita ne.",
      id: "Ya, perut sudah lapar nih.",
      note: "Improvisasi ringan: おなかが すきました menyatakan kondisi lapar saat ini; bentuk kamusnya すきます."
    },
    {
      speakerId: "yamada",
      speaker: "山田（やまだ）",
      gender: "male",
      jp: "どこへ いきますか。",
      romaji: "Doko e ikimasu ka.",
      id: "Mau pergi ke mana?",
      note: "Partikel へ penunjuk arah dibaca e, bukan he."
    },
    {
      speakerId: "miller",
      speaker: "ミラー",
      gender: "male",
      jp: "そうですね。きょうは にほんりょうりが たべたいですね。",
      romaji: "Sou desu ne. Kyou wa Nihon ryouri ga tabetai desu ne.",
      id: "Hmm, hari ini saya ingin makan masakan Jepang ya.",
      note: "Bentuk keinginan ～たいです: たべます → たべたいです. Objek keinginan dapat memakai が atau を."
    },
    {
      speakerId: "yamada",
      speaker: "山田（やまだ）",
      gender: "male",
      jp: "じゃ、「つるや」へ いきましょう。",
      romaji: "Ja, \"Tsuruya\" e ikimashou.",
      id: "Kalau begitu, ayo ke \"Tsuruya\".",
      note: "～ましょう = \"ayo/mari\", dipakai untuk mengajak lawan bicara melakukan sesuatu bersama."
    },
    {
      speakerId: "tenin",
      speaker: "店の人（てんのひと）",
      gender: "female",
      jp: "ごちゅうもんは？",
      romaji: "Go-chuumon wa?",
      id: "Mau pesan apa?",
      note: "Singkatan sopan dari ごちゅうもんは なんですか, khas pelayan restoran."
    },
    {
      speakerId: "miller",
      speaker: "ミラー",
      gender: "male",
      jp: "わたしは てんぷらていしょく。",
      romaji: "Watashi wa tenpura teishoku.",
      id: "Saya paket tempura.",
      note: "Saat memesan, cukup sebut わたしは + nama menu; です sering dihilangkan agar ringkas."
    },
    {
      speakerId: "yamada",
      speaker: "山田（やまだ）",
      gender: "male",
      jp: "わたしは ぎゅうどん。",
      romaji: "Watashi wa gyuudon.",
      id: "Saya gyudon (nasi daging sapi).",
      note: "ぎゅうどん = nasi mangkuk dengan irisan daging sapi."
    },
    {
      speakerId: "tenin",
      speaker: "店の人（てんのひと）",
      gender: "female",
      jp: "てんぷらていしょくと ぎゅうどんですね。しょうしょう おまち ください。",
      romaji: "Tenpura teishoku to gyuudon desu ne. Shoushou o-machi kudasai.",
      id: "Paket tempura dan gyudon ya. Mohon tunggu sebentar.",
      note: "Partikel と menghubungkan dua kata benda (\"dan\"). しょうしょう おまち ください = mohon tunggu sebentar."
    },
    {
      speakerId: "tenin",
      speaker: "店の人（てんのひと）",
      gender: "female",
      jp: "1,680えんで ございます。",
      romaji: "Sen-roppyaku-hachijuu-en de gozaimasu.",
      id: "Totalnya 1.680 yen.",
      note: "で ございます adalah bentuk sangat sopan dari です, biasa dipakai kasir/restoran. 1,680 = せんろっぴゃくはちじゅう.",
      tts: "せんろっぴゃくはちじゅうえんで ございます。"
    },
    {
      speakerId: "miller",
      speaker: "ミラー",
      gender: "male",
      jp: "すみません。べつべつに おねがいします。",
      romaji: "Sumimasen. Betsubetsu ni onegaishimasu.",
      id: "Permisi. Tolong bayar terpisah ya.",
      note: "べつべつに = secara terpisah/masing-masing; dipakai saat minta tagihan dibayar sendiri-sendiri."
    }
  ],
  tips: [
    "Ingin melakukan sesuatu: buang ます lalu tambah たいです — たべます → たべたいです.",
    "～たい berkonjugasi seperti kata sifat-い: negatif たべたくないです, lampau たべたかったです.",
    "Pergi untuk tujuan tertentu: レストランへ 昼ごはんを 食べに 行きます.",
    "Menginginkan benda memakai が: パソコンが ほしいです.",
    "～たい dan ほしい hanya untuk keinginan pembicara sendiri atau bertanya langsung kepada lawan bicara."
  ]
};

window.MNN_KAIWA[14] = {
  bab: 14,
  title: "みどりちょうまで おねがいします — Memberi Arah di Taksi",
  scene: "マイク・ミラーさん naik taksi menuju みどり町 (Midori-cho), lalu memandu sopir taksi belok kanan di lampu lalu lintas, jalan lurus, hingga berhenti di depan toko bunga menggunakan bentuk-て.",
  intro: {
    speaker: "ナレーター (Narator CD)",
    gender: "female",
    tempo: "tenang",
    jp: "第14課、会話。「みどりちょうまで おねがいします」。ミラーさんは タクシーに 乗って、道を 案内します。よく 聞いて、まねして ください。",
    romaji: "Dai-juuyonka, Kaiwa. \"Midori-chou made onegaishimasu.\" Miraa-san wa takushii ni notte, michi o annai shimasu. Yoku kiite, maneshite kudasai.",
    id: "Bab 14, Percakapan: \"Tolong sampai Midori-cho\". Pak Miller naik taksi dan menunjukkan arah jalan. Dengarkan baik-baik, lalu tirukan."
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
    { id: "miller", name: "ミラー", label: "Mike Miller · Pria", gender: "male", tempo: "lincah", avatar: "🙋‍♂️" },
    { id: "untenshu", name: "運転手（うんてんしゅ）", label: "Sopir Taksi · Pria (Berwibawa)", gender: "male", tempo: "berwibawa", avatar: "🚕" }
  ],
  lines: [
    {
      speakerId: "miller",
      speaker: "ミラー",
      gender: "male",
      jp: "みどりちょうまで おねがいします。",
      romaji: "Midori-chou made onegaishimasu.",
      id: "Tolong antarkan sampai Midori-cho.",
      note: "～まで おねがいします adalah kalimat standar saat naik taksi dan menyebutkan tujuan."
    },
    {
      speakerId: "untenshu",
      speaker: "運転手（うんてんしゅ）",
      gender: "male",
      jp: "はい。かしこまりました。",
      romaji: "Hai. Kashikomarimashita.",
      id: "Baik, siap.",
      note: "かしこまりました adalah bentuk sangat sopan untuk 'baik, dimengerti' yang umum diucapkan sopir atau staf layanan."
    },
    {
      speakerId: "miller",
      speaker: "ミラー",
      gender: "male",
      jp: "すみません。あの しんごうを みぎへ まがって ください。",
      romaji: "Sumimasen. Ano shingou o migi e magatte kudasai.",
      id: "Permisi. Di lampu merah itu tolong belok ke kanan.",
      note: "まがります (belok) → まがって ください (bentuk-て + ください). Titik belok memakai partikel を."
    },
    {
      speakerId: "untenshu",
      speaker: "運転手（うんてんしゅ）",
      gender: "male",
      jp: "みぎですね。",
      romaji: "Migi desu ne.",
      id: "Kanan ya.",
      note: "Partikel ね di akhir dipakai untuk mengonfirmasi instruksi penumpang."
    },
    {
      speakerId: "miller",
      speaker: "ミラー",
      gender: "male",
      jp: "ええ。それから まっすぐ いって ください。",
      romaji: "Ee. Sorekara massugu itte kudasai.",
      id: "Ya. Setelah itu tolong jalan lurus saja.",
      note: "Pengecualian penting: いきます (pergi) → いって ください, bukan いいて."
    },
    {
      speakerId: "untenshu",
      speaker: "運転手（うんてんしゅ）",
      gender: "male",
      jp: "はい、まっすぐですね。",
      romaji: "Hai, massugu desu ne.",
      id: "Baik, lurus terus ya.",
      note: "まっすぐ = lurus ke depan."
    },
    {
      speakerId: "miller",
      speaker: "ミラー",
      gender: "male",
      jp: "あ、あの はなやの まえで とめて ください。",
      romaji: "A, ano hanaya no mae de tomete kudasai.",
      id: "Oh, tolong berhenti di depan toko bunga itu.",
      note: "とめます (menghentikan, Kel. II) → とめて ください. Titik berhenti memakai partikel で."
    },
    {
      speakerId: "untenshu",
      speaker: "運転手（うんてんしゅ）",
      gender: "male",
      jp: "はい。1,800えんです。",
      tts: "はい。せんはっぴゃくえんです。",
      romaji: "Hai. Sen-happyaku-en desu.",
      id: "Baik. Ongkosnya 1.800 yen.",
      note: "800 dibaca はっぴゃく (happyaku), sehingga 1.800 = せんはっぴゃく."
    },
    {
      speakerId: "miller",
      speaker: "ミラー",
      gender: "male",
      jp: "これで おねがいします。",
      romaji: "Kore de onegaishimasu.",
      id: "Pakai uang ini ya.",
      note: "Diucapkan sambil menyerahkan uang pecahan 5.000 yen kepada sopir."
    },
    {
      speakerId: "untenshu",
      speaker: "運転手（うんてんしゅ）",
      gender: "male",
      jp: "3,200えんの おつりです。ありがとう ございました。",
      tts: "さんぜんにひゃくえんの おつりです。ありがとう ございました。",
      romaji: "Sanzen-nihyaku-en no o-tsuri desu. Arigatou gozaimashita.",
      id: "Ini kembaliannya 3.200 yen. Terima kasih.",
      note: "おつり = uang kembalian."
    }
  ],
  tips: [
    "Bentuk-て kelompok I: い・ち・り → って, み・び・に → んで, き → いて, ぎ → いで, し → して.",
    "Pengecualian penting: 行きます → 行って, bukan 行いて.",
    "Tiga komando taksi wajib: まがって ください (belok), まっすぐ いって ください (lurus), とめて ください (berhenti)."
  ]
};

window.MNN_KAIWA[15] = {
  bab: 15,
  title: "ごかぞくは？ — Keluarga & Tempat Tinggal (～て います)",
  scene: "Setelah keluar dari bioskop, Mike Miller dan Reiko Kimura membicarakan film yang baru ditonton, lalu saling bertanya tentang keluarga, tempat tinggal, dan pekerjaan masing-masing memakai pola ～て います.",
  intro: {
    speaker: "ナレーター (Narator CD)",
    gender: "female",
    tempo: "tenang",
    jp: "第15課、会話。「ご家族は？」。映画を 見た あと、ミラーさんと 木村さんは 家族に ついて 話します。よく 聞いて、まねして ください。",
    romaji: "Dai-juugoka, Kaiwa. \"Go-kazoku wa?\" Eiga o mita ato, Miraa-san to Kimura-san wa kazoku ni tsuite hanashimasu. Yoku kiite, maneshite kudasai.",
    id: "Bab 15, Percakapan: \"Keluarga Anda bagaimana?\". Setelah menonton film, Pak Miller dan Bu Kimura mengobrol tentang keluarga masing-masing. Dengarkan baik-baik, lalu tirukan."
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
    { id: "miller", name: "ミラー", label: "Mike Miller · Pria", gender: "male", tempo: "lincah", avatar: "🙋‍♂️" },
    { id: "kimura", name: "木村（きむら）", label: "Kimura Reiko · Wanita", gender: "female", tempo: "tenang", avatar: "👩‍💼" }
  ],
  lines: [
    {
      speakerId: "miller",
      speaker: "ミラー",
      gender: "male",
      jp: "きょうの えいがは よかったですね。",
      romaji: "Kyou no eiga wa yokatta desu ne.",
      id: "Film hari ini bagus sekali ya.",
      note: "よかった adalah bentuk lampau dari いい (bukan いくかった)."
    },
    {
      speakerId: "kimura",
      speaker: "木村（きむら）",
      gender: "female",
      jp: "ええ。とくに あの おとうさんは よかったですね。",
      romaji: "Ee. Tokuni ano o-tousan wa yokatta desu ne.",
      id: "Iya. Terutama tokoh ayahnya bagus sekali ya.",
      note: "とくに = terutama/khususnya; おとうさん di sini merujuk tokoh ayah dalam film."
    },
    {
      speakerId: "miller",
      speaker: "ミラー",
      gender: "male",
      jp: "ええ。わたしは かぞくを おもいだしました。",
      romaji: "Ee. Watashi wa kazoku o omoidashimashita.",
      id: "Iya, saya jadi teringat keluarga di rumah.",
      note: "おもいだします = teringat/mengingat kembali; bentuk lampaunya おもいだしました."
    },
    {
      speakerId: "kimura",
      speaker: "木村（きむら）",
      gender: "female",
      jp: "そうですか。ミラーさんの ごかぞくは？",
      romaji: "Sou desu ka. Miraa-san no go-kazoku wa?",
      id: "Oh begitu. Keluarga Pak Miller bagaimana?",
      note: "ごかぞく adalah bentuk sopan untuk \"keluarga Anda\"; jangan dipakai untuk keluarga sendiri."
    },
    {
      speakerId: "miller",
      speaker: "ミラー",
      gender: "male",
      jp: "りょうしんと あねが ひとり います。",
      romaji: "Ryoushin to ane ga hitori imasu.",
      id: "Ada kedua orang tua dan seorang kakak perempuan.",
      note: "りょうしん = kedua orang tua; あね = kakak perempuan (keluarga sendiri). ひとり dipakai untuk menghitung satu orang."
    },
    {
      speakerId: "kimura",
      speaker: "木村（きむら）",
      gender: "female",
      jp: "どちらに いらっしゃいますか。",
      romaji: "Dochira ni irasshaimasu ka.",
      id: "Mereka tinggal di mana?",
      note: "いらっしゃいます adalah bentuk hormat dari います (ada/berada), dipakai untuk keluarga orang lain."
    },
    {
      speakerId: "miller",
      speaker: "ミラー",
      gender: "male",
      jp: "りょうしんは ニューヨークの ちかくに すんで います。あねは ロンドンで はたらいて います。",
      romaji: "Ryoushin wa Nyuuyooku no chikaku ni sunde imasu. Ane wa Rondon de hataraite imasu.",
      id: "Orang tua saya tinggal di dekat New York. Kakak perempuan saya bekerja di London.",
      note: "Improvisasi dengan kata kerja Bab 15: すんで います (tinggal) dan はたらいて います (bekerja) menyatakan keadaan yang berlangsung."
    },
    {
      speakerId: "miller",
      speaker: "ミラー",
      gender: "male",
      jp: "きむらさんの ごかぞくは？",
      romaji: "Kimura-san no go-kazoku wa?",
      id: "Bagaimana dengan keluarga Bu Kimura?",
      note: "Mengulang pola pertanyaan ～さんの ごかぞくは？ untuk membalas pertanyaan."
    },
    {
      speakerId: "kimura",
      speaker: "木村（きむら）",
      gender: "female",
      jp: "3にんです。ちちは ぎんこういんです。ははは こうこうで えいごを おしえて います。",
      romaji: "San-nin desu. Chichi wa ginkouin desu. Haha wa koukou de eigo o oshiete imasu.",
      id: "Bertiga. Ayah pegawai bank. Ibu mengajar bahasa Inggris di SMA.",
      note: "Menyatakan pekerjaan/keadaan tetap dengan ～て います: おしえて います (mengajar). ちち/はは dipakai untuk keluarga sendiri.",
      tts: "さんにんです。ちちは ぎんこういんです。ははは こうこうで えいごを おしえて います。"
    }
  ],
  tips: [
    "～て います bukan hanya \"sedang melakukan\", tapi juga keadaan/kebiasaan: すんで います, おしえて います, けっこんして います.",
    "Untuk keluarga orang lain pakai bentuk sopan: いらっしゃいます (bukan います) dan ごかぞく (bukan かぞく).",
    "Anggota keluarga sendiri: ちち, はは, あね, あに; untuk keluarga orang lain: おとうさん, おかあさん, おねえさん, おにいさん.",
    "Negatif dari 知って います bukan 知って いません, melainkan 知りません.",
    "Bentuk lampau いい adalah よかったです: えいがは よかったですね."
  ]
};
