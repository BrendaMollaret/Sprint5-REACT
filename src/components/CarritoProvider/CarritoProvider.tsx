import React, { createContext, useContext, useState, ReactNode } from "react";
import { ArticuloManufacturado } from "../../types/ArticuloManufacturado";

interface CarritoContextProps {
  carrito: ArticuloManufacturado[];
  addToCart: (item: ArticuloManufacturado) => void;
  removeFromCart: (index: number) => void;
}

const CarritoContext = createContext<CarritoContextProps | undefined>(undefined);

interface CarritoProviderProps {
  children: ReactNode;
}

export const CarritoProvider: React.FC<CarritoProviderProps> = ({ children }) => {
  const [carrito, setCarrito] = useState<ArticuloManufacturado[]>([]);

  const addToCart = (item: ArticuloManufacturado) => {
    setCarrito((prevCarrito) => [...prevCarrito, item]);
  };

  const removeFromCart = (index: number) => {
    setCarrito((prevCarrito) => {
      const newCarrito = [...prevCarrito];
      newCarrito.splice(index, 1);
      return newCarrito;
    });
  };

  return (
    <CarritoContext.Provider value={{ carrito, addToCart, removeFromCart }}>
      {children}
    </CarritoContext.Provider>
  );
};

export const useCarrito = () => {
  const context = useContext(CarritoContext);
  if (!context) {
    throw new Error("useCarrito debe ser utilizado dentro de un CarritoProvider");
  }
  return context;
};
