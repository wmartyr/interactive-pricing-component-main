const pageviewSlider = document.querySelector("#pageview-slider");
const pageviewNumber = document.querySelector(".pageviews-number")
const checkbox = document.querySelector("#billing-checkbox");
const price = document.querySelector(".price");
const timePeriod = document.querySelector(".time-period");
const priceList = [8, 12, 16, 24, 36];
const pageviewList = ["10K", "50K", "100K", "500K", "1M"]
let basicPrice = priceList[parseInt(pageviewSlider.value)];
let isMonthlyBilling = !checkbox.checked;

function displaySliderBackground(sliderValue) {
  let transitionPoint = parseInt(sliderValue) * 25;
  pageviewSlider.style["background"] = `linear-gradient(90deg, var(--color-primary-soft-cyan) ${transitionPoint}%, var(--color-neutral-light-grayish-blue-1) ${transitionPoint}%)`;
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
displaySliderBackground(pageviewSlider.value);

pageviewSlider.oninput = function () {
  basicPrice = priceList[parseInt(this.value)];
  displayFinalPrice(basicPrice, isMonthlyBilling);
  displaySliderBackground(this.value);
  pageviewNumber.textContent = pageviewList[this.value];
}


