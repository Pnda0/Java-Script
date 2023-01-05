const ti = [14, 12, 44, 99, 155]

var soma = 0

for (var i = 0; i < ti.length; i++ ){
    var valor_total = soma += ti[i]
}

var media = console.log(soma / 5)


while (soma < valor_total){
    soma++;
    console.log(soma)
}