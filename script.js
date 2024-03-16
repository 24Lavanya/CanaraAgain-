const navLinks = document.querySelector(".nav-links");

function Toggle(e) {
    // console.log(e.name)
    e.name = e.name === "menu" ? "close" : "menu"
    navLinks.classList.toggle('show-menu')
}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay:3000
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
 