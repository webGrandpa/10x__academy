document.addEventListener('DOMContentLoaded', () => {
    const logosSlide = document.getElementById('logo-slide-main');
    if (!logosSlide) {
        console.error("Element with ID 'logo-slide-main' not found.");
        return;
    }

    const logos = Array.from(logosSlide.children);

    logos.forEach(logo => {
        logosSlide.appendChild(logo.cloneNode(true));
    });

    let totalWidthOfOneSet = 0;

    for (let i = 0; i < logos.length / 2; i++) { 
        const logo = logos[i];
        totalWidthOfOneSet += logo.offsetWidth + (parseInt(getComputedStyle(logo).marginLeft) || 0) + (parseInt(getComputedStyle(logo).marginRight) || 0);
    }

    logosSlide.style.width = `${totalWidthOfOneSet * 2}px`;


    const animationDuration = 15;
    logosSlide.style.animation = `slide ${animationDuration}s linear infinite`;

});