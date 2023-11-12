import { Container, Nav, Navbar } from "react-bootstrap";

const CategoriasSelector = () => {
  // Render
  return (
    <div className="d-flex justify-content-center">

<Navbar expand="lg" className="bg-body-tertiary">
      <Container >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    
  );
};

export default CategoriasSelector;
