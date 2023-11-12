
import { Container, Row } from "react-bootstrap";
import ProductCard from "../ProductCard/ProductCard";


const ProductList = () => {
  const productos = [
    {
      nombre: "Producto 1",
      imagenUrl: "/images/home/bebida.png",
      precio: 20.99,
      tieneStock: true,
    },
    {
      nombre: "Producto 2",
      imagenUrl: "/images/home/hamburguesa.jpg",
      precio: 15.49,
      tieneStock: false,
    },
    // Puedes agregar más productos según sea necesario
  ];

  return (
    <Container>
      <Row>
        {productos.map((producto, index) => (
          <ProductCard key={index} {...producto} />
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
