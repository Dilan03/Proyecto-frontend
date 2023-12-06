// src/App.js
import React, { useState } from 'react';
import Interface1 from './components/Interface1';
import Interface2 from './components/Interface2';
import Interface3 from './components/Interface3';
import './App.css';

function App() {
  const [estado, setEstado] = useState(1);

  const cambiarEstado = () => {
    setEstado((prevEstado) => (prevEstado % 3) + 1);
  };

  return (
    <div className="">
      <h2>Interfaces con React</h2>
      <button onClick={cambiarEstado}>Cambiar la interfaz</button>
      {estado === 1 && <Interface1 />}
      {estado === 2 && <Interface2 />}
      {estado === 3 && <Interface3 />}
    </div>
  );
}

export default App;