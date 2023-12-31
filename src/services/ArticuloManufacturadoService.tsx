import { ArticuloManufacturado } from "../types/ArticuloManufacturado";


const BASE_URL = 'http://localhost:8080';

export const ArticuloManufacturadoService = {

    
    getAllArticuloManufacturado: async (): Promise<ArticuloManufacturado[]> => {
       
        const response = await fetch(`${BASE_URL}/api/v1/articuloManufacturado/paged`);
        const data = await response.json();
        return data.content;
    },

    
    getArticuloManufacturado: async (id:number): Promise<ArticuloManufacturado> => {

        const response = await fetch (`${BASE_URL}/api/v1/articuloManufacturado/${id}`);
        const data = await response.json();
        return data;
        
    },

    createArticuloManufacturado:async (articuloManufacturado : ArticuloManufacturado):Promise<ArticuloManufacturado> => {

        const response = await fetch(`${BASE_URL}/api/v1/articuloManufacturado`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(articuloManufacturado)
        });

        const data = await response.json();
        return data;
        
    },

    updateArticuloManufacturado: async (id: number, articuloManufacturado: ArticuloManufacturado): Promise<ArticuloManufacturado> => {
        
        const response = await fetch(`${BASE_URL}/api/v1/articuloManufacturado/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(articuloManufacturado)
        });

        const data = await response.json();
        return data;
    },

    

    deleteArticuloManufacturado: async (id:number): Promise<void> => {
        await fetch(`${BASE_URL}/api/v1/articuloManufacturado/${id}`, {
            method: "DELETE"
        });
    }
    

  
}
