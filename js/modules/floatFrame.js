document.addEventListener("DOMContentLoaded", () => {
  const frame = document.createElement("div");
  frame.classList.add("frame", "invisible");
  document.querySelector(".card__flip").appendChild(frame);

  // Initial position around card__front
  let init = true;
  const cardFront = document.querySelector(".card__flip");
  moveFrameToElement(cardFront);
  //   setTimeout(() => {
  // frame.classList.remove("invisible");
  //   }, 400);

  // Event listeners for inputs
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

  // Function to move the frame to the target element
  function moveFrameToElement(element) {
    const frameContainer = document.querySelector(".card__flip"); // Use card__flip as the containing block
    const rect = element.getBoundingClientRect();
    const containerRect = frameContainer.getBoundingClientRect(); // Get card__flip position relative to viewport

    // Set frame properties relative to .card__flip
    frame.style.position = "absolute";
    frame.style.width = `${rect.width}px`;
    frame.style.height = `${rect.height}px`;

    // Calculate frame's top and left positions relative to .card__flip
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
