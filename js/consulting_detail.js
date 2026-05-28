document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".js-detail-card");
  const modal = document.querySelector(".con-detail-modal");

  if (!cards.length || !modal) return;

  const modalImage = modal.querySelector(".con-detail-modal__visual img");
  const modalTitle = modal.querySelector(".con-detail-modal__content h3");
  const modalSubtitle = modal.querySelector(".con-detail-modal__subtitle");
  const modalPoints = modal.querySelector(".con-detail-modal__points");
  const modalSolution = modal.querySelector(".con-detail-modal__solution p");
  const closeBtn = modal.querySelector(".con-detail-modal__close");
  const dim = modal.querySelector(".con-detail-modal__dim");

  let lastFocusedCard = null;

  const openModal = (card) => {
    const title = card.dataset.title || "";
    const subtitle = card.dataset.subtitle || "";
    const image = card.dataset.image || "";
    const points = card.dataset.points || "";
    const solution = card.dataset.solution || "";

    lastFocusedCard = card;

    modalTitle.textContent = title;
    modalSubtitle.textContent = subtitle;
    modalSolution.textContent = solution;

    modalImage.src = image;
    modalImage.alt = `${title} 상세 이미지`;

    modalPoints.innerHTML = "";

    points.split("|").forEach((point) => {
      const item = point.trim();

      if (!item) return;

      const span = document.createElement("span");
      span.textContent = item;
      modalPoints.appendChild(span);
    });

    modal.classList.add("is-active");
    document.body.classList.add("is-modal-open");
    modal.setAttribute("aria-hidden", "false");

    closeBtn.focus();
  };

  const closeModal = () => {
    modal.classList.remove("is-active");
    document.body.classList.remove("is-modal-open");
    modal.setAttribute("aria-hidden", "true");

    if (lastFocusedCard) {
      lastFocusedCard.focus();
    }
  };

  cards.forEach((card) => {
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `${card.dataset.title || "상세"} 설명 보기`);

    card.addEventListener("click", () => {
      openModal(card);
    });

    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openModal(card);
      }
    });
  });

  closeBtn.addEventListener("click", closeModal);
  dim.addEventListener("click", closeModal);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-active")) {
      closeModal();
    }
  });
});