// Slider Together for Change Section
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    const sliderTrack = document.querySelector('.slider-track');

    // Geser slider-track berdasarkan indeks slide
    sliderTrack.style.transform = `translateX(-${index * 20}%)`;

    // Atur ulang posisi dan skala slide untuk efek tumpukan
    slides.forEach((slide, i) => {
        const offset = i - index;
        const scale = 1 - Math.abs(offset) * 0.1; // Skala slide
        const opacity = 1 - Math.abs(offset) * 0.3; // Opasitas slide
        const translateX = offset * 50; // Geser slide ke kiri/kanan

        slide.style.transform = `translateX(${translateX}%) scale(${scale})`;
        slide.style.opacity = opacity;
        slide.style.zIndex = totalSlides - Math.abs(offset); // Atur z-index
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Otomatis geser slider setiap 5 detik
setInterval(nextSlide, 5000);