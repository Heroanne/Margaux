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
        if (presentTime >= 9 && presentTime < 17) {
            showDay.classList.add('open');
        } else {
            showDay.classList.add('closed');
        }
    }
}
checkDay();



/* TEST */

// const presentDay = 'Saturday';
// const presentTime = 16;

// showDay.classList.add('color');
// document.write(weekday[1]);
// document.write(presentTime);
// document.write(presentDay);
// document.write(showDay);  