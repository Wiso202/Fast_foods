/* Fichier : whatsapp-api.js
   Description : Gère l'envoi des données vers WhatsApp
*/

/**
 * Envoie la commande du panier vers WhatsApp
 * @param {Array} cartItems - Liste des produits (nom, prix, quantité)
 * @param {Number} total - Montant total
 */
function sendWhatsAppOrder(cartItems, total) {
    const phone = CONFIG.whatsappNumber;
    
    let message = `*COMMANDE FLEXITECH RESTO*\n`;
    message += `--------------------------\n`;
    
    cartItems.forEach(item => {
        message += `• ${item.name} (x${item.quantity}) : ${item.price * item.quantity} ${CONFIG.currency}\n`;
    });

    message += `--------------------------\n`;
    message += `*TOTAL : ${total} ${CONFIG.currency}*\n`;
    message += `_Livraison à prévoir vers Akpakpa_`;

    // Encodage du message pour l'URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;

    // Ouverture de WhatsApp
    window.open(whatsappUrl, '_blank');
}

/**
 * Envoie une demande de réservation
 */
function sendWhatsAppReservation(event) {
    event.preventDefault(); // Empêche le rechargement de la page
    
    const name = document.querySelector('#res-name').value;
    const guests = document.querySelector('#res-guests').value;
    const date = document.querySelector('#res-date').value;

    let message = `*RÉSERVATION DE TABLE*\n`;
    message += `--------------------------\n`;
    message += `👤 *Client :* ${name}\n`;
    message += `👥 *Nombre :* ${guests} personnes\n`;
    message += `📅 *Date/Heure :* ${date}\n`;
    message += `--------------------------\n`;
    message += `_Merci de nous confirmer la disponibilité._`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
}