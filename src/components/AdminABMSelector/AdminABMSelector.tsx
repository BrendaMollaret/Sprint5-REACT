import { Container, Row, Col, Nav} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AdminABMSelector = () => {

  const navigate = useNavigate();

  return (
    <div className="bg-body-tertiary p-3">
      <Container>
        <Row className="align-items-center">

          {/* Botones de categorías en el medio */}
          <Col md={8} className="d-flex justify-content-center mb-2">
            <Nav className="d-flex justify-content-center">
              <Nav.Link onClick={() => navigate('/ABMUnidadMedida')}> UnidadMedida </Nav.Link>
              <Nav.Link onClick={() => navigate('/')}> ArticuloManufacturado </Nav.Link>
              <Nav.Link onClick={() => navigate('/')}> Pizzas</Nav.Link>
              <Nav.Link onClick={() => navigate('/')}> Panchos</Nav.Link>
              <Nav.Link onClick={() => navigate('/')}> Bebidas</Nav.Link>
            </Nav>
          </Col>

          
        </Row>
      </Container>
    </div>
  );
};

export default AdminABMSelector;
