import { Navbar, Container, Nav, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useIsLoggedIn from "../../hooks/useIsLoggedIn";

const Header = () => {
  // Utils
  const navigate = useNavigate();
  const isLoggedIn = useIsLoggedIn();

  // Handlers
  function onLogOut() {
    window.localStorage.removeItem("isLoggedIn");
    navigate("/");
  }

  return (
    <Row className="align-items-center">
      <Col md={4}>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand onClick={() => navigate("/")}>
              <img
                alt=""
                src="/images/logo-horizontal-rb.png"
                width="150"
                height="70"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
          </Container>
        </Navbar>
      </Col>

      <Col md={4} className="d-flex justify-content-center">
        <Navbar expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => navigate("/")}>Inicio</Nav.Link>
              <Nav.Link>Locales</Nav.Link>
              <Nav.Link>Nosotros</Nav.Link>
              <Nav.Link href="#footer">Contactanos</Nav.Link>
              <Nav.Link onClick={() => navigate("/admin")}>Admin</Nav.Link>
              {isLoggedIn && <Nav.Link onClick={onLogOut}>Log out</Nav.Link>}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Col>

      <Col md={4} className="d-flex justify-content-end">
        <Navbar expand="lg">
          <Nav>
            <Button className="btn btn-danger" onClick={() => navigate('/register')}>Registrarse</Button>
          </Nav>
          <Nav>
            <Nav.Link onClick={() => navigate('/login')}>Iniciar sesión</Nav.Link>
          </Nav>
        </Navbar>
      </Col>
    </Row>
  );
};

export default Header;
