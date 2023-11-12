import { Col, Container, Row } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer" className="mt-auto py-3 bg-light text-dark">
      <Container>
        <Row>
          {/* Primera columna con imagen a la izquierda */}
          <Col md={2} xs={12} className="order-md-1 order-2">
            <img
              src="/images/logo-horizontal-rb.png"
              alt="logo"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Col>

          {/* Segunda columna con texto en el medio */}
          <Col md={2} xs={12} className="order-md-2 order-1">
            <h5>El buen sabor</h5>
            <p>Tu mejor elección de comida</p>
            <Link to="/">
              <FaFacebook size={30} style={{ marginRight: "10px" }} />
            </Link>
            <Link to="/">
              <FaTwitter size={30} style={{ marginRight: "10px" }} />
            </Link>
            <Link to="/">
              <FaInstagram size={30} />
            </Link>
          </Col>

          {/* Tercera columna con texto en el medio */}
          <Col md={2} xs={12} className="order-md-3 order-3">
            <h5>HORARIOS</h5>
            <p>Lunes a viernes 08:00 a 23:00</p>
            <p>Sábados 09:00 a 14:00</p>
            <p>Domingos cerrado</p>
          </Col>

          {/* Cuarta columna con texto en el medio */}
          <Col md={2} xs={12} className="order-md-4 order-4">
            <h5>LINKS</h5>
            <p>Términos y servicios</p>
            <p>Contacto</p>
          </Col>

          {/* Quinta columna con texto en el medio */}
          <Col md={4} xs={12} className="order-md-5 order-5">
            <h5>CONTACTENOS</h5>
            <p>+54 9 2612345678</p>
            <p>Calle UTN-FRM 265</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
