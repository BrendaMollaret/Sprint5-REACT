import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ArticuloManufacturadoService } from "../../services/ArticuloManufacturadoService";
import { ArticuloManufacturado } from "../../types/ArticuloManufacturado";

const DetalleProducto: React.FC = () => {
  const { articuloManufacturadoId } = useParams();
  const [articuloManufacturado, setArticuloManufacturado] = useState<ArticuloManufacturado | null>(null);

  useEffect(() => {
    const fetchArticuloManufacturado = async () => {
      try {
        const data = await ArticuloManufacturadoService.getArticuloManufacturado(Number(articuloManufacturadoId));
        setArticuloManufacturado(data);
      } catch (error) {
        console.error("Error fetching ArticuloManufacturado:", error);
      }
    };

    fetchArticuloManufacturado();
  }, [articuloManufacturadoId]);

  if (!articuloManufacturado) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-md-6">
          <img src={articuloManufacturado?.urlImagen_AM} alt={articuloManufacturado?.nombreArticuloManufacturado} className="card-img-top mb-5" />
        </div>

        <div className="col-12 col-md-6">
          <h1 className="display-5 fw-bolder">Titulo: {articuloManufacturado?.nombreArticuloManufacturado}</h1>
          <h5>Categoría: {articuloManufacturado?.categoriaArticuloManufacturado.nombreCategoriaArticuloManufacturado}</h5>
          <p className="lead">Descripción: {articuloManufacturado?.descripcionArticuloManufacturado}</p>
          <p className="lead">Precio: ${articuloManufacturado?.precioVenta}</p>

          {/* Aquí puedes mostrar más detalles según tus necesidades */}
        </div>
      </div>
    </div>
  );
};

export default DetalleProducto;
