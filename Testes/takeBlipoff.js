function run() {
    var agora = new Date();
    console.log(agora);
    var diaSemana = agora.getDay() - 5;
    console.log(diaSemana);

    var horaAtual = agora.getHours().toString().padStart(2, '0') + ":" + agora.getMinutes().toString().padStart(2, '0');
    console.log(horaAtual)

    var horaLimiteInicio = "08:00";
    var horaLimiteFim = "17:30";
  
    var status = horaAtual >= horaLimiteInicio && horaAtual <= horaLimiteFim  ? "Aberto" : "Fechado";
    var statusDia = (diaSemana >= 1 && diaSemana <= 5) ? "Aberto" : "Fechado"
    
    if (statusDia) {
      status = statusDia
      console.log(status);
    }

    return {
      status: status,
      horaAtual: horaAtual
    };
  }

console.log(run())

