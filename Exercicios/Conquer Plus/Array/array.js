const nome = ["alan", "xaro", "dude"];

// Retornando objetos do array ->
for (let nomes of nome){
    console.log(nome);
}

// Retornando índices do array ->
for (let nomes in nome){
    console.log(nome);
}

// Retornando índices e objetos do array ->
for (let nomes of Array.entries()){
    console.log(nome);
}

const bebidas = ['Refrigerante', 'Água', 'Suco', 'leite', 'Guarana']

for (let drink of bebidas){
    console.log(drink)
}

