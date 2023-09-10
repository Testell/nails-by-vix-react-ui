import React, { ReactNode, useState } from "react";
import { CartContext, CartContextType } from "./CartContext"

type CartProduct = {
    id: number; // Assuming 'id' is a number
    quantity: number; // You may have other properties here
};

type CartProviderProps = {
    children: ReactNode;
};

export function CartProvider({ children }: CartProviderProps) {
    const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);

    function getProductQuantity(id: number) {
        const quantity = cartProducts.find(product => product.id === id)?.quantity;
        
        if (quantity === undefined) {
            return 0;
        } 
        
        return quantity;
    }

    function addToCart(id: number) {
        const quantity = getProductQuantity(id);
    }
    
    const contextValue: CartContextType = {
        items: [],
        getProductQuantity: getProductQuantity,
        addToCart: () => {},
        removeFromCart: () => {},
        deleteFromCart: () => {},
        getTotalCost: () => {}
    };

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
}

