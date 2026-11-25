/* ZONA ORANYE LAINNYA (Skor 1/4): Bab 4 & Bab 6 (Bab 17 ada di web terpisah) */
window.ERROR_CHAPTERS.push(
  // ==================== BAB 4 ====================
  {
    num: 4,
    zone: "orange",
    oldScore: "1/4",
    title: "Partikel Waktu に, Posisi はん (Setengah), & Negatif Lampau ませんでした",
    shortBug: "Salah partikel に pada jam, terbalik posisi はん pada 9じはん, dan kurang でした pada おきませんでした.",
    bugs: [
      { soal: "Soal 13", salah: "Salah memilih partikel waktu pada jam 11 (11じ)", benar: "11じ に ねます (waktu berangka = に)", kenapa: "Jam (6じに, 11じに) wajib memakai partikel に! Yang TIDAK pakai に hanya kata waktu relatif (きょう, きのう, まいにち)." },
      { soal: "Soal 14", salah: "Terbalik posisi はん pada jam 9:30", benar: "9じ はん (kuji han = jam 9 lewat 30 menit)", kenapa: "Ingat urutan Jepang: JAM dulu baru はん (setengah)! Jangan kebalik seperti bahasa Indonesia ('setengah sepuluh' = 9じはん, BUKAN 10じはん!)." },
      { soal: "Soal 15", salah: "Menjawab おきません padahal kalimatnya lampau (kemarin)", benar: "おきませんでした (negatif LAMPAU wajib ada でした!)", kenapa: "Rumus negatif lampau kata kerja: V-ません + でした. Jangan pernah lupa ekor でした-nya!" }
    ],
    grammar: [
      {
        num: "POIN 01",
        title: "Partikel に untuk Waktu Spesifik vs Tanpa に",
        formula: "[Jam / Tanggal / Hari] に V-ます   |   きょう・あした・きのう・まいにち (TANPA に)",
        explain: "Jika waktunya berupa angka pasti (jam 7, tanggal 5), pasang に tepat di belakang angka waktunya. Untuk waktu relatif yang berubah tiap hari (hari ini, besok, kemarin, setiap hari), JANGAN pakai に.",
        examples: [
          { jp: "まいばん 11じに ねます。", romaji: "Maiban juuichiji ni nemasu.", id: "Setiap malam tidur pada jam 11." },
          { jp: "きのう 6じはんに おきました。", romaji: "Kinou rokujihan ni okimashita.", id: "Kemarin bangun jam 6:30." }
        ],
        trap: "Bug Soal 13: まいばん tidak pakai に, sedangkan 11じ WAJIB pakai に → まいばん 11じに!"
      },
      {
        num: "POIN 02",
        title: "Cara Baca Jam & Jebakan はん (30 Menit)",
        formula: "9:30 = 9じ はん (kuji han)   |   4じ (yoji), 7じ (shichiji), 9じ (kuji)",
        explain: "Dalam bahasa Jepang, はん artinya 'lewat 30 menit' dan selalu ditaruh SETELAH jam yang sedang berjalan. Jadi 09:30 adalah 9じはん (jam 9 lebih setengah), bukan 10じはん!",
        examples: [
          { jp: "いま ごぜん 9じはん です。", romaji: "Ima gozen kujihan desu.", id: "Sekarang jam 9:30 pagi." },
          { jp: "かいぎは 2じから 4じはんまで です。", romaji: "Kaigi wa niji kara yojihan made desu.", id: "Rapat dari jam 2 sampai jam 4:30." }
        ],
        trap: "Bug Soal 14: Jika mendengar 'setengah sepuluh' (09:30), ubah dulu ke angka 09:30 → 9じはん!"
      },
      {
        num: "POIN 03",
        title: "4 Bentuk Kata Kerja Sopan (Kunci: Negatif Lampau!)",
        formula: "(+) V-ます  |  (-) V-ません  |  (+ Lampau) V-ました  |  (- Lampau) V-ませんでした",
        explain: "Cek kata keterangan waktu di awal kalimat (きのう / きのうのばん / せんしゅう). Kalau lampau dan negatif, WAJIB pakai ～ませんでした.",
        examples: [
          { jp: "きのう べんきょうしませんでした。", romaji: "Kinou benkyou shimasen deshita.", id: "Kemarin tidak belajar." },
          { jp: "けさ はやく おきませんでした。", romaji: "Kesa hayaku okimasen deshita.", id: "Tadi pagi tidak bangun cepat." }
        ],
        trap: "Bug Soal 15: おきません = tidak bangun (kebiasaan/akan). おきませんでした = tidak bangun (kemarin/tadi)."
      }
    ],
    vocab: [
      { jp: "おきます / ねます", romaji: "okimasu / nemasu", arti: "bangun tidur / tidur" },
      { jp: "はたらきます / やすみます", romaji: "hatarakimasu / yasumimasu", arti: "bekerja / istirahat, libur" },
      { jp: "べんきょうします / おわります", romaji: "benkyou shimasu / owarimasu", arti: "belajar / selesai" },
      { jp: "ごぜん / ごご / ～じはん", romaji: "gozen / gogo / ~ji han", arti: "AM (pagi) / PM (siang-malam) / jam ~ lewat 30 menit" },
      { jp: "きのう / きょう / あした", romaji: "kinou / kyou / ashita", arti: "kemarin / hari ini / besok" }
    ],
    questions: [
      {
        id: "b4_1", type: "mcq", badge: "Perbaikan Soal 13",
        prompt: "わたしは まいばん 11じ （　　） ねます。 (Saya setiap malam tidur jam 11.)",
        promptRomaji: "Watashi wa maiban juuichiji ( _ ) nemasu.",
        sub: "Jam 11 adalah waktu berangka spesifik!",
        options: [
          { jp: "で", romaji: "de" },
          { jp: "に", romaji: "ni" },
          { jp: "を", romaji: "o" },
          { jp: "へ", romaji: "e" }
        ],
        answer: 1,
        explain: "BENAR: に! Waktu spesifik berupa jam (11じ) wajib diikuti partikel に."
      },
      {
        id: "b4_2", type: "mcq", badge: "Perbaikan Soal 14",
        prompt: "Jam 「09:30」 (setengah sepuluh) dalam bahasa Jepang dibaca...",
        promptRomaji: "09:30 = ?",
        sub: "Ingat: angka jam yang sedang berjalan + はん!",
        options: [
          { jp: "はん 9じ", romaji: "han kuji" },
          { jp: "10じ はん", romaji: "juuji han" },
          { jp: "9じ はん", romaji: "kuji han" },
          { jp: "9ふん はん", romaji: "kufun han" }
        ],
        answer: 2,
        explain: "BENAR: 9じはん (kujihan)! はん selalu di belakang jam yang sedang berjalan (09:30 → 9じはん)."
      },
      {
        id: "b4_3", type: "mcq", badge: "Perbaikan Soal 15",
        prompt: "きのう 6じに （　　　　　）。 (Kemarin TIDAK bangun jam 6. — おきます)",
        promptRomaji: "Kinou rokuji ni ( _____ ).",
        sub: "Ada kata きのう (kemarin) + bentuk negatif!",
        options: [
          { jp: "おきません", romaji: "okimasen" },
          { jp: "おきました", romaji: "okimashita" },
          { jp: "おきませんでした", romaji: "okimasen deshita" },
          { jp: "おきますでした", romaji: "okimasu deshita" }
        ],
        answer: 2,
        explain: "BENAR: おきませんでした! Negatif lampau sopan selalu berbentuk V-ませんでした."
      },
      {
        id: "b4_4", type: "mcq", badge: "から ～ まで",
        prompt: "ぎんこうは 9じ （　　） 3じ （　　） です。 (Bank buka dari jam 9 sampai jam 3.)",
        promptRomaji: "Ginkou wa kuji ( __ ) sanji ( __ ) desu.",
        sub: "Pasangan 'dari ~ sampai ~' adalah...",
        options: [
          { jp: "に ・ で", romaji: "ni · de" },
          { jp: "から ・ まで", romaji: "kara · made" },
          { jp: "まで ・ から", romaji: "made · kara" },
          { jp: "と ・ に", romaji: "to · ni" }
        ],
        answer: 1,
        explain: "BENAR: から (dari) ... まで (sampai). 9じから 3じまで です."
      },
      {
        id: "b4_5", type: "mcq", badge: "Tanpa に",
        prompt: "Kalimat mana yang BENAR untuk 'Kemarin saya bekerja'?",
        promptRomaji: "Cek apakah きのう boleh pakai に!",
        options: [
          { jp: "きのうに はたらきました。", romaji: "Kinou ni hatarakimashita." },
          { jp: "きのう はたらきました。", romaji: "Kinou hatarakimashita." },
          { jp: "きのう はたらきます。", romaji: "Kinou hatarakimasu." },
          { jp: "きのうで はたらきました。", romaji: "Kinou de hatarakimashita." }
        ],
        answer: 1,
        explain: "BENAR: きのう はたらきました! Kata waktu relatif (きのう, きょう, あした, まいにち) TIDAK memakai partikel に."
      },
      {
        id: "b4_6", type: "input", badge: "Latihan Ketik",
        prompt: "Ubah 「べんきょうします」 ke bentuk NEGATIF LAMPAU sopan!",
        promptRomaji: "benkyou shimasu → tidak belajar (kemarin)",
        sub: "Boleh ketik Hiragana atau Romaji.",
        placeholder: "Ketik: べんきょうしませんでした atau benkyou shimasen deshita",
        accepted: ["べんきょうしませんでした", "benkyou shimasen deshita", "benkyoushimasen deshita", "benkyoushimasendeshita"],
        displayAnswer: "べんきょうしませんでした (benkyou shimasen deshita)",
        explain: "BENAR! Negatif lampau sopan: します → しませんでした."
      }
    ]
  },

  // ==================== BAB 6 ====================
  {
    num: 6,
    zone: "orange",
    oldScore: "1/4",
    title: "Partikel Tempat Aksi (で), Objek (を), & Ajakan (～ませんか・～ましょう)",
    shortBug: "Tertukar partikel tempat aksi で dengan に, dan belum mengunci rumus ajakan ～ましょう.",
    bugs: [
      { soal: "Soal 22", salah: "Memakai に untuk 'makan di kantin' (しょくどうに たべます)", benar: "しょくどう で たべます (tempat aksi aktif = で!)", kenapa: "Makan, beli, belajar, main, kerja adalah AKSI AKTIF → tempatnya WAJIB で! (に hanya untuk keberadaan statis あります・います di Bab 10)." },
      { soal: "Soal 23–24", salah: "Belum mengunci pola ajakan ～ましょう (いきましょう / ええ、のみましょう)", benar: "Ajak halus: V-ませんか · Ajak langsung / setuju: V-ましょう", kenapa: "Kalau diajak pakai ～ませんか ('Maukah ~?'), jawaban setujunya selalu pakai ～ましょう ('Ya, ayo ~!')." }
    ],
    grammar: [
      {
        num: "POIN 01",
        title: "Partikel で (Tempat Aksi Aktif) vs に (Keberadaan)",
        formula: "[Tempat] で  [Objek] を  V-ます",
        explain: "Setiap kali ada kata kerja AKSI (makan, minum, membaca, membeli, menonton, bermain, mengambil foto, bertemu) di sebuah lokasi, partikel tempatnya adalah で!",
        examples: [
          { jp: "しょくどうで ひるごはんを たべます。", romaji: "Shokudou de hirugohan o tabemasu.", id: "Makan siang di kantin." },
          { jp: "えきで しんぶんを かいます。", romaji: "Eki de shinbun o kaimasu.", id: "Membeli koran di stasiun." },
          { jp: "にわで しゃしんを とりました。", romaji: "Niwa de shashin o torimashita.", id: "Mengambil foto di halaman." }
        ],
        trap: "Bug Soal 22: Jangan terkecoh kata 'di' dalam bahasa Indonesia! 'Di kantin makan' = しょくどうで たべます (BUKAN しょくどうに)."
      },
      {
        num: "POIN 02",
        title: "Ajakan: V-ませんか (Maukah?) vs V-ましょう (Ayo!)",
        formula: "A: いっしょに V-ませんか。  →  B: ええ、V-ましょう。",
        explain: "V-ませんか dipakai untuk mengajak secara sopan sambil menanyakan kesediaan. V-ましょう dipakai untuk mengajak langsung ('Ayo!') sekaligus untuk MENYETUJUI ajakan V-ませんか.",
        examples: [
          { jp: "いっしょに コーヒーを のみませんか。…ええ、のみましょう。", romaji: "Issho ni koohii o nomimasen ka. ...Ee, nomimashou.", id: "Maukah minum kopi bersama? ...Ya, ayo minum!" },
          { jp: "ちょっと やすみましょう。", romaji: "Chotto yasumimashou.", id: "Ayo istirahat sebentar." },
          { jp: "あした いっしょに きょうとへ いきましょう。", romaji: "Ashita issho ni Kyouto e ikimashou.", id: "Besok ayo pergi ke Kyoto bersama!" }
        ],
        trap: "Bug Soal 23–24: Hati-hati! V-ませんか bentuknya negatif + か, tapi artinya BUKAN 'tidak melakukan', melainkan AJAKAN halus ('Maukah ~?')."
      }
    ],
    vocab: [
      { jp: "たべます / のみます / すいます", romaji: "tabemasu / nomimasu / suimasu", arti: "makan / minum / menghisap (rokok)" },
      { jp: "みます / ききます / よみます / かきます", romaji: "mimasu / kikimasu / yomimasu / kakimasu", arti: "melihat / mendengar / membaca / menulis" },
      { jp: "かいます / とります / あいます", romaji: "kaimasu / torimasu / aimasu", arti: "membeli / mengambil (foto) / bertemu (pakai に)" },
      { jp: "いっしょに / ちょっと / それから", romaji: "issho ni / chotto / sorekara", arti: "bersama-sama / sebentar / setelah itu" }
    ],
    questions: [
      {
        id: "b6_1", type: "mcq", badge: "Perbaikan Soal 22",
        prompt: "まいにち かいしゃの しょくどう （　　） ひるごはんを たべます。",
        promptRomaji: "Mainichi kaisha no shokudou ( _ ) hirugohan o tabemasu.",
        sub: "Makan siang adalah AKSI AKTIF di kantin!",
        options: [
          { jp: "に", romaji: "ni" },
          { jp: "で", romaji: "de" },
          { jp: "へ", romaji: "e" },
          { jp: "を", romaji: "o" }
        ],
        answer: 1,
        explain: "BENAR: で! Tempat melakukan aksi aktif selalu pakai で (しょくどうで たべます)."
      },
      {
        id: "b6_2", type: "mcq", badge: "Perbaikan Soal 23",
        prompt: "いっしょに えいがを （　　　　　）。 (Ayo pergi menonton film bersama!)",
        promptRomaji: "Issho ni eiga o ( _____ ).",
        sub: "Pilih rumus 'Ayo ~!' untuk kata kerja みます.",
        options: [
          { jp: "みました", romaji: "mimashita" },
          { jp: "みません", romaji: "mimasen" },
          { jp: "みましょう", romaji: "mimashou" },
          { jp: "みますか", romaji: "mimasu ka" }
        ],
        answer: 2,
        explain: "BENAR: みましょう! Coret ます ganti ましょう = 'Ayo ~!'."
      },
      {
        id: "b6_3", type: "mcq", badge: "Perbaikan Soal 24",
        prompt: "A: 「いっしょに ビールを のみませんか。」 B: 「ええ、（　　　　　）。」",
        promptRomaji: "A: Issho ni biiru o nomimasen ka. B: Ee, ( _____ ).",
        sub: "B menyetujui ajakan A ('Ya, ayo minum!').",
        options: [
          { jp: "のみません", romaji: "nomimasen" },
          { jp: "のみましょう", romaji: "nomimashou" },
          { jp: "のみました", romaji: "nomimashita" },
          { jp: "のみませんでした", romaji: "nomimasen deshita" }
        ],
        answer: 1,
        explain: "BENAR: ええ、のみましょう! Pasangan setuju dari ajakan ～ませんか selalu ～ましょう."
      },
      {
        id: "b6_4", type: "mcq", badge: "Jebakan あいます",
        prompt: "えきで ともだち （　　） あいます。 (Bertemu teman di stasiun.)",
        promptRomaji: "Eki de tomodachi ( _ ) aimasu.",
        sub: "Hati-hati: kata kerja あいます (bertemu) pakai partikel apa untuk orangnya?",
        options: [
          { jp: "を", romaji: "o" },
          { jp: "に", romaji: "ni" },
          { jp: "で", romaji: "de" },
          { jp: "へ", romaji: "e" }
        ],
        answer: 1,
        explain: "BENAR: に! Kata kerja あいます adalah pengecualian di Bab 6 — orang yang ditemui pakai に (ともだちに あいます), bukan を."
      },
      {
        id: "b6_5", type: "mcq", badge: "なに vs なん",
        prompt: "あした （　　）を しますか。 (Besok melakukan apa?)",
        promptRomaji: "Ashita ( __ ) o shimasu ka.",
        sub: "Sebelum partikel を, kita pakai なに atau なん?",
        options: [
          { jp: "なん", romaji: "nan" },
          { jp: "なに", romaji: "nani" },
          { jp: "どこ", romaji: "doko" },
          { jp: "だれ", romaji: "dare" }
        ],
        answer: 1,
        explain: "BENAR: なに! Sebelum を selalu pakai なに (なにを しますか, なにを たべますか)."
      },
      {
        id: "b6_6", type: "input", badge: "Latihan Ketik",
        prompt: "Ubah 「いきます」 menjadi ajakan 'Ayo pergi!'",
        promptRomaji: "ikimasu → Ayo pergi!",
        sub: "Coret ます + ましょう. Boleh Hiragana atau Romaji.",
        placeholder: "Ketik: いきましょう atau ikimashou",
        accepted: ["いきましょう", "ikimashou"],
        displayAnswer: "いきましょう (ikimashou)",
        explain: "BENAR: いきましょう (ikimashou)!"
      }
    ]
  }
);
