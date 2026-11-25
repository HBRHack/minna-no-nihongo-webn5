# Panduan Belajar Bahasa Jepang: Minna no Nihongo I (Bab 1 – 25)

Kurikulum **Minna no Nihongo I** (みんなの日本語 初級 I) mencakup 25 bab yang setara dengan level **JLPT N5** (dasar). Materi di folder ini disusun secara terstruktur agar bisa dipelajari serius secara mandiri.

---

## Peta Materi (Bab 1 – 25)

| Modul | Bab | Fokus Tata Bahasa (Bunpou) Inti |
| :--- | :--- | :--- |
| [bab-01-05.md](./bab-01-05.md) | **Bab 1 – 5** | Kalimat nominal (`は・です`), kata tunjuk (`これ・ここ`), jam & hari, kata kerja `ます` dasar, perpindahan (`へ・で・と`). |
| [bab-06-10.md](./bab-06-10.md) | **Bab 6 – 10** | Objek (`を`), memberi & menerima (`あげます・もらいます`), kata sifat `い` & `な`, suka/bisa (`が`), keberadaan (`あります・います`) & posisi. |
| [bab-11-15.md](./bab-11-15.md) | **Bab 11 – 15** | Kata bantu bilangan, kala lampau kata sifat, perbandingan (`より・一番`), keinginan (`ほしい・たい`), **Bentuk-て**, izin & larangan. |
| [bab-16-20.md](./bab-16-20.md) | **Bab 16 – 20** | Urutan aksi (`V-て`), **Bentuk-ない** (`ないで・なければなりません`), **Bentuk Kamus** (`ことができます`), **Bentuk-た** (`ことがあります`), **Bentuk Biasa (普通形)**. |
| [bab-21-25.md](./bab-21-25.md) | **Bab 21 – 25** | Pendapat & kutipan (`と思います・と言いました`), modifikasi kata benda, `とき` & `と`, memberi/menerima aksi (`てあげます・てもらいます・てくれます`), `たら` & `ても`. |
| [ringkasan-partikel-dan-konjugasi.md](./ringkasan-partikel-dan-konjugasi.md) | **Referensi** | Tabel konjugasi lengkap kata kerja (Kelompok I, II, III) dan daftar fungsi partikel penting Bab 1–25. |

---

## Cara Menggunakan Materi Ini

1. **Jangan hanya membaca pola:** Setiap bab berisi **Kosakata Inti**, **Pola Kalimat (Bunkei)**, **Penjelasan Tata Bahasa**, **Catatan Jebakan Umum**, dan **Latihan**. Kerjakan latihannya sebelum melihat kunci jawaban.
2. **Perhatikan kelompok kata kerja (mulai Bab 4 & 14):**
   - **Kelompok I (Godan):** Akhiran bunyi *-i* sebelum `ます` (contoh: `書きます`, `飲みます`, `行きます`).
   - **Kelompok II (Ichidan):** Akhiran bunyi *-e* sebelum `ます` + beberapa pengecualian bunyi *-i* (contoh: `食べます`, `見ます`, `起きます`).
   - **Kelompok III (Irregular):** Hanya `します` (melakukan) dan `来ます (きます)` (datang).
3. **Kuasai 3 titik balik utama di Minna no Nihongo I:**
   - **Bab 8:** Membedakan Kata Sifat-`い` dan Kata Sifat-`な`.
   - **Bab 14:** Menguasai perubahan **Bentuk-て** (kunci untuk hampir semua pola lanjutan).
   - **Bab 20:** Menguasai **Bentuk Biasa (普通形)** sebagai dasar kalimat majemuk di Bab 21–25.

---

## Studio Web Lengkap (Kana + Bab 1–25 + 11 Referensi + Audio + Multi-Profil)

Seluruh aplikasi interaktif — **Hiragana & Katakana (46+46 + 40 soal)**, **Bab 1–25 lengkap (430 soal)**, **11 Kategori Referensi (110 soal)**, **Tes Akhir 1–25 (25 soal)**, total **605 soal tanpa timer** — ada di satu folder `web/`.

### 1. Menjalankan di Laptop & HP Satu Wi-Fi (Lokal)

```bash
python3 serve.py          # http://localhost:8765 (+ alamat IP LAN untuk dibuka dari HP)
python3 serve.py 9000     # kalau ingin port lain
```

Server mengirim header *no-cache*, jadi browser selalu memuat versi terbaru.

### 2. Hosting Gratis di Netlify (Untuk Dipakai Teman-Teman)

File [`netlify.toml`](./netlify.toml) sudah disiapkan (`publish = "web"`):
- Hubungkan repo ini ke Netlify **atau** drag-and-drop folder `web/` ke **Netlify Drop**.
- Setiap teman yang membuka link Netlify otomatis mendapatkan ruang `localStorage` masing-masing di browser/HP-nya (skor ujian Bab 1–25, Kana, Referensi, Tes Akhir, & Bank Soal Salah tersimpan persisten per perangkat + tersedia fitur **Profil Belajar**, **Mode Teman 0% / Mode Perbaikan**, & **Export/Import JSON**).

### 3. Audio Pelafalan Jepang (`🔊`)

Tombol `🔊` memakai *Web Speech API* (`ja-JP`) bawaan browser tanpa perlu mengunduh MP3 eksternal, dilengkapi pilihan kecepatan **0.75× (Pemula)** dan **1.0× (Normal)** di menu **Profil & Audio**.

Catatan:

- Folder `web-zona-eror/` yang lama sudah dipindahkan ke `_arsip/web-zona-eror/`
  agar tidak ada dua aplikasi/dua port yang membingungkan. Isinya tetap tersimpan.
- Kalau browser masih menampilkan versi lama, tekan **Ctrl+Shift+R** (hard refresh) sekali.
