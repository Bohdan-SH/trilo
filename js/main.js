'use strict'

let fixedBlock = document.querySelector('.header__logo-block--fixed');
let sticky = fixedBlock.offsetHeight;
let card = document.querySelector('.header__img');
let imgBlock = document.querySelector('.header__img-block');
let carCard = document.querySelector('.main__car');
let mainBag = document.querySelector('.main__bag');
let mainCards = [...document.querySelectorAll('.main__card')];
let hands = [...document.querySelectorAll('[data-name="hand"]')];
let main = document.querySelector('.main');

window.addEventListener('scroll', ()=> {
  if (window.pageYOffset > sticky) {
    fixedBlock.style.cssText = `opacity: 1; transition: opacity 1000ms;`;
  } else {
    fixedBlock.style.opacity = '0';
  }
});

card.addEventListener('mousemove', (e) => {
  let halfCardHeight = card.clientHeight / 2;
  let halfCardWidth = card.clientWidth / 2;
  let abscissa = e.offsetX;
  let ordinate = e.offsetY;
  let moveX = 0;
  let moveY = (abscissa - halfCardWidth) / 15;

  if (ordinate < halfCardHeight) {
    moveX = (ordinate - halfCardHeight)/15;
  } else {
    moveX = (ordinate - halfCardHeight)/5;
  }

  card.style.cssText = `transform: rotateX(${moveX}deg) 
                        rotateY(${-moveY}deg) 
                        scale(1.1);`;
});

card.addEventListener('mouseout', () => {
  card.style.cssText = `transform: scale(1);`;
});

carCard.addEventListener('mousemove', () => {
  carCard.style.cssText = `transform: translateY(-4px);`;
});

carCard.addEventListener('mouseout', () => {
  carCard.style.cssText = `transform: translateY(0px);`;
});

mainBag.addEventListener('mousemove', () => {
  mainBag.style.cssText = `transform: translateY(-4px);`;
});

mainBag.addEventListener('mouseout', () => {
  mainBag.style.cssText = `transform: translateY(0px);`;
});

for (let i = 0; i < mainCards.length; i++) {
  const card = mainCards[i];
  
  card.addEventListener('mousemove', () => {
    card.style.cssText = `transform: translateY(-4px);
                          box-shadow: 0 2px 8px 0px #d3d3d3;`;
  });
  
  card.addEventListener('mouseout', () => {
    card.style.cssText = `transform: translateY(0px);
                          box-shadow: 0 2px 4px 0px #d3d3d3;`;
  });
};

for (let i = 0; i < hands.length; i++) {
  const hand = hands[i];
  
  hand.addEventListener('mousemove', () => {
    hand.style.cssText = `cursor: url('../img/hand.png'), auto;
                          transform: translateY(-4px);`;
  });
};

window.addEventListener('scroll', () => {
  let scrolled = window.pageYOffset;
  let scrolledMain = scrolled * 20;
  let scrolledCard = scrolled / 20;

  main.style.cssText = `transform: translateY(${scrolledMain})px);`;
  carCard.style.cssText = `transform: translateY(${-scrolledCard}px);`;
  mainBag.style.cssText = `transform: translateY(${-scrolledCard}px);`;

  for (let i = 0; i < mainCards.length; i++) {
    const card = mainCards[i];
    
    card.style.cssText = `transform: translateY(${-scrolledCard}px);`;
  }
});