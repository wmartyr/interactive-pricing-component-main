const pageviewSlider = document.querySelector("#pageview-slider");
const pageviewNumber = document.querySelector(".pageviews-number")
const checkbox = document.querySelector("#billing-checkbox");
const price = document.querySelector(".price");
const timePeriod = document.querySelector(".time-period");
let basicPrice = checkPrice(pageviewSlider.value);
let isMonthlyBilling = !checkbox.checked;

function checkPrice(sliderValue) {
  switch (sliderValue) {
    case "1":
      return 8;
      break;
    case "2":
      return 12;
      break;
    case "3":
      return 16;
      break;
    case "4":
      return 24;
      break;
    case "5":
      return 36;
      break;
  }
}
function changeBilling() {
  isMonthlyBilling = (checkbox.checked) ? false : true;
  displayFinalPrice(basicPrice, isMonthlyBilling);
}

function calculateFinalPrice(basicPrice, isMonthlyBilling) {
  if (isMonthlyBilling) {
    return basicPrice;
  } else {
    return basicPrice * 12 * 0.75;
  }
}

function displayFinalPrice(basicPrice, isMonthlyBilling) {
  price.textContent = `$${calculateFinalPrice(basicPrice, isMonthlyBilling)}`;
  timePeriod.textContent = isMonthlyBilling ? " / month" : " / year";
}

displayFinalPrice(basicPrice, isMonthlyBilling);


pageviewSlider.oninput = function () {
  basicPrice = checkPrice(this.value);
  displayFinalPrice(basicPrice, isMonthlyBilling);
  switch (this.value) {
    case "1":
      pageviewNumber.textContent = "10K";
      pageviewSlider.style["background"] = "var(--color-neutral-light-grayish-blue-1)";
      break;
    case "2":
      pageviewNumber.textContent = "50K";
      pageviewSlider.style["background"] = "linear-gradient(90deg, var(--color-primary-soft-cyan) 25%, var(--color-neutral-light-grayish-blue-1) 25%)";
      break;
    case "3":
      pageviewNumber.textContent = "100K";
      pageviewSlider.style["background"] = "linear-gradient(90deg, var(--color-primary-soft-cyan) 50%, var(--color-neutral-light-grayish-blue-1) 50%)";
      break;
    case "4":
      pageviewNumber.textContent = "500K";
      pageviewSlider.style["background"] = "linear-gradient(90deg, var(--color-primary-soft-cyan) 75%, var(--color-neutral-light-grayish-blue-1) 75%)";
      break;
    case "5":
      pageviewNumber.textContent = "1M";
      pageviewSlider.style["background"] = "var(--color-primary-soft-cyan)";
      break;
  }
}


