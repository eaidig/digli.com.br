// Initialize Lucide Icons
lucide.createIcons();

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Header Scroll Effect ---
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('bg-digli-black/95', 'backdrop-blur-sm', 'py-3', 'shadow-lg');
            header.classList.remove('bg-transparent', 'py-6');
        } else {
            header.classList.add('bg-transparent', 'py-6');
            header.classList.remove('bg-digli-black/95', 'backdrop-blur-sm', 'py-3', 'shadow-lg');
        }
    });

    // --- 2. Mobile Menu Toggle ---
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    function toggleMenu() {
        mobileMenu.classList.toggle('translate-x-full');
    }

    mobileBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);
    
    mobileLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });

    // --- 3. Portfolio Modal Logic ---
    const modal = document.getElementById('portfolio-modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalCategory = document.getElementById('modal-category');
    const modalStory = document.getElementById('modal-story');
    const closeModalBtns = [document.getElementById('close-modal'), document.getElementById('close-modal-text')];

    // Open Modal
    document.querySelectorAll('.portfolio-item').forEach(item => {
        item.addEventListener('click', () => {
            const title = item.getAttribute('data-title');
            const category = item.getAttribute('data-category');
            const story = item.getAttribute('data-story');
            const img = item.getAttribute('data-img');

            modalTitle.textContent = title;
            modalCategory.textContent = category;
            modalStory.textContent = story;
            modalImg.src = img;

            modal.classList.remove('hidden');
            // Small delay to allow display:block to apply before opacity transition
            setTimeout(() => {
                modal.classList.remove('opacity-0');
            }, 10);
            
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });
    });

    // Close Modal Function
    function closeModal() {
        modal.classList.add('opacity-0');
        setTimeout(() => {
            modal.classList.add('hidden');
            modalImg.src = ''; // Clear img to stop memory usage
        }, 300); // Match transition duration
        document.body.style.overflow = '';
    }

    closeModalBtns.forEach(btn => btn.addEventListener('click', closeModal));

    // Close on click outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // --- 4. Lazy Loading Images (Blur Up Effect) ---
    const lazyImages = document.querySelectorAll('.lazy-img');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.getAttribute('data-src');

                if (src) {
                    img.src = src;
                    img.onload = () => {
                        img.classList.add('loaded');
                    };
                }
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px 0px',
        threshold: 0.01
    });

    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });
});