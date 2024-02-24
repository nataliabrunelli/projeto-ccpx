const dias = document.getElementById("dias");
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

function countdown() {
  const lancamento = new Date("1 dec 2024");
  const data = new Date();

  const diferenca = lancamento.getTime() - data.getTime();

  const finalDias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const finalHoras = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const finalMinutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
  const finalSegundos = Math.floor((diferenca % (1000 * 60)) / 1000);

  dias.innerHTML = formatacaoTempo(finalDias);
  horas.innerHTML = formatacaoTempo(finalHoras);
  minutos.innerHTML = formatacaoTempo(finalMinutos);
  segundos.innerHTML = formatacaoTempo(finalSegundos);
}

countdown();
setInterval(countdown, 1000);

function formatacaoTempo(tempo){
  return tempo < 10? "0" + tempo : tempo;
}
