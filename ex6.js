// Reprenons le contexte des comptes en banque issu d'un précédent exercice. Un compte bancaire sera modélisé par une classe définie comme suit :

// Une propriété titulaire initialisée par le constructeur.
// Une propriété solde valant initialement 0.
// Une méthode crediter() ajoutant le montant passé en paramètre (éventuellement négatif) au solde du compte.
// Une méthode decrire() renvoyant la description du compte.
// Ecrivez un programme qui crée 3 comptes bancaires, l'un appartenant à Alex, le deuxième à CLovis et le troisième à Marco. Stockez ces comptes dans un tableau.

// Ensuite, le programme crédite 1000 € et affiche la description de chacun des comptes.


// Ajoutez votre code ici

class Compte {
    constructor(titulaire) {
      this.titulaire = titulaire;
      this.solde = 0;
    }

    decrire() {
      return `${this.titulaire} a ${this.solde}€ sur son compte`;
    }

    crediter(somme){
        this.solde+=somme;
    }

  }



const alex = new Compte("Alex");
const clovis = new Compte("Clovis");
const marco = new Compte("Marco");

console.log(alex)
console.log(clovis)
console.log(marco)

var noms =[alex,clovis,marco];

noms.forEach(element => element.crediter(1000));

console.log(alex)
console.log(clovis)
console.log(marco)