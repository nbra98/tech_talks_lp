AOS.init();

const dataEvento = new Date("Feb 20, 2024 19:00:00");
const timeStampEvento = dataEvento.getTime();

const contaHoras = setInterval(function() {
  const agora = new Date();
  const timeStampAtual = agora.getTime();

  const tempoAteOEvento = timeStampEvento - timeStampAtual;

  const diaEmMs = 1000 * 60 * 60 * 24;
  const horaEmMs = 1000 * 60 * 60;
  const minutoEmMs = 1000 * 60;
  const segundoEmMs = 1000;

  const diasAteOEvento = Math.floor(tempoAteOEvento / diaEmMs);
  const horasAteOEvento = Math.floor(tempoAteOEvento % (diaEmMs) / horaEmMs);
  const minutosAteOEvento = Math.floor(tempoAteOEvento % (horaEmMs) / minutoEmMs);
  const segundosAteOEvento = Math.floor(tempoAteOEvento % (minutoEmMs) / segundoEmMs);

  document.querySelector('#contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m e ${segundosAteOEvento}s`;

  if (tempoAteOEvento < 0) {
    clearInterval(contaHoras);
    document.querySelector('#contador').innerHTML = "Evento Expirado!"
  }
}, 1000);
