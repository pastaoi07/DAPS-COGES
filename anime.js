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
