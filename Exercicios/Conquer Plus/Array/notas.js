
const notas = {
    bimestre1:7.0,
    bimestre2:7.7,
    bimestre3:6.4,
    bimestre4:8.6
}

let soma = 0;
let contagem = 0;

for (let bimestre in notas) {
    contagem += 1;
    soma += notas[bimestre];
    console.log(soma)
}

let media = soma / contagem;

if (media >= 7) {
    console.log("Aluno Passou");
}
else { (media <=6) 
    console.log("Aluno Retardado, sua nota foi " + media);
}


