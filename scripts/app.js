// Page swipe
let swiper1 = new Swiper(".swiper1", {
  effect: "coverflow",
  loop: true,
  grabCursor: false,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
});

// Project Swipe
let swiper2 = new Swiper(".swiper2", {
  grabCursor: true,
  freeMode: true,
  slidesPerView: "3",
  direction: "vertical",
  spaceBetween: 10,
  mouseWheel: true,
  loop: true,
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
