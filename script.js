import Calculator from './Calculator.js';

const primaryOperandDisplay = document.querySelector('[data-primary-operand]');
const secondaryOperandDisplay = document.querySelector('[data-secondary-operand]');
const operationDisplay = document.querySelector('[data-operation]');

const calculator = new Calculator(primaryOperandDisplay, secondaryOperandDisplay, operationDisplay);

document.addEventListener('click', e => {
    if (e.target.matches('[data-all-clear]')) {
        calculator.clear();
    }
    if (e.target.matches('[data-number]')) {
        calculator.addDigit(e.target.textContent);
    }
    if (e.target.matches('[data-delete]')) {
        calculator.removeDigit();
    }
    if (e.target.matches('[data-operation]')) {
        calculator.chooseOperation(e.target.textContent);
    }
    if (e.target.matches('[data-equals]')) {
        calculator.evaluate();
    }
});

document.addEventListener('keydown', e => {
    if (!isNaN(e.key) || e.key === '.') {
        calculator.addDigit(e.key);
        return;
    }
    if (e.key === 'Enter') {
        calculator.evaluate();
        return;
    }
    if (e.key === 'Backspace') {
        calculator.removeDigit();
        return;
    }
    if (e.key === 'Delete') {
        calculator.clear();
        return;
    }
    if (new RegExp(/\*|\/|\+|\-/).test(e.key)) {
        calculator.chooseOperation(e.key);
        return;
    }
});