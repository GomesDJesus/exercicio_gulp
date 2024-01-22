 var geradorNumero  = require('./numero')

var num = geradorNumero();

if (num % 2 === 0) {
    console.log( "Numero sorteado é PAR.");
} else {
    console.log( "Numero sorteado é IMPAR.");
}




