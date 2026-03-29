window.addEventListener("scroll", function () {
    const scrollTop = window.scrollY;
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop/totalHeight)*100;
    document.getElementById("scroll-bar").style.width = scrollPercent + "%";
});