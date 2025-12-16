// === 1. NAVIGATION FIXE : AJOUTER UNE CLASSE AU SCROLL ===

document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');

    // Fonction pour gérer l'ajout/retrait de la classe 'scrolled'
    const handleScroll = () => {
        // Si l'utilisateur a défilé de plus de 50 pixels
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    };

    // Écouteur d'événement pour le défilement (scroll)
    window.addEventListener('scroll', handleScroll);

    // Assurez-vous d'appeler la fonction au chargement initial
    handleScroll();
});

// === 2. DÉFILEMENT FLUIDE (Smooth Scrolling) ===
// Rend le défilement vers les sections (ex: #projets) plus agréable

document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Empêche le comportement par défaut (saut brutal)

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth' // Active le défilement fluide
            });
        }
    });
});
