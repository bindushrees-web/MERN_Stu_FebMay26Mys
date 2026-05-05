function initScrollProgress() {
    const progressBar = document.getElementById("scroll-progress");

    if (!progressBar) return;

    window.addEventListener("scroll", function () {
        const scrollTop = window.scrollY;

        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

        const scrollPercent = (scrollTop / scrollHeight) * 100;

        progressBar.style.width = scrollPercent + "%";
    });
}