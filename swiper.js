"use strict"

const swiperContainer = document.querySelector('.reviews');
const tabs = document.querySelectorAll('.square');
const images = document.querySelectorAll('.photoss img');
const tabElements = document.querySelectorAll('.tabbers');
const burgerIcon = document.querySelector('.burger-icon');
const dropdownMenu = document.querySelector('.dropdown-menu');

swiperContainer.addEventListener('mousedown', function(event) {
  if (event.button === 0) { 
    event.preventDefault();
  }
});

const swiper = new Swiper('.swiper', {
    
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    spaceBetween: 20,
    
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      720: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
    },
  });

 

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {

    images.forEach(image => image.style.display = 'none');
    images[index].style.display = 'block';
    tabs.forEach(tab => tab.classList.remove('active'));
    tab.classList.add('active');
    images.forEach(image => image.classList.remove('active'));
    images[index].classList.add('active');
  });
});

tabElements.forEach(tab => {
  tab.addEventListener('click', () => {
    tabElements.forEach(tabElement => {
      if (tabElement !== tab) {
        tabElement.classList.remove('active');
      }
    });

    tab.classList.toggle('active');
  });
});

burgerIcon.addEventListener('click', (event) => {
  event.preventDefault(); 
  dropdownMenu.classList.toggle('show');
  event.stopPropagation(); 
});

document.addEventListener('click', (event) => {
  if (!dropdownMenu.contains(event.target)) {
    dropdownMenu.classList.remove('show');
  }
});
