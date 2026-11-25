/* Modul Kana Dasar: Hiragana (46) + Katakana (46) + Aturan Bunyi + Huruf Kembar + 40 Soal Kuis Tanpa Timer */
window.MNN_KANA_DATA = {
  title: "Hiragana & Katakana Lengkap (五十音 + 濁音 + 拗音 + 促音 + 長音)",
  subtitle: "Klik huruf mana saja untuk mendengarkan pelafalan Jepang (🔊) beserta contoh kata wajib JLPT N5.",

  hiraganaRows: [
    { row: "あ行", cells: [
      { k: "あ", r: "a",  w: "あさ",       wr: "asa",       wa: "pagi" },
      { k: "い", r: "i",  w: "いす",       wr: "isu",       wa: "kursi" },
      { k: "う", r: "u",  w: "うみ",       wr: "umi",       wa: "laut" },
      { k: "え", r: "e",  w: "えき",       wr: "eki",       wa: "stasiun" },
      { k: "お", r: "o",  w: "おちゃ",     wr: "ocha",      wa: "teh hijau" }
    ]},
    { row: "か行", cells: [
      { k: "か", r: "ka", w: "かさ",       wr: "kasa",      wa: "payung" },
      { k: "き", r: "ki", w: "きっぷ",     wr: "kippu",     wa: "karcis / tiket" },
      { k: "く", r: "ku", w: "くつ",       wr: "kutsu",     wa: "sepatu" },
      { k: "け", r: "ke", w: "けさ",       wr: "kesa",      wa: "tadi pagi" },
      { k: "こ", r: "ko", w: "こども",     wr: "kodomo",    wa: "anak-anak" }
    ]},
    { row: "さ行", cells: [
      { k: "さ", r: "sa",  w: "さかな",    wr: "sakana",    wa: "ikan" },
      { k: "し", r: "shi", w: "しごと",    wr: "shigoto",   wa: "pekerjaan" },
      { k: "す", r: "su",  w: "すし",      wr: "sushi",     wa: "sushi" },
      { k: "せ", r: "se",  w: "せんせい",  wr: "sensei",    wa: "guru" },
      { k: "そ", r: "so",  w: "そら",      wr: "sora",      wa: "langit" }
    ]},
    { row: "た行", cells: [
      { k: "た", r: "ta",  w: "たまご",    wr: "tamago",    wa: "telur" },
      { k: "ち", r: "chi", w: "ちず",      wr: "chizu",     wa: "peta" },
      { k: "つ", r: "tsu", w: "つくえ",    wr: "tsukue",    wa: "meja tulis" },
      { k: "て", r: "te",  w: "てがみ",    wr: "tegami",    wa: "surat" },
      { k: "と", r: "to",  w: "とけい",    wr: "tokei",     wa: "jam" }
    ]},
    { row: "な行", cells: [
      { k: "な", r: "na", w: "なまえ",     wr: "namae",     wa: "nama" },
      { k: "に", r: "ni", w: "にほん",     wr: "Nihon",     wa: "Jepang" },
      { k: "ぬ", r: "nu", w: "いぬ",       wr: "inu",       wa: "anjing" },
      { k: "ね", r: "ne", w: "ねこ",       wr: "neko",      wa: "kucing" },
      { k: "の", r: "no", w: "のみもの",   wr: "nomimono",  wa: "minuman" }
    ]},
    { row: "は行", cells: [
      { k: "は", r: "ha", w: "はな",       wr: "hana",      wa: "bunga / hidung" },
      { k: "ひ", r: "hi", w: "ひこうき",   wr: "hikouki",   wa: "pesawat" },
      { k: "ふ", r: "fu", w: "ふね",       wr: "fune",      wa: "kapal laut" },
      { k: "へ", r: "he", w: "へや",       wr: "heya",      wa: "kamar" },
      { k: "ほ", r: "ho", w: "ほん",       wr: "hon",       wa: "buku" }
    ]},
    { row: "ま行", cells: [
      { k: "ま", r: "ma", w: "まど",       wr: "mado",      wa: "jendela" },
      { k: "み", r: "mi", w: "みず",       wr: "mizu",      wa: "air" },
      { k: "む", r: "mu", w: "むし",       wr: "mushi",     wa: "serangga" },
      { k: "め", r: "me", w: "めがね",     wr: "megane",    wa: "kacamata" },
      { k: "も", r: "mo", w: "もの",       wr: "mono",      wa: "barang" }
    ]},
    { row: "や行", cells: [
      { k: "や", r: "ya", w: "やま",       wr: "yama",      wa: "gunung" },
      null,
      { k: "ゆ", r: "yu", w: "ゆき",       wr: "yuki",      wa: "salju" },
      null,
      { k: "よ", r: "yo", w: "よる",       wr: "yoru",      wa: "malam" }
    ]},
    { row: "ら行", cells: [
      { k: "ら", r: "ra", w: "らいねん",   wr: "rainen",    wa: "tahun depan" },
      { k: "り", r: "ri", w: "りんご",     wr: "ringo",     wa: "apel" },
      { k: "る", r: "ru", w: "ひる",       wr: "hiru",      wa: "siang" },
      { k: "れ", r: "re", w: "れいぞうこ", wr: "reizouko",  wa: "kulkas" },
      { k: "ろ", r: "ro", w: "ろく",       wr: "roku",      wa: "enam (6)" }
    ]},
    { row: "わ行", cells: [
      { k: "わ", r: "wa",    w: "わたし",  wr: "watashi",   wa: "saya" },
      null,
      null,
      null,
      { k: "を", r: "o (wo)", w: "ほんを よむ", wr: "hon o yomu", wa: "partikel objek を" }
    ]},
    { row: "ん", cells: [
      { k: "ん", r: "n / m", w: "しんぶん", wr: "shinbun",   wa: "koran" },
      null,
      null,
      null,
      null
    ]}
  ],

  katakanaRows: [
    { row: "ア行", cells: [
      { k: "ア", r: "a", w: "アメリカ",    wr: "Amerika",    wa: "Amerika Serikat" },
      { k: "イ", r: "i", w: "インドネシア", wr: "Indoneshia", wa: "Indonesia" },
      { k: "ウ", r: "u", w: "ウイスキー",  wr: "uisukii",    wa: "wiski" },
      { k: "エ", r: "e", w: "エレベーター", wr: "erebeetaa",  wa: "lift" },
      { k: "オ", r: "o", w: "オレンジ",    wr: "orenji",     wa: "jeruk" }
    ]},
    { row: "カ行", cells: [
      { k: "カ", r: "ka", w: "カメラ",     wr: "kamera",     wa: "kamera" },
      { k: "キ", r: "ki", w: "キロ",       wr: "kiro",       wa: "kilo(gram/meter)" },
      { k: "ク", r: "ku", w: "クラス",     wr: "kurasu",     wa: "kelas" },
      { k: "ケ", r: "ke", w: "ケーキ",     wr: "keeki",      wa: "kue" },
      { k: "コ", r: "ko", w: "コーヒー",   wr: "koohii",     wa: "kopi" }
    ]},
    { row: "サ行", cells: [
      { k: "サ", r: "sa",  w: "サッカー",   wr: "sakkaa",     wa: "sepak bola" },
      { k: "シ", r: "shi", w: "シャツ",     wr: "shatsu",     wa: "kemeja" },
      { k: "ス", r: "su",  w: "スーパー",   wr: "suupaa",     wa: "supermarket" },
      { k: "セ", r: "se",  w: "セーター",   wr: "seetaa",     wa: "sweter" },
      { k: "ソ", r: "so",  w: "ソファ",     wr: "sofa",       wa: "sofa" }
    ]},
    { row: "タ行", cells: [
      { k: "タ", r: "ta",  w: "タクシー",   wr: "takushii",   wa: "taksi" },
      { k: "チ", r: "chi", w: "チーズ",     wr: "chiizu",     wa: "keju" },
      { k: "ツ", r: "tsu", w: "ツアー",     wr: "tsuaa",      wa: "tur wisata" },
      { k: "テ", r: "te",  w: "テレビ",     wr: "terebi",     wa: "televisi" },
      { k: "ト", r: "to",  w: "トイレ",     wr: "toire",      wa: "toilet" }
    ]},
    { row: "ナ行", cells: [
      { k: "ナ", r: "na", w: "ナイフ",      wr: "naifu",      wa: "pisau" },
      { k: "ニ", r: "ni", w: "ニュース",    wr: "nyuusu",     wa: "berita" },
      { k: "ヌ", r: "nu", w: "ヌードル",    wr: "nuudoru",    wa: "mi" },
      { k: "ネ", r: "ne", w: "ネクタイ",    wr: "nekutai",    wa: "dasi" },
      { k: "ノ", r: "no", w: "ノート",      wr: "nooto",      wa: "buku catatan" }
    ]},
    { row: "ハ行", cells: [
      { k: "ハ", r: "ha", w: "ハンカチ",    wr: "hankachi",   wa: "saputangan" },
      { k: "ヒ", r: "hi", w: "ビール",      wr: "biiru",      wa: "bir (pakai ゛)" },
      { k: "フ", r: "fu", w: "フォーク",    wr: "fooku",      wa: "garpu" },
      { k: "ヘ", r: "he", w: "ヘルメット",  wr: "herumetto",  wa: "helm" },
      { k: "ホ", r: "ho", w: "ホテル",      wr: "hoteru",     wa: "hotel" }
    ]},
    { row: "マ行", cells: [
      { k: "マ", r: "ma", w: "マレーシア",  wr: "Mareeshia",  wa: "Malaysia" },
      { k: "ミ", r: "mi", w: "ミルク",      wr: "miruku",     wa: "susu" },
      { k: "ム", r: "mu", w: "ゲーム",      wr: "geemu",      wa: "permainan / gim" },
      { k: "メ", r: "me", w: "メモ",        wr: "memo",       wa: "catatan singkat" },
      { k: "モ", r: "mo", w: "モノレール",  wr: "monoreeru",  wa: "monorel" }
    ]},
    { row: "ヤ行", cells: [
      { k: "ヤ", r: "ya", w: "ヤング",      wr: "yangu",      wa: "muda" },
      null,
      { k: "ユ", r: "yu", w: "ユニフォーム", wr: "yunifoomu", wa: "seragam" },
      null,
      { k: "ヨ", r: "yo", w: "ヨーロッパ",  wr: "Yooroppa",   wa: "Eropa" }
    ]},
    { row: "ラ行", cells: [
      { k: "ラ", r: "ra", w: "ラーメン",    wr: "raamen",     wa: "ramen" },
      { k: "リ", r: "ri", w: "リスト",      wr: "risuto",     wa: "daftar" },
      { k: "ル", r: "ru", w: "ルール",      wr: "ruuru",      wa: "aturan" },
      { k: "レ", r: "re", w: "レストラン",  wr: "resutoran",  wa: "restoran" },
      { k: "ロ", r: "ro", w: "ロビー",      wr: "robii",      wa: "lobi hotel" }
    ]},
    { row: "ワ行", cells: [
      { k: "ワ", r: "wa", w: "ワイン",      wr: "wain",       wa: "anggur (wine)" },
      null,
      null,
      null,
      { k: "ヲ", r: "o (wo)", w: "ヲ",      wr: "o",          wa: "jarang dipakai modern" }
    ]},
    { row: "ン", cells: [
      { k: "ン", r: "n / m", w: "パン",     wr: "pan",        wa: "roti" },
      null,
      null,
      null,
      null
    ]}
  ],

  specialRules: [
    {
      title: "1. Dakuten (゛) & Handakuten (゜) — Bunyi Bersuara",
      desc: "Tanda kutip dua (゛) mengubah konsonan k→g, s→z/j, t→d, h→b. Lingkaran kecil (゜) hanya untuk baris ha menjadi p.",
      rows: [
        { k: "が・ぎ・ぐ・げ・ご / ガ・ギ・グ・ゲ・ゴ", r: "ga gi gu ge go", ex: "ぎんこう (ginkou = bank) · ギター (gitaa = gitar)" },
        { k: "ざ・じ・ず・ぜ・ぞ / ザ・ジ・ズ・ゼ・ゾ", r: "za ji zu ze zo", ex: "ざっし (zasshi = majalah) · ジーンズ (jiinzu = jeans)" },
        { k: "だ・ぢ・づ・で・ど / ダ・ヂ・ヅ・デ・ド", r: "da ji zu de do", ex: "でんしゃ (densha = kereta) · ともだち (tomodachi = teman)" },
        { k: "ば・び・ぶ・べ・ぼ / バ・ビ・ブ・ベ・ボ", r: "ba bi bu be bo", ex: "ばんごはん (bangohan) · バス (basu = bus)" },
        { k: "ぱ・ぴ・ぷ・ぺ・ぽ / パ・ピ・プ・ペ・ポ", r: "pa pi pu pe po", ex: "きっぷ (kippu = tiket) · デパート (depaato = mal)" }
      ],
      note: "Pada keyboard & N5: bunyi ji memakai じ, dan bunyi zu memakai ず. Huruf ぢ (ji) & づ (zu) hanya muncul di kata majemuk seperti つづく / はなぢ."
    },
    {
      title: "2. Yōon (拗音) — Gabungan dengan ゃ・ゅ・ょ Kecil",
      desc: "Huruf berakhiran -i (き・し・ち・に・ひ・み・り + ゛゜) digabung dengan ゃ / ゅ / ょ KECIL dibaca 1 ketukan menyatu.",
      rows: [
        { k: "きゃ・きゅ・きょ / ぎゃ・ぎゅ・ぎょ", r: "kya kyu kyo / gya gyu gyo", ex: "きょう (kyou = hari ini) · ぎゅうにゅう (gyuunyuu = susu sapi)" },
        { k: "しゃ・しゅ・しょ / じゃ・じゅ・じょ", r: "sha shu sho / ja ju jo", ex: "かいしゃ (kaisha = kantor) · しゅみ (shumi) · じしょ (jisho = kamus)" },
        { k: "ちゃ・ちゅ・ちょ / にゃ・にゅ・にょ", r: "cha chu cho / nya nyu nyo", ex: "おちゃ (ocha = teh) · ちゅうごく (Chuugoku)" },
        { k: "ひゃ・ひゅ・ひょ / びゃ・びゅ・びょ / ぴゃ・ぴゅ・ぴょ", r: "hya hyu hyo / bya / pya", ex: "さんびゃく (sanbyaku = 300) · びょういん (byouin = rumah sakit)" },
        { k: "みゃ・みゅ・みょ / りゃ・りゅ・りょ", r: "mya myu myo / rya ryu ryo", ex: "りょこう (ryokou = wisata) · りょうり (ryouri = masakan)" }
      ],
      note: "AWAS BEDA UKURAN HURUF! びょういん (byouin, ょ kecil) = rumah sakit, sedangkan びよういん (biyouin, よ besar) = salon kecantikan!"
    },
    {
      title: "3. Sokuon (促音) — っ / ッ Kecil (Konsonan Rangkap 1 Ketukan Henti)",
      desc: "Huruf っ / ッ kecil menahan bunyi sebentar lalu menggandakan huruf konsonan di depannya (contoh: k→kk, t→tt, p→pp, s→ss).",
      rows: [
        { k: "きって vs きて", r: "kitte vs kite", ex: "きって = perangko · きて = datanglah (bentuk -te)" },
        { k: "ざっし · いっさい · にっぽん", r: "zasshi · issai · Nippon", ex: "っ kecil sebelum s/p membuat konsonan dobel ss / pp" },
        { k: "マッチ vs マチ", r: "matchi vs machi", ex: "Untuk ち (chi) / チ, huruf ganda ditulis tch (いっち, マッチ)" },
        { k: "コップ · ベッド · サッカー", r: "koppu · beddo · sakkaa", ex: "ッ kecil di Katakana: gelas (koppu), tempat tidur (beddo), sepak bola" }
      ],
      note: "Jangan sampai menghilangkan っ kecil saat membaca! きっぷ (kippu = karcis), みっか (mikka = tanggal 3), よっか (yokka = tanggal 4)."
    },
    {
      title: "4. Chōon (長音) — Vokal Panjang (Hiragana vs Strip ー Katakana)",
      desc: "Panjang pendek vokal mengubah arti kata! Di Hiragana ditambah huruf vokal; di Katakana cukup memakai garis panjang ー.",
      rows: [
        { k: "おばあさん vs おばさん", r: "obaasan vs obasan", ex: "おばあさん = nenek (panjang aa) · おばさん = bibi (pendek)" },
        { k: "おじいさん vs おじさん", r: "ojiisan vs ojisan", ex: "おじいさん = kakek (panjang ii) · おじさん = paman (pendek)" },
        { k: "え + い (せんせい · とけい · えいが)", r: "ee (dibaca 'ee' panjang)", ex: "Dalam pelafalan alami, えい dibaca 'ee' panjang (sensee, tokee)" },
        { k: "お + う (おはよう · ありがとう) & お + お (おおきい)", r: "oo (sama-sama vokal o panjang)", ex: "Biasanya pakai う (がっこう), tapi sebagian pakai お (おおきい・とおか・こおり)" },
        { k: "Katakana pakai 「ー」", r: "tanda panjang vokal", ex: "コーヒー (koohii) · スーパー (suupaa) · タクシー (takushii) · セーター (seetaa)" }
      ],
      note: "Di ketikan Romaji HP/komputer, tetap ketik sesuai ejaannya: せんせい diketik 'sensei', おおきい diketik 'ookii', コーヒー diketik 'koohii'."
    }
  ],

  lookalikes: [
    {
      pair: "シ vs ツ",
      names: "shi (シ)  vs  tsu (ツ)",
      wordA: "シャツ (shatsu = kemeja)",
      wordB: "タクシー (takushii = taksi) / ツアー",
      tip: "シ (shi): dua titik tersusun VERTIKAL dari atas ke bawah, garis panjang ditarik NAIK dari kiri bawah ke kanan atas (seperti mata melihat ke samping). ツ (tsu): dua titik berdampingan HORIZONTAL di atas, garis panjang TURUN dari atas ke bawah (seperti hujan turun)."
    },
    {
      pair: "ソ vs ン",
      names: "so (ソ)  vs  n (ン)",
      wordA: "ソファ (sofa) / パソコン (pasokon)",
      wordB: "パン (pan = roti) / インドネシア",
      tip: "Sama persis pola arahnya dengan シ/ツ! ソ (so) turun dari atas ke bawah (sama seperti ツ). ン (n) naik dari kiri bawah ke kanan atas seperti tanda centang ✓ (sama seperti シ)."
    },
    {
      pair: "ぬ vs め",
      names: "nu (ぬ)  vs  me (め)",
      wordA: "いぬ (inu = anjing)",
      wordB: "めがね (megane = kacamata) / あめ",
      tip: "ぬ (nu) punya EKOR simpul melingkar di kanan bawah (ingat: 'nu' = noodle/mi yang melingkar). め (me) berakhir halus tanpa simpul lingkaran (ingat: 'me' = mata)."
    },
    {
      pair: "わ vs れ vs ね",
      names: "wa (わ)  vs  re (れ)  vs  ne (ね)",
      wordA: "わたし (watashi) / これ (kore)",
      wordB: "ねこ (neko = kucing)",
      tip: "Semuanya berawal garis tiang tegak kiri + zig-zag. Bedanya di ujung kanan: わ melengkung masuk ke dalam, れ mencuat keluar ke kanan atas, ね melingkar simpul di bawah (sama dengan ekor ぬ)."
    },
    {
      pair: "る vs ろ",
      names: "ru (る)  vs  ro (ろ)",
      wordA: "ひる (hiru = siang) / くるま",
      wordB: "ろく (roku = 6) / しろい (shiroi)",
      tip: "る punya simpul bulat di bagian bawah (ingat 'ru-by' ada permatanya), sedangkan ろ terbuka polos seperti angka 3 tanpa permata."
    },
    {
      pair: "さ vs き vs ち",
      names: "sa (さ)  vs  ki (き)  vs  chi (ち)",
      wordA: "かさ (kasa = payung) / えき (eki)",
      wordB: "うち (uchi = rumah) / くち (kuchi)",
      tip: "さ punya 1 palang melintang; き punya 2 palang melintang (ingat kuncinya 2 gigi). ち miring ke kiri atas lalu melingkar ke kanan seperti angka 5."
    },
    {
      pair: "は vs ほ vs ま",
      names: "ha (は)  vs  ho (ほ)  vs  ma (ま)",
      wordA: "はな (hana) / ほん (hon)",
      wordB: "まど (mado = jendela) / いま",
      tip: "は punya tiang kiri + 1 palang kanan; ほ punya tiang kiri + 2 palang kanan (garis vertikal kanan TIDAK tembus atap palang atas); ま tidak punya tiang kiri dan 2 palangnya ditembus lurus dari atas."
    },
    {
      pair: "ク vs タ vs ケ",
      names: "ku (ク)  vs  ta (タ)  vs  ke (ケ)",
      wordA: "クラス (kurasu) / タクシー (takushii)",
      wordB: "ケーキ (keeki = kue)",
      tip: "ク polos bagian dalam; タ punya satu guratan kecil di tengah (mirip kanji malam 夕); ケ bergeser jauh garis kirinya membuka seperti huruf K besar."
    }
  ],

  questions: [
    // ===== SET 1: HIRAGANA (10 soal) =====
    {
      id: "kn_1", set: "hiragana", type: "mcq", badge: "Hiragana Dasar",
      prompt: "Bagaimana cara membaca huruf Hiragana 「ぬ」?",
      promptRomaji: "", sub: "Awas jangan tertukar dengan 「め」!",
      options: [{ jp: "me", romaji: "" }, { jp: "nu", romaji: "" }, { jp: "ne", romaji: "" }, { jp: "no", romaji: "" }],
      answer: 1, explain: "BENAR: 「ぬ」 = nu (punya simpul melingkar di kanan bawah, misalnya いぬ = anjing)!"
    },
    {
      id: "kn_2", set: "hiragana", type: "mcq", badge: "Hiragana Dasar",
      prompt: "Huruf Hiragana untuk bunyi 「tsu」 adalah...",
      promptRomaji: "", sub: "Baris た (ta-chi-tsu-te-to).",
      options: [{ jp: "し", romaji: "" }, { jp: "つ", romaji: "" }, { jp: "す", romaji: "" }, { jp: "う", romaji: "" }],
      answer: 1, explain: "BENAR: 「つ」 = tsu (misalnya つくえ = meja tulis, くつ = sepatu)!"
    },
    {
      id: "kn_3", set: "hiragana", type: "mcq", badge: "Hiragana Dasar",
      prompt: "Huruf Hiragana 「れ」 dibaca...",
      promptRomaji: "", sub: "Ujung kanannya mencuat ke kanan.",
      options: [{ jp: "wa", romaji: "" }, { jp: "ne", romaji: "" }, { jp: "re", romaji: "" }, { jp: "ru", romaji: "" }],
      answer: 2, explain: "BENAR: 「れ」 = re (misalnya れいぞうこ = kulkas)!"
    },
    {
      id: "kn_4", set: "hiragana", type: "mcq", badge: "Hiragana Dasar",
      prompt: "Huruf Hiragana untuk bunyi 「fu」 adalah...",
      promptRomaji: "", sub: "Baris は (ha-hi-fu-he-ho).",
      options: [{ jp: "ほ", romaji: "" }, { jp: "ひ", romaji: "" }, { jp: "ふ", romaji: "" }, { jp: "へ", romaji: "" }],
      answer: 2, explain: "BENAR: 「ふ」 = fu (misalnya ふね = kapal laut)!"
    },
    {
      id: "kn_5", set: "hiragana", type: "mcq", badge: "Hiragana · Dakuten",
      prompt: "Jika 「ほ」 ditambah lingkaran kecil menjadi 「ぽ」, dibaca...",
      promptRomaji: "", sub: "Handakuten (゜) mengubah baris h → p.",
      options: [{ jp: "bo", romaji: "" }, { jp: "po", romaji: "" }, { jp: "go", romaji: "" }, { jp: "zo", romaji: "" }],
      answer: 1, explain: "BENAR: ほ (ho) + ゜ = 「ぽ」 (po). Jika tanda kutip dua 「ぼ」 = bo!"
    },
    {
      id: "kn_6", set: "hiragana", type: "mcq", badge: "Hiragana · Yōon",
      prompt: "Kata 「りょこう」 (wisata) dibaca...",
      promptRomaji: "", sub: "Perhatikan 「ょ」 kecil setelah 「り」.",
      options: [{ jp: "riyokou", romaji: "" }, { jp: "ryokou", romaji: "" }, { jp: "ryukou", romaji: "" }, { jp: "rukou", romaji: "" }],
      answer: 1, explain: "BENAR: り + ょ (kecil) = ryo → りょこう (ryokou = perjalanan wisata)!"
    },
    {
      id: "kn_7", set: "hiragana", type: "mcq", badge: "Hiragana · Sokuon",
      prompt: "Cara membaca yang benar untuk kata 「きっぷ」 (karcis) adalah...",
      promptRomaji: "", sub: "「っ」 kecil menggandakan konsonan depannya.",
      options: [{ jp: "kipu", romaji: "" }, { jp: "kitsupu", romaji: "" }, { jp: "kippu", romaji: "" }, { jp: "kitsu", romaji: "" }],
      answer: 2, explain: "BENAR: 「っ」 sebelum 「ぷ」 (pu) menggandakan p → kippu!"
    },
    {
      id: "kn_8", set: "hiragana", type: "mcq", badge: "Hiragana Dasar",
      prompt: "Partikel objek langsung pada 「ほん（　）よみます」 memakai Hiragana...",
      promptRomaji: "", sub: "Dibaca 'o', tetapi ditulis dari baris わ.",
      options: [{ jp: "お", romaji: "" }, { jp: "を", romaji: "" }, { jp: "の", romaji: "" }, { jp: "わ", romaji: "" }],
      answer: 1, explain: "BENAR: Partikel objek wajib ditulis 「を」 (bukan 「お」)!"
    },
    {
      id: "kn_9", set: "hiragana", type: "input", badge: "Ketik Hiragana",
      prompt: "Ketik bacaan Romaji untuk kata Hiragana 「えき」 (stasiun)!",
      promptRomaji: "", sub: "2 suku kata dari baris あ dan か.",
      placeholder: "Ketik romaji: eki", accepted: ["eki"], displayAnswer: "eki",
      explain: "BENAR: え (e) + き (ki) = eki (stasiun)!"
    },
    {
      id: "kn_10", set: "hiragana", type: "input", badge: "Ketik Hiragana",
      prompt: "Ketik bacaan Romaji untuk kata 「ざっし」 (majalah)!",
      promptRomaji: "", sub: "Ingat fungsi 「っ」 kecil di depan 「し」!",
      placeholder: "Ketik romaji: zasshi", accepted: ["zasshi"], displayAnswer: "zasshi",
      explain: "BENAR: ざ (za) + っ + し (shi) = zasshi!"
    },

    // ===== SET 2: KATAKANA (10 soal) =====
    {
      id: "kn_11", set: "katakana", type: "mcq", badge: "Katakana Dasar",
      prompt: "Huruf Katakana 「ヌ」 dibaca...",
      promptRomaji: "", sub: "Bagian dari baris ナ (na-ni-nu-ne-no).",
      options: [{ jp: "me", romaji: "" }, { jp: "nu", romaji: "" }, { jp: "ta", romaji: "" }, { jp: "su", romaji: "" }],
      answer: 1, explain: "BENAR: 「ヌ」 = nu (seperti ヌードル = mi/noodle)!"
    },
    {
      id: "kn_12", set: "katakana", type: "mcq", badge: "Katakana Dasar",
      prompt: "Huruf Katakana 「ネ」 dibaca...",
      promptRomaji: "", sub: "Dipakai di kata ネクタイ (dasi).",
      options: [{ jp: "ho", romaji: "" }, { jp: "ne", romaji: "" }, { jp: "fu", romaji: "" }, { jp: "ma", romaji: "" }],
      answer: 1, explain: "BENAR: 「ネ」 = ne (ネクタイ = nekutai, dasi)!"
    },
    {
      id: "kn_13", set: "katakana", type: "mcq", badge: "Katakana Dasar",
      prompt: "Pasangan huruf Katakana untuk 「yo」, 「yu」, 「ya」 yang benar adalah...",
      promptRomaji: "", sub: "Awas terbalik antara 「ヨ」 dan 「ユ」!",
      options: [{ jp: "ヨ ・ ユ ・ ヤ", romaji: "" }, { jp: "ユ ・ ヨ ・ ヤ", romaji: "" }, { jp: "コ ・ ヨ ・ ア", romaji: "" }, { jp: "ロ ・ ユ ・ マ", romaji: "" }],
      answer: 0, explain: "BENAR: ヨ = yo (3 palang menghadap kiri), ユ = yu (seperti garis lantai & langit), ヤ = ya!"
    },
    {
      id: "kn_14", set: "katakana", type: "mcq", badge: "Katakana Dasar",
      prompt: "Kata 「ホテル」 dibaca...",
      promptRomaji: "", sub: "Tempat menginap.",
      options: [{ jp: "horuteru", romaji: "" }, { jp: "hoteru", romaji: "" }, { jp: "hoeru", romaji: "" }, { jp: "noteru", romaji: "" }],
      answer: 1, explain: "BENAR: ホ (ho) + テ (te) + ル (ru) = hoteru (hotel)!"
    },
    {
      id: "kn_15", set: "katakana", type: "mcq", badge: "Katakana · Chōon",
      prompt: "Arti dari kata Katakana 「エレベーター」 adalah...",
      promptRomaji: "", sub: "Tanda 「ー」 memanjangkan vokal sebelumnya.",
      options: [{ jp: "eskalator", romaji: "" }, { jp: "lift (elevator)", romaji: "" }, { jp: "air conditioner", romaji: "" }, { jp: "televisi", romaji: "" }],
      answer: 1, explain: "BENAR: エレベーター (erebeetaa) = lift / elevator!"
    },
    {
      id: "kn_16", set: "katakana", type: "mcq", badge: "Katakana Dasar",
      prompt: "Huruf Katakana yang dibaca 「mu」 adalah...",
      promptRomaji: "", sub: "Dipakai di kata ゲーム (game) dan チーム (team).",
      options: [{ jp: "マ", romaji: "" }, { jp: "ム", romaji: "" }, { jp: "モ", romaji: "" }, { jp: "ミ", romaji: "" }],
      answer: 1, explain: "BENAR: 「ム」 = mu (segitiga dengan ekor kanan bawah)!"
    },
    {
      id: "kn_17", set: "katakana", type: "mcq", badge: "Katakana · Makanan",
      prompt: "Kata Katakana 「フォーク」 adalah alat makan berupa...",
      promptRomaji: "", sub: "フ (fu) + ォ (o kecil) dibaca 'fo'.",
      options: [{ jp: "sendok (supuun)", romaji: "" }, { jp: "garpu (fooku)", romaji: "" }, { jp: "pisau (naifu)", romaji: "" }, { jp: "sumpit (ohashi)", romaji: "" }],
      answer: 1, explain: "BENAR: フォーク (fooku) = garpu (fork)!"
    },
    {
      id: "kn_18", set: "katakana", type: "mcq", badge: "Katakana · Dakuten",
      prompt: "Bagaimana penulisan Katakana untuk 「kaca / gelas minum」 (koppu)?",
      promptRomaji: "", sub: "Kombinasi コ + ッ kecil + プ.",
      options: [{ jp: "コブ", romaji: "" }, { jp: "コップ", romaji: "" }, { jp: "カップ", romaji: "" }, { jp: "コフ", romaji: "" }],
      answer: 1, explain: "BENAR: コップ (koppu) = gelas minum; sedangkan カップ (kappu) = cangkir/cup!"
    },
    {
      id: "kn_19", set: "katakana", type: "input", badge: "Ketik Katakana",
      prompt: "Ketik bacaan Romaji untuk kata Katakana 「カメラ」!",
      promptRomaji: "", sub: "3 huruf Katakana: カ + メ + ラ.",
      placeholder: "Ketik romaji: kamera", accepted: ["kamera"], displayAnswer: "kamera",
      explain: "BENAR: カメラ = kamera!"
    },
    {
      id: "kn_20", set: "katakana", type: "input", badge: "Ketik Katakana",
      prompt: "Ketik bacaan Romaji untuk kata 「タクシー」!",
      promptRomaji: "", sub: "Perhatikan 「ー」 di akhir memanjangkan vokal i menjadi ii.",
      placeholder: "Ketik romaji: takushii", accepted: ["takushii"], displayAnswer: "takushii",
      explain: "BENAR: タ (ta) + ク (ku) + シ (shi) + ー = takushii!"
    },

    // ===== SET 3: HURUF KEMBAR & PENCEGAH SALAH BACA (10 soal) =====
    {
      id: "kn_21", set: "kembar", type: "mcq", badge: "Huruf Kembar · シ/ツ",
      prompt: "Manakah bacaan yang BENAR untuk kata 「シャツ」 (kemeja)?",
      promptRomaji: "", sub: "Pertama = titik vertikal (シ), kedua = titik horizontal turun (ツ)!",
      options: [{ jp: "tsusha", romaji: "" }, { jp: "shatsu", romaji: "" }, { jp: "soba", romaji: "" }, { jp: "shachi", romaji: "" }],
      answer: 1, explain: "BENAR: シ (shi) + ャ + ツ (tsu) = shatsu (kemeja)!"
    },
    {
      id: "kn_22", set: "kembar", type: "mcq", badge: "Huruf Kembar · ソ/ン",
      prompt: "Kata 「パソコン」 (komputer pribadi / PC) dibaca...",
      promptRomaji: "", sub: "Huruf ke-3 adalah 「ソ」 (turun dari atas), huruf terakhir 「ン」 (naik dari bawah).",
      options: [{ jp: "panoko", romaji: "" }, { jp: "pasokon", romaji: "" }, { jp: "pankoso", romaji: "" }, { jp: "pasonko", romaji: "" }],
      answer: 1, explain: "BENAR: パ (pa) + ソ (so) + コ (ko) + ン (n) = pasokon!"
    },
    {
      id: "kn_23", set: "kembar", type: "mcq", badge: "Huruf Kembar · ツ/ン/シ/ソ",
      prompt: "Manakah huruf yang berarti 「so」?",
      promptRomaji: "", sub: "1 titik di kiri atas + garis panjang turun ke bawah.",
      options: [{ jp: "ン", romaji: "" }, { jp: "ソ", romaji: "" }, { jp: "シ", romaji: "" }, { jp: "ツ", romaji: "" }],
      answer: 1, explain: "BENAR: 「ソ」 = so (1 titik + turun); 「ン」 = n (1 titik + naik); 「ツ」 = tsu (2 titik + turun); 「シ」 = shi (2 titik + naik)!"
    },
    {
      id: "kn_24", set: "kembar", type: "mcq", badge: "Huruf Kembar · わ/れ/ね",
      prompt: "Urutan bacaan untuk 「れ ・ ね ・ わ」 adalah...",
      promptRomaji: "", sub: "Cek ekor kanan masing-masing huruf!",
      options: [{ jp: "wa ・ re ・ ne", romaji: "" }, { jp: "re ・ ne ・ wa", romaji: "" }, { jp: "ne ・ re ・ wa", romaji: "" }, { jp: "re ・ wa ・ ne", romaji: "" }],
      answer: 1, explain: "BENAR: れ (mencuat keluar) = re, ね (simpul bulat) = ne, わ (melengkung ke dalam) = wa!"
    },
    {
      id: "kn_25", set: "kembar", type: "mcq", badge: "Huruf Kembar · る/ろ",
      prompt: "Kata 「しろい」 (putih) vs 「ひる」 (siang). Huruf mana yang memiliki simpul lingkaran di bawah?",
      promptRomaji: "", sub: "Bandingkan 「る」 dan 「ろ」.",
      options: [{ jp: "ろ (ro)", romaji: "" }, { jp: "る (ru)", romaji: "" }, { jp: "Keduanya bersimpul", romaji: "" }, { jp: "Keduanya tidak bersimpul", romaji: "" }],
      answer: 1, explain: "BENAR: 「る」 (ru) bersimpul di bawah, sedangkan 「ろ」 (ro) terbuka polos!"
    },
    {
      id: "kn_26", set: "kembar", type: "mcq", badge: "Huruf Kembar · ク/タ",
      prompt: "Manakah yang dibaca 「ta」?",
      promptRomaji: "", sub: "Ada garis kecil di tengah seperti karakter malam 夕.",
      options: [{ jp: "ク", romaji: "" }, { jp: "タ", romaji: "" }, { jp: "ケ", romaji: "" }, { jp: "ヌ", romaji: "" }],
      answer: 1, explain: "BENAR: 「タ」 = ta (misalnya タクシー = taksi), sedangkan 「ク」 = ku!"
    },
    {
      id: "kn_27", set: "kembar", type: "mcq", badge: "Jebakan Bunyi · 小さい字",
      prompt: "Jika sakit dan harus berobat, kamu pergi ke...",
      promptRomaji: "", sub: "Bedakan 「びょういん」 (ょ kecil) vs 「びよういん」 (よ besar)!",
      options: [{ jp: "びよういん (biyouin)", romaji: "" }, { jp: "びょういん (byouin)", romaji: "" }, { jp: "びょうき (byouki)", romaji: "" }, { jp: "びよう (biyou)", romaji: "" }],
      answer: 1, explain: "BENAR: びょういん (byouin) = rumah sakit; びよういん (biyouin) = salon kecantikan!"
    },
    {
      id: "kn_28", set: "kembar", type: "mcq", badge: "Jebakan Bunyi · Vokal Panjang",
      prompt: "「おばあさん」 vs 「おばさん」 artinya berturut-turut adalah...",
      promptRomaji: "", sub: "Satu huruf あ mengubah generasi!",
      options: [{ jp: "bibi vs nenek", romaji: "" }, { jp: "nenek vs bibi", romaji: "" }, { jp: "ibu vs kakak", romaji: "" }, { jp: "nenek vs ibu", romaji: "" }],
      answer: 1, explain: "BENAR: おばあさん (obaasan, vokal panjang) = nenek; おばさん (obasan, pendek) = bibi!"
    },
    {
      id: "kn_29", set: "kembar", type: "input", badge: "Ketik · Huruf Kembar",
      prompt: "Ketik bacaan Romaji untuk kata Katakana 「パンツ」 (celana dalam / celana)!",
      promptRomaji: "", sub: "Gabungan パ + ン (naik) + ツ (turun)!",
      placeholder: "Ketik romaji: pantsu", accepted: ["pantsu"], displayAnswer: "pantsu",
      explain: "BENAR: パ (pa) + ン (n) + ツ (tsu) = pantsu!"
    },
    {
      id: "kn_30", set: "kembar", type: "input", badge: "Ketik · Huruf Kembar",
      prompt: "Ketik bacaan Romaji untuk kata Hiragana 「めがね」 (kacamata)!",
      promptRomaji: "", sub: "Hati-hati: huruf pertama 「め」 (tanpa simpul), bukan 「ぬ」!",
      placeholder: "Ketik romaji: megane", accepted: ["megane"], displayAnswer: "megane",
      explain: "BENAR: め (me) + が (ga) + ね (ne) = megane!"
    },

    // ===== SET 4: BACA KATA N5 UTUH (10 soal) =====
    {
      id: "kn_31", set: "kata", type: "mcq", badge: "Baca Kata N5",
      prompt: "Kata 「しんぶん」 dibaca dan berarti...",
      promptRomaji: "", sub: "Kosakata Bab 2 Minna no Nihongo.",
      options: [{ jp: "shinbun (koran)", romaji: "" }, { jp: "shibun (buku)", romaji: "" }, { jp: "shinpu (surat)", romaji: "" }, { jp: "sanbun (majalah)", romaji: "" }],
      answer: 0, explain: "BENAR: しんぶん = shinbun (koran)!"
    },
    {
      id: "kn_32", set: "kata", type: "mcq", badge: "Baca Kata N5",
      prompt: "Kata 「コンビニ」 adalah singkatan tempat di Jepang yaitu...",
      promptRomaji: "", sub: "Buka 24 jam di tiap sudut jalan Jepang.",
      options: [{ jp: "kantor pos", romaji: "" }, { jp: "minimarket (convenience store)", romaji: "" }, { jp: "kampus", romaji: "" }, { jp: "konser", romaji: "" }],
      answer: 1, explain: "BENAR: コンビニ (konbini) = minimarket (Lawson, 7-Eleven, FamilyMart)!"
    },
    {
      id: "kn_33", set: "kata", type: "mcq", badge: "Baca Kata N5",
      prompt: "Kata 「ちかてつ」 artinya...",
      promptRomaji: "", sub: "Transportasi Bab 5.",
      options: [{ jp: "pesawat terbang", romaji: "" }, { jp: "kereta bawah tanah (subway)", romaji: "" }, { jp: "sepeda", romaji: "" }, { jp: "taksi", romaji: "" }],
      answer: 1, explain: "BENAR: ちかてつ (chikatetsu) = kereta bawah tanah!"
    },
    {
      id: "kn_34", set: "kata", type: "mcq", badge: "Baca Kata N5",
      prompt: "Kata 「レストラン」 berarti...",
      promptRomaji: "", sub: "レ + ス + ト + ラ + ン.",
      options: [{ jp: "restoran", romaji: "" }, { jp: "toilet", romaji: "" }, { jp: "hotel", romaji: "" }, { jp: "daftar menu", romaji: "" }],
      answer: 0, explain: "BENAR: レストラン (resutoran) = restoran!"
    },
    {
      id: "kn_35", set: "kata", type: "mcq", badge: "Baca Kata N5",
      prompt: "Kata 「ぎゅうにゅう」 adalah minuman...",
      promptRomaji: "", sub: "Yōon 「ぎゅ」 + 「にゅ」.",
      options: [{ jp: "air putih", romaji: "" }, { jp: "susu sapi", romaji: "" }, { jp: "jus jeruk", romaji: "" }, { jp: "teh hijau", romaji: "" }],
      answer: 1, explain: "BENAR: ぎゅうにゅう (gyuunyuu) = susu sapi!"
    },
    {
      id: "kn_36", set: "kata", type: "mcq", badge: "Baca Kata N5",
      prompt: "Kata 「スーパー」 adalah...",
      promptRomaji: "", sub: "ス + ー + パ + ー.",
      options: [{ jp: "sendok", romaji: "" }, { jp: "supermarket", romaji: "" }, { jp: "sup", romaji: "" }, { jp: "sepatu bot", romaji: "" }],
      answer: 1, explain: "BENAR: スーパー (suupaa) = supermarket!"
    },
    {
      id: "kn_37", set: "kata", type: "mcq", badge: "Baca Kata N5",
      prompt: "Kata 「びじゅつかん」 berarti...",
      promptRomaji: "", sub: "Kosakata tempat Bab 9/13.",
      options: [{ jp: "perpustakaan", romaji: "" }, { jp: "museum seni", romaji: "" }, { jp: "rumah sakit", romaji: "" }, { jp: "kedutaan", romaji: "" }],
      answer: 1, explain: "BENAR: びじゅつかん (bijutsukan) = museum seni!"
    },
    {
      id: "kn_38", set: "kata", type: "input", badge: "Ketik Baca Kata",
      prompt: "Ketik bacaan Romaji untuk kata 「としょかん」 (perpustakaan)!",
      promptRomaji: "", sub: "Perhatikan 「しょ」 adalah yōon!",
      placeholder: "Ketik romaji: toshokan", accepted: ["toshokan"], displayAnswer: "toshokan",
      explain: "BENAR: と (to) + しょ (sho) + か (ka) + ん (n) = toshokan!"
    },
    {
      id: "kn_39", set: "kata", type: "input", badge: "Ketik Baca Kata",
      prompt: "Ketik bacaan Romaji untuk kata Katakana 「トイレ」 (toilet)!",
      promptRomaji: "", sub: "ト + イ + レ.",
      placeholder: "Ketik romaji: toire", accepted: ["toire"], displayAnswer: "toire",
      explain: "BENAR: トイレ = toire!"
    },
    {
      id: "kn_40", set: "kata", type: "input", badge: "Ketik Baca Kata",
      prompt: "Ketik bacaan Romaji untuk 「ありがとう」 (terima kasih)!",
      promptRomaji: "", sub: "5 huruf Hiragana, termasuk dakuten が.",
      placeholder: "Ketik romaji: arigatou", accepted: ["arigatou", "arigato"], displayAnswer: "arigatou",
      explain: "BENAR: ありがとう = arigatou!"
    }
  ]
};
