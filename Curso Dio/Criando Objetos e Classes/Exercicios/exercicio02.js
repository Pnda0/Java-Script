class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    imc() {
        const imc = this.peso / Math.pow(this.altura, 2);
        console.log(`O IMC de ${this.nome} é de: ${imc.toFixed(2)}`);
    }
}

const jose = new Pessoa('Jose', 70, 1.75);
jose.imc();
