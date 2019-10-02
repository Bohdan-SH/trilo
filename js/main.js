'use strict'

let fixedBlock = document.querySelector('.header__logo-block--fixed');
let sticky = fixedBlock.offsetHeight;

window.addEventListener('scroll', ()=> {
  if (window.pageYOffset > sticky) {
    fixedBlock.style.cssText = `opacity: 1; transition: opacity 1000ms;`;
  } else {
    fixedBlock.style.opacity = '0';
  }
});

