// src/components/Interface2.js
import React from 'react';
import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody, MDBBadge } from 'mdb-react-ui-kit';

const products = [
  {
    name: 'Laptop Gaming',
    price: '$1,200',
    availability: true,
    image: 'https://www.asus.com/media/Odin/Websites/global/ProductLine/20200824120814.jpg', 
  },
  {
    name: 'Monitor UltraAncho',
    price: '$600',
    availability: true,
    image: 'https://www.lg.com/cac/images/monitores/md07523885/gallery/D_01.jpg', 
  },
  {
    name: 'Teclado Mecánico RGB',
    price: '$100',
    availability: true,
    image: 'https://i0.wp.com/hartunning.com.mx/wp-content/uploads/2022/05/KBG500-01.webp?fit=900%2C900&ssl=1',
  },
];

const Interface2 = ({ onNext }) => {
  return (
    <MDBTable>
      <MDBTableHead>
        <tr>
          <th scope='col'>Producto</th>
          <th scope='col'>Precio</th>
          <th scope='col'>Disponibilidad</th>
          <th scope='col'>Imagen</th>
          <th scope='col'>Características</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {products.map((product, index) => (
          <tr key={index}>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>
              <MDBBadge color={product.availability ? 'success' : 'danger'} pill>
                {product.availability ? 'Disponible' : 'No disponible'}
              </MDBBadge>
            </td>
            <td>
              <img
                src={product.image}
                alt={product.name}
                style={{ width: '100px', height: '100px', borderRadius: '50%' }} // Ajusta el tamaño aquí
              />
            </td>
            <td>
              <MDBBtn color='link' rounded size='sm'>
                Detalles
              </MDBBtn>
            </td>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
  );
};

export default Interface2;
