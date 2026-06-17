// Menu Filter + Search Functionality
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');
const menuCards = document.querySelectorAll('.menu-card');

// Category Filter
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active-btn'));
        btn.classList.add('active-btn');
        
        const category = btn.getAttribute('data-category');
        
        menuCards.forEach(card => {
            if (category === 'all' || card.getAttribute('data-category') === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Search Function
if (searchInput) {
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        
        menuCards.forEach(card => {
            const foodName = card.querySelector('h3').textContent.toLowerCase();
            if (foodName.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
        
        filterBtns.forEach(b => b.classList.remove('active-btn'));
        document.querySelector('[data-category="all"]').classList.add('active-btn');
    });
}
