// gsap.to(".viewport", {
//     duration: .5,
//     height: 0,
//     ease: "Expo.easeInOut"
// })
window.addEventListener("load", function () {
  //     gsap.to(".viewport", {
  //         duration: .5,
  //         height: "100%",
  //         ease: "Expo.easeInOut"
  //     })
  gsap.to(".page-load", {
    duration: 1,
    // delay: 2.5,
    y: -1500,
    ease: "Power4.easeInOut",
  });
  gsap.to(".blank-white", {
    duration: 1,
    delay: 0.05,
    y: -1500,
    ease: "Power4.easeInOut",
  });
  setTimeout(function () {
    document.querySelector(".page-load").style.display = "none";
  }, 5000);
  var navbarAnimate = gsap.timeline({ delay: 1 });
  navbarAnimate.from(".animate-navbar", {
    stagger: 0.3,
    duration: 0.5,
    opacity: 0,
    // delay: 2.8,
    ease: "Power4.easeOut",
    y: 10,
  });
  document.querySelector(".recommended-view").style.display = "flex";
  document.querySelector(".blank-white").style.backgroundColor = "crimson";
  gsap.from(".appear-text", {
    duration: 1,
    delay: 0.9,
    y: 100,
    stagger: 0.1,
    ease: "Power3.easeInOut",
  });
});
