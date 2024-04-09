function insert(num) {
  let numero = document.getElementById('resultado').value += num;
}

function clean() {
  document.getElementById('resultado').value = '';
}

function back() {
  let value = document.getElementById('resultado').value;
  document.getElementById('resultado').value = value.slice(0, -1);
}

function calcular() {
  let exprection = document.getElementById('resultado').value;
  let resultado = calcularExprection(exprection);
  let resultInput = document.getElementById('resultado');

  if (isNaN(resultado)) {
      resultInput.value = '';
      resultInput.placeholder = 'Erro';
      resultInput.classList.add('erro');

  } else {
    resultInput.value = resultado;
    resultInput.placeholder = 'Calcule';
    resultInput.classList.remove('erro');
  }
}

  let resultInput = document.getElementById('resultado');
    resultInput.addEventListener('click', function() {
    limparStyleErro(resultInput);
    restaurarPlaceholder(resultInput);
  }
);

function limparStyleErro(element) {
  element.classList.remove('erro');
}

function restaurarPlaceholder(element) {
  if (element.value === '' && element.placeholder === 'Erro') {
    element.placeholder = 'Calcule';
  }
}

  function calcularExprection(exprection) {
    let selection = exprection.split(/(\+|\-|\*|\/)/g);
    let resultado = parseFloat(selection[0]);

    for (let i = 1; i < selection.length; i += 2) {
      let operation = selection[i];
      let numero = parseFloat(selection[i + 1]);

      if (operation === '+') {
        resultado += numero;
      }
      else if (operation === '-') {
        resultado -= numero;
      }
      else if (operation === '*') {
        resultado *= numero; 
      }
      else if (operation === '/') {
        resultado /= numero;
      }
    }
    return resultado;
  }