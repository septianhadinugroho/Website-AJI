const carousel = document.querySelector('.carousel-service');
const cards = document.querySelectorAll('.card-service');
const prevButton = document.querySelector('.prev-service');
const nextButton = document.querySelector('.next-service');

let currentIndex = 0;

// Fungsi untuk memperbarui carousel
function updateCarousel() {
  const totalCards = cards.length;
  const offset = -currentIndex * (100 / totalCards);
  carousel.style.transform = `translateX(${offset}%)`;

  // Mengatur kelas aktif untuk card
  cards.forEach((card, index) => {
    card.classList.remove('active');
    if (index === currentIndex) {
      card.classList.add('active');
    }
  });
}

// Event listener untuk tombol sebelumnya
prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? cards.length - 1 : currentIndex - 1;
  updateCarousel();
});

// Event listener untuk tombol berikutnya
nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex === cards.length - 1) ? 0 : currentIndex + 1;
  updateCarousel();
});

// Memperbarui carousel pada awal
updateCarousel();