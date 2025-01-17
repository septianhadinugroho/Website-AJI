const projects = [
    {
        title: "Proyek Sarulla Geothermal",
        images: ["assets/page1.jpg", "assets/page2.jpg", "assets/page3.jpg"],
        longDesc: "This project involves the installation of conductor pipes to support the development of geothermal energy. PT. Aneka Jaringan Indonesia plays a crucial role in ensuring the smooth and stable installation of conductor pipes in this challenging location. The project is an essential part of Indonesia's efforts to increase the use of renewable energy and support the development of the energy sector in North Sumatra.",
        info: {
            client: "PT. Jasa Marga",
            diameter: "24'",
            totalLength: "105 m’",
            workDesc: "Conductor Pipe Installation"
        }
    },
    {
        title: "Proyek Renovasi Masjid Istiqlal",
        images: ["assets/signature-masjid1.jpg", "assets/signature-masjid2.jpg", "assets/signature-masjid3.jpg"],
        longDesc: "PT. Aneka Jaringan Indonesia has successfully completed the foundation work for the Istiqlal Mosque renovation project, achieving the largest installation of bored piles and secant piles in the company's history, with a total drilling length of 31,865 meters. This accomplishment not only demonstrates excellence in foundation construction but also highlights PT. Aneka Jaringan Indonesia's significant contribution to strengthening one of Indonesia's largest places of worship.",
        info: {
            client: "PT. Waskita Karya (Persero) Tbk",
            diameter: "800 mm",
            totalLength: "31.865 m’",
            workDesc: "Bored Pile & Secant Pile"
        }
    },
    {
        title: "Proyek DDT Manggarai",
        images: ["assets/page3.jpg", "assets/page1.jpg", "assets/page2.jpg"],
        longDesc: "In the Manggarai-Jatinegara railway facility development project (Package A) Phase II, PT. Aneka Jaringan Indonesia successfully completed the Main Line II work with a diameter of 1200 mm, despite being located in the heart of a densely populated urban area. Facing challenges such as difficult equipment mobilization and a densely populated environment around the project site, PT. Aneka Jaringan Indonesia managed to overcome all obstacles. The expertise and precision of the AJI team ensured that this foundation work was completed on time and met all standards, supporting the smooth development of transportation infrastructure in Jakarta.",
        info: {
            client: "PT. Waskita Karya (Persero) Tbk",
            diameter: "1200 mm",
            totalLength: "17.436 m’",
            workDesc: "Bored Pile"
        }
    },
    {
        title: "Proyek Sky House Alam Sutera+ Phase 2",
        images: ["assets/page1.jpg", "assets/page2.jpg", "assets/page3.jpg"],
        longDesc: "The Sky House Alam Sutera+ Phase 2 project is the largest contract-value building project ever undertaken by PT. Aneka Jaringan Indonesia. The foundation work for this project involved three different diameters and a large number of points. To address these challenges, PT. AJI utilized four drilling machines simultaneously, ensuring efficiency and speed in completing a strong and stable foundation. This approach supported the smooth construction of this magnificent building, showcasing PT. Aneka Jaringan Indonesia's capability in handling large-scale and complex projects.",
        info: {
            client: "PT. Risland Sutera Property",
            diameter: "600 mm, 800 mm, 1200 mm",
            totalLength: "16.000 m’",
            workDesc: "Bored Pile"
        }
    },
    {
        title: "Proyek Jalan Toll Harbour Road II",
        images: ["assets/signature-hbr2-1.jpg", "assets/signature-hbr2-2.jpg", "assets/signature-hbr2-3.jpg"],
        longDesc: "The Harbour Road II Toll Road project is the first project in northern Jakarta to involve foundation work with the largest diameter ever handled by PT. Aneka Jaringan Indonesia. This project marks a significant milestone in the company's history, presenting major challenges in constructing a strong and stable foundation to support the toll road infrastructure. Once completed, it will enhance connectivity in the North Jakarta area, demonstrating PT. Aneka Jaringan Indonesia's expertise in delivering complex and impactful infrastructure projects.",
        info: {
            client: "PT. Girder Indonesia",
            diameter: "1800 mm",
            totalLength: "9285 m’",
            workDesc: "Bored Pile"
        }
    },
    {
        title: "Proyek Upgrading Rinjani Way Batu Merah",
        images: ["assets/page1.jpg", "assets/page2.jpg", "assets/page3.jpg"],
        longDesc: "The Upgrading Rinjani Way Batu Merah project in Ambon marks PT. Aneka Jaringan Indonesia's first project in Eastern Indonesia. Given the remote and challenging location, the mobilization of heavy equipment required transportation by ship to ensure all machinery reached the project site. PT. Aneka's success in overcoming these geographical challenges highlights the company's capability to manage large-scale projects across all regions of Indonesia, including hard-to-reach areas. This achievement underscores PT. Aneka Jaringan Indonesia's commitment to delivering excellence and supporting infrastructure development throughout the archipelago.",
        info: {
            client: "Jaya Konstruksi Selaras KSO",
            diameter: "800 & 1000 mm",
            totalLength: "3600 m’",
            workDesc: "Secant Pile"
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
        <p><strong>Client:</strong> ${project.info.client}</p>
        <p><strong>Diameter:</strong> ${project.info.diameter}</p>
        <p><strong>Total Length:</strong> ${project.info.totalLength}</p>
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
document.addEventListener("DOMContentLoaded", function () {
    renderProjects(currentPage);
});