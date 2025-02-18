let APIKEY = "4f9b55cbe2284ef0caad7418";
let API = ` https://v6.exchangerate-api.com/v6/${APIKEY}/latest/USD`;

const fromDropDown = document.getElementById("from-currency-select");
const toDropDown = document.getElementById("to-currency-select");
const resetBtn = document.getElementById("reset-button");
const amount = document.getElementById("amount");
const result = document.getElementById("result");
const convetBtn = document.getElementById("convert-button");

resetBtn.addEventListener("click", () => {
  resetPage();
});

function resetPage() {
  console.log("This is clicked");
  amount.value = "";
  result.innerHTML = "";
}

// Creating Drop Down from Curreny Array

currencies.forEach((curreny) => {
  const option = document.createElement("option");
  option.value = curreny;
  option.text = curreny;
  fromDropDown.add(option);
});
currencies.forEach((curreny) => {
  const option = document.createElement("option");
  option.value = curreny;
  option.text = curreny;
  toDropDown.add(option);
});

//Setting the Default Value

fromDropDown.value = "USD";
toDropDown.value = "INR";

let convertCurrency = () => {
  const fromCurrency = fromDropDown.value;
  const toCurrency = toDropDown.value;

  // If amount input field is empty or not
  if (amount.value.length != 0) {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        let fromExchangeRate = data.conversion_rates[fromCurrency];
        let toExchangeRate = data.conversion_rates[toCurrency];

        const convertedAmount =
          (amount.value / fromExchangeRate) * toExchangeRate;

        result.innerHTML = `${
          amount.value
        } ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
      });
  } else {
    alert("Please fill in the Amount");
  }
};

convetBtn.addEventListener("click", () => convertCurrency());

window.addEventListener("load", convertCurrency());
