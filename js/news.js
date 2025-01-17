const newsData = [
    { id: 1, title: "Inauguration of PT. Aneka Jaringan Indonesia's New Pool", date: "Thursday, September 19, 2024", image: "assets/news1-1.jpg", 
        content: "PT. Aneka Jaringan Indonesia officially inaugurated its new pool on Thursday, September 19, 2024, located on Jl. Mekarsari, Cileungsi. The inauguration was attended by the board of directors, managers, the entire pool team, and several field teams. The establishment of this new pool marks a significant step in the operational development of PT. AJI, reflecting the company's commitment to enhancing its infrastructure and supporting its growing projects." },
    { id: 2, title: "PT. AJI Offers Free Employee Medical Check-Up", date: "Wednesday, October 23, 2024", image: "assets/news2.jpg", 
        content: "PT. Aneka Jaringan Indonesia demonstrates its commitment to employee health and well-being by organizing a free medical check-up program. This initiative aims to ensure the optimal health condition of all employees while supporting early detection and prevention of potential health issues. The check-up includes comprehensive examinations such as blood tests, blood pressure checks, and doctor consultations. This program is expected to enhance employee productivity and overall quality of life at PT. Aneka Jaringan Indonesia." },
    { id: 3, title: "A Memorable Birthday Luncheon for Tung Sin Thian", date: "Sunday, September 22, 2024", image: "assets/news3-1.jpg", 
        content: "PT. Aneka Jaringan Indonesia recently held a special dining event to celebrate the birthday of its Director, Tung Sin Thian. The celebration took place at the prestigious Klub Kelapa Gading, attended by colleagues and close associates. The event was filled with joy, delicious food, and warm wishes, reflecting the strong camaraderie within the company. This celebration not only honored Mr. Tung’s leadership but also strengthened the bond among the PT. AJI family." },
    { id: 4, title: "Joyful Moments at a Christmas Gift Exchange Event", date: "Thursday, December 19, 2024", image: "assets/news4-1.jpg", 
        content: "PT. Aneka Jaringan Indonesia held a lively Christmas gift exchange event, bringing joy and surprises to all employees. The event was filled with laughter, togetherness, and moments of sharing happiness as the year comes to an end. Each participant brought a unique gift, creating a warm and cheerful atmosphere. This event showcased the strong bond within the PT. AJI family in celebrating the spirit of Christmas." },
    { id: 5, title: "New Year’s Eve Dinner Celebrates Joy and Togetherness", date: "Friday, December 27, 2024", image: "assets/news5.jpg", 
        content: "A cozy dinner event was held to welcome the New Year with joy and warmth. Attended by all employees and management of PT. AJI, the evening created special moments of togetherness as the year came to a close. With delicious food and a relaxed atmosphere, the event became a time to reflect on the year’s achievements and welcome the coming year with renewed enthusiasm." },
    { id: 6, title: "Stay Active! PT. AJI’s Weekly Badminton Event", date: "Friday, January 10, 2025", image: "assets/news6.png", 
        content: "PT. AJI organizes a weekly badminton event as part of its employee health and fitness program. This activity not only promotes physical well-being but also strengthens team bonding through sportsmanship. Every week, participants enjoy exciting and energetic matches, fostering a healthy and enjoyable work environment." },
];

let currentPage = 1;
const itemsPerPage = 6;

// Function to convert date string to Date object
function parseDate(dateStr) {
    const months = {
        January: 0, February: 1, March: 2, April: 3, May: 4, June: 5,
        July: 6, August: 7, September: 8, October: 9, November: 10, December: 11
    };
    const parts = dateStr.split(' ');
    const month = months[parts[2]];
    const day = parseInt(parts[1].replace(',', ''), 10);
    const year = parseInt(parts[3], 10);
    return new Date(year, month, day);
}

// Sort newsData by date in descending order
const sortedNewsData = [...newsData].sort((a, b) => parseDate(b.date) - parseDate(a.date));

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
    const totalPages = Math.ceil(sortedNewsData.length / itemsPerPage);
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
    const totalPages = Math.ceil(sortedNewsData.length / itemsPerPage);
    currentPage += direction;

    // Ensure currentPage is within valid range
    if (currentPage < 1) currentPage = 1;
    if (currentPage > totalPages) currentPage = totalPages;

    // Render news for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    renderNews(sortedNewsData.slice(startIndex, endIndex));

    // Update pagination buttons
    updatePaginationButtons();
}

// Search Function
function searchNews() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filteredNews = sortedNewsData.filter(item => item.title.toLowerCase().includes(query) || item.content.toLowerCase().includes(query));
    currentPage = 1; // Reset to first page after search
    renderNews(filteredNews.slice(0, itemsPerPage));
    updatePaginationButtons();
}

// Filter by Year
function filterByYear() {
    const year = document.getElementById('yearFilter').value;
    const filteredNews = year ? sortedNewsData.filter(item => item.date.includes(year)) : sortedNewsData;
    currentPage = 1; // Reset to first page after filter
    renderNews(filteredNews.slice(0, itemsPerPage));
    updatePaginationButtons();
}

// Modal Functions
function openModal(id) {
    const news = sortedNewsData.find(item => item.id === id);
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
renderNews(sortedNewsData.slice(0, itemsPerPage));
updatePaginationButtons();