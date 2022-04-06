// Complétez ce programme pour créer un objet compte ayant les propriétés suivantes :
// - Une propriété titulaire valant "Alex".
// - Une propriété solde valant initialement 0.
// - Une méthode crediter() ajoutant le montant passé en paramètre (éventuellement négatif) au solde du compte.
// - Une méthode decrire() renvoyant la description du compte.
// Utilisez cet objet pour afficher sa description, le créditer de 250, puis le débiter de 80, et enfin afficher de nouveau sa description.

// Ajoutez votre code ici
const compte = {
    titulaire: "Alex",
    solde:0,
    
    decrire(){
        return`le compte de ${this.titulaire} est à ${this.solde} €`
    }
};

console.log(compte.decrire());
compte.crediter(250);
console.log(compte.decrire());
compte.crediter(-80);
console.log(compte.decrire());
