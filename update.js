// Update
function updateData(id) {
  let prodact = products[id - 1];
  title.value = prodact.title;
  price.value = prodact.price;
  taxes.value = prodact.taxes;
  ads.value = prodact.ads;
  discount.value = prodact.discount;
  getTotal();
  count.value = prodact.count;
  category.value = prodact.category;
  submit.textContent = "Update";
  tmp = id - 1;
  scroll({
    top: 0,
    behavior: "smooth",
  });
}
