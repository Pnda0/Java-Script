// Inserindo campo de inserção de texto.

var input = document.createElement('input');

input.innerHTML = "Escreve ai po";

document.getElementsByClassName('lista')[0].appendChild(input);

// 3 Botões de uma só vez

for (var i = 0; i < 3; i++) {
    var btn = document.createElement('button');
    btn.innerHTML = 'Botão ' + (i + 1);
    document.getElementsByClassName('lista')[0].appendChild(btn);
  }

// Inserindo paragrafo.

var p = document.createElement('p');

p.innerHTML = "Ondas Cerebrais";

document.getElementsByClassName('lista')[0].appendChild(p);

//  Inserindo CheckBox

var checkbox = document.createElement('input');

checkbox.setAttribute('type','checkbox')

document.getElementsByClassName('lista')[0].appendChild(checkbox);

// Removendo elemento ao clicar no checkBox

var elemento = document.createElement('p');
elemento.innerHTML = 'Mateus FAÇA O BIG GREAT (L)';

checkbox.addEventListener('click', function(){
    var lista = document.getElementsByClassName('lista')[0];
    
    if (checkbox.checked) {
        lista.appendChild(elemento);
        const Irparaotopo = document.getElementsByClassName('lista')[0];
        Irparaotopo.insertBefore(elemento, Irparaotopo.children[2])
        elemento.style.color = 'red'
    } else {
        lista.removeChild(elemento);
    }
});

// 3 Botões com funções diferentes


// Botão 1
var btn1 = document.createElement('button');
btn1.innerHTML = 'faz o lê 1' 
document.getElementsByClassName('lista')[0].appendChild(btn1);

// Botão 2 Conta os itens da lista 
var btn2 = document.createElement('button');
btn2.innerHTML = 'matheus moto 2' 
document.getElementsByClassName('lista')[0].appendChild(btn2);



// Botão 3 Exclui um elemento da lista
var btn3 = document.createElement('button');
btn3.innerHTML = 'Excluir geral 3' ;
document.getElementsByClassName('lista')[0].appendChild(btn3);

btn3.addEventListener('click', function(){
    checkbox.remove()
})