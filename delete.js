// Delete
function deleteproduct(i) {
  i = i - 1;
  products.splice(i, 1);

  for (let i = 0; i < products.length; ++i) products[i].id = i + 1;

  addToLocaleAndClearAndShow();

  search.value = "";
}

// Delete All
function deleteAll() {
  localStorage.clear();
  products = [];
  showData(products);
}
