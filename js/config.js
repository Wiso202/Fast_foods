/* Fichier : config.js
    Projet : FlexiTech - Restaurant Template
    Description : Configuration centrale du client pour Akpakpa
*/

const CONFIG = {
    // 1. Informations Générales
    brandName: "FLEXITECH RESTO",
    restoName: "MAQUIS LE PLAISIR",
    slogan: "Le goût authentique du Bénin à Akpakpa",
    logoUrl: "assets/img/logo.png",

    // 2. Contacts & Réseaux Sociaux
    whatsappNumber: "2290140434120", // Format sans le '+'
    phoneNumber: "+229 01 40 43 41 20",
    email: "contact@leplaisir.bj",
    
    // 3. Localisation
    address: "Rue de la Paix, Akpakpa, Cotonou",
    googleMapsLink: "https://goo.gl/maps/example", // Lien vers le point GPS

    // 4. Horaires d'ouverture
    horaires: "Lun - Dim : 11h00 - 23h30",

    // 5. Paramètres du Panier
    currency: "FCFA",
    deliveryFee: 500, // Frais de livraison par défaut pour Akpakpa
};

// Fonction pour injecter automatiquement les données dans les pages
document.addEventListener("DOMContentLoaded", () => {
    // Injection du nom du restaurant
    const nameElements = document.querySelectorAll("#resto-name, .logo span");
    nameElements.forEach(el => el.textContent = CONFIG.restoName);

    // Injection de l'adresse
    const addrElements = document.querySelectorAll("#resto-address");
    addrElements.forEach(el => el.textContent = CONFIG.address);

    // Injection du téléphone
    const telElements = document.querySelectorAll("#resto-tel");
    telElements.forEach(el => {
        el.textContent = CONFIG.phoneNumber;
        el.href = `tel:${CONFIG.whatsappNumber}`;
    });
});