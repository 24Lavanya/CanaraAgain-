const navLinks = document.querySelector(".nav-links");

function Toggle(e) {
    // console.log(e.name)
    e.name = e.name === "menu" ? "close" : "menu"
    navLinks.classList.toggle('show-menu')
}

var swiper1 = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay:1500
    },
    loop: true,
    pagination: {
      el: ".page",
      clickable: true,
    },
    navigation: {
      nextEl: ".swipe-next",
      prevEl: ".swipe-prev",
    },
  });
 
  var swiper2 = new Swiper(".swiper-testi", {
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay:3000
    },
    loop: true,
    pagination: {
      el: ".testi-page",
      clickable: true,
    },
    navigation: {
      prevEl: ".testi-prev",
      nextEl: ".testi-next",
    },
  });

  // const scroll = new LocomotiveScroll({
  //   el: document.querySelector('.main'),
  //   smooth: true
  // });


// const tl = gsap.timeline();
// tl.from(".nav-links ul", {
//   y: 10,
//   delay: 1,
//   duration: 1,
//   opacity:0,
// })