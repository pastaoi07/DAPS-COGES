// scripts.js
document.addEventListener("DOMContentLoaded", () => {
    // Crée un observateur d'intersection
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        // Si l'élément est visible, on lui ajoute la classe 'visible'
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // On arrête d'observer cet élément une fois qu'il est visible
        }
      });
    }, {
      threshold: 0.5 // L'élément doit être à 50% dans la fenêtre pour être considéré comme visible
    });
  
    // Sélectionner tous les éléments à observer
    const elementsToAnimate = document.querySelectorAll('.fade-in');
    elementsToAnimate.forEach(element => {
      observer.observe(element);
    });
  });
  