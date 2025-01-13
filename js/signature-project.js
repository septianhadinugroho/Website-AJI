const projects = [
    {
        title: "Proyek Jembatan Suramadu",
        images: ["assets/page1.jpg", "assets/page2.jpg", "assets/page3.jpg"],
        info: {
            owner: "PT. Jasa Marga",
            maincon: "PT. Adhi Karya",
            consultant: "PT. Wijaya Karya",
            diameter: "1200 mm",
            totalDepth: "15.000 m (500 nos)",
            workDesc: "Pembangunan jembatan sepanjang 5,4 km dengan struktur baja dan beton."
        }
    },
    {
        title: "Proyek Tol Trans Jawa",
        images: ["assets/page2.jpg", "assets/page3.jpg", "assets/page1.jpg"],
        info: {
            owner: "PT. Jasa Marga",
            maincon: "PT. Waskita Karya",
            consultant: "PT. Hutama Karya",
            diameter: "800 mm",
            totalDepth: "10.000 m (300 nos)",
            workDesc: "Pembangunan jalan tol sepanjang 72 km dengan 6 jalur."
        }
    },
    {
        title: "Proyek Bandara Internasional Yogyakarta",
        images: ["assets/page3.jpg", "assets/page1.jpg", "assets/page2.jpg"],
        info: {
            owner: "Kementerian Perhubungan",
            maincon: "PT. Pembangunan Perumahan",
            consultant: "PT. Angkasa Pura II",
            diameter: "1000 mm",
            totalDepth: "12.500 m (400 nos)",
            workDesc: "Pembangunan bandara internasional dengan kapasitas 20 juta penumpang per tahun."
        }
    },
    {
        title: "Proyek Pelabuhan Patimban",
        images: ["assets/page1.jpg", "assets/page2.jpg", "assets/page3.jpg"],
        info: {
            owner: "PT. Pelabuhan Indonesia II",
            maincon: "PT. Wijaya Karya",
            consultant: "PT. Nindya Karya",
            diameter: "900 mm",
            totalDepth: "8.000 m (250 nos)",
            workDesc: "Pembangunan pelabuhan kontainer dengan kapasitas 7,5 juta TEUs per tahun."
        }
    },
    {
        title: "Proyek MRT Jakarta Fase 2",
        images: ["assets/page1.jpg", "assets/page2.jpg", "assets/page3.jpg"],
        info: {
            owner: "PT. MRT Jakarta",
            maincon: "PT. Wijaya Karya",
            consultant: "PT. Hutama Karya",
            diameter: "700 mm",
            totalDepth: "9.000 m (280 nos)",
            workDesc: "Pembangunan jalur MRT sepanjang 12 km dengan 7 stasiun."
        }
    },
    {
        title: "Proyek PLTU Jawa 7",
        images: ["assets/page1.jpg", "assets/page2.jpg", "assets/page3.jpg"],
        info: {
            owner: "PT. PLN",
            maincon: "PT. Pembangunan Perumahan",
            consultant: "PT. Nindya Karya",
            diameter: "850 mm",
            totalDepth: "11.000 m (350 nos)",
            workDesc: "Pembangunan pembangkit listrik tenaga uap dengan kapasitas 2x1000 MW."
        }
    },
    {
        title: "Proyek Bendungan Jatigede",
        images: ["assets/page1.jpg", "assets/page2.jpg", "assets/page3.jpg"],
        info: {
            owner: "Kementerian PUPR",
            maincon: "PT. Adhi Karya",
            consultant: "PT. Wijaya Karya",
            diameter: "1100 mm",
            totalDepth: "14.000 m (450 nos)",
            workDesc: "Pembangunan bendungan dengan kapasitas tampung 980 juta m³."
        }
    },
    {
        title: "Proyek Gedung Perkantoran CBD Jakarta",
        images: ["assets/page1.jpg", "assets/page2.jpg", "assets/page3.jpg"],
        info: {
            owner: "PT. Danayasa Arthatama",
            maincon: "PT. Waskita Karya",
            consultant: "PT. Hutama Karya",
            diameter: "750 mm",
            totalDepth: "7.500 m (240 nos)",
            workDesc: "Pembangunan gedung perkantoran 30 lantai di kawasan CBD Jakarta."
        }
    },
    {
        title: "Proyek Apartemen Taman Anggrek",
        images: ["assets/page1.jpg", "assets/page2.jpg", "assets/page3.jpg"],
        info: {
            owner: "PT. Agung Podomoro Land",
            maincon: "PT. Pembangunan Perumahan",
            consultant: "PT. Nindya Karya",
            diameter: "650 mm",
            totalDepth: "6.000 m (200 nos)",
            workDesc: "Pembangunan apartemen 25 lantai dengan fasilitas lengkap."
        }
    },
    {
        title: "Proyek Jalan Tol Semarang-Solo",
        images: ["assets/page1.jpg", "assets/page2.jpg", "assets/page3.jpg"],
        info: {
            owner: "PT. Jasa Marga",
            maincon: "PT. Waskita Karya",
            consultant: "PT. Hutama Karya",
            diameter: "950 mm",
            totalDepth: "13.000 m (420 nos)",
            workDesc: "Pembangunan jalan tol sepanjang 75 km dengan 4 jalur."
        }
    },
    {
        title: "Proyek Stadion Gelora Bung Karno",
        images: ["assets/page1.jpg", "assets/page2.jpg", "assets/page3.jpg"],
        info: {
            owner: "Kementerian PUPR",
            maincon: "PT. Adhi Karya",
            consultant: "PT. Wijaya Karya",
            diameter: "800 mm",
            totalDepth: "10.500 m (330 nos)",
            workDesc: "Renovasi stadion dengan kapasitas 82.000 penonton."
        }
    },
    {
        title: "Proyek Pusat Perbelanjaan Grand Indonesia",
        images: ["assets/page1.jpg", "assets/page2.jpg", "assets/page3.jpg"],
        info: {
            owner: "PT. Djarum",
            maincon: "PT. Waskita Karya",
            consultant: "PT. Hutama Karya",
            diameter: "700 mm",
            totalDepth: "8.500 m (270 nos)",
            workDesc: "Pembangunan pusat perbelanjaan 10 lantai dengan area parkir bawah tanah."
        }
    },
    {
        title: "Proyek Hotel Bintang 5 di Bali",
        images: ["assets/page1.jpg", "assets/page2.jpg", "assets/page3.jpg"],
        info: {
            owner: "PT. Bali Tourism Development",
            maincon: "PT. Pembangunan Perumahan",
            consultant: "PT. Nindya Karya",
            diameter: "600 mm",
            totalDepth: "5.500 m (180 nos)",
            workDesc: "Pembangunan hotel bintang 5 dengan 300 kamar dan fasilitas mewah."
        }
    },
    {
        title: "Proyek Pabrik Semen di Jawa Timur",
        images: ["assets/page1.jpg", "assets/page2.jpg", "assets/page3.jpg"],
        info: {
            owner: "PT. Semen Indonesia",
            maincon: "PT. Wijaya Karya",
            consultant: "PT. Hutama Karya",
            diameter: "1200 mm",
            totalDepth: "16.000 m (520 nos)",
            workDesc: "Pembangunan pabrik semen dengan kapasitas produksi 5 juta ton per tahun."
        }
    },
    {
        title: "Proyek Pembangkit Listrik Tenaga Surya",
        images: ["assets/page1.jpg", "assets/page2.jpg", "assets/page3.jpg"],
        info: {
            owner: "PT. PLN",
            maincon: "PT. Waskita Karya",
            consultant: "PT. Nindya Karya",
            diameter: "500 mm",
            totalDepth: "4.000 m (130 nos)",
            workDesc: "Pembangunan pembangkit listrik tenaga surya dengan kapasitas 100 MW."
        }
    },
    {
        title: "Proyek Rumah Sakit Umum Daerah",
        images: ["assets/page1.jpg", "assets/page2.jpg", "assets/page3.jpg"],
        info: {
            owner: "Pemerintah Provinsi Jawa Barat",
            maincon: "PT. Adhi Karya",
            consultant: "PT. Wijaya Karya",
            diameter: "850 mm",
            totalDepth: "9.500 m (310 nos)",
            workDesc: "Pembangunan rumah sakit umum dengan kapasitas 500 tempat tidur."
        }
    }
];

