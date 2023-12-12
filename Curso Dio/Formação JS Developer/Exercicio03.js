const tipoPagamento = 3;
const preco = 100;

if (tipoPagamento === 1) {
    console.log(preco - (preco * 0.1));
} 
else if (tipoPagamento === 2) {
    console.log(preco - (preco * 0.15));
} else if (tipoPagamento === 3) {
    console.log(preco);
} else {
    console.log(preco + (preco * 0.1));
}
