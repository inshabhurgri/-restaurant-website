// Mobile Menu Toggle - Day 1
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
}

// Menu Filter + Search Functionality - Day 2
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');
const foodCards = document.querySelectorAll('.food-card');

// Category Filter
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const category = btn.dataset.category;
        
        foodCards.forEach(card => {
            if (category === 'all' || card.dataset.category === category) {
                card.classList.remove('hide');
            } else {
                card.classList.add('hide');
            }
        });
    });
});

// Search Function
if (searchInput) {
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        
        foodCards.forEach(card => {
            const foodName = card.dataset.name.toLowerCase();
            if (foodName.includes(searchTerm)) {
                card.classList.remove('hide');
            } else {
                card.classList.add('hide');
            }
        });
        
        filterBtns.forEach(b => b.classList.remove('active'));
        document.querySelector('[data-category="all"]').classList.add('active');
    });
}
