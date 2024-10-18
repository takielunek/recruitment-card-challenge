const input = document.getElementById("cardName");

input.addEventListener("input", updateCardName);

function updateCardName() {
  const inputField = document.getElementById("cardName");
  const cardNameDisplay = document.getElementById("cardNameDisplay");
  const placeholder = document.getElementById("placeholder");

  const newChars = inputField.value.replace(/[^A-Za-z\s]/g, "").slice(0, 26);
  inputField.value = newChars;

  if (!newChars.length) {
    if (!placeholder) {
      Placeholder = document.createElement("span");
      Placeholder.id = "placeholder";
      Placeholder.textContent = "AD SOYAD";
      cardNameDisplay.innerHTML = "";
      cardNameDisplay.appendChild(Placeholder);
    }
    return;
  }

  if (placeholder) cardNameDisplay.innerHTML = "";

  const newChar = newChars.slice(-1);
  const oldChars = cardNameDisplay.outerText || "";

  if (newChars.length > oldChars.length) {
    const span = document.createElement("span");
    span.classList.add("card-item__nameItem");
    span.innerHTML = newChar === " " ? "&nbsp;" : newChar;
    setTimeout(() => span.classList.add("active"), 0);
    cardNameDisplay.appendChild(span);
  } else {
    cardNameDisplay.innerHTML = newChars;
  }
}
