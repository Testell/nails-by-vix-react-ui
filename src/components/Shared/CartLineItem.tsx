import { ChangeEvent, ReactElement } from "react";
import { CartItemType } from "../../contexts/CartContext/CartContextProvider";
import { ReducerAction } from "../../contexts/CartContext/CartContextProvider";
import { ReducerActionType } from "../../contexts/CartContext/CartContextProvider";

type PropsType = {
  item: CartItemType,
  dispatch: React.Dispatch<ReducerAction>,
  REDUCER_ACTIONS: ReducerActionType
}

const CartLineItem = ({ item, dispatch, REDUCER_ACTIONS}: PropsType) => {

  const lineTotal: number = (item.quantity * item.price)

  const highestQuantity: number = 20 > item.quantity ? 20 : item.quantity

  const optionValues: number[] = Array.from({ length: highestQuantity }, (_, i) => i + 1);


  const options: ReactElement [] = optionValues.map(val =>{
    return <option key={`opt${val}`} value={val}>{val}</option>
  })

  const onChangeQuantity = ( e: ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: REDUCER_ACTIONS.QUANTITY,
      payload: {...item, quantity: Number(e.target. value)}
    })
  }

  const onRemoveFromCart = () => dispatch({
    type: REDUCER_ACTIONS.REMOVE,
    payload: item,
  })

  

  const content =(
    <li className="cartItem">
      <div aria-label="Item Name">{item.name}</div>
      <div aria-label="Price Per Item">{new Intl.NumberFormat
      ('en-US',{ style:'currency', currency: 'USD'}).format
      (item.price)}
      </div>

      <div>
        <p>Size: {item.size}</p>
        <p>Lengths: {item.lengths}</p>
        <p>Shape: {item.shape}</p>
        <p>Charms: {item.charms}</p>
        <p>Design: {item.design}</p>
      </div>

      <label htmlFor="itemQuantity" className="offScreen">
        Item Quantity
      </label>
      <select 
        name="itemQuantity" 
        id="itemQuantity"
        className="cartSelect"
        value={item.quantity}
        aria-label="Item Quantity"
        onChange={onChangeQuantity}
      >
        {options}
      </select>
      <div className="cartSubTotal" aria-label="Line Item Subtotal">
      {new Intl.NumberFormat
      ('en-US',{ style:'currency', currency: 'USD'}).format
      (lineTotal)}
      </div>
      <button 
        className="cartButton" 
        aria-label="Remove Item From Cart" 
        title="Remove Item From Cart" 
        onClick={onRemoveFromCart}>
          Remove
      </button>
    </li>
  )

  return content;
}

export default CartLineItem;
