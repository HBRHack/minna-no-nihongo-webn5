/* ZONA KUNING BAGIAN B (Skor 2/4): Bab 21, 22, 23, 24, 25 */
window.ERROR_CHAPTERS.push(
  // ==================== BAB 21 ====================
  {
    num: 21,
    zone: "amber",
    oldScore: "2/4",
    title: "Pendapat (と思います), Kutipan (と言いました), & Kosakata いけん",
    shortBug: "Terpeleset mengartikan らいしゅう くると いいました (Soal 82) dan tidak mengenali kosakata いけん = pendapat (Soal 84).",
    bugs: [
      { soal: "Soal 82", salah: "Menerjemahkan らいしゅう くると いいました menjadi 'datang minggu lalu'", benar: "'Bilang akan datang MINGGU DEPAN' (らいしゅう = minggu depan, ～と いいました = berkata bahwa...)", kenapa: "Ada dua hal digabung di soal ini: らいしゅう (minggu depan, bukan minggu lalu!) + と いいました (mengutip ucapan orang)." },
      { soal: "Soal 84", salah: "Mengira いけん (意見) artinya 'alasan'", benar: "いけん = PENDAPAT (opini)", kenapa: "いけんを いいます = menyampaikan pendapat. (Alasan itu りゆう)." }
    ],
    grammar: [
      {
        num: "POIN 01",
        title: "Pendapat (～と おもいます) vs Kutipan Ucapan (～と いいました)",
        formula: "[Bentuk Biasa] + と おもいます (Saya rasa...)\n[Bentuk Biasa] + と いいました (Dia berkata bahwa...)",
        explain: "Keduanya memakai Bentuk Biasa (Bab 20) di depan と! Hati-hati: untuk Kata Benda & Kata Sifat-な positif, WAJIB pasang だ sebelum と (`べんりだ と おもいます`).",
        examples: [
          { jp: "あした あめが ふると おもいます。", romaji: "Ashita ame ga furu to omoimasu.", id: "Saya rasa besok akan turun hujan." },
          { jp: "ミラーさんは らいしゅう くると いいました。", romaji: "Miraa-san wa raishuu kuru to iimashita.", id: "Sdr. Miller berkata bahwa dia akan datang minggu depan." },
          { jp: "にほんは ぶっかが たかいと おもいます。", romaji: "Nihon wa bukka ga takai to omoimasu.", id: "Menurut saya, biaya hidup di Jepang mahal." }
        ],
        trap: "Bug Soal 82: Jangan bingung tense! 'いいました' lampau karena dia BILANGNYA tadi/kemarin, sedangkan 'くる' di dalam kutipan tetap berarti AKAN datang (minggu depan)."
      },
      {
        num: "POIN 02",
        title: "Meminta Persetujuan: [Bentuk Biasa] でしょう？",
        formula: "V / KS-い + でしょう？   |   N / KS-な (TANPA だ!) + でしょう？",
        explain: "Dipakai saat mengonfirmasi sesuatu yang kita duga lawan bicara juga setuju ('...kan?'). Berbeda dengan と, sebelum でしょう huruf だ DIHILANGKAN!",
        examples: [
          { jp: "あした パーティーに いくでしょう？", romaji: "Ashita paatii ni iku deshou?", id: "Besok pergi ke pesta, kan?" },
          { jp: "この まちは しずかでしょう？", romaji: "Kono machi wa shizuka deshou?", id: "Kota ini tenang, kan? (tanpa だ!)" }
        ],
        trap: "Ingat bedanya: べんり だ と おもいます (pakai だ) vs べんり でしょう？ (tanpa だ)."
      }
    ],
    vocab: [
      { jp: "おもいます / いいます", romaji: "omoimasu / iimasu", arti: "berpikir, merasa / berkata" },
      { jp: "いけん", romaji: "iken", arti: "pendapat / opini (Bug Soal 84!)" },
      { jp: "かちます / まけます", romaji: "kachimasu / makemasu", arti: "menang / kalah" },
      { jp: "やくに たちます", romaji: "yaku ni tachimasu", arti: "bermanfaat / berguna" },
      { jp: "たぶん / きっと / ほんとうに", romaji: "tabun / kitto / hontou ni", arti: "mungkin / pasti / sungguh" }
    ],
    questions: [
      {
        id: "b21_1", type: "mcq", badge: "Perbaikan Soal 82",
        prompt: "Apa arti TEPAT dari: 「ミラーさんは らいしゅう くると いいました。」?",
        promptRomaji: "Miraa-san wa raishuu kuru to iimashita.",
        sub: "Cek arti らいしゅう dan ～と いいました!",
        options: [
          { jp: "Sdr. Miller datang minggu lalu.", romaji: "" },
          { jp: "Sdr. Miller bilang akan datang minggu depan.", romaji: "" },
          { jp: "Saya rasa Sdr. Miller datang minggu depan.", romaji: "" },
          { jp: "Sdr. Miller tidak akan datang minggu depan.", romaji: "" }
        ],
        answer: 1,
        explain: "BENAR! らいしゅう = minggu depan, くる = akan datang, と いいました = berkata bahwa..."
      },
      {
        id: "b21_2", type: "mcq", badge: "Perbaikan Soal 84",
        prompt: "Apa arti kosakata 「いけん」 (意見) pada 「いけんを いいます」?",
        promptRomaji: "iken o iimasu",
        sub: "Jangan tertukar dengan 'alasan'!",
        options: [
          { jp: "alasan", romaji: "" },
          { jp: "pendapat / opini", romaji: "" },
          { jp: "berita", romaji: "" },
          { jp: "pertanyaan", romaji: "" }
        ],
        answer: 1,
        explain: "BENAR: いけん = pendapat / opini! いけんを いいます = menyampaikan pendapat."
      },
      {
        id: "b21_3", type: "mcq", badge: "Aturan だ + と",
        prompt: "この じしょは （　　　　） と おもいます。 (Saya rasa kamus ini praktis. — べんり［な］)",
        promptRomaji: "Kono jisho wa ( ____ ) to omoimasu.",
        sub: "KS-な sebelum と おもいます wajib pakai apa?",
        options: [
          { jp: "べんりな", romaji: "benri na" },
          { jp: "べんりだ", romaji: "benri da" },
          { jp: "べんりです", romaji: "benri desu" },
          { jp: "べんり", romaji: "benri" }
        ],
        answer: 1,
        explain: "BENAR: べんりだと おもいます! Bentuk biasa positif untuk KS-な & Kata Benda sebelum と wajib memakai だ."
      },
      {
        id: "b21_4", type: "mcq", badge: "Pendapat Negatif",
        prompt: "Pilih kalimat paling natural: 'Saya rasa dia tidak akan datang.'",
        promptRomaji: "Negatifkan kata kerja di dalam kutipan!",
        options: [
          { jp: "かれは くると おもいません。", romaji: "Kare wa kuru to omoimasen." },
          { jp: "かれは こないと おもいます。", romaji: "Kare wa konai to omoimasu." },
          { jp: "かれは きないと おもいます。", romaji: "Kare wa kinai to omoimasu." },
          { jp: "かれは きますと おもいません。", romaji: "Kare wa kimasu to omoimasen." }
        ],
        answer: 1,
        explain: "BENAR: かれは こないと おもいます! Lebih natural menegatifkan isi pendapat (こない) daripada menegatifkan おもいます."
      },
      {
        id: "b21_5", type: "input", badge: "Latihan Ketik",
        prompt: "Ketik arti bahasa Indonesia dari kosakata 「いけん」!",
        promptRomaji: "iken = ?",
        sub: "1 kata saja dalam bahasa Indonesia.",
        placeholder: "Ketik: pendapat atau opini",
        accepted: ["pendapat", "opini"],
        displayAnswer: "pendapat / opini",
        explain: "BENAR! いけん = pendapat / opini."
      }
    ]
  },

  // ==================== BAB 22 ====================
  {
    num: 22,
    zone: "amber",
    oldScore: "2/4",
    title: "Anak Kalimat Penjelas Kata Benda (名詞修飾)",
    shortBug: "Menambah partikel berlebih setelah benda (ほんがです di Soal 86) dan salah baca tense はなしている ひと (Soal 87).",
    bugs: [
      { soal: "Soal 86", salah: "Menjawab わたしが きのう よんだ ほんが です (partikel berlebih!)", benar: "わたしが きのう よんだ ほん です (langsung ほん + です, TANPA partikel!)", kenapa: "Kata kerja biasa langsung menempel di depan kata benda, dan di depan です tidak boleh diselipi partikel が atau を." },
      { soal: "Soal 87", salah: "Menerjemahkan はなして いる ひと menjadi 'orang yang akan berbicara'", benar: "はなして いる ひと = orang yang SEDANG berbicara", kenapa: "Perhatikan tense di depan ひと: はなす ひと (akan bicara) · はなしている ひと (SEDANG bicara) · はなした ひと (telah bicara)." }
    ],
    grammar: [
      {
        num: "POIN 01",
        title: "Menempelkan Anak Kalimat di Depan Kata Benda",
        formula: "[Subjek が + ... + Kata Kerja Bentuk Biasa] + Kata Benda",
        explain: "Di bahasa Indonesia penjelas ada di belakang ('buku YANG saya baca kemarin'). Di bahasa Jepang, seluruh penjelasnya ditaruh di DEPAN kata benda tanpa kata 'yang' dan tanpa partikel penghubung ke kata benda tersebut!",
        examples: [
          { jp: "これは わたしが きのう よんだ ほんです。", romaji: "Kore wa watashi ga kinou yonda hon desu.", id: "Ini adalah buku yang saya baca kemarin." },
          { jp: "あそこで はなしている ひとは ミラーさんです。", romaji: "Asoko de hanashite iru hito wa Miraa-san desu.", id: "Orang yang sedang berbicara di sana adalah Sdr. Miller." },
          { jp: "あさごはんを たべる じかんが ありません。", romaji: "Asagohan o taberu jikan ga arimasen.", id: "Tidak ada waktu untuk sarapan." }
        ],
        trap: "Bug Soal 86 & 87: (1) Subjek di dalam anak kalimat pakai が (わたしが), bukan は. (2) Jangan selipkan partikel ekstra di depan です!"
      }
    ],
    vocab: [
      { jp: "きます / はきます / かぶります / かけます", romaji: "kimasu / hakimasu / kaburimasu / kakemasu", arti: "memakai (baju atas / celana-sepatu / topi / kacamata)" },
      { jp: "やくそく / ようじ", romaji: "yakusoku / youji", arti: "janji / urusan" },
      { jp: "めがね / ぼうし / コート / セーター", romaji: "megane / boushi / kooto / seetaa", arti: "kacamata / topi / mantel / sweter" },
      { jp: "うまれます", romaji: "umaremasu", arti: "lahir" }
    ],
    questions: [
      {
        id: "b22_1", type: "mcq", badge: "Perbaikan Soal 86",
        prompt: "これは わたしが きのう よんだ （　　　） です。 (Ini adalah buku yang saya baca kemarin.)",
        promptRomaji: "Kore wa watashi ga kinou yonda ( ___ ) desu.",
        sub: "Jangan tambahkan partikel berlebih sebelum です!",
        options: [
          { jp: "ほんが", romaji: "hon ga" },
          { jp: "ほんを", romaji: "hon o" },
          { jp: "ほん", romaji: "hon" },
          { jp: "ほんの", romaji: "hon no" }
        ],
        answer: 2,
        explain: "BENAR: ほん! Langsung わたしが きのう よんだ ほん です, tanpa が/を/の di belakang ほん."
      },
      {
        id: "b22_2", type: "mcq", badge: "Perbaikan Soal 87",
        prompt: "Apa arti TEPAT dari: 「あそこで はなして いる ひと」?",
        promptRomaji: "Asoko de hanashite iru hito",
        sub: "Perhatikan bentuk ～て いる!",
        options: [
          { jp: "Orang yang akan berbicara di sana", romaji: "" },
          { jp: "Orang yang sedang berbicara di sana", romaji: "" },
          { jp: "Orang yang sudah selesai berbicara di sana", romaji: "" },
          { jp: "Orang yang tidak berbicara di sana", romaji: "" }
        ],
        answer: 1,
        explain: "BENAR: Orang yang SEDANG berbicara! Bentuk -Te + いる = sedang berlangsung."
      },
      {
        id: "b22_3", type: "mcq", badge: "Subjek Anak Kalimat",
        prompt: "これは はは （　　） つくった ケーキです。 (Ini adalah kue yang dibuat ibu.)",
        promptRomaji: "Kore wa haha ( _ ) tsukutta keeki desu.",
        sub: "Subjek DI DALAM anak kalimat penjelas benda wajib pakai partikel apa?",
        options: [
          { jp: "は", romaji: "wa" },
          { jp: "が", romaji: "ga" },
          { jp: "を", romaji: "o" },
          { jp: "で", romaji: "de" }
        ],
        answer: 1,
        explain: "BENAR: が! Subjek di dalam anak kalimat penjelas benda memakai が (ははが つくった ケーキ), bukan は."
      },
      {
        id: "b22_4", type: "mcq", badge: "Pola じかんが ありません",
        prompt: "きょうは テレビを （　　　） じかんが ありません。 (Hari ini tidak ada waktu menonton TV.)",
        promptRomaji: "Kyou wa terebi o ( ___ ) jikan ga arimasen.",
        sub: "Sebelum kata benda じかん, pakai Bentuk Biasa (Kamus)!",
        options: [
          { jp: "みます", romaji: "mimasu" },
          { jp: "みて", romaji: "mite" },
          { jp: "みる", romaji: "miru" },
          { jp: "み", romaji: "mi" }
        ],
        answer: 2,
        explain: "BENAR: みる じかんが ありません! Bentuk kamus langsung menempel di depan じかん."
      },
      {
        id: "b22_5", type: "mcq", badge: "Beda Tense Penjelas",
        prompt: "「めがねを かけている ひと」 artinya...",
        promptRomaji: "megane o kakete iru hito",
        sub: "かけます = memakai kacamata; かけている = sedang memakai (berkacamata).",
        options: [
          { jp: "Orang yang akan membeli kacamata", romaji: "" },
          { jp: "Orang yang memakai kacamata", romaji: "" },
          { jp: "Orang yang melepas kacamata", romaji: "" },
          { jp: "Orang yang kehilangan kacamata", romaji: "" }
        ],
        answer: 1,
        explain: "BENAR: Orang yang memakai kacamata (status memakai pakaian/aksesoris memakai ～ている)."
      }
    ]
  },

  // ==================== BAB 23 ====================
  {
    num: 23,
    zone: "amber",
    oldScore: "2/4",
    title: "Operator Kondisi: とき (Ketika), ～と (Pasti), & Navigasi Arah",
    shortBug: "Tertukar とき (ketika) dengan まえに (sebelum) di Soal 91 dan salah arah みぎ (kanan) di Soal 92.",
    bugs: [
      { soal: "Soal 91", salah: "Memakai まえに (sebelum) untuk 'Ketika sibuk, jangan telepon'", benar: "いそがしい とき、でんわを かけないで ください (ketika = とき!)", kenapa: "まえに = SEBELUM (urutan waktu sebelum aksi). とき = KETIKA / SAAT (selama kondisi berlangsung)." },
      { soal: "Soal 92", salah: "Menerjemahkan みぎ (右) menjadi 'kiri'", benar: "みぎ = KANAN · ひだり = KIRI", kenapa: "Cara ingat cepat: HI-dari = kiri (sama-sama ada huruf 'i' di akhir & lebih panjang 3 suku kata). MI-gi = kanan!" }
    ],
    grammar: [
      {
        num: "POIN 01",
        title: "Ketika / Saat: ...とき (vs まえに)",
        formula: "V-る／V-た／V-ない + とき  |  KS-い + とき  |  KS-な + な とき  |  N + の とき",
        explain: "とき menandakan momen atau kondisi saat sesuatu terjadi. Perhatikan bedanya: まえに = SEBELUM, とき = KETIKA/SAAT.",
        examples: [
          { jp: "いそがしい とき、でんわを かけないで ください。", romaji: "Isogashii toki, denwa o kakenaide kudasai.", id: "Ketika sibuk, tolong jangan menelepon." },
          { jp: "ひまな とき、うちへ あそびに きて ください。", romaji: "Hima na toki, uchi e asobi ni kite kudasai.", id: "Ketika senggang, mainlah ke rumah (KS-な pakai な)." },
          { jp: "こどもの とき、よく かわで およぎました。", romaji: "Kodomo no toki, yoku kawa de oyogimashita.", id: "Ketika kecil, sering berenang di sungai (N pakai の)." }
        ],
        trap: "Bug Soal 91: Untuk kata sifat ('ketika sibuk', 'ketika sakit'), kita pakai とき, BUKAN まえに!"
      },
      {
        num: "POIN 02",
        title: "Kondisi Pasti & Navigasi Jalan: V-る と",
        formula: "[V Bentuk Kamus] + と、[Akibat Pasti / Penunjuk Arah]",
        explain: "Dipakai untuk tombol mesin, hukum alam, dan penunjuk arah. Ingat arah navigasi: まっすぐ (lurus), みぎ (kanan), ひだり (kiri), まがります (belok).",
        examples: [
          { jp: "この ボタンを おすと、おつりが でます。", romaji: "Kono botan o osu to, otsuri ga demasu.", id: "Kalau menekan tombol ini, kembalian akan keluar." },
          { jp: "まっすぐ いくと、みぎに ぎんこうが あります。", romaji: "Massugu iku to, migi ni ginkou ga arimasu.", id: "Kalau jalan lurus, di sebelah KANAN ada bank." }
        ],
        trap: "Bug Soal 92: みぎ = KANAN, ひだり = KIRI! Jangan sampai nyasar!"
      }
    ],
    vocab: [
      { jp: "とき / まえに", romaji: "toki / mae ni", arti: "ketika, saat / sebelum" },
      { jp: "みぎ / ひだり / まっすぐ", romaji: "migi / hidari / massugu", arti: "kanan / kiri / lurus" },
      { jp: "まがります / わたります", romaji: "magarimasu / watarimasu", arti: "belok / menyeberang" },
      { jp: "おします / まわします / ひきます", romaji: "oshimasu / mawashimasu / hikimasu", arti: "menekan / memutar / menarik" },
      { jp: "こうさてん / しんごう / かど / はし", romaji: "kousaten / shingou / kado / hashi", arti: "persimpangan / lampu merah / sudut-tikungan / jembatan" }
    ],
    questions: [
      {
        id: "b23_1", type: "mcq", badge: "Perbaikan Soal 91",
        prompt: "いそがしい （　　）、でんわを かけないで ください。 (KETIKA sibuk, tolong jangan telepon.)",
        promptRomaji: "Isogashii ( __ ), denwa o kakenaide kudasai.",
        sub: "'Ketika' = とき, 'Sebelum' = まえに!",
        options: [
          { jp: "まえに", romaji: "mae ni" },
          { jp: "とき", romaji: "toki" },
          { jp: "から", romaji: "kara" },
          { jp: "まで", romaji: "made" }
        ],
        answer: 1,
        explain: "BENAR: とき! いそがしい とき = ketika sibuk."
      },
      {
        id: "b23_2", type: "mcq", badge: "Perbaikan Soal 92",
        prompt: "Apa arti dari: 「あの かどを みぎへ まがると、えきが あります。」?",
        promptRomaji: "Ano kado o migi e magaru to, eki ga arimasu.",
        sub: "Cek arah みぎ (kanan atau kiri?)!",
        options: [
          { jp: "Kalau belok KIRI di tikungan itu, ada stasiun.", romaji: "" },
          { jp: "Kalau belok KANAN di tikungan itu, ada stasiun.", romaji: "" },
          { jp: "Kalau jalan lurus di jembatan itu, ada stasiun.", romaji: "" },
          { jp: "Sebelum tikungan itu, ada stasiun.", romaji: "" }
        ],
        answer: 1,
        explain: "BENAR: belok KANAN! みぎ = kanan, ひだり = kiri."
      },
      {
        id: "b23_3", type: "mcq", badge: "N の とき",
        prompt: "びょうき （　　） とき、この くすりを のみます。 (Ketika sakit, minum obat ini.)",
        promptRomaji: "Byouki ( _ ) toki, kono kusuri o nomimasu.",
        sub: "びょうき adalah Kata Benda — sambungannya ke とき pakai apa?",
        options: [
          { jp: "な", romaji: "na" },
          { jp: "の", romaji: "no" },
          { jp: "に", romaji: "ni" },
          { jp: "だ", romaji: "da" }
        ],
        answer: 1,
        explain: "BENAR: の! Kata benda + の とき (びょうきの とき, こどもの とき)."
      },
      {
        id: "b23_4", type: "mcq", badge: "V-る とき vs V-た とき",
        prompt: "にほんへ （　　　） とき、くにで かばんを かいました。 (Membeli tas di negara asal SEBELUM berangkat ke Jepang.)",
        promptRomaji: "Nihon e ( ___ ) toki, kuni de kaban o kaimashita.",
        sub: "Aksi beli tas terjadi SEBELUM selesai berangkat ke Jepang!",
        options: [
          { jp: "いく", romaji: "iku" },
          { jp: "いった", romaji: "itta" },
          { jp: "いって", romaji: "itte" },
          { jp: "いかない", romaji: "ikanai" }
        ],
        answer: 0,
        explain: "BENAR: いく とき! Belum sampai di Jepang (masih di negara asal) → pakai Bentuk Kamus いく とき."
      },
      {
        id: "b23_5", type: "input", badge: "Latihan Ketik",
        prompt: "Ketik kata bahasa Jepang untuk arah 'KANAN'!",
        promptRomaji: "Kanan = ?",
        sub: "Boleh Hiragana atau Romaji.",
        placeholder: "Ketik: みぎ atau migi",
        accepted: ["みぎ", "migi"],
        displayAnswer: "みぎ (migi)",
        explain: "BENAR: みぎ (migi) = kanan! Lawannya ひだり (hidari) = kiri."
      }
    ]
  },

  // ==================== BAB 24 ====================
  {
    num: 24,
    zone: "amber",
    oldScore: "2/4",
    title: "Memberi & Menerima Tindakan (てあげます・てもらいます・てくれます)",
    shortBug: "Saat orang lain memberi ke SAYA (わたしに), masih menjawab もらいました / あげました padahal wajib くれました (Soal 93 & 96).",
    bugs: [
      { soal: "Soal 93 & 96", salah: "Memakai もらいました atau あげました saat subjeknya ORANG LAIN dan penerimanya SAYA (わたしに)", benar: "[Orang Lain] が (わたしに) くれました / V-て くれました", kenapa: "Ingat mekanik game co-op! Jika TEMAN/IBU yang jadi subjek dan ngasih barang/buff ke SAYA (わたしに), WAJIB pakai くれます (BUKAN あげます, BUKAN もらいました)!" }
    ],
    grammar: [
      {
        num: "POIN 01",
        title: "Segitiga Arah Pemberian (Kunci Anti-Tertukar!)",
        formula: "1. SAYA beri ke orang → わたしは [Orang] に (V-て) あげます\n2. SAYA terima dari orang → わたしは [Orang] に (V-て) もらいます\n3. ORANG beri ke SAYA → [Orang] は／が (わたしに) (V-て) くれます",
        explain: "Cara cek 2 detik di ujian: lihat SIAPA SUBJEK di depan は／が dan SIAPA PENERIMANYA! Kalau subjeknya ORANG LAIN dan yang menerima adalah SAYA (わたしに / keluarga saya), jawabannya 100% くれます / くれました!",
        examples: [
          { jp: "ミラーさんは わたしに おかしを くれました。", romaji: "Miraa-san wa watashi ni okashi o kuremashita.", id: "Sdr. Miller memberi permen kepada saya. (Subjek: Miller → ke SAYA = くれました!)" },
          { jp: "ははが わたしに セーターを おくって くれました。", romaji: "Haha ga watashi ni seetaa o okutte kuremashita.", id: "Ibu mengirimkan sweter untuk saya." },
          { jp: "わたしは ともだちに かんじを おしえて もらいました。", romaji: "Watashi wa tomodachi ni kanji o oshiete moraimashita.", id: "Saya diajari kanji oleh teman. (Subjek: SAYA menerima = もらいました!)" },
          { jp: "わたしは おとうとに えいごを おしえて あげました。", romaji: "Watashi wa otouto ni eigo o oshiete agemashita.", id: "Saya mengajari adik bahasa Inggris. (Subjek: SAYA memberi = あげました!)" }
        ],
        trap: "Bug Soal 93 & 96: Tidak pernah ada kalimat 'ミラーさんは わたしに あげました' ❌! Jika penerimanya わたし, あげます DILARANG — wajib ganti くれます ✓!"
      }
    ],
    vocab: [
      { jp: "くれます", romaji: "kuremasu", arti: "memberi (orang lain → kepada SAYA/keluarga saya)" },
      { jp: "つれて いきます / つれて きます", romaji: "tsurete ikimasu / tsurete kimasu", arti: "mengajak pergi / mengajak datang (orang)" },
      { jp: "おくります（ひとを～）", romaji: "okurimasu", arti: "mengantar (orang)" },
      { jp: "しょうかいします / あんないします / せつめいします", romaji: "shoukai shimasu / annai shimasu / setsumei shimasu", arti: "memperkenalkan / memandu / menjelaskan" },
      { jp: "なおします", romaji: "naoshimasu", arti: "memperbaiki / membetulkan" }
    ],
    questions: [
      {
        id: "b24_1", type: "mcq", badge: "Perbaikan Soal 93",
        prompt: "ミラーさんは わたしに おかしを （　　　　　）。 (Sdr. Miller memberi permen kepada saya.)",
        promptRomaji: "Miraa-san wa watashi ni okashi o ( _____ ).",
        sub: "Subjek = Miller (orang lain), Penerima = わたしに (SAYA)!",
        options: [
          { jp: "あげました", romaji: "agemashita" },
          { jp: "もらいました", romaji: "moraimashita" },
          { jp: "くれました", romaji: "kuremashita" },
          { jp: "しました", romaji: "shimashita" }
        ],
        answer: 2,
        explain: "BENAR: くれました! Subjek orang lain memberi ke わたしに WAJIB memakai くれました."
      },
      {
        id: "b24_2", type: "mcq", badge: "Perbaikan Soal 96",
        prompt: "ははが セーターを つくって （　　　　　）。 (Ibu membuatkan sweter untuk saya.)",
        promptRomaji: "Haha ga seetaa o tsukutte ( _____ ).",
        sub: "Subjek = Ibu (ははが), berbuat baik untuk SAYA!",
        options: [
          { jp: "あげました", romaji: "agemashita" },
          { jp: "もらいました", romaji: "moraimashita" },
          { jp: "くれました", romaji: "kuremashita" },
          { jp: "いきました", romaji: "ikimashita" }
        ],
        answer: 2,
        explain: "BENAR: つくって くれました! Karena subjeknya ibu (ははが) yang membuatkan untuk saya."
      },
      {
        id: "b24_3", type: "mcq", badge: "Beda Subjek: もらいました",
        prompt: "わたしは やまださんに じてんしゃを なおして （　　　　　）。 (Saya dibetulkan sepedanya oleh Sdr. Yamada.)",
        promptRomaji: "Watashi wa Yamada-san ni jitensha o naoshite ( _____ ).",
        sub: "Perhatikan subjeknya sekarang: わたしは (SAYA yang menerima bantuan)!",
        options: [
          { jp: "あげました", romaji: "agemashita" },
          { jp: "もらいました", romaji: "moraimashita" },
          { jp: "くれました", romaji: "kuremashita" },
          { jp: "ください", romaji: "kudasai" }
        ],
        answer: 1,
        explain: "BENAR: もらいました! Karena subjek di depan は adalah わたし (saya menerima jasa dari Yamada-san)."
      },
      {
        id: "b24_4", type: "mcq", badge: "Subjek SAYA Memberi",
        prompt: "わたしは おとうとに かんじを おしえて （　　　　　）。 (Saya mengajari adik kanji.)",
        promptRomaji: "Watashi wa otouto ni kanji o oshiete ( _____ ).",
        sub: "Subjek = わたしは, memberi bantuan ke adik!",
        options: [
          { jp: "あげました", romaji: "agemashita" },
          { jp: "もらいました", romaji: "moraimashita" },
          { jp: "くれました", romaji: "kuremashita" },
          { jp: "きました", romaji: "kimashita" }
        ],
        answer: 0,
        explain: "BENAR: あげました! Saya berinisiatif memberi bantuan keluar ke orang lain = V-て あげます."
      },
      {
        id: "b24_5", type: "input", badge: "Latihan Ketik",
        prompt: "Lengkapi: 「さとうさんが えきまで おくって （　　　　　）。」 (Sdr. Sato mengantar saya sampai stasiun [lampau].)",
        promptRomaji: "Satou-san ga eki made okutte ( _____ ).",
        sub: "Ketik kata kerja lampau sopan untuk 'orang lain berbuat baik ke saya' (Hiragana atau Romaji).",
        placeholder: "Ketik: くれました atau kuremashita",
        accepted: ["くれました", "kuremashita"],
        displayAnswer: "くれました (kuremashita)",
        explain: "BENAR: くれました! Mekanik くれます sudah 100% beres!"
      }
    ]
  },

  // ==================== BAB 25 ====================
  {
    num: 25,
    zone: "amber",
    oldScore: "2/4",
    title: "Pengandaian (～たら) & Kontradiksi (～ても)",
    shortBug: "Salah konjugasi ある menjadi あるたら (seharusnya あったら) di Soal 100, dan mengartikan なくても menjadi 'karena' di Soal 99.",
    bugs: [
      { soal: "Soal 99", salah: "Menerjemahkan おかねが なくても menjadi 'karena tidak punya uang'", benar: "～ても = WALAUPUN / MESKIPUN ('walaupun tidak punya uang')", kenapa: "から = karena. ～ても = WALAUPUN / MESKIPUN! 'おかねが なくても、たのしいです' = Walaupun tidak punya uang, tetap menyenangkan." },
      { soal: "Soal 100", salah: "Menjawab あるたら untuk pengandaian dari あります", benar: "あったら (Bentuk -Ta dari あります adalah あった + ら!)", kenapa: "Rumus ～たら BUKAN dari bentuk kamus! Ambil Bentuk LAMPAU Biasa (た形) dulu (あります → あった), baru tempel ら → あったら!" }
    ],
    grammar: [
      {
        num: "POIN 01",
        title: "Pengandaian / Setelah: ～たら (Kalau ~)",
        formula: "Ambil Bentuk LAMPAU Biasa (た / かった / だった) + ら",
        explain: "Kunci anti-gagal compile: selalu ubah ke bentuk LAMPAU biasa dulu sebelum menempelkan ら! Untuk あります: lampau biasanya あった → あったら.",
        examples: [
          { jp: "おかねが あったら、りょこうします。", romaji: "Okane ga attara, ryokou shimasu.", id: "Kalau punya uang, saya akan berwisata (あります → あった + ら)." },
          { jp: "あした あめだったら、いきません。", romaji: "Ashita ame dattara, ikimasen.", id: "Kalau besok hujan, tidak pergi (あめ → あめだった + ら)." },
          { jp: "やすかったら、かいます。", romaji: "Yasukattara, kaimasu.", id: "Kalau murah, saya beli (やすい → やすかった + ら)." }
        ],
        trap: "Bug Soal 100: Jangan tempel ら ke bentuk kamus (あるたら ❌, いくたら ❌)! Wajib bentuk lampau: あったら ✓, いったら ✓!"
      },
      {
        num: "POIN 02",
        title: "Kontradiksi: ～ても (Walaupun / Meskipun ~)",
        formula: "V-て + も  |  V-なく(て) + も  |  KS-い → くて + も  |  KS-な / N + でも",
        explain: "Menyatakan bahwa meskipun kondisi A terjadi, hasil B tetap berlangsung (berlawanan ekspektasi). Sering dipakai bersama いくら ('berapa pun / se- ... apa pun').",
        examples: [
          { jp: "あめが ふっても、でかけます。", romaji: "Ame ga futte mo, dekakemasu.", id: "Meskipun hujan turun, tetap pergi keluar." },
          { jp: "おかねが なくても、しあわせです。", romaji: "Okane ga nakute mo, shiawase desu.", id: "Walaupun tidak punya uang, tetap bahagia." },
          { jp: "いくら たかくても、かいます。", romaji: "Ikura takakute mo, kaimasu.", id: "Semahal apa pun, tetap saya beli." }
        ],
        trap: "Bug Soal 99: ～ても / ～なくても artinya SELALU 'WALAUPUN / MESKIPUN', bukan 'karena'!"
      }
    ],
    vocab: [
      { jp: "かんがえます / つきます", romaji: "kangaemasu / tsukimasu", arti: "berpikir / tiba, sampai" },
      { jp: "とります（としを～） / たります", romaji: "torimasu (toshi o) / tarimasu", arti: "bertambah tua / cukup" },
      { jp: "いなか / チャンス / おく", romaji: "inaka / chansu / oku", arti: "kampung halaman, desa / kesempatan / 100 juta" },
      { jp: "もし（～たら） / いくら（～ても）", romaji: "moshi (~tara) / ikura (~temo)", arti: "kalau seandainya / seberapa pun" }
    ],
    questions: [
      {
        id: "b25_1", type: "mcq", badge: "Perbaikan Soal 100",
        prompt: "もし 1おくえん （　　　　）、いえを かいたいです。 (Kalau punya 100 juta yen, ingin beli rumah. — あります)",
        promptRomaji: "Moshi ichioku-en ( ____ ), ie o kaitai desu.",
        sub: "Ambil Bentuk -Ta dari あります (あった) + ら!",
        options: [
          { jp: "あるたら", romaji: "arutara" },
          { jp: "ありたら", romaji: "aritara" },
          { jp: "あったら", romaji: "attara" },
          { jp: "あったらば", romaji: "attaraba" }
        ],
        answer: 2,
        explain: "BENAR: あったら! あります → bentuk -ta adalah あった → tambah ら = あったら."
      },
      {
        id: "b25_2", type: "mcq", badge: "Perbaikan Soal 99",
        prompt: "Apa arti TEPAT dari: 「おかねが なくても、たのしいです。」?",
        promptRomaji: "Okane ga nakute mo, tanoshii desu.",
        sub: "Ingat: ～ても / ～なくても adalah operator KONTRADIKSI!",
        options: [
          { jp: "Karena tidak punya uang, jadi menyenangkan.", romaji: "" },
          { jp: "Walaupun tidak punya uang, tetap menyenangkan.", romaji: "" },
          { jp: "Kalau punya uang, pasti menyenangkan.", romaji: "" },
          { jp: "Harus punya uang agar menyenangkan.", romaji: "" }
        ],
        answer: 1,
        explain: "BENAR: WALAUPUN tidak punya uang, tetap menyenangkan! ～ても = walaupun/meskipun."
      },
      {
        id: "b25_3", type: "mcq", badge: "Kata Benda + たら",
        prompt: "あした （　　　　　）、うみへ いきません。 (Kalau besok hujan, tidak pergi ke pantai. — あめ)",
        promptRomaji: "Ashita ( _____ ), umi e ikimasen.",
        sub: "Lampau biasa dari Kata Benda あめ adalah あめだった + ら!",
        options: [
          { jp: "あめたら", romaji: "ametara" },
          { jp: "あめだったら", romaji: "ame dattara" },
          { jp: "あめかったら", romaji: "amekattara" },
          { jp: "あめでも", romaji: "ame demo" }
        ],
        answer: 1,
        explain: "BENAR: あめだったら! Kata benda / KS-な → だった + ら = だったら."
      },
      {
        id: "b25_4", type: "mcq", badge: "Kata Sifat-い + ても",
        prompt: "いくら （　　　　　）、がんばります。 (Sesibuk apa pun, saya akan berusaha keras. — いそがしい)",
        promptRomaji: "Ikura ( _____ ), ganbarimasu.",
        sub: "KS-い + ても: coret い → tambah くても!",
        options: [
          { jp: "いそがしいても", romaji: "isogashiitemo" },
          { jp: "いそがしくても", romaji: "isogashikute mo" },
          { jp: "いそがしかったら", romaji: "isogashikattara" },
          { jp: "いそがしでも", romaji: "isogashidemo" }
        ],
        answer: 1,
        explain: "BENAR: いそがしくても! KS-い → coret い + くても ('meskipun sibuk')."
      },
      {
        id: "b25_5", type: "input", badge: "Latihan Ketik",
        prompt: "Ubah 「じかんが あります」 menjadi 'kalau ada waktu' (～たら)!",
        promptRomaji: "jikan ga arimasu → jikan ga ( ? )",
        sub: "Ketik kata kerja bentuk -tara-nya saja (Hiragana atau Romaji).",
        placeholder: "Ketik: あったら atau attara",
        accepted: ["あったら", "attara"],
        displayAnswer: "あったら (attara)",
        explain: "BENAR: あったら (attara)! Bug Soal 100 resmi sembuh total!"
      }
    ]
  }
);
