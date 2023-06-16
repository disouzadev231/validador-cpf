function validaCPF() {
  const cpf = document.getElementById('cpf').value;
  if (cpf.length !== 11) {
    alert('O CPF informado deve conter 11 dígitos.');
    return false;
  }
}
function mostraResultado(text, color) {
  const span = document.getElementById('result');
  span.innerHTML = text;
  span.style.color = color;
}
function verificarDigitosRepetidos(cpf) {
  return cpf.split('').every((d) => d === cpf[0]);
}
function calcularDigitoVerificador(cpf, posicao) {
  const sequencia = cpf.slice(0, 8 + posicao).split('');
  let soma = 0;
  let multiplicador = 9 + posicao;
  for (const numero of sequencia) {
    soma += multiplicador * Number(numero);
    multiplicador--;
  }
  const restoDivisao = (soma * 10) % 11;
  const digito = cpf.slice(8 + posicao, 9 + posicao);
  return restoDivisao == digito;
}
function validaCPF() {
  const cpf = document.getElementById('cpf').value;
  if (cpf.length !== 11) {
    mostraResultado('CPF deve conter 11 dígitos.', 'red');
    return false;
  }
  if (verificarDigitosRepetidos(cpf)) {
    mostraResultado('CPF não pode conter repetição de dígitos.', 'red');
    return false;
  }
  const digito1 = calculaDigitoVerificador(cpf, 1);
  const digito2 = calculaDigitoVerificador(cpf, 2);
  if (digito1 && digito2) {
    mostraResultado(`CPF Válido - ${cpf}`, 'green');
  } else {
    mostraResultado(`CPF Inválido - ${cpf}`, 'red');
  }
}
$(document).ready(function () {
  $('#cpf').inputmask('999.999.999-99');
});
function limpaFormatacao(cpf) {
  cpf = cpf.replace(/\D/g, '');
  return cpf;
}

function validaCPF() {
  const cpfFormatado = document.getElementById('cpf').value;
  const cpf = limpaFormatacao(cpfFormatado);
  if (cpf.length !== 11) {
    mostraResultado('CPF deve conter 11 dígitos.', 'red');
    return false;
  }
  if (verificarDigitosRepetidos(cpf)) {
    mostraResultado('CPF não pode conter repetição de dígitos.', 'red');
    return false;
  }
  const digito1 = calculaDigitoVerificador(cpf, 1);
  const digito2 = calculaDigitoVerificador(cpf, 2);
  if (digito1 && digito2) {
    mostraResultado(`CPF Válido - ${cpfFormatado}`, 'green');
  } else {
    mostraResultado(`CPF Inválido - ${cpfFormatado}`, 'red');
  }
}
