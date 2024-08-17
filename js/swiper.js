const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 4.5,
      spaceBetween: 15,
    },
  },
});

document
  .querySelector('.custom-swiper-button-next')
  .addEventListener('click', () => {
    swiper.slideNext();
  });

document
  .querySelector('.custom-swiper-button-prev')
  .addEventListener('click', () => {
    swiper.slidePrev();
  });

export default swiper;
