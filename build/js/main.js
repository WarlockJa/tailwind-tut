const initApp = () => {
    const hamburgerBtn = document.getElementById("hamburger-button");
    const mobileMenu = document.getElementById("mobile-menu");
    let delay = 0;

    const toggleMenu = () => {
        mobileMenu.classList.toggle('animate-open-menu');
        mobileMenu.classList.toggle('animate-close-menu');
        hamburgerBtn.classList.toggle('toggle-btn');
        setTimeout(() => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
            delay = delay === 0 ? 400 : 0
        }, delay);
    }

    hamburgerBtn.addEventListener('click', toggleMenu);
    mobileMenu.addEventListener('click', toggleMenu);
}

document.addEventListener('DOMContentLoaded', initApp);