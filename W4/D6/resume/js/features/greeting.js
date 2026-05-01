function initGreeting() {
    const greetingElement = document.getElementById("greeting");

    if (!greetingElement) return;

    const hour = new Date().getHours();
    let message = "";

    if (hour < 12) {
        message = "Good Morning ☀️";
    } else if (hour < 17) {
        message = "Good Afternoon 🌤️";
    } else {
        message = "Good Evening 🌙";
    }

    greetingElement.textContent = message;
}