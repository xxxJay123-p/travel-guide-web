document.addEventListener("DOMContentLoaded", function () {
  let swiper = new Swiper(".attractions__container", {
    speed: 600,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
  });
});
