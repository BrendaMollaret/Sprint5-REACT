import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ArticuloManufacturado } from "../../types/ArticuloManufacturado";
import { useCarrito } from "../CarritoProvider/CarritoProvider";

const ProductCard: React.FC<{ articuloManufacturado: ArticuloManufacturado }> = ({ articuloManufacturado }) => {
  const navigate = useNavigate();
  const { addToCart } = useCarrito();

  const handleAddToCart = () => {
    addToCart(articuloManufacturado);
    console.log("Nuevo carrito:", articuloManufacturado, "Agregado al carrito");
  };

  if (!articuloManufacturado) {
    return null;
  }

  const {
    nombreArticuloManufacturado,
    descripcionArticuloManufacturado,
    precioVenta,
    urlImagen_AM,
    categoriaArticuloManufacturado,
  } = articuloManufacturado;

  return (
    <Col xs={12} md={6} lg={4}>
      <Card style={{ width: "18rem", margin: "10px" }}>
        <Card.Img variant="top" src={urlImagen_AM} alt={nombreArticuloManufacturado} />
        <Card.Body>
          <Card.Title>{nombreArticuloManufacturado}</Card.Title>
          <Card.Title>{descripcionArticuloManufacturado}</Card.Title>
          <Card.Text>
            Precio: ${precioVenta}
            <br />
            Categoría: {categoriaArticuloManufacturado.nombreCategoriaArticuloManufacturado}
          </Card.Text>
          <Button variant="primary" onClick={() => navigate(`/detalle/${articuloManufacturado.id}`)}>
            Ver más
          </Button>
          <Button variant="success" className="ms-2" onClick={handleAddToCart}>
            Agregar al carrito
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;
