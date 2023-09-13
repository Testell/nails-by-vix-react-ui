import { useContext } from "react";
import CartContext from "../contexts/CartContext/CartContextProvider";
import { UseCartContextType } from "../contexts/CartContext/CartContextProvider";

const useCart = (): UseCartContextType => {
    return useContext(CartContext)
}

export default useCart;