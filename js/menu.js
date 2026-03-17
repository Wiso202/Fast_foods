/* Fichier : menu.js
   Description : Gère l'affichage dynamique des plats et le filtrage par catégorie
*/

// 1. La base de données des plats (à modifier pour chaque client)
const PLATS_DATA = [
    {
        id: 1,
        nom: "Atassi Complet",
        prix: 2500,
        categorie: "plats",
        image: "assets/img/plats/plat1.jpg",
        description: "Riz et haricots, servi avec friture et poisson."
    },
    {
        id: 2,
        nom: "Poulet Bicyclette",
        prix: 4500,
        categorie: "plats",
        image: "assets/img/plats/plat2.jpg",
        description: "Poulet local braisé aux épices du pays."
    },
    {
        id: 3,
        nom: "Jus d'Ananas Frais",
        prix: 1000,
        categorie: "boissons",
        image: "assets/img/plats/jus.jpg",
        description: "Ananas pain de sucre de Parakou."
    },
    {
        id: 4,
        nom: "Bière Béninoise",
        prix: 1000,
        categorie: "boissons",
        image: "assets/img/plats/biere.jpg",
        description: "La Béninoise bien glacée."
    }
];

/**
 * Affiche les plats dans la grille HTML
 * @param {Array} liste - La liste des plats à afficher
 */
function afficherPlats(liste) {
    const conteneur = document.getElementById('menu-display');
    if (!conteneur) return; // Sécurité si on n'est pas sur la page menu

    conteneur.innerHTML = ''; // On vide le conteneur

    liste.forEach(plat => {
        const carteHTML = `
            <div class="menu-card animate__animated animate__fadeIn">
                <img src="${plat.image}" alt="${plat.nom}">
                <div class="card-body">
                    <h3>${plat.nom}</h3>
                    <p class="desc">${plat.description}</p>
                    <p class="price">${plat.prix} ${CONFIG.currency}</p>
                    <button class="btn-jaune" onclick="addToCart('${plat.nom}', ${plat.prix})">
                        Ajouter au panier
                    </button>
                </div>
            </div>
        `;
        conteneur.innerHTML += carteHTML;
    });
}

/**
 * Gère le filtrage par catégorie (Plats / Boissons)
 */
function filtrerMenu(categorie) {
    if (categorie === 'all') {
        afficherPlats(PLATS_DATA);
    } else {
        const resultats = PLATS_DATA.filter(p => p.categorie === categorie);
        afficherPlats(resultats);
    }

    // Mise à jour visuelle des boutons de filtre
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-cat') === categorie) {
            btn.classList.add('active');
        }
    });
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    // Afficher tous les plats par défaut
    afficherPlats(PLATS_DATA);

    // Ajouter les écouteurs d'événements sur les boutons de catégorie
    const filterButtons = document.querySelectorAll('.tab-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const cat = btn.getAttribute('data-cat');
            filtrerMenu(cat);
        });
    });
});