function run() {
<<<<<<< HEAD:Testes/takeBlipoff.js
  var agora = new Date();
  var diaSemana = agora.getDay();
  var horaAtual = agora.getHours().toString().padStart(2, '0') + ":" + agora.getMinutes().toString().padStart(2, '0');
=======
    
>>>>>>> a4b147db3b20056152fb3565bd4d9ac2db315e2a:Testes AD/takeBlipoff.js

  var horaLimiteInicio = "08:00";
  var horaLimiteFim = "17:20";

  if (diaSemana == 6) {
    horaLimiteFim = "17:00";
  }

var status = horaAtual >= horaLimiteInicio && horaAtual <= horaLimiteFim && (diaSemana >= 1 && diaSemana <= 6) ? "Aberto" : "Fechado";

  return {
    status: status,
    horaAtual: horaAtual
  };
}

var resultado = run();


console.log("Status:", resultado.status);
console.log("Hora atual:", resultado.horaAtual);
