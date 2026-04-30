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

        // Links
        const projectLinks = document.createElement("div");
        projectLinks.className = "mt-4 flex gap-4 justify-center";

        const liveLink = document.createElement("a");
        liveLink.href = project.liveDemo;
        liveLink.textContent = "Live";
        liveLink.className = "text-blue-500 underline";

        const githubLink = document.createElement("a");
        githubLink.href = project.github;
        githubLink.textContent = "Code";
        githubLink.className = "text-green-500 underline";

        projectLinks.appendChild(liveLink);
        projectLinks.appendChild(githubLink);

        // Append
        card.appendChild(projectName);
        card.appendChild(projectDescription);
        card.appendChild(projectCategory);
        card.appendChild(projectTechnologies);
        card.appendChild(projectStatus);
        card.appendChild(projectLinks);

        projectContainer.appendChild(card);
    });
}