const projectsSwiper = new Swiper('.Projects-section .slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,
  pagination: {
    el: '.Projects-section .swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },
  navigation: {
    nextEl: '.Projects-section .swiper-button-next',
    prevEl: '.Projects-section .swiper-button-prev',
  },
  breakpoints:{
    0: {
        slidesPerView: 1
    },
    768: {
        slidesPerView: 2
    },
    1024: {
        slidesPerView: 3
    }
  }
});

const certificatesSwiper = new Swiper('.Certificates-section .certificates-slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,
  pagination: {
    el: '.Certificates-section .swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },
  navigation: {
    nextEl: '.Certificates-section .swiper-button-next',
    prevEl: '.Certificates-section .swiper-button-prev',
  },
  breakpoints:{
    0: {
        slidesPerView: 1
    },
    768: {
        slidesPerView: 2
    },
    1024: {
        slidesPerView: 3
    }
  }
});