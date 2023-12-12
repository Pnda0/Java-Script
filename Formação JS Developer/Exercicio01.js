const aluno = 'Alex'


/* Notas */
const nota1 = 5
const nota2 = 8
const nota3 = 9

const mediaNotas = (nota1 + nota2 + nota3) / 3 
console.log(mediaNotas.toFixed(1));

if (mediaNotas <= 5) {
    console.log("Reprovado");
} else if (mediaNotas >= 5 && mediaNotas <= 7) {
    console.log("Recuperação");
} else {
    console.log("Aprovado");
}