window.addEventListener("load", function () {
  gsap.to(".page-load", {
    duration: 1,
    y: -1000,
    ease: "Power4.easeInOut",
  });
  setTimeout(function () {
    document.querySelector(".page-load").style.display = "none";
  }, 2000);
});
