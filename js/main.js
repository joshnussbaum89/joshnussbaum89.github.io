/* ============================================= */
/*              JavaScript                       */
/* ============================================= */


// initialize Animate on Scroll library
AOS.init();

// function delay() {
//     setTimeout(function () {
//         toTopIcon.style.display = "block";
//     }, 2000);
// }

// window.addEventListener('scroll', delay());

let scrollPos = 0;
const toTopIcon = document.querySelector('.footer-sound-icon');

function checkPosition() {
    let windowY = window.scrollY;
    if (windowY < scrollPos) {
        // Scrolling UP
        toTopIcon.classList.toggle('fade')
    } else {
        // Scrolling DOWN
        toTopIcon.classList.toggle('fade')
    }
    scrollPos = windowY;
}

window.addEventListener('scroll', checkPosition);