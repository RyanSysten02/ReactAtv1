import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Cabecalho() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/" className='fs-2 '>Empresa Fictícia</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Loja</Nav.Link>
            <Nav.Link href="#pricing">Dowloads</Nav.Link>
            <NavDropdown title="Produtos" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/Eletronicos">Eletrônicos</NavDropdown.Item>
              <NavDropdown.Item href="/Roupas">
                Roupas
              </NavDropdown.Item>
              <NavDropdown.Item href="/Alimentos">Alimentos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                todos os Produtos
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Log-in</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              |   sing-up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Cabecalho;