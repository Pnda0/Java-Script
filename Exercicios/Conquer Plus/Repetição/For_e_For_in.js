const ages = {
    robert:24,
    alan:44,
    xaro:31
};
// Retornando somentes números pares da variavel ages com o for in ->
for (let person in ages) {
    const isEven = ages[person] % 2 === 0;
    if (isEven) console.log(person); 
}

