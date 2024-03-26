/*
    1 - Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por KM rodado.
    Crie um método que dado a quantidade de KM e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.

    Se o valor do combustível é de R$ 5,00 por litro e o consumo é 10 km/L, a conta fica: 5,00 / 10 = 0,5. Ou seja, cada quilômetro custa R$ 0,5.

*/

class carros {
    marca;
    cor;
    gasto;

    constructor (marca, cor, gastoMedio) {
        this.marca = marca;
        this.cor = cor
        this.gastoMedio = gastoMedio
    }

    descrever(marca, cor, gastoMedio){
        console.log(`O carro da ${this.marca}, da cor ${this.cor}, e obteve um gasto médio de R$${this.gastoMedio} por Km rodado`)
    }
}

const precoGasolina = 5.80 // Preço Gasolina
const distancia = 30 // Km rodado
const kmPorLitro = 10 // Média 

function gastoPorKm (distancia, kmPorLitro){
    const  gastoKmLitro = distancia / kmPorLitro;
    return gastoKmLitro
}

console.log(gastoPorKm(distancia, kmPorLitro))

const mediaPorKm = precoGasolina / kmPorLitro
console.log(mediaPorKm)

const custoFinal = distancia / kmPorLitro
console.log(custoFinal)

const gastoEmReais = custoFinal * precoGasolina
console.log(gastoEmReais)

const matheus = new carros('New Fiesta', 'Branco', gastoEmReais)
console.log(matheus.descrever())

const lucas = new carros('Audi A3', 'Preto', 30)
console.log(lucas.descrever())
