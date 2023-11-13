import { Rubro } from "./Rubro";
import { UnidadMedida } from "./UnidadMedida";

export interface ArticuloInsumo {
    id: number;
    nombreArticuloInsumo: string;
    fechaHoraAltaArticuloInsumo: Date;
    fechaHoraModificacionArticuloInsumo: Date;
    fechaHoraBajaArticuloInsumo: Date;
    precioCompra: number;
    stockActual: number;
    stockMinimo: number;
    urlImagen: string;
    unidadMedida: UnidadMedida; // Relación muchos a uno con UnidadMedida
    rubro: Rubro; // Relación muchos a uno con Rubro
}
