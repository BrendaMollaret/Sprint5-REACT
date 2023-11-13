import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useIsLoggedIn from "../../hooks/useIsLoggedIn";
import { CartFill } from "react-bootstrap-icons";

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
    <>
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

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" style={{ margin: "0 auto" }}>
              <Nav.Link onClick={() => navigate("/")}>Inicio</Nav.Link>
              <Nav.Link>Locales</Nav.Link>
              <Nav.Link>Nosotros</Nav.Link>
              <Nav.Link>Contactanos</Nav.Link>
              <Nav.Link onClick={() => navigate("/admin")}>Admin</Nav.Link>
              {isLoggedIn && <Nav.Link onClick={onLogOut}>Log out</Nav.Link>}
            </Nav>

            <Nav className="me-auto d-flex justify-content-center">
              <Container className="">

                {/* Botón de carrito de compras */}
                {isLoggedIn && <Nav.Link onClick={() => navigate("/cart")}>
                <Button variant="danger" className="mx-2">
                  <CartFill size={20} className="d-inline-block align-top" />
                </Button>
                  </Nav.Link>}

                {/* Botón de Registrarse */}
                <Button className="btn btn-danger">Registrarse</Button>
                
                {/* Enlace de Iniciar sesión */}
                <Nav.Link>Iniciar sesión</Nav.Link>

              </Container>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
