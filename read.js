// Show All Data In The Page

// Main Array
let products = [];
function getDataFromLocaleDB() {
  // get preProducts
  products = JSON.parse(localStorage.getItem("product")) || [];
}

function showTableData(product) {
  return `
     <tr>
         <td>${product.id}</td>
         <td>${product.title}</td>
         <td>${product.price}</td>
         <td>${product.taxes}</td>
         <td>${product.ads}</td>
         <td>${product.discount}</td>
         <td>${product.total}</td>
         <td>${product.count}</td>
         <td>${product.category}</td>
         <td><button onclick="updateData(${product.id})" id="update">Update</button></td>
         <td><button onclick="deleteproduct(${product.id})" id="delete">Delete</button></td>
     </tr>
    `;
}

function showData(prodacts) {
  let tableData = "";
  for (let i = 0; i < prodacts.length; i++) {
    tableData += showTableData(prodacts[i]);
  }

  document.getElementById("tbody").innerHTML = tableData;

  let btnDelete = document.getElementById("deleteAll");
  if (prodacts.length !== 0) {
    btnDelete.innerHTML = `
    <button onclick="deleteAll()">Delete All (${prodacts.length})</button>
    `;
  } else {
    btnDelete.innerHTML = "";
  }
}
