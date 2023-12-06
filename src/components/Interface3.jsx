// src/components/Interface3.js
import React from 'react';
import Navbar from './interface3/navbar';
import Card from './interface3/Card';
import {perros} from '../infoperros'

const Interface3 = () => {
  return (
    <>
      <Navbar/>
      <div class="row row-cols-1 row-cols-md-2 g-4">
        {perros.map((perro) => (
          <Card key={perro.key} imagen={perro.imagen} nombre={perro.nombre} descripcion={perro.descripcion}/>
        ))}
      </div>
    </>
  );
};

export default Interface3;
