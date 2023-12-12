function escreverNome (nome){
    return 'Meu nome é ' + nome;
}

function verificarIdade (idade) {
    if (idade >= 18) {
        console.log(escreverNome('Alan') + ', sou maior de idade')
    }
    else {
        console.log('É menor de idade')
    }
}

verificarIdade('18')