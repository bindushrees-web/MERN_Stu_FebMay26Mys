let selectedSort = "default";

function initProjectSort() {
    const sortSelect = document.getElementById("project-sort");

    if (!sortSelect) return;

    sortSelect.addEventListener("change", function () {
        selectedSort = sortSelect.value;
        applyFilters(); 
    });
}