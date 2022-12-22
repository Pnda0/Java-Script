
const notas = {
    bimestre1:7.0,
    bimestre2:3.7,
    bimestre3:6.4,
    bimestre4:8.6
}


let sun = 0;

for (let num of notas) {
    sun += num;
}

console.log("Média:" + sun / notas.length);

