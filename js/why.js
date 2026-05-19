const whySwiper = new Swiper(".whySwiper", {
  slidesPerView: 1.3,
  spaceBetween: 34,
  speed: 750,
  loop: false,

  navigation: {
    nextEl: ".why__arrow--next",
    prevEl: ".why__arrow--prev",
  },

  on: {
    init: function () {
      updateWhyPagination(this);
    },
    slideChange: function () {
      updateWhyPagination(this);
    },
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1.08,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 1.18,
      spaceBetween: 28,
    },
    1280: {
      slidesPerView: 1.3,
      spaceBetween: 34,
    },
  },
});

function updateWhyPagination(swiper) {
  const current = document.querySelector(".why__current");
  const total = document.querySelector(".why__total");

  if (!current || !total) return;

  current.textContent = String(swiper.realIndex + 1).padStart(2, "0");
  total.textContent = String(swiper.slides.length).padStart(2, "0");
}