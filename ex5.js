// Complétez ce programme issu du cours pour y ajouter la gestion de l'inventaire des personnages. Voici les améliorations à intégrer :

// L'inventaire d'un personnage se compose d'un nombre de pièces d'or et d'un nombre de clés.
// Tous les personnages possèdent initialement 10 pièces d'or et une clé.
// L'inventaire doit être affiché dans la description d'un joueur.
// Lorsqu'un personnage tue un adversaire, il récupère dans son propre inventaire le nombre de pièces d'or et de clés de cet adversaire.

// Ajoutez votre code ici
class Personnage {
    constructor(nom, pv, strenght) {
      this.nom = nom;
      this.pv = pv;
      this.strenght = strenght;
      this.key = 1;
      this.gold =10;
      this.xp = 0;
    };
  
    decrire() {
        return `${this.nom} a ${this.pv} points de vie, ${this.strenght} en force et ${this.xp} points d'experience, ${this.gold} pièces d'or et ${this.key} clé(s)`;
    };

    attaquer(cible){
        if(cible.pv > this.strenght ){
            cible.pv -= this.strenght
        }else if(this.strenght>=cible.pv){
            cible.pv = 0;
            this.xp+=10;

            this.key+= cible.key;
            cible.key = 0;

            this.gold+= cible.gold;
            cible.gold = 0
        }
        
    }
  }

// "Aurora a 150 points de vie, 25 en force et 0 points d'expérience, 10 pièces d'or et 1 clé(s)"
const aurora = new Personnage("Aurora", 150, 25);

console.log(aurora.decrire());

const monstre = new Personnage("ZogZog", 20, 10);
monstre.attaquer(aurora);
aurora.attaquer(monstre); // Le monstre est tué

// "Aurora a 140 points de vie, 25 en force et 10 points d'expérience, 20 pièces d'or et 2 clé(s)"
console.log(aurora.decrire());
console.log(monstre.decrire());