import { Cliente } from "./Cliente";

import { Domicilio } from "./Domicilio";
import { detallesPedido } from "./detallesPedido";

export interface Pedido {
    id: number;
    fechaHoraPedido: string;
    fechaHoraModificacionPedido: string | null;
    fechaHoraBajaPedido: string | null;
    fechaHoraEstimadaFinalizacion: string | null;
    totalPrecio: number;
    totalCosto: number;
    tipoEnvio: string;
    formaPago: string;
    estadoPedido: string;

    //Relaciones
    domicilioEntrega: Domicilio;
    cliente: Cliente;
    detallesPedido: detallesPedido;
    
  }