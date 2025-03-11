document.addEventListener("DOMContentLoaded", function () {
    const missions = document.querySelectorAll(".mission");

    missions.forEach(mission => {
        mission.addEventListener("mouseenter", () => {
            const randomX = (Math.random() - 0.5) * 40; // Mouvement entre -20px et 20px
            const randomY = (Math.random() - 0.5) * 40;
            const randomRotate = (Math.random() - 0.5) * 10; // Rotation entre -5° et 5°

            mission.style.transition = "transform 0.3s ease-out";
            mission.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotate}deg)`;
        });

        mission.addEventListener("mouseleave", () => {
            mission.style.transform = "translate(0, 0) rotate(0)";
        });
    });
});
