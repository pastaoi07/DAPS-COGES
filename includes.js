document.addEventListener("DOMContentLoaded", function () {
    // Charger le header
    fetch("head.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
        });

    // Charger le footer
    fetch("foot.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        });
});
