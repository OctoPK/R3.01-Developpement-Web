const boutton = document.querySelectorAll("button");
const victoire = document.getElementById("victoire");
const défaite = document.getElementById("défaite");
const egalité = document.getElementById("egalité");
const joueur = document.getElementById("joueur");
const robot = document.getElementById("robot");
const reset = document.getElementById("reset");
const victory = document.getElementById("victory");
const element = ["feuille", "pierre", "ciseaux"];
boutton.forEach((boutton) => {
    boutton.addEventListener("click", () => {
        rand = element[Math.floor(Math.random() * element.length)];
        joueur.textContent = "J'ai joué : " + boutton.textContent;
        robot.textContent = "Le robot a joué : " + rand;
        if (rand == boutton.textContent) {
            victory.textContent = "C'est une egalité !";
            text = egalité.textContent;
            egalité.textContent = Number.parseInt(text) + 1 + " egalité";
        } else if (
            (rand == element[0] && boutton.textContent == element[1]) ||
            (rand == element[1] && boutton.textContent == element[2]) ||
            (rand == element[2] && boutton.textContent == element[0])
        ) {
            text = défaite.textContent;
            victory.textContent = "C'est une défaite !";
            défaite.textContent = Number.parseInt(text) + 1 + " défaite";
        } else {
            text = victoire.textContent;
            victory.textContent = "C'est une victoire !";
            victoire.textContent = Number.parseInt(text) + 1 + " victoire";
        }
    });
});

reset.addEventListener("click", () => {
    location.reload();
});
