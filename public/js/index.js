var navbar = document.querySelector(".navbar");

window.addEventListener('scroll', () => {


    navbar.classList.toggle("sticky", window.scrollY > 0);

})


var burger = document.querySelector('.burger')
var navbar = document.querySelector('.navbar')
var max_width = document.querySelector('.nav')



burger.addEventListener('click', (event) => {
    event.stopPropagation();
    navbar.classList.toggle('h_nav');
    max_width.classList.toggle('v_class');
});

document.addEventListener('click', function (event) {
    var isBurgerClick = event.target.classList.contains('burger');
    var isNavClick = event.target.classList.contains('nav');

    if (!isBurgerClick && !isNavClick) {
        navbar.classList.add('h_nav');
        max_width.classList.add('v_class');
    }
});

document.addEventListener('click', function (event) {
    var isBurgerClick = event.target.classList.contains('burger');
    var isNavClick = event.target.classList.contains('nav');

    if (!isBurgerClick && !isNavClick) {
        navbar.classList.add('h_nav');
        max_width.classList.add('v_class');
    }
});
