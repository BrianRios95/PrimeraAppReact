import logoHeader from "./logo-header.png";
import "./Navbar.css";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import CartWidget from "./CartWidget";

const NavbarExample = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logoHeader} alt="logo img"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="h5" href="#home">
              Inicio
            </Nav.Link>
            <NavDropdown
              className="h5"
              title="Productos"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item className="h5" href="#action/3.1">
                Hombre
              </NavDropdown.Item>
              <NavDropdown.Item className="h5" href="#action/3.2">
                Mujer
              </NavDropdown.Item>
              <NavDropdown.Item className="h5" href="#action/3.3">
                Niños
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="h5" href="#action/3.4">
                Ver todo
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="h5" href="#link">
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  );
};

export default NavbarExample;
