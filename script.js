// Data Buku Sample
const booksData = [
    {
        id: 1,
        title: "Laskar Pelangi",
        author: "Andrea Hirata",
        category: "fiksi",
        year: 2005,
        cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        available: true,
        isbn: "978-979-3062-79-8"
    },
    {
        id: 2,
        title: "Fisika Dasar untuk SMA Kelas X",
        author: "Dr. Bambang Hidayat",
        category: "pelajaran",
        year: 2023,
        cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        available: true,
        isbn: "978-602-8519-64-3"
    },
    {
        id: 3,
        title: "Sejarah Indonesia Modern",
        author: "Prof. Dr. M.C. Ricklefs",
        category: "referensi",
        year: 2019,
        cover: "https://images.unsplash.com/photo-1531346688376-ab6275c4725e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        available: false,
        isbn: "978-979-421-123-4"
    },
    {
        id: 4,
        title: "Pelajaran Agama Katolik",
        author: "Tim Guru Agama",
        category: "agama",
        year: 2024,
        cover: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        available: true,
        isbn: "978-623-456-789-0"
    },
    {
        id: 5,
        title: "Matematika untuk SMA",
        author: "Prof. Dr. Sukanto",
        category: "pelajaran",
        year: 2024,
        cover: "https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        available: true,
        isbn: "978-602-8519-65-0"
    },
    {
        id: 6,
        title: "Bumi Manusia",
        author: "Pramoedya Ananta Toer",
        category: "fiksi",
        year: 1980,
        cover: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        available: false,
        isbn: "978-979-97312-3-8"
    },
    {
        id: 7,
        title: "Biologi Molekuler",
        author: "Dr. Siti Nurhaliza",
        category: "referensi",
        year: 2022,
        cover: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        available: true,
        isbn: "978-602-432-987-6"
    },
    {
        id: 8,
        title: "Kimia Organik Dasar",
        author: "Prof. Dr. Ahmad Yani",
        category: "pelajaran",
        year: 2023,
        cover: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        available: true,
        isbn: "978-602-8519-67-4"
    },
    {
        id: 9,
        title: "Doa dan Renungan Harian",
        author: "Sr. M. Bernadetti OSF",
        category: "agama",
        year: 2020,
        cover: "https://images.unsplash.com/photo-1544716278-1a9c8e26fea7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        available: true,
        isbn: "978-623-123-456-7"
    },
    {
        id: 10,
        title: "Panduan Kurikulum Merdeka",
        author: "Tim Penggerak",
        category: "referensi",
        year: 2024,
        cover: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        available: true,
        isbn: "978-602-987-654-3"
    }
];

// DOM Elements
const booksContainer = document.getElementById('booksContainer');
const bookSearch = document.getElementById('bookSearch');
const categoryFilter = document.getElementById('categoryFilter');
const availabilityFilter = document.getElementById('availabilityFilter');
const searchBtn = document.getElementById('searchBtn');
const loanBtn = document.getElementById('loanBtn');
const loanStatus = document.getElementById('loanStatus');
const studentIdInput = document.getElementById('studentId');
const bookIdInput = document.getElementById('bookId');
const galleryTabs = document.querySelectorAll('.tab-btn');
const galleryItems = document.querySelectorAll('.gallery-item');
const mobileMenu = document.querySelector('.mobile-menu');
const navMenu = document.querySelector('.nav-menu');
const backToTop = document.getElementById('backToTop');

// Initialize Books
function initializeBooks() {
    renderBooks(booksData);
}

// Render Books
function renderBooks(books) {
    booksContainer.innerHTML = '';
    
    books.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        
        bookCard.innerHTML = `
            <div class="book-cover">
                <img src="${book.cover}" alt="${book.title}">
            </div>
            <div class="book-info">
                <h3 class="book-title">${book.title}</h3>
                <p class="book-author">${book.author} • ${book.year}</p>
                <p class="book-isbn"><small>ISBN: ${book.isbn}</small></p>
                <div class="book-meta">
                    <span class="book-category">${getCategoryName(book.category)}</span>
                    <span class="book-availability ${book.available ? 'available' : 'borrowed'}">
                        ${book.available ? 'Tersedia' : 'Dipinjam'}
                    </span>
                </div>
            </div>
        `;
        
        booksContainer.appendChild(bookCard);
    });
}

// Get Category Name
function getCategoryName(category) {
    const categories = {
        'fiksi': 'Fiksi',
        'non-fiksi': 'Non-Fiksi',
        'pelajaran': 'Buku Pelajaran',
        'referensi': 'Referensi',
        'agama': 'Agama'
    };
    
    return categories[category] || category;
}

