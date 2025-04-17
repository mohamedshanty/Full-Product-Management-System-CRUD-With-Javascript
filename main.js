// Get Total
// Create Product
// Save LocalStorage
// Clear Inputs
// Read
// Count
// Delete
// Update
// Search
// Clean Data

// Catch Element
let title = document.getElementById("title");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let total = document.getElementById("total");
let count = document.getElementById("count");
let category = document.getElementById("category");
let submit = document.getElementById("submit");
let search = document.getElementById("search");

// Make Id In Update Method Is Globale To Read It In Submit Button
let tmp;

// Get Data From Locale Storage
getDataFromLocaleDB();

// Submit Button To Create And Update Data
submit.onclick = function () {
  if (submit.textContent.toLowerCase() === "create") {
    // Function To Create Data
    createProduct();
    // Add Data To Local Storage , Make All Button Empty , And Add This Data To The Table
    addToLocaleAndClearAndShow();
  } else {
    // Update Data
    products[tmp].title = title.value;
    products[tmp].price = price.value;
    products[tmp].taxes = taxes.value;
    products[tmp].ads = ads.value;
    products[tmp].discount = discount.value;
    products[tmp].total = total.innerHTML;
    products[tmp].count = count.value;
    products[tmp].category = category.value;

    addToLocaleAndClearAndShow();

    // Return To Defult Value
    submit.textContent = "Create";

    search.value = "";
  }
};

// Show All Data In The Table
showData(products);
