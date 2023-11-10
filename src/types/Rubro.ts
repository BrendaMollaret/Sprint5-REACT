export interface Rubro {
    nombreRubro: string;
    fechaAltaRubro: Date;
    fechaBajaRubro: Date;
    fechaModificacionRubro: Date;
    rubroPadre?: Rubro;
    rubroHijoList?: Rubro[];
}
