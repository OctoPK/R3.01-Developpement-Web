let boutton = document.querySelectorAll("button");
let victoire = document.getElementById("victoire");
let défaite = document.getElementById("défaite");
let egalité = document.getElementById("egalité");
let joueur = document.getElementById("joueur");
let robot = document.getElementById("robot");
let reset = document.getElementById("reset");
let victory = document.getElementById("victory");
let element = ["feuille", "pierre", "ciseaux"];
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
