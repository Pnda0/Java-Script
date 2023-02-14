const valor_primario = document.getElementById('firstValue').value

const valor_secundario = document.getElementById('secondValue').value

function calculate() {
    var soma = document.getElementsByClassName('btn').value = valor_primario + valor_primario;
    document.getElementById('result').textContent = soma
}

// jeito Conquer

let first =  document.getElementById('firstValue')
let second = document.getElementById('secondValue')
let button = document.getElementsByClassName(".btn")
let result = document.querySelector("#result")

button.addEventListener("click", () => {
    result.value = parseInt(first.value) + parseInt(second.value)
})