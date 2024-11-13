const priceButtons = document.querySelectorAll(".price-button");
const inputPrice = document.getElementById("input-price");

priceButtons.forEach((priceButton) => {
  priceButton.addEventListener("click", (e) => {
    e.preventDefault();
    priceButtons.forEach((btn) => btn.classList.remove("priceButtonClick"));
    priceButton.classList.add("priceButtonClick");
    const amount = priceButton.getAttribute("data-amount");
    inputPrice.value = amount;
  });
});
