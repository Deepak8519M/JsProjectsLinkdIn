let input = document.getElementById("input");
let btn = document.getElementById("btn-barcode-gnrtr");

btn.addEventListener("click", () => {
  if (input.value.trim() === "") {
    alert("Please enter a value!");
    return;
  }

  JsBarcode("#barcode", input.value, {
    format: "code128",
    displayValue: true,
    fontSize: 20,
    lineColor: "#000",
  });

  input.value = "";
});

window.onload = (event) => {
  input.value = "";
};
