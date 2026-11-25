/* ZONA MERAH (Skor 0/4): Bab 2, Bab 5, Bab 7, Bab 20 */
window.ERROR_CHAPTERS.push(
  // ==================== BAB 2 ====================
  {
    num: 2,
    zone: "red",
    oldScore: "0/4",
    title: "Kata Tunjuk Benda, Kepemilikan の, & Pilihan ～か、～か",
    shortBug: "Tertukar これ vs それ, lupa の kepemilikan, dan mengartikan ～か、～か menjadi 'dan'.",
    bugs: [
      { soal: "Soal 5–6", salah: "Tertukar これ (dekat pembicara) dan それ (dekat lawan bicara)", benar: "これ = dekat SAYA · それ = dekat KAMU · あれ = jauh dari KEDUANYA", kenapa: "Bayangkan posisi tangan: yang saya pegang = これ, yang kamu pegang = それ, yang jauh di seberang = あれ." },
      { soal: "Soal 7", salah: "Lupa menambahkan partikel の pada kepemilikan (サントスさんです)", benar: "サントスさんの です (milik Santos)", kenapa: "Kalau tanpa の, artinya 'ini adalah Tuan Santos' (orangnya!), bukan 'milik Tuan Santos'." },
      { soal: "Soal 8", salah: "Mengartikan kalimat pilihan ～か、～か sebagai 'dan'", benar: "～ですか、～ですか artinya 'ATAU'", kenapa: "Saat ada dua kalimat tanya berjajar dengan か, itu pertanyaan pilihan ('Apakah A, atau B?'), bukan penjumlahan ('dan' itu と)." }
    ],
    grammar: [
      {
        num: "POIN 01",
        title: "Jarak Benda: これ・それ・あれ vs この・その・あの",
        formula: "これ／それ／あれ は N です   |   この／その／あの + N は ～です",
        explain: "これ (dekat pembicara/saya), それ (dekat lawan bicara/kamu), あれ (jauh dari keduanya) berdiri sendiri. Sedangkan この・その・あの WAJIB langsung diikuti Kata Benda.",
        examples: [
          { jp: "これは じしょです。", romaji: "Kore wa jisho desu.", id: "Ini (dekat saya) adalah kamus." },
          { jp: "それは なんですか。", romaji: "Sore wa nan desu ka.", id: "Itu (dekat kamu) apa?" },
          { jp: "この かさは わたしのです。", romaji: "Kono kasa wa watashi no desu.", id: "Payung ini adalah milik saya." }
        ],
        trap: "Jangan pernah menulis 'これ ほん' ❌! Kalau ada kata benda di belakangnya, wajib 'この ほん' ✓."
      },
      {
        num: "POIN 02",
        title: "Kepemilikan dengan の (Benda yang Disingkat)",
        formula: "Pemilik + の + (Benda) です  →  Pemilik + の です",
        explain: "Saat bendanya sudah disebut di depan atau jelas dari konteks, kata bendanya boleh dihapus, TETAPI partikel の WAJIB tetap ada!",
        examples: [
          { jp: "この かばんは サントスさんの です。", romaji: "Kono kaban wa Santosu-san no desu.", id: "Tas ini milik Sdr. Santos." },
          { jp: "あれは だれの かぎですか。…ミラーさんの です。", romaji: "Are wa dare no kagi desu ka. ...Miraa-san no desu.", id: "Itu kunci siapa? ...Milik Sdr. Miller." }
        ],
        trap: "Bug Soal 7: Jangan hapus の! 'サントスさんです' = '(Dia) adalah Santos'. 'サントスさんのです' = '(Benda itu) milik Santos'."
      },
      {
        num: "POIN 03",
        title: "Pertanyaan Pilihan (ATAU): S1 か、S2 か",
        formula: "これは A ですか、B ですか。",
        explain: "Menanyakan pilihan di antara dua kemungkinan. Menjawabnya tidak pakai はい／いいえ, langsung sebut pilihannya.",
        examples: [
          { jp: "これは 「9」 ですか、「7」 ですか。…「9」 です。", romaji: "Kore wa '9' desu ka, '7' desu ka. ...'9' desu.", id: "Ini angka '9' ATAU '7'? ...Angka '9'." },
          { jp: "それは ざっしですか、しんぶんですか。", romaji: "Sore wa zasshi desu ka, shinbun desu ka.", id: "Itu majalah ATAU koran?" }
        ],
        trap: "Bug Soal 8: ～か、～か = ATAU (memilih salah satu). 'Dan' itu partikel と (Bab 4)."
      }
    ],
    vocab: [
      { jp: "これ / それ / あれ", romaji: "kore / sore / are", arti: "ini (dekat saya) / itu (dekat kamu) / itu (jauh)" },
      { jp: "この / その / あの (+ N)", romaji: "kono / sono / ano", arti: "~ ini / ~ itu / ~ itu (wajib + benda)" },
      { jp: "ほん / じしょ / ざっし / しんぶん", romaji: "hon / jisho / zasshi / shinbun", arti: "buku / kamus / majalah / koran" },
      { jp: "かぎ / とけい / かさ / かばん", romaji: "kagi / tokei / kasa / kaban", arti: "kunci / jam / payung / tas" },
      { jp: "そうです / そうじゃありません", romaji: "sou desu / sou ja arimasen", arti: "benar begitu / bukan begitu" }
    ],
    questions: [
      {
        id: "b2_1", type: "mcq", badge: "Perbaikan Soal 5",
        prompt: "Kamu sedang memegang buku di tanganmu sendiri, lalu menunjukkannya ke teman: 「（　　）は にほんごの ほんです。」",
        promptRomaji: "( __ ) wa nihongo no hon desu.",
        sub: "Bendanya ada di dekat pembicara (tanganmu sendiri).",
        options: [
          { jp: "これ", romaji: "kore" },
          { jp: "それ", romaji: "sore" },
          { jp: "あれ", romaji: "are" },
          { jp: "この", romaji: "kono" }
        ],
        answer: 0,
        explain: "BENAR: これ! Benda di dekat pembicara dan berdiri sendiri sebelum は → これ. (この salah karena tidak diikuti langsung oleh kata benda)."
      },
      {
        id: "b2_2", type: "mcq", badge: "Perbaikan Soal 6",
        prompt: "Temanmu memegang sebuah kunci. Kamu bertanya kepadanya: 「（　　）は くるまの かぎですか。」",
        promptRomaji: "( __ ) wa kuruma no kagi desu ka.",
        sub: "Bendanya dekat dengan lawan bicara (bukan di tanganmu).",
        options: [
          { jp: "これ", romaji: "kore" },
          { jp: "それ", romaji: "sore" },
          { jp: "あれ", romaji: "are" },
          { jp: "その", romaji: "sono" }
        ],
        answer: 1,
        explain: "BENAR: それ! Benda yang ada di dekat lawan bicara menggunakan それ."
      },
      {
        id: "b2_3", type: "mcq", badge: "Perbaikan Soal 7",
        prompt: "A: 「この かばんは だれの ですか。」 B: 「（　　　　　）。」 (Milik Sdr. Santos)",
        promptRomaji: "Kono kaban wa dare no desu ka.",
        sub: "Jangan lupa partikel penanda 'milik'!",
        options: [
          { jp: "サントスさんです", romaji: "Santosu-san desu" },
          { jp: "サントスさんのです", romaji: "Santosu-san no desu" },
          { jp: "サントスさんにです", romaji: "Santosu-san ni desu" },
          { jp: "サントスさんをです", romaji: "Santosu-san o desu" }
        ],
        answer: 1,
        explain: "BENAR: サントスさんのです! Partikel の wajib tetap ada untuk menyatakan 'milik Sdr. Santos'."
      },
      {
        id: "b2_4", type: "mcq", badge: "Perbaikan Soal 8",
        prompt: "Apa arti yang TEPAT dari: 「これは ボールペンですか、シャープペンシルですか。」?",
        promptRomaji: "Kore wa boorupen desu ka, shaapupenshiru desu ka.",
        sub: "Perhatikan pola ～ですか、～ですか!",
        options: [
          { jp: "Ini adalah pulpen dan pensil mekanik.", romaji: "" },
          { jp: "Apakah ini pulpen atau pensil mekanik?", romaji: "" },
          { jp: "Ini bukan pulpen, tapi pensil mekanik.", romaji: "" },
          { jp: "Pulpen ini milik pensil mekanik.", romaji: "" }
        ],
        answer: 1,
        explain: "BENAR! Dua kalimat tanya dengan か berjajar berarti pilihan 'ATAU' ('Apakah ini pulpen ATAU pensil mekanik?')."
      },
      {
        id: "b2_5", type: "mcq", badge: "この vs これ",
        prompt: "「（　　） とけいは わたしのです。」 (Jam ini milik saya.)",
        promptRomaji: "( __ ) tokei wa watashi no desu.",
        sub: "Di belakang titik-titik langsung ada kata benda とけい (jam).",
        options: [
          { jp: "これ", romaji: "kore" },
          { jp: "この", romaji: "kono" },
          { jp: "それ", romaji: "sore" },
          { jp: "あれ", romaji: "are" }
        ],
        answer: 1,
        explain: "BENAR: この! Karena langsung menempel ke kata benda とけい, harus memakai この (bukan これ)."
      },
      {
        id: "b2_6", type: "input", badge: "Latihan Ketik",
        prompt: "Lengkapi partikel kepemilikan: 「それは わたし （　） じしょです。」 (Itu kamus saya.)",
        promptRomaji: "Sore wa watashi ( _ ) jisho desu.",
        sub: "Ketik 1 partikel (Hiragana atau Romaji).",
        placeholder: "Ketik: の atau no",
        accepted: ["の", "no"],
        displayAnswer: "の (no)",
        explain: "BENAR: の! Menghubungkan pemilik (わたし) dengan benda (じしょ): わたしの じしょ."
      }
    ]
  },

  // ==================== BAB 5 ====================
  {
    num: 5,
    zone: "red",
    oldScore: "0/4",
    title: "Partikel Mobilitas (と・で・へ), らいしゅう, & Pengecualian Tanggal",
    shortBug: "Tertukar と (bersama) vs で (kendaraan), らいしゅう dikira minggu lalu, dan salah baca tanggal 24.",
    bugs: [
      { soal: "Soal 17", salah: "Memakai で untuk 'bersama teman'", benar: "ともだち と いきます (bersama = と)", kenapa: "Partikel untuk 'bersama orang' selalu と! (Pengecualian hanya ひとりで = sendirian)." },
      { soal: "Soal 18", salah: "Memakai に untuk 'naik taksi'", benar: "タクシー で いきます (kendaraan = で)", kenapa: "Alat transportasi (kereta, bus, taksi, pesawat, sepeda) selalu pakai で! (Kecuali jalan kaki: あるいて tanpa で)." },
      { soal: "Soal 19", salah: "Mengartikan らいしゅう sebagai 'minggu lalu'", benar: "らいしゅう (来週) = MINGGU DEPAN · せんしゅう (先週) = minggu lalu", kenapa: "Hafal awalan kuncinya: せん (先) = lalu, こん (今) = ini, らい (来) = depan!" },
      { soal: "Soal 20", salah: "Salah baca tanggal 24", benar: "24日 = にじゅうよっか (nijuu-yokka)", kenapa: "Tanggal 4 = よっか, tanggal 14 = じゅうよっか, tanggal 24 = にじゅうよっか (dan tanggal 20 = はつか)!" }
    ],
    grammar: [
      {
        num: "POIN 01",
        title: "Trio Partikel Perpindahan: と (Bersama) · で (Kendaraan) · へ (Tujuan)",
        formula: "[Orang] と  +  [Kendaraan] で  +  [Tempat] へ  行きます／来ます／帰ります",
        explain: "Kunci Bab 5 cuma 3 partikel ini dan jangan sampai tertukar posisinya: と menempel ke ORANG (bersama siapa), で menempel ke KENDARAAN (naik apa), dan へ dibaca 'e' menempel ke TEMPAT TUJUAN.",
        examples: [
          { jp: "ともだちと タクシーで えきへ いきます。", romaji: "Tomodachi to takushii de eki e ikimasu.", id: "Pergi ke stasiun naik taksi bersama teman." },
          { jp: "かぞくと ひこうきで にほんへ きました。", romaji: "Kazoku to hikouki de Nihon e kimashita.", id: "Datang ke Jepang naik pesawat bersama keluarga." },
          { jp: "ひとりで あるいて うちへ かえります。", romaji: "Hitori de aruite uchi e kaerimasu.", id: "Pulang ke rumah berjalan kaki sendirian." }
        ],
        trap: "Dua pengecualian wajib ingat: (1) Sendirian = ひとりで (pakai で, bukan と). (2) Jalan kaki = あるいて (TANPA で)."
      },
      {
        num: "POIN 02",
        title: "Keluarga Waktu: せん (Lalu) · こん (Ini) · らい (Depan)",
        formula: "せんしゅう (minggu lalu) · こんしゅう (minggu ini) · らいしゅう (minggu depan)",
        explain: "Pola yang sama berlaku untuk bulan (せんげつ・こんげつ・らいげつ) dan mirip untuk tahun (きょねん・ことし・らいねん).",
        examples: [
          { jp: "らいしゅう きょうとへ いきます。", romaji: "Raishuu Kyouto e ikimasu.", id: "Minggu depan saya pergi ke Kyoto." },
          { jp: "せんしゅう とうきょうへ いきました。", romaji: "Senshuu Toukyou e ikimashita.", id: "Minggu lalu saya pergi ke Tokyo." }
        ],
        trap: "Bug Soal 19: らい (来 = datang) artinya 'yang akan datang = DEPAN'! Jadi らいしゅう = minggu depan, らいげつ = bulan depan, らいねん = tahun depan."
      },
      {
        num: "POIN 03",
        title: "Pengecualian Bacaan Tanggal (Wajib Hafal untuk Tes!)",
        formula: "1–10: ついたち・ふつか・みっか・よっか・いつか・むいか・なのか・ようか・ここのか・とおか  |  14: じゅうよっか  |  20: はつか  |  24: にじゅうよっか",
        explain: "Sebagian besar tanggal di atas 10 memakai angka + にち (misal 15日 = じゅうごにち), KECUALI tanggal 14, 20, dan 24 yang selalu jadi soal jebakan!",
        examples: [
          { jp: "たんじょうびは 6がつ 24か（にじゅうよっか）です。", romaji: "Tanjoubi wa rokugatsu nijuuyokka desu.", id: "Ulang tahunnya tanggal 24 Juni." },
          { jp: "はつか（20日）に にほんへ いきます。", romaji: "Hatsuka ni Nihon e ikimasu.", id: "Pergi ke Jepang pada tanggal 20." }
        ],
        trap: "Bug Soal 20: Setiap angka berujung 4 (4, 14, 24) selalu berakhiran よっか (yokka), BUKAN よんにち!"
      }
    ],
    vocab: [
      { jp: "いきます / きます / かえります", romaji: "ikimasu / kimasu / kaerimasu", arti: "pergi / datang / pulang" },
      { jp: "せんしゅう / こんしゅう / らいしゅう", romaji: "senshuu / konshuu / raishuu", arti: "minggu lalu / minggu ini / minggu depan" },
      { jp: "せんげつ / こんげつ / らいげつ", romaji: "sengetsu / kongetsu / raigetsu", arti: "bulan lalu / bulan ini / bulan depan" },
      { jp: "きょねん / ことし / らいねん", romaji: "kyonen / kotoshi / rainen", arti: "tahun lalu / tahun ini / tahun depan" },
      { jp: "じゅうよっか / はつか / にじゅうよっか", romaji: "juuyokka / hatsuka / nijuuyokka", arti: "tanggal 14 / tanggal 20 / tanggal 24" }
    ],
    questions: [
      {
        id: "b5_1", type: "mcq", badge: "Perbaikan Soal 17",
        prompt: "ともだち （　　） きょうとへ いきます。 (Pergi ke Kyoto BERSAMA teman.)",
        promptRomaji: "Tomodachi ( _ ) Kyouto e ikimasu.",
        sub: "Partikel untuk 'bersama seseorang' adalah...",
        options: [
          { jp: "で", romaji: "de" },
          { jp: "と", romaji: "to" },
          { jp: "に", romaji: "ni" },
          { jp: "へ", romaji: "e" }
        ],
        answer: 1,
        explain: "BENAR: と! 'Bersama teman' = ともだちと. Jangan pakai で (で dipakai untuk kendaraan atau ひとりで)."
      },
      {
        id: "b5_2", type: "mcq", badge: "Perbaikan Soal 18",
        prompt: "タクシー （　　） びょういんへ いきました。 (Pergi ke rumah sakit NAIK taksi.)",
        promptRomaji: "Takushii ( _ ) byouin e ikimashita.",
        sub: "Partikel untuk alat transportasi / kendaraan adalah...",
        options: [
          { jp: "に", romaji: "ni" },
          { jp: "を", romaji: "o" },
          { jp: "で", romaji: "de" },
          { jp: "と", romaji: "to" }
        ],
        answer: 2,
        explain: "BENAR: で! Semua alat transportasi (タクシーで, でんしゃで, バスで, ひこうきで) menggunakan partikel で."
      },
      {
        id: "b5_3", type: "mcq", badge: "Perbaikan Soal 19",
        prompt: "Apa arti dari 「らいしゅう にほんへ いきます」?",
        promptRomaji: "Raishuu Nihon e ikimasu.",
        sub: "Ingat awalan らい (来) = akan datang!",
        options: [
          { jp: "Minggu lalu pergi ke Jepang.", romaji: "" },
          { jp: "Minggu ini pergi ke Jepang.", romaji: "" },
          { jp: "Minggu depan pergi ke Jepang.", romaji: "" },
          { jp: "Bulan depan pergi ke Jepang.", romaji: "" }
        ],
        answer: 2,
        explain: "BENAR: Minggu depan! らいしゅう = minggu depan, せんしゅう = minggu lalu, こんしゅう = minggu ini."
      },
      {
        id: "b5_4", type: "mcq", badge: "Perbaikan Soal 20",
        prompt: "Bagaimana cara membaca tanggal 「24日」 yang BENAR?",
        promptRomaji: "Tanggal 24 = ?",
        sub: "Ingat aturan pengecualian angka berujung 4!",
        options: [
          { jp: "にじゅうよんにち", romaji: "nijuu-yon-nichi" },
          { jp: "にじゅうしにち", romaji: "nijuu-shi-nichi" },
          { jp: "にじゅうよっか", romaji: "nijuu-yokka" },
          { jp: "はつかよっか", romaji: "hatsuka-yokka" }
        ],
        answer: 2,
        explain: "BENAR: にじゅうよっか (nijuuyokka)! Tanggal 4 = よっか, tanggal 14 = じゅうよっか, tanggal 24 = にじゅうよっか."
      },
      {
        id: "b5_5", type: "mcq", badge: "Jebakan ひとりで & あるいて",
        prompt: "「（　　　　　） がっこうへ いきます。」 (Pergi ke sekolah berjalan kaki sendirian.)",
        promptRomaji: "( _____ ) gakkou e ikimasu.",
        sub: "Cek pengecualian untuk 'sendirian' dan 'jalan kaki'!",
        options: [
          { jp: "ひとりと あるいてで", romaji: "hitori to aruite de" },
          { jp: "ひとりで あるいて", romaji: "hitori de aruite" },
          { jp: "ひとりで あるいてで", romaji: "hitori de aruite de" },
          { jp: "ひとりと あるいて", romaji: "hitori to aruite" }
        ],
        answer: 1,
        explain: "BENAR: ひとりで あるいて! Sendirian pakai で (ひとりで), dan berjalan kaki (あるいて) TIDAK boleh ditambah で."
      },
      {
        id: "b5_6", type: "input", badge: "Latihan Ketik",
        prompt: "Ketik bacaan bahasa Jepang untuk tanggal 「20日」 (tanggal 20)!",
        promptRomaji: "Tanggal 20 = ?",
        sub: "Boleh ketik Hiragana atau Romaji.",
        placeholder: "Ketik: はつか atau hatsuka",
        accepted: ["はつか", "hatsuka"],
        displayAnswer: "はつか (hatsuka)",
        explain: "BENAR: はつか (hatsuka)! Ini pengecualian yang paling sering keluar bareng にじゅうよっか."
      }
    ]
  },

  // ==================== BAB 7 ====================
  {
    num: 7,
    zone: "red",
    oldScore: "0/4",
    title: "Alat (で), Memberi-Menerima Dasar (あげます・もらいます), & もう／まだ",
    shortBug: "Salah partikel alat で, terbalik あげます vs もらいます, salah partikel に saat menerima, dan keliru もう vs まだ.",
    bugs: [
      { soal: "Soal 25", salah: "Salah memilih partikel alat saat memotong dengan pisau", benar: "ナイフ で きります (alat/bahasa = で)", kenapa: "Sama seperti kendaraan di Bab 5, ALAT (pisau, sumpit, pulpen, bahasa Jepang) selalu memakai で!" },
      { soal: "Soal 26", salah: "Mengartikan あげました menjadi 'menerima'", benar: "あげます = MEMBERI · もらいます = MENERIMA", kenapa: "Ingat: A-ge-masu = Arah keluar (kasih). Mo-ra-i-masu = Mau/dapat masuk (terima)." },
      { soal: "Soal 27", salah: "Salah memilih partikel saat menerima dari teman", benar: "ともだち に (atau から) もらいました", kenapa: "Baik saat MEMBERI ke seseorang maupun MENERIMA dari seseorang, partikel standar untuk orangnya adalah に! (から juga boleh saat menerima)." },
      { soal: "Soal 28", salah: "Menjawab pertanyaan もう (sudah) secara terbalik dengan まだ", benar: "Sudah = はい、もう V-ました · Belum = いいえ、まだです", kenapa: "もう = SUDAH, まだ = BELUM. Jangan tertukar keduanya!" }
    ],
    grammar: [
      {
        num: "POIN 01",
        title: "Partikel で untuk Alat, Sarana, & Bahasa",
        formula: "[Alat / Bahasa] で  [Objek] を  V-ます",
        explain: "Semua benda yang dipakai sebagai alat melakukan aksi (sumpit, pisau, HP, pensil) maupun bahasa (bahasa Jepang, Inggris) menggunakan partikel で.",
        examples: [
          { jp: "ナイフで りんごを きります。", romaji: "Naifu de ringo o kirimasu.", id: "Memotong apel dengan pisau." },
          { jp: "はしで ごはんを たべます。", romaji: "Hashi de gohan o tabemasu.", id: "Makan nasi dengan sumpit." },
          { jp: "にほんごで レポートを かきます。", romaji: "Nihongo de repooto o kakimasu.", id: "Menulis laporan dalam bahasa Jepang." }
        ],
        trap: "Bug Soal 25: Jangan pakai に atau を untuk alat! 'Dengan pisau' = ナイフで."
      },
      {
        num: "POIN 02",
        title: "Pasangan Memberi vs Menerima (Arah Transaksi!)",
        formula: "MEMBERI: [Saya] は [Penerima] に [Benda] を あげます / かします / おしえます\nMENERIMA: [Saya] は [Pemberi] に(から) [Benda] を もらいます / かります / ならいます",
        explain: "Kunci anti-terbalik: lihat subjek di depan は! Kalau subjek = SAYA yang ngasih keluar → あげます (memberi), かします (meminjamkan), おしえます (mengajar). Kalau subjek = SAYA yang nerima masuk → もらいます (menerima), かります (meminjam), ならいます (belajar dari orang).",
        examples: [
          { jp: "わたしは ははに はなを あげました。", romaji: "Watashi wa haha ni hana o agemashita.", id: "Saya MEMBERI bunga kepada ibu." },
          { jp: "わたしは ともだちに プレゼントを もらいました。", romaji: "Watashi wa tomodachi ni purezento o moraimashita.", id: "Saya MENERIMA hadiah dari teman." },
          { jp: "ぎんこうから おかねを かりました。", romaji: "Ginkou kara okane o karimashita.", id: "Saya meminjam uang dari bank (institusi pakai から)." }
        ],
        trap: "Bug Soal 26–27: Di kalimat もらいました, partikel に menempel ke si PEMBERI (artinya 'dari'!)."
      },
      {
        num: "POIN 03",
        title: "もう (Sudah) vs まだ (Belum)",
        formula: "もう V-ましたか？  →  Ya: はい、もう V-ました。  |  Belum: いいえ、まだです。",
        explain: "もう menanyakan/menyatakan aksi sudah selesai. まだ menyatakan aksi belum dilakukan sampai sekarang.",
        examples: [
          { jp: "もう ひるごはんを たべましたか。…はい、もう たべました。", romaji: "Mou hirugohan o tabemashita ka. ...Hai, mou tabemashita.", id: "Apakah sudah makan siang? ...Ya, sudah makan." },
          { jp: "もう レポートを だしましたか。…いいえ、まだです。", romaji: "Mou repooto o dashimashita ka. ...Iie, mada desu.", id: "Sudah mengumpulkan laporan? ...Belum." }
        ],
        trap: "Bug Soal 28: Jika jawabannya 'belum', pakai 'いいえ、まだです', BUKAN 'いいえ、たべませんでした'."
      }
    ],
    vocab: [
      { jp: "あげます / もらいます", romaji: "agemasu / moraimasu", arti: "memberi / menerima" },
      { jp: "かします / かります", romaji: "kashimasu / karimasu", arti: "meminjamkan / meminjam" },
      { jp: "おしえます / ならいます", romaji: "oshiemasu / naraimasu", arti: "mengajar / belajar (dari orang)" },
      { jp: "きります / おくります", romaji: "kirimasu / okurimasu", arti: "memotong / mengirim" },
      { jp: "もう / まだ", romaji: "mou / mada", arti: "sudah / belum" }
    ],
    questions: [
      {
        id: "b7_1", type: "mcq", badge: "Perbaikan Soal 25",
        prompt: "ナイフ （　　） パンを きります。 (Memotong roti dengan pisau.)",
        promptRomaji: "Naifu ( _ ) pan o kirimasu.",
        sub: "Pisau adalah ALAT untuk memotong.",
        options: [
          { jp: "に", romaji: "ni" },
          { jp: "で", romaji: "de" },
          { jp: "を", romaji: "o" },
          { jp: "と", romaji: "to" }
        ],
        answer: 1,
        explain: "BENAR: で! Alat untuk melakukan tindakan selalu menggunakan partikel で (ナイフで)."
      },
      {
        id: "b7_2", type: "mcq", badge: "Perbaikan Soal 26",
        prompt: "Apa arti yang TEPAT dari: 「わたしは きむらさんに はなを あげました。」?",
        promptRomaji: "Watashi wa Kimura-san ni hana o agemashita.",
        sub: "Cek arah kata kerja あげました!",
        options: [
          { jp: "Saya menerima bunga dari Sdr. Kimura.", romaji: "" },
          { jp: "Saya memberi bunga kepada Sdr. Kimura.", romaji: "" },
          { jp: "Sdr. Kimura meminjamkan bunga ke saya.", romaji: "" },
          { jp: "Saya membeli bunga bersama Sdr. Kimura.", romaji: "" }
        ],
        answer: 1,
        explain: "BENAR: Saya MEMBERI bunga kepada Sdr. Kimura! あげます = memberi, もらいます = menerima."
      },
      {
        id: "b7_3", type: "mcq", badge: "Perbaikan Soal 27",
        prompt: "わたしは ともだち （　　） チョコレートを もらいました。 (Saya menerima cokelat dari teman.)",
        promptRomaji: "Watashi wa tomodachi ( _ ) chokoreeto o moraimashita.",
        sub: "Partikel standar untuk orang yang memberi saat kita pakai もらいました?",
        options: [
          { jp: "を", romaji: "o" },
          { jp: "で", romaji: "de" },
          { jp: "に", romaji: "ni" },
          { jp: "へ", romaji: "e" }
        ],
        answer: 2,
        explain: "BENAR: に! (ともだちに もらいました = menerima dari teman). Partikel から juga bisa, tapi に adalah pasangan utama dengan orang."
      },
      {
        id: "b7_4", type: "mcq", badge: "Perbaikan Soal 28",
        prompt: "A: 「もう しゅくだいを しましたか。」 (Sudah mengerjakan PR?) — B ingin menjawab: 'Belum.'",
        promptRomaji: "A: Mou shukudai o shimashita ka.",
        sub: "Pilih jawaban 'Belum' yang paling tepat!",
        options: [
          { jp: "はい、まだです。", romaji: "Hai, mada desu." },
          { jp: "いいえ、もうです。", romaji: "Iie, mou desu." },
          { jp: "いいえ、まだです。", romaji: "Iie, mada desu." },
          { jp: "はい、もう しました。", romaji: "Hai, mou shimashita." }
        ],
        answer: 2,
        explain: "BENAR: いいえ、まだです! もう = sudah, まだ = belum."
      },
      {
        id: "b7_5", type: "mcq", badge: "Pasangan Meminjam",
        prompt: "わたしは ミラーさんに CDを （　　　　）。 (Saya MEMINJAM CD dari Sdr. Miller.)",
        promptRomaji: "Watashi wa Miraa-san ni CD o ( _____ ).",
        sub: "Arah barang masuk ke SAYA (meminjam, bukan meminjamkan)!",
        options: [
          { jp: "かしました", romaji: "kashimashita" },
          { jp: "かりました", romaji: "karimashita" },
          { jp: "あげました", romaji: "agemashita" },
          { jp: "おしえました", romaji: "oshiemashita" }
        ],
        answer: 1,
        explain: "BENAR: かりました (meminjam)! かします = meminjamkan (keluar), かります = meminjam (masuk)."
      },
      {
        id: "b7_6", type: "input", badge: "Latihan Ketik",
        prompt: "Lengkapi: 「「ありがとう」は えいご （　） なんですか。」 ('Arigatou' dalam bahasa Inggris apa?)",
        promptRomaji: "'Arigatou' wa eigo ( _ ) nan desu ka.",
        sub: "Ketik 1 partikel untuk bahasa (Hiragana atau Romaji).",
        placeholder: "Ketik: で atau de",
        accepted: ["で", "de"],
        displayAnswer: "で (de)",
        explain: "BENAR: で! Bahasa sebagai sarana penyampaian menggunakan で (えいごで, にほんごで)."
      }
    ]
  },

  // ==================== BAB 20 ====================
  {
    num: 20,
    zone: "red",
    oldScore: "0/4",
    title: "Bentuk Biasa / Kasual (普通形 / Plain Form)",
    shortBug: "Salah ubah いきません→いきない, たかいです→たかくない, tertukar うん vs ううん, dan salah べんきょうしました→べんきょうした.",
    bugs: [
      { soal: "Soal 77", salah: "Mengubah いきません menjadi いきない", benar: "いきません → いかない (Bentuk -Nai!)", kenapa: "Bentuk Biasa Negatif kata kerja adalah Bentuk -Nai (Bab 17): いきます (Kel. I) → き jadi か + ない = いかない." },
      { soal: "Soal 78", salah: "Mengubah たかいです (positif!) menjadi たかくない (negatif!)", benar: "たかいです → たかい (CUKUP BUANG です!)", kenapa: "Jangan ubah positif jadi negatif! Untuk KS-い positif, bentuk biasanya tinggal coret です: たかいです → たかい." },
      { soal: "Soal 79", salah: "Tertukar antara うん dan ううん", benar: "うん (pendek, 1 u) = YA · ううん (panjang, 2 u) = TIDAK", kenapa: "Ingat bunyinya: 'un' (angguk cepat = YA) vs 'uun' (geleng panjang = TIDAK)." },
      { soal: "Soal 80", salah: "Salah mengubah べんきょうしました ke Bentuk Biasa Lampau", benar: "べんきょうしました → べんきょうした (Bentuk -Ta!)", kenapa: "Bentuk Biasa Lampau kata kerja adalah Bentuk -Ta (Bab 19): しました → した, jadi べんきょうしました → べんきょうした." }
    ],
    grammar: [
      {
        num: "POIN 01",
        title: "Peta Lengkap 4 Bentuk Biasa (Sopan → Biasa)",
        formula: "Kata Kerja: ます→Kamus · ません→ない · ました→た · ませんでした→なかった",
        explain: "Bentuk Biasa tidak pernah mengubah makna positif/negatif atau lampau/non-lampau — hanya menurunkan tingkat kesopanan! Pastikan kamu tidak terpeleset mengubah kalimat positif jadi negatif seperti di Soal 78.",
        examples: [
          { jp: "いきます → いく  |  いきません → いかない", romaji: "ikimasu → iku  |  ikimasen → ikanai", id: "pergi | tidak pergi" },
          { jp: "べんきょうしました → べんきょうした  |  べんきょうしませんでした → べんきょうしなかった", romaji: "benkyou shimashita → benkyou shita", id: "sudah belajar | tidak belajar (lampau)" },
          { jp: "たかいです → たかい  |  たかくないです → たかくない", romaji: "takai desu → takai  |  takakunai desu → takakunai", id: "mahal | tidak mahal (cukup buang です!)" },
          { jp: "ひまです → ひまだ  |  あめでした → あめだった  |  あめじゃありません → あめじゃない", romaji: "hima da | ame datta | ame ja nai", id: "Kata Sifat-な & Kata Benda: です→だ, でした→だった, じゃありません→じゃない" }
        ],
        trap: "Bug Soal 78 & 80: Cek dulu kalimat aslinya (+) atau (-), lampau atau bukan, SEBELUM mengubahnya!"
      },
      {
        num: "POIN 02",
        title: "Percakapan Kasual: うん vs ううん & Kalimat Tanya Tanpa か",
        formula: "はい → うん (YA)  |  いいえ → ううん (TIDAK)  |  のみますか？ → のむ？ (intonasi naik)",
        explain: "Dalam obrolan santai dengan teman akrab/keluarga: partikel tanya か dihilangkan (ganti intonasi naik), だ dihilangkan pada kalimat tanya KS-な/N (`あした ひま？`), dan は／を sering tidak diucapkan.",
        examples: [
          { jp: "コーヒー のむ？ …うん、のむ。 / …ううん、のまない。", romaji: "Koohii nomu? ...Un, nomu. / ...Uun, nomanai.", id: "Minum kopi? ...Ya, minum. / ...Enggak, tidak minum." },
          { jp: "あした ひま？ …ううん、ひまじゃない。", romaji: "Ashita hima? ...Uun, hima ja nai.", id: "Besok senggang? ...Enggak, tidak senggang." }
        ],
        trap: "Bug Soal 79: Hitung huruf う-nya! Satu う (うん) = YA. Dua う (ううん) = TIDAK."
      }
    ],
    vocab: [
      { jp: "うん / ううん", romaji: "un / uun", arti: "ya (kasual) / tidak (kasual)" },
      { jp: "だ / じゃない / だった / じゃなかった", romaji: "da / ja nai / datta / ja nakatta", arti: "bentuk biasa dari です / じゃありません / でした / じゃありませんでした" },
      { jp: "いく / いかない / いった / いかなかった", romaji: "iku / ikanai / itta / ikanakatta", arti: "4 bentuk biasa dari いきます" },
      { jp: "する / しない / した / しなかった", romaji: "suru / shinai / shita / shinakatta", arti: "4 bentuk biasa dari します" }
    ],
    questions: [
      {
        id: "b20_1", type: "mcq", badge: "Perbaikan Soal 77",
        prompt: "Ubah 「いきません」 (tidak pergi) ke Bentuk Biasa!",
        promptRomaji: "ikimasen → ?",
        sub: "Negatif non-lampau biasa = Bentuk -Nai!",
        options: [
          { jp: "いきない", romaji: "ikinai" },
          { jp: "いかない", romaji: "ikanai" },
          { jp: "いくない", romaji: "ikunai" },
          { jp: "いった", romaji: "itta" }
        ],
        answer: 1,
        explain: "BENAR: いかない! いきます Kelompok I → き berubah jadi か + ない = いかない."
      },
      {
        id: "b20_2", type: "mcq", badge: "Perbaikan Soal 78",
        prompt: "Ubah 「たかいです」 (mahal — POSITIF) ke Bentuk Biasa!",
        promptRomaji: "takai desu → ?",
        sub: "Hati-hati jangan ubah jadi negatif! Cukup ubah kesopanannya.",
        options: [
          { jp: "たかくない", romaji: "takakunai" },
          { jp: "たかいだ", romaji: "takai da" },
          { jp: "たかい", romaji: "takai" },
          { jp: "たかかった", romaji: "takakatta" }
        ],
        answer: 2,
        explain: "BENAR: たかい! Untuk Kata Sifat-い, cukup buang です saja (jangan ditambah だ, dan jangan diubah jadi negatif!)."
      },
      {
        id: "b20_3", type: "mcq", badge: "Perbaikan Soal 79",
        prompt: "A: 「あした くる？」 (Besok datang?) — B ingin menjawab santai: 'Tidak, tidak datang.'",
        promptRomaji: "A: Ashita kuru?",
        sub: "Ingat: 1 う = YA, 2 う = TIDAK!",
        options: [
          { jp: "うん、こない。", romaji: "Un, konai." },
          { jp: "ううん、こない。", romaji: "Uun, konai." },
          { jp: "ううん、くる。", romaji: "Uun, kuru." },
          { jp: "うん、きない。", romaji: "Un, kinai." }
        ],
        answer: 1,
        explain: "BENAR: ううん、こない! ううん (2 huruf う) = Tidak, dan bentuk -Nai dari きます adalah こない."
      },
      {
        id: "b20_4", type: "mcq", badge: "Perbaikan Soal 80",
        prompt: "Ubah 「きのう にほんごを べんきょうしました」 ke Bentuk Biasa!",
        promptRomaji: "benkyou shimashita → ?",
        sub: "Lampau positif kata kerja → Bentuk -Ta!",
        options: [
          { jp: "べんきょうする", romaji: "benkyou suru" },
          { jp: "べんきょうしない", romaji: "benkyou shinai" },
          { jp: "べんきょうした", romaji: "benkyou shita" },
          { jp: "べんきょうして", romaji: "benkyou shite" }
        ],
        answer: 2,
        explain: "BENAR: べんきょうした! しました dalam bentuk biasa lampau selalu berubah menjadi した."
      },
      {
        id: "b20_5", type: "mcq", badge: "Kata Benda & KS-な Lampau",
        prompt: "Ubah 「きのうは あめでした」 (Kemarin hujan) ke Bentuk Biasa!",
        promptRomaji: "ame deshita → ?",
        sub: "Kata benda lampau positif: でした berubah jadi...",
        options: [
          { jp: "あめだ", romaji: "ame da" },
          { jp: "あめだった", romaji: "ame datta" },
          { jp: "あめじゃない", romaji: "ame ja nai" },
          { jp: "あめじゃなかった", romaji: "ame ja nakatta" }
        ],
        answer: 1,
        explain: "BENAR: あめだった! でした → だった (lampau positif), sedangkan です → だ (non-lampau positif)."
      },
      {
        id: "b20_6", type: "input", badge: "Latihan Ketik",
        prompt: "Ketik Bentuk Biasa dari 「たべませんでした」 (tidak makan [lampau])!",
        promptRomaji: "tabemasen deshita → ?",
        sub: "Ambil Bentuk -Nai (たべない), lalu ubah lampau seperti KS-い (い → かった). Boleh Hiragana atau Romaji.",
        placeholder: "Ketik: たべなかった atau tabenakatta",
        accepted: ["たべなかった", "tabenakatta"],
        displayAnswer: "たべなかった (tabenakatta)",
        explain: "BENAR: たべなかった (tabenakatta)! Negatif lampau biasa selalu berakhiran ～なかった."
      }
    ]
  }
);
