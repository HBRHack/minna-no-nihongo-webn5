/* MODUL LENGKAP MINNA NO NIHONGO BAB 1 – 5
 * Setiap bab memiliki: Diagnostik Skor, Cheat Sheet KHUSUS Bab Tersebut, Materi Lengkap Silabus MNN, Kosakata Lengkap, & Kuis Murni 1 Tema.
 */
window.MNN_MODULES = window.MNN_MODULES || [];
window.MNN_MODULES.push(
  // ==================== BAB 1 ====================
  {
    num: 1,
    zone: "green",
    oldScore: "4/4",
    title: "Perkenalan Diri & Kalimat Nominal (は・です・も・の)",
    shortBug: "Skor tes lama 4/4 (Sempurna). Fondasi kalimat kata benda positif, negatif, tanya, juga (も), dan afiliasi (の).",
    bugs: [
      { soal: "Soal 1–4", salah: "Tidak ada kesalahan di tes 100 soal (4/4 Benar!)", benar: "N1 は N2 です / じゃありません / ですか / も / の", kenapa: "Pertahankan ketelitian membedakan は (topik), も (juga), dan aturan sopan santun ～さん." }
    ],
    cheatSheet: {
      title: "Cheat Sheet Bab 1: Rumus Kalimat Kata Benda & Partikel Dasar",
      takeaway: "は dibaca 'wa'. Jangan pernah memakai ～さん untuk nama sendiri!",
      tables: [
        {
          heading: "1. Empat Pola Dasar Kalimat Kata Benda (Non-Lampau)",
          headers: ["Bentuk", "Rumus", "Contoh Kalimat"],
          rows: [
            ["Positif (+)", "N1 は N2 です", "わたしは かいしゃいんです。 (Saya pegawai perusahaan.)"],
            ["Negatif (-)", "N1 は N2 じゃ ありません (では ありません)", "ミラーさんは いしゃじゃ ありません。 (Miller bukan dokter.)"],
            ["Tanya (?)", "N1 は N2 ですか", "あのかたは どなたですか。 (Beliau siapa?)"],
            ["Juga", "N1 も N2 です", "サントスさんも ブラジルじんです。 (Santos juga orang Brasil.)"]
          ]
        },
        {
          heading: "2. Kata Tanya & Pasangan Sopan Bab 1",
          headers: ["Biasa", "Versi Lebih Sopan", "Fungsi / Arti"],
          rows: [
            ["あのひと", "あのかた", "Orang itu / Beliau"],
            ["だれ", "どなた", "Siapa"],
            ["なんさい", "おいくつ", "Umur berapa (hati-hati: 20 tahun = はたち!)"],
            ["N1 の N2", "—", "Afiliasi/bagian dari: IMC の しゃいん (pegawai IMC)"]
          ]
        }
      ]
    },
    grammar: [
      {
        num: "POIN 01",
        title: "Kalimat Positif & Negatif Kata Benda: です vs じゃありません",
        formula: "(+) N1 は N2 です   |   (-) N1 は N2 じゃ ありません (formal: では ありません)",
        explain: "Partikel は (ditulis ha, wajib dibaca 'wa') menandai topik kalimat. です berfungsi sebagai kopula sopan di akhir kalimat kata benda. Untuk bentuk negatif percakapan sehari-hari gunakan じゃ ありません, sedangkan untuk tulisan/pidato formal gunakan では ありません.",
        examples: [
          { jp: "わたしは マイク・ミラーです。", romaji: "Watashi wa Maiku Miraa desu.", id: "Saya Mike Miller." },
          { jp: "わたしは がくせいじゃ ありません。", romaji: "Watashi wa gakusei ja arimasen.", id: "Saya bukan mahasiswa." }
        ],
        trap: "Kata benda TIDAK boleh dinegatifkan dengan ～くない! Wajib じゃ ありません."
      },
      {
        num: "POIN 02",
        title: "Kalimat Tanya (か) & Jawaban はい / いいえ",
        formula: "Kalimat + か。  →  はい、そうです / いいえ、[N] じゃ ありません。",
        explain: "Menambahkan か di akhir kalimat langsung mengubah pernyataan menjadi pertanyaan tanpa membalik urutan kata. Saat ditanya tentang fakta sederhana kata benda, wajib diawali はい (ya) atau いいえ (bukan).",
        examples: [
          { jp: "ミラーさんは アメリカじんですか。…はい、アメリカじんです。", romaji: "Miraa-san wa Amerikajin desu ka. ...Hai, Amerikajin desu.", id: "Apakah Sdr. Miller orang Amerika? ...Ya, orang Amerika." },
          { jp: "あのかたは どなたですか。…ワットさんです。", romaji: "Ano kata wa donata desu ka. ...Watto-san desu.", id: "Beliau siapa? ...Sdr. Watt." }
        ],
        trap: "Pasangkan tingkat kesopanannya: あのひと ↔ だれ, sedangkan あのかた ↔ どなた!"
      },
      {
        num: "POIN 03",
        title: "Partikel も (Juga), の (Afiliasi), & Umur (～さい)",
        formula: "N1 も N2 です   |   [Organisasi] の [Jabatan/Status]   |   [Angka] + さい",
        explain: "Jika predikatnya sama dengan kalimat sebelumnya, ganti は menjadi も ('juga'). Partikel の menghubungkan institusi/negara dengan status seseorang (`さくらだいがくの せんせい`). Untuk umur, tambahkan ～さい (perhatikan pengecualian 1=`いっさい`, 8=`はっさい`, 10=`じゅっさい`, dan 20 tahun=`はたち`).",
        examples: [
          { jp: "ミラーさんは かいしゃいんです。グプタさんも かいしゃいんです。", romaji: "Miraa-san wa kaishain desu. Guputa-san mo kaishain desu.", id: "Sdr. Miller pegawai perusahaan. Sdr. Gupta juga pegawai perusahaan." },
          { jp: "たろうちゃんは 8さい（はっさい）です。", romaji: "Tarou-chan wa hassai desu.", id: "Dik Taro berumur 8 tahun." }
        ],
        trap: "Khusus umur 20 tahun dibaca はたち (hatachi), BUKAN にじゅっさい!"
      }
    ],
    vocab: [
      { jp: "わたし / あなた", romaji: "watashi / anata", arti: "saya / Anda" },
      { jp: "あのひと（あのかた）", romaji: "ano hito (ano kata)", arti: "orang itu (beliau — sopan)" },
      { jp: "せんせい / きょうし", romaji: "sensei / kyoushi", arti: "guru, dosen (panggilan) / profesi pengajar (diri sendiri)" },
      { jp: "がくせい / かいしゃいん / しゃいん", romaji: "gakusei / kaishain / shain", arti: "mahasiswa / karyawan perusahaan / pegawai ~ (dipakai dengan nama PT: IMCのしゃいん)" },
      { jp: "ぎんこういん / いしゃ / けんきゅうしゃ", romaji: "ginkouin / isha / kenkyuusha", arti: "pegawai bank / dokter / peneliti" },
      { jp: "だいがく / びょういん", romaji: "daigaku / byouin", arti: "universitas / rumah sakit" },
      { jp: "だれ（どなた）", romaji: "dare (donata)", arti: "siapa (sopan)" },
      { jp: "～さい / なんさい（おいくつ） / はたち", romaji: "~sai / nansai (oikutsu) / hatachi", arti: "umur ~ tahun / umur berapa / 20 tahun" },
      { jp: "～じん / ～さん / ～ちゃん", romaji: "~jin / ~san / ~chan", arti: "orang negara ~ / Sdr.~ / panggilan anak kecil" },
      { jp: "はじめまして / どうぞ よろしく", romaji: "hajimemashite / douzo yoroshiku", arti: "perkenalkan (pertama bertemu) / senang berkenalan dengan Anda" }
    ],
    questions: [
      { id: "b1_1", type: "mcq", badge: "Murni Bab 1 · Topik", prompt: "わたし （　　） マイク・ミラーです。", promptRomaji: "Watashi ( _ ) Maiku Miraa desu.", sub: "Partikel penanda topik kalimat.", options: [{ jp: "は", romaji: "wa" }, { jp: "を", romaji: "o" }, { jp: "に", romaji: "ni" }, { jp: "で", romaji: "de" }], answer: 0, explain: "BENAR: は (dibaca wa) menandai topik subjek kalimat." },
      { id: "b1_2", type: "mcq", badge: "Murni Bab 1 · Negatif", prompt: "サントスさんは がくせい （　　　　　）。 (Sdr. Santos bukan mahasiswa.)", promptRomaji: "Santosu-san wa gakusei ( _____ ).", sub: "Bentuk negatif sopan dari です.", options: [{ jp: "じゃ ありません", romaji: "ja arimasen" }, { jp: "くないです", romaji: "kunai desu" }, { jp: "ません", romaji: "masen" }, { jp: "じゃ あります", romaji: "ja arimasu" }], answer: 0, explain: "BENAR: じゃ ありません adalah negatif non-lampau dari です." },
      { id: "b1_3", type: "mcq", badge: "Murni Bab 1 · Juga", prompt: "やまださんは ぎんこういんです。きむらさん （　　） ぎんこういんです。", promptRomaji: "Yamada-san wa ginkouin desu. Kimura-san ( _ ) ginkouin desu.", sub: "Menyatakan 'Sdr. Kimura JUGA pegawai bank'.", options: [{ jp: "は", romaji: "wa" }, { jp: "も", romaji: "mo" }, { jp: "の", romaji: "no" }, { jp: "と", romaji: "to" }], answer: 1, explain: "BENAR: も menggantikan は untuk arti 'juga'." },
      { id: "b1_4", type: "mcq", badge: "Murni Bab 1 · Afiliasi", prompt: "ミラーさんは IMC （　　） しゃいんです。 (Pegawai dari perusahaan IMC.)", promptRomaji: "Miraa-san wa IMC ( _ ) shain desu.", sub: "Partikel penghubung organisasi dengan status.", options: [{ jp: "の", romaji: "no" }, { jp: "も", romaji: "mo" }, { jp: "は", romaji: "wa" }, { jp: "か", romaji: "ka" }], answer: 0, explain: "BENAR: IMCの しゃいん (pegawai IMC)." },
      { id: "b1_5", type: "mcq", badge: "Murni Bab 1 · Kesopanan", prompt: "あのかたは （　　　） ですか。 (Beliau siapa?)", promptRomaji: "Ano kata wa ( ___ ) desu ka.", sub: "Pasangan kata tanya sopan untuk あのかた.", options: [{ jp: "なんさい", romaji: "nansai" }, { jp: "どなた", romaji: "donata" }, { jp: "なに", romaji: "nani" }, { jp: "どこ", romaji: "doko" }], answer: 1, explain: "BENAR: どなた adalah bentuk sopan dari だれ, sepadan dengan あのかた." },
      { id: "b1_6", type: "input", badge: "Murni Bab 1 · Umur Khusus", prompt: "Bagaimana bacaan khusus bahasa Jepang untuk umur 「20歳」 (20 tahun)?", promptRomaji: "20 tahun = ?", sub: "Ketik dalam Hiragana atau Romaji.", placeholder: "Ketik: はたち atau hatachi", accepted: ["はたち", "hatachi"], displayAnswer: "はたち (hatachi)", explain: "BENAR: Umur 20 tahun wajib dibaca はたち (hatachi)!" }
    ]
  },

  // ==================== BAB 2 ====================
  {
    num: 2,
    zone: "red",
    oldScore: "0/4",
    title: "Kata Tunjuk Benda (これ・この), Kepemilikan の, & Pilihan ～か、～か",
    shortBug: "Zona Merah (0/4): Tertukar これ vs それ, lupa の pada kepemilikan, dan mengartikan ～か、～か menjadi 'dan'.",
    bugs: [
      { soal: "Soal 5–6", salah: "Tertukar これ dan それ", benar: "これ = dekat SAYA · それ = dekat KAMU · あれ = jauh dari KEDUANYA", kenapa: "Lihat posisi bendanya terhadap pembicara dan lawan bicara." },
      { soal: "Soal 7", salah: "サントスさんです (lupa の)", benar: "サントスさんの です (milik Sdr. Santos)", kenapa: "Saat kata benda dihilangkan, partikel の wajib ditinggalkan sebelum です." },
      { soal: "Soal 8", salah: "Mengartikan ～か、～か menjadi 'dan'", benar: "A ですか、B ですか = Apakah A ATAU B?", kenapa: "Dua kalimat tanya berjajar menyatakan pilihan ('atau'), bukan gabungan." }
    ],
    cheatSheet: {
      title: "Cheat Sheet Bab 2: Matriks これ vs この & Fungsi Partikel の",
      takeaway: "これ/それ/あれ berdiri SENDIRI. この/その/あの WAJIB langsung diikuti Kata Benda!",
      tables: [
        {
          heading: "1. Matriks Jarak Kata Tunjuk Benda (Ko-So-A-Do)",
          headers: ["Posisi Benda", "Berdiri Sendiri (+ は)", "Wajib + Kata Benda"],
          rows: [
            ["Dekat Pembicara (Saya)", "これ は ほんです", "この ほん は わたしのです"],
            ["Dekat Lawan Bicara (Kamu)", "それ は なんですか", "その かばん は だれのですか"],
            ["Jauh dari Keduanya", "あれ は じしょです", "あの くるま は ミラーさんのです"],
            ["Kata Tanya", "どれ (yang mana, 3+ benda — Bab 8)", "どの + N (Bab 16)"]
          ]
        },
        {
          heading: "2. Tiga Pola Penting Bab 2 yang Sering Keluar Ujian",
          headers: ["Pola", "Rumus", "Arti & Jebakan"],
          rows: [
            ["Isi / Tentang", "N1 の N2", "にほんごの ほん = buku bahasa Jepang"],
            ["Kepemilikan Singkat", "[Pemilik] の です", "サントスさんの です = Milik Santos (JANGAN hapus の!)"],
            ["Pilihan (Atau)", "S1 か、S2 か", "「1」ですか、「7」ですか = '1' ATAU '7'? (Jawab langsung pilihannya!)"]
          ]
        }
      ]
    },
    grammar: [
      {
        num: "POIN 01",
        title: "これ・それ・あれ vs この・その・あの",
        formula: "これ／それ／あれ は N です   |   この／その／あの + N は ～です",
        explain: "Gunakan これ untuk benda di tangan/dekat pembicara, それ untuk benda di tangan/dekat lawan bicara, dan あれ untuk benda yang jauh dari keduanya. Jika ingin menyebut nama bendanya langsung ('buku ini', 'tas itu'), ganti menjadi この・その・あの + Kata Benda.",
        examples: [
          { jp: "これは じしょです。", romaji: "Kore wa jisho desu.", id: "Ini (dekat saya) adalah kamus." },
          { jp: "それは なんですか。", romaji: "Sore wa nan desu ka.", id: "Itu (dekat kamu) apa?" },
          { jp: "この かさは わたしのです。", romaji: "Kono kasa wa watashi no desu.", id: "Payung ini milik saya." }
        ],
        trap: "Jangan pernah menulis 'これ ほん' ❌! Wajib 'この ほん' ✓."
      },
      {
        num: "POIN 02",
        title: "そうです / そうじゃありません & そうですか",
        formula: "Benda + ですか → はい、そうです / いいえ、そうじゃ ありません",
        explain: "Saat pertanyaan berpredikat kata benda dijawab singkat, kita bisa memakai そうです ('benar begitu') atau そうじゃ ありません ('bukan begitu'). Sedangkan そうですか dengan intonasi turun berarti 'Oh, begitu ya' (menerima informasi baru).",
        examples: [
          { jp: "それは テレホンカードですか。…いいえ、そうじゃ ありません。", romaji: "Sore wa terehonkaado desu ka. ...Iie, sou ja arimasen.", id: "Apakah itu kartu telepon? ...Bukan, bukan begitu." },
          { jp: "この かさは あなたのですか。…いいえ、ちがいます。シュミットさんのです。", romaji: "Kono kasa wa anata no desu ka. ...Iie, chigaimasu. Shumitto-san no desu.", id: "Apakah payung ini milikmu? ...Bukan (salah). Milik Sdr. Schmidt." }
        ],
        trap: "いいえ、ちがいます ('Bukan, salah!') sangat natural dipakai untuk menyangkal kepemilikan/jenis benda."
      },
      {
        num: "POIN 03",
        title: "Pertanyaan Pilihan (～か、～か) & Kepemilikan (の です)",
        formula: "A ですか、B ですか   |   だれの N ですか → [Pemilik] の です",
        explain: "Pertanyaan pilihan menggunakan dua か ('Apakah A atau B?') dan dijawab langsung dengan menyebutkan pilihannya (tanpa はい/いいえ). Untuk kepemilikan, の tidak boleh hilang walaupun kata bendanya disingkat.",
        examples: [
          { jp: "これは ボールペンですか、シャープペンシルですか。…シャープペンシルです。", romaji: "Kore wa boorupen desu ka, shaapupenshiru desu ka. ...Shaapupenshiru desu.", id: "Ini pulpen ATAU pensil mekanik? ...Pensil mekanik." },
          { jp: "あれは だれの かばんですか。…サントスさんの です。", romaji: "Are wa dare no kaban desu ka. ...Santosu-san no desu.", id: "Itu tas milik siapa? ...Milik Sdr. Santos." }
        ],
        trap: "Bug Soal 7 & 8: サントスさんのです wajib pakai の; ～か、～か artinya ATAU (bukan dan)!"
      }
    ],
    vocab: [
      { jp: "これ / それ / あれ", romaji: "kore / sore / are", arti: "ini (dekat saya) / itu (dekat kamu) / itu (jauh)" },
      { jp: "この / その / あの (+ N)", romaji: "kono / sono / ano", arti: "~ ini / ~ itu / ~ itu (wajib + kata benda)" },
      { jp: "ほん / じしょ / ざっし / しんぶん", romaji: "hon / jisho / zasshi / shinbun", arti: "buku / kamus / majalah / koran" },
      { jp: "ノート / てちょう / めいし / カード", romaji: "nooto / techou / meishi / kaado", arti: "buku catatan / buku saku agenda / kartu nama / kartu" },
      { jp: "えんぴつ / ボールペン / シャープペンシル", romaji: "enpitsu / boorupen / shaapupenshiru", arti: "pensil / pulpen / pensil mekanik" },
      { jp: "かぎ / とけい / かさ / かばん", romaji: "kagi / tokei / kasa / kaban", arti: "kunci / jam / payung / tas" },
      { jp: "くるま / つくえ / いす", romaji: "kuruma / tsukue / isu", arti: "mobil / meja / kursi" },
      { jp: "おみやげ / チョコレート / コーヒー", romaji: "omiyage / chokoreeto / koohii", arti: "oleh-oleh / cokelat / kopi" },
      { jp: "えいご / にほんご / ～ご / なん", romaji: "eigo / nihongo / ~go / nan", arti: "bahasa Inggris / bahasa Jepang / bahasa ~ / apa" },
      { jp: "ちがいます / そうですか", romaji: "chigaimasu / sou desu ka", arti: "bukan, salah, berbeda / oh begitu ya" }
    ],
    questions: [
      { id: "b2_1", type: "mcq", badge: "Perbaikan Soal 5", prompt: "Kamu memegang buku di tanganmu sendiri: 「（　　）は にほんごの ほんです。」", promptRomaji: "( __ ) wa nihongo no hon desu.", sub: "Benda dekat pembicara & berdiri sendiri.", options: [{ jp: "これ", romaji: "kore" }, { jp: "それ", romaji: "sore" }, { jp: "あれ", romaji: "are" }, { jp: "この", romaji: "kono" }], answer: 0, explain: "BENAR: これ (dekat pembicara, berdiri sendiri sebelum は)." },
      { id: "b2_2", type: "mcq", badge: "Perbaikan Soal 6", prompt: "Lawan bicaramu memegang sebuah kunci: 「（　　）は くるまの かぎですか。」", promptRomaji: "( __ ) wa kuruma no kagi desu ka.", sub: "Benda dekat lawan bicara.", options: [{ jp: "これ", romaji: "kore" }, { jp: "それ", romaji: "sore" }, { jp: "あれ", romaji: "are" }, { jp: "その", romaji: "sono" }], answer: 1, explain: "BENAR: それ (dekat lawan bicara)." },
      { id: "b2_3", type: "mcq", badge: "Perbaikan Soal 7", prompt: "A: 「この かばんは だれの ですか。」 B: 「（　　　　　）。」 (Milik Sdr. Santos)", promptRomaji: "Kono kaban wa dare no desu ka.", sub: "Kepemilikan dengan kata benda yang disingkat.", options: [{ jp: "サントスさんです", romaji: "Santosu-san desu" }, { jp: "サントスさんのです", romaji: "Santosu-san no desu" }, { jp: "サントスさんにです", romaji: "Santosu-san ni desu" }, { jp: "サントスさんをです", romaji: "Santosu-san o desu" }], answer: 1, explain: "BENAR: サントスさんのです! Partikel の wajib dipertahankan." },
      { id: "b2_4", type: "mcq", badge: "Perbaikan Soal 8", prompt: "Apa arti dari: 「これは 「9」 ですか、「7」 ですか。」?", promptRomaji: "Kore wa '9' desu ka, '7' desu ka.", sub: "Pola dua か berjajar.", options: [{ jp: "Ini angka '9' dan '7'.", romaji: "" }, { jp: "Apakah ini angka '9' atau '7'?", romaji: "" }, { jp: "Ini bukan '9' maupun '7'.", romaji: "" }, { jp: "Angka '9' milik '7'.", romaji: "" }], answer: 1, explain: "BENAR: ～ですか、～ですか menyatakan pertanyaan pilihan ('ATAU')." },
      { id: "b2_5", type: "mcq", badge: "この vs これ", prompt: "（　　） ざっしは だれの ですか。 (Majalah ini milik siapa?)", promptRomaji: "( __ ) zasshi wa dare no desu ka.", sub: "Di belakangnya langsung ada kata benda ざっし.", options: [{ jp: "これ", romaji: "kore" }, { jp: "この", romaji: "kono" }, { jp: "それ", romaji: "sore" }, { jp: "あれ", romaji: "are" }], answer: 1, explain: "BENAR: この ざっし (wajib この karena langsung diikuti kata benda)." },
      { id: "b2_6", type: "input", badge: "Latihan Ketik", prompt: "Lengkapi: 「この ノートは わたし （　） です。」 (Buku catatan ini milik saya.)", promptRomaji: "Kono nooto wa watashi ( _ ) desu.", sub: "Ketik 1 partikel kepemilikan (Hiragana atau Romaji).", placeholder: "Ketik: の atau no", accepted: ["の", "no"], displayAnswer: "の (no)", explain: "BENAR: わたしのです (milik saya)." }
    ]
  },

  // ==================== BAB 3 ====================
  {
    num: 3,
    zone: "green",
    oldScore: "3/4",
    title: "Kata Tunjuk Tempat (ここ・こちら), Asal Produk, & Angka Harga",
    shortBug: "Skor tes lama 3/4. Materi lengkap: lokasi ここ/こちら, お国はどちら, どこのN, dan bacaan khusus ratusan/ribuan.",
    bugs: [
      { soal: "Soal 9–12", salah: "Hanya meleset 1 soal detail", benar: "ここ・そこ・あそこ・どこ (biasa) vs こちら・そちら・あちら・どちら (sopan/arah)", kenapa: "Perhatikan juga bacaan angka khusus 300, 600, 800, 3000, 8000!" }
    ],
    cheatSheet: {
      title: "Cheat Sheet Bab 3: Kata Tunjuk Tempat & Bacaan Angka Khusus",
      takeaway: "どこの N = buatan mana (negara/merek). お国は どちらですか = Negara asal Anda mana?",
      tables: [
        {
          heading: "1. Matriks Kata Tunjuk Tempat",
          headers: ["Jarak", "Tempat Biasa", "Sopan / Arah / Institusi"],
          rows: [
            ["Dekat Saya", "ここ (di sini)", "こちら (sebelah sini)"],
            ["Dekat Kamu", "そこ (di situ)", "そちら (sebelah situ)"],
            ["Jauh", "あそこ (di sana)", "あちら (sebelah sana)"],
            ["Tanya", "どこ (di mana)", "どちら (sebelah mana / perusahaan apa / negara mana)"]
          ]
        },
        {
          heading: "2. Pengecualian Bunyi Ratusan (百) & Ribuan (千) — Sering Keluar!",
          headers: ["Angka", "Bacaan Benar", "Jangan Salah Baca!"],
          rows: [
            ["300", "さんびゃく (sanbyaku)", "Bukan さんひゃく"],
            ["600", "ろっぴゃく (roppyaku)", "Bukan ろくひゃく"],
            ["800", "はっぴゃく (happyaku)", "Bukan はちひゃく"],
            ["3.000", "さんぜん (sanzen)", "Bukan さんせん"],
            ["8.000", "はっせん (hassen)", "Bukan はちせん"],
            ["10.000", "いちまん (ichiman)", "Wajib ada いち (bukan まん saja!)"]
          ]
        }
      ]
    },
    grammar: [
      {
        num: "POIN 01",
        title: "Kata Tunjuk Tempat: ここ・そこ・あそこ & こちら・そちら・あちら",
        formula: "ここ／そこ／あそこ は [Tempat] です   |   [Tempat/Orang] は ここ／そこ／あそこ です",
        explain: "Urutan topik bisa dibalik: 'Di sini adalah kantin' (`ここは しょくどうです`) atau 'Kantin ada di sini' (`しょくどうは ここです`). Bentuk こちら・そちら・あちら・どちら menunjukkan arah sekaligus bentuk lebih sopan.",
        examples: [
          { jp: "お手洗いは どちらですか。…あちらです。", romaji: "Otearai wa dochira desu ka. ...Achira desu.", id: "Toilet di sebelah mana? ...Di sebelah sana." },
          { jp: "エレベーターは あそこです。", romaji: "Erebeetaa wa asoko desu.", id: "Lift ada di sana." }
        ],
        trap: "Jika ditanya dengan どちら, jawablah dengan こちら・そちら・あちら agar setara sopannya!"
      },
      {
        num: "POIN 02",
        title: "Menanyakan Negara, Perusahaan, & Buatan Produk (どちら & どこの)",
        formula: "お国／会社 は どちらですか   |   これは どこの [Benda] ですか",
        explain: "Pertanyaan 'お国は どちらですか' atau 'かいしゃは どちらですか' bukan hanya menanyakan lokasi gedung, melainkan menanyakan NAMA negara/perusahaan/sekolah seseorang. Sedangkan `どこの + Benda` menanyakan negara atau merek pembuat barang tersebut.",
        examples: [
          { jp: "かいしゃは どちらですか。…IMCです。", romaji: "Kaisha wa dochira desu ka. ...IMC desu.", id: "Perusahaan Anda apa? ...IMC." },
          { jp: "これは どこの ワインですか。…フランスの ワインです。", romaji: "Kore wa doko no wain desu ka. ...Furansu no wain desu.", id: "Ini anggur buatan mana? ...Anggur Prancis." }
        ],
        trap: "Jangan bingung: だれの くるま (mobil milik siapa) vs どこの くるま (mobil buatan negara/merek mana)!"
      },
      {
        num: "POIN 03",
        title: "Menanyakan Harga (いくら) & Satuan Puluhan Ribu (まん)",
        formula: "[Benda] は いくらですか。 → [Angka] えんです。",
        explain: "Bahasa Jepang mengelompokkan angka besar per 4 nol (`10.000 = 1まん`, bukan 10せん). Waspadai perubahan bunyi pada 300, 600, 800, 3.000, dan 8.000.",
        examples: [
          { jp: "この ネクタイは いくらですか。…8,600えん（はっせん ろっぴゃくえん）です。", romaji: "Kono nekutai wa ikura desu ka. ...Hassen roppyaku-en desu.", id: "Dasi ini berapa harganya? ...8.600 yen." },
          { jp: "この パソコンは 15まんえんです。", romaji: "Kono pasokon wa juugoman-en desu.", id: "Laptop ini harganya 150.000 yen (15 x 10.000)." }
        ],
        trap: "100 = ひゃく dan 1.000 = せん (tanpa いち), TAPI 10.000 WAJIB pakai いち → いちまん!"
      }
    ],
    vocab: [
      { jp: "ここ / そこ / あそこ / どこ", romaji: "koko / soko / asoko / doko", arti: "di sini / di situ / di sana / di mana" },
      { jp: "こちら / そちら / あちら / どちら", romaji: "kochira / sochira / achira / dochira", arti: "sebelah sini / situ / sana / mana (sopan)" },
      { jp: "きょうしつ / しょくどう / じむしょ", romaji: "kyoushitsu / shokudou / jimusho", arti: "ruang kelas / kantin / kantor" },
      { jp: "かいぎしつ / うけつけ / ロビー / へや", romaji: "kaigishitsu / uketsuke / robii / heya", arti: "ruang rapat / resepsionis / lobi / kamar" },
      { jp: "トイレ（おてあらい） / かいだん / エレベーター", romaji: "toire (otearai) / kaidan / erebeetaa", arti: "toilet / tangga / lift" },
      { jp: "［お］くに / かいしゃ / うち", romaji: "[o]kuni / kaisha / uchi", arti: "negara / perusahaan / rumah" },
      { jp: "くつ / ネクタイ / ワイン / うりば", romaji: "kutsu / nekutai / wain / uriba", arti: "sepatu / dasi / anggur (wine) / konter penjualan" },
      { jp: "ちか / ～かい（なんがい） / いくら", romaji: "chika / ~kai (nangai) / ikura", arti: "bawah tanah / lantai ~ (lantai berapa; lt.3=さんがい!) / berapa harganya" },
      { jp: "ひゃく / せん / まん", romaji: "hyaku / sen / man", arti: "seratus / seribu / sepuluh ribu" }
    ],
    questions: [
      { id: "b3_1", type: "mcq", badge: "Murni Bab 3 · Lokasi", prompt: "かいぎしつは （　　　） ですか。…2かいです。 (Ruang rapat di mana? ...Di lantai 2.)", promptRomaji: "Kaigishitsu wa ( ___ ) desu ka.", sub: "Kata tanya untuk menanyakan tempat.", options: [{ jp: "だれ", romaji: "dare" }, { jp: "どこ", romaji: "doko" }, { jp: "いくら", romaji: "ikura" }, { jp: "なん", romaji: "nan" }], answer: 1, explain: "BENAR: どこ (di mana)." },
      { id: "b3_2", type: "mcq", badge: "Murni Bab 3 · Institusi", prompt: "A: 「おくには （　　　） ですか。」 B: 「インドネシアです。」", promptRomaji: "Okuni wa ( ___ ) desu ka.", sub: "Menanyakan negara asal secara sopan.", options: [{ jp: "どちら", romaji: "dochira" }, { jp: "どなた", romaji: "donata" }, { jp: "いくら", romaji: "ikura" }, { jp: "なに", romaji: "nani" }], answer: 0, explain: "BENAR: お国は どちらですか (Negara asal Anda mana?)." },
      { id: "b3_3", type: "mcq", badge: "Murni Bab 3 · Asal Produk", prompt: "これは （　　　） カメラですか。…にほんの カメラです。 (Kamera buatan mana?)", promptRomaji: "Kore wa ( ___ ) kamera desu ka.", sub: "Menanyakan negara/merek pembuat barang.", options: [{ jp: "だれの", romaji: "dare no" }, { jp: "どこの", romaji: "doko no" }, { jp: "なんの", romaji: "nan no" }, { jp: "いつの", romaji: "itsu no" }], answer: 1, explain: "BENAR: どこの カメラ (kamera buatan mana)." },
      { id: "b3_4", type: "mcq", badge: "Murni Bab 3 · Harga", prompt: "この くつは （　　　） ですか。…6,800えんです。", promptRomaji: "Kono kutsu wa ( ___ ) desu ka.", sub: "Kata tanya untuk harga.", options: [{ jp: "いくつ", romaji: "ikutsu" }, { jp: "いくら", romaji: "ikura" }, { jp: "なんがい", romaji: "nangai" }, { jp: "どちら", romaji: "dochira" }], answer: 1, explain: "BENAR: いくら (berapa harganya)." },
      { id: "b3_5", type: "mcq", badge: "Murni Bab 3 · Angka Khusus", prompt: "Bagaimana cara membaca harga 「3,800円」 yang BENAR?", promptRomaji: "3.800 yen = ?", sub: "Waspadai pengecualian 3.000 dan 800!", options: [{ jp: "さんせん はちひゃくえん", romaji: "sansen hachihyaku-en" }, { jp: "さんぜん はっぴゃくえん", romaji: "sanzen happyaku-en" }, { jp: "さんぜん はちひゃくえん", romaji: "sanzen hachihyaku-en" }, { jp: "さんせん はっぴゃくえん", romaji: "sansen happyaku-en" }], answer: 1, explain: "BENAR: 3.000 = さんぜん (sanzen) dan 800 = はっぴゃく (happyaku)!" },
      { id: "b3_6", type: "input", badge: "Latihan Ketik", prompt: "Bagaimana bacaan bahasa Jepang untuk angka 「600」?", promptRomaji: "600 = ?", sub: "Ketik dalam Hiragana atau Romaji.", placeholder: "Ketik: ろっぴゃく atau roppyaku", accepted: ["ろっぴゃく", "roppyaku"], displayAnswer: "ろっぴゃく (roppyaku)", explain: "BENAR: 600 dibaca ろっぴゃく (roppyaku)!" }
    ]
  },

  // ==================== BAB 4 ====================
  {
    num: 4,
    zone: "orange",
    oldScore: "1/4",
    title: "Jam, Hari, 4 Bentuk Kata Kerja ます, & Partikel に / から～まで",
    shortBug: "Zona Oranye (1/4): Lupa に pada jam (11じに), terbalik 9じはん, dan kurang でした pada negatif lampau おきませんでした.",
    bugs: [
      { soal: "Soal 13", salah: "Lupa partikel に pada jam (11じ)", benar: "11じ に ねます", kenapa: "Waktu spesifik berangka wajib memakai partikel に!" },
      { soal: "Soal 14", salah: "Terbalik posisi はん pada jam 09:30", benar: "9じ はん (kujihan)", kenapa: "Sebut jam yang sedang berjalan dulu, baru はん (lewat 30 menit)." },
      { soal: "Soal 15", salah: "Menjawab おきません untuk kalimat lampau", benar: "おきませんでした", kenapa: "Negatif lampau wajib memakai ekor ～ませんでした." }
    ],
    cheatSheet: {
      title: "Cheat Sheet Bab 4: 4 Bentuk ます, Jam/Menit Khusus, & Aturan Partikel に",
      takeaway: "Jam/Tanggal = PAKAI に. Kemarin/Hari ini/Besok/Setiap hari = TANPA に!",
      tables: [
        {
          heading: "1. Matriks 4 Bentuk Kata Kerja Sopan (ます形)",
          headers: ["Waktu", "Positif (+)", "Negatif (-)"],
          rows: [
            ["Non-Lampau (Kebiasaan / Akan)", "おきます (bangun)", "おきません (tidak bangun)"],
            ["Lampau (Sudah lewat)", "おきました (tadi bangun)", "おきませんでした (tadi tidak bangun — WAJIB でした!)"]
          ]
        },
        {
          heading: "2. Bacaan Jam & Menit Pengecualian + Kapan Pakai に",
          headers: ["Kategori", "Wajib Hafal", "Contoh"],
          rows: [
            ["Jam Khusus", "4じ=よじ, 7じ=しちじ, 9じ=くじ", "09:30 = くじ はん (BUKAN 10じはん!)"],
            ["Menit ～ぷん", "1=いっぷん, 3=さんぷん, 4=よんぷん, 6=ろっぷん, 8=はっぷん, 10=じゅっぷん", "Menit 2, 5, 7, 9 pakai ～ふん (にふん, ごふん, ななふん, きゅうふん)"],
            ["Pakai に vs Tanpa に", "Pakai に: 6じに, にちようびに (opsional) | Tanpa に: きのう, きょう, あした, まいにち, いま", "まいあさ 6じに おきます。"]
          ]
        }
      ]
    },
    grammar: [
      {
        num: "POIN 01",
        title: "4 Bentuk Kata Kerja Sopan (ます / ません / ました / ませんでした)",
        formula: "(+) V-ます  |  (-) V-ません  |  (+ Lampau) V-ました  |  (- Lampau) V-ませんでした",
        explain: "Bentuk V-ます digunakan untuk kebiasaan rutin maupun rencana masa depan. Untuk masa lampau (きのう, けさ, おととい), pastikan melihat apakah positif (`～ました`) atau negatif (`～ませんでした`).",
        examples: [
          { jp: "まいにち べんきょうします。", romaji: "Mainichi benkyou shimasu.", id: "Setiap hari belajar." },
          { jp: "きのうの ばん べんきょうしませんでした。", romaji: "Kinou no ban benkyou shimasen deshita.", id: "Kemarin malam tidak belajar." }
        ],
        trap: "Bug Soal 15: Jangan pernah menulis 'おきません' untuk kejadian kemarin! Wajib 'おきませんでした'."
      },
      {
        num: "POIN 02",
        title: "Cara Baca Jam, Menit, & はん + Partikel Waktu に",
        formula: "[Jam] じ [Menit] ふん／ぷん／はん + に + V-ます",
        explain: "はん berarti 'lewat 30 menit' dan selalu diletakkan di belakang angka jam yang sedang berjalan (`09:30 = 9じはん`). Partikel に wajib dipasang pada waktu yang mengandung angka spesifik.",
        examples: [
          { jp: "まいばん 11じに ねます。", romaji: "Maiban juuichiji ni nemasu.", id: "Setiap malam tidur pada jam 11." },
          { jp: "いま ごご 4じはん（よじはん）です。", romaji: "Ima gogo yojihan desu.", id: "Sekarang jam 4:30 sore." }
        ],
        trap: "Kata waktu relatif (`きのう`, `きょう`, `あした`, `まいあさ`, `まいにち`, `なんじ` jika tanya umum, `いま`) TIDAK memakai に!"
      },
      {
        num: "POIN 03",
        title: "Rentang Waktu・Tempat (から ～ まで) & Penghubung Benda (と)",
        formula: "N1 から N2 まで (dari ~ sampai ~)   |   N1 と N2 (N1 dan N2)",
        explain: "から menandai titik mulai dan まで menandai titik selesai (bisa dipakai berpasangan maupun sendiri-sendiri). Partikel と menggabungkan dua kata benda yang setara ('dan').",
        examples: [
          { jp: "9じから 5じまで はたらきます。", romaji: "Kuji kara goji made hatarakimasu.", id: "Bekerja dari jam 9 sampai jam 5." },
          { jp: "ぎんこうの やすみは どようびと にちようびです。", romaji: "Ginkou no yasumi wa doyoubi to nichiyoubi desu.", id: "Libur bank adalah hari Sabtu dan Minggu." }
        ],
        trap: "Partikel と HANYA menggabungkan Kata Benda! Tidak bisa menggabungkan dua kata kerja/kalimat."
      }
    ],
    vocab: [
      { jp: "おきます / ねます", romaji: "okimasu / nemasu", arti: "bangun tidur / tidur" },
      { jp: "はたらきます / やすみます", romaji: "hatarakimasu / yasumimasu", arti: "bekerja / beristirahat, libur" },
      { jp: "べんきょうします / おわります", romaji: "benkyou shimasu / owarimasu", arti: "belajar / selesai" },
      { jp: "ごぜん / ごご / いま", romaji: "gozen / gogo / ima", arti: "pagi (AM) / siang-malam (PM) / sekarang" },
      { jp: "～じ / ～ふん（ぷん） / はん", romaji: "~ji / ~fun (pun) / han", arti: "jam ~ / ~ menit / lewat 30 menit (setengah)" },
      { jp: "おととい / きのう / きょう / あした / あさって", romaji: "ototoi / kinou / kyou / ashita / asatte", arti: "kemarin lusa / kemarin / hari ini / besok / lusa" },
      { jp: "けさ / こんばん / まいあさ / まいばん / まいにち", romaji: "kesa / konban / maiasa / maiban / mainichi", arti: "tadi pagi / malam ini / setiap pagi / setiap malam / setiap hari" },
      { jp: "げつ・か・すい・もく・きん・ど・にちようび", romaji: "getsu/ka/sui/moku/kin/do/nichiyoubi", arti: "Senin / Selasa / Rabu / Kamis / Jumat / Sabtu / Minggu" },
      { jp: "デパート / ぎんこう / ゆうびんきょく / としょかん / びじゅつかん", romaji: "depaato / ginkou / yuubinkyoku / toshokan / bijutsukan", arti: "dept. store / bank / kantor pos / perpustakaan / museum seni" },
      { jp: "ばんごう / なんばん", romaji: "bangou / nanban", arti: "nomor / nomor berapa" }
    ],
    questions: [
      { id: "b4_1", type: "mcq", badge: "Perbaikan Soal 13", prompt: "わたしは まいばん 11じ （　　） ねます。", promptRomaji: "Watashi wa maiban juuichiji ( _ ) nemasu.", sub: "Partikel untuk waktu jam spesifik.", options: [{ jp: "で", romaji: "de" }, { jp: "に", romaji: "ni" }, { jp: "を", romaji: "o" }, { jp: "へ", romaji: "e" }], answer: 1, explain: "BENAR: 11じに ねます (waktu jam wajib pakai に)." },
      { id: "b4_2", type: "mcq", badge: "Perbaikan Soal 14", prompt: "Pukul 「09:30」 dalam bahasa Jepang disebut...", promptRomaji: "09:30 = ?", sub: "Jam yang berjalan + はん.", options: [{ jp: "はん 9じ", romaji: "han kuji" }, { jp: "10じ はん", romaji: "juuji han" }, { jp: "9じ はん", romaji: "kuji han" }, { jp: "9じ 30はん", romaji: "kuji sanjuuhan" }], answer: 2, explain: "BENAR: 9じはん (kujihan)!" },
      { id: "b4_3", type: "mcq", badge: "Perbaikan Soal 15", prompt: "きのう 6じに （　　　　　）。 (Kemarin TIDAK bangun jam 6.)", promptRomaji: "Kinou rokuji ni ( _____ ).", sub: "きのう (lampau) + negatif!", options: [{ jp: "おきません", romaji: "okimasen" }, { jp: "おきました", romaji: "okimashita" }, { jp: "おきませんでした", romaji: "okimasen deshita" }, { jp: "おきますでした", romaji: "okimasu deshita" }], answer: 2, explain: "BENAR: おきませんでした (negatif lampau wajib ada でした)." },
      { id: "b4_4", type: "mcq", badge: "Murni Bab 4 · Rentang", prompt: "ひるやすみは 12じ （　　） 1じ （　　） です。", promptRomaji: "Hiruyasumi wa 12-ji ( __ ) 1-ji ( __ ) desu.", sub: "Dari jam 12 sampai jam 1.", options: [{ jp: "に ・ で", romaji: "ni · de" }, { jp: "から ・ まで", romaji: "kara · made" }, { jp: "まで ・ から", romaji: "made · kara" }, { jp: "と ・ も", romaji: "to · mo" }], answer: 1, explain: "BENAR: から (dari) ... まで (sampai)." },
      { id: "b4_5", type: "mcq", badge: "Murni Bab 4 · Jam Khusus", prompt: "Bagaimana bacaan yang BENAR untuk 「4時」 (jam 4) dan 「9時」 (jam 9)?", promptRomaji: "Jam 4 & Jam 9 = ?", sub: "Hati-hati pengecualian bacaan jam!", options: [{ jp: "よんじ ・ きゅうじ", romaji: "yonji · kyuuji" }, { jp: "よじ ・ くじ", romaji: "yoji · kuji" }, { jp: "しじ ・ くじ", romaji: "shiji · kuji" }, { jp: "よじ ・ きゅうじ", romaji: "yoji · kyuuji" }], answer: 1, explain: "BENAR: 4時 = よじ (yoji), 9時 = くじ (kuji), dan 7時 = しちじ (shichiji)!" },
      { id: "b4_6", type: "input", badge: "Latihan Ketik", prompt: "Ubah 「はたらきます」 (bekerja) menjadi NEGATIF LAMPAU sopan!", promptRomaji: "hatarakimasu → tidak bekerja (kemarin)", sub: "Ketik Hiragana atau Romaji.", placeholder: "Ketik: はたらきませんでした atau hatarakimasen deshita", accepted: ["はたらきませんでした", "hatarakimasen deshita", "hatarakimasendeshita"], displayAnswer: "はたらきませんでした (hatarakimasen deshita)", explain: "BENAR: はたらきませんでした!" }
    ]
  },

  // ==================== BAB 5 ====================
  {
    num: 5,
    zone: "red",
    oldScore: "0/4",
    title: "Perpindahan (へ・で・と), Waktu せん/こん/らい, & Tanggal Khusus",
    shortBug: "Zona Merah (0/4): Tertukar と vs で, らいしゅう dikira minggu lalu, dan salah baca tanggal 24 (にじゅうよっか).",
    bugs: [
      { soal: "Soal 17", salah: "Memakai で untuk bersama teman", benar: "ともだち と いきます", kenapa: "Bersama seseorang wajib memakai と (sendirian baru ひとりで)." },
      { soal: "Soal 18", salah: "Memakai に untuk kendaraan taksi", benar: "タクシー で いきます", kenapa: "Kendaraan/alat transportasi wajib memakai で (jalan kaki: あるいて tanpa で)." },
      { soal: "Soal 19", salah: "らいしゅう diartikan minggu lalu", benar: "らいしゅう = MINGGU DEPAN", kenapa: "せん = lalu, こん = ini, らい = depan/yang akan datang." },
      { soal: "Soal 20", salah: "Salah baca tanggal 24", benar: "24日 = にじゅうよっか", kenapa: "Tanggal 4, 14, 24 selalu berakhiran よっか!" }
    ],
    cheatSheet: {
      title: "Cheat Sheet Bab 5: Trio Partikel Mobilitas & Kalender Lengkap",
      takeaway: "Bersama = と (kecuali ひとりで). Kendaraan = で (kecuali あるいて tanpa で). Tujuan = へ.",
      tables: [
        {
          heading: "1. Peta Partikel Perpindahan (行きます・来ます・帰ります)",
          headers: ["Fungsi", "Partikel / Bentuk", "Pengecualian Wajib Ingat!"],
          rows: [
            ["Arah Tujuan", "[Tempat] へ (dibaca 'e')", "どこも いきません = Tidak pergi ke mana pun"],
            ["Alat Transportasi", "[Kendaraan] で (でんしゃで, タクシーで)", "Jalan kaki = あるいて (TANPA で!)"],
            ["Bersama Siapa", "[Orang] と (ともだちと, かぞくと)", "Sendirian = ひとりで (PAKAI で, bukan と!)"],
            ["Kapan", "[Tanggal/Bulan] に", "Kata tanya いつ (kapan) TIDAK pernah pakai に!"]
          ]
        },
        {
          heading: "2. Tabel Bacaan Tanggal Khusus (WAJIB HAFAL MATI!)",
          headers: ["Tanggal", "Bacaan", "Tanggal", "Bacaan"],
          rows: [
            ["1日 / 2日 / 3日", "ついたち / ふつか / みっか", "8日 / 9日 / 10日", "ようか / ここのか / とおか"],
            ["4日 / 5日 / 6日 / 7日", "よっか / いつか / むいか / なのか", "14日 / 20日 / 24日", "じゅうよっか / はつか / にじゅうよっか"]
          ]
        }
      ]
    },
    grammar: [
      {
        num: "POIN 01",
        title: "Arah Tujuan (へ), Kendaraan (で), & Bersama Siapa (と)",
        formula: "[Orang] と + [Kendaraan] で + [Tempat] へ + 行きます／来ます／帰ります",
        explain: "Partikel へ ditulis 'he' tapi wajib dibaca 'e'. Gunakan で untuk semua jenis transportasi, dan と untuk orang yang menemani perjalanan.",
        examples: [
          { jp: "かぞくと しんかんせんで きょうとへ いきます。", romaji: "Kazoku to shinkansen de Kyouto e ikimasu.", id: "Pergi ke Kyoto naik Shinkansen bersama keluarga." },
          { jp: "ひとりで あるいて えきへ いきます。", romaji: "Hitori de aruite eki e ikimasu.", id: "Pergi ke stasiun berjalan kaki sendirian." }
        ],
        trap: "Jangan sampai terbalik: ひとりで (sendirian pakai で) dan あるいて (jalan kaki TANPA で)!"
      },
      {
        num: "POIN 02",
        title: "Penyangkalan Total: どこ［へ］も 行きません / 行きませんでした",
        formula: "どこ（へ）も + V-ません／V-ませんでした",
        explain: "Saat kata tanya diikuti も dan kata kerja negatif, maknanya menjadi penyangkalan mutlak ('tidak pergi ke mana pun'). Partikel へ boleh dihilangkan.",
        examples: [
          { jp: "にちようびは どこも いきませんでした。", romaji: "Nichiyoubi wa doko mo ikimasen deshita.", id: "Hari Minggu kemarin tidak pergi ke mana-mana." }
        ],
        trap: "Jika ada も setelah kata tanya `どこ`, ujung kalimatnya WAJIB negatif!"
      },
      {
        num: "POIN 03",
        title: "Sistem Waktu せん・こん・らい, Bulan, Tanggal, & いつ",
        formula: "せん～ (lalu) · こん～ (ini) · らい～ (depan)   |   4月(しがつ), 7月(しちがつ), 9月(くがつ)",
        explain: "Hafalkan bacaan khusus bulan 4, 7, 9 dan tanggal 1–10, 14, 20, 24. Kata tanya いつ ('kapan') menanyakan waktu secara umum (bukan hanya jam) dan tidak pernah diikuti partikel に.",
        examples: [
          { jp: "いつ にほんへ きましたか。…3がつ 24か（にじゅうよっか）に きました。", romaji: "Itsu Nihon e kimashita ka. ...Sangatsu nijuuyokka ni kimashita.", id: "Kapan datang ke Jepang? ...Datang pada tanggal 24 Maret." },
          { jp: "らいしゅうの きんようび 東京へ いきます。", romaji: "Raishuu no kinyoubi Toukyou e ikimasu.", id: "Jumat minggu depan pergi ke Tokyo." }
        ],
        trap: "Jangan pernah menulis 'いつに' ❌! Cukup 'いつ' saja ✓."
      }
    ],
    vocab: [
      { jp: "いきます / きます / かえります", romaji: "ikimasu / kimasu / kaerimasu", arti: "pergi / datang / pulang" },
      { jp: "がっこう / スーパー / えき", romaji: "gakkou / suupaa / eki", arti: "sekolah / supermarket / stasiun" },
      { jp: "ひこうき / ふね / でんしゃ / ちかてつ / しんかんせん", romaji: "hikouki / fune / densha / chikatetsu / shinkansen", arti: "pesawat / kapal laut / kereta listrik / MRT bawah tanah / kereta cepat" },
      { jp: "バス / タクシー / じてんしゃ / あるいて", romaji: "basu / takushii / jitensha / aruite", arti: "bus / taksi / sepeda / dengan berjalan kaki" },
      { jp: "ひと / ともだち / かれ / かのじょ / かぞく / ひとりで", romaji: "hito / tomodachi / kare / kanojo / kazoku / hitori de", arti: "orang / teman / dia (lk) / dia (pr) / keluarga / sendirian" },
      { jp: "せんしゅう / こんしゅう / らいしゅう", romaji: "senshuu / konshuu / raishuu", arti: "minggu lalu / minggu ini / minggu depan" },
      { jp: "せんげつ / こんげつ / らいげつ", romaji: "sengetsu / kongetsu / raigetsu", arti: "bulan lalu / bulan ini / bulan depan" },
      { jp: "きょねん / ことし / らいねん", romaji: "kyonen / kotoshi / rainen", arti: "tahun lalu / tahun ini / tahun depan" },
      { jp: "いつ / たんじょうび / ふつう / きゅうこう / とっきゅう", romaji: "itsu / tanjoubi / futsuu / kyuukou / tokkyuu", arti: "kapan / ulang tahun / kereta biasa / ekspres / super ekspres" }
    ],
    questions: [
      { id: "b5_1", type: "mcq", badge: "Perbaikan Soal 17", prompt: "ともだち （　　） おおさかへ いきます。 (Pergi ke Osaka BERSAMA teman.)", promptRomaji: "Tomodachi ( _ ) Oosaka e ikimasu.", sub: "Partikel bersama orang.", options: [{ jp: "で", romaji: "de" }, { jp: "と", romaji: "to" }, { jp: "に", romaji: "ni" }, { jp: "を", romaji: "o" }], answer: 1, explain: "BENAR: ともだちと (bersama teman memakai と)." },
      { id: "b5_2", type: "mcq", badge: "Perbaikan Soal 18", prompt: "タクシー （　　） うちへ かえります。 (Pulang ke rumah NAIK taksi.)", promptRomaji: "Takushii ( _ ) uchi e kaerimasu.", sub: "Partikel alat transportasi.", options: [{ jp: "に", romaji: "ni" }, { jp: "を", romaji: "o" }, { jp: "で", romaji: "de" }, { jp: "と", romaji: "to" }], answer: 2, explain: "BENAR: タクシーで (kendaraan memakai で)." },
      { id: "b5_3", type: "mcq", badge: "Perbaikan Soal 19", prompt: "Apa arti dari kosakata waktu 「らいしゅう」?", promptRomaji: "raishuu = ?", sub: "せん (lalu) · こん (ini) · らい (?)", options: [{ jp: "minggu lalu", romaji: "" }, { jp: "minggu ini", romaji: "" }, { jp: "minggu depan", romaji: "" }, { jp: "bulan depan", romaji: "" }], answer: 2, explain: "BENAR: らいしゅう = minggu depan!" },
      { id: "b5_4", type: "mcq", badge: "Perbaikan Soal 20", prompt: "Bagaimana bacaan yang BENAR untuk tanggal 「24日」?", promptRomaji: "Tanggal 24 = ?", sub: "Pengecualian angka berujung 4.", options: [{ jp: "にじゅうよんにち", romaji: "nijuuyonnichi" }, { jp: "にじゅうしにち", romaji: "nijuushinichi" }, { jp: "にじゅうよっか", romaji: "nijuuyokka" }, { jp: "はつかよっか", romaji: "hatsukayokka" }], answer: 2, explain: "BENAR: にじゅうよっか (nijuuyokka)!" },
      { id: "b5_5", type: "mcq", badge: "Murni Bab 5 · Pengecualian", prompt: "Kalimat mana yang 100% BENAR untuk 'Pergi ke stasiun berjalan kaki sendirian'?", promptRomaji: "Cek aturan ひとりで & あるいて!", options: [{ jp: "ひとりと あるいてで えきへ いきます。", romaji: "Hitori to aruite de eki e ikimasu." }, { jp: "ひとりで あるいて えきへ いきます。", romaji: "Hitori de aruite eki e ikimasu." }, { jp: "ひとりで あるいてで えきへ いきます。", romaji: "Hitori de aruite de eki e ikimasu." }, { jp: "ひとりに あるいて えきへ いきます。", romaji: "Hitori ni aruite eki e ikimasu." }], answer: 1, explain: "BENAR: ひとりで (pakai で) dan あるいて (tanpa で)!" },
      { id: "b5_6", type: "input", badge: "Latihan Ketik", prompt: "Ketik bacaan bahasa Jepang untuk tanggal 「20日」 (tanggal 20)!", promptRomaji: "Tanggal 20 = ?", sub: "Ketik Hiragana atau Romaji.", placeholder: "Ketik: はつか atau hatsuka", accepted: ["はつか", "hatsuka"], displayAnswer: "はつか (hatsuka)", explain: "BENAR: はつか (hatsuka)!" }
    ]
  }
);
