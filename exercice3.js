
// Partie A – Déstructuration d'un tableau

const pays = ["Italie", "Japon", "Grèce", "Espagne", "Canada"];

// 1. Extraire le premier et le deuxième pays
const [premierPays, deuxiemePays] = pays;
console.log(premierPays);
console.log(deuxiemePays);

// 2. Extraire uniquement le troisième pays
const [, , troisiemePays] = pays;
console.log(troisiemePays);

// 3. Extraire le premier pays et récupérer les autres
const [destinationPrincipale, ...autresPays] = pays;
console.log(destinationPrincipale);
console.log(autresPays);


// Partie B – Déstructuration d'un objet

const voyage = {
    destination: "Bali",
    prix: 1800,
    duree: 10,
    transport: "Avion",
    hotel: "5 étoiles"
};

// 1. Extraire destination et prix
const { destination, prix } = voyage;
console.log(destination);
console.log(prix);

// 2. Extraire destination dans une variable appelée ville
const { destination: ville } = voyage;
console.log(ville);

// 3. Extraire prix et duree avec des valeurs par défaut
const { prix: prixVoyage = 0, duree: dureeVoyage = 1 } = voyage;
console.log(prixVoyage);
console.log(dureeVoyage);

// 4. Fonction afficherVoyage() avec destructuring dans les paramètres
function afficherVoyage({ destination, prix, duree, transport, hotel }) {
    console.log("Destination :", destination);
    console.log("Prix :", prix);
    console.log("Durée :", duree);
    console.log("Transport :", transport);
    console.log("Hôtel :", hotel);
}

afficherVoyage(voyage);
