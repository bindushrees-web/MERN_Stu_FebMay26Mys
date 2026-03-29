const languageSwitcher = document.getElementById("language-switcher");

languageSwitcher.addEventListener("click", function () {
    const lang = this.value;
    if (lang === "kn") {
        document.getElementById("Myname").textContent = "ಬಿಂದು ಶ್ರೀ ";
        document.getElementById("project-name").textContent = "ನನ್ನ ಪ್ರಾಜೆಕ್ಟ್‌ಗಳು";
        document.getElementById("contact-name").textContent = "ನನ್ನನ್ನು ಸಂಪರ್ಕಿಸಿ";
        document.getElementById("Edct and expe").textContent = "ಎಜುಕೇಶನ್  ಅಂಡ್ ಎಕ್ಸ್ಪೀರಿಯೆನ್ಸ್ ";
        document.getElementById("skill").textContent = "ಸ್ಕಿಲ್ಸ್";
    } else {
        document.getElementById("Myname").textContent = "Bindu Shree S";
        document.getElementById("project-name").textContent = "My Projects";
        document.getElementById("contact-name").textContent = "Contact Me";
        document.getElementById("Edct and expe").textContent = "Education and Experience";
        document.getElementById("skill").textContent = "Skills";
    }
});