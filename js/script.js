function start() {
  var buttonCalculateImc = document.querySelector('#button-calculate-imc');
  buttonCalculateImc.addEventListener('click', handleButtonClick);

  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');

  inputWeight.addEventListener('input', handleButtonClick);
  inputHeight.addEventListener('input', handleButtonClick);

  handleButtonClick();
}


function calculateImc(weight, height) {

  let imcResult = document.querySelector('#imc-message');
  let imcRes = document.querySelector('#imc-result');

  let resultadoImc =( weight / (height * height)).toFixed(2)
  let classification = ''

  if(resultadoImc >= 16 && resultadoImc <= 16.9){
    classification =  `Muito abaixo do peso`
    
  } else if (resultadoImc >= 16.9  && resultadoImc <= 18.4){
    classification =  `Abaixo do peso`

  } else if (resultadoImc >= 18.5  && resultadoImc <= 24.9){
    classification =  `Peso normal`
  }
  else if (resultadoImc >= 25  && resultadoImc <= 29.9){
    classification =  `Acima do Peso`
  }
  else if (resultadoImc >= 30  && resultadoImc <= 34.9){
    classification =  `Obesidade I`
  }
  else if (resultadoImc >= 35  && resultadoImc <= 40){
    classification =  `Obesidade II`
  }
  else if (resultadoImc >= 40.1){
    classification =  `Obesidade III`
  }
  else {
    classification = "Inválido"
  }

  imcRes.innerHTML = `${resultadoImc}`
  imcResult.innerHTML = `  ${classification}`
}


function handleButtonClick() {
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');
  var imcResult = document.querySelector('#imc-result');

  var weight = Number(inputWeight.value);
  var height = Number(inputHeight.value);

  var imc = calculateImc(weight, height);
  var formattedImc = imc.toFixed(2).replace('.', ',');

  imcResult.textContent = formattedImc;
}

start();
