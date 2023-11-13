import React from "react";
import { Table, Button } from "react-bootstrap";
import { useCarrito } from "../CarritoProvider/CarritoProvider";

const DetallePedido: React.FC = () => {
  const { carrito, removeFromCart } = useCarrito();

  const handleRemoveFromCart = (index: number) => {
    removeFromCart(index);
  };

  return (
    <div className="container mt-5">
      <h2>Carrito de Compras</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {carrito.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.nombreArticuloManufacturado}</td>
              <td>${item.precioVenta}</td>
              <td>
                <Button variant="danger" onClick={() => handleRemoveFromCart(index)}>
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DetallePedido;
