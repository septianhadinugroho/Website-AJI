const projects = [
    {
        title: "Proyek Jembatan Suramadu",
        images: ["assets/page1.jpg", "assets/page2.jpg", "assets/page3.jpg"],
        longDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
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
        longDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
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
        longDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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
        longDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
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
        longDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
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
        longDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        info: {
            owner: "PT. PLN",
            maincon: "PT. Pembangunan Perumahan",
            consultant: "PT. Nindya Karya",
            diameter: "850 mm",
            totalDepth: "11.000 m (350 nos)",
            workDesc: "Pembangunan pembangkit listrik tenaga uap dengan kapasitas 2x1000 MW."
        }
    }
];

let currentPage = 1;
const projectsPerPage = 2; // 2 proyek per halaman
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
                    <p>${project.longDesc}</p>
                    <button class="read-more-btn" onclick="openModal(${start + index})">Read More</button>
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
        intervalIds[start + index] = intervalId;

        projectGrid.appendChild(projectCard);
    });

    updatePaginationButtons();
}

function openModal(index) {
    const project = projects[index];
    const modal = document.getElementById("projectModal");
    const modalImage = document.getElementById("modalImage");
    const modalTitle = document.getElementById("modalTitle");
    const modalInfo = document.getElementById("modalInfo");

    let currentImageIndex = 0;
    modalImage.src = project.images[currentImageIndex]; // Tampilkan gambar pertama
    modalTitle.textContent = project.title;
    modalInfo.innerHTML = `
        <p>${project.longDesc}</p>
        <p><strong>Owner:</strong> ${project.info.owner}</p>
        <p><strong>Maincon:</strong> ${project.info.maincon}</p>
        <p><strong>Consultant:</strong> ${project.info.consultant}</p>
        <p><strong>Diameter:</strong> ${project.info.diameter}</p>
        <p><strong>Total Depth:</strong> ${project.info.totalDepth}</p>
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
document.addEventListener("DOMContentLoaded", function () {
    renderProjects(currentPage);
});