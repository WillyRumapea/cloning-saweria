const priceButtons = document.querySelectorAll(".price-button");
const mediaButtons = document.querySelectorAll(".media-button");
const inputPrice = document.getElementById("input-price");
const loginButton = document.getElementById("login-button");
const amountSupport = document.querySelector("#amount-support");
const inputTerms = document.querySelectorAll(".term-condition");
const payButtons = document.querySelectorAll(".payment-button");

priceButtons.forEach((priceButton) => {
  priceButton.addEventListener("click", (e) => {
    e.preventDefault();
    priceButtons.forEach((btn) => btn.classList.remove("priceButtonClick"));
    priceButton.classList.add("priceButtonClick");
    const amount = Number(priceButton.getAttribute("data-amount"));
    inputPrice.value = amount;
    amountSupport.textContent =
      "Jumlah dukungan: " +
      amount.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
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

inputTerms.forEach((inputTerm) => {
  inputTerm.addEventListener("change", (e) => {
    payButtons.forEach((payButton) => {
      if (e.target.checked) {
        payButton.classList.remove("contrast-50");
      } else {
        payButton.classList.add("contrast-50");
      }
    });
  });
});

payButtons.forEach((payButton) => {
  payButton.addEventListener("click", (e) => {
    e.preventDefault();

    payButtons.forEach((btn) => {
      btn.classList.remove("buttonGateClick");
      btn.classList.add("button-gate");
    });

    payButton.classList.add("button-gate");
    payButton.classList.add("buttonGateClick");
  });
});

window.addEventListener("load", () => {
  const checkboxes = document.querySelectorAll(".term-condition");
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
});
