const removerTitulo = document.getElementById('where-are-you')
console.log(removerTitulo.innerText);

const titulo = removerTitulo.firstElementChild
console.log(titulo.innerText);

removerTitulo.removeChild(titulo)

