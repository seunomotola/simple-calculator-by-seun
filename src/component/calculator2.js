import React, { useState } from 'react';
//import './App.css';

const buttonStyle = {
  width: '50px',
  height: '50px',
  fontSize: '18px',
  margin: '5px',
};

const containerStyle = {
  width: '250px',
  margin: 'auto',
  marginTop: '50px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  padding: '10px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};

function App() {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleCalculate = () => {
    try {
      // Using Function constructor to avoid eval
      const result = new Function('return ' + input)();
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const handleClear = () => {
    setInput('');
  };

  return (
    <div style={containerStyle}>
      <div style={{ fontSize: '24px', marginBottom: '10px' }}>{input}</div>
      <div>
        <button style={buttonStyle} onClick={() => handleButtonClick('1')}>
          1
        </button>
        <button style={buttonStyle} onClick={() => handleButtonClick('2')}>
          2
        </button>
        <button style={buttonStyle} onClick={() => handleButtonClick('3')}>
          3
        </button>
        <button style={buttonStyle} onClick={() => handleButtonClick('+')}>
          +
        </button>
      </div>
      <div>
        <button style={buttonStyle} onClick={() => handleButtonClick('4')}>
          4
        </button>
        <button style={buttonStyle} onClick={() => handleButtonClick('5')}>
          5
        </button>
        <button style={buttonStyle} onClick={() => handleButtonClick('6')}>
          6
        </button>
        <button style={buttonStyle} onClick={() => handleButtonClick('-')}>
          -
        </button>
      </div>
      <div>
        <button style={buttonStyle} onClick={() => handleButtonClick('7')}>
          7
        </button>
        <button style={buttonStyle} onClick={() => handleButtonClick('8')}>
          8
        </button>
        <button style={buttonStyle} onClick={() => handleButtonClick('9')}>
          9
        </button>
        <button style={buttonStyle} onClick={() => handleButtonClick('*')}>
          *
        </button>
      </div>
      <div>
        <button style={buttonStyle} onClick={() => handleButtonClick('0')}>
          0
        </button>
        <button style={buttonStyle} onClick={() => handleButtonClick('.')}>
          .
        </button>
        <button style={buttonStyle} onClick={handleCalculate}>
          =
        </button>
        <button style={buttonStyle} onClick={() => handleButtonClick('/')}>
          /
        </button>
      </div>
      <div>
        <button
          style={{ ...buttonStyle, width: '105px' }}
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
    </div>
  );
}

export default App;
