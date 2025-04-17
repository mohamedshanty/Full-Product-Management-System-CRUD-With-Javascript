// Create
function createProduct() {
  console.log(products.length);
  let prodact = {
    id: products.length + 1,
    title: title.value,
    price: price.value,
    taxes: taxes.value,
    ads: ads.value,
    discount: discount.value,
    total: total.innerHTML,
    count: count.value,
    category: category.value,
  };
  products.push(prodact);
}
