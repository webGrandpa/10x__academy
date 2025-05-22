document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-menu');
    const mobileMenuContainer = document.querySelector('.mobile-nav');
    const mobileSearch = document.querySelector(".mobile-search");

    if (hamburgerButton && mobileMenuContainer && mobileSearch) {
        hamburgerButton.addEventListener('click', () => {
            mobileMenuContainer.classList.toggle('active');
            hamburgerButton.classList.toggle('is-active');

            if (mobileMenuContainer.classList.contains('active')) {
                mobileSearch.style.display = 'none';
            } else {
                mobileSearch.style.display = 'flex';
            }
        });

        mobileMenuContainer.addEventListener('click', (event) => {
            if (event.target === mobileMenuContainer) {
                mobileMenuContainer.classList.remove('active');
                hamburgerButton.classList.remove('is-active');

                mobileSearch.style.display = 'flex';
            }
        });
    } else {
        console.error('Error: Could not find one or more required elements (hamburger menu, mobile menu container, or mobile search).');
    }
});