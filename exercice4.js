
// Partie A – Manipulation des tableaux

const destinationsEurope = ["Rome", "Paris", "Madrid"];
const destinationsAsie = ["Tokyo", "Bali", "Bangkok"];

// 1. Copier le tableau destinationsEurope
const copieEurope = [...destinationsEurope];
console.log(copieEurope);

// 2. Fusionner les deux tableaux
const toutesDestinations = [...destinationsEurope, ...destinationsAsie];
console.log(toutesDestinations);

// 3. Ajouter Lisbonne au début sans modifier le tableau original
const avecLisbonne = ["Lisbonne", ...destinationsEurope];
console.log(avecLisbonne);

// 4. Ajouter Londres à la fin sans modifier le tableau original
const avecLondres = [...destinationsEurope, "Londres"];
console.log(avecLondres);

// 5. Créer un nouveau tableau contenant toutes les destinations sauf Paris
const sansParis = destinationsEurope.filter(d => d !== "Paris");
console.log(sansParis);


// Partie B – Manipulation des objets

const reservation = {
    numero: 201,
    client: "Nadia",
    destination: "Bali",
    statut: "En attente"
};

// 1. Créer une copie de l'objet
const copieReservation = { ...reservation };
console.log(copieReservation);

// 2. Créer une nouvelle réservation dont le statut est Confirmée
const reservationConfirmee = {
    ...reservation,
    statut: "Confirmée"
};
console.log(reservationConfirmee);

// 3. Ajouter une propriété assurance: true
const reservationAssuree = {
    ...reservation,
    assurance: true
};
console.log(reservationAssuree);

// 4. Modifier simultanément le statut et la destination
const nouvelleReservation = {
    ...reservation,
    statut: "Confirmée",
    destination: "Tokyo"
};
console.log(nouvelleReservation);
