let bill = document.querySelector("#bill");
let tip = document.querySelector("#tip");
let person = document.getElementById("people-count").textContent;
let peopleCount = document.getElementById("people-count");
let total = document.getElementById("total");
let count = 1;

const tipCalculator = () => {
  let result = (bill.value * (tip.value / 100) + Number(bill.value)) / count;
  total.textContent = `$${result.toFixed(2)}`;
};

const subs = () => {
  if (count > 1) {
    count = Number(peopleCount.textContent) - 1;
  }
  peopleCount.textContent = count;
  return count;
};

const adds = () => {
  count = Number(peopleCount.textContent) + 1;
  peopleCount.textContent = count;
  return count;
};
