const arr = [1, 3, 45, 18, 22, 55, 19]

var soma = 0

// For

for(var i = 0; i < arr.length; i++){
    soma += arr[i];
}

console.log(soma);

console.log(soma / 7 );

// Método 2 

const numbers = [1, 3, 45, 18, 22, 55, 19]

let sun = 0

for (let num of numbers) {
    sun += num;
}

// Média

console.log("Média: " + sun / numbers.length);






