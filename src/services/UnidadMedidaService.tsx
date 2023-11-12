import { Rubro } from "../types/Rubro";


const BASE_URL = 'https://sprint4-elbuensabor.onrender.com';

export const UnidadMedidaService = {

    
    getAllUnidadMedida: async (): Promise<Rubro[]> => {
       
        const response = await fetch(`${BASE_URL}/api/v1/unidadMedida`);
        const data = await response.json();
        return data;
    },

    
    getUnidadMedida: async (id:number): Promise<Rubro> => {

        const response = await fetch (`${BASE_URL}/api/v1/unidadMedida/${id}`);
        const data = await response.json();
        return data;
        
    },

    createUnidadMedida:async (rubro:Rubro):Promise<Rubro> => {

        const response = await fetch(`${BASE_URL}/api/v1/unidadMedida`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(rubro)
        });

        const data = await response.json();
        return data;
        
    },

    updateUnidadMedida: async (id: number, rubro:Rubro): Promise<Rubro> => {
        
        const response = await fetch(`${BASE_URL}/api/v1/rubro/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(rubro)
        });

        const data = await response.json();
        return data;
    },

    

    deleteUnidadMedida: async (id:number): Promise<void> => {
        await fetch(`${BASE_URL}/api/v1/rubro/${id}`, {
            method: "DELETE"
        });
    }
    

  
}
