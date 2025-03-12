document.addEventListener("DOMContentLoaded", function () {
    let observerOptions = { threshold: 0.2 };

    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, observerOptions);

    // Observer le titre principal et les images
    document.querySelectorAll(".image, .main-title").forEach(element => {
        observer.observe(element);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".image");

    images.forEach(image => {
        image.addEventListener("click", function () {
            const zoomedImage = document.createElement("div");
            zoomedImage.classList.add("zoomed-image");
            zoomedImage.innerHTML = `<img src="${this.src}" class="zoom-img">`;

            // Fermer l'image en cliquant dessus
            zoomedImage.addEventListener("click", function () {
                zoomedImage.remove();
            });

            document.body.appendChild(zoomedImage);
        });
    });
});
