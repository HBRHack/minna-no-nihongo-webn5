/* REFERENSI PENTING MINNA NO NIHONGO I (参考語彙と情報 / Sankou Goi)
 * 8 Kategori Lengkap di luar inti tata bahasa Bab 1–25 + 80 Soal Kuis Interaktif (10 soal per kategori, tanpa timer!)
 */
window.MNN_REFERENCES = [
  // ==================== 1. WARNA & RASA ====================
  {
    id: "warna",
    icon: "🎨",
    title: "Warna & Rasa (色と味)",
    refSource: "Ref. Bab 8 & Lampiran Minna",
    summary: "13 warna lengkap (termasuk aturan 6 warna KS-い vs warna pakai の) + 5 rasa makanan.",
    tip: "Hanya 6 warna yang bisa menjadi Kata Sifat-い: あかい, しろい, くろい, あおい, きいろい, ちゃいろい. Warna lain (みどり, ピンク, オレンジ, むらさき, グレー) adalah Kata Benda sehingga di depan benda wajib memakai の (contoh: みどりの かばん)!",
    groups: [
      {
        name: "6 Warna yang Punya Bentuk Kata Sifat-い",
        isColor: true,
        items: [
          { jp: "あか / あかい", kanji: "赤 / 赤い", romaji: "aka / akai", arti: "merah", hex: "#d63b30" },
          { jp: "しろ / しろい", kanji: "白 / 白い", romaji: "shiro / shiroi", arti: "putih", hex: "#f4f4f0" },
          { jp: "くろ / くろい", kanji: "黒 / 黒い", romaji: "kuro / kuroi", arti: "hitam", hex: "#1f2228" },
          { jp: "あお / あおい", kanji: "青 / 青い", romaji: "ao / aoi", arti: "biru", hex: "#2563c9" },
          { jp: "きいろ / きいろい", kanji: "黄色 / 黄色い", romaji: "kiiro / kiiroi", arti: "kuning", hex: "#eab308" },
          { jp: "ちゃいろ / ちゃいろい", kanji: "茶色 / 茶色い", romaji: "chairo / chairoi", arti: "cokelat", hex: "#8b5a2b" }
        ]
      },
      {
        name: "Warna Kata Benda (Di Depan Benda Wajib Pakai の!)",
        isColor: true,
        items: [
          { jp: "みどり（の～）", kanji: "緑", romaji: "midori", arti: "hijau (contoh: みどりの シャツ)", hex: "#2d9a57" },
          { jp: "むらさき（の～）", kanji: "紫", romaji: "murasaki", arti: "ungu", hex: "#7c3aed" },
          { jp: "ピンク（の～）", kanji: "ピンク", romaji: "pinku", arti: "merah muda / pink", hex: "#ec6fa5" },
          { jp: "オレンジ（の～）", kanji: "オレンジ", romaji: "orenji", arti: "oranye / jingga", hex: "#f07b22" },
          { jp: "はいいろ / グレー", kanji: "灰色", romaji: "haiiro / guree", arti: "abu-abu", hex: "#7b828d" },
          { jp: "みずいろ", kanji: "水色", romaji: "mizuiro", arti: "biru muda (warna air)", hex: "#54b8e8" },
          { jp: "きんいろ / ぎんいろ", kanji: "金色 / 銀色", romaji: "kiniro / giniro", arti: "warna emas / warna perak", hex: "#d4af37" }
        ]
      },
      {
        name: "5 Rasa Makanan (味 / あじ — Semua KS-い)",
        items: [
          { jp: "あまい", kanji: "甘い", romaji: "amai", arti: "manis" },
          { jp: "からい", kanji: "辛い", romaji: "karai", arti: "pedas" },
          { jp: "しょっぱい", kanji: "塩っぱい", romaji: "shoppai", arti: "asin" },
          { jp: "すっぱい", kanji: "酸っぱい", romaji: "suppai", arti: "asam / kecut" },
          { jp: "にがい", kanji: "苦い", romaji: "nigai", arti: "pahit" }
        ]
      }
    ],
    questions: [
      { id: "rw_1", type: "mcq", badge: "Warna · Aturan の", prompt: "Bagaimana cara mengatakan 「tas berwarna hijau (みどり)」 yang BENAR?", promptRomaji: "midori + kaban", sub: "みどり termasuk Kata Benda warna, bukan KS-い!", options: [{ jp: "みどりい かばん", romaji: "midorii kaban" }, { jp: "みどりの かばん", romaji: "midori no kaban" }, { jp: "みどりな かばん", romaji: "midori na kaban" }, { jp: "みどり かばん", romaji: "midori kaban" }], answer: 1, explain: "BENAR: みどりの かばん (hanya 6 warna dasar yang bisa jadi KS-い; みどり wajib pakai の!)." },
      { id: "rw_2", type: "mcq", badge: "Warna · Kosakata", prompt: "Pasangan arti untuk 「ちゃいろ」 dan 「むらさき」 adalah...", promptRomaji: "chairo & murasaki", sub: "Ingat: ちゃ (teh) + いろ (warna)!", options: [{ jp: "kuning & abu-abu", romaji: "" }, { jp: "cokelat & ungu", romaji: "" }, { jp: "hijau & biru muda", romaji: "" }, { jp: "merah muda & emas", romaji: "" }], answer: 1, explain: "BENAR: ちゃいろ = cokelat, むらさき = ungu!" },
      { id: "rw_3", type: "mcq", badge: "Warna · KS-い", prompt: "Manakah di antara warna berikut yang BISA berubah menjadi Kata Sifat-い?", promptRomaji: "Cek 6 warna dasar KS-い!", sub: "あかい・しろい・くろい・あおい・きいろい・ちゃいろい.", options: [{ jp: "みどり", romaji: "midori" }, { jp: "きいろ", romaji: "kiiro" }, { jp: "ピンク", romaji: "pinku" }, { jp: "むらさき", romaji: "murasaki" }], answer: 1, explain: "BENAR: きいろ → きいろい (kuning) bisa jadi KS-い!" },
      { id: "rw_4", type: "mcq", badge: "Warna · Kosakata", prompt: "「はいいろ」 (灰色) dan 「みずいろ」 (水色) artinya...", promptRomaji: "haiiro & mizuiro", sub: "はい = abu, みず = air.", options: [{ jp: "emas & perak", romaji: "" }, { jp: "abu-abu & biru muda", romaji: "" }, { jp: "hitam & putih", romaji: "" }, { jp: "ungu & hijau", romaji: "" }], answer: 1, explain: "BENAR: はいいろ = abu-abu, みずいろ = biru muda!" },
      { id: "rw_5", type: "mcq", badge: "Rasa · Kosakata", prompt: "「この コーヒーは （　　　） です。」 (Kopi ini PAHIT.)", promptRomaji: "Pahit = ?", sub: "5 rasa makanan dasar.", options: [{ jp: "あまい", romaji: "amai" }, { jp: "からい", romaji: "karai" }, { jp: "にがい", romaji: "nigai" }, { jp: "すっぱい", romaji: "suppai" }], answer: 2, explain: "BENAR: にがい = pahit!" },
      { id: "rw_6", type: "mcq", badge: "Rasa · Kosakata", prompt: "「レモンは （　　　　） です。」 (Lemon itu ASAM/KECUT.)", promptRomaji: "Asam = ?", sub: "Bedakan しょっぱい (asin) vs すっぱい (asam)!", options: [{ jp: "しょっぱい", romaji: "shoppai" }, { jp: "すっぱい", romaji: "suppai" }, { jp: "にがい", romaji: "nigai" }, { jp: "あまい", romaji: "amai" }], answer: 1, explain: "BENAR: すっぱい = asam, しょっぱい = asin!" },
      { id: "rw_7", type: "mcq", badge: "Rasa · Kosakata", prompt: "「この スープは しおが おおいですから、（　　　　　）。」 (Karena banyak garam, ASIN.)", promptRomaji: "Asin = ?", sub: "しお = garam.", options: [{ jp: "しょっぱいです", romaji: "shoppai desu" }, { jp: "すっぱいです", romaji: "suppai desu" }, { jp: "あまいです", romaji: "amai desu" }, { jp: "にがいです", romaji: "nigai desu" }], answer: 0, explain: "BENAR: しょっぱい = asin!" },
      { id: "rw_8", type: "mcq", badge: "Warna · Emas/Perak", prompt: "「Warna emas」 dan 「warna perak」 dalam bahasa Jepang adalah...", promptRomaji: "きん (emas) / ぎん (perak)", sub: "Perhatikan tenten (゛)!", options: [{ jp: "ぎんいろ ・ きんいろ", romaji: "giniro · kiniro" }, { jp: "きんいろ ・ ぎんいろ", romaji: "kiniro · giniro" }, { jp: "きいろ ・ ぎんいろ", romaji: "kiiro · giniro" }, { jp: "ちゃいろ ・ はいいろ", romaji: "chairo · haiiro" }], answer: 1, explain: "BENAR: きんいろ = emas, ぎんいろ = perak!" },
      { id: "rw_9", type: "mcq", badge: "Warna · Kalimat", prompt: "「Kemeja berwarna merah muda (ピンク)」 dalam bahasa Jepang:", promptRomaji: "pinku + shatsu", sub: "ピンク adalah kata serapan (Kata Benda).", options: [{ jp: "ピンクい シャツ", romaji: "pinkui shatsu" }, { jp: "ピンクの シャツ", romaji: "pinku no shatsu" }, { jp: "ピンクな シャツ", romaji: "pinku na shatsu" }, { jp: "ピンク シャツ", romaji: "pinku shatsu" }], answer: 1, explain: "BENAR: ピンクの シャツ!" },
      { id: "rw_10", type: "input", badge: "Ketik · Warna", prompt: "Ketik bahasa Jepang untuk warna 「HIJAU」!", promptRomaji: "Hijau = ?", sub: "Ketik Hiragana atau Romaji.", placeholder: "Ketik: みどり atau midori", accepted: ["みどり", "midori"], displayAnswer: "みどり (midori)", explain: "BENAR: みどり (hijau)!" }
    ]
  },

  // ==================== 2. ANGKA & SATUAN HITUNG (助数詞) ====================
  {
    id: "angka",
    icon: "🔢",
    title: "Angka Besar & Satuan Hitung (数・助数詞)",
    refSource: "Lampiran I & II Minna no Nihongo I",
    summary: "Konverter angka interaktif 0–99.999 + tabel satuan hitung wajib N5 (ほん・ひき・はい・さつ・こ).",
    tip: "Ingat pola perubahan bunyi 1–3–6–8–10 pada satuan berawalan 'h' (ほん・ひき・はい): 1/6/8/10 sering jadi っぽん/っぴき/っぱい, sedangkan 3 jadi ぼん/びき/ばい!",
    interactiveWidget: "number_converter",
    groups: [
      {
        name: "Angka Dasar & Pengecualian Besar",
        items: [
          { jp: "ゼロ / れい", kanji: "零", romaji: "zero / rei", arti: "0 (nol)" },
          { jp: "いち・に・さん・よん（し）・ご", kanji: "一〜五", romaji: "ichi, ni, san, yon(shi), go", arti: "1, 2, 3, 4, 5" },
          { jp: "ろく・なな（しち）・はち・きゅう（く）・じゅう", kanji: "六〜十", romaji: "roku, nana(shichi), hachi, kyuu(ku), juu", arti: "6, 7, 8, 9, 10" },
          { jp: "ひゃく / さんびゃく / ろっぴゃく / はっぴゃく", kanji: "百 / 300 / 600 / 800", romaji: "hyaku / sanbyaku / roppyaku / happyaku", arti: "100 / 300 / 600 / 800 (pengecualian!)" },
          { jp: "せん / さんぜん / はっせん", kanji: "千 / 3000 / 8000", romaji: "sen / sanzen / hassen", arti: "1.000 / 3.000 / 8.000 (pengecualian!)" },
          { jp: "いちまん / じゅうまん / ひゃくまん / いちおく", kanji: "一万 / 十万 / 百万 / 一億", romaji: "ichiman / juuman / hyakuman / ichioku", arti: "10.000 / 100.000 / 1.000.000 / 100.000.000" }
        ]
      },
      {
        name: "Satuan Hitung Wajib Lampiran Minna no Nihongo (助数詞)",
        items: [
          { jp: "～ほん (benda panjang: pulpen, payung, botol)", kanji: "～本", romaji: "1:いっぽん, 3:さんぼん, 6:ろっぽん, 8:はっぽん, 10:じゅっぽん", arti: "batang / buah (tanya: なんぼん)" },
          { jp: "～ひき (hewan kecil: kucing, anjing, ikan)", kanji: "～匹", romaji: "1:いっぴき, 3:さんびき, 6:ろっぴき, 8:はっぴき, 10:じゅっぴき", arti: "ekor (tanya: なんびき)" },
          { jp: "～はい (gelas/mangkuk berisi minuman/nasi)", kanji: "～杯", romaji: "1:いっぱい, 3:さんばい, 6:ろっぱい, 8:はっぱい, 10:じゅっぱい", arti: "gelas / cangkir / mangkuk (tanya: なんばい)" },
          { jp: "～さつ (buku, majalah, kamus, buku tulis)", kanji: "～冊", romaji: "1:いっさつ, 8:はっさつ, 10:じゅっさつ", arti: "jilid / buah buku (tanya: なんさつ)" },
          { jp: "～こ (benda kecil bulat/kotak: apel, telur, permen)", kanji: "～個", romaji: "1:いっこ, 6:ろっこ, 8:はっこ, 10:じゅっこ", arti: "buah / butir (tanya: なんこ)" },
          { jp: "～そく (sepasang sepatu / kaus kaki)", kanji: "～足", romaji: "1:いっそく, 3:さんぞく, 8:はっそく, 10:じゅっそく", arti: "pasang (tanya: なんぞく)" },
          { jp: "～けん (rumah / toko / gedung kecil)", kanji: "～軒", romaji: "1:いっけん, 3:さんげん, 6:ろっけん, 10:じゅっけん", arti: "unit bangunan (tanya: なんげん)" }
        ]
      }
    ],
    questions: [
      { id: "ra_1", type: "mcq", badge: "Satuan · ～ほん", prompt: "「3 batang pulpen」 dan 「1 batang payung」 memakai satuan ～ほん. Bacaan yang BENAR:", promptRomaji: "3本 & 1本 = ?", sub: "1 → いっぽん, 3 → さんぼん!", options: [{ jp: "さんほん ・ いちほん", romaji: "sanhon · ichihon" }, { jp: "さんぼん ・ いっぽん", romaji: "sanbon · ippon" }, { jp: "さんぽん ・ いっぼん", romaji: "sanpon · ibbon" }, { jp: "みっつ ・ ひとつ", romaji: "mittsu · hitotsu" }], answer: 1, explain: "BENAR: 3本 = さんぼん, 1本 = いっぽん!" },
      { id: "ra_2", type: "mcq", badge: "Satuan · ～ひき", prompt: "「Ada 1 ekor kucing dan 3 ekor anjing」 memakai satuan ～ひき:", promptRomaji: "1匹 & 3匹 = ?", sub: "Sama polanya dengan ～ほん!", options: [{ jp: "いちひき ・ さんひき", romaji: "ichihiki · sanhiki" }, { jp: "いっぴき ・ さんびき", romaji: "ippiki · sanbiki" }, { jp: "いっびき ・ さんぴき", romaji: "ibbiki · sanpiki" }, { jp: "いっこ ・ さんこ", romaji: "ikko · sanko" }], answer: 1, explain: "BENAR: 1匹 = いっぴき, 3匹 = さんびき!" },
      { id: "ra_3", type: "mcq", badge: "Satuan · ～はい", prompt: "「Minta 1 cangkir kopi」: コーヒーを （　　　　） ください。", promptRomaji: "1杯 = ?", sub: "Satuan gelas/cangkir/mangkuk.", options: [{ jp: "いちはい", romaji: "ichihai" }, { jp: "いっぱい", romaji: "ippai" }, { jp: "いっばい", romaji: "ibbai" }, { jp: "いっぽん", romaji: "ippon" }], answer: 1, explain: "BENAR: いっぱい (1 cangkir/gelas)!" },
      { id: "ra_4", type: "mcq", badge: "Satuan · ～さつ", prompt: "Buku, kamus, dan majalah dihitung menggunakan satuan...", promptRomaji: "ほんを 2[?] かいました", sub: "1 buku = いっさつ.", options: [{ jp: "～まい", romaji: "~mai" }, { jp: "～さつ", romaji: "~satsu" }, { jp: "～ほん", romaji: "~hon" }, { jp: "～だい", romaji: "~dai" }], answer: 1, explain: "BENAR: ～さつ (buku/majalah/kamus)!" },
      { id: "ra_5", type: "mcq", badge: "Satuan · ～そく", prompt: "「1 pasang sepatu (くつ)」 menggunakan satuan...", promptRomaji: "くつを 1[?] かいました", sub: "Sepasang sepatu / kaus kaki.", options: [{ jp: "いっそく", romaji: "issoku" }, { jp: "いっさつ", romaji: "issatsu" }, { jp: "いっぽん", romaji: "ippon" }, { jp: "いっぴき", romaji: "ippiki" }], answer: 0, explain: "BENAR: いっそく (1 pasang sepatu)!" },
      { id: "ra_6", type: "mcq", badge: "Angka Besar", prompt: "Angka 「100,000」 (seratus ribu) dalam bahasa Jepang adalah...", promptRomaji: "10 × 10.000 (まん)!", sub: "Kelompokkan 4 angka nol di belakang!", options: [{ jp: "ひゃくせん", romaji: "hyakusen" }, { jp: "じゅうまん", romaji: "juuman" }, { jp: "いちまん", romaji: "ichiman" }, { jp: "ひゃくまん", romaji: "hyakuman" }], answer: 1, explain: "BENAR: 100.000 = じゅうまん (10 × 10.000)!" },
      { id: "ra_7", type: "mcq", badge: "Angka Besar", prompt: "Angka 「1,000,000」 (satu juta) dalam bahasa Jepang adalah...", promptRomaji: "100 × 10.000 (まん)!", sub: "Potong 4 nol dari belakang → sisa 100!", options: [{ jp: "いちおく", romaji: "ichioku" }, { jp: "ひゃくまん", romaji: "hyakuman" }, { jp: "じゅうまん", romaji: "juuman" }, { jp: "せんまん", romaji: "senman" }], answer: 1, explain: "BENAR: 1.000.000 = ひゃくまん (100 × 10.000)!" },
      { id: "ra_8", type: "mcq", badge: "Angka Pengecualian", prompt: "Bagaimana bacaan yang BENAR untuk 「8,600」?", promptRomaji: "8.000 + 600", sub: "Dua-duanya pengecualian!", options: [{ jp: "はちせん ろくひゃく", romaji: "hachisen rokuhyaku" }, { jp: "はっせん ろっぴゃく", romaji: "hassen roppyaku" }, { jp: "はっせん ろくぴゃく", romaji: "hassen rokupyaku" }, { jp: "はちぜん ろっぴゃく", romaji: "hachizen roppyaku" }], answer: 1, explain: "BENAR: はっせん ろっぴゃく!" },
      { id: "ra_9", type: "mcq", badge: "Satuan · ～こ", prompt: "「6 buah permen / apel kecil」 dengan satuan ～こ dibaca...", promptRomaji: "6個 = ?", sub: "1=いっこ, 6=ろっこ, 8=はっこ, 10=じゅっこ.", options: [{ jp: "ろくこ", romaji: "rokuko" }, { jp: "ろっこ", romaji: "rokko" }, { jp: "むっこ", romaji: "mukko" }, { jp: "ろっぽ", romaji: "roppo" }], answer: 1, explain: "BENAR: 6個 = ろっこ!" },
      { id: "ra_10", type: "input", badge: "Ketik · 100 Juta", prompt: "Ketik bacaan bahasa Jepang untuk 「100,000,000」 (100 juta — Bab 25)!", promptRomaji: "1億 = ?", sub: "Ketik Hiragana atau Romaji.", placeholder: "Ketik: いちおく atau ichioku", accepted: ["いちおく", "ichioku"], displayAnswer: "いちおく (ichioku)", explain: "BENAR: いちおく (100 juta)!" }
    ]
  },

  // ==================== 3. KALENDER, TANGGAL 1–31, & WAKTU ====================
  {
    id: "tanggal",
    icon: "📅",
    title: "Kalender Lengkap: Tanggal 1–31, Bulan, Hari, & Jam",
    refSource: "Lampiran III Minna no Nihongo I",
    summary: "Kalender klik-interaktif Tanggal 1–31 + tabel 12 bulan, 7 hari, dan bacaan jam/menit.",
    tip: "Semua tanggal 1–10 punya bacaan khusus, ditambah 14 (じゅうよっか), 20 (はつか), dan 24 (にじゅうよっか). Semua tanggal lainnya tinggal Angka + にち!",
    interactiveWidget: "date_picker",
    groups: [
      {
        name: "12 Bulan (～がつ) — Waspadai 4, 7, 9!",
        items: [
          { jp: "1がつ / 2がつ / 3がつ", kanji: "1月・2月・3月", romaji: "ichigatsu / nigatsu / sangatsu", arti: "Januari / Februari / Maret" },
          { jp: "4がつ (しがつ!) / 5がつ / 6がつ", kanji: "4月・5月・6月", romaji: "SHIGATSU / gogatsu / rokugatsu", arti: "April (khusus!) / Mei / Juni" },
          { jp: "7がつ (しちがつ!) / 8がつ / 9がつ (くがつ!)", kanji: "7月・8月・9月", romaji: "SHICHIGATSU / hachigatsu / KUGATSU", arti: "Juli (khusus!) / Agustus / September (khusus!)" },
          { jp: "10がつ / 11がつ / 12がつ", kanji: "10月・11月・12月", romaji: "juugatsu / juuichigatsu / juunigatsu", arti: "Oktober / November / Desember" }
        ]
      },
      {
        name: "7 Hari dalam Seminggu (～ようび) & Makna Kanjinya",
        items: [
          { jp: "げつようび / かようび / すいようび", kanji: "月・火・水曜日", romaji: "getsuyoubi / kayoubi / suiyoubi", arti: "Senin (Bulan) / Selasa (Api) / Rabu (Air)" },
          { jp: "もくようび / きんようび / どようび / にちようび", kanji: "木・金・土・日曜日", romaji: "mokuyoubi / kinyoubi / doyoubi / nichiyoubi", arti: "Kamis (Pohon) / Jumat (Emas) / Sabtu (Tanah) / Minggu (Matahari)" }
        ]
      }
    ],
    questions: [
      { id: "rt_1", type: "mcq", badge: "Tanggal · 1–5", prompt: "Tanggal 「2日」 dan 「3日」 dibaca...", promptRomaji: "Tanggal 2 & 3", sub: "1=ついたち, 2=?, 3=?, 4=よっか, 5=いつか.", options: [{ jp: "ににち ・ さんにち", romaji: "ninichi · sannichi" }, { jp: "ふつか ・ みっか", romaji: "futsuka · mikka" }, { jp: "むいか ・ なのか", romaji: "muika · nanoka" }, { jp: "よっか ・ いつか", romaji: "yokka · itsuka" }], answer: 1, explain: "BENAR: 2日 = ふつか, 3日 = みっか!" },
      { id: "rt_2", type: "mcq", badge: "Tanggal · 5 & 6", prompt: "Tanggal 「5日」 dan 「6日」 dibaca...", promptRomaji: "Tanggal 5 & 6", sub: "Jangan tertukar dengan 3日 (みっか)!", options: [{ jp: "いつか ・ むいか", romaji: "itsuka · muika" }, { jp: "ごにち ・ ろくにち", romaji: "gonichi · rokunichi" }, { jp: "いつか ・ みっか", romaji: "itsuka · mikka" }, { jp: "なのか ・ ようか", romaji: "nanoka · youka" }], answer: 0, explain: "BENAR: 5日 = いつか, 6日 = むいか!" },
      { id: "rt_3", type: "mcq", badge: "Tanggal · 7 & 8", prompt: "Tanggal 「7日」 dan 「8日」 dibaca...", promptRomaji: "Tanggal 7 & 8", sub: "Perhatikan vokal panjang ようか!", options: [{ jp: "しちにち ・ はちにち", romaji: "shichinichi · hachinichi" }, { jp: "なのか ・ ようか", romaji: "nanoka · youka" }, { jp: "なのか ・ よっか", romaji: "nanoka · yokka" }, { jp: "むいか ・ ここのか", romaji: "muika · kokonoka" }], answer: 1, explain: "BENAR: 7日 = なのか, 8日 = ようか!" },
      { id: "rt_4", type: "mcq", badge: "Tanggal · 14 & 24", prompt: "Tanggal 「14日」 dan 「24日」 dibaca...", promptRomaji: "Tanggal 14 & 24", sub: "Berujung 4 selalu よっか!", options: [{ jp: "じゅうよんにち ・ にじゅうよんにち", romaji: "juuyonnichi · nijuuyonnichi" }, { jp: "じゅうよっか ・ にじゅうよっか", romaji: "juuyokka · nijuuyokka" }, { jp: "じゅうようか ・ にじゅうようか", romaji: "juuyouka · nijuuyouka" }, { jp: "じゅうよっか ・ はつかよっか", romaji: "juuyokka · hatsukayokka" }], answer: 1, explain: "BENAR: じゅうよっか dan にじゅうよっか!" },
      { id: "rt_5", type: "mcq", badge: "Tanggal · 19 & 29", prompt: "Bagaimana bacaan tanggal 「19日」?", promptRomaji: "19日 (bukan ここのか, pakai くにち!)", sub: "Untuk 19 dan 29 dibaca ～くにち!", options: [{ jp: "じゅうここのか", romaji: "juukokonoka" }, { jp: "じゅうくにち", romaji: "juukunichi" }, { jp: "じゅうきゅうか", romaji: "juukyuuka" }, { jp: "じゅうここのにち", romaji: "juukokononichi" }], answer: 1, explain: "BENAR: 19日 = じゅうくにち, 29日 = にじゅうくにち!" },
      { id: "rt_6", type: "mcq", badge: "Bulan Khusus", prompt: "「Bulan Juli」 dan 「Bulan September」 dibaca...", promptRomaji: "7月 & 9月", sub: "Dua bulan pengecualian!", options: [{ jp: "なながつ ・ きゅうがつ", romaji: "nanagatsu · kyuugatsu" }, { jp: "しちがつ ・ くがつ", romaji: "shichigatsu · kugatsu" }, { jp: "しがつ ・ くがつ", romaji: "shigatsu · kugatsu" }, { jp: "しちがつ ・ きゅうがつ", romaji: "shichigatsu · kyuugatsu" }], answer: 1, explain: "BENAR: 7月 = しちがつ, 9月 = くがつ!" },
      { id: "rt_7", type: "mcq", badge: "Hari · Kanji", prompt: "「かようび (火曜日)」 dan 「どようび (土曜日)」 adalah hari...", promptRomaji: "kayoubi & doyoubi", sub: "火 = Api (Selasa), 土 = Tanah (Sabtu).", options: [{ jp: "Senin & Minggu", romaji: "" }, { jp: "Selasa & Sabtu", romaji: "" }, { jp: "Rabu & Jumat", romaji: "" }, { jp: "Kamis & Sabtu", romaji: "" }], answer: 1, explain: "BENAR: かようび = Selasa, どようび = Sabtu!" },
      { id: "rt_8", type: "mcq", badge: "Jam & Menit", prompt: "Pukul 「04:08」 dibaca...", promptRomaji: "4時8分", sub: "4じ = よじ, 8ふん = はっぷん!", options: [{ jp: "よんじ はちふん", romaji: "yonji hachifun" }, { jp: "よじ はっぷん", romaji: "yoji happun" }, { jp: "しじ はっぷん", romaji: "shiji happun" }, { jp: "よじ はちぷん", romaji: "yoji hachipun" }], answer: 1, explain: "BENAR: よじ はっぷん!" },
      { id: "rt_9", type: "mcq", badge: "Tanggal · 1日 vs 1日間", prompt: "Apa beda 「ついたち (1日)」 dengan 「いちにち (1日)」?", promptRomaji: "tsuitachi vs ichinichi", sub: "Titik tanggal vs durasi 24 jam!", options: [{ jp: "ついたち = tanggal 1 · いちにち = selama 1 hari", romaji: "" }, { jp: "ついたち = selama 1 hari · いちにち = tanggal 1", romaji: "" }, { jp: "Keduanya sama saja", romaji: "" }, { jp: "ついたち = bulan 1 · いちにち = tanggal 1", romaji: "" }], answer: 0, explain: "BENAR: ついたち = tanggal 1, いちにち = durasi 1 hari penuh!" },
      { id: "rt_10", type: "input", badge: "Ketik · Tanggal 10", prompt: "Ketik bacaan bahasa Jepang untuk tanggal 「10日」 (tanggal 10)!", promptRomaji: "10日 = ?", sub: "Ketik Hiragana atau Romaji.", placeholder: "Ketik: とおか atau tooka", accepted: ["とおか", "tooka"], displayAnswer: "とおか (tooka)", explain: "BENAR: 10日 = とおか!" }
    ]
  },

  // ==================== 4. MAKANAN: DAGING, IKAN, SAYUR, BUAH, MENU ====================
  {
    id: "makanan",
    icon: "🍱",
    title: "Makanan: Daging, Ikan, Sayur, Buah, & Menu Jepang",
    refSource: "Reference Words Bab 6 & Bab 11 Minna no Nihongo I",
    summary: "Daftar resmi bahan makanan di buku Minna no Nihongo (ぎゅうにく, さけ, じゃがいも, いちご, てんぷら, dll.).",
    tip: "Nama daging sangat mudah dihafal: [Nama Hewan] + にく (肉)! うし/ぎゅう (sapi) → ぎゅうにく, ぶた (babi) → ぶたにく, とり (ayam) → とりにく!",
    groups: [
      {
        name: "Daging (にく / 肉) & Ikan/Seafood (さかな / 魚) — Ref. Bab 6",
        items: [
          { jp: "ぎゅうにく / ぶたにく / とりにく", kanji: "牛肉 / 豚肉 / 鶏肉", romaji: "gyuuniku / butaniku / toriniku", arti: "daging sapi / daging babi / daging ayam" },
          { jp: "ハム / ソーセージ", kanji: "ハム / ソーセージ", romaji: "hamu / sooseeji", arti: "ham / sosis" },
          { jp: "さけ / まぐろ / さば / あじ", kanji: "鮭 / 鮪 / 鯖 / 鯵", romaji: "sake / maguro / saba / aji", arti: "ikan salmon / tuna / makarel / kembung-horse mackerel" },
          { jp: "えび / かに / いか / たこ", kanji: "海老 / 蟹 / 烏賊 / 蛸", romaji: "ebi / kani / ika / tako", arti: "udang / kepiting / cumi-cumi / gurita" }
        ]
      },
      {
        name: "Sayuran (やさい / 野菜) — Ref. Bab 6",
        items: [
          { jp: "きゅうり / トマト / なす / まめ", kanji: "胡瓜 / 茄子 / 豆", romaji: "kyuuri / tomato / nasu / mame", arti: "mentimun / tomat / terong / kacang-kacangan" },
          { jp: "キャベツ / はくさい / ほうれんそう / レタス", kanji: "白菜 / 菠薐草", romaji: "kyabetsu / hakusai / hourensou / retasu", arti: "kubis / sawi putih / bayam / selada" },
          { jp: "じゃがいも / だいこん / にんじん / たまねぎ / ねぎ", kanji: "大根 / 人参 / 玉ねぎ / 葱", romaji: "jagaimo / daikon / ninjin / tamanegi / negi", arti: "kentang / lobak putih / wortel / bawang bombai / daun bawang" }
        ]
      },
      {
        name: "Buah-buahan (くだもの / 果物) — Ref. Bab 6",
        items: [
          { jp: "いちご / もも / すいか / ぶどう", kanji: "苺 / 桃 / 西瓜 / 葡萄", romaji: "ichigo / momo / suika / budou", arti: "stroberi / persik / semangka / anggur" },
          { jp: "なし / かき / みかん / りんご / バナナ", kanji: "梨 / 柿 / 蜜柑 / 林檎", romaji: "nashi / kaki / mikan / ringo / banana", arti: "pir / kesemek / jeruk / apel / pisang" }
        ]
      },
      {
        name: "Menu Restoran Jepang (メニュー) — Ref. Bab 11",
        items: [
          { jp: "てんぷら / すきやき / さしみ / すし", kanji: "天ぷら / すき焼き / 刺身 / 寿司", romaji: "tenpura / sukiyaki / sashimi / sushi", arti: "gorengan tepung / rebusan daging / ikan mentah iris / sushi" },
          { jp: "うどん / そば / ラーメン / やきそば", kanji: "うどん / 蕎麦 / 焼きそば", romaji: "udon / soba / raamen / yakisoba", arti: "mi udon tebal / mi soba / ramen / mi goreng" },
          { jp: "ぎゅうどん / おやこどん / とんかつ / カレーライス / ていしょく", kanji: "牛丼 / 親子丼 / 定食", romaji: "gyuudon / oyakodon / tonkatsu / kareeraisu / teishoku", arti: "nasi mangkuk sapi / nasi ayam+telur / katsu babi / nasi kari / paket set menu" }
        ]
      }
    ],
    questions: [
      { id: "rm_1", type: "mcq", badge: "Daging · Ref. Bab 6", prompt: "Pasangan yang TEPAT untuk 「ぎゅうにく」 dan 「とりにく」 adalah...", promptRomaji: "gyuuniku & toriniku", sub: "ぎゅう (sapi), ぶた (babi), とり (ayam).", options: [{ jp: "daging babi & daging sapi", romaji: "" }, { jp: "daging sapi & daging ayam", romaji: "" }, { jp: "daging ayam & daging ikan", romaji: "" }, { jp: "daging sapi & daging babi", romaji: "" }], answer: 1, explain: "BENAR: ぎゅうにく = daging sapi, とりにく = daging ayam (ぶたにく = daging babi)!" },
      { id: "rm_2", type: "mcq", badge: "Ikan & Seafood", prompt: "「まぐろ」 dan 「えび」 adalah...", promptRomaji: "maguro & ebi", sub: "Sering ada di menu sushi & tempura!", options: [{ jp: "salmon & kepiting", romaji: "" }, { jp: "ikan tuna & udang", romaji: "" }, { jp: "cumi-cumi & gurita", romaji: "" }, { jp: "makarel & udang", romaji: "" }], answer: 1, explain: "BENAR: まぐろ = tuna, えび = udang (さけ = salmon, かに = kepiting)!" },
      { id: "rm_3", type: "mcq", badge: "Seafood", prompt: "「たこやき」 dibuat dari 「たこ」. Apa arti 「たこ」 dan 「いか」?", promptRomaji: "tako & ika", sub: "Dua seafood bertentakel.", options: [{ jp: "udang & kepiting", romaji: "" }, { jp: "gurita & cumi-cumi", romaji: "" }, { jp: "salmon & tuna", romaji: "" }, { jp: "ikan & ayam", romaji: "" }], answer: 1, explain: "BENAR: たこ = gurita, いか = cumi-cumi!" },
      { id: "rm_4", type: "mcq", badge: "Sayuran · Ref. Bab 6", prompt: "「じゃがいも」 dan 「たまねぎ」 artinya...", promptRomaji: "jagaimo & tamanegi", sub: "Bahan wajib kari Jepang!", options: [{ jp: "timun & terong", romaji: "" }, { jp: "kentang & bawang bombai", romaji: "" }, { jp: "kubis & bayam", romaji: "" }, { jp: "lobak & wortel", romaji: "" }], answer: 1, explain: "BENAR: じゃがいも = kentang, たまねぎ = bawang bombai!" },
      { id: "rm_5", type: "mcq", badge: "Sayuran · Ref. Bab 6", prompt: "Apa bahasa Jepang untuk 「wortel」 dan 「bayam」?", promptRomaji: "wortel & bayam", sub: "Kosakata sayur Ref. Bab 6.", options: [{ jp: "だいこん ・ はくさい", romaji: "daikon · hakusai" }, { jp: "にんじん ・ ほうれんそう", romaji: "ninjin · hourensou" }, { jp: "きゅうり ・ なす", romaji: "kyuuri · nasu" }, { jp: "ねぎ ・ キャベツ", romaji: "negi · kyabetsu" }], answer: 1, explain: "BENAR: にんじん = wortel, ほうれんそう = bayam!" },
      { id: "rm_6", type: "mcq", badge: "Buah · Ref. Bab 6", prompt: "「いちご」, 「すいか」, dan 「ぶどう」 artinya...", promptRomaji: "ichigo, suika, budou", sub: "Buah populer di Jepang.", options: [{ jp: "apel, jeruk, pisang", romaji: "" }, { jp: "stroberi, semangka, anggur", romaji: "" }, { jp: "persik, pir, kesemek", romaji: "" }, { jp: "stroberi, persik, pir", romaji: "" }], answer: 1, explain: "BENAR: いちご = stroberi, すいか = semangka, ぶどう = anggur!" },
      { id: "rm_7", type: "mcq", badge: "Menu Jepang · Ref. Bab 11", prompt: "「おやこどん」 (親子丼) secara harfiah berarti 'mangkuk orang tua & anak', karena isinya adalah...", promptRomaji: "おや (orang tua) + こ (anak) + どん (nasi mangkuk)", sub: "Menu populer di restoran Jepang.", options: [{ jp: "daging sapi & bawang", romaji: "" }, { jp: "daging ayam & telur", romaji: "" }, { jp: "ikan salmon & nasi", romaji: "" }, { jp: "mi goreng & sayur", romaji: "" }], answer: 1, explain: "BENAR: Ayam (orang tua) & telur (anak) di atas nasi hangat!" },
      { id: "rm_8", type: "mcq", badge: "Menu Jepang · Ref. Bab 11", prompt: "Saat kamu memesan 「ていしょく」 (定食) di restoran Jepang, maksudnya adalah...", promptRomaji: "teishoku = ?", sub: "Sering muncul di menu makan siang Jepang.", options: [{ jp: "makanan penutup", romaji: "" }, { jp: "paket makan lengkap (nasi, lauk, sup miso, acar)", romaji: "" }, { jp: "minuman isi ulang", romaji: "" }, { jp: "makanan mentah", romaji: "" }], answer: 1, explain: "BENAR: ていしょく = set menu / paket makan lengkap!" },
      { id: "rm_9", type: "mcq", badge: "Daging · Halal Check", prompt: "Jika kamu ingin memastikan tidak memakan daging babi, kata yang wajib kamu kenali di komposisi makanan adalah...", promptRomaji: "Daging babi = ?", sub: "Sangat penting saat tinggal/wisata di Jepang!", options: [{ jp: "ぎゅうにく", romaji: "gyuuniku" }, { jp: "ぶたにく", romaji: "butaniku" }, { jp: "とりにく", romaji: "toriniku" }, { jp: "さかな", romaji: "sakana" }], answer: 1, explain: "BENAR: ぶたにく (豚肉 / ポーク) = daging babi!" },
      { id: "rm_10", type: "input", badge: "Ketik · Daging Ayam", prompt: "Ketik bahasa Jepang untuk 「daging ayam」!", promptRomaji: "Daging ayam = ?", sub: "Ketik Hiragana atau Romaji.", placeholder: "Ketik: とりにく atau toriniku", accepted: ["とりにく", "toriniku"], displayAnswer: "とりにく (toriniku)", explain: "BENAR: とりにく (鶏肉)!" }
    ]
  },

  // ==================== 5. OLAHRAGA, MUSIK, & FILM ====================
  {
    id: "olahraga",
    icon: "⚽",
    title: "Olahraga, Musik, & Film (スポーツ・音楽・映画)",
    refSource: "Reference Words Bab 9 & Bab 10 Minna no Nihongo I",
    summary: "Cabang olahraga Jepang & internasional, genre musik, dan genre film.",
    tip: "Sebagian besar olahraga modern pakai Katakana (サッカー, テニス, バスケットボール), tapi olahraga tradisional & renang/bisbol pakai kata Jepang/Kanji (やきゅう, すいえい, じゅうどう, からて, けんどう, たっきゅう)!",
    groups: [
      {
        name: "Olahraga (スポーツ) — Ref. Bab 9 & 10",
        items: [
          { jp: "サッカー / テニス / ゴルフ / ボーリング", kanji: "—", romaji: "sakkaa / tenisu / gorufu / booringu", arti: "sepak bola / tenis / golf / bowling" },
          { jp: "バスケットボール / バレーボール / バドミントン", kanji: "—", romaji: "basukettobooru / bareebooru / badominton", arti: "bola basket / bola voli / bulu tangkis" },
          { jp: "やきゅう / たっきゅう / すいえい", kanji: "野球 / 卓球 / 水泳", romaji: "yakyuu / takkyuu / suiei", arti: "bisbol / tenis meja (pingpong) / renang" },
          { jp: "じゅうどう / からて / けんどう / すもう", kanji: "柔道 / 空手 / 剣道 / 相撲", romaji: "juudou / karate / kendou / sumou", arti: "judo / karate / kendo / sumo" },
          { jp: "スキー / スケート / マラソン / ジョギング", kanji: "—", romaji: "sukii / sukeeto / marason / jogingu", arti: "ski / seluncur es / maraton / joging" }
        ]
      },
      {
        name: "Genre Musik (おんがく) & Film (えいが) — Ref. Bab 9",
        items: [
          { jp: "ポップス / ロック / ジャズ / クラシック", kanji: "—", romaji: "poppusu / rokku / jazu / kurashikku", arti: "pop / rock / jazz / musik klasik" },
          { jp: "ラテン / ミンヨウ / えんか", kanji: "民謡 / 演歌", romaji: "raten / minyou / enka", arti: "musik Latin / lagu rakyat / lagu tradisional enka" },
          { jp: "アクション / コメディー / ホラー / アニメ / SF", kanji: "—", romaji: "akushon / komedii / horaa / anime / esu-efu", arti: "laga / komedi / horor / animasi / fiksi ilmiah" },
          { jp: "れんあい / ミステリー / ドキュメンタリー", kanji: "恋愛", romaji: "ren'ai / misuterii / dokyumentarii", arti: "romantis / misteri / dokumenter" }
        ]
      }
    ],
    questions: [
      { id: "ro_1", type: "mcq", badge: "Olahraga · Kanji", prompt: "「すいえい」 (水泳) dan 「たっきゅう」 (卓球) artinya...", promptRomaji: "suiei & takkyuu", sub: "水 = air, 卓 = meja + 球 = bola!", options: [{ jp: "bisbol & sepak bola", romaji: "" }, { jp: "renang & tenis meja (pingpong)", romaji: "" }, { jp: "judo & karate", romaji: "" }, { jp: "basket & voli", romaji: "" }], answer: 1, explain: "BENAR: すいえい = renang, たっきゅう = tenis meja!" },
      { id: "ro_2", type: "mcq", badge: "Olahraga · Jepang", prompt: "Olahraga paling populer di Jepang: 「やきゅう」 (野球) adalah...", promptRomaji: "yakyuu = ?", sub: "野 = lapangan + 球 = bola.", options: [{ jp: "sepak bola", romaji: "" }, { jp: "bisbol (baseball)", romaji: "" }, { jp: "bola voli", romaji: "" }, { jp: "tenis", romaji: "" }], answer: 1, explain: "BENAR: やきゅう = bisbol!" },
      { id: "ro_3", type: "mcq", badge: "Bela Diri Jepang", prompt: "「けんどう」 (剣道) adalah seni bela diri Jepang yang menggunakan...", promptRomaji: "剣 (ken) = pedang!", sub: "じゅうどう vs からて vs けんどう.", options: [{ jp: "tangan kosong", romaji: "" }, { jp: "pedang bambu (kendo)", romaji: "" }, { jp: "bantingan sumo", romaji: "" }, { jp: "panah", romaji: "" }], answer: 1, explain: "BENAR: けんどう = seni pedang (kendo)!" },
      { id: "ro_4", type: "mcq", badge: "Olahraga · Katakana", prompt: "「バレーボール」 dan 「バスケットボール」 adalah...", promptRomaji: "bareebooru & basukettobooru", sub: "Serapan bahasa Inggris.", options: [{ jp: "bola voli & bola basket", romaji: "" }, { jp: "bulu tangkis & sepak bola", romaji: "" }, { jp: "bisbol & tenis", romaji: "" }, { jp: "bowling & golf", romaji: "" }], answer: 0, explain: "BENAR: バレーボール = voli, バスケットボール = basket!" },
      { id: "ro_5", type: "mcq", badge: "Musik · Ref. Bab 9", prompt: "「えんか」 (演歌) adalah genre musik khas Jepang berupa...", promptRomaji: "enka = ?", sub: "Musik balada tradisional populer Jepang.", options: [{ jp: "musik rock keras", romaji: "" }, { jp: "lagu balada tradisional Jepang", romaji: "" }, { jp: "musik klasik Eropa", romaji: "" }, { jp: "musik jazz modern", romaji: "" }], answer: 1, explain: "BENAR: えんか = musik balada tradisional Jepang!" },
      { id: "ro_6", type: "mcq", badge: "Film · Ref. Bab 9", prompt: "Film bergenre 「ホラー」 dan 「れんあい」 (恋愛) artinya...", promptRomaji: "horaa & ren'ai", sub: "Genre film Ref. Bab 9.", options: [{ jp: "komedi & laga", romaji: "" }, { jp: "horor & romantis", romaji: "" }, { jp: "dokumenter & misteri", romaji: "" }, { jp: "animasi & sci-fi", romaji: "" }], answer: 1, explain: "BENAR: ホラー = horor, れんあい = romantis!" },
      { id: "ro_7", type: "mcq", badge: "Kata Kerja Olahraga", prompt: "「Saya bermain sepak bola」 memakai partikel dan kata kerja...", promptRomaji: "サッカー [?] [?]", sub: "Olahraga selalu dipasangkan dengan を します!", options: [{ jp: "サッカーが します", romaji: "sakkaa ga shimasu" }, { jp: "サッカーを します", romaji: "sakkaa o shimasu" }, { jp: "サッカーに します", romaji: "sakkaa ni shimasu" }, { jp: "サッカーで します", romaji: "sakkaa de shimasu" }], answer: 1, explain: "BENAR: サッカーを します!" },
      { id: "ro_8", type: "mcq", badge: "Olahraga · Musim Dingin", prompt: "Dua olahraga musim dingin di Jepang: 「スキー」 dan 「スケート」 artinya...", promptRomaji: "sukii & sukeeto", sub: "Dimainkan di salju & es.", options: [{ jp: "ski & seluncur es", romaji: "" }, { jp: "renang & selancar", romaji: "" }, { jp: "maraton & joging", romaji: "" }, { jp: "golf & bowling", romaji: "" }], answer: 0, explain: "BENAR: スキー = ski, スケート = seluncur es!" },
      { id: "ro_9", type: "mcq", badge: "Bulu Tangkis", prompt: "Bahasa Jepang (Katakana) untuk 「bulu tangkis」 adalah...", promptRomaji: "Badminton → Katakana", sub: "Perhatikan bunyi d/t!", options: [{ jp: "バドミントン", romaji: "badominton" }, { jp: "バスケット", romaji: "basuketto" }, { jp: "ボーリング", romaji: "booringu" }, { jp: "バレーボール", romaji: "bareebooru" }], answer: 0, explain: "BENAR: バドミントン!" },
      { id: "ro_10", type: "input", badge: "Ketik · Renang", prompt: "Ketik bahasa Jepang untuk olahraga 「renang」 (水泳)!", promptRomaji: "Renang = ?", sub: "Ketik Hiragana atau Romaji.", placeholder: "Ketik: すいえい atau suiei", accepted: ["すいえい", "suiei"], displayAnswer: "すいえい (suiei)", explain: "BENAR: すいえい (水泳)!" }
    ]
  },

  // ==================== 6. KELUARGA SENDIRI VS KELUARGA ORANG LAIN ====================
  {
    id: "keluarga",
    icon: "👨‍👩‍👧‍👦",
    title: "Keluarga Sendiri vs Keluarga Orang Lain (家族)",
    refSource: "Reference Words Bab 7 & Bab 11 Minna no Nihongo I",
    summary: "15 pasangan istilah keluarga (merendah untuk keluarga sendiri vs hormat untuk keluarga orang lain).",
    tip: "Aturan emas budaya Jepang: Saat membicarakan keluarga SENDIRI ke orang luar, pakai bentuk merendah (ちち, はは, あに, あね, おっと, つま). Saat menyebut keluarga ORANG LAIN (atau memanggil langsung di rumah), pakai bentuk hormat (おとうさん, おかあさん, おにいさん, おねえさん, ごしゅじん, おくさん)!",
    groups: [
      {
        name: "Orang Tua, Kakek-Nenek, & Kakak-Adik",
        items: [
          { jp: "ちち ↔ おとうさん", kanji: "父 / お父さん", romaji: "chichi ↔ otousan", arti: "ayah saya ↔ ayah orang lain" },
          { jp: "はは ↔ おかあさん", kanji: "母 / お母さん", romaji: "haha ↔ okaasan", arti: "ibu saya ↔ ibu orang lain" },
          { jp: "りょうしん ↔ ごりょうしん", kanji: "両親 / ご両親", romaji: "ryoushin ↔ goryoushin", arti: "orang tua saya ↔ orang tua orang lain" },
          { jp: "そふ ↔ おじいさん", kanji: "祖父 / お祖父さん", romaji: "sofu ↔ ojiisan", arti: "kakek saya ↔ kakek orang lain" },
          { jp: "そぼ ↔ おばあさん", kanji: "祖母 / お祖母さん", romaji: "sobo ↔ obaasan", arti: "nenek saya ↔ nenek orang lain" },
          { jp: "あに ↔ おにいさん", kanji: "兄 / お兄さん", romaji: "ani ↔ oniisan", arti: "kakak laki-laki saya ↔ kakak lk orang lain" },
          { jp: "あね ↔ おねえさん", kanji: "姉 / お姉さん", romaji: "ane ↔ oneesan", arti: "kakak perempuan saya ↔ kakak pr orang lain" },
          { jp: "おとうと ↔ おとうとさん", kanji: "弟 / 弟さん", romaji: "otouto ↔ otoutosan", arti: "adik laki-laki saya ↔ adik lk orang lain" },
          { jp: "いもうと ↔ いもうとさん", kanji: "妹 / 妹さん", romaji: "imouto ↔ imoutosan", arti: "adik perempuan saya ↔ adik pr orang lain" },
          { jp: "きょうだい ↔ ごきょうだい", kanji: "兄弟 / ご兄弟", romaji: "kyoudai ↔ gokyoudai", arti: "saudara kandung saya ↔ saudara orang lain" }
        ]
      },
      {
        name: "Pasangan (Suami-Istri) & Anak",
        items: [
          { jp: "おっと（しゅじん） ↔ ごしゅじん", kanji: "夫（主人） / ご主人", romaji: "otto (shujin) ↔ goshujin", arti: "suami saya ↔ suami orang lain" },
          { jp: "つま（かない） ↔ おくさん", kanji: "妻（家内） / 奥さん", romaji: "tsuma (kanai) ↔ okusan", arti: "istri saya ↔ istri orang lain" },
          { jp: "こども ↔ おこさん", kanji: "子供 / お子さん", romaji: "kodomo ↔ okosan", arti: "anak saya ↔ anak orang lain" },
          { jp: "むすこ ↔ むすこさん", kanji: "息子 / 息子さん", romaji: "musuko ↔ musukosan", arti: "putra saya ↔ putra orang lain" },
          { jp: "むすめ ↔ むすめさん", kanji: "娘 / 娘さん", romaji: "musume ↔ musumesan", arti: "putri saya ↔ putri orang lain" }
        ]
      }
    ],
    questions: [
      { id: "rk_1", type: "mcq", badge: "Keluarga · Sendiri vs Orang", prompt: "Kamu bertanya kepada Sdr. Yamada tentang ISTRINYA: 「やまださんの （　　　　）は おげんきですか。」", promptRomaji: "Istri orang lain = ?", sub: "つま/かない (istri saya) vs おくさん (istri orang lain)!", options: [{ jp: "つま", romaji: "tsuma" }, { jp: "かない", romaji: "kanai" }, { jp: "おくさん", romaji: "okusan" }, { jp: "はは", romaji: "haha" }], answer: 2, explain: "BENAR: おくさん (istri orang lain)!" },
      { id: "rk_2", type: "mcq", badge: "Keluarga · Sendiri vs Orang", prompt: "Kamu bertanya kepada Sdr. Sato tentang SUAMINYA: 「（　　　　　）の おしごとは なんですか。」", promptRomaji: "Suami orang lain = ?", sub: "Bentuk hormat untuk suami orang lain.", options: [{ jp: "おっと", romaji: "otto" }, { jp: "ごしゅじん", romaji: "goshujin" }, { jp: "ちち", romaji: "chichi" }, { jp: "おとうさん", romaji: "otousan" }], answer: 1, explain: "BENAR: ごしゅじん!" },
      { id: "rk_3", type: "mcq", badge: "Keluarga · Kakak Sendiri", prompt: "Kamu bercerita ke teman: 「Kakak laki-laki SAYA bekerja di bank.」", promptRomaji: "Kakak laki-laki saya = ?", sub: "あに vs おにいさん!", options: [{ jp: "おにいさんは ぎんこういんです。", romaji: "Oniisan wa ginkouin desu." }, { jp: "あには ぎんこういんです。", romaji: "Ani wa ginkouin desu." }, { jp: "おとうとは ぎんこういんです。", romaji: "Otouto wa ginkouin desu." }, { jp: "ちちは ぎんこういんです。", romaji: "Chichi wa ginkouin desu." }], answer: 1, explain: "BENAR: あには ぎんこういんです (あに = kakak laki-laki saya)!" },
      { id: "rk_4", type: "mcq", badge: "Keluarga · Kakak Pr & Adik Pr", prompt: "Pasangan arti 「あね」 dan 「いもうと」 adalah...", promptRomaji: "ane & imouto", sub: "Kakak perempuan vs adik perempuan sendiri.", options: [{ jp: "adik pr & kakak pr", romaji: "" }, { jp: "kakak perempuan & adik perempuan", romaji: "" }, { jp: "kakak laki-laki & adik laki-laki", romaji: "" }, { jp: "ibu & nenek", romaji: "" }], answer: 1, explain: "BENAR: あね = kakak perempuan, いもうと = adik perempuan!" },
      { id: "rk_5", type: "mcq", badge: "Keluarga · Kakek Nenek", prompt: "Bentuk merendah untuk menyebut 「kakek saya」 dan 「nenek saya」 kepada orang luar adalah...", promptRomaji: "祖父 & 祖母", sub: "Lawan dari おじいさん & おばあさん.", options: [{ jp: "そふ ・ そぼ", romaji: "sofu · sobo" }, { jp: "ちち ・ はは", romaji: "chichi · haha" }, { jp: "あに ・ あね", romaji: "ani · ane" }, { jp: "おっと ・ つま", romaji: "otto · tsuma" }], answer: 0, explain: "BENAR: そふ (kakek saya) dan そぼ (nenek saya)!" },
      { id: "rk_6", type: "mcq", badge: "Keluarga · Putra & Putri", prompt: "「むすこ」 (息子) dan 「むすめ」 (娘) artinya...", promptRomaji: "musuko & musume", sub: "Anak laki-laki & anak perempuan sendiri.", options: [{ jp: "adik lk & adik pr", romaji: "" }, { jp: "putra (anak lk) & putri (anak pr)", romaji: "" }, { jp: "suami & istri", romaji: "" }, { jp: "kakek & nenek", romaji: "" }], answer: 1, explain: "BENAR: むすこ = putra, むすめ = putri!" },
      { id: "rk_7", type: "mcq", badge: "Keluarga · Orang Tua", prompt: "Kamu bertanya ke teman: 「（　　　　　）は どちらに すんでいますか。」 (Orang tua ANDA tinggal di mana?)", promptRomaji: "Orang tua orang lain = ?", sub: "りょうしん ditambah awalan hormat ご!", options: [{ jp: "りょうしん", romaji: "ryoushin" }, { jp: "ごりょうしん", romaji: "goryoushin" }, { jp: "おりょうしん", romaji: "oryoushin" }, { jp: "ごきょうだい", romaji: "gokyoudai" }], answer: 1, explain: "BENAR: ごりょうしん (orang tua Anda)!" },
      { id: "rk_8", type: "mcq", badge: "Keluarga · Anak Orang Lain", prompt: "Bentuk sopan dari 「こども」 untuk menyebut anak orang lain adalah...", promptRomaji: "こども ↔ ?", sub: "Ditambah お + さん!", options: [{ jp: "こどもさん", romaji: "kodomosan" }, { jp: "おこさん", romaji: "okosan" }, { jp: "ごこども", romaji: "gokodomo" }, { jp: "むすこ", romaji: "musuko" }], answer: 1, explain: "BENAR: おこさん (anak Anda/orang lain)!" },
      { id: "rk_9", type: "mcq", badge: "Keluarga · Saudara Kandung", prompt: "「ごきょうだいは なんにんですか。」 artinya...", promptRomaji: "Gokyoudai wa nannin desu ka.", sub: "きょうだい = saudara kandung.", options: [{ jp: "Orang tua Anda berapa orang?", romaji: "" }, { jp: "Saudara kandung Anda berapa orang?", romaji: "" }, { jp: "Anak Anda berapa orang?", romaji: "" }, { jp: "Keluarga Anda di mana?", romaji: "" }], answer: 1, explain: "BENAR: Saudara kandung Anda berapa orang?" },
      { id: "rk_10", type: "input", badge: "Ketik · Adik Laki-laki", prompt: "Ketik bahasa Jepang untuk 「adik laki-laki saya」!", promptRomaji: "Adik laki-laki saya = ?", sub: "Ketik Hiragana atau Romaji.", placeholder: "Ketik: おとうと atau otouto", accepted: ["おとうと", "otouto"], displayAnswer: "おとうと (otouto)", explain: "BENAR: おとうと (弟)!" }
    ]
  },

  // ==================== 7. TUBUH, PENYAKIT, & PAKAIAN ====================
  {
    id: "tubuh",
    icon: "🩺",
    title: "Tubuh, Gejala Sakit, & Pakaian (体・病気・服)",
    refSource: "Reference Words Bab 16, 17, & 22 Minna no Nihongo I",
    summary: "Anggota tubuh lengkap, keluhan sakit di dokter/klinik, dan daftar pakaian + kata kerja pasangnya.",
    tip: "Untuk bilang bagian tubuh sakit: [Bagian Tubuh] が いたいです (contoh: あたまが いたいです = sakit kepala, のどが いたいです = sakit tenggorokan)!",
    groups: [
      {
        name: "Anggota Tubuh (からだ / 体) — Ref. Bab 16 & 17",
        items: [
          { jp: "あたま / かみ / かお / め / みみ / はな / くち / は", kanji: "頭・髪・顔・目・耳・鼻・口・歯", romaji: "atama / kami / kao / me / mimi / hana / kuchi / ha", arti: "kepala / rambut / wajah / mata / telinga / hidung / mulut / gigi" },
          { jp: "のど / くび / かた / うで / て / ゆび", kanji: "喉・首・肩・腕・手・指", romaji: "nodo / kubi / kata / ude / te / yubi", arti: "tenggorokan / leher / bahu / lengan / tangan / jari" },
          { jp: "むね / せなか / おなか / こし / あし / ひざ", kanji: "胸・背中・お腹・腰・足・膝", romaji: "mune / senaka / onaka / koshi / ashi / hiza", arti: "dada / punggung / perut / pinggang / kaki / lutut" }
        ]
      },
      {
        name: "Gejala & Kondisi Sakit (びょうき / 病気) — Ref. Bab 17",
        items: [
          { jp: "かぜを ひきます / ねつが あります", kanji: "風邪を引きます / 熱があります", romaji: "kaze o hikimasu / netsu ga arimasu", arti: "masuk angin, flu / mengalami demam" },
          { jp: "せきが でます / はなみずが でます", kanji: "咳が出ます / 鼻水が出ます", romaji: "seki ga demasu / hanamizu ga demasu", arti: "batuk / pilek (ingusan)" },
          { jp: "あたまが いたいです / おなかが いたいです / はが いたいです", kanji: "頭・お腹・歯が痛い", romaji: "atama / onaka / ha ga itai desu", arti: "sakit kepala / sakit perut / sakit gigi" },
          { jp: "けが / やけど / げり / アレルギー / ちゅうしゃ", kanji: "怪我 / 火傷 / 下痢 / 注射", romaji: "kega / yakedo / geri / arerugii / chuusha", arti: "luka-cedera / luka bakar / diare / alergi / suntikan" }
        ]
      },
      {
        name: "Pakaian & Aksesoris (ふく / 服) — Ref. Bab 22",
        items: [
          { jp: "ジャケット / うわぎ / したぎ / セーター / コート / スーツ", kanji: "上着 / 下着", romaji: "jaketto / uwagi / shitagi / seetaa / kooto / suutsu", arti: "jaket / baju luar / pakaian dalam / sweter / mantel / jas (pakai きます!)" },
          { jp: "ズボン / ジーンズ / スカート / くつ / くつした / ブーツ", kanji: "靴 / 靴下", romaji: "zubon / jiinzu / sukaato / kutsu / kutsushita / buutsu", arti: "celana panjang / jeans / rok / sepatu / kaus kaki / sepatu bot (pakai はきます!)" },
          { jp: "ぼうし / めがね / マフラー / てぶくろ / ゆびわ", kanji: "帽子 / 眼鏡 / 手袋 / 指輪", romaji: "boushi / megane / mafuraa / tebukuro / yubiwa", arti: "topi (かぶります) / kacamata (かけます) / syal / sarung tangan / cincin (します)" }
        ]
      }
    ],
    questions: [
      { id: "rb_1", type: "mcq", badge: "Tubuh · Ref. Bab 16", prompt: "Pasangan arti 「のど」, 「かた」, dan 「せなか」 adalah...", promptRomaji: "nodo, kata, senaka", sub: "Bagian tubuh bagian atas.", options: [{ jp: "perut, kaki, lutut", romaji: "" }, { jp: "tenggorokan, bahu, punggung", romaji: "" }, { jp: "mata, telinga, hidung", romaji: "" }, { jp: "jari, tangan, lengan", romaji: "" }], answer: 1, explain: "BENAR: のど = tenggorokan, かた = bahu, せなか = punggung!" },
      { id: "rb_2", type: "mcq", badge: "Tubuh · Ref. Bab 16", prompt: "「ゆび」 (指) dan 「ひざ」 (膝) artinya...", promptRomaji: "yubi & hiza", sub: "ゆびわ (cincin) dipasang di ゆび!", options: [{ jp: "leher & dada", romaji: "" }, { jp: "jari & lutut", romaji: "" }, { jp: "mulut & gigi", romaji: "" }, { jp: "pinggang & bahu", romaji: "" }], answer: 1, explain: "BENAR: ゆび = jari, ひざ = lutut!" },
      { id: "rb_3", type: "mcq", badge: "Sakit · Ref. Bab 17", prompt: "「Saya sedang demam dan batuk」 dalam bahasa Jepang:", promptRomaji: "demam = ねつ, batuk = せき", sub: "Pasangan kata kerja masing-masing!", options: [{ jp: "ねつが あります。せきが でます。", romaji: "Netsu ga arimasu. Seki ga demasu." }, { jp: "ねつを ひきます。せきが あります。", romaji: "Netsu o hikimasu..." }, { jp: "かぜが あります。ねつが でます。", romaji: "Kaze ga arimasu..." }, { jp: "ねつが いたいです。", romaji: "Netsu ga itai desu." }], answer: 0, explain: "BENAR: ねつが あります (demam), せきが でます (batuk), かぜを ひきます (masuk angin)!" },
      { id: "rb_4", type: "mcq", badge: "Sakit · Ref. Bab 17", prompt: "「けが」 dan 「やけど」 artinya...", promptRomaji: "kega & yakedo", sub: "Sering muncul di keselamatan kerja di Jepang!", options: [{ jp: "flu & demam", romaji: "" }, { jp: "luka/cedera & luka bakar", romaji: "" }, { jp: "sakit gigi & sakit perut", romaji: "" }, { jp: "alergi & suntikan", romaji: "" }], answer: 1, explain: "BENAR: けが = luka/cedera, やけど = luka bakar!" },
      { id: "rb_5", type: "mcq", badge: "Sakit · Keluhan", prompt: "Jika kamu sakit gigi dan pergi ke dokter gigi (はいしゃ), kamu berkata...", promptRomaji: "Gigi = は, Sakit = いたい", sub: "Pola [Bagian tubuh] が いたいです.", options: [{ jp: "はを いたいです。", romaji: "Ha o itai desu." }, { jp: "はが いたいです。", romaji: "Ha ga itai desu." }, { jp: "はなを いたいです。", romaji: "Hana o itai desu." }, { jp: "はで いたいです。", romaji: "Ha de itai desu." }], answer: 1, explain: "BENAR: はが いたいです!" },
      { id: "rb_6", type: "mcq", badge: "Pakaian · Ref. Bab 22", prompt: "「くつした」 (靴下) dan 「てぶくろ」 (手袋) artinya...", promptRomaji: "kutsushita & tebukuro", sub: "くつ(sepatu)+した(bawah) & て(tangan)+ふくろ(kantong)!", options: [{ jp: "sepatu & topi", romaji: "" }, { jp: "kaus kaki & sarung tangan", romaji: "" }, { jp: "celana & jaket", romaji: "" }, { jp: "syal & cincin", romaji: "" }], answer: 1, explain: "BENAR: くつした = kaus kaki, てぶくろ = sarung tangan!" },
      { id: "rb_7", type: "mcq", badge: "Pakaian · Ref. Bab 22", prompt: "Untuk memakai 「ズボン」 (celana panjang) dan 「くつした」 (kaus kaki), kata kerja yang benar adalah...", promptRomaji: "Pakaian bagian bawah pinggang!", sub: "きます vs はきます vs かぶります.", options: [{ jp: "きます", romaji: "kimasu" }, { jp: "はきます", romaji: "hakimasu" }, { jp: "かぶります", romaji: "kaburimasu" }, { jp: "かけます", romaji: "kakemasu" }], answer: 1, explain: "BENAR: はきます (untuk semua pakaian bawah pinggang & kaki)!" },
      { id: "rb_8", type: "mcq", badge: "Tubuh · Mirip", prompt: "Hati-hati homonim! 「はな」 pada tubuh artinya...", promptRomaji: "hana (鼻)", sub: "Bedakan dengan はな (bunga) & は (gigi)!", options: [{ jp: "telinga", romaji: "" }, { jp: "hidung", romaji: "" }, { jp: "mulut", romaji: "" }, { jp: "rambut", romaji: "" }], answer: 1, explain: "BENAR: はな (鼻) = hidung!" },
      { id: "rb_9", type: "mcq", badge: "Sakit · Diare/Suntik", prompt: "「ちゅうしゃ」 (注射) artinya...", promptRomaji: "chuusha (di klinik/rumah sakit)", sub: "Jangan tertukar dengan ちゅうしゃじょう (parkiran)!", options: [{ jp: "tempat parkir", romaji: "" }, { jp: "suntikan (injeksi)", romaji: "" }, { jp: "obat minum", romaji: "" }, { jp: "resep dokter", romaji: "" }], answer: 1, explain: "BENAR: ちゅうしゃ (注射) = suntikan!" },
      { id: "rb_10", type: "input", badge: "Ketik · Sakit Perut", prompt: "Lengkapi: 「（　　　）が いたいです。」 (Saya sakit perut.)", promptRomaji: "( ___ ) ga itai desu.", sub: "Ketik bahasa Jepang untuk 'perut' (Hiragana atau Romaji).", placeholder: "Ketik: おなか atau onaka", accepted: ["おなか", "onaka"], displayAnswer: "おなか (onaka)", explain: "BENAR: おなかが いたいです!" }
    ]
  },

  // ==================== 8. NEGARA, BAHASA, & SALAM BUDAYA JEPANG ====================
  {
    id: "budaya",
    icon: "🇯🇵",
    title: "Negara & Salam Sehari-hari Budaya Jepang (国・あいさつ)",
    refSource: "Reference Words Bab 1 & Ungkapan Harian Minna no Nihongo I",
    summary: "Daftar negara populer (Kanji & Katakana) + 14 salam wajib etika hidup & kerja di Jepang.",
    tip: "Orang Jepang memakai salam berpasangan persis: 「いってきます」↔「いってらっしゃい」 saat berangkat keluar rumah, dan 「ただいま」↔「おかえりなさい」 saat pulang ke rumah!",
    groups: [
      {
        name: "Negara Penting (+ じん = Orang, + ご = Bahasa) — Ref. Bab 1",
        items: [
          { jp: "にほん / インドネシア / マレーシア / タイ", kanji: "日本", romaji: "Nihon / Indoneshia / Mareeshia / Tai", arti: "Jepang / Indonesia / Malaysia / Thailand" },
          { jp: "ベトナム / フィリピン / シンガポール / インド", kanji: "—", romaji: "Betonamu / Firipin / Shingapooru / Indo", arti: "Vietnam / Filipina / Singapura / India" },
          { jp: "ちゅうごく / かんこく / たいわん", kanji: "中国 / 韓国 / 台湾", romaji: "Chuugoku / Kankoku / Taiwan", arti: "Tiongkok / Korea Selatan / Taiwan" },
          { jp: "アメリカ / イギリス / フランス / ドイツ / ブラジル / オーストラリア", kanji: "—", romaji: "Amerika / Igirisu / Furansu / Doitsu / Burajiru / Oosutoraria", arti: "AS / Inggris / Prancis / Jerman / Brasil / Australia" }
        ]
      },
      {
        name: "Salam & Etika Sehari-hari Wajib Tahu di Jepang (あいさつ)",
        items: [
          { jp: "おはようございます / こんにちは / こんばんは / おやすみなさい", kanji: "—", romaji: "ohayou gozaimasu / konnichiwa / konbanwa / oyasuminasai", arti: "selamat pagi / siang / malam / selamat tidur" },
          { jp: "いただきます ↔ ごちそうさまでした", kanji: "—", romaji: "itadakimasu ↔ gochisousama deshita", arti: "sebelum makan ↔ selesai makan (terima kasih atas hidangannya)" },
          { jp: "いってきます ↔ いってらっしゃい", kanji: "行って来ます / 行ってらっしゃい", romaji: "ittekimasu ↔ itterasshai", arti: "saya berangkat ya ↔ hati-hati di jalan" },
          { jp: "ただいま ↔ おかえりなさい", kanji: "只今 / お帰りなさい", romaji: "tadaima ↔ okaerinasai", arti: "saya pulang ↔ selamat datang kembali" },
          { jp: "おつかれさまでした / おさきに しつれいします", kanji: "お疲れ様でした / お先に失礼します", romaji: "otsukaresama deshita / osaki ni shitsurei shimasu", arti: "terima kasih atas kerja kerasnya / permisi saya pulang duluan (etika kantor!)" },
          { jp: "おじゃまします / しつれいします / おだいじに", kanji: "お邪魔します / 失礼します / お大事に", romaji: "ojama shimasu / shitsurei shimasu / odaiji ni", arti: "permisi masuk rumah orang / permisi masuk ruangan / semoga lekas sembuh" }
        ]
      }
    ],
    questions: [
      { id: "rc_1", type: "mcq", badge: "Negara · Ref. Bab 1", prompt: "「ドイツ」 dan 「イギリス」 adalah nama negara...", promptRomaji: "Doitsu & Igirisu", sub: "Serapan sejarah bahasa Belanda/Portugis ke Jepang!", options: [{ jp: "Belanda & Irlandia", romaji: "" }, { jp: "Jerman & Inggris", romaji: "" }, { jp: "Prancis & Italia", romaji: "" }, { jp: "Australia & Amerika", romaji: "" }], answer: 1, explain: "BENAR: ドイツ = Jerman, イギリス = Inggris!" },
      { id: "rc_2", type: "mcq", badge: "Negara · Kanji", prompt: "「かんこく」 (韓国) dan 「ちゅうごく」 (中国) adalah...", promptRomaji: "Kankoku & Chuugoku", sub: "Dua negara tetangga Jepang di Asia Timur.", options: [{ jp: "Korea Selatan & Tiongkok", romaji: "" }, { jp: "Tiongkok & Taiwan", romaji: "" }, { jp: "Thailand & Vietnam", romaji: "" }, { jp: "Jepang & Korea", romaji: "" }], answer: 0, explain: "BENAR: かんこく = Korea Selatan, ちゅうごく = Tiongkok!" },
      { id: "rc_3", type: "mcq", badge: "Salam · Pasangan", prompt: "Teman serumahmu hendak pergi keluar dan berkata 「いってきます」. Balasan yang TEPAT adalah...", promptRomaji: "Ittekimasu ↔ ?", sub: "Salam berpasangan saat berangkat.", options: [{ jp: "おかえりなさい", romaji: "okaerinasai" }, { jp: "いってらっしゃい", romaji: "itterasshai" }, { jp: "ごちそうさまでした", romaji: "gochisousama deshita" }, { jp: "おだいじに", romaji: "odaiji ni" }], answer: 1, explain: "BENAR: いってらっしゃい (hati-hati di jalan)!" },
      { id: "rc_4", type: "mcq", badge: "Salam · Pasangan", prompt: "Saat kamu pulang sampai di pintu rumah, kamu mengucapkan 「ただいま」. Orang di rumah membalas...", promptRomaji: "Tadaima ↔ ?", sub: "Salam berpasangan saat pulang.", options: [{ jp: "いってらっしゃい", romaji: "itterasshai" }, { jp: "おかえりなさい", romaji: "okaerinasai" }, { jp: "おじゃまします", romaji: "ojama shimasu" }, { jp: "いただきます", romaji: "itadakimasu" }], answer: 1, explain: "BENAR: おかえりなさい (selamat datang kembali di rumah)!" },
      { id: "rc_5", type: "mcq", badge: "Salam · Makan", prompt: "Ucapan yang diucapkan SETELAH selesai makan adalah...", promptRomaji: "いただきます (sebelum) ↔ ? (sesudah)", sub: "Ungkapan syukur atas makanan.", options: [{ jp: "いただきます", romaji: "itadakimasu" }, { jp: "ごちそうさまでした", romaji: "gochisousama deshita" }, { jp: "おつかれさまでした", romaji: "otsukaresama deshita" }, { jp: "しつれいします", romaji: "shitsurei shimasu" }], answer: 1, explain: "BENAR: ごちそうさまでした!" },
      { id: "rc_6", type: "mcq", badge: "Salam · Kerja", prompt: "Di kantor/pabrik Jepang, saat pulang kerja lebih dulu dari rekan lain, ucapan sopan yang wajib dikatakan adalah...", promptRomaji: "Etika pulang kantor Jepang!", sub: "Permisi saya pulang duluan.", options: [{ jp: "おさきに しつれいします", romaji: "osaki ni shitsurei shimasu" }, { jp: "おじゃまします", romaji: "ojama shimasu" }, { jp: "おだいじに", romaji: "odaiji ni" }, { jp: "はじめまして", romaji: "hajimemashite" }], answer: 0, explain: "BENAR: おさきに しつれいします (dan rekan menjawab おつかれさまでした)!" },
      { id: "rc_7", type: "mcq", badge: "Salam · Bertamu", prompt: "Saat masuk ke dalam rumah orang Jepang yang mengundangmu bertamu, ucapan sopannya adalah...", promptRomaji: "Permisi mengganggu (masuk rumah orang).", sub: "Sangat sering dipakai di Jepang.", options: [{ jp: "おじゃまします", romaji: "ojama shimasu" }, { jp: "ただいま", romaji: "tadaima" }, { jp: "ごちそうさまでした", romaji: "gochisousama deshita" }, { jp: "おだいじに", romaji: "odaiji ni" }], answer: 0, explain: "BENAR: おじゃまします (dan saat pamit keluar: おじゃましました)!" },
      { id: "rc_8", type: "mcq", badge: "Salam · Sakit", prompt: "Temanmu sedang flu dan izin pulang istirahat. Ucapan 「Semoga lekas sembuh」 dalam bahasa Jepang adalah...", promptRomaji: "Diucapkan ke orang sakit (Bab 17).", sub: "Jaga kesehatan baik-baik / lekas sembuh.", options: [{ jp: "おめでとうございます", romaji: "omedetou gozaimasu" }, { jp: "おだいじに", romaji: "odaiji ni" }, { jp: "おつかれさまでした", romaji: "otsukaresama deshita" }, { jp: "おかげさまで", romaji: "okagesama de" }], answer: 1, explain: "BENAR: おだいじに (semoga lekas sembuh)!" },
      { id: "rc_9", type: "mcq", badge: "Bahasa · Negara", prompt: "Bagaimana cara menyebut 「bahasa Inggris」 dan 「bahasa Indonesia」?", promptRomaji: "Hati-hati: Inggris bukan イギリスご!", sub: "Inggris = えいご!", options: [{ jp: "イギリスご ・ インドネシアご", romaji: "Igirisugo · Indoneshiago" }, { jp: "えいご ・ インドネシアご", romaji: "Eigo · Indoneshiago" }, { jp: "アメリカご ・ インドネシアじん", romaji: "Amerikago · Indoneshiajin" }, { jp: "えいじん ・ インドネシアご", romaji: "Eijin · Indoneshiago" }], answer: 1, explain: "BENAR: えいご (bahasa Inggris) dan インドネシアご (bahasa Indonesia)!" },
      { id: "rc_10", type: "input", badge: "Ketik · Kerja Keras", prompt: "Ketik salam selesai kerja paling penting di Jepang: 「Terima kasih atas kerja kerasnya」 (おつかれさまでした)!", promptRomaji: "otsukaresama deshita", sub: "Ketik Hiragana atau Romaji.", placeholder: "Ketik: おつかれさまでした atau otsukaresama deshita", accepted: ["おつかれさまでした", "otsukaresama deshita", "otsukaresamadeshita"], displayAnswer: "おつかれさまでした (otsukaresama deshita)", explain: "BENAR: おつかれさまでした!" }
    ]
  },

  // ==================== 9. LAWAN KATA SIFAT WAJIB N5 (ANTONIM) ====================
  {
    id: "antonim",
    icon: "⚖️",
    title: "Lawan Kata Sifat Wajib N5 (形容詞のペア)",
    refSource: "Kosakata Bab 8 & Bab 12 Minna no Nihongo I",
    summary: "24 pasangan kata sifat-i dan kata sifat-na berlawanan yang paling sering diujikan di JLPT N5.",
    tip: "Awas jebakan 「あつい」: untuk cuaca panas lawan katanya 「さむい」, sedangkan untuk benda/minuman panas lawan katanya 「つめたい」! Dan lawan kata 「たかい」: untuk harga mahal 「やすい」, tapi untuk tinggi gedung/badan 「ひくい」!",
    groups: [
      {
        name: "Kata Sifat-i: Ukuran, Panjang, Tinggi, Jarak, & Berat",
        items: [
          { jp: "おおきい ↔ ちいさい", kanji: "大きい ↔ 小さい", romaji: "ookii ↔ chiisai", arti: "besar ↔ kecil" },
          { jp: "ながい ↔ みじかい", kanji: "長い ↔ 短い", romaji: "nagai ↔ mijikai", arti: "panjang ↔ pendek" },
          { jp: "ひろい ↔ せまい", kanji: "広い ↔ 狭い", romaji: "hiroi ↔ semai", arti: "luas ↔ sempit" },
          { jp: "たかい ↔ ひくい", kanji: "高い ↔ 低い", romaji: "takai ↔ hikui", arti: "tinggi ↔ rendah (gedung/suara/badan)" },
          { jp: "とおい ↔ ちかい", kanji: "遠い ↔近い", romaji: "tooi ↔ chikai", arti: "jauh ↔ dekat" },
          { jp: "はやい ↔ おそい", kanji: "速い・早い ↔ 遅い", romaji: "hayai ↔ osoi", arti: "cepat / pagi ↔ lambat / terlambat" },
          { jp: "おもい ↔ かるい", kanji: "重い ↔ 軽い", romaji: "omoi ↔ karui", arti: "berat ↔ ringan" },
          { jp: "おおい ↔ すくない", kanji: "多い ↔ 少ない", romaji: "ooi ↔ sukunai", arti: "banyak ↔ sedikit (orang/jumlah)" }
        ]
      },
      {
        name: "Kata Sifat-i: Suhu, Harga, Rasa, & Kualitas",
        items: [
          { jp: "あつい ↔ さむい", kanji: "暑い ↔ 寒い", romaji: "atsui ↔ samui", arti: "panas ↔ dingin (untuk CUACA / udara)" },
          { jp: "あつい ↔ つめたい", kanji: "熱い ↔ 冷たい", romaji: "atsui ↔ tsumetai", arti: "panas ↔ dingin (untuk BENDA / minuman)" },
          { jp: "あたたかい ↔ すずしい", kanji: "暖かい ↔ 涼しい", romaji: "atatakai ↔ suzushii", arti: "hangat ↔ sejuk" },
          { jp: "あたらしい ↔ ふるい", kanji: "新しい ↔ 古い", romaji: "atarashii ↔ furui", arti: "baru ↔ lama/kuno (bukan untuk umur orang!)" },
          { jp: "いい（よい） ↔ わるい", kanji: "良い ↔ 悪い", romaji: "ii (yoi) ↔ warui", arti: "bagus/baik ↔ buruk/jelek" },
          { jp: "たかい ↔ やすい", kanji: "高い ↔ 安い", romaji: "takai ↔ yasui", arti: "mahal ↔ murah (HARGA)" },
          { jp: "あかるい ↔ くらい", kanji: "明るい ↔ 暗い", romaji: "akarui ↔ kurai", arti: "terang ↔ gelap" },
          { jp: "つよい ↔ よわい", kanji: "強い ↔ 弱い", romaji: "tsuyoi ↔ yowai", arti: "kuat ↔ lemah" },
          { jp: "むずかしい ↔ やさしい", kanji: "難しい ↔ 易しい", romaji: "muzukashii ↔ yasashii", arti: "sulit ↔ mudah (ingat: やさしい juga berarti ramah)" },
          { jp: "おもしろい ↔ つまらない", kanji: "面白い ↔ 詰まらない", romaji: "omoshiroi ↔ tsumaranai", arti: "menarik ↔ membosankan" },
          { jp: "おいしい ↔ まずい", kanji: "美味しい ↔ まずい", romaji: "oishii ↔ mazui", arti: "enak ↔ tidak enak" },
          { jp: "あまい ↔ からい", kanji: "甘い ↔ 辛い", romaji: "amai ↔ karai", arti: "manis ↔ pedas" }
        ]
      },
      {
        name: "Kata Sifat-na & Padanan Berlawanan",
        items: [
          { jp: "しずか［な］ ↔ にぎやか［な］", kanji: "静か ↔ 賑やか", romaji: "shizuka ↔ nigiyaka", arti: "tenang/sepi ↔ ramai/meriah" },
          { jp: "べんり［な］ ↔ ふべん［な］", kanji: "便利 ↔ 不便", romaji: "benri ↔ fuben", arti: "praktis ↔ tidak praktis" },
          { jp: "ひま［な］ ↔ いそがしい", kanji: "暇 ↔ 忙しい", romaji: "hima ↔ isogashii", arti: "senggang (Sifat-na) ↔ sibuk (Sifat-i!)" },
          { jp: "すき［な］ ↔ きらい［な］", kanji: "好き ↔ 嫌い", romaji: "suki ↔ kirai", arti: "suka ↔ benci/tidak suka" },
          { jp: "じょうず［な］ ↔ へた［な］", kanji: "上手 ↔ 下手", romaji: "jouzu ↔ heta", arti: "pandai/mahir ↔ tidak mahir/buruk" },
          { jp: "あんぜん［な］ ↔ きけん［な］", kanji: "安全 ↔ 危険", romaji: "anzen ↔ kiken", arti: "aman ↔ berbahaya" }
        ]
      }
    ],
    questions: [
      { id: "rant_1", type: "mcq", badge: "Antonim · Suhu Minuman", prompt: "Lawan kata dari 「あつい おちゃ」 (teh panas) adalah...", promptRomaji: "atsui ocha ↔ ?", sub: "Hati-hati: ini MINUMAN, bukan cuaca!", options: [{ jp: "さむい おちゃ", romaji: "samui ocha" }, { jp: "つめたい おちゃ", romaji: "tsumetai ocha" }, { jp: "すずしい おちゃ", romaji: "suzushii ocha" }, { jp: "ふるい おちゃ", romaji: "furui ocha" }], answer: 1, explain: "BENAR: Untuk benda/minuman/air, dingin = つめたい; untuk cuaca/udara = さむい!" },
      { id: "rant_2", type: "mcq", badge: "Antonim · Suhu Cuaca", prompt: "きょうは さむいですね。 (Hari ini dingin ya.) Lawan kata 「さむい」 di sini adalah...", promptRomaji: "samui (cuaca) ↔ ?", sub: "Konteks suhu cuaca/hari.", options: [{ jp: "あつい", romaji: "atsui" }, { jp: "つめたい", romaji: "tsumetai" }, { jp: "ひろい", romaji: "hiroi" }, { jp: "くらい", romaji: "kurai" }], answer: 0, explain: "BENAR: Lawan kata cuaca dingin (さむい) adalah cuaca panas (あつい)!" },
      { id: "rant_3", type: "mcq", badge: "Antonim · Tinggi vs Harga", prompt: "Lawan kata untuk 「せが たかい」 (badannya tinggi) adalah...", promptRomaji: "se ga takai ↔ ?", sub: "Tinggi badan/gedung, bukan harga barang!", options: [{ jp: "やすい", romaji: "yasui" }, { jp: "ひくい", romaji: "hikui" }, { jp: "ちいさい", romaji: "chiisai" }, { jp: "みじかい", romaji: "mijikai" }], answer: 1, explain: "BENAR: Untuk tinggi badan atau gedung, lawan kata たかい adalah ひくい (pendek/rendah)!" },
      { id: "rant_4", type: "mcq", badge: "Antonim · Ruang", prompt: "「この へやは せまいですね。」 Lawan kata dari 「せまい」 adalah...", promptRomaji: "semai ↔ ?", sub: "Kamar ini sempit ↔ luas.", options: [{ jp: "おおきい", romaji: "ookii" }, { jp: "ひろい", romaji: "hiroi" }, { jp: "ながい", romaji: "nagai" }, { jp: "とおい", romaji: "tooi" }], answer: 1, explain: "BENAR: せまい (sempit) ↔ ひろい (luas)!" },
      { id: "rant_5", type: "mcq", badge: "Antonim · Berat", prompt: "Pasangan arti 「おもい」 dan 「かるい」 adalah...", promptRomaji: "omoi ↔ karui", sub: "Sering dipakai untuk koper atau tas.", options: [{ jp: "panjang ↔ pendek", romaji: "" }, { jp: "berat ↔ ringan", romaji: "" }, { jp: "terang ↔ gelap", romaji: "" }, { jp: "sulit ↔ mudah", romaji: "" }], answer: 1, explain: "BENAR: おもい = berat, かるい = ringan!" },
      { id: "rant_6", type: "mcq", badge: "Antonim · Suasana", prompt: "Lawan kata dari 「にぎやか（な）」 (ramai/meriah) adalah...", promptRomaji: "nigiyaka ↔ ?", sub: "Sering muncul untuk kota/tempat (Bab 8).", options: [{ jp: "ひま（な）", romaji: "hima" }, { jp: "しずか（な）", romaji: "shizuka" }, { jp: "べんり（な）", romaji: "benri" }, { jp: "さむい", romaji: "samui" }], answer: 1, explain: "BENAR: にぎやか (ramai) ↔ しずか (tenang/sepi)!" },
      { id: "rant_7", type: "mcq", badge: "Antonim · Benda & Cahaya", prompt: "「あかるい へや」 lawan katanya adalah...", promptRomaji: "akarui heya ↔ ?", sub: "Cahaya ruangan: terang ↔ gelap.", options: [{ jp: "ふるい へや", romaji: "furui heya" }, { jp: "くらい へや", romaji: "kurai heya" }, { jp: "わるい へや", romaji: "warui heya" }, { jp: "せまい へや", romaji: "semai heya" }], answer: 1, explain: "BENAR: あかるい (terang) ↔ くらい (gelap)!" },
      { id: "rant_8", type: "mcq", badge: "Antonim · Sifat-na & Sifat-i", prompt: "Lawan kata 「ひま［な］」 (waktu luang/senggang) adalah...", promptRomaji: "hima ↔ ?", sub: "Hati-hati pasangan ini beda jenis kata sifat!", options: [{ jp: "いそがしい", romaji: "isogashii" }, { jp: "むずかしい", romaji: "muzukashii" }, { jp: "ふべん［な］", romaji: "fuben" }, { jp: "つまらない", romaji: "tsumaranai" }], answer: 0, explain: "BENAR: ひま［な］ (senggang, kata sifat-na) ↔ いそがしい (sibuk, kata sifat-i)!" },
      { id: "rant_9", type: "input", badge: "Ketik Antonim", prompt: "Ketik lawan kata dari 「あたらしい」 (baru)!", promptRomaji: "atarashii ↔ ?", sub: "Ketik Hiragana atau Romaji (untuk benda lama/kuno).", placeholder: "Ketik: ふるい atau furui", accepted: ["ふるい", "furui"], displayAnswer: "ふるい (furui)", explain: "BENAR: あたらしい (baru) ↔ ふるい (lama/kuno)!" },
      { id: "rant_10", type: "input", badge: "Ketik Antonim", prompt: "Ketik lawan kata dari 「とおい」 (jauh)!", promptRomaji: "tooi ↔ ?", sub: "Ketik Hiragana atau Romaji ('dekat').", placeholder: "Ketik: ちかい atau chikai", accepted: ["ちかい", "chikai"], displayAnswer: "ちかい (chikai)", explain: "BENAR: とおい (jauh) ↔ ちかい (dekat)!" }
    ]
  },

  // ==================== 10. MASTER KATA TANYA & ADVERBIA N5 ====================
  {
    id: "tanya_adverbia",
    icon: "❓",
    title: "Master Kata Tanya & Adverbia N5 (疑問詞・副詞)",
    refSource: "Rangkuman Kata Tanya & Keterangan Bab 1–25 Minna no Nihongo I",
    summary: "Membedakan kata tanya kembar (どれ・どの・どちら, どう・どんな) dan adverbia yang wajib berpasangan dengan positif atau negatif.",
    tip: "「どれ」 berdiri sendiri tanpa kata benda, sedangkan 「どの」 dan 「どんな」 WAJIB diikuti kata benda! Untuk adverbia: 「あまり」 dan 「ぜんぜん」 di level N5 WAJIB diakhiri kalimat NEGATIF (～ません / ～くないです)!",
    groups: [
      {
        name: "Kata Tanya Kembar (Jangan Pernah Tertukar!)",
        items: [
          { jp: "どれ vs どの + [Kata Benda]", kanji: "—", romaji: "dore vs dono + KB", arti: "yang mana (berdiri sendiri, ≥3 benda) vs yang mana (+ benda: どの かさ)" },
          { jp: "どちら (＋ どなた)", kanji: "—", romaji: "dochira (+ donata)", arti: "yang mana (dari 2 pilihan) / sebelah mana / sopan untuk どこ・だれ" },
          { jp: "どう vs どんな + [Kata Benda]", kanji: "—", romaji: "dou vs donna + KB", arti: "bagaimana (sifat/kesan: にほんは どうですか) vs seperti apa (+ benda: どんな ひと)" },
          { jp: "いくら vs いくつ vs どのくらい", kanji: "—", romaji: "ikura vs ikutsu vs dono kurai", arti: "berapa harga vs berapa buah/umur vs berapa lama/jauh" },
          { jp: "いつ vs なんじ / なんようび", kanji: "何時・何曜日", romaji: "itsu vs nanji / nanyoubi", arti: "kapan (TANPA に!) vs jam berapa / hari apa (pakai に jika jam spesifik)" },
          { jp: "どうして ～か → ～からです", kanji: "—", romaji: "doushite ~ka → ~kara desu", arti: "mengapa ~? → jawab dengan ~から(です)!" }
        ]
      },
      {
        name: "Adverbia Frekuensi & Derajat (Pasangan Positif vs Negatif)",
        items: [
          { jp: "いつも / よく / ときどき （＋ Positif）", kanji: "時々", romaji: "itsumo / yoku / tokidoki", arti: "selalu / sering / kadang-kadang (dipakai bersama bentuk positif)" },
          { jp: "あまり ＋ Negatif", kanji: "余り", romaji: "amari + Negatif", arti: "tidak begitu ~ (Contoh: あまり たべません / あまり おおきくないです)" },
          { jp: "ぜんぜん ＋ Negatif", kanji: "全然", romaji: "zenzen + Negatif", arti: "sama sekali tidak ~ (Contoh: ぜんぜん わかりません)" },
          { jp: "とても / たいへん （＋ Positif）", kanji: "大変", romaji: "totemo / taihen", arti: "sangat ~ (untuk kalimat positif)" },
          { jp: "すこし / ちょっと （＋ Positif）", kanji: "少し", romaji: "sukoshi / chotto", arti: "sedikit ~ (hampir selalu positif; ちょっと juga berarti 'permisi / agak sulit')" },
          { jp: "もう ＋ ました ↔ まだ ＋ ていません", kanji: "—", romaji: "mou + mashita ↔ mada + te imasen", arti: "sudah selesai ↔ masih belum dilakukan" }
        ]
      },
      {
        name: "Adverbia Cara, Urutan, & Kepastian Wajib N5",
        items: [
          { jp: "すぐ / ゆっくり", kanji: "直ぐ", romaji: "sugu / yukkuri", arti: "segera / dengan pelan-pelan atau santai" },
          { jp: "だんだん / もうすぐ", kanji: "段々", romaji: "dandan / mou sugu", arti: "lama-kelamaan (berangsur) / sebentar lagi" },
          { jp: "なかなか ＋ Negatif", kanji: "中々", romaji: "nakanaka + Negatif", arti: "tidak mudah / tidak kunjung ~ (misal: バスが なかなか きません)" },
          { jp: "たぶん（＋ でしょう）/ きっと", kanji: "多分", romaji: "tabun (~deshou) / kitto", arti: "mungkin (~でしょう) / pasti ~" },
          { jp: "ぜひ （＋ たいです / ください）", kanji: "是非", romaji: "zehi", arti: "benar-benar ingin / sangat berharap (dipasangkan dengan ～たい atau ～てください)" },
          { jp: "いちばん / ずっと", kanji: "一番", romaji: "ichiban / zutto", arti: "paling #1 (superlatif) / jauh lebih ~ (perbandingan) atau terus-terusan" }
        ]
      }
    ],
    questions: [
      { id: "rqa_1", type: "mcq", badge: "Kata Tanya · どれ vs どの", prompt: "「（　　）かばんが あなたの ですか。」 (Tas yang mana punyamu?)", promptRomaji: "( ___ ) kaban ga anata no desu ka.", sub: "Perhatikan ada kata benda 「かばん」 tepat di belakangnya!", options: [{ jp: "どれ", romaji: "dore" }, { jp: "どの", romaji: "dono" }, { jp: "どこ", romaji: "doko" }, { jp: "どう", romaji: "dou" }], answer: 1, explain: "BENAR: Karena langsung diikuti kata benda 「かばん」, wajib pakai 「どの」 (どの かばん)!" },
      { id: "rqa_2", type: "mcq", badge: "Kata Tanya · どう vs どんな", prompt: "「にほんの たべものは （　　）ですか。」 (Bagaimana makanan Jepang?)", promptRomaji: "Nihon no tabemono wa ( ___ ) desu ka.", sub: "Tidak ada kata benda sesudah titik-titik!", options: [{ jp: "どんな", romaji: "donna" }, { jp: "どう", romaji: "dou" }, { jp: "どれ", romaji: "dore" }, { jp: "どの", romaji: "dono" }], answer: 1, explain: "BENAR: Menanyakan kesan tanpa diikuti kata benda memakai 「どうですか」 (jika ada kata benda → どんな たべもの)!" },
      { id: "rqa_3", type: "mcq", badge: "Adverbia · Pasangan Negatif", prompt: "「えいごが （　　） わかりません。」 (Saya sama sekali tidak mengerti bahasa Inggris.)", promptRomaji: "Eigo ga ( ___ ) wakarimasen.", sub: "Sama sekali tidak ~ (+ bentuk negatif).", options: [{ jp: "いつも", romaji: "itsumo" }, { jp: "ぜんぜん", romaji: "zenzen" }, { jp: "とても", romaji: "totemo" }, { jp: "すこし", romaji: "sukoshi" }], answer: 1, explain: "BENAR: ぜんぜん + negatif = sama sekali tidak ~!" },
      { id: "rqa_4", type: "mcq", badge: "Adverbia · あまり", prompt: "Pilih kalimat yang GRAMATIS BENAR untuk kata 「あまり」:", promptRomaji: "amari + ?", sub: "「あまり」 wajib diakhiri bentuk negatif.", options: [{ jp: "テレビを あまり みます。", romaji: "Terebi o amari mimasu." }, { jp: "テレビを あまり みません。", romaji: "Terebi o amari mimasen." }, { jp: "あまり おいしいです。", romaji: "Amari oishii desu." }, { jp: "きょうは あまり あついです。", romaji: "Kyou wa amari atsui desu." }], answer: 1, explain: "BENAR: あまり みません (tidak begitu sering menonton)!" },
      { id: "rqa_5", type: "mcq", badge: "Adverbia · もう vs まだ", prompt: "A:「もう ひるごはんを たべましたか。」 B:「いいえ、（　　）。」", promptRomaji: "Sudah makan siang? — Belum.", sub: "Pasangan jawaban negatif untuk 「もう ～ましたか」!", options: [{ jp: "もう たべました", romaji: "mou tabemashita" }, { jp: "まだです（まだ たべていません）", romaji: "mada desu (mada tabete imasen)" }, { jp: "ぜんぜん たべます", romaji: "zenzen tabemasu" }, { jp: "すこし たべません", romaji: "sukoshi tabemasen" }], answer: 1, explain: "BENAR: Jawaban belum atas pertanyaan 「もう ～ましたか」 adalah 「いいえ、まだです」 / 「まだ ～ていません」!" },
      { id: "rqa_6", type: "mcq", badge: "Kata Tanya · Durasi vs Harga", prompt: "「ここから えきまで （　　） かかりますか。」 (Dari sini ke stasiun memakan waktu berapa lama?)", promptRomaji: "Koko kara eki made ( ___ ) kakarimasu ka.", sub: "Menanyakan durasi waktu (bukan harga!).", options: [{ jp: "いくら", romaji: "ikura" }, { jp: "いくつ", romaji: "ikutsu" }, { jp: "どのくらい", romaji: "dono kurai" }, { jp: "どちら", romaji: "dochira" }], answer: 2, explain: "BENAR: どのくらい (kira-kira berapa lama/jauh)!" },
      { id: "rqa_7", type: "mcq", badge: "Adverbia · ぜひ", prompt: "「（　　） にほんへ いきたいです。」 (Saya benar-benar ingin sekali pergi ke Jepang.)", promptRomaji: "( ___ ) Nihon e ikitai desu.", sub: "Adverbia penegas keinginan kuat / ajakan.", options: [{ jp: "あまり", romaji: "amari" }, { jp: "ぜひ", romaji: "zehi" }, { jp: "たぶん", romaji: "tabun" }, { jp: "ぜんぜん", romaji: "zenzen" }], answer: 1, explain: "BENAR: ぜひ berpasangan erat dengan ～たいです atau ～てください!" },
      { id: "rqa_8", type: "mcq", badge: "Adverbia · なかなか", prompt: "「バスが （　　） きませんね。」 (Busnya tidak kunjung datang ya.)", promptRomaji: "Basu ga ( ___ ) kimasen ne.", sub: "Sesuatu yang sulit terjadi/tak kunjung tiba (+ negatif).", options: [{ jp: "すぐ", romaji: "sugu" }, { jp: "なかなか", romaji: "nakanaka" }, { jp: "よく", romaji: "yoku" }, { jp: "とても", romaji: "totemo" }], answer: 1, explain: "BENAR: なかなか + negatif = tidak kunjung / sulit sekali ~!" },
      { id: "rqa_9", type: "input", badge: "Ketik · Kata Tanya", prompt: "Ketik kata tanya sopan untuk menanyakan 'siapa' atau 'Yang mana dari 2 pilihan': (dari どこ・だれ → どなた / ？)", promptRomaji: "yang mana dari 2 pilihan = do...", sub: "Ketik Hiragana atau Romaji untuk 'sebelah mana / yang mana dari 2 pilihan'.", placeholder: "Ketik: どちら atau dochira", accepted: ["どちら", "dochira"], displayAnswer: "どちら (dochira)", explain: "BENAR: どちら (dipakai untuk 2 pilihan, arah sopan, atau menanyakan nama negara/perusahaan secara sopan)!" },
      { id: "rqa_10", type: "input", badge: "Ketik · Adverbia", prompt: "Ketik adverbia untuk 「lama-kelamaan / berangsur-angsur」 (contoh: ____ あたたかくなります)!", promptRomaji: "lama-kelamaan = da...", sub: "Ketik Hiragana atau Romaji.", placeholder: "Ketik: だんだん atau dandan", accepted: ["だんだん", "dandan"], displayAnswer: "だんだん (dandan)", explain: "BENAR: だんだん (lama-kelamaan / sedikit demi sedikit)!" }
    ]
  },

  // ==================== 11. SURVIVAL JEPANG: KELAS, KASIR, & RAMBU ====================
  {
    id: "survival",
    icon: "🏪",
    title: "Survival Jepang: Kelas, Konbini, Restoran & Rambu",
    refSource: "Ungkapan Kelas & Situasi Praktis Sehari-hari di Jepang",
    summary: "Kalimat penyelamat di kelas bahasa Jepang, saat belanja di konbini/kasir, makan di restoran, dan membaca rambu kanji umum.",
    tip: "Di konbini Jepang, kasir hampir selalu menanyakan 「ふくろは ごりょうですか」(Perlu kantong belanja?) dan 「あたためますか」(Mau dihangatkan?). Kuasai cara menjawabnya dengan percaya diri!",
    groups: [
      {
        name: "Ungkapan Bertahan Hidup di Kelas Bahasa Jepang",
        items: [
          { jp: "もういちど おねがいします", kanji: "もう一度 お願いします", romaji: "mou ichido onegaishimasu", arti: "tolong ulangi sekali lagi" },
          { jp: "もっと ゆっくり いって ください", kanji: "—", romaji: "motto yukkuri itte kudasai", arti: "tolong ucapkan lebih pelan lagi" },
          { jp: "「～」は にほんごで なんですか", kanji: "「～」は 日本語で 何ですか", romaji: "'~' wa Nihongo de nan desu ka", arti: "'~' dalam bahasa Jepang apa?" },
          { jp: "しつもんが あります", kanji: "質問が あります", romaji: "shitsumon ga arimasu", arti: "saya ada pertanyaan" },
          { jp: "わかりました ↔ すみません、わかりません", kanji: "分かりました / 分かりません", romaji: "wakarimashita ↔ sumimasen, wakarimasen", arti: "saya mengerti ↔ maaf, saya tidak mengerti" },
          { jp: "ちょっと まって ください", kanji: "ちょっと 待って ください", romaji: "chotto matte kudasai", arti: "tolong tunggu sebentar" }
        ]
      },
      {
        name: "Belanja di Konbini & Makan di Restoran",
        items: [
          { jp: "いらっしゃいませ", kanji: "—", romaji: "irasshaimase", arti: "selamat datang! (diucapkan pegawai toko/restoran)" },
          { jp: "これを ください / これを おねがいします", kanji: "—", romaji: "kore o kudasai / kore o onegaishimasu", arti: "saya beli ini / saya pesan yang ini" },
          { jp: "ふくろは いりません / おねがいします", kanji: "袋は 要りません", romaji: "fukuro wa irimasen / onegaishimasu", arti: "tidak perlu kantong belanja / ya, tolong pakai kantong" },
          { jp: "あたためますか → はい、おねがいします", kanji: "温めますか", romaji: "atatamemasu ka → hai, onegaishimasu", arti: "mau dihangatkan (bento)? → ya, tolong" },
          { jp: "おかいけい（おかんじょう）を おねがいします", kanji: "お会計 / お勘定", romaji: "okaikei (okanjou) o onegaishimasu", arti: "minta tagihan / mau bayar di restoran" },
          { jp: "べつべつに おねがいします", kanji: "別々に お願いします", romaji: "betsubetsu ni onegaishimasu", arti: "tolong bayarnya dipisah (masing-masing)" }
        ]
      },
      {
        name: "Rambu & Kanji Umum Wajib Tahu di Jepang",
        items: [
          { jp: "入口 ↔ 出口", kanji: "入口（いりぐち） / 出口（でぐち）", romaji: "iriguchi ↔ deguchi", arti: "pintu masuk ↔ pintu keluar" },
          { jp: "非常口", kanji: "非常口（ひじょうぐち）", romaji: "hijouguchi", arti: "pintu keluar darurat" },
          { jp: "押す ↔ 引く", kanji: "押す（おす） / 引く（ひく）", romaji: "osu ↔ hiku", arti: "dorong ↔ tarik (tulisan di pintu kaca)" },
          { jp: "禁煙 / 喫煙所", kanji: "禁煙（きんえん） / 喫煙所（きつえんじょ）", romaji: "kin'en / kitsuenjo", arti: "dilarang merokok / ruang khusus merokok" },
          { jp: "立入禁止", kanji: "立入禁止（たちいりきんし）", romaji: "tachiiri kinshi", arti: "dilarang masuk (area terlarang)" },
          { jp: "営業中 ↔ 準備中", kanji: "営業中（えいぎょうちゅう） / 準備中", romaji: "eigyouchuu ↔ junbichuu", arti: "sedang buka (beroperasi) ↔ sedang persiapan (belum buka)" },
          { jp: "無料 ↔ 有料 / 半額", kanji: "無料 / 有料 / 半額", romaji: "muryou ↔ yuuryou / hangaku", arti: "gratis ↔ berbayar / diskon setengah harga (50%)" }
        ]
      }
    ],
    questions: [
      { id: "rsur_1", type: "mcq", badge: "Kelas · Minta Ulang", prompt: "Saat sensei berbicara terlalu cepat dan kamu ingin minta diulang sekali lagi dengan lebih pelan:", promptRomaji: "Ungkapan kelas dasar.", sub: "Gabungan 'sekali lagi' + 'lebih pelan'.", options: [{ jp: "もういちど、ゆっくり おねがいします。", romaji: "Mou ichido, yukkuri onegaishimasu." }, { jp: "いらっしゃいませ。", romaji: "Irasshaimase." }, { jp: "おさきに しつれいします。", romaji: "Osaki ni shitsurei shimasu." }, { jp: "ごちそうさまでした。", romaji: "Gochisousama deshita." }], answer: 0, explain: "BENAR: もういちど (sekali lagi)、ゆっくり (pelan-pelan) おねがいします!" },
      { id: "rsur_2", type: "mcq", badge: "Konbini · Kantong", prompt: "Kamu bawa tas belanja sendiri dan tidak butuh kantong plastik dari kasir. Jawaban yang sopan adalah...", promptRomaji: "Tidak perlu kantong = ?", sub: "いります (perlu) → bentuk negatifsopannya.", options: [{ jp: "ふくろは ありません。", romaji: "Fukuro wa arimasen." }, { jp: "ふくろは いりません。", romaji: "Fukuro wa irimasen." }, { jp: "ふくろは しりません。", romaji: "Fukuro wa shirimasen." }, { jp: "ふくろは できません。", romaji: "Fukuro wa dekimasen." }], answer: 1, explain: "BENAR: ふくろは いりません (Saya tidak perlu kantong plastik; kata kerja いります = butuh)!" },
      { id: "rsur_3", type: "mcq", badge: "Konbini · Bento", prompt: "Kasir konbini bertanya 「おべんとう、あたためますか。」 Maksud pertanyaan itu adalah...", promptRomaji: "Obentou, atatamemasu ka.", sub: "Layanan microwave gratis di konbini Jepang.", options: [{ jp: "Mau pakai sumpit?", romaji: "" }, { jp: "Mau dihangatkan bentonya?", romaji: "" }, { jp: "Mau bayar pakai kartu?", romaji: "" }, { jp: "Mau dibungkus kado?", romaji: "" }], answer: 1, explain: "BENAR: あたためますか = Apakah mau dihangatkan?" },
      { id: "rsur_4", type: "mcq", badge: "Restoran · Bayar", prompt: "Saat makan bareng teman di restoran dan ingin minta tagihan dibayar PISAH masing-masing, ucapkan...", promptRomaji: "Bayar pisah!", sub: "Kata keterangan 'secara terpisah'.", options: [{ jp: "いっしょに おねがいします。", romaji: "Issho ni onegaishimasu." }, { jp: "べつべつに おねがいします。", romaji: "Betsubetsu ni onegaishimasu." }, { jp: "もういちど おねがいします。", romaji: "Mou ichido onegaishimasu." }, { jp: "おだいじに。", romaji: "Odaiji ni." }], answer: 1, explain: "BENAR: べつべつに おねがいします (pisah-pisah ya; kalau digabung = いっしょに)!" },
      { id: "rsur_5", type: "mcq", badge: "Rambu · Pintu", prompt: "Di pintu kaca toko tertulis 「押す (おす)」 dan di sisi baliknya 「引く (ひく)」. Artinya adalah...", promptRomaji: "Osu ↔ Hiku", sub: "Jangan sampai salah dorong/tarik di Jepang!", options: [{ jp: "Masuk ↔ Keluar", romaji: "" }, { jp: "Dorong ↔ Tarik", romaji: "" }, { jp: "Buka ↔ Tutup", romaji: "" }, { jp: "Gratis ↔ Bayar", romaji: "" }], answer: 1, explain: "BENAR: 押す (おす) = dorong, 引く (ひく) = tarik!" },
      { id: "rsur_6", type: "mcq", badge: "Rambu · Stasiun/Gedung", prompt: "Pasangan kanji 「入口（いりぐち）」 dan 「出口（でぐち）」 artinya...", promptRomaji: "Iriguchi ↔ Deguchi", sub: "Kanji paling penting di stasiun Jepang.", options: [{ jp: "Pintu Masuk ↔ Pintu Keluar", romaji: "" }, { jp: "Dorong ↔ Tarik", romaji: "" }, { jp: "Buka ↔ Tutup", romaji: "" }, { jp: "Toilet Pria ↔ Toilet Wanita", romaji: "" }], answer: 0, explain: "BENAR: 入口 (いりぐち) = pintu masuk, 出口 (でぐち) = pintu keluar!" },
      { id: "rsur_7", type: "mcq", badge: "Rambu · Larangan", prompt: "Rambu 「禁煙（きんえん）」 dan 「立入禁止（たちいりきんし）」 berarti...", promptRomaji: "Kin'en & Tachiiri kinshi", sub: "Kedua kanji mengandung 「禁」 (dilarang).", options: [{ jp: "Dilarang parkir & dilarang memotret", romaji: "" }, { jp: "Dilarang merokok & dilarang masuk", romaji: "" }, { jp: "Dilarang makan & dilarang berisik", romaji: "" }, { jp: "Pintu darurat & tangga berjalan", romaji: "" }], answer: 1, explain: "BENAR: 禁煙 = dilarang merokok, 立入禁止 = dilarang masuk!" },
      { id: "rsur_8", type: "mcq", badge: "Rambu · Toko", prompt: "Di depan kedai ramen tertulis 「準備中（じゅんびちゅう）」. Artinya kedai tersebut...", promptRomaji: "Junbichuu vs Eigyouchuu", sub: "Bandingkan dengan 「営業中」.", options: [{ jp: "Sudah buka dan siap melayani", romaji: "" }, { jp: "Sedang persiapan / belum buka (atau istirahat)", romaji: "" }, { jp: "Sedang diskon 50%", romaji: "" }, { jp: "Gratis masuk", romaji: "" }], answer: 1, explain: "BENAR: 準備中 = sedang persiapan (belum buka); kalau sedang buka tertulis 営業中!" },
      { id: "rsur_9", type: "input", badge: "Ketik · Memesan", prompt: "Ketik cara menunjuk barang/menu yang ingin kamu beli atau pesan: 「Yang ini tolong」 → （　　　）ください。", promptRomaji: "( ___ ) kudasai.", sub: "Ketik 'yang ini + partikel を' dalam Hiragana atau Romaji.", placeholder: "Ketik: これを atau kore o", accepted: ["これを", "kore o", "koreo", "kore wo"], displayAnswer: "これを (kore o)", explain: "BENAR: これを ください! (atau これを おねがいします!)" },
      { id: "rsur_10", type: "input", badge: "Ketik · Tanda Diskon", prompt: "Di supermarket malam hari sering ada stiker 「無料」 (gratis) dan 「半額」. Apa arti kata 「無料 (むりょう)」?", promptRomaji: "muryou = ?", sub: "Ketik 1 kata dalam bahasa Indonesia.", placeholder: "Ketik: gratis", accepted: ["gratis", "cuma-cuma"], displayAnswer: "gratis", explain: "BENAR: 無料 (むりょう) = gratis; 有料 (ゆうりょう) = berbayar; 半額 (はんがく) = setengah harga (diskon 50%)!" }
    ]
  }
];
