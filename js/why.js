const whyTotalCount = document.querySelectorAll(".whySwiper .swiper-slide").length;

const whySwiper = new Swiper(".whySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  speed: 700,
  loop: true,

  allowTouchMove: true,
  simulateTouch: true,
  grabCursor: true,
  touchRatio: 1,
  touchAngle: 45,

  observer: true,
  observeParents: true,

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
    769: {
      slidesPerView: "auto",
      spaceBetween: 36,
    },
  },
});

function updateWhyPagination(swiper) {
  const current = document.querySelector(".why__current");
  const total = document.querySelector(".why__total");

  if (!current || !total) return;

  const realIndex = swiper.realIndex + 1;

  current.textContent = String(realIndex).padStart(2, "0");
  total.textContent = String(whyTotalCount).padStart(2, "0");
}