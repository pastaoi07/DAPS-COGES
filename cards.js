document.querySelectorAll(".missions-container").forEach(doc => {
    doc.addEventListener("mouseenter", () => {
        const randomX = (Math.random() - 0.5) * 40; // Mouvement entre -20px et 20px
        const randomY = (Math.random() - 0.5) * 40;
        const randomRotate = (Math.random() - 0.5) * 20; // Rotation aléatoire

        doc.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotate}deg)`;
    });

    doc.addEventListener("mouseleave", () => {
        doc.style.transform = "translate(0, 0) rotate(0)";
    });
});
