document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector('#mobile-menu');
    const navLinks = document.querySelector('#navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('is-active');
            
            // Empêche le scroll de la page quand le menu est ouvert
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
        });

        // Fermer le menu si on clique sur un lien (ex: pour les ancres #)
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('is-active');
                document.body.style.overflow = 'auto';
            });
        });
    }
});
