/* Desafio 01 */
const precoGasolina = 6.66
const precoEtanol = 5.79;
const kmLitros = 10;
const distanciaKM = 100;
const tipoCombustivel = 'Etanol';

const gastoKmLitro = distanciaKM / kmLitros;
console.log(gastoKmLitro.toFixed(2));


if (tipoCombustivel === 'Etanol') {
    const totalGasto = gastoKmLitro * precoEtanol;
    console.log("Total gasto pela viagem em Etanol foi de R$" + totalGasto.toFixed(2));
} else {
    const totalGasto = gastoKmLitro * precoGasolina;
    console.log("Total gasto pela viagem em Gasolina foi de R$" + totalGasto.toFixed(2));
}

