document.getElementById("cvv").addEventListener("focus", function () {
  document.querySelector(".card__container").classList.add("flipped");
});

document.getElementById("cvv").addEventListener("blur", function () {
  document.querySelector(".card__container").classList.remove("flipped");
});

const cvvInput = document.querySelector(".form__cvv-input");
const backCodeInput = document.querySelector(".card__back-input");

cvvInput.addEventListener("input", function () {
  if (cvvInput.value.length > 3) {
    cvvInput.value = cvvInput.value.slice(0, 3);
  }
  backCodeInput.value = cvvInput.value;
});
