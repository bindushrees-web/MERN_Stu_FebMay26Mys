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
        card.className = "p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 hover:scale-105";

        const projectName = document.createElement("h3");
        projectName.className = "text-xl font-bold mb-2 dark:text-white";
        projectName.textContent = project.name;

        const projectDescription = document.createElement("p");
        projectDescription.className = "text-sm mb-2 text-gray-600 dark:text-gray-300";
        projectDescription.textContent = project.description;

        const projectCategory = document.createElement("p");
        projectCategory.className = "text-sm font-semibold text-gray-700 dark:text-gray-300";
        projectCategory.textContent = project.category;

        const projectTechnologies = document.createElement("p");
        projectTechnologies.className = "text-sm text-gray-600 dark:text-gray-400";
        projectTechnologies.textContent = project.technologies.join(", ");

        const projectStatus = document.createElement("p");
        projectStatus.className = "text-sm mt-1 text-gray-700 dark:text-gray-300";
        projectStatus.textContent = "Status: " + project.status;

        const projectLinks = document.createElement("div");
        projectLinks.className = "mt-4 flex gap-4 justify-center";

        if (project.github) {
            const githubLink = document.createElement("a");
            githubLink.href = project.github;
            githubLink.textContent = "GitHub";
            githubLink.target = "_blank";
            githubLink.className = "px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition";
            projectLinks.appendChild(githubLink);
        }

        if (project.liveDemo) {
            const liveLink = document.createElement("a");
            liveLink.href = project.liveDemo;
            liveLink.textContent = "Live";
            liveLink.target = "_blank";
            liveLink.className = "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition";
            projectLinks.appendChild(liveLink);
        }

        card.appendChild(projectName);
        card.appendChild(projectDescription);
        card.appendChild(projectCategory);
        card.appendChild(projectTechnologies);
        card.appendChild(projectStatus);
        card.appendChild(projectLinks);

        projectContainer.appendChild(card);
    });
}