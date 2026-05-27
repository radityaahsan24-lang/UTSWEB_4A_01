document.addEventListener("DOMContentLoaded", () => {
    console.log("Bale Coffee Sanctuary Website - JavaScript Ready!");
    
    // === FITUR 1: FILTER MENU DINAMIS (MANIPULASI DOM) ===
    const filterButtons = document.querySelectorAll(".btn-filter");
    const menuItems = document.querySelectorAll(".menu-item");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            // 1. Ubah status tombol aktif
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            // 2. Ambil target kategori dari tombol yang diklik
            const targetCategory = button.getAttribute("data-target");

            // 3. Saring elemen menu berdasarkan kategori
            menuItems.forEach(item => {
                const itemCategory = item.getAttribute("data-category");

                if (targetCategory === "all" || targetCategory === itemCategory) {
                    item.style.display = "block"; // Menampilkan elemen
                } else {
                    item.style.display = "none";  // Menyembunyikan elemen
                }
            });
        });
    });

    // === FITUR 2: COUNTER ANIMATION / ANGKA BERJALAN (MANIPULASI DOM) ===
    const counters = document.querySelectorAll(".counter");
    const speed = 100; // Semakin kecil nilainya, animasi angka berjalan akan semakin cepat

    counters.forEach(counter => {
        const updateCount = () => {
            // Mengubah tipe data teks target menjadi angka murni (+)
            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText;

            // Menghitung besarnya pertambahan angka per frame jalannya animasi
            const increment = target / speed;

            // Cek jika angka saat ini belum mencapai target asli
            if (count < target) {
                // Tambahkan angka secara bertahap dan bulatkan ke atas
                counter.innerText = Math.ceil(count + increment);
                // Jalankan kembali fungsi ini dalam waktu 20 milidetik (efek animasi mulus)
                setTimeout(updateCount, 20);
            } else {
                // Jika sudah lewat atau sama dengan target, kunci di angka target asli
                counter.innerText = target + (counter.getAttribute("data-target") === "98" ? "%" : "+");
            }
        };

        updateCount();
    });

    // === FITUR 3: VALIDASI FORM & CUSTOM ALERTS (MANIPULASI DOM) ===
    const formReservasi = document.getElementById("form-reservasi");
    const alertContainer = document.getElementById("alert-container");

    formReservasi.addEventListener("submit", (e) => {
        e.preventDefault(); // Mencegah website reload saat tombol ditekan
        
        // Mengambil isi nilai inputan form
        const nama = document.getElementById("input-nama").value.trim();
        const kontak = document.getElementById("input-kontak").value.trim();
        const tanggal = document.getElementById("input-tanggal").value;
        const area = document.getElementById("select-area").value;

        // 1. Logika Validasi (Cek apakah ada kolom yang kosong)
        if (nama === "" || kontak === "" || tanggal === "" || area === "") {
            // Manipulasi DOM untuk memunculkan pesan error berwarna merah banner Bootstrap
            alertContainer.innerHTML = `
                <div class="alert alert-danger alert-dismissible fade show rounded-3 small" role="alert">
                    <strong>Gagal Mereservasi!</strong> Mohon lengkapi seluruh kolom wajib sebelum mengirim.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            `;
            return; // Hentikan jalannya program agar tidak lanjut ke bawah
        }
        // 2. Logika Sukses (Jika semua kolom terisi dengan benar)
        // Manipulasi DOM untuk memunculkan ucapan terima kasih dengan menyapa nama pengguna
        alertContainer.innerHTML = `
            <div class="alert alert-success alert-dismissible fade show rounded-3 p-3 mb-4" role="alert">
                <h5 class="alert-heading fw-bold mb-1">🎉 Meja Berhasil Diamankan!</h5>
                <p class="small mb-0 text-secondary">Halo <strong>${nama}</strong>, terima kasih. Kuota meja untuk area <strong>${area}</strong> pada tanggal <strong>${tanggal}</strong> telah kami tandai. Kami akan menghubungi Anda melalui WhatsApp di nomor <strong>${kontak}</strong>.</p>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `;

        // Mengosongkan isian form kembali secara otomatis setelah sukses dikirim
        formReservasi.reset();
    });
});