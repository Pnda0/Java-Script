
const customers = [
    {name: "Ana", credito: 4500},
    {name: "Carlos", credito: 10000},
    {name: "Manuel", credito: 1500},
    {name: "Tubarao", credito: 23300},
    {name: "Xaro", credito: 1995},
    {name: "Dude", credito: 800},
    {name: "Milton", credito: 2100},
];

for ( person of customers){
    if (person.credito < 2000) continue;

console.log("-------------------------------");
console.log("Name", person.name);
console.log("Credito", person.credito);
}

