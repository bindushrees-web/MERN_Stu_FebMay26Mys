function renderEducation() {
    const container = document.getElementById("experience");

    if (!container) return;

    const wrapper = container.querySelector(".max-w-4xl");

    const timeline = document.createElement("div");
    timeline.className = "relative border-l-4 border-blue-500 ml-4 space-y-10";

    educationData.forEach(item => {
        const card = document.createElement("div");

        card.className = "relative pl-6";

        card.innerHTML = `
            <!-- Dot -->
            <div class="absolute -left-3 top-2 w-6 h-6 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900"></div>

            <!-- Card -->
            <div class="bg-white dark:bg-gray-800 text-black dark:text-white p-6 rounded-xl shadow-md">
                <h3 class="text-xl font-bold">${item.degree}</h3>
                <p class="text-gray-600 dark:text-gray-300">${item.institute}</p>
                <p class="text-sm">${item.year}</p>
                <p class="text-sm font-semibold text-blue-500">${item.score}</p>
            </div>
        `;

        timeline.appendChild(card);
    });

    wrapper.appendChild(timeline);
}