
const destinations = [
    { id: 1, ville: "Santorin", pays: "Grèce", prix: 1200, duree: 7, disponible: true },
    { id: 2, ville: "Bali", pays: "Indonésie", prix: 1800, duree: 10, disponible: true },
    { id: 3, ville: "Istanbul", pays: "Turquie", prix: 750, duree: 5, disponible: false },
    { id: 4, ville: "Rome", pays: "Italie", prix: 950, duree: 4, disponible: true },
    { id: 5, ville: "Tokyo", pays: "Japon", prix: 2500, duree: 12, disponible: true },
    { id: 6, ville: "Djerba", pays: "Tunisie", prix: 500, duree: 6, disponible: false }
];

// 1. Afficher le nom de toutes les villes avec forEach()
destinations.forEach(d => {
    console.log(d.ville);
});

// 2. Créer un tableau contenant uniquement les noms des villes avec map()
const villes = destinations.map(d => d.ville);
console.log(villes);

// 3. Afficher les destinations dont le prix est inférieur à 1500 DT avec filter()
const destinationsPrix = destinations.filter(d => d.prix < 1500);
console.log(destinationsPrix);

// 4. Rechercher la destination dont l'identifiant est égal à 3 avec find()
const destination = destinations.find(d => d.id === 3);
console.log(destination);

// 5. Trouver la position de Tokyo dans le tableau avec findIndex()
const position = destinations.findIndex(d => d.ville === "Tokyo");
console.log(position);

// 6. Vérifier s'il existe au moins une destination disponible avec some()
const existe = destinations.some(d => d.disponible === true);
console.log(existe);

// 7. Vérifier si toutes les destinations ont un prix supérieur à zéro avec every()
const prixValides = destinations.every(d => d.prix > 0);
console.log(prixValides);

// 8. Calculer le budget total nécessaire pour visiter toutes les destinations avec reduce()
const budgetTotal = destinations.reduce((total, d) => total + d.prix, 0);
console.log(budgetTotal);
console.log("TEST OK");