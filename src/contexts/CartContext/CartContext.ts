import React, { createContext } from "react";


export type CartContextType = {
    items: any[]; 
    getProductQuantity: (id: number) => number;
    addToCart: (id: number) => void;
    removeFromCart: () => void;
    deleteFromCart: () => void;
    getTotalCost: () => void;
};

export const CartContext = createContext<CartContextType | undefined>(undefined);
