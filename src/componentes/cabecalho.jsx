import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function Cabecalho() {
  return (
    <div className='conteiner'>
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top" >
      <div className="container">
        <Navbar.Brand href="#">Empresa Fictícia</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ml-auto">
            <Nav.Link href="#" className="ms-3">Página Inicial</Nav.Link>
            <Nav.Link href="#" className="ms-3">Sobre Nós</Nav.Link>
            <Nav.Link href="#" className="ms-3">Contato</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
    </div>
    
  );
}

