// Function I Used It More One
function getTotal() {
  if (price.value != "") {
    let result = +price.value + +taxes.value + +ads.value - +discount.value;
    total.innerHTML = result;
    total.style.backgroundColor = "green";
  } else {
    total.innerHTML = "";
    total.style.backgroundColor = "#e53935";
  }
}

function clearData() {
  title.value = "";
  price.value = "";
  taxes.value = "";
  ads.value = "";
  discount.value = "";
  total.innerHTML = "";
  count.value = "";
  category.value = "";
  getTotal();
}

function addToLocaleAndClearAndShow() {
  // Add Data To Local Storage
  localStorage.setItem("product", JSON.stringify(products));
  // Make All Button Empty
  clearData();
  // And Add This Data To The Table
  showData(products);
}
