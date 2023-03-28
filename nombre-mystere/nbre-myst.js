Math.random();
const MAX_VALUE=1000;
let value = Math.floor (Math.random() * MAX_VALUE);
let i=0;
let getPrompt;
let elt_info = document.getElementById ("infos");

function init_nbre_myst() {
    document.getElementById("valeur").addEventListener('focus', onFocus);
    document.getElementById("valeur").addEventListener('blur', outFocus);
}
function onFocus (event){
    let elt_info = document.getElementById ("infos");
    elt_info.innerHTML = "";
}
function affich_message (message) {
    let elt_info = document.getElementById ("infos");
    elt_info.innerHTML=message;
}
function outFocus (event){
    let elt_info = document.getElementById ("infos");
    elt_info.innerHTML= 'cliquez sur "Envoyer"'
}
function saisie (){
   // do {
       // getPrompt =(prompt("entrez un valeur entre 1 et 1000"));
        let getPrompt = document.getElementById ("valeur").value;
        if (isNaN (parseInt (getPrompt))){
            affich_message("veuillez saisir un nombre");
        }
        else if (getPrompt < 0 || getPrompt > 1000){
            affich_message (" le nombre doit être entre 0 et 1000");
        }
        else{
            //return (getPrompt);
            i++;
            if (getPrompt == value) {
                affich_message ("victoire, vous avez gagné en "+ i +" tours");
            }
            else if(getPrompt < value){
                affich_message ("Le nombre mystère est supérieur");
            }
            else {
                affich_message ("le nombre mystère est inférieur");
                }
        }
        console.log (value)
  //  }while(true);
}

// parseInt pour vérifier la saisie