// Filter Books
function filterBooks() {
    const searchTerm = bookSearch.value.toLowerCase();
    const category = categoryFilter.value;
    const availability = availabilityFilter.value;
    
    const filteredBooks = booksData.filter(book => {
        const matchesSearch = book.title.toLowerCase().includes(searchTerm) ||
                            book.author.toLowerCase().includes(searchTerm) ||
                            book.isbn.toLowerCase().includes(searchTerm);
        
        const matchesCategory = !category || book.category === category;
        const matchesAvailability = !availability || 
                                  (availability === 'available' && book.available) ||
                                  (availability === 'borrowed' && !book.available);
        
        return matchesSearch && matchesCategory && matchesAvailability;
    });
    
    renderBooks(filteredBooks);
}

// Loan Book Function
function loanBook() {
    const studentId = studentIdInput.value.trim();
    const bookId = bookIdInput.value.trim();
    
    if (!studentId || !bookId) {
        showLoanStatus('Harap isi NIS dan ID Buku!', 'error');
        return;
    }
    
    const book = booksData.find(b => b.id === parseInt(bookId));
    
    if (!book) {
        showLoanStatus('Buku dengan ID tersebut tidak ditemukan!', 'error');
        return;
    }
    
    if (!book.available) {
        showLoanStatus('Buku sedang dipinjam!', 'error');
        return;
    }
    
    // Simulate loan process
    book.available = false;
    showLoanStatus(`Buku "${book.title}" berhasil dipinjam oleh siswa NIS: ${studentId}`, 'success');
    
    // Update book display
    filterBooks();
    
    // Clear inputs
    studentIdInput.value = '';
    bookIdInput.value = '';
    
    // Save to localStorage
    saveLoanToLocalStorage(studentId, bookId);
}

// Show Loan Status
function showLoanStatus(message, type) {
    loanStatus.textContent = message;
    loanStatus.className = `loan-status ${type}`;
    
    setTimeout(() => {
        loanStatus.style.display = 'none';
    }, 5000);
}

// Save Loan to Local Storage
function saveLoanToLocalStorage(studentId, bookId) {
    const loans = JSON.parse(localStorage.getItem('libraryLoans') || '[]');
    loans.push({
        studentId,
        bookId,
        date: new Date().toISOString(),
        returned: false
    });
    localStorage.setItem('libraryLoans', JSON.stringify(loans));
}

// Gallery Filter
function filterGallery(category) {
    galleryItems.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Smooth Scroll
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth'
        });
    }
}

// Back to Top
function toggleBackToTop() {
    if (window.scrollY > 300) {
        backToTop.style.display = 'flex';
    } else {
        backToTop.style.display = 'none';
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Initialize books
    initializeBooks();
    
    // Search and filter events
    bookSearch.addEventListener('input', filterBooks);
    categoryFilter.addEventListener('change', filterBooks);
    availabilityFilter.addEventListener('change', filterBooks);
    searchBtn.addEventListener('click', filterBooks);
    
    // Loan system
    loanBtn.addEventListener('click', loanBook);
    
    // Gallery tabs
    galleryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            galleryTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            filterGallery(tab.dataset.category);
        });
    });
    
    // Navigation
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('href');
            smoothScroll(target);
            
            // Update active nav
            document.querySelectorAll('.nav-menu a').forEach(a => a.classList.remove('active'));
            link.classList.add('active');
        });
    });
    
    // Mobile menu
    mobileMenu.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        if (navMenu.style.display === 'flex') {
            navMenu.style.flexDirection = 'column';
            navMenu.style.position = 'absolute';
            navMenu.style.top = '100%';
            navMenu.style.left = '0';
            navMenu.style.right = '0';
            navMenu.style.background = 'var(--primary-blue)';
            navMenu.style.padding = '20px';
            navMenu.style.borderRadius = '0 0 15px 15px';
        }
    });
    
    // Back to top
    window.addEventListener('scroll', toggleBackToTop);
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Close mobile menu on resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navMenu.style.display = 'flex';
            navMenu.style.flexDirection = 'row';
            navMenu.style.position = 'static';
            navMenu.style.background = 'transparent';
            navMenu.style.padding = '0';
        } else {
            navMenu.style.display = 'none';
        }
    });
    
    // Initialize
    toggleBackToTop();
});

// Map button functionality
document.querySelectorAll('.btn-map').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const mapUrl = button.getAttribute('href');
        window.open(mapUrl, '_blank');
    });
});

