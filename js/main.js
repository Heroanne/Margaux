const navLi = document.querySelectorAll('nav div ul li a');
const sections = document.querySelectorAll('section');



// NAVBAR
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        let sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 65) {
            current = section.getAttribute('id');
        }
    });
    navLi.forEach(li => {
        li.classList.remove('active');
        document.querySelector('nav div ul li a[href*= ' + current + ']').classList.add('active');
    });
});



// HORRAIRE
const weekday = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']
const presentDate = new Date();
const presentDayAsNumber = presentDate.getDay();

const presentDay = weekday[presentDayAsNumber];
// const presentDay = 'Mercredi';

const showDay = document.getElementById(presentDay);

const presentTime = presentDate.getHours();
// const presentTime = 16;

function checkDay() {
    if (presentDay == 'Samedi' || presentDay == 'Dimanche' || presentDay == 'Mercredi') {
        showDay.classList.add('closed');
    } else {
        if (presentTime >= 8 && presentTime < 20) {
            showDay.classList.add('open');
        } else {
            showDay.classList.add('closed');
        }
    }
}
checkDay();


// Read More
const parentContainer = document.querySelector('.read-more-container');

parentContainer.addEventListener('click', event => {

    const current = event.target;

    const isReadMoreBtn = current.className.includes('read-more-btn');

    if (!isReadMoreBtn) return;

    const currentText = event.target.parentNode.querySelector('.read-more-text');

    currentText.classList.toggle('read-more-text--show');

    current.textContent = current.textContent.includes('Lire la suite...') ? "Lire moins..." : "Lire la suite...";

})








