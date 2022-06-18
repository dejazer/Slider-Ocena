const articles = [
   {
      title: 'Autumn',
      image: './img/autumn.jpg',
   },
   {
      title: 'Summer',
      image: './img/summer.jpg',
   },
   {
      title: 'Winter',
      image: './img/winter.jpg',
   }
]

const img = document.querySelector('img');
const h1 = document.querySelector('h1');
const dots = [...document.querySelectorAll('.dots span')];


let active = 0;

img.src = articles[active].image;
h1.textContent = articles[active].title;

const changeSlide = () => {
   active++;

   if (active === articles.length) {
      active = 0;
   }

   img.src = articles[active].image;
   h1.textContent = articles[active].title;
   changeDot()
}
const changeDot = () => {
   const index = dots.findIndex(dot => dot.classList.contains('active'));
   dots[index].classList.remove('active');
   dots[active].classList.add('active')
}

let intervalIndex = setInterval(changeSlide, 2000);