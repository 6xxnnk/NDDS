const aboutSection = document.querySelector(".about");

const aboutObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        aboutSection.classList.add("is-active");
      }
    });
  },
  {
    threshold: 0.35,
  }
);

if (aboutSection) {
  aboutObserver.observe(aboutSection);
}