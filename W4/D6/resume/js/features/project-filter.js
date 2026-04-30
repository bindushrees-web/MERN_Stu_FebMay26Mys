let selectedCategory = "All";

function initProjectFilter() {
    const filterContainer = document.getElementById("project-filters");

    if (!filterContainer) return;

    filterContainer.innerHTML = "";
    
    const categories = ["All", "Frontend", "Backend", "Full Stack", "AI"];

    categories.forEach(category => {
        const btn = document.createElement("button");

        btn.textContent = category;
        btn.className = "filter-btn px-4 py-2 rounded border";

        if (category === "All") {
            btn.classList.add("bg-blue-500", "text-white");
        }

        btn.addEventListener("click", function () {

            selectedCategory = category;

            document.querySelectorAll(".filter-btn").forEach(b => {
                b.classList.remove("bg-blue-500", "text-white");
                b.classList.add("border");
            });

            btn.classList.add("bg-blue-500", "text-white");
            btn.classList.remove("border");

            applyFilters();
        });

        filterContainer.appendChild(btn);
    });
}

function applyFilters() {

    let result = [...projectsData];

    const searchInput = document.getElementById("project-search");
    const searchText = searchInput.value.toLowerCase().trim();

    if (searchText) {
        result = result.filter(project =>
            project.name.toLowerCase().includes(searchText) ||
            project.description.toLowerCase().includes(searchText) ||
            project.category.toLowerCase().includes(searchText)
        );
    }

    if (selectedCategory !== "All") {
    result = result.filter(project => {

        const category = project.category.toLowerCase();

        if (selectedCategory === "Frontend") {
            return category.includes("frontend");
        }

        if (selectedCategory === "Backend") {
            return category.includes("backend");
        }

        if (selectedCategory === "Full Stack") {
            return category.includes("full stack");
        }

        if (selectedCategory === "AI") {
            return category.includes("ai") || category.includes("artificial") || category.includes("vision");
        }

        return true;
    });
}

    renderProjects(result);
}