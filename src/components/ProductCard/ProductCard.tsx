import { Button, Card } from "react-bootstrap";

const ProductCard = ({ imagenUrl, nombre, precio, tieneStock }) => {
  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Img variant="top" src={imagenUrl} alt={nombre} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
          Precio: ${precio}
          <br />
          Stock: {tieneStock ? "Disponible" : "Agotado"}
        </Card.Text>
        <Button variant="primary">Ver más</Button>
        <Button variant="success" className="ms-2">
          Agregar al carrito
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
