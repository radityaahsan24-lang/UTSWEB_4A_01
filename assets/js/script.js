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
});