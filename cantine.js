const Client = "Awa";
const codePlat = 1;
const quantiteTexte = "3";
const montantVerse = 5000;

const quantite = Number(quantiteTexte);

let nomPlat;
let prixUnitaire;

switch (codePlat) {
    case 1:
        nomPlat = "Attiéké-poisson";
        prixUnitaire = 1500;
        break;
    case 2:
        nomPlat = "Riz-poulet";
        prixUnitaire = 2000;
        break;
    case 3:
            nomPlat = "Alloco-oeuf";
            prixUnitaire = 1000;
            break;
        default:
            nomPlat = null;
}
function calculerTotal(prixUnitaire, quantite) {
    return prixUnitaire * quantite;
}
if (nomPlat === null || !Number.isInteger(quantite) || quantite <= 0) {
    console.log("Erreur : code (1 à 3) ou quantite invalide.");
} else {
    const total = calculerTotal(prixUnitaire, quantite);

    console.log( `Client : ${Client}`);
    for (let i = 1; i <= quantite; i++) {
        console.log(`Portion ${i} : ${nomPlat} - ${prixUnitaire} FCFA`);
   } 
console.log(`Total à payer : ${total} FCFA`);
if (montantVerse >= total) {
    console.log(`Monnaie à rendre : ${montantVerse - total} FCFA`);
    } else {
    console.log(`Montant manquant :${total - montantVerse} FCFA`);
    }
}
