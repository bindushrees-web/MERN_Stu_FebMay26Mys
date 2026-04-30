function initScrollSpy() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    if (!sections.length || !navLinks.length) return;

    window.addEventListener("scroll", function () {
        let currentSectionId = "";

        sections.forEach(function (section) {
            const sectionTop = section.offsetTop - 100; // adjust for navbar height
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSectionId = section.getAttribute("id");
            }
        });

        navLinks.forEach(function (link) {
            link.classList.remove("text-blue-600", "font-bold");

            const href = link.getAttribute("href").substring(1);

            if (href === currentSectionId) {
                link.classList.add("text-blue-600", "font-bold");
            }
        });
    });
}