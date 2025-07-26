//budget tracker

let inp = document.querySelector("#budget");
let detailsInput = document.querySelector("#details");

let expenseList = document.querySelector("#expense-list");
let buddet = document.querySelector(".buddet");

//clear all buttn
let clrbtn = document.createElement("button");

clrbtn.textContent = "Clear all";
clrbtn.id = "clear";

inp.addEventListener("change", function () {
  console.log(this.value);
  let h = document.querySelector("#amtshow1");
  h.innerText = this.value + " rs";
});

let exp = document.querySelector("#expense");

//total expense
let expense = 0;

exp.addEventListener("change", function () {
  console.log(this.value);

  //update expense n balance
  let h = document.querySelector("#amtshow2");

  let bal = document.querySelector("#amtshow3");

  let bud = document.querySelector("#amtshow1");

  expense = expense + parseInt(this.value) || 0;

  h.innerText = expense + " rs";

  let budgetValue = parseInt(bud.innerText) || 0;

  bal.innerText = budgetValue - expense + " rs";

  //accessing expense details
  let detail = detailsInput.value.trim();
  let val = parseInt(this.value) || 0;

  if (detail && val) {
    const date = new Date();

    const t = date.toString().split(" ")[4];
    const d = date.toString().split(" ").slice(1, 4).join("/");

    det = detail[0].toUpperCase() + detail.slice(1);

    let li = document.createElement("li");
    li.textContent = `${det}: ${val}rs | 📅${d}  🕒${t} `;

    expenseList.appendChild(li);

    detailsInput.value = "";

    //appending btn when details entrd by user
    if (!buddet.contains(clrbtn)) {
      buddet.appendChild(clrbtn);
    }
  }

  //clear expense input
  this.value = "";
});

//clear button
clrbtn.addEventListener("click", function () {
  expenseList.innerHTML = "Budget Details :";

  expense = 0;

  document.querySelector("#amtshow2").innerText = "0 rs";

  let amtShow3 = document.querySelector("#amtshow3");
  let amtShow1 = document.querySelector("#amtshow1");

  let amtShow1Value = amtShow1.innerText;

  let amtShow1Number = parseInt(amtShow1Value) || 0;

  let balanceText = amtShow1Number + " rs";

  amtShow3.innerText = balanceText;

  clrbtn.remove();
});






