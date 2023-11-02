import React, { useState } from 'react';
import Card from './Card';

  function App() {

    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [showCard, setShowCard] = useState(false);
    const [error, setError] = useState('');
  
    const handleInput1Change = (e) => {
      setInput1(e.target.value);
    };
  
    const handleInput2Change = (e) => {
      setInput2(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
      // Validaciones
      if (input1.length < 3 || input1.trim() !== input1) {
        setError('Por favor chequea que la información sea correcta');
      } else if (input2.length < 6) {
        setError('Por favor chequea que la información sea correcta');
      } else {
        setShowCard(true);
        setError('');
      }
    };
  
  return (
    <div className="App">
      <h1>Pelicula favorita</h1>
      <form onSubmit={handleSubmit}>
      <div>
          <label htmlFor="input1">Nombre:</label>
          <input
            type="text"
            id="input1"
            value={input1}
            onChange={handleInput1Change}
          />
        </div>
        <div>
          <label htmlFor="input2">Ingresa tu serie favorita:</label>
          <input
            type="text"
            id="input2"
            value={input2}
            onChange={handleInput2Change}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {error && <p>{error}</p>}
      {showCard && (
        <Card input1={input1} input2={input2} />
      )}
      
    </div>
  );
}

export default App;
