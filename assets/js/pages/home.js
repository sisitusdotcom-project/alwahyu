document.addEventListener("DOMContentLoaded", () => {
  const promoCard = document.getElementById("promoFloatCard");
  const closeBtn = document.getElementById("promoCloseBtn");
  if (promoCard && closeBtn) {
    const isDismissed = localStorage.getItem("alwahyu_promo_dismissed");
    if (!isDismissed) {
      setTimeout(() => {
        promoCard.classList.add("show");
      }, 2000);
    }
    closeBtn.addEventListener("click", () => {
      promoCard.classList.remove("show");
      localStorage.setItem("alwahyu_promo_dismissed", "true");
    });
  }
});