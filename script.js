//Variabile che contiene la value per eseguire o non eseguire uno dei 2 esercizi
let scelta_esercizio = prompt("quale esercizio eseguiamo?\n1 -> esercizio Mail\n2 -> esercizio dadi\naltro -> arresto del programma");
//se la scelta_esercizio ha valore 1, allora eseguiamo la 1 traccia
if (scelta_esercizio == 1){
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

    if(is_palindromo){
        console.log(`la parola ${palindromo} è palindroma`);
    }
    else{
        console.log(`la parola ${palindromo} non è palindroma`);
    }

}
//se la scelta_esercizio ha valore 2, allora eseguiamo la 2 traccia
else if (scelta_esercizio == 2){
    const pari_o_dispari = prompt("scegli tra pari o dispari");
    if(pari_o_dispari == "pari" || pari_o_dispari == "dispari"){
        const dado = Math.floor((Math.random() *6)+1)
    }

}
