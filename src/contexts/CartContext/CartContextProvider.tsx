import React, { ReactNode, useState } from "react";
import { CartContext, CartContextType } from "./CartContext"
import { getProductData } from "../../models/ProductsStore";

type CartProduct = {
    id: number; 
    quantity: number; 
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

        if (quantity === 0){
            setCartProducts(
                [
                    ...cartProducts,
                    {
                        id: id,
                        quantity: 1
                    }
                ]
            )
        }else {
            setCartProducts(
                cartProducts.map(
                    product =>
                    product.id === id
                    ? { ...product, quantity: product.quantity + 1}
                    : product
                )
            )
        }
    }

    function removeOneFromCart(id: number) {
        const quantity = getProductQuantity(id);

        if(quantity == 1) {
            deleteFromCart(id);
        }else{
            setCartProducts(
                cartProducts.map(
                    product =>
                    product.id === id? { ...product,quantity: product.quantity -1}
                    :product
                )
            )
        }
    }

    function deleteFromCart(id: number) {
        setCartProducts(
            cartProducts =>
            cartProducts.filter(currentProduct => {
                return currentProduct.id != id;
            })
        )
    }

    function getTotalCost() {
        let totalCost = 0;
        cartProducts.forEach((cartItem) => {
            const productData = getProductData(cartItem.id);
    
            if (productData) {
                totalCost += productData.price * cartItem.quantity;
            }
        });
    
        return totalCost;
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

export default CartProvider;

