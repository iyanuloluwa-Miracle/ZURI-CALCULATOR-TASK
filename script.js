let currentInput = '';

function appendValue(value) {
    currentInput += value;
    document.getElementById('inputBox').value = currentInput;
}

function appendOperator(operator) {
    if (currentInput !== '' && !isNaN(currentInput[currentInput.length - 1])) {
        currentInput += operator;
        document.getElementById('inputBox').value = currentInput;
    }
}

function appendDecimal() {
    if (currentInput === '' || currentInput[currentInput.length - 1] === '.') return;
    currentInput += '.';
    document.getElementById('inputBox').value = currentInput;
}

function calculate() {
    try {
        const result = eval(currentInput);
        document.getElementById('inputBox').value = result;
        currentInput = '';
    } catch (error) {
        // Handle error
        console.error('Invalid input:', error);
        document.getElementById('inputBox').value = 'Error';
        currentInput = '';
    }
}
