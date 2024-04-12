// Crie um programa que dado um número imprima a sua tabuada

const numeroEscolhido = 3

for (let i = 1; i < 11; i++) {
    console.log(i * numeroEscolhido);
}

const numerosPares = [];

for (let i = 0; i < 10; i = i + 2) {

    numerosPares.push(i);

}

console.log(numerosPares);
