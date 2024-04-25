// Faça um algoritmo que receba N quantidade de números e seus respectivos valores, imprima o maior número par e o menor número impar. 
// Entradas 5, 3, 4, 1, 10, 8, saída: maior número par: 10, menor número impar: 1


const {get, print} = require('./funcoes')

const numeros = [5, 3, 4, 1, 10, 8]

print(numeros)

let maiorNumero = 0
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        if (numeros[i] > maiorNumero) {
            maiorNumero = numeros[i]
        }
    }
}
print(`O maior número par é: ${maiorNumero}`)

let menorNumero = 100
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 !== 0) {
        print(numeros[i])
        if (numeros[i] < menorNumero){
            menorNumero = numeros[i]
        }
    }
}

print(`O menor número impar é: ${menorNumero}`)
