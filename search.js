// Search
search.style.display = "none";
let searchBtn = document.querySelector(".btnSearch #searchTitle");
searchBtn.addEventListener("click", () => {
  search.style.display = "block";
  search.focus();
});

function searchData(value) {
  // Search About Value In Title And In Category
  let filterData = products.filter((e) => {
    return (
      e.title.toLowerCase().includes(value) ||
      e.category.toLowerCase().includes(value)
    );
  });

  let table = "";
  for (let i = 0; i < filterData.length; i++) {
    table += showTableData(filterData[i]);
  }

  document.getElementById("tbody").innerHTML = table;
}
