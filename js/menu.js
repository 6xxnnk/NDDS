// Mobile Hamburger Menu
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("#header");
  const menuBtn = document.querySelector(".menu-btn");
  const menuDim = document.querySelector(".menu-dim");
  const menuLinks = document.querySelectorAll(".gnb__item a");

  if (!header || !menuBtn) return;

  const openMenu = () => {
    header.classList.add("is-open");
    document.body.classList.add("is-menu-open");
    menuBtn.setAttribute("aria-label", "모바일 메뉴 닫기");
  };

  const closeMenu = () => {
    header.classList.remove("is-open");
    document.body.classList.remove("is-menu-open");
    menuBtn.setAttribute("aria-label", "모바일 메뉴 열기");
  };

  const toggleMenu = () => {
    if (header.classList.contains("is-open")) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  menuBtn.addEventListener("click", toggleMenu);

  if (menuDim) {
    menuDim.addEventListener("click", closeMenu);
  }

  menuLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeMenu();
    }
  });
});