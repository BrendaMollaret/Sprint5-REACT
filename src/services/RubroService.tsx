import { Rubro } from "../types/Rubro";


const BASE_URL = 'https://sprint5-back-seguridad.onrender.com';

export const RubroService = {

    
    getProducts: async (): Promise<Rubro[]> => {
       
        const response = await fetch(`${BASE_URL}/api/v1/rubro`);
        const data = await response.json();
        return data;
    },

    
    getProduct: async (id:number): Promise<Rubro> => {

        const response = await fetch (`${BASE_URL}/api/v1/rubro/${id}`);
        const data = await response.json();
        return data;
        
    },

    createProduct:async (rubro:Rubro):Promise<Rubro> => {

        const response = await fetch(`${BASE_URL}/api/v1/rubro`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(rubro)
        });

        const data = await response.json();
        return data;
        
    },

    updateProduct: async (id: number, rubro:Rubro): Promise<Rubro> => {
        
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

    

    deleteProduct: async (id:number): Promise<void> => {
        await fetch(`${BASE_URL}/api/v1/rubro/${id}`, {
            method: "DELETE"
        });
    }
    

  
}
