document.addEventListener("DOMContentLoaded", function () {
    const snowContainer = document.getElementById("snow-container");

    function createSnowflake() {
        const snowflake = document.createElement("div");
        snowflake.classList.add("snowflake");
        snowflake.innerHTML = "❄"; // Emoji flocon de neige
        snowflake.style.left = Math.random() * 100 + "vw"; // Position aléatoire
        snowflake.style.animationDuration = (Math.random() * 3 + 2) + "s"; // Durée variable
        snowflake.style.opacity = Math.random(); // Opacité aléatoire
        snowflake.style.fontSize = Math.random() * 10 + 10 + "px"; // Taille variable

        snowContainer.appendChild(snowflake);

        // Supprime le flocon après qu'il soit tombé
        setTimeout(() => {
            snowflake.remove();
        }, 5000);
    }

    // Générer des flocons toutes les 300ms
    setInterval(createSnowflake, 300);
});
