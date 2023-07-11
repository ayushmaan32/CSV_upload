// console.log("loaded");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-btn");
const tableRows = document.querySelectorAll(".csv-table tbody tr");

searchButton.addEventListener("click", () => {
  const searchTerm = searchInput.value.toLowerCase();
  for (const row of tableRows) {
    const rowText = row.textContent.toLowerCase();
    if (rowText.includes(searchTerm)) {
      row.style.display = "table-row";
    } else {
      row.style.display = "none";
    }
  }
});
