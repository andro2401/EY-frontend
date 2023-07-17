$(document).ready(function () {
  var swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 30,
    slidesPerGroup: 1,
    centeredSlides: true,

    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },
    breakpoints: {
      500: {
        slidesPerView: 2,
        spaceBetween: 30,
        slidesPerGroup: 1,
        centeredSlides: false,
      },
      991: {
        slidesPerView: 2,
        spaceBetween: 30,
        slidesPerGroup: 1,
      },
    },
  });

  $(".swipebox").swipebox();

  $("#contactForm").submit(function (event) {
    event.preventDefault();
    if (this.checkValidity()) {
      $(this).hide();
      $(".response").show();
    }
  });

  $(".ok-btn").on("click", function (e) {
    e.preventDefault();
    $(this).parents(".response").hide();
    $("#contactForm").show();
  });

  $(".cookie-btn").on("click", function (e) {
    e.preventDefault();
    $(this).parents(".cookie").hide();
  });
});
