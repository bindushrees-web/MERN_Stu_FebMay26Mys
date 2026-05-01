function renderProjects(projects = projectsData) {

    const projectContainer = document.getElementById("projects-container");

    const countDisplay = document.getElementById("project-count");

    if (!projectContainer) {
        console.log("Projects Container Not Found");
        return;
    }

    projectContainer.innerHTML = "";

    if (countDisplay) {
    countDisplay.textContent = `${projects.length} project${projects.length !== 1 ? "s" : ""} found`;
}

    if (projects.length === 0) {
        projectContainer.innerHTML = "<p class='text-center col-span-3'>No projects found</p>";
        return;
    }

    projects.forEach(function (project) {

        const card = document.createElement("div");
        card.className = "p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 hover:scale-105";

        const projectName = document.createElement("h3");
        projectName.className = "text-xl font-bold mb-2";
        projectName.textContent = project.name;

        const projectDescription = document.createElement("p");
        projectDescription.className = "text-sm mb-2";
        projectDescription.textContent = project.description;

        const projectCategory = document.createElement("p");
        projectCategory.className = "text-sm font-semibold";
        projectCategory.textContent = project.category;

        const projectTechnologies = document.createElement("p");
        projectTechnologies.className = "text-sm";
        projectTechnologies.textContent = project.technologies.join(", ");

        const projectStatus = document.createElement("p");
        projectStatus.className = "text-sm";
        projectStatus.textContent = "Status: " + project.status;

        // Append
        card.appendChild(projectName);
        card.appendChild(projectDescription);
        card.appendChild(projectCategory);
        card.appendChild(projectTechnologies);
        card.appendChild(projectStatus);

        projectContainer.appendChild(card);
    });
}