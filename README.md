# 🎬 Codenime - Aplikasi Pelacak & Koleksi Anime

![Codenime Showcase](./.github/assets/1920x1080-homepage-codenime-styled_v2.png)

**Codenime** adalah aplikasi web full-stack modern yang dibangun dengan Next.js App Router, memungkinkan pengguna untuk menjelajahi, mengoleksi, dan melacak anime favorit mereka. Proyek ini bukan sekadar website tampilan, melainkan sebuah platform interaktif dengan sistem otentikasi, manajemen database, dan fungsionalitas CRUD yang lengkap.

**[Link ke Demo Langsung][soon] • [Laporkan Bug](https://github.com/urboy-code/CRUD-NEXTJS/issues) • [Minta Fitur Baru](https://github.com/urboy-code/CRUD-NEXTJS/issues)**

---

## 🌟 Fitur Utama

-   **Otentikasi Multi-Provider:** Login & registrasi aman menggunakan **GitHub** dan **Google** via Next-Auth (Auth.js v5).
-   **Koleksi Anime Pribadi:** Pengguna dapat menambah, melihat, dan menghapus anime dari koleksi pribadi mereka.
-   **Sistem Favorit:** Fungsionalitas untuk menandai anime sebagai favorit di dalam koleksi.
-   **Manajemen Profil Pengguna:** Halaman profil khusus di mana pengguna dapat mengedit nama, bio, dan **meng-upload foto profil** baru.
-   **Upload Gambar Modern:** Sistem upload avatar menggunakan **Vercel Blob** dengan fitur hapus otomatis untuk file lama.
-   **Rekomendasi Dinamis:** Halaman utama menampilkan rekomendasi anime yang diacak setiap kali di-refresh untuk penemuan konten baru.
-   **Pencarian & Detail Anime:** Pencarian anime secara *real-time* dan halaman detail yang informatif, mengambil data dari Jikan API.
-   **UI Profesional & Responsif:**
    -   Desain modern dengan **Glassmorphism** pada modal login.
    -   Layout yang sepenuhnya responsif untuk desktop, tablet, dan mobile (termasuk mode landscape).
    -   Notifikasi **Toast** untuk setiap aksi pengguna.
    -   **Loading Skeletons** yang komprehensif untuk mencegah *layout shift*.

## 🛠️ Dibangun Dengan (Tech Stack)

* **Framework:** [Next.js](https://nextjs.org/) 14+ (App Router)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Database:** [MySQL](https://www.mysql.com/) / [Vercel Postgres](https://vercel.com/storage/postgres) (untuk deployment)
* **ORM:** [Prisma](https://www.prisma.io/)
* **Otentikasi:** [Next-Auth (Auth.js v5)](https://authjs.dev/)
* **Penyimpanan File:** [Vercel Blob](https://vercel.com/storage/blob)
* **State Management (UI):** [Zustand](https://zustand-demo.pmnd.rs/) (untuk modal login)
* **Notifikasi:** [React Hot Toast](https://react-hot-toast.com/)
* **API Data Anime:** [Jikan API](https://jikan.moe/)
* **Deployment:** [Vercel](https://vercel.com/)

---

## 🚀 Memulai (Getting Started)

Untuk menjalankan proyek ini di komputermu, ikuti langkah-langkah berikut.

### Prasyarat

Pastikan kamu sudah menginstal Node.js (v18 atau lebih baru) dan sebuah server database (seperti MySQL atau gunakan Vercel Postgres).

### Instalasi

1.  **Clone repositori ini:**
    ```bash
    git clone [https://github.com/urboy-code/CRUD-NEXTJS.git](https://github.com/urboy-code/CRUD-NEXTJS.git)
    cd CRUD-NEXTJS
    ```

2.  **Install semua dependensi:**
    ```bash
    npm install
    ```

3.  **Setup Environment Variables:**
    * Buat file baru bernama `.env.local` di root folder proyek.
    * Salin isi dari file `.env.example` (jika ada) atau isi dengan variabel berikut:
        ```env
        # URL Database (sesuaikan dengan database-mu)
        DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE"

        # Kunci Rahasia untuk Next-Auth (buat string acak yang panjang)
        AUTH_SECRET="your_super_secret_string"

        # Kunci dari GitHub OAuth App
        AUTH_GITHUB_ID="your_github_client_id"
        AUTH_GITHUB_SECRET="your_github_client_secret"

        # Kunci dari Google OAuth App
        AUTH_GOOGLE_ID="your_google_client_id"
        AUTH_GOOGLE_SECRET="your_google_client_secret"
        
        # URL Aplikasi (untuk development)
        NEXTAUTH_URL="http://localhost:3000"
        ```

4.  **Jalankan Migrasi Database:**
    Perintah ini akan membuat semua tabel yang dibutuhkan di databasemu berdasarkan `prisma/schema.prisma`.
    ```bash
    npx prisma migrate dev
    ```

5.  **Jalankan Server Development:**
    ```bash
    npm run dev
    ```

Buka [http://localhost:3000](http://localhost:3000) di browser-mu untuk melihat hasilnya.

---

## 🤝 Berkontribusi

Kontribusi, isu, dan permintaan fitur sangat diterima! Jangan ragu untuk membuat *issue* atau *pull request*.

## 📄 Lisensi

Didistribusikan di bawah Lisensi MIT. Lihat `LICENSE` untuk informasi lebih lanjut.

