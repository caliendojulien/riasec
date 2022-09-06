let compteur = 1;
let riasec = {r: 0, i: 0, a: 0, s: 0, e: 0, c: 0};
const R = 1, I = 2, A = 3, S = 4, E = 5, C = 6;

appelApi(compteur);

function reponse(unBooleen) {
    compteur++;
    appelApi(compteur, unBooleen);
}

function appelApi(numeroQuestion, unBooleen) {
    fetch("http://localhost:8000/api/questions/" + numeroQuestion)
        .then(elInput => elInput.json())
        .then(donnees => {
                affichage(donnees);
                if (unBooleen) {
                    majRiasec(donnees);
                }
            }
        );
}

function majRiasec(json) {
    switch (json.serial) {
        case R :
            riasec.r = riasec.r + 1;
            break;
        case I :
            riasec.i = riasec.i + 1;
            break;
        case A :
            riasec.a = riasec.a + 1;
            break;
        case S :
            riasec.s = riasec.s + 1;
            break;
        case E :
            riasec.e = riasec.e + 1;
            break;
        case C :
            riasec.c = riasec.c + 1;
            break;
    }
}

function affichage(json) {
    document.getElementById('question').innerText = json.text;
    document.getElementById('reponse1').innerText = json.responses[0].name;
    document.getElementById('reponse2').innerText = json.responses[1].name;
    document.getElementById("r").innerText = riasec["r"];
    document.getElementById("i").innerText = riasec["i"];
    document.getElementById("a").innerText = riasec["a"];
    document.getElementById("s").innerText = riasec["s"];
    document.getElementById("e").innerText = riasec["e"];
    document.getElementById("c").innerText = riasec["c"];
}
