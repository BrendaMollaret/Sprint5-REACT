import { CategoriaArticuloManufacturado } from "../types/CategoriaArticuloManufacturado";

const BASE_URL = 'https://sprint5-back-seguridad.onrender.com';

export const CategoriaArticuloManufacturadoService = {

    
    getAllProducts: async (): Promise<CategoriaArticuloManufacturado[]> => {
       
        const response = await fetch(`${BASE_URL}/api/v1/categoriaArticuloManufacturado`);
        const data = await response.json();
        return data;
    },

    
    getProduct: async (id:number): Promise<CategoriaArticuloManufacturado> => {

        const response = await fetch (`${BASE_URL}/api/v1/categoriaArticuloManufacturado/${id}`);
        const data = await response.json();
        return data;
        
    },

    createProduct:async (categoriaArticuloManufacturado:CategoriaArticuloManufacturado):Promise<CategoriaArticuloManufacturado> => {

        const response = await fetch(`${BASE_URL}/api/v1/CategoriaArticuloManufacturado`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(categoriaArticuloManufacturado)
        });

        const data = await response.json();
        return data;
        
    },

    updateProduct: async (id: number, categoriaArticuloManufacturado: CategoriaArticuloManufacturado): Promise<CategoriaArticuloManufacturado> => {
        
        const response = await fetch(`${BASE_URL}/api/v1/categoriaArticuloManufacturado/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(categoriaArticuloManufacturado)
        });

        const data = await response.json();
        return data;
    },

    

    deleteProduct: async (id:number): Promise<void> => {
        await fetch(`${BASE_URL}/api/v1/categoriaArticuloManufacturado/${id}`, {
            method: "DELETE"
        });
    }
    

  
}
