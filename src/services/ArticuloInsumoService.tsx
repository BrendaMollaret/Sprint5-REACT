import { ArticuloInsumo } from "../types/ArticuloInsumo";


const BASE_URL = 'https://sprint4-elbuensabor.onrender.com';

export const ProductService = {

    
    getAllProducts: async (): Promise<ArticuloInsumo[]> => {
       
        const response = await fetch(`${BASE_URL}/api/v1/articuloInsumo`);
        const data = await response.json();
        return data;
    },

    
    getProduct: async (id:number): Promise<ArticuloInsumo> => {

        const response = await fetch (`${BASE_URL}/api/v1/articuloInsumo/${id}`);
        const data = await response.json();
        return data;
        
    },

    createProduct:async (articuloInsumo:ArticuloInsumo):Promise<ArticuloInsumo> => {

        const response = await fetch(`${BASE_URL}/api/v1/articuloInsumo`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(articuloInsumo)
        });

        const data = await response.json();
        return data;
        
    },

    updateProduct: async (id: number, articuloInsumo: ArticuloInsumo): Promise<ArticuloInsumo> => {
        
        const response = await fetch(`${BASE_URL}/api/v1/articuloInsumo/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(articuloInsumo)
        });

        const data = await response.json();
        return data;
    },

    

    deleteProduct: async (id:number): Promise<void> => {
        await fetch(`${BASE_URL}/api/v1/articuloInsumo/${id}`, {
            method: "DELETE"
        });
    }
    

  
}
