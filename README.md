<#>Validação de CPF</1>
Este código fornece uma função JavaScript para validar os números do CPF (Cadastro de Pessoas Físicas) brasileiro. Inclui um formulário HTML com um campo de entrada para inserir um número de CPF e exibe o resultado da validação na página da web.

<h2>Características</h2>
Valida o comprimento do número do CPF.
Verifica se há dígitos repetidos no número do CPF.
Calcula e verifica os dígitos verificadores do número do CPF.
Fornece feedback visual sobre o resultado da validação.
Requisitos
Biblioteca jQuery (certifique-se de que ela esteja incluída em seu arquivo HTML).
Uso
Inclua a biblioteca jQuery em seu arquivo HTML:
html

<h3>Copiar código</h3>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
Copie o código JavaScript fornecido em uma <script>tag ou arquivo JavaScript externo e inclua-o em seu arquivo HTML:
html

<script src="cpf-validation.js"></script>

Crie um formulário HTML com um campo de entrada para inserir o número do CPF e um botão enviar ou um event listener para acionar a validação do CPF:
html

<form>
  <label for="cpf">CPF:</label>
  <input type="text" id="cpf" name="cpf" placeholder="Enter CPF number">
  <button type="button" onclick="validarCPF()">Validate CPF</button>
</form>
Adicione um <span>elemento para exibir o resultado da validação:
html

<span id="resultado"></span>
Inicialize o campo de entrada do CPF com o formato desejado usando a inputmaskfunção (certifique-se de que o campo de entrada tenha o cpfID):
javascript

$(document).ready(function() {
$('#cpf').inputmask('999.999.999-99');
});
Personalize a exibição do resultado da validação modificando a mostraResultado()função, se desejar.

Teste a validação do CPF inserindo os números do CPF no campo de entrada e acionando a validação.

<h4>Notas</h4>
O código pressupõe o uso da biblioteca jQuery e do plug-in inputmask para formatação de entrada do CPF. Certifique-se de ter incluído as dependências necessárias.

O código executa verificações básicas de validação e pode não cobrir todos os casos extremos possíveis. É recomendável testar e adaptar o código às suas necessidades específicas.

Sinta-se à vontade para modificar o código e personalizá-lo de acordo com suas necessidades.

<h4>Licença</h4>
Este código é liberado sob a licença MIT .
