const hiddenPass = document.querySelector("#hidden-pass");
const inputPass = document.querySelector("#input-pass");
let hide = true;

hiddenPass.addEventListener("click", () => {
  if (hide) {
    hiddenPass.classList.remove("fa-eye-slash");
    hiddenPass.classList.add("fa-eye");
    inputPass.setAttribute("type", "text");
    hide = false;
  } else {
    hiddenPass.classList.remove("fa-eye");
    hiddenPass.classList.add("fa-eye-slash");
    inputPass.setAttribute("type", "password");
    hide = true;
  }
});
