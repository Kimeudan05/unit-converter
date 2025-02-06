/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.querySelector("#convert-btn");
const inputEl = document.querySelector("#input");
const outputUl = document.querySelector(".output");
const meterLi = document.querySelector(".meters");
const litresLi = document.querySelector(".litres");
const kilogramLi = document.querySelector(".kilograms");

let value = 0;

// Function to update output based on the current input value
function updateOutput(value) {
  const feetValue = value * 3.281;
  const meterValue = value / 3.281;

  const litreValue = value / 0.264;
  const gallonValue = value * 0.264;

  const kiloValue = value / 2.204;
  const poundValue = value * 2.204;

  // Update meters section
  meterLi.innerHTML = `<h3>Length(Meter/Feet)</h3>`;
  meterLi.innerHTML += `<p>${value} meters = ${feetValue.toFixed(3)} feet | ${value} feet = ${meterValue.toFixed(3)} meters</p>`;

  // Update litres section
  litresLi.innerHTML = `<h3>Volume(Litres/Gallons)</h3>`;
  litresLi.innerHTML += `<p>${value} litres = ${gallonValue.toFixed(3)} gallons | ${value} gallons = ${litreValue.toFixed(3)} litres</p>`;

  // Update kilograms section
  kilogramLi.innerHTML = `<h3>Weight(Kilograms/Pounds)</h3>`;
  kilogramLi.innerHTML += `<p>${value} kilos = ${poundValue.toFixed(3)} pounds | ${value} pounds = ${kiloValue.toFixed(3)} kilos</p>`;
}

// Set default output when the page loads (without updating yet)
updateOutput(value);

// Update value only when the convert button is clicked
convertBtn.addEventListener("click", () => {
  value = parseFloat(inputEl.value) || 0; // Convert input to a number or use 0 if it's invalid
  updateOutput(value);
});
