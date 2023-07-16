$(document).ready(function () {
  const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
    slidesPerView: 2,
    centeredSlides: true,

    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },
  });
});
