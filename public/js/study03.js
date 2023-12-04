document.addEventListener('DOMContentLoaded', function () {
  const display = document.getElementById('display');
  let currentInput = '';

  function updateDisplay() {
      display.value = currentInput;
  }

  function clearDisplay() {
      currentInput = '';
      updateDisplay();
  }

  function appendToInput(value) {
      currentInput += value;
      updateDisplay();
  }

  function calculateResult() {
      try {
          currentInput = eval(currentInput).toString();
          updateDisplay();
      } catch (error) {
          currentInput = 'Error';
          updateDisplay();
      }
  }

  // ボタンがクリックされたときの処理
  document.querySelectorAll('button').forEach(button => {
      button.addEventListener('click', function () {
          const buttonText = this.innerText;

          if (buttonText === '=') {
              calculateResult();
          } else {
              appendToInput(buttonText);
          }
      });
  });
});