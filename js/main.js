/* ============================================= */
/*              JavaScript                       */
/* ============================================= */

// initialize Animate on Scroll library
AOS.init();

// fade in "back to top" icon when user scrolls past 600
const toTopIcon = document.querySelector('.footer-sound-icon');
window.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
        toTopIcon.classList.add('fade');
    } else if (window.scrollY < 600) {
        toTopIcon.classList.remove('fade');
    }
});