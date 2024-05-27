// Criando e adicionando elementos

const achandoFilho = document.getElementById('primeiroFilhoDoFilho');

const criandoIrmao = document.createElement('li');
criandoIrmao.innerText = 'Fala bro, to aqui';

achandoFilho.appendChild(criandoIrmao)

// Adicionando uma lista já pronta
const criandoLista = ['Barcelona', 'PSG', 'REAL MADRID']

const terceiroFilho = document.getElementById('terceiroFilho');

for (let i = 0; i < criandoLista.length; i++) {
    const time = criandoLista[i];
    
    let criandoListaitens = document.createElement('li')
    criandoListaitens.innerText = time

    terceiroFilho.appendChild(criandoListaitens)
}

// Removendo elementos

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

const paragrafo = document.createElement('p').className = 'Texto';
console.log(paragrafo);