let currentPage = 1;
const projectsPerPage = 4;
let intervalIds = {}; // Simpan ID interval untuk setiap proyek
let modalIntervalId = null; // Simpan ID interval untuk modal

// Function to render projects
function renderProjects(page) {
    const projectGrid = document.getElementById("project-grid");
    projectGrid.innerHTML = ""; // Clear existing content

    const start = (page - 1) * projectsPerPage;
    const end = start + projectsPerPage;
    const projectsToShow = projects.slice(start, end);

    projectsToShow.forEach((project, index) => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.images[0]}" alt="${project.title}">
            </div>
            <div class="project-details">
                <h3>${project.title}</h3>
                <div class="project-info">
                    <p><strong>Owner:</strong> ${project.info.owner}</p>
                    <p><strong>Maincon:</strong> ${project.info.maincon}</p>
                    <p><strong>Consultant:</strong> ${project.info.consultant}</p>
                    <p><strong>Diameter:</strong> ${project.info.diameter}</p>
                    <p><strong>Total Depth:</strong> ${project.info.totalDepth}</p>
                    <p><strong>Work Desc:</strong> ${project.info.workDesc}</p>
                </div>
            </div>
        `;

        const projectImage = projectCard.querySelector(".project-image img");
        let currentImageIndex = 0;

        // Start automatic image slider for each project
        const intervalId = setInterval(() => {
            currentImageIndex = (currentImageIndex + 1) % project.images.length;
            projectImage.src = project.images[currentImageIndex];
        }, 3000); // Change image every 3 seconds

        // Save the interval ID for this project
        intervalIds[index] = intervalId;

        // Stop the interval when the project is clicked
        projectCard.addEventListener("click", () => {
            clearInterval(intervalIds[index]); // Hentikan interval
            openModal(project);
        });

        projectGrid.appendChild(projectCard);
    });

    updatePaginationButtons();
}

// Function to open modal
function openModal(project) {
    const modal = document.getElementById("projectModal");
    const modalImage = document.getElementById("modalImage");
    const modalTitle = document.getElementById("modalTitle");
    const modalInfo = document.getElementById("modalInfo");

    let currentImageIndex = 0;
    modalImage.src = project.images[currentImageIndex]; // Tampilkan gambar pertama
    modalTitle.textContent = project.title;
    modalInfo.innerHTML = `
        <p><strong>Owner:</strong> ${project.info.owner}</p>
        <p><strong>Maincon:</strong> ${project.info.maincon}</p>
        <p><strong>Consultant:</strong> ${project.info.consultant}</p>
        <p><strong>Diameter:</strong> ${project.info.diameter}</p>
        <p><strong>Total Depth:</strong> ${project.info.totalDepth}</p>
        <p><strong>Work Desc:</strong> ${project.info.workDesc}</p>
    `;
    modal.style.display = "flex";

    // Hentikan semua interval saat modal dibuka
    Object.values(intervalIds).forEach(intervalId => clearInterval(intervalId));

    // Mulai interval untuk mengubah gambar di modal
    modalIntervalId = setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % project.images.length;
        modalImage.src = project.images[currentImageIndex];
    }, 3000); // Change image every 3 seconds
}

// Function to close modal
function closeModal() {
    const modal = document.getElementById("projectModal");
    modal.style.display = "none";

    // Hentikan interval modal
    clearInterval(modalIntervalId);

    // Mulai ulang interval untuk semua proyek setelah modal ditutup
    renderProjects(currentPage);
}

// Update Pagination Buttons
function updatePaginationButtons() {
    const totalPages = Math.ceil(projects.length / projectsPerPage);
    const paginationContainer = document.querySelector('.pagination');
    paginationContainer.innerHTML = '';

    // Prev Button
    const prevButton = document.createElement('button');
    prevButton.innerText = 'Prev';
    prevButton.disabled = currentPage === 1;
    prevButton.addEventListener('click', () => changePage(-1));
    paginationContainer.appendChild(prevButton);

    // Page Buttons
    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.innerText = i;
        pageButton.classList.add('page-btn');
        if (i === currentPage) {
            pageButton.classList.add('active');
        }
        pageButton.addEventListener('click', () => goToPage(i));
        paginationContainer.appendChild(pageButton);
    }

    // Next Button
    const nextButton = document.createElement('button');
    nextButton.innerText = 'Next';
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener('click', () => changePage(1));
    paginationContainer.appendChild(nextButton);
}

// Change Page
function changePage(direction) {
    const totalPages = Math.ceil(projects.length / projectsPerPage);
    currentPage += direction;

    // Ensure currentPage is within valid range
    if (currentPage < 1) currentPage = 1;
    if (currentPage > totalPages) currentPage = totalPages;

    renderProjects(currentPage);
}

// Go to Specific Page
function goToPage(page) {
    currentPage = page;
    renderProjects(currentPage);
}

// Initialize the page
document.addEventListener("DOMContentLoaded", function() {
    renderProjects(currentPage);
});