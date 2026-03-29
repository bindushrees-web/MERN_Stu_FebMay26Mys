const nameInput = document.getElementById("contact-name");
const emailInput = document.getElementById("contact-email");

nameInput.addEventListener("input", saveData);
emailInput.addEventListener("input", saveData);

function saveData() {
    const data = {
        name: nameInput.value,
        email: emailInput.value
    };
    localStorage.setItem("contactData", JSON.stringify(data));
}

function loadData() {

    const saved = localStorage.getItem("contactData");

    if (saved) {
        const data = JSON.parse(saved);

        nameInput.value = data.name || "";
        emailInput.value = data.email || "";
    }
}
loadData();