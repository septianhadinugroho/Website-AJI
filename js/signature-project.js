const images = ["/assets/image1.jpg", "/assets/image2.jpg", "/assets/image3.jpg", "/assets/image4.jpg", "/assets/image5.jpg"];
const slidesContainer = document.getElementById("slides-container");
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");

function createSlides(images, imagesPerSlide = 3) {
    images.forEach((image, index) => {
        const slide = document.createElement("div");
        slide.classList.add("slide");
        slide.style.flex = `0 0 ${100 / imagesPerSlide}%`;

        const img = document.createElement("img");
        img.src = image;
        img.alt = `Slide Image ${index + 1}`;
        img.onclick = () => openModal(image); // Set click event to open modal

        slide.appendChild(img);
        slidesContainer.appendChild(slide);
    });
}

createSlides(images);

let currentIndex = 0;

function showSlide(index) {
    const totalSlides = Math.ceil(images.length / 3);
    currentIndex = (index + totalSlides) % totalSlides;
    const offset = -currentIndex * 100;
    slidesContainer.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

document.addEventListener("DOMContentLoaded", function() {
    modal.style.display = "none"; // Pastikan modal tidak muncul di awal
});

function openModal(imageSrc) {
    modalImage.src = imageSrc;
    modal.style.display = "flex";
}

function closeModal() {
    modal.style.display = "none";
}

setInterval(nextSlide, 3000); // Auto-slide every 3 seconds