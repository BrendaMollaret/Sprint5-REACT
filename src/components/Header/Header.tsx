import { Navbar, Container, Nav, Button } from "react-bootstrap"

const Header = () => {
  return (

    <>
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
    <Navbar.Brand href="#home">
            <img
              alt=""
              src="/images/logo-horizontal-rb.png"
              width="150"
              height="70"
              className="d-inline-block align-top"
            />{' '}
            
          </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#link">Locales</Nav.Link>
          <Nav.Link href="#link">Nosotros</Nav.Link>
          <Nav.Link href="#link">Contactanos</Nav.Link>
        </Nav>
        <Nav className="me-auto">
          <Container className="">
            <Button> Registrarse </Button>
            <Button> Iniciar sesión </Button>
          </Container>

        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    
    </>
     
   
  )
}

export default Header