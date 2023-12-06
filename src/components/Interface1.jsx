// src/components/Interface1.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Interface1 = ({ onNext }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica de autenticación (simulada)
    if (username === 'usuario' && password === 'contraseña') {
      onNext();
    } else {
      alert('Credenciales incorrectas. Inténtalo de nuevo.');
    }
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={15}>
          <div style={{ backgroundColor: '#FFD700', padding: '20px', borderRadius: '10px' }}>
            <h2 className="text-center mb-4">Iniciar Sesión</h2>
            <Form>
              <Form.Group controlId="formUsername">
                <Form.Label>Usuario:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa tu usuario"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label>Contraseña:</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Ingresa tu contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" type="button" onClick={handleLogin} block>
                Iniciar Sesión
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Interface1;


