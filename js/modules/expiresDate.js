const expirationMonthSelect = document.getElementById("expirationMonth");
const expirationYearSelect = document.getElementById("expirationYear");

const monthContainer = document.querySelector(
  ".card__expires-date .card__expires-char:nth-child(1)"
);
const yearContainer = document.querySelector(
  ".card__expires-date .card__expires-char:nth-child(3)"
);

for (let month = 1; month <= 12; month++) {
  const value = month < 10 ? `0${month}` : month;
  const option = document.createElement("option");
  option.value = value;
  option.textContent = value;
  expirationMonthSelect.appendChild(option);
}

const currentYear = new Date().getFullYear();
const endYear = currentYear + 6;

for (let year = currentYear; year <= endYear; year++) {
  const option = document.createElement("option");
  option.value = year;
  option.textContent = year;
  expirationYearSelect.appendChild(option);
}

const updateDate = (selectElement, container) => {
  const topChar = container.querySelector(".top-value");
  const bottomChar = container.querySelector(".bottom-value");

  if (selectElement.value) {
    if (selectElement === expirationYearSelect) {
      const lastTwoDigits = selectElement.value.toString().slice(-2);
      bottomChar.textContent = lastTwoDigits;
    } else {
      bottomChar.textContent = selectElement.value;
    }
    container.classList.add("animate");

    setTimeout(() => {
      topChar.textContent = bottomChar.textContent;
      container.classList.remove("animate");
    }, parseFloat(getComputedStyle(topChar).transitionDuration) * 1000);
  }
};

expirationMonthSelect.addEventListener("change", function () {
  updateDate(expirationMonthSelect, monthContainer);
});

expirationYearSelect.addEventListener("change", function () {
  updateDate(expirationYearSelect, yearContainer);
});
