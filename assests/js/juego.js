/**
 * 2C = two of clubs  (trebol)
 * 2D = two of diamons (diamante)
 * 2H = two of hearts (corazon)
 * 2S = two of spades (picas)
 */
let deck         = [];
const tipos      = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];


// crear deck
const clearDeck = () => {

    for( let i = 2; i <=10; i++ ) {
        for( let tipo of tipos ) {
            deck.push( i + tipo );
        }
    }
    for( let tipo of tipos ) {
        for( let esp of especiales ) {
            deck.push( esp + tipo );
        }
    }

    console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;

} 

clearDeck(); 
clearDeck();

//tomar carta
const pedirCarta = () => {

    if ( deck.length === 0 ) {
        throw 'No hay mas cartas en el deck';
    }


    const carta = deck.pop();

    console.log(deck);
    console.log(carta); //carta que baja
    return carta;
}

//pedirCarta();