// Add active class to nav on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Additional Features
// 1. Random book recommendation
function getRandomBookRecommendation() {
    const availableBooks = booksData.filter(book => book.available);
    if (availableBooks.length > 0) {
        const randomBook = availableBooks[Math.floor(Math.random() * availableBooks.length)];
        return `Coba baca: "${randomBook.title}" oleh ${randomBook.author}`;
    }
    return "Semua buku sedang dipinjam!";
}

// 2. Count available books
function countAvailableBooks() {
    return booksData.filter(book => book.available).length;
}

// 3. Initialize loan history from localStorage
function initializeLoanHistory() {
    const loans = JSON.parse(localStorage.getItem('libraryLoans') || '[]');// DOM Elements
const mobileMenu = document.querySelector('.mobile-menu');
const navMenu = document.querySelector('.nav-menu');
const backToTop = document.getElementById('backToTop');
const shelfCards = document.querySelectorAll('.shelf-card');

// Smooth Scroll
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (window.innerWidth <= 768) {
            navMenu.classList.remove('active');
        }
    }
}

// Back to Top
function toggleBackToTop() {
    if (window.scrollY > 300) {
        backToTop.style.display = 'flex';
    } else {
        backToTop.style.display = 'none';
    }
}

// Shelf Card Click Effect
function setupShelfCards() {
    shelfCards.forEach(card => {
        card.addEventListener('click', function() {
            // Remove active class from all cards
            shelfCards.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked card
            this.classList.add('active');
            
            // Get shelf type
            const shelfType = this.getAttribute('data-shelf');
            
            // Show feedback
            showShelfMessage(shelfType);
        });
    });
}

// Show shelf selection message
function showShelfMessage(shelfType) {
    const shelfNames = {
        'fiksi': 'Rak Fiksi',
        'pelajaran': 'Rak Pelajaran',
        'agama': 'Rak Agama',
        'sains': 'Rak Sains',
        'referensi': 'Rak Referensi',
        'sejarah': 'Rak Sejarah'
    };
    
    const shelfName = shelfNames[shelfType] || 'Rak Buku';
    
    // Create toast message
    const toast = document.createElement('div');
    toast.className = 'shelf-toast';
    toast.innerHTML = `
        <div class="toast-content">
            <i class="fas fa-check-circle"></i>
            <span>Anda memilih ${shelfName}</span>
        </div>
    `;
    
    // Add styles for toast
    toast.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 20px;
        background: linear-gradient(135deg, var(--primary-blue) 0%, var(--dark-blue) 100%);
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        animation: slideIn 0.3s ease;
        max-width: 300px;
    `;
    
    document.body.appendChild(toast);
    
    // Remove toast after 3 seconds
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Add CSS animations for toast
function addToastStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
        
        .shelf-toast .toast-content {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .shelf-toast i {
            color: #f59e0b;
            font-size: 1.2rem;
        }
        
        .shelf-card.active {
            border-top: 5px solid #f59e0b;
            transform: scale(1.02);
        }
    `;
    document.head.appendChild(style);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Add toast styles
    addToastStyles();
    
    // Setup shelf cards
    setupShelfCards();
    
    // Mobile menu
    mobileMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    
    // Navigation
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('href');
            smoothScroll(target);
            
            // Update active nav
            document.querySelectorAll('.nav-menu a').forEach(a => a.classList.remove('active'));
            link.classList.add('active');
        });
    });
    
    // Back to top
    window.addEventListener('scroll', toggleBackToTop);
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Close mobile menu on resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navMenu.classList.remove('active');
        }
    });
    
    // Add active class to nav on scroll
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-menu a');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Initialize
    toggleBackToTop();
    
    // Welcome message
    console.log(`%c📚 SELAMAT DATANG DI PERPUSTAKAAN SMA MARSUDIRINI BEKASI`, 
        "color: #1e3a8a; font-weight: bold; font-size: 14px;");
    console.log(`%c🏫 "Membaca Membuka Jendela Dunia"`, 
        "color: #f59e0b; font-size: 12px; font-style: italic;");
});

// Preload images for better UX
function preloadImages() {
    const images = [
        'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    ];
    
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Start preloading
preloadImages();
    console.log(`Total peminjaman: ${loans.length}`);
}

// Call initialization functions
initializeLoanHistory();

// Show random recommendation in console on load
console.log("%c📚 Rekomendasi Buku:", "color: #1e3a8a; font-weight: bold; font-size: 14px");
console.log(`%c${getRandomBookRecommendation()}`, "color: #3b82f6; font-size: 12px");
console.log(`%c📖 Total buku tersedia: ${countAvailableBooks()} dari ${booksData.length}`, "color: #10b981; font-size: 12px");