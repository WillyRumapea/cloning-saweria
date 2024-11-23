const priceButtons = document.querySelectorAll(".price-button");
const mediaButtons = document.querySelectorAll(".media-button");
const inputPrice = document.getElementById("input-price");
const loginButton = document.getElementById("login-button");
const amountSupport = document.querySelector("#amount-support");
const inputTerms = document.querySelectorAll(".term-condition");
const payButtons = document.querySelectorAll(".payment-button");
const sendButton = document.querySelector("#send-button");

priceButtons.forEach((priceButton) => {
  priceButton.addEventListener("click", (e) => {
    e.preventDefault();
    priceButtons.forEach((btn) => btn.classList.remove("priceButtonClick"));
    priceButton.classList.add("priceButtonClick");
    const amount = Number(priceButton.getAttribute("data-amount"));
    inputPrice.value = amount;
    amountSupport.textContent = "Jumlah dukungan: Rp" + amount;
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
        payButton.classList.remove("cursor-no-drop");
        sendButton.classList.remove("contrast-50");
        sendButton.classList.remove("cursor-no-drop");
      } else {
        payButton.classList.add("contrast-50");
        payButton.classList.add("cursor-no-drop");
        sendButton.classList.add("contrast-50");
        sendButton.classList.add("cursor-no-drop");
      }
    });
  });
});

const biayaAdmin = {
  qris: 0.7,
  gopay: 2,
  ovo: 2.74,
  dana: 1.69,
  "link-aja": 1.69,
};

function calcAdminPayGate() {
  const adminCost = document.getElementById("admin-cost");
  const valueCost = parseFloat(amountSupport.textContent.replace(/[^\d]/g, ""));
  const totalCost = document.getElementById("total-cost");

  const activeButton = document.querySelector(".buttonGateClick");

  if (activeButton) {
    const tax = parseFloat(activeButton.dataset.pajak);
    const taxForTotal = tax * 1000;

    if (!isNaN(valueCost) && !isNaN(tax)) {
      const totalAdminCost = Math.round(valueCost * (tax / 10));
      const totalCostValue = taxForTotal + valueCost;

      adminCost.textContent =
        "Biaya Layanan (Payment Gateway): Rp" + totalAdminCost;
      // console.log("biaya admin : " + totalAdminCost);
      totalCost.textContent = "Total: Rp " + totalCostValue;
    } else {
      console.log("tidak ada gateway dipilih");
    }
  }
}

payButtons.forEach((payButton) => {
  payButton.addEventListener("click", (e) => {
    e.preventDefault();

    payButtons.forEach((btn) => {
      btn.classList.remove("buttonGateClick");
      btn.classList.add("button-gate");
    });
    payButton.classList.add("button-gate");
    payButton.classList.add("buttonGateClick");

    calcAdminPayGate();
  });
});

window.addEventListener("load", () => {
  const checkboxes = document.querySelectorAll(".term-condition");
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
});
