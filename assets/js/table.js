document.addEventListener("DOMContentLoaded", function () {
    const table = document.getElementById("accordion");
    const filterDropdown = document.getElementById("filter");

    // Show the table after the page has loaded
    table.style.display = "table";

    // Add event listener to the filter dropdown
    filterDropdown.addEventListener("change", function () {
        filterTable();
    });

    // Make the table sortable using the Sortable library
    new Sortable(table, {
        headers: "thead th",
        animation: 150,
        // Add more options as needed
    });

    function filterTable() {
        const filterValue = filterDropdown.value.toLowerCase();
        const rows = table.getElementsByTagName("tbody")[0].getElementsByTagName("tr");

        for (const row of rows) {
            const cells = row.getElementsByTagName("td");
            let shouldShow = filterValue === "all";

            for (const cell of cells) {
                if (cell.innerHTML.toLowerCase().includes(filterValue)) {
                    shouldShow = true;
                    break;
                }
            }

            row.style.display = shouldShow ? "" : "none";
        }
    }
});
