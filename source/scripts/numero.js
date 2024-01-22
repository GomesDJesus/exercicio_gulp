function geradorNumero() {
    var numeroSorteado = Math.floor(Math.random() * 10) + 1;
    console.log(numeroSorteado);
    return numeroSorteado;
}

geradorNumero();

 module.exports =  geradorNumero;