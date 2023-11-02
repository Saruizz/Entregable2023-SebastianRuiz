import React, { useState } from 'react';

function Card({ input1, input2 }) {
  return (
    <div className="Card">
      <h2>Hola {input1}!</h2>
      <p>Tu pelicula favorita es:</p>
      <h3>{input2}</h3>
    </div>
  );
}

export default Card;
