

// // Ici dans cette partie nous allons commencer par faire la recupération
// // de données afin de le rendre dynamique

// 1. NOS VARIABLES

const form = document.querySelector('.form-quizz');
let tableauResultats = [];
const reponses = ['b','c','b','c','a'];
const emojis = ['✔️','✨','👀','😭','👎'];
const titreResultat = document.querySelector('.resultats h2');
const noteResultat = document.querySelector('.note');
const aideResultat = document.querySelector('.aide');
const toutesLesQuestions = document.querySelectorAll('.question-block');
let verifierTableau = [];


// 2. LES EVENEMENTS

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(document.querySelector('input[name="q1"]:checked').value);

    for(i = 1; i < 6; i++) {
        tableauResultats.push(document.querySelector(`input[name="q${i}"]:checked`).value)
    }
    // console.log(tableauResultats);
    verifierFunction(tableauResultats);
    tableauResultats = [];
})

function verifierFunction(tabResultats) {

    for(let a = 0; a < 5; a++){

        if(tabResultats[a] === reponses[a]) {
            verifierTableau.push(true);
        } else {
            verifierTableau.push(false);
        }

    }

    // console.log(verifTableau);
    afficherResultats(verifierTableau);
    couleursFonction(verifierTableau);
    verifierTableau = [];
}

function afficherResultats(tabCheck) {

    const nbDeFautes = tabCheck.filter(elements => elements !== true).length;
    // console.log(nbDeFautes);


    // LA CONDITION SWITCH Pour faire la vérification des resultas 

    switch(nbDeFautes) {

        // 0 

        case 0:
            titreResultat.innerText = `✔️ Félicitation, vous gagner la partie  ! ✔️`
            aideResultat.innerText = ''
            noteResultat.innerText = '5/5'
            break;

        // 1

        case 1:
            titreResultat.innerText = `✨ Vous y êtes presque ! ✨`
            aideResultat.innerText = 'Retentez une autre réponse dans la case rouge, puis re-validez !'
            noteResultat.innerText = '4/5'
            break;

        // 2

        case 2:
                titreResultat.innerText = `✨ Encore un effort ... 👀`
                aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
                noteResultat.innerText = '3/5'
            break;

        // 3

        case 3:
            titreResultat.innerText = `👀 Il reste quelques erreurs. 😭`
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResultat.innerText = '2/5'
            break;

        // 4

        case 4:
            titreResultat.innerText = `😭 Peux mieux faire ! 😭`
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResultat.innerText = '1/5'
            break;

        // 5

        case 5:
            titreResultat.innerText = `👎 Peux mieux faire ! 👎`
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResultat.innerText = '0/5'
        break;

        default:
            'Wops, cas innatendu.';

    }

}


// Vérification de la couleur losque le questions sont bien remplis/
// la couleur verte losque les questions sont correctes

function couleursFonction(tabValBool) {

    for(let i = 0; i < tabValBool.length; i++){

        if(tabValBool[i] === true){
            toutesLesQuestions[i].style.background = 'lightgreen';
            
        } else {
            toutesLesQuestions[i].style.background = 'red';
            // toutesLesQuestions[j].style.background = '#ffb8b8';
            toutesLesQuestions[i].classList.add('echec');

            setTimeout(() => {
                toutesLesQuestions[i].classList.remove('echec');
            }, 500)
        }
        
    }

}

// La gestion des couleurs lorsque la question selectionnée est fausse 
// Avant la deuxième selection on repasse en blanc

toutesLesQuestions.forEach(item => {
    item.addEventListener('click', () => {
        item.style.background = "white";
    })
})
