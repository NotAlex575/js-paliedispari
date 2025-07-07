Esercizio di oggi:
nome repo: js-paliedispari

Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

Consigli del giorno
Scriviamo sempre in italiano i passaggi che vogliamo fare,
Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.,

Domande da  farsi quando si crea una funzione:
Come dovrebbe chiamarsi?,
Ho bisogno di parametri?,
Devo restituire un valore?,
Se sì, di che tipo?


___________________________________________________

Esercizio:

1 Siccome questo esercizio è composto da 2 tracce, facciamo prima scegliere all'utente quale esercizio fare: 2 mettiamo in input la scelta della traccia (1 -> esercizio palindromo, 2 -> esercizio pari e dispari, altro valore -> arresto dell'esecuzione del programma)

2 ?se vuole fare l'esercizio del palindromo, allora

2.1 chiediamo all'utente di inserire una parola per vedere se è palindroma (vengono inoltre inseriti 2 valori di controllo, 1 is_palindromo (per controllare con un valore booleano se è palindromo) e il 2 destra_sinistra(valore che controllerà le parole in palindromo da destra a sinistra))

2.2 creiamo un ciclo for per controllare la stringa, e vedere se è palindroma (il valore del contatore si chiama sinistra_destra, poichè ci servirà per controllare le parole da sinistra a destra)

  <!--FOR-->

  2.2.1 ? se la lettera nella posizione sinistra_destra è 
  uguale alla lettara nella posizione destra_sinistra, allora

    2.2.1.1 decrementiamo destra_sinistra (in modo tale da 
    controllare la parola che ci sta prima)

  2.2.2 altrimenti

    2.2.2.1 la parola non è palindroma, settiamo la variabile 
    booleana is_palindromo false

  <!--FINE FOR-->

2.3 ?se il valore is_palindromo è true, allora

  2.3.1 la parola è palindroma

2.4 altrimenti

  2.4.1 la parola non è palindroma

3 altrimenti

3.1 chiediamo all'utente se vuole chiamare nel gioco se esce un valore pari o dispari (dove il valore verrà messo dentro pari_o_dispari)

3.2 ?se il valore di pari_o_dispari inserito è "pari" o "dispari, allora"

3.2.1 creiamo dentro la variabile "dado" un valore randomico tra 1 e 6
