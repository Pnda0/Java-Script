// Criando e utilizando objeto
const pessoa = {
    nome: 'pessoaada Machado de Assis',
    idade: '25',
    descrever: function (){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa)


pessoa.nome = 'Rochele'
pessoa.idade = 99

pessoa.altura = 1.83;
console.log(pessoa)
console.log(pessoa.descrever())

// Chamando dinamicamente um objeto
console.log(pessoa['idade']);