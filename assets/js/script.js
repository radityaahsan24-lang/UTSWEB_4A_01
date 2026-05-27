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
});