document.addEventListener("DOMContentLoaded", function () {
    // Fungsi untuk animasi progress bar
    function animateProgressBar(progressBarId, progressTextId, targetWidth) {
        const progressBar = document.getElementById(progressBarId);
        const progressText = document.getElementById(progressTextId);
        let currentWidth = 0;

        // Interval untuk mengubah width secara bertahap
        const interval = setInterval(() => {
            if (currentWidth >= targetWidth) {
                clearInterval(interval); // Hentikan animasi jika sudah mencapai target
                progressBar.classList.add("completed"); // Tambahkan kelas completed
            } else {
                currentWidth++; // Tambahkan 1% setiap iterasi
                progressBar.style.width = currentWidth + "%"; // Update width
                progressText.textContent = currentWidth + "%"; // Update teks persentase
            }
        }, 20); // Kecepatan animasi (ms)
    }

    // Jalankan animasi untuk setiap progress bar
    animateProgressBar("progressBar1", "progressText1", 95);
    animateProgressBar("progressBar2", "progressText2", 80);
    animateProgressBar("progressBar3", "progressText3", 65);
    animateProgressBar("progressBar4", "progressText4", 45);
    animateProgressBar("progressBar5", "progressText5", 25);
    animateProgressBar("progressBar6", "progressText6", 15);
});