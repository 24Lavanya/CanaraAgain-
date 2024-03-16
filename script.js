const navLinks = document.querySelector(".nav-links");
// const text1=new SplitType("#text-head1")

function Toggle(e) {
  // console.log(e.name)
  e.name = e.name === "menu" ? "close" : "menu";
  
  navLinks.classList.toggle('show-menu');
  if (navLinks.classList.contains("show-menu")) {
    const text = new SplitType(".nav-links ul li")
    console.log("check")
    gsap.from(".char", {
      opacity: 0,
      y: 100,
      duration: 0.5,
      delay: 1,
      // stagger: 0.2,
    });
  }
 
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

  const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
  });

  gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector(".main").style.transform
    ? "transform"
    : "fixed"*/
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();


const tl = gsap.timeline();



// gsap.from(".char", {
//   y: 100,
//   stagger: 0.1,
//   duration: 0.2,
//   delay:0.5,
//   scrollTrigger: {
//       trigger: '.char',
//       scroller: '.main',
//       markers: true,
//     start: "top 100%"
//   }
  
// })
gsap.from(".management", {
  opacity: 0.8,
  scrollTrigger: {
      trigger: '.management',
      scroller: '.main',
      // markers: true,
      start: "top 100%",
      scrub:true
  }
  
})
// gsap.from(".management-head h2", {
//   opacity: 0,
//   delay:0.5,
//   scrollTrigger: {
//       trigger: '.management-head h2',
//       scroller: '.main',
//       markers: true,
//       start: "top 100%",
//       scrub:true
//   }
  
// })
// gsap.from(".char", {
//   y: 100,
//   stagger: 0.02,
//   duration: 0.2,
//   delay:0.5,
//   scrollTrigger: {
//       trigger: '.char',
//       scroller: '.main',
//       markers: true,
//     start: "top 100%"
//   }
  
// })
gsap.from(".about", {
  opacity: 0,
  stagger: 0.02,
  duration: 0.2,
  delay: 0.5,
  scrollTrigger: {
    trigger: '.about h2',
    scroller: '.main',
    // markers: true,
    start: "top 100%",
    scrub:true,
  }
})

let mm = gsap.matchMedia();

// mm.add("(max-width: 768px)", () => {
//   gsap.to(".nav-links", {
//     y: 10,
//     duration: 0.2,
//     delay: 0.2,
//     stagger: 0.02,
//     onstart: Toggle(),
    
//     })
// })