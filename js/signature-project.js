const projects = [
    {
        title: "Proyek Sarulla Geothermal",
        images: ["assets/page1.jpg", "assets/page2.jpg", "assets/page3.jpg"],
        longDesc: "Proyek ini melibatkan instalasi pipa konduktor untuk mendukung pengembangan energi geothermal. PT. Aneka Jaringan Indonesia berperan penting dalam memastikan kelancaran dan stabilitas instalasi pipa konduktor di lokasi yang penuh tantangan ini. Proyek ini menjadi bagian penting dari upaya Indonesia untuk meningkatkan penggunaan energi terbarukan dan mendukung pengembangan sektor energi di wilayah Sumatera Utara.",
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
        longDesc: "PT. Aneka Jaringan Indonesia berhasil menyelesaikan pekerjaan pondasi pada proyek renovasi Masjid Istiqlal dengan pemasangan tiang bor (bored pile & secant pile) terbanyak sepanjang sejarah perusahaan, mencapai total panjang bor 31.865 meter. Pencapaian ini bukan hanya menunjukkan keunggulan dalam bidang konstruksi pondasi, tetapi juga kontribusi besar PT. Aneka Jaringan Indonesia dalam memperkuat salah satu tempat ibadah terbesar di Indonesia.",
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
        longDesc: "Dalam proyek pembangunan fasilitas perkeretaapian Manggarai-Jatinegara (Paket A) Tahap II, PT. Aneka Jaringan Indonesia berhasil menyelesaikan pekerjaan Main Line II berdiameter 1200 mm, meskipun terletak di tengah pusat kota yang padat. Dengan tantangan mobilisasi alat yang sulit serta lingkungan yang padat penduduk di sekitar proyek, PT. Aneka Jaringan Indonesia tetap mampu mengatasi semua hambatan tersebut. Keahlian dan ketelitian tim AJI memastikan pekerjaan pondasi ini selesai tepat waktu dan sesuai standar, mendukung kelancaran pembangunan infrastruktur transportasi di Jakarta.",
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
        longDesc: "Proyek Sky House Alam Sutera+ Phase 2 adalah proyek gedung dengan nilai kontrak terbesar yang pernah dikerjakan oleh PT. Aneka Jaringan Indonesia. Pekerjaan pondasi untuk proyek ini melibatkan tiga diameter berbeda dan jumlah titik yang banyak. Untuk mengatasi tantangan tersebut, PT. AJI menggunakan empat alat bor sekaligus, memastikan efisiensi dan kecepatan dalam penyelesaian pekerjaan pondasi yang kokoh dan stabil, mendukung kelancaran pembangunan gedung megah ini.",
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
        longDesc: "Proyek Jalan Tol Harbour Road II adalah proyek pertama di utara kota Jakarta yang melibatkan pekerjaan pondasi dengan diameter paling besar yang pernah dikerjakan oleh PT. Aneka Jaringan Indonesia. Proyek ini merupakan tonggak penting dalam sejarah perusahaan, menghadirkan tantangan besar dalam hal konstruksi pondasi yang kokoh dan stabil, untuk mendukung infrastruktur jalan tol yang akan memperlancar konektivitas di kawasan Jakarta Utara.",
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
        longDesc: "Proyek Upgrading Rinjani Way Batu Merah di Ambon menjadi proyek pertama PT. Aneka Jaringan Indonesia di Indonesia bagian Timur. Dengan tantangan lokasi yang jauh dan terpencil, mobilisasi alat berat harus melalui pengiriman menggunakan kapal agar seluruh alat berat dapat sampai di lokasi proyek. Keberhasilan PT. Aneka dalam mengatasi tantangan geografis ini menunjukkan kemampuan perusahaan dalam menangani proyek besar di seluruh wilayah Indonesia, termasuk di daerah-daerah yang sulit dijangkau.",
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