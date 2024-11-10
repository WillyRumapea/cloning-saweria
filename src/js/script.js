const priceButtons = document.querySelectorAll(".price-button");
const inputPrice = document.getElementById("input-price");

priceButtons.forEach((priceButton) => {
  priceButton.addEventListener("click", (e) => {
    e.preventDefault();
    priceButton.classList.add("priceButtonClick");
    const amount = priceButton.getAttribute("data-amount");
    inputPrice.value = amount;
  });
});
