const previewer = document.getElementById("previewer");
const container = document.getElementById("logoDisplay");
const input = document.getElementById("cardNumber");
const inputLimit = 16;

let cardNumberEmpty = true;

for (let i = 0; i < inputLimit; i++) {
  const charContainer = document.createElement("div");
  charContainer.classList.add("char-container");

  const topChar = document.createElement("div");
  topChar.classList.add("char", "top");
  topChar.textContent = "#";

  const bottomChar = document.createElement("div");
  bottomChar.classList.add("char", "bottom");

  charContainer.appendChild(topChar);
  charContainer.appendChild(bottomChar);
  previewer.appendChild(charContainer);
}

function inputValidator() {
  const value = input.value;
  input.value = value.slice(0, inputLimit);
}

function updatePreview() {
  function animateHash() {
    Array.from(previewer.children).forEach((container, index) => {
      const bottomChar = container.querySelector(".bottom");

      if (inputValue[index]) {
        bottomChar.textContent = inputValue[index];
        container.classList.add("animate-up");
        container.classList.remove("animate-down");
      } else {
        container.classList.add("animate-down");
        container.classList.remove("animate-up");
      }
    });
  }

  function animateProvider() {
    const img = document.createElement("img");
    img.src = `/images/${provider}.png`;
    img.classList.add(`card__${provider}`);
    bottomChar.appendChild(img);

    container.classList.add("animate");
    setTimeout(() => {
      bottomChar.removeChild(img);
      const imgToReplace = topChar.querySelector("img");
      topChar.replaceChild(img, imgToReplace);
      container.classList.remove("animate");
    }, parseFloat(getComputedStyle(topChar).transitionDuration) * 1000);
  }

  const topChar = container.querySelector(".top-value");
  const bottomChar = container.querySelector(".bottom-value");
  const inputValue = input.value;

  animateHash();

  if (inputValue && cardNumberEmpty) {
    cardNumberEmpty = false;
    if (inputValue == 5) {
      provider = "mastercard";
      animateProvider();
    } else if (inputValue == 6) {
      provider = "discover";
      animateProvider();
    } else {
      provider = "visa";
      return;
    }
  } else if (inputValue && !cardNumberEmpty) {
    return;
  } else if (!inputValue) {
    cardNumberEmpty = true;
    if (provider == "visa") {
      return;
    } else {
      provider = "visa";
      animateProvider();
    }
  }
}

input.addEventListener("input", inputValidator);
input.addEventListener("input", updatePreview);
