function run() {
    var agora = new Date();
    console.log(agora);
    
    var diaSemana = agora.getDay() + 1;
    console.log(diaSemana);
  
    // Verificar se é sábado ou domingo e definir o status como "Fechado"
    if (diaSemana === 0 || diaSemana === 6) {
        return {
            status: "Fechado",
            horaAtual: agora.toLocaleTimeString()
        };
    }
  
    var horaAtual = agora.getHours().toString().padStart(2, '0') + ":" + agora.getMinutes().toString().padStart(2, '0');
    console.log(horaAtual);
  
    var horaLimiteInicio = "08:00";
    var horaLimiteFim = "17:30";
  
    // Ajustar a hora limite para sexta-feira
    if (diaSemana === 5) {
        horaLimiteFim = "17:00";
    }
  
    // Verificar se a hora atual está dentro do horário de funcionamento
    var status = horaAtual >= horaLimiteInicio && horaAtual <= horaLimiteFim ? "Aberto" : "Fechado";
  
    return {
        status: status,
        horaAtual: horaAtual
    };
  }
  
  console.log(run());
  