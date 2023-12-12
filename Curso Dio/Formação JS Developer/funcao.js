function quadrado(valor) {
    return valor * valor
}

const valorzaoQuadrado = quadrado('10')
console.log(valorzaoQuadrado);


function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrecimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrecimo
}


console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 15));



