import React from "react";
import { ChangeEvent, ReactElement } from "react";
import { CartItemType } from "../../contexts/CartContext/CartContextProvider";
import { ReducerAction } from "../../contexts/CartContext/CartContextProvider";
import { ReducerActionType } from "../../contexts/CartContext/CartContextProvider";

type PropsType = {
  item: CartItemType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
};

const CustomCartItem: React.FC<PropsType> = ({
  item,
  dispatch,
  REDUCER_ACTIONS,
}: PropsType) => {
  const lineTotal: number = item.quantity * item.price;

  const onChangeQuantity = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: REDUCER_ACTIONS.QUANTITY,
      payload: { ...item, quantity: Number(e.target.value) },
    });
  };

  const onRemoveFromCart = () =>
    dispatch({
      type: REDUCER_ACTIONS.REMOVE,
      payload: item,
    });

  return (
    <li className="cartItem">
      <div aria-label="Item Name">{item.name}</div>
      <div aria-label="Price Per Item">
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(item.price)}
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
        {/* You can create custom options for the custom item here */}
        {/* For example, if you have custom options like "Small," "Medium," "Large," etc. */}
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>
      <div className="cartSubTotal" aria-label="Line Item Subtotal">
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(lineTotal)}
      </div>
      <button
        className="cartButton"
        aria-label="Remove Item From Cart"
        title="Remove Item From Cart"
        onClick={onRemoveFromCart}
      >
        Remove
      </button>
    </li>
  );
};

export default CustomCartItem;
