import { ProductType } from "../../../contexts/ProductContext/ProductProvider"
import { ReducerActionType, ReducerAction } from "../../../contexts/CartContext/CartContextProvider"
import { ReactElement } from "react"


type PropsType = {
    product: ProductType,
    dispatch: React.Dispatch<ReducerAction>,
    REDUCER_ACTIONS: ReducerActionType
}

const Product = ({product, dispatch, REDUCER_ACTIONS}:
    PropsType): ReactElement => {

    const onAddToCart = () => dispatch({ type: REDUCER_ACTIONS.ADD, payload: {...product, quantity: 1}})

    const content = (
        <article>
            <h3>{product.name}</h3>
            <p>{new Intl.NumberFormat('en-US', {style:
                'currency' , currency: 'USD'}).format(product.price)}
            </p>
            <button onClick={onAddToCart}>Add To Cart</button>
        </article>
    )
    
  return content;
  
}

export default Product
