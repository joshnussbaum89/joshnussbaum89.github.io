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

// typewriter animation for page description
document.addEventListener('DOMContentLoaded', function (event) {
    // array with texts to type in typewriter
    const dataText = ["Web Developer"];

    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
        // chekc if text isn't finished yet
        if (i < text.length) {
            // add next character to h1
            document.querySelector("h2").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

            // wait for a while and call this function again for next character
            setTimeout(function () {
                typeWriter(text, i + 1, fnCallback)
            }, 300);
        }
        // text finished, call callback if there is a callback function
        else if (typeof fnCallback === 'function') {
            // call callback after timeout
            setTimeout(fnCallback, 500);
        }
    }
    // start a typewriter animation for a text in the dataText array
    function StartTextAnimation(i) {
        if (typeof dataText[i] === 'undefined') {
            setTimeout(function () {
                StartTextAnimation(0);
            }, 10000);
        }
        // check if dataText[i] exists
        if (i < dataText[i].length) {
            // text exists! start typewriter animation
            typeWriter(dataText[i], 0, function () {
                // after callback (and whole text has been animated), start next text
                StartTextAnimation(i + 1);
            });
        }
    }
    // start the text animation
    StartTextAnimation(0);
});