document.addEventListener("DOMContentLoaded", function () {
  const conCheck = document.querySelector(".con-check");

  if (!conCheck) return;

  const checkObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-active");
          checkObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.35,
    }
  );

  checkObserver.observe(conCheck);
});