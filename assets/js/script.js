document.addEventListener("DOMContentLoaded", () => {
    console.log("Bale Coffee Sanctuary Website - JavaScript Ready!");

    const filterButtons = document.querySelectorAll(".btn-filter");
    const menuItems = document.querySelectorAll(".menu-item");
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            const targetCategory = button.getAttribute("data-target");
            menuItems.forEach(item => {
                const itemCategory = item.getAttribute("data-category");

                if (targetCategory === "all" || targetCategory === itemCategory) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });

    const counters = document.querySelectorAll(".counter");
    const speed = 100; 
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText;
            const increment = target / speed;
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target + (counter.getAttribute("data-target") === "98" ? "%" : "+");
            }
        };
        updateCount();
    });

    const formReservasi = document.getElementById("form-reservasi");
    const alertContainer = document.getElementById("alert-container");
    formReservasi.addEventListener("submit", (e) => {
        e.preventDefault();
        const nama = document.getElementById("input-nama").value.trim();
        const kontak = document.getElementById("input-kontak").value.trim();
        const tanggal = document.getElementById("input-tanggal").value;
        const area = document.getElementById("select-area").value;
        if (nama === "" || kontak === "" || tanggal === "" || area === "") {
            alertContainer.innerHTML = `
                <div class="alert alert-danger alert-dismissible fade show rounded-3 small" role="alert">
                    <strong>Gagal Mereservasi!</strong> Mohon lengkapi seluruh kolom wajib sebelum mengirim.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            `;
            return;
        }
        alertContainer.innerHTML = `
            <div class="alert alert-success alert-dismissible fade show rounded-3 p-3 mb-4" role="alert">
                <h5 class="alert-heading fw-bold mb-1">🎉 Meja Berhasil Diamankan!</h5>
                <p class="small mb-0 text-secondary">Halo <strong>${nama}</strong>, terima kasih. Kuota meja untuk area <strong>${area}</strong> pada tanggal <strong>${tanggal}</strong> telah kami tandai. Kami akan menghubungi Anda melalui WhatsApp di nomor <strong>${kontak}</strong>.</p>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `;
        formReservasi.reset();
    });

    const btnCozyMode = document.getElementById("btn-cozy-mode");
    btnCozyMode.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
        if (document.body.classList.contains("dark-theme")) {
            btnCozyMode.innerText = "☀️ Bright Mode";
            console.log("Cozy Mode Aktif: Suasana malam syahdu.");
        } else {
            btnCozyMode.innerText = "🌙 Cozy Mode";
            console.log("Bright Mode Aktif: Suasana siang segar.");
        }
    });
});