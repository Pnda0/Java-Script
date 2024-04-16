// Utilizando classes
class Pessoa {
    nome;
    idade;

    constructor (nome, idade){
        this.nome = nome;
        this.idade = idade;
    };

    descrever () {
        console.log(`Meu nome é ${this.nome} e minha idade é: ${this.idade}`)
    };
};

const vitor = new Pessoa('Vitor', 25);
const reinan = new Pessoa('Reinan', 41);

vitor.descrever();
reinan.descrever();