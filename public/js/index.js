var navbar= document.querySelector(".navbar");

window.addEventListener('scroll',() => {

   
    navbar.classList.toggle("sticky",window.scrollY > 0);

})


var burger = document.querySelector('.burger')
var navbar = document.querySelector('.navbar')
var max_width =document.querySelector('.nav')


burger.addEventListener('click', () => {
    navbar.classList.toggle('h_nav')
    
   max_width.classList.toggle('v_class')
    
})