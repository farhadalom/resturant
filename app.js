let navbar = document.querySelector('.navbar');


document.querySelector('#menu-bars').onclick = () =>{
   navbar.classList.toggle('active');
}
document.querySelector('#times').onclick = () =>{
  navbar.classList.remove('active');
}

window.onscroll = () =>{
  navbar.classList.remove('active');
  if(window.scrollY > 100){
    document.querySelector('header').classList.add('active');
  }
  else{
    document.querySelector('header').classList.remove('active');
  }
}

//body theme
let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () =>{
  themeToggler.classList.toggle('fa-sun');
  if(themeToggler.classList.contains('fa-sun')){
    document.querySelector('body').classList.add('active');
  }
  else{
    document.querySelector('body').classList.remove('active');
  }
}

//home slider
var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
 loop:true,
});





/*function save(smallImg){
   let fullImg =  document.getElementById('mainImg-1');
   fullImg.src = smallImg.src;
}
function next(smallImg){
    let fullImg =  document.getElementById('mainImg-2');
    fullImg.src = smallImg.src;
 }

//deal srcipt

let countDate = new Date('20 aug, 2021 00:00:00').getTime();

function countDown(){
  let now = new Date().getTime();
  gap = countDate - now;
  
  let seconds = 1000;
  let minutes = seconds * 60;
  let hours = minutes * 60;
  let day = hours * 24;

  let d = Math.floor(gap / (day));
  let h = Math.floor((gap % (day)) / (hours));
  let m = Math.floor((gap % (hours)) / (minutes));
  let s = Math.floor((gap % (minutes)) / (seconds));


  document.getElementById('days').innerText = d;
  document.getElementById('hours').innerText = h;
  document.getElementById('minutes').innerText = m;
  document.getElementById('seconds').innerText = s;


}
setInterval(function(){
  countDown()
},1000)

//theme

/*let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () =>{
  themeToggler.classList.toggle('fa-sun');
   if(themeToggler.classList.contains('fa-sun')){
     document.querySelector('body').classList.add('active');
   }
   else{
    document.querySelector('body').classList.remove('active');
   }
}*/





//review slider

var swiper = new Swiper(".review-slider", {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 10,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
   
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      550: {
        slidesPerView: 2,
      },
      800: {
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 3,
      },
    },
  });