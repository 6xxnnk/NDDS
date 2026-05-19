const activeSections = document.querySelectorAll(
  ".about, .why, .consulting, .service, .checklist"
);

const sectionObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-active");
      }
    });
  },
  {
    threshold: 0.35,
  }
);

activeSections.forEach(function (section) {
  sectionObserver.observe(section);
});