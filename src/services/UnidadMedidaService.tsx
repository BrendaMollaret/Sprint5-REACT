import { UnidadMedida } from "../types/UnidadMedida";


const BASE_URL = 'https://sprint5-back-seguridad.onrender.com';

export const UnidadMedidaService = {

    
    getAllUnidadMedida: async (): Promise<UnidadMedida[]> => {
       
        const response = await fetch(`${BASE_URL}/api/v1/unidadMedida`);
        const data = await response.json();
        return data;
    },

    
    getUnidadMedida: async (id:number): Promise<UnidadMedida> => {

        const response = await fetch (`${BASE_URL}/api/v1/unidadMedida/${id}`);
        const data = await response.json();
        return data;
        
    },

    createUnidadMedida:async (unidadMedida:UnidadMedida):Promise<UnidadMedida> => {

        const response = await fetch(`${BASE_URL}/api/v1/unidadMedida`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(unidadMedida)
        });

        const data = await response.json();
        return data;
        
    },

    updateUnidadMedida: async (id: number, unidadMedida:UnidadMedida): Promise<UnidadMedida> => {
        
        const response = await fetch(`${BASE_URL}/api/v1/unidadMedida/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(unidadMedida)
        });

        const data = await response.json();
        return data;
    },

    

    deleteUnidadMedida: async (id:number): Promise<void> => {
        await fetch(`${BASE_URL}/api/v1/unidadMedida/${id}`, {
            method: "DELETE"
        });
    }
    

  
}
