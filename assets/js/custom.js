var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
});

// right button click off 
window.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});
