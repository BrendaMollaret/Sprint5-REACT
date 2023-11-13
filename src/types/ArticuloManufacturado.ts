import { CategoriaArticuloManufacturado } from "./CategoriaArticuloManufacturado";

export interface ArticuloManufacturado{
    nombreArticuloManufacturado: string;
    descripcionArticuloManufacturado: string;
    tiempoEstimadoCocina: number;
    precioVenta: number;
    costo: number;
    urlImage: string;
    fechaAltaArticuloManufacturado: Date;
    fechaModificacionArticuloManufacturado: Date;
    fechaBajaArticuloManufacturado: Date;
    categoriaArticuloManufacturado: CategoriaArticuloManufacturado;
}