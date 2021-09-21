const btnMenu = document.querySelector('.menu__btn');
const menu = document.querySelector('.nav');
const menuUL = document.querySelector('.nav-menu');
const menuElem = document.querySelectorAll('.nav-menu__elem')



btnMenu.addEventListener('click', () => {
  btnMenu.style.display = "none";
  menu.style.display = "block";
  menuUL.style.display = "flex";
  menuUL.style.flexDirection = "column";
  for(let i = 0; i < menuElem.length; i++) {
    menuElem[i].style.textAlign = 'center';
    menuElem[i].style.padding = '10px';
  }
})

for(let i = 0; i < menuElem.length; i++) {
  menuElem[i].addEventListener('click', () => {
    menu.style.display = "none";
    btnMenu.style.display = "block";
  })
}