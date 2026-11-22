
const favoris = [
    { id: 1, ville: "Venise", pays: "Italie", visite: false },
    { id: 2, ville: "Marrakech", pays: "Maroc", visite: true },
    { id: 3, ville: "Maldives", pays: "Maldives", visite: false },
    { id: 4, ville: "Barcelone", pays: "Espagne", visite: true }
];

// 1. Afficher toutes les destinations favorites
favoris.forEach(f => {
    console.log(f);
});

// 2. Afficher uniquement les destinations qui n'ont pas encore été visitées
const destinationsNonVisitees = favoris.filter(f => f.visite === false);
console.log(destinationsNonVisitees);

// 3. Créer un tableau contenant uniquement les noms des villes
const villes = favoris.map(f => f.ville);
console.log(villes);

// 4. Rechercher la destination ayant l'identifiant 3
const destination = favoris.find(f => f.id === 3);
console.log(destination);

// 5. Compter le nombre de destinations déjà visitées avec reduce()
const nombreVisitees = favoris.reduce((total, f) => {
    return total + (f.visite === true ? 1 : 0);
}, 0);
console.log(nombreVisitees);

// 6. Ajouter une nouvelle destination sans modifier le tableau original
const nouveauxFavoris = [
    ...favoris,
    { id: 5, ville: "Paris", pays: "France", visite: false }
];
console.log(nouveauxFavoris);

// 7. Modifier la propriété visite de la destination ayant l'identifiant 1
const favorisModifies = favoris.map(f =>
    f.id === 1 ? { ...f, visite: true } : f
);
console.log(favorisModifies);

// 8. Supprimer la destination ayant l'identifiant 2 sans modifier le tableau original
const favorisSansMarrakech = favoris.filter(f => f.id !== 2);
console.log(favorisSansMarrakech);
