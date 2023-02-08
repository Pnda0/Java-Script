const classe = document.getElementById('id');

console.log(classe)

const titulo = document.getElementsByTagName('h2');

console.log(titulo)

const div = document.getElementsByTagName('div');

console.log(div)

const contagem = document.getElementsByTagName('span');
    contagem.length()

console.log(contagem)

//const elemento2 = document.getElementsByTagName('span');
//    elemento2[2]

console.log(elemento2)

const valor_input = document.getSelection('input')
    const value = valor_input.document.getElementsByTagName('value')

console.log(value)


// Jeito mão na massa //

const elemento1 = document.querySelector("div")
console.log(elemento1.tagName)

// Algumas respostas possíveis

// document.queryselector("div.box")

// document.queryselector(".box")

// document.queryselectorall("div.box")[0]

// document.queryselectorall(".box")[0]

// document.getelementsbytagname("div")[0]

// document.getelementbyclassname("box)[0]

// Atribuindo o element para obter o retorno do titulo

const elemento2 = document.querySelector("h1#title")

console.log(elemento2.textContent)
