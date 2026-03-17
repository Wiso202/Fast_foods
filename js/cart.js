/* Fichier : cart.js
   Description : Gestion du panier d'achat FlexiTech
*/

let cart = [];

/**
 * Ajoute un plat au panier
 * @param {String} name - Nom du plat
 * @param {Number} price - Prix unitaire
 */
function addToCart(name, price) {
    // Vérifier si le produit est déjà dans le panier
    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }

    updateCartUI();
    saveCart();
}

/**
 * Met à jour l'affichage du panier (compteur et total)
 */
function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const totalDisplay = document.getElementById('total-price');

    // Calculer le nombre total d'articles
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCount) cartCount.textContent = totalItems;

    // Calculer le prix total
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (totalDisplay) totalDisplay.textContent = `${totalPrice} ${CONFIG.currency}`;
}

/**
 * Sauvegarde le panier dans le navigateur (pour ne pas perdre la commande en changeant de page)
 */
function saveCart() {
    localStorage.setItem('flexitech_cart', JSON.stringify(cart));
}

/**
 * Charge le panier au démarrage
 */
function loadCart() {
    const savedCart = localStorage.getItem('flexitech_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
    }
}

/**
 * Fonction appelée par le bouton "Finaliser la commande"
 */
function checkout() {
    if (cart.length === 0) {
        alert("Votre panier est vide !");
        return;
    }

    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Appel de la fonction définie dans whatsapp-api.js
    sendWhatsAppOrder(cart, totalPrice);
    
    // Optionnel : Vider le panier après commande
    // clearCart();
}

function clearCart() {
    cart = [];
    localStorage.removeItem('flexitech_cart');
    updateCartUI();
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', loadCart);