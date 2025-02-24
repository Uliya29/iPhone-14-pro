const menu__btn = document.querySelector('.menu__btn');
const nav = document.querySelector('.nav');

menu__btn.addEventListener('click', ()=>{
  nav.classList.toggle('menu__open');
});// при клике на кнопку ей задается новый класс, при повторном клике он убирается


