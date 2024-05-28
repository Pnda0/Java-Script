// Esperando página carregar para iniciar os eventos
window.onload = pizza

function pizza() {
    alert('Tocou a campanhia')
    alert('Recebi')
}

alert('Esperando a peste da pizza')

// Exibindo texto em um elemento vazio
function maisInfos(){
    document.getElementById('trybe-continua').innerHTML = 'Expansão da mente'
}

// Exemplo 1 Click
let clickP = document.getElementById('clicar')

clickP.addEventListener('click', recebeClick);
clickP.addEventListener('mouseover', mouseEmcima);

function recebeClick(eventoDeOrigem) {
    console.log(eventoDeOrigem.target)
    console.log(eventoDeOrigem.type)
}

// Exemplo 2 Mouse over
let mouseOverLeaveButton = document.getElementById('mouse-over-leave');

mouseOverLeaveButton.addEventListener('mouseover', mouseEmcima)
mouseOverLeaveButton.addEventListener('mouseleave', mouseSaiuDoElemento)

function mouseEmcima(){
    console.log('Mouse passou por cima');
}
function mouseSaiuDoElemento(){
    console.log('Mouse saiu do elemento');
}



