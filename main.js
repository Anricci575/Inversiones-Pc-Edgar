// Simple JavaScript for mobile menu toggle and smooth scroll
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('button[class*="md:hidden"]');
    const navMenu = document.querySelector('nav[class*="hidden md:flex"]');
    
    if (mobileMenuButton && navMenu) {
        mobileMenuButton.addEventListener('click', function() {
            navMenu.classList.toggle('hidden');
            navMenu.classList.toggle('flex');
            navMenu.classList.toggle('flex-col');
            navMenu.classList.toggle('absolute');
            navMenu.classList.toggle('top-16');
            navMenu.classList.toggle('left-0');
            navMenu.classList.toggle('right-0');
            navMenu.classList.toggle('bg-white');
            navMenu.classList.toggle('p-4');
            navMenu.classList.toggle('shadow-md');
            navMenu.classList.toggle('space-y-4');
            navMenu.classList.toggle('space-x-8');
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                if (navMenu && !navMenu.classList.contains('hidden')) {
                    mobileMenuButton.click();
                }
            }
        });
    });
});