const newsData = [
    { id: 1, title: "Inauguration of PT. Aneka Jaringan Indonesia's New Pool", date: "Thursday, September 19, 2024", image: "assets/news1.jpg", 
        content: "PT. Aneka Jaringan Indonesia officially inaugurated its new pool on Thursday, September 19, 2024, located on Jl. Mekarsari, Cileungsi. The inauguration was attended by the board of directors, managers, the entire pool team, and several field teams. The establishment of this new pool marks a significant step in the operational development of PT. AJI, reflecting the company's commitment to enhancing its infrastructure and supporting its growing projects." },
    { id: 2, title: "Inauguration of the New Pool", date: "Thursday, September 19, 2023", image: "assets/image2.jpg", 
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
    { id: 3, title: "New Office Building Inauguration", date: "Monday, August 12, 2023", image: "assets/image3.jpg", 
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
    { id: 4, title: "Completion of Highway Project", date: "Friday, July 5, 2023", image: "assets/image1.jpg", 
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
    { id: 5, title: "New Partnership Announcement", date: "Wednesday, June 19, 2022", image: "assets/image2.jpg", 
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
    { id: 6, title: "Community Outreach Program", date: "Tuesday, May 28, 2022", image: "assets/image3.jpg", 
        content: "PT. Aneka Jaringan Indonesia Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. a community outreach program..." },
    { id: 7, title: "New Infrastructure Development", date: "Monday, April 15, 2024", image: "assets/image1.jpg", 
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
    { id: 8, title: "Expansion of Jakarta Office", date: "Friday, March 22, 2024", image: "assets/image2.jpg", 
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
    { id: 9, title: "New Training Program for Employees", date: "Wednesday, February 14, 2024", image: "assets/image3.jpg", 
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
    { id: 10, title: "Completion of Surabaya Project", date: "Tuesday, January 30, 2024", image: "assets/image1.jpg", 
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
    { id: 11, title: "New Partnership with Local Government", date: "Monday, December 18, 2023", image: "assets/image2.jpg", 
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
    { id: 12, title: "New Year Celebration Event", date: "Friday, December 31, 2023", image: "assets/image3.jpg", 
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
];

let currentPage = 1;
const itemsPerPage = 6;

// Render News
function renderNews(news) {
    const newsContainer = document.querySelector('.news-container');
    newsContainer.innerHTML = '';
    news.forEach(item => {
        const newsItem = `
            <div class="news-item">
                <div class="news-image-wrapper">
                    <img src="${item.image}" alt="News Image">
                </div>
                <div class="news-content">
                    <div class="news-date">${item.date}</div>
                    <div class="news-title">${item.title}</div>
                    <div class="news-description">${item.content.substring(0, 150)}...</div>
                    <a href="#" class="read-more-btn" onclick="openModal(${item.id})">READ MORE</a>
                </div>
            </div>
        `;
        newsContainer.innerHTML += newsItem;
    });
}

// Update Pagination Buttons
function updatePaginationButtons() {
    const totalPages = Math.ceil(newsData.length / itemsPerPage);
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
        pageButton.addEventListener('click', () => changePage(i - currentPage));
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
    const totalPages = Math.ceil(newsData.length / itemsPerPage);
    currentPage += direction;

    // Ensure currentPage is within valid range
    if (currentPage < 1) currentPage = 1;
    if (currentPage > totalPages) currentPage = totalPages;

    // Render news for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    renderNews(newsData.slice(startIndex, endIndex));

    // Update pagination buttons
    updatePaginationButtons();
}

// Search Function
function searchNews() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filteredNews = newsData.filter(item => item.title.toLowerCase().includes(query) || item.content.toLowerCase().includes(query));
    currentPage = 1; // Reset to first page after search
    renderNews(filteredNews.slice(0, itemsPerPage));
    updatePaginationButtons();
}

// Filter by Year
function filterByYear() {
    const year = document.getElementById('yearFilter').value;
    const filteredNews = year ? newsData.filter(item => item.date.includes(year)) : newsData;
    currentPage = 1; // Reset to first page after filter
    renderNews(filteredNews.slice(0, itemsPerPage));
    updatePaginationButtons();
}

// Modal Functions
function openModal(id) {
    const news = newsData.find(item => item.id === id);
    document.getElementById('modalTitle').innerText = news.title;
    document.getElementById('modalDate').innerText = news.date;
    document.getElementById('modalImage').src = news.image;
    document.getElementById('modalContent').innerText = news.content;
    document.getElementById('newsModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('newsModal').style.display = 'none';
}

// Initial Render
renderNews(newsData.slice(0, itemsPerPage));
updatePaginationButtons();