function calculadora() {

    const operacao = Number(prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação\n 4 - Divisão\n 5 - Divisão inteira(%)\n 6 - Potenciação (**)'))

// O sinal de ! significa: "Diferente de"->
// O sinais || significa: "Ou" ->
    if(!operacao || operacao >= 7){
        alert("Erro - Operação inválida!");
        calculadora();
    }
    else {
        let n1 = Number(prompt("Insira o primeiro valor:"));
        let n2 = Number(prompt("Insira o segundo valor:"));
        let resultado;
        
        if(!n1 || !n2) {
            alert("Erro - Opção inválida");
            calculadora();
        }
        else {
            function Soma() {
                resultado = n1 + n2;
                // O sinais $ significa: "Formatar" ->
                alert(`${n1} + ${n2} = ${resultado}`);
            }
            function Subtração() {
                resultado = n1 - n2;
                alert(` ${n1} - ${n2} = ${resultado}`);
            }
            function Multiplicação() {
                resultado = n1 * n2;
                alert(` ${n1} * ${n2} = ${resultado}`);
            }
            function Divisão() {
                resultado = n1 / n2;
                alert(` ${n1} / ${n2} = ${resultado}`);
            }
            function Divisão_inteira() {
                resultado = n1 % n2;
                alert(` ${n1} % ${n2} = ${resultado}`);
            } 
            function Potenciação() {
                resultado = n1 ** n2;
                alert(` ${n1} ** ${n2} = ${resultado}`);
            }

            if(operacao == 1){
                Soma();
            }
            else if (operacao == 2){
                Subtração();
            }
            else if (operacao == 3){
                Multiplicação();
            }    
            else if (operacao == 4){
                Divisão;
            }    
            else if (operacao == 5){
                Divisão_inteira();
            }
            else if (operacao == 6){
                Potenciação();
            }
        }
        }
    }

calculadora()

