/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto questo blocco.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- Workflow consigliato: prima costruisci la Versione Base in HTML/CSS,
  poi torna qui per la Versione Intermedia (generazione griglia da array di prodotti)
  e per la Versione Avanzata (filtri, ordinamento, carrello dinamico, localStorage).
- Cerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato in settimana.
*/


/* VERSIONE INTERMEDIA — array prodotti
   Crea l'array "prodotti" con almeno 12 oggetti.
   Ogni oggetto: nome, categoria, prezzo, rating (1-5), immagine, disponibile.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const products = [  //creo l'array di oggetti
   {
      nome: "Cuffie",
      categoria: "elettronica",
      prezzo: 59.9,
      rating: 4,
      immagine: "link.jpg",
      disponibile: true,
   },

   {
      nome: "Zaino ",
      categoria: "accessori",
      prezzo: 34.5,
      rating: 5,
      immagine: "link.jpg",
      disponibile: true,
   },

   {
      nome: "Tazza ",
      categoria: "casa",
      prezzo: 18.0,
      rating: 3,
      immagine: "link.jpg",
      disponibile: false,
   },

   {
      nome: "Lampada",
      categoria: "casa",
      prezzo: 42.0,
      rating: 4,
      immagine: "link.jpg",
      disponibile: true,
   },

   {
      nome: "Smartwatch",
      categoria: "elettronica",
      prezzo: 129.0,
      rating: 4,
      immagine: "link.jpg",
      disponibile: false,
   },

   {
      nome: "Sneakers",
      categoria: "abbigliamento",
      prezzo: 49.9,
      rating: 3,
      immagine: "link.jpg",
      disponibile: true,
   },

   {
      nome: "Impermeabile ",
      categoria: "abbigliamento",
      prezzo: 89.0,
      rating: 5,
      immagine: "link.jpg",
      disponibile: true,
   },

   {
      nome: "Quaderno a quadretti",
      categoria: "cancelleria",
      prezzo: 7.5,
      rating: 4,
      immagine: "link.jpg",
      disponibile: true,
   },

   {
      nome: "Penna ",
      categoria: "cancelleria",
      prezzo: 24.0,
      rating: 2,
      immagine: "link.jpg",
      disponibile: false,
   },

   {
      nome: "Mouse ",
      categoria: "elettronica",
      prezzo: 39.9,
      rating: 5,
      immagine: "link.jpg",
      disponibile: true,
   },

   {
      nome: "Vaso",
      categoria: "casa",
      prezzo: 15.0,
      rating: 4,
      disponibile: true,
   },

   {
      nome: "Borraccia in acciaio",
      categoria: "sport",
      prezzo: 22.5,
      rating: 5,
      disponibile: true,
   },

   {
      nome: "Tappetino yoga",
      categoria: "sport",
      prezzo: 29.9,
      rating: 3,
      immagine: "link.jpg",
      disponibile: false,
   }
]

console.log(products); //stampo il risultato
console.table(products);

/* VERSIONE INTERMEDIA — formattaPrezzo(prezzo)
   Funzione che ritorna una stringa tipo "€ 19,99".
   Esempio in console.log: Monitor: € 150,00
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function formattaPrezzo(prezzo) {

   return prezzo.toFixed(2);
}
for (let i = 0; i < products.length; i++) {
   console.log(`${products[i].nome}: € ${formattaPrezzo(products[i].prezzo)}`);

}

/* VERSIONE INTERMEDIA — stelline(rating)
   Funzione che ritorna una stringa di stelline piene/vuote.
   Esempio: rating 3 → "★★★☆☆"
   Esempio in console.log: Monitor: rating 3 → "★★★☆☆"
*/


/* SCRIVI QUI LA TUA RISPOSTA */


function stelline(rating) { //creo funzione

   switch (true) {
      case rating === 1:
         return "★☆☆☆☆"
         break;

      case rating === 2:
         return "★★☆☆☆"
         break;

      case rating === 3:
         return "★★★☆☆"
         break;

      case rating === 4:
         return "★★★★☆"
         break;

      case rating === 5:
         return "★★★★★"
         break;

      default:
         return "senza rating";
   }

}

for (let i = 0; i < products.length; i++) {
   console.log(`${products[i].nome}: rating ${products[i].rating} → ${stelline(products[i].rating)}`);

}

/* VERSIONE INTERMEDIA — Filtro per categoria
   Funzione che riceve il parametro categoria e filtra l'array prodotti mostrando solo i prodotti della categoria ricevuta
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function category(categoria) {

   const type = [];
   for (let i = 0; i < products.length; i++) {
      if (products[i].categoria === categoria) {
         type.push(products[i]);
      }
   }
   return type;
}

console.log(category("sport"));


/* VERSIONE INTERMEDIA — Filtro disponibilità e rating
   Funzione che genera un array filtrato dall'array prodotti, mostrando soltanto i prodotti disponibili con rating >= 3
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function productFilter() {

  const available = [];

  for (let i = 0; i < products.length; i++) {
    if (products[i].disponibile === true && products[i].rating >= 3) {
      available.push(products[i]);
    }
  }

  return available;
}

console.log(productFilter());


/* --------------------------------------------------------------

/* VERSIONE AVANZATA — renderProdotti(lista)
   Funzione che, dato un array di prodotti, genera la griglia nel DOM.
   Niente HTML hard-coded per i prodotti: tutto generato dal JavaScript.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* VERSIONE AVANZATA — Aggiungi al carrello
   Quando si clicca il bottone "Aggiungi al carrello", incrementa il contatore
   nell'header (Carrello (0) → Carrello (1) → ...).
   Per i prodotti esauriti: bottone disabilitato e testo "Esaurito".
   Suggerimento: usa una closure come visto in aula
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* VERSIONE AVANZATA — Ordinamento
   Menu a tendina con: Prezzo crescente, Prezzo decrescente, Rating.
   Suggerimento: per rendere più leggibile la select puoi usare optgroup
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* VERSIONE AVANZATA — Riepilogo carrello
   Pagina carrello con elenco prodotti aggiunti, totale, bottone "Svuota".
   Concetto da scoprire: localStorage.setItem / localStorage.getItem.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* VERSIONE AVANZATA — localStorage
   Il carrello sopravvive al refresh della pagina.
   Concetto da scoprire: localStorage.setItem / localStorage.getItem.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
