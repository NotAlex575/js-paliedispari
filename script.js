//FUNCTION PALINDROMO
function check_palindromo(){
    const palindromo = prompt("Inserire una parola, e verifichiamo se è palindroma ");
    let destra_sinistra = palindromo.length-1;
    let is_palindromo = true;
    for(let sinistra_destra = 0; sinistra_destra < palindromo.length; sinistra_destra++){
        if(palindromo[sinistra_destra] == palindromo[destra_sinistra]){
            destra_sinistra--;
        }
        else{
            is_palindromo = false;
        }
    }
    return is_palindromo
}

//FUNCTION DADO
function function_dado(pari_o_dispari){
    const dadoUser = Math.floor((Math.random()*6 ) + 1)
    const dadoBot = Math.floor((Math.random()*6 ) + 1)
    const dadoSomma = dadoUser+dadoBot;
    console.log(`\nHa scelto ${pari_o_dispari} ed è uscito ${dadoUser} ell'utente e ${dadoBot} al bot, e la somma è ${dadoSomma}`)
    if(pari_o_dispari == "pari" && (dadoUser+dadoBot) % 2 == 0 || pari_o_dispari == "dispari" && (dadoUser+dadoBot) % 2 != 0){
        return true;
    }
    else{
        return false;
    }
}

//Variabile che contiene la value per eseguire o non eseguire uno dei 2 esercizi
let scelta_esercizio = prompt("quale esercizio eseguiamo?\n1 -> esercizio Mail\n2 -> esercizio dadi\naltro -> arresto del programma");
//se la scelta_esercizio ha valore 1, allora eseguiamo la 1 traccia
if (scelta_esercizio == 1){

    is_palindromo = check_palindromo();
    if(is_palindromo){
        console.log(`la parola è palindroma`);
    }
    else{
        console.log(`la parola non è palindroma`);
    }

}
//se la scelta_esercizio ha valore 2, allora eseguiamo la 2 traccia
else if (scelta_esercizio == 2){
    let pari_o_dispari = prompt("scegli tra pari o dispari");
    pari_o_dispari = pari_o_dispari.toLowerCase();
    if(pari_o_dispari == "pari" || pari_o_dispari == "dispari"){
        check_vittoria = function_dado(pari_o_dispari)
        if(check_vittoria){
            console.log("l'utente ha vinto!")
        }
        else{
            console.log("l'utente ha perso....")
        }
    }
    else{
        console.log("valore inserito non riconosciuto....")
    }
}
