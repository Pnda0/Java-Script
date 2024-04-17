// Faça um algoritmo que receba a média de um aluno. A média seja < 5 = Reprovado, >= 5 < 7 = Recuperação e >= 7 = Aprovado.

const {get, print} = require('./funcoes')
const media = get();

if (media < 5) {
    print('Reprovado')
}else if (media >= 5 && media < 7){
    print('Recuperação')
}else{
    print('Aprovado')
}



