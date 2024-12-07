const mobileMenu = document.querySelector('.mobile-menu');
const mainNav = document.querySelector('.main-nav');

// Detectăm dacă browserul este Firefox
const isFirefox = navigator.userAgent.toLowerCase().includes('firefox');

// Folosim un debounce specific pentru Firefox
let canClick = true;

mobileMenu.addEventListener('click', (e) => {
    if (!canClick) return;
    
    canClick = false;
    mainNav.classList.toggle('visible');
    
    // Timpul de debounce mai scurt pentru Firefox
    setTimeout(() => {
        canClick = true;
    }, isFirefox ? 100 : 200);
});

// Opțional: Închide meniul la click în afară
document.addEventListener('click', (e) => {
    if (mainNav.classList.contains('visible') && 
        !mobileMenu.contains(e.target) && 
        !mainNav.contains(e.target)) {
        mainNav.classList.remove('visible');
    }
});