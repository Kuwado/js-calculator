import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [currentValue, setCurrentValue] = useState('');
  const [previousValue, setPreviousValue] = useState('');
  const [operator, setOperator] = useState('');

  const handleNumberClick = (num) => {
    if (display === '0' || currentValue === '0') {
      setCurrentValue(num);
      setDisplay(num);
    } else {
      setCurrentValue(currentValue + num);
      setDisplay(currentValue + num);
    }
  };

  const handleDecimalClick = () => {
    if (!currentValue.includes('.')) {
      setCurrentValue(currentValue + '.');
      setDisplay(display + '.');
    }
  };

  const handleOperatorClick = (op) => {
    if (operator !== '') {
      handleEquals();
    }
    setOperator(op);
    setPreviousValue(currentValue);
    setCurrentValue('');
  };

  const handleEquals = () => {
    let result;
    const prev = parseFloat(previousValue);
    const current = parseFloat(currentValue);

    switch (operator) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case '*':
        result = prev * current;
        break;
      case '/':
        result = prev / current;
        break;
      default:
        return;
    }

    setDisplay(result.toString());
    setCurrentValue(result.toString());
    setPreviousValue('');
    setOperator('');
  };

  const handleClear = () => {
    setDisplay('0');
    setCurrentValue('');
    setPreviousValue('');
    setOperator('');
  };

  return (
    <div className="calculator">
      <div id="display">{display}</div>
      <div className="buttons">
        <button id="clear" onClick={handleClear}>
          AC
        </button>
        <button id="divide" onClick={() => handleOperatorClick('/')}>
          /
        </button>
        <button id="multiply" onClick={() => handleOperatorClick('*')}>
          *
        </button>
        <button id="seven" onClick={() => handleNumberClick('7')}>
          7
        </button>
        <button id="eight" onClick={() => handleNumberClick('8')}>
          8
        </button>
        <button id="nine" onClick={() => handleNumberClick('9')}>
          9
        </button>
        <button id="subtract" onClick={() => handleOperatorClick('-')}>
          -
        </button>
        <button id="four" onClick={() => handleNumberClick('4')}>
          4
        </button>
        <button id="five" onClick={() => handleNumberClick('5')}>
          5
        </button>
        <button id="six" onClick={() => handleNumberClick('6')}>
          6
        </button>
        <button id="add" onClick={() => handleOperatorClick('+')}>
          +
        </button>
        <button id="one" onClick={() => handleNumberClick('1')}>
          1
        </button>
        <button id="two" onClick={() => handleNumberClick('2')}>
          2
        </button>
        <button id="three" onClick={() => handleNumberClick('3')}>
          3
        </button>
        <button id="equals" onClick={handleEquals}>
          =
        </button>
        <button id="zero" onClick={() => handleNumberClick('0')}>
          0
        </button>
        <button id="decimal" onClick={handleDecimalClick}>
          .
        </button>
      </div>
    </div>
  );
};

export default Calculator;
