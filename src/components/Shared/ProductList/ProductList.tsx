import useCart from "../../../hooks/UseCart"
import useProducts from "../../../hooks/UseProducts"
import { UseProductsContextType } from "../../../contexts/ProductContext/ProductProvider"
import { ReactElement } from "react";
import Product from "../Product/Product";

const ProductList = () => {

    const { dispatch, REDUCER_ACTIONS, cart} = useCart();
    const { products } = useProducts();

    let pageContent: ReactElement | ReactElement[] =<p>Loading</p>

    if (products?.length){
        pageContent = products.map(product => {
            return(
                <Product
                    key={product.sku}
                    product={product}
                    dispatch={dispatch}
                    REDUCER_ACTIONS={REDUCER_ACTIONS}
                    />
            )
        })
    }

    const content = (
        <main>
            {pageContent}
        </main>
    )
    
  return content;
}

export default ProductList
