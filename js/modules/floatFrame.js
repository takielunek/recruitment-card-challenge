document.addEventListener("DOMContentLoaded", () => {
  const frame = document.createElement("div");
  frame.classList.add("frame", "invisible");
  document.querySelector(".card__flip").appendChild(frame);

  let init = true;
  const cardFront = document.querySelector(".card__flip");
  moveFrameToElement(cardFront);

  document.querySelector("#cardNumber").addEventListener("focus", () => {
    const cardHash = document.querySelector("#previewer");
    moveFrameToElement(cardHash);
  });

  document.querySelector("#cardName").addEventListener("focus", () => {
    const cardHolder = document.querySelector(".card__holder");
    moveFrameToElement(cardHolder);
  });

  document.querySelector("#expirationMonth").addEventListener("focus", () => {
    const cardExpires = document.querySelector(".card__expires");
    moveFrameToElement(cardExpires);
  });

  document.querySelector("#expirationYear").addEventListener("focus", () => {
    const cardExpires = document.querySelector(".card__expires");
    moveFrameToElement(cardExpires);
  });

  function moveFrameToElement(element) {
    const frameContainer = document.querySelector(".card__flip");
    const rect = element.getBoundingClientRect();
    const containerRect = frameContainer.getBoundingClientRect();

    frame.style.position = "absolute";
    frame.style.width = `${rect.width}px`;
    frame.style.height = `${rect.height}px`;

    if (init) {
      frame.style.left = `${rect.left - containerRect.left}px`;
      frame.style.top = `${rect.top - containerRect.top}px`;
      init = false;
    } else {
      frame.classList.remove("invisible");
      frame.style.transform = `translate(${rect.left - containerRect.left}px, ${
        rect.top - containerRect.top
      }px)`;
    }
  }
});
