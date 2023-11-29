// Déclaration des variables global
let totalSaisi;
let monnaieSaisi;
let aRendre;
let nbr10Euros;
let nbr5Euros;
let nbr1Euro;
let messageDix = document.getElementById("messageDix");
let messageCinq = document.getElementById("messageCinq");
let messageUn = document.getElementById("messageUn");

function initialisation () {
    messageDix.innerHTML = "0";
    messageCinq.innerHTML = "0";
    messageUn.innerHTML = "0";
}

initialisation();

function calculMonnaie() {
    // remise à zéro 
    nbr10Euros = 0;
    nbr5Euros = 0;
    nbr1Euro = 0;

    totalSaisi = document.getElementById("total");
    monnaieSaisi = document.getElementById("monnaie");
    aRendre = totalSaisi -monnaieSaisi;

    while (aRendre >= 10) {
        nbr10Euros++;
        aRendre = aRendre - 5;
    }
    if (aRendre >= 5) {
        nbr5Euros++;
        aRendre = aRendre -5;
    }
    messageDix.innerHTML = nbr10Euros;
    messageCinq.innerHTML = nbr5Euros;
    messageUn.innerHTML = aRendre;
}

document.getElementById("bouton").addEventListener("click", calculMonnaie, false);