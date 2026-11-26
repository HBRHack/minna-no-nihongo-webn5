# PERINTAH UTAMA — BANK SOAL MINNA NO NIHONGO I (BAB 1–13)

Dokumen ini adalah acuan tunggal untuk membuat bank soal. Setiap bab wajib menghasilkan **tepat 50 soal** yang tersimpan sebagai JSON, lalu digenerate menjadi file JS yang dibaca `web/app.js`.

## 1. Peran

Kamu adalah penyusun bank soal bahasa Jepang level **JLPT N5** yang teliti. Tugasmu: membuat 50 soal murni untuk **satu bab**, bukan campuran beberapa bab.

## 2. Sumber wajib

- `bab-01-05.md`, `bab-06-10.md`, `bab-11-15.md`
- `ringkasan-partikel-dan-konjugasi.md`
- Soal lama di `web/data/*.js` boleh dipakai ulang jika sudah benar dan sesuai bab.

Setiap soal harus bisa dilacak ke satu pola kalimat atau kelompok kosakata di bab tersebut. Jika pola belum diajarkan di bab itu, soal tidak boleh dipakai.

## 3. Output

Satu file JSON per bab:

```
web/data/bank/bab-01.json
web/data/bank/bab-02.json
...
web/data/bank/bab-13.json
```

Lalu jalankan generator:

```bash
node tools/build-bank.mjs
```

Generator membuat file JS yang dibaca app:

```js
window.MNN_BANK = window.MNN_BANK || {};
window.MNN_BANK[1] = [ /* 50 objek dari JSON */ ];
```

## 4. Skema objek (WAJIB)

```json
{
  "id": "b1-01",
  "bab": 1,
  "type": "mcq",
  "badge": "Bab 1 · Partikel は",
  "prompt": "わたし （　） マイク・ミラーです。",
  "promptRomaji": "Watashi ( ) Maiku Miraa desu.",
  "sub": "Pilih partikel penanda topik. (Saya Mike Miller.)",
  "options": [
    { "jp": "は", "romaji": "wa" },
    { "jp": "を", "romaji": "o" },
    { "jp": "に", "romaji": "ni" },
    { "jp": "で", "romaji": "de" }
  ],
  "answer": 0,
  "explain": "は menandai topik kalimat dan dibaca 'wa'."
}
```

Aturan field:

- `id`: `b{bab}-{nn}`, misalnya `b1-01` sampai `b1-50`.
- `bab`: angka bab, harus sama dengan nama file.
- `type`: selalu `"mcq"`.
- `badge`: topik singkat, misalnya `"Bab 4 · Partikel に (waktu)"`.
- `prompt`: kalimat/soal bahasa Jepang. Boleh berisi `（　）` sebagai blank.
- `promptRomaji`: romaji dari prompt.
- `sub`: instruksi/terjemahan dalam bahasa Indonesia.
- `options`: tepat 4 objek `{ jp, romaji }`.
- `answer`: indeks jawaban benar, `0`–`3`.
- `explain`: satu kalimat pendek yang menyebut aturan/alasannya.

Untuk opsi yang berupa terjemahan Indonesia, `jp` diisi teks Indonesia dan `romaji` boleh `""`.

## 5. Aturan 50 soal

- Tepat 50 soal per bab.
- Tidak ada `prompt` yang duplikat di bab yang sama.
- Tidak ada pasangan `prompt + jawaban benar` yang duplikat.
- Pengecoh harus masuk akal dan berasal dari kesalahan umum pelajar.
- Hanya satu jawaban yang benar; tidak boleh ambigu.
- Wajib ada teks Jepang di `prompt` atau opsi.
- `explain` tidak boleh kosong.
- Kosakata dan pola tidak boleh keluar dari materi bab itu.
- Soal tidak boleh menyalin soal dari bab lain.

Catatan soal “jawaban tidak boleh duplikat”: teks jawaban pendek seperti `は`, `を`, `に`, `で` wajar berulang. Yang dilarang adalah **pasangan soal–jawaban yang sama** dan **dua opsi benar dalam satu soal**.

## 6. Komposisi 50 soal per bab

| Bab | Fokus materi | Voc | Partikel | Konjugasi/Bentuk | Pola | Total |
|---|---|---:|---:|---:|---:|---:|
| 1 | は・です・じゃありません・か・も・の, perkenalan, umur | 15 | 15 | 8 | 12 | 50 |
| 2 | これ・それ・あれ, この・その・あの, の, そうです, ～か、～か | 15 | 15 | 8 | 12 | 50 |
| 3 | ここ・そこ・あそこ, どちら, asal produk, いくら | 15 | 15 | 5 | 15 | 50 |
| 4 | V-ます 4 bentuk, に waktu, から～まで, と | 10 | 12 | 14 | 14 | 50 |
| 5 | へ, で transport, と, ひとりで, tanggal, いつ | 10 | 14 | 8 | 18 | 50 |
| 6 | を, で tempat aksi, ませんか・ましょう, なん vs なに | 10 | 14 | 8 | 18 | 50 |
| 7 | で alat/bahasa, あげる・もらう, もう・まだ | 10 | 14 | 10 | 16 | 50 |
| 8 | KS-い vs KS-な, negatif, modifikasi N, とても・あまり | 10 | 8 | 18 | 14 | 50 |
| 9 | が (suki/kirai/jouzu/heta/wakarimasu), から, どうして | 10 | 14 | 6 | 20 | 50 |
| 10 | あります・います, posisi, や～など | 14 | 12 | 4 | 20 | 50 |
| 11 | Kata bantu bilangan, durasi, だけ, frekuensi | 16 | 8 | 6 | 20 | 50 |
| 12 | Lampau KS, より・どちら・のほうが, いちばん | 10 | 8 | 18 | 14 | 50 |
| 13 | がほしい, たいです, へ V-ます/に 行きます | 12 | 8 | 16 | 14 | 50 |

## 7. Validasi otomatis

Jalankan:

```bash
node tools/validate-bank.mjs
```

Validator memeriksa:

- jumlah soal = 50;
- `id` berurutan dan sesuai bab;
- `bab` sesuai file;
- `options.length = 4`;
- `answer` berupa indeks `0`–`3`;
- tidak ada opsi `jp` duplikat dalam satu soal;
- `prompt` tidak duplikat dalam satu bab;
- pasangan `prompt + jawaban` tidak duplikat antar-bab;
- `prompt`, `promptRomaji`, `sub`, `explain` tidak kosong;
- ada karakter Jepang di prompt atau opsi.

## 8. Larangan

- Jangan menyingkat atau menulis komentar seperti `// lanjutkan sampai 50`.
- Jangan menyalin soal dari bab lain.
- Jangan membuat dua jawaban benar atau soal ambigu.
- Jangan memakai pola yang belum diajarkan di bab itu.
