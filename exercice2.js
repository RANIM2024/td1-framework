
const reservations = [
    { numero: 101, client: "Nadia", destination: "Bali", montant: 1800, statut: "Confirmée" },
    { numero: 102, client: "Karim", destination: "Rome", montant: 950, statut: "En attente" },
    { numero: 103, client: "Leila", destination: "Tokyo", montant: 2500, statut: "Confirmée" },
    { numero: 104, client: "Sami", destination: "Santorin", montant: 1200, statut: "Annulée" },
    { numero: 105, client: "Amira", destination: "Djerba", montant: 500, statut: "Confirmée" }
];

// 1. Créer un tableau contenant uniquement les réservations confirmées
const reservationsConfirmees = reservations.filter(r => r.statut === "Confirmée");
console.log(reservationsConfirmees);

// 2. Créer un tableau contenant les noms des clients
const clients = reservations.map(r => r.client);
console.log(clients);

// 3. Rechercher la réservation numéro 103
const reservation = reservations.find(r => r.numero === 103);
console.log(reservation);

// 4. Calculer le montant total des réservations confirmées
const montantTotal = reservations
    .filter(r => r.statut === "Confirmée")
    .reduce((total, r) => total + r.montant, 0);
console.log(montantTotal);

// 5. Vérifier si toutes les réservations sont confirmées
const toutesConfirmees = reservations.every(r => r.statut === "Confirmée");
console.log(toutesConfirmees);

// 6. Créer un tableau contenant les clients et leurs destinations
const clientsVoyages = reservations.map(r => ({
    client: r.client,
    voyage: r.destination
}));
console.log(clientsVoyages);
