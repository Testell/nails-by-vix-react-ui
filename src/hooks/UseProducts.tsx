import { useContext } from "react";
import { UseProductsContextType } from "../contexts/ProductContext/ProductProvider";
import ProductsContext from "../contexts/ProductContext/ProductProvider";

const useProducts = (): UseProductsContextType => {
    return useContext(ProductsContext)
}

export default useProducts;