Berikut adalah tahapan dari mulai autentikasi login menggunakan akun Google hingga aplikasi mendapatkan data profil dan username:

 1. Memulai Proses Login dengan Google
   - Pada aplikasi, pengguna akan melihat tombol untuk "Login with Google" atau serupa.
   - Ketika pengguna menekan tombol ini, aplikasi menginisialisasi permintaan login melalui layanan autentikasi Google. Proses ini biasanya menggunakan pustaka autentikasi atau SDK yang disediakan oleh Google, seperti Firebase Authentication atau Google Sign-In SDK.
   
 2. Pengarahan ke Halaman Login Google
   - Aplikasi mengarahkan pengguna ke halaman login Google melalui URL khusus atau pop-up login.
   - Pengguna diminta untuk memasukkan kredensial Google mereka atau memilih akun yang sudah masuk di perangkat.
   - Pada tahap ini, Google memastikan identitas pengguna dan meminta persetujuan pengguna untuk berbagi data tertentu dengan aplikasi, seperti nama, email, dan gambar profil.

 3. Penerimaan Token Akses (Access Token)
   - Setelah pengguna berhasil login, Google mengembalikan Access Token ke aplikasi. Token ini adalah bukti bahwa pengguna telah terverifikasi dan memberikan izin aplikasi untuk mengakses data profil mereka.
   - Token ini dikirimkan melalui callback atau secara langsung ke aplikasi.

 4. Meminta Data Profil dari Google
   - Dengan menggunakan Access Token, aplikasi melakukan permintaan (request) ke Google API untuk mengambil data profil pengguna.
   - Aplikasi mengirimkan request ke endpoint API Google, seperti `https://www.googleapis.com/oauth2/v3/userinfo`, yang memberikan respons berisi informasi profil pengguna.

 5. Mendapatkan dan Menampilkan Data Pengguna
   - Google API merespons dengan mengirimkan data profil pengguna dalam format JSON, yang umumnya mencakup informasi seperti:
     - Nama pengguna
     - Alamat email
     - Foto profil
   - Aplikasi kemudian menampilkan data ini pada halaman profil atau halaman lain yang sesuai. Pengguna dapat melihat nama, foto, dan informasi lainnya yang diambil langsung dari akun Google mereka.

 6. Penyimpanan dan Penggunaan Data
   - Data yang diperoleh dapat disimpan sementara di aplikasi, seperti di `state` atau `local storage` agar tetap tersedia selama sesi pengguna berlangsung.
   - Aplikasi dapat menggunakan data ini untuk menampilkan nama pengguna di bagian header atau profil dan mempersonalisasi pengalaman pengguna di dalam aplikasi.
