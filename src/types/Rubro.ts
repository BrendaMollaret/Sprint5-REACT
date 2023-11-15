export interface Rubro {
    id: number;
    nombreRubro: string;
    fechaAltaRubro: string;
    fechaBajaRubro?: string;
    fechaModificacionRubro?: string;
    
    //Relaciones
    rubroPadre?: Rubro;
    rubroHijoList?: Rubro[]; 
  }

