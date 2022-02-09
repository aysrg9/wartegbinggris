const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((link) => {
      link.classList.remove("text-info");
      link.classList.add("text-white");
    });
    link.classList.remove("text-white");
    link.classList.add("text-info");
  });
});
