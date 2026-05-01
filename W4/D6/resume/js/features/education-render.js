function renderEducation() {
    const container = document.getElementById("experience");

    if (!container) return;

    const wrapper = container.querySelector(".max-w-4xl");

    const list = document.createElement("div");
    list.className = "space-y-6";

    educationData.forEach(item => {
        const card = document.createElement("div");

        card.className =
            "bg-white dark:bg-gray-800 text-black dark:text-white p-6 rounded-xl shadow-md";

        card.innerHTML = `
            <h3 class="text-xl font-bold">${item.degree}</h3>
            <p class="text-gray-600 dark:text-gray-300">${item.institute}</p>
            <p class="text-sm">${item.year}</p>
            <p class="text-sm font-semibold">${item.score}</p>
        `;

        list.appendChild(card);
    });

    wrapper.appendChild(list);
}