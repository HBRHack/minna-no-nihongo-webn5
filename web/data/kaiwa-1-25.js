/* Data Kaiwa (Percakapan) Minna no Nihongo I — Trial Bab 1
 * Struktur kompatibel 3-Layer Voice Router (gender: "male" | "female")
 */
window.MNN_KAIWA = {
  1: {
    bab: 1,
    title: "はじめまして — Perkenalan Pertama",
    scene: "佐藤（さとう）さん bertemu dengan pegawai baru dari Amerika, マイク・ミラーさん, yang diperkenalkan oleh 山田（やまだ）さん di kantor IMC.",
    roles: [
      { id: "sato", name: "佐藤（さとう）", label: "Sato · Wanita", gender: "female", avatar: "👩‍💼" },
      { id: "yamada", name: "山田（やまだ）", label: "Yamada · Pria", gender: "male", avatar: "👨‍💼" },
      { id: "miller", name: "ミラー", label: "Mike Miller · Pria", gender: "male", avatar: "🙋‍♂️" }
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
  }
};
