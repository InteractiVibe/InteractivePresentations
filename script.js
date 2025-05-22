document.addEventListener('DOMContentLoaded', () => {
    // Checklist interactivity
    const checklistItems = document.querySelectorAll('.checklist-item');

    checklistItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('checked');
            const isChecked = item.classList.contains('checked');
            item.setAttribute('data-checked', isChecked);
        });
    });

    // Collapsible Navigation
    const header = document.querySelector('.header');
    const heroSection = document.querySelector('.hero');
    let heroHeight = heroSection.offsetHeight; // Get initial height of hero section

    // Use a debounce function for scroll to optimize performance
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            if (window.scrollY > heroHeight / 2) { // When scrolled past half of hero section
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }, 50); // Debounce time in ms
    });

    // Update heroHeight if window is resized (e.g., orientation change)
    window.addEventListener('resize', () => {
        heroHeight = heroSection.offsetHeight;
        // Also trigger scroll check on resize
        if (window.scrollY > heroHeight / 2) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Initial check in case user loads page already scrolled
    if (window.scrollY > heroHeight / 2) {
        header.classList.add('scrolled');
    }
});