// Прилипающее меню при прокрутке: Сразу создаём переменные
let navbar = document.getElementById('navbarr').classList
let active_class = "scrolled"


 // Слушаем событие прокрутки

window.addEventListener('scroll', e => {
   if (pageYOffset > 500) navbar.add(active_class)
   else navbar.remove(active_class)
})


// Свайпер для отзывов

var swiper = new Swiper(".mySwiper", {
   slidesPerView: 1,
   spaceBetween: 30,
   loop: true,
   autoplay: {
      delay: 2500,
      disableOnInteraction: false,
   },
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
});


/* Выпадающий список меню*/
function myFunction() {
   document.getElementById("myDropdown").classList.toggle("show");
}

// Закрываем список при клике
window.onclick = function (e) {
   if (!e.target.matches('.dropbtn')) {
      var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
         myDropdown.classList.remove('show');
      }
   }
}


// Лайки

const hearts = document.querySelectorAll('.fa-heart');

hearts.forEach(heart => heart.addEventListener('click', (e) => {
   e.target.classList.toggle('red');
}))





// Анимация цифр

let number = document.getElementById('number');

let start = 0;
let end = 1500;
let ticks = 10;
let speed = 300;

let randomNumbers = [end]

for (let i = 0; i < ticks - 1; i++) {
   randomNumbers.unshift(
      Math.floor(Math.random() * (end - start + 1) + start)
   );
}

randomNumbers.sort((a, b) => {
   return a - b
});


let x = 0;
let interval = setInterval(function () {

   number.innerHTML = randomNumbers.shift();

   if (++x === ticks) {
      window.clearInterval(interval);
   }

}, speed);


// Параллакс анимация

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);


// Мобильная версия меню

$(document).ready(function () {
   var burger = $('.btnnnn');
   var menu = $('.full-menu');
   var navItems = $('.nav__item');

   burger.click(function () {
      burger.toggleClass('btn--open');
      menu.toggleClass('menu--open');
   });

   navItems.hover(function () {
      navItems.not($(this)).toggleClass('nav__item--hover');
   });
});







//
//
//

function openMobMenu() {
      var myMobileMnu = document.getElementById("mobMenu").classList.add('open_menu');



}




window.onclick = function (e) {
   if (!e.target.matches('.close_menu')) {
      var myDron = document.getElementById("mobMenu");
      if (myDron.classList.contains('close_menu')) {
         myDron.classList.remove('close_menu');
         myDron.classList.toggle('open_menu');
      }
   }



}



// Прилипающее меню при прокрутке: Сразу создаём переменные
let navmmnu = document.getElementById('mobMenu').classList
let active_classs = "scrolled_2"


 // Слушаем событие прокрутки

window.addEventListener('scroll', e => {
   if (pageYOffset > 500) navmmnu.add(active_classs)
   else navmmnu.remove(active_classs)
})





//
// function closeMobMenu() {
//       var myMobileMnu = document.getElementById("mobMenu").classList.toggle('close_menu');
//
//
//
// }


document.getElementById("mobMenu").onclick = function () {
document.getElementById("mobMenu").classList.toggle('close_menu');

}



// появление статей при клике и исчезание
document.getElementById('hiderr').onclick = function () {
   document.getElementById('config-btn').classList.toggle('hiddenn');
   let est = document.getElementById('hiderr');


   est.innerHTML =
      (est.innerHTML === 'Hide') ? est.innerHTML = 'Load more' : est.innerHTML = 'Hide';
}
