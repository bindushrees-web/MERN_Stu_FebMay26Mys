function renderSkills() {
    const container = document.getElementById("skills-container");

    if (!container) return;

    container.innerHTML = "";

    // BIG BOX
    const bigBox = document.createElement("div");
bigBox.className = "bg-white dark:bg-gray-900 text-black dark:text-white rounded-2xl shadow-xl p-10 max-w-6xl mx-auto";

    // Grid inside box
    const grid = document.createElement("div");
    grid.className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full";
    const categories = [...new Set(skillsData.map(skill => skill.category))];

    categories.forEach(category => {

        const section = document.createElement("div");
        section.className = "bg-gray-50 dark:bg-gray-800 text-black dark:text-white rounded-xl p-6 shadow-md text-center";
        const title = document.createElement("h3");
        title.textContent = category;
        title.className = "text-xl font-bold mb-4 whitespace-nowrap";

        const skillList = document.createElement("div");
        skillList.className = "flex flex-wrap gap-3 justify-center";

        const filteredSkills = skillsData.filter(skill => skill.category === category);

        filteredSkills.forEach(skill => {
            const badge = document.createElement("span");
            badge.textContent = skill.name;
            badge.className =  "px-4 py-2 bg-gray-100 dark:bg-gray-700 text-black dark:text-white rounded shadow text-sm hover:bg-blue-500 hover:text-white transition duration-300 cursor-pointer";

            skillList.appendChild(badge);
        });

        section.appendChild(title);
        section.appendChild(skillList);

        grid.appendChild(section);
    });

    bigBox.appendChild(grid);
    container.appendChild(bigBox);
}