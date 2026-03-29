const searchInput = document.getElementById("project-search");

searchInput.addEventListener("input", function () {

    let value = searchInput.value.toLowerCase();

    let filtered = projects.filter(function(project){
        return project.name.toLowerCase().includes(value);
    });

    renderFilteredProjects(filtered);

    document.getElementById("result-count").textContent =
        filtered.length + " projects found";
});

const buttons = document.querySelectorAll(".filter-btn");