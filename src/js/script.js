const priceButtons = document.querySelectorAll(".price-button");
const mediaButtons = document.querySelectorAll(".media-button");
const inputPrice = document.getElementById("input-price");
const loginButton = document.getElementById("login-button");

priceButtons.forEach((priceButton) => {
  priceButton.addEventListener("click", (e) => {
    e.preventDefault();
    priceButtons.forEach((btn) => btn.classList.remove("priceButtonClick"));
    priceButton.classList.add("priceButtonClick");
    const amount = priceButton.getAttribute("data-amount");
    inputPrice.value = amount;
  });
});

mediaButtons.forEach((mediaButton) => {
  mediaButton.addEventListener("click", (e) => {
    e.preventDefault();
    mediaButtons.forEach((btn) => btn.classList.remove("priceButtonClick"));
    mediaButton.classList.add("priceButtonClick");
  });
});

loginButton.addEventListener("click", () => {
  document.location.href = "loginForm.html";
});
