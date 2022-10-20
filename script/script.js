let menuBtn = document.querySelector('.menu_button');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
menuBtn.classList.toggle('active');
menu.classList.toggle('active');
});