window.onload = function () {
  document
    .getElementById("arrow-left")
    .addEventListener("click", moveCarouselToLeft)
  document
    .getElementById("arrow-right")
    .addEventListener("click", moveCarouselToRight)
  window.addEventListener("scroll", onScroll)

  function moveCarouselToLeft() {
    moveCarousel(-300)
  }

  function moveCarouselToRight() {
    moveCarousel(300)
  }

  function moveCarousel(px) {
    document.getElementById("carousel").scrollLeft += px
  }

  function onScroll(event) {
    if (window.scrollY > 1100) {
      document.getElementById("activity_card").classList.remove("hidden")
    }
  }
}
