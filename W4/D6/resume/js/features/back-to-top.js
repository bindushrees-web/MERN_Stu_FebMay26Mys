function initBackToTop() {
    const btn = document.getElementById("back-to-top");

    if (!btn) return;

    // Show/hide button on scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            btn.classList.remove("hidden");
        } else {
            btn.classList.add("hidden");
        }
    });

    // Scroll to top on click
    btn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}