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

// Slider untuk "VOICES OF ANEKA INSIDERS"
let slideTimer;
const carouselVoice = document.getElementById('carouselvoice');
const carouselVoiceItems = document.querySelectorAll('.testimonial');
const totalItems = carouselVoiceItems.length;
const itemWidth = carouselVoiceItems[0].offsetWidth + 20; // 20 adalah margin-right

function scrollCarouselVoice() {
    let scrollAmount = 0;
    slideTimer = setInterval(() => {
        carouselVoice.scrollLeft += 2; // Kecepatan scroll
        scrollAmount += 2;
        if (scrollAmount >= itemWidth * totalItems / 2) {
            carouselVoice.scrollLeft = 0;
            scrollAmount = 0;
        }
    }, 20); // Interval waktu untuk smooth scroll
}

scrollCarouselVoice();

// Menghentikan animasi saat hover atau klik
carouselVoice.addEventListener('mouseover', () => {
    clearInterval(slideTimer);
});

carouselVoice.addEventListener('mouseout', () => {
    scrollCarouselVoice();
});

// Menghentikan animasi saat gambar diklik
carouselVoiceItems.forEach(item => {
    item.addEventListener('click', () => {
        clearInterval(slideTimer);
    });
});

// JavaScript untuk Modals Testimonial
function openModal(modalId) {
    clearInterval(slideTimer); // Menghentikan animasi saat modal dibuka
    document.getElementById(modalId).style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
    scrollCarouselVoice(); // Memulai kembali animasi saat modal ditutup
}

window.onclick = function (event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target == modal) {
            modal.style.display = 'none';
            scrollCarouselVoice(); // Memulai kembali animasi saat modal ditutup
        }
    });
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