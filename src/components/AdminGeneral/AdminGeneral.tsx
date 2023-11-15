import { Button, Col, Container, Form, FormControl, Nav, Row } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AdminGeneral = () => {
const navigate = useNavigate();

  return (
    <div className="bg-body-tertiary p-3">
      <Container>
        <Row className="align-items-center">

          {/* Barra de búsqueda al inicio */}
          <Col md={2} className="mb-2 d-flex align-items-center">
            <Form className="d-flex">
              <FormControl type="text" placeholder="Buscar" size="sm" />
              <Button variant="light"><FaSearch /></Button>
            </Form>
          </Col>

          {/* Botones de categorías en el medio */}
          <Col md={8} className="d-flex justify-content-center mb-2">
            <Nav className="d-flex justify-content-center">
              <Nav.Link onClick={() => navigate('/adminUnidadMedida')}> Unidad Medida </Nav.Link>
              <Nav.Link href="#papas">ArticuloInsumo </Nav.Link>
              <Nav.Link href="#pizzas"> Pizzas</Nav.Link>
              <Nav.Link href="#panchos"> Panchos</Nav.Link>
              <Nav.Link href="#bebidas"> Bebidas</Nav.Link>
            </Nav>
          </Col>

          {/* Carrito al final a la derecha */}
          <Col md={2} className="d-flex justify-content-end mb-2">
            <Nav>
              <Nav.Link onClick={() => navigate('/detallePedido')}> Carrito</Nav.Link>
            </Nav>
          </Col>
          
        </Row>
      </Container>
    </div>
  )
}

export default AdminGeneral