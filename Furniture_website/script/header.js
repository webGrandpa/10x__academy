document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-menu');
    const mobileMenuContainer = document.querySelector('.mobile-nav');

    if (hamburgerButton && mobileMenuContainer) {
        hamburgerButton.addEventListener('click', () => {
            mobileMenuContainer.classList.toggle('active');
            hamburgerButton.classList.toggle('is-active');
        });

        mobileMenuContainer.addEventListener('click', (event) => {
            if (event.target === mobileMenuContainer) {
                mobileMenuContainer.classList.remove('active');
                hamburgerButton.classList.remove('is-active');
            }
        });
    } else {
        console.error('Error: Could not find hamburger menu button or mobile menu container.');
    }
});