function initTypingAnimation() {

    const element = document.getElementById("typing-text");
    if (!element) return;

    const roles = [
        "Full-Stack Developer",
        "MERN Stack Enthusiast",
        "Competitive Programmer",
        "Software Engineer"
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {

        const currentRole = roles[roleIndex];

        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        element.textContent = currentRole.slice(0, charIndex);

        let speed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentRole.length) {
            speed = 1500; 
            isDeleting = true;
        }

        else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            speed = 500;
        }
        setTimeout(typeEffect, speed);
    }
    typeEffect();
}