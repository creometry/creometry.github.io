document.addEventListener("DOMContentLoaded", function () {
    const table = document.getElementById("accordion");
    const filterDropdown1 = document.getElementById("topicFilter");
    const filterDropdown2 = document.getElementById("deliveryFilter");
    const filterDropdown3 = document.getElementById("levelFilter");
 
    // Show the table after the page has loaded
    table.style.display = "table";
 
    // Add event listeners to the filter dropdowns
    filterDropdown1.addEventListener("change", function () {
        filterTable();
    });
 
    filterDropdown2.addEventListener("change", function () {
        filterTable();
    });
 
    filterDropdown3.addEventListener("change", function () {
        filterTable();
    });    

    function filterTable() {
        const filterValue1 = filterDropdown1.value.toLowerCase();
        const filterValue2 = filterDropdown2.value.toLowerCase();
        const filterValue3 = filterDropdown3.value.toLowerCase();
        const rows = table.getElementsByTagName("tbody")[0].getElementsByTagName("tr");
 
        for (const row of rows) {
            const cells = row.getElementsByTagName("td");
            let shouldShow = true;
 
            if (filterValue1 !== "all" && !row.innerHTML.toLowerCase().includes(filterValue1)) {
                shouldShow = false;
            }

            if (filterValue2 !== "all" && !row.innerHTML.toLowerCase().includes(filterValue2)) {
                shouldShow = false;
            }
 
            if (filterValue3 !== "all" && !row.innerHTML.toLowerCase().includes(filterValue3)) {
                shouldShow = false;
            }
 
            row.style.display = shouldShow ? "" : "none";
        }
    }
 });
 