
window.onload = function () {
    document.getElementById("arrow-left").addEventListener("click", moveCarouselToLeft)
    document.getElementById("arrow-right").addEventListener("click", moveCarouselToRight)

    function moveCarouselToLeft() {
        moveCarousel(-300)
    }

    function moveCarouselToRight() {
        moveCarousel(300)
    }

    function moveCarousel(px) {
        document.getElementById("carousel").scrollLeft += px
    }
}