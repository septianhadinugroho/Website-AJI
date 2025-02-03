// Slider untuk "Together We Build Tomorrow"
const carouselTrack = document.querySelector('.carousel-track');
let carouselIndex = 0;

function slideCarousel() {
    carouselIndex++;
    if (carouselIndex >= carouselTrack.children.length) {
        carouselIndex = 0;
    }
    carouselTrack.style.transform = `translateX(-${carouselIndex * 100}%)`;
}

setInterval(slideCarousel, 3000); // Geser setiap 3 detik

// Slider untuk "TOGETHER FOR CHANGE"
const sliderTrack = document.querySelector('.slider-track');
let sliderIndex = 0;

function slideTogetherForChange() {
    sliderIndex++;
    if (sliderIndex >= sliderTrack.children.length) {
        sliderIndex = 0;
    }
    sliderTrack.style.transform = `translateX(-${sliderIndex * 100}%)`;
}

setInterval(slideTogetherForChange, 3000); // Geser setiap 3 detik

// JavaScript untuk Apply Modal
function openApplyModal() {
    document.getElementById("applyModal").style.display = "block";
}

function closeApplyModal() {
    document.getElementById("applyModal").style.display = "none";
}

window.onclick = function (event) {
    const modal = document.getElementById("applyModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

// JavaScript untuk Apply Modal
function openApplyModal() {
    document.getElementById("applyModal").style.display = "block";
}

function closeApplyModal() {
    document.getElementById("applyModal").style.display = "none";
}

window.onclick = function (event) {
    const modal = document.getElementById("applyModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};