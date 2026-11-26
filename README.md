# Peta Projek Belajar Bahasa Jepang (JLPT N5 → N4 → N3 / N2)

Repositori ini berisi proyek belajar bahasa Jepang terstruktur lintas level, dibagi menjadi 3 folder utama sesuai tahapan belajar:

| Seri | Folder | Level | Cakupan Utama | Status |
| :--- | :--- | :--- | :--- | :--- |
| **Seri 1** | [`01-minna-no-nihongo-n5/`](./01-minna-no-nihongo-n5/README.md) | **JLPT N5** | **Minna no Nihongo I (Bab 1–25)** — Modul lengkap (Kotoba, Bunpou, Kaiwa, Latihan), **2.125 soal bank**, Flashcard Kotoba, Kaiwa Interaktif (241 baris + Voice Router), Tes Akhir hingga 250 soal, & Studio Web PWA Offline-Ready. | **Aktif & Siap Pakai** |
| **Seri 2** | [`02-minna-no-nihongo-n4/`](./02-minna-no-nihongo-n4/README.md) | **JLPT N4** | **Minna no Nihongo II (Bab 26–50)** — Potensial, pasif, kausatif, pengandaian lengkap (`ば・なら`), hingga Keigo (*Sonkeigo* & *Kenjougo*). | **Kerangka & Silabus Siap** |
| **Seri 3** | [`03-extract-materi-n3-n2/`](./03-extract-materi-n3-n2/README.md) | **JLPT N3 – N2** | **Ekstraksi Materi Lintas Buku** (*Try!*, *Shin Kanzen Master*, *Sou Matome*, dll.) — Pemetaan **Goi, Kanji, Bunpou, Dokkai, & Choukai** dengan transisi ke Kanji + Furigana tanpa bergantung pada Romaji. | **Kerangka & Ekstraktor Siap** |

---

## Menjalankan Studio Web N5 (Aktif Saat Ini)

```bash
python3 01-minna-no-nihongo-n5/serve.py        # http://localhost:8765 (+ IP LAN HP)
python3 01-minna-no-nihongo-n5/serve.py 9000   # port kustom
```

### Validasi Bank Soal & Kaiwa (Seri 1 — N5)

```bash
node 01-minna-no-nihongo-n5/tools/build-bank.mjs
node 01-minna-no-nihongo-n5/tools/validate-bank.mjs --all
node 01-minna-no-nihongo-n5/tools/validate-kaiwa.mjs --all
```

### Deploy Netlify

File [`netlify.toml`](./netlify.toml) di root repositori mengarahkan `publish = "01-minna-no-nihongo-n5/web"`, sehingga aplikasi web N5 tetap berjalan normal di Netlify meski materi N4 & N3–N2 berada di folder terpisah dalam repo yang sama.
