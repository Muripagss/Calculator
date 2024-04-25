let input = '';

function appendNumber(number) {
  input += number;
  updateDisplay();
}

function appendDecimal() {
  if (!input.includes('.')) {
    input += '.';
    updateDisplay();
  }
}

function operation(operator) {
  input += operator;
  updateDisplay();
}

function deleteLast() {
  input = input.slice(0, -1);
  updateDisplay();
}

function clearInput() {
  input = '';
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('result').value = input;
}

function calculate() {
  try {
    input = eval(input).toString();
  } catch (error) {
    input = 'Error';
  }
  updateDisplay();
}
