import React, { useState } from "react";
import styles from "./PressOnForm.module.css";
import DropDown from "../Shared/DropDown/DropDown";
import { ProductType } from "../../contexts/ProductContext/ProductProvider";
import { ReducerActionType, ReducerAction } from "../../contexts/CartContext/CartContextProvider";

  type PropsType = {
    product: ProductType,
    dispatch: React.Dispatch<ReducerAction>,
    REDUCER_ACTIONS: ReducerActionType,
    inCart: boolean
  }

function PressOnForm({ product, dispatch, REDUCER_ACTIONS, inCart}: PropsType){
   
    const [size, setSize] = useState(product.size);
    const [length, setLength] = useState(product.lengths);
    const [shape, setShape] = useState(product.shape);
    const [charms, setCharms] = useState(product.charms);
    const [ design, setDesign] = useState(product.design);

    const onAddToCart = () => dispatch({ type: REDUCER_ACTIONS.ADD, payload: {...product, quantity: 1}});

    const lengthOptions = ['Small', 'Medium', 'Long', 'XL'];
    const charmOptions = ['Yes', 'No',];

    /*const handleLengthChange = (selectedValue: string) => {
        setLengthOption(selectedValue);
      };
    
      const handleCharmChange = (selectedValue: string) => {
        setCharmOption(selectedValue);
      };*/

    return (
        <div className={styles["formContainer"]}>
            <form className={styles["pressOnForm"]}>
                <div className={styles["field"]}>
                    <label className={styles["label"]} htmlFor="size">Size:</label>
                    <input value={size} onChange={ (e) => setSize(e.target.value)} id="size" placeholder="Width"/>
                </div>
                <div className={styles["field"]}>
                    <label className={styles["label"]} htmlFor="length">Length:</label>
                    <DropDown options={lengthOptions} value={length} onChange={setLength} />
                </div>
                <div className={styles["field"]}>
                    <label className={styles["label"]} htmlFor="shape">Shape:</label>
                    <input value={shape} onChange={ (e) => setShape(e.target.value)}id="shape" placeholder="Stiletto?"/>
                </div>
                <div className={styles["field"]}>
                    <label className={styles["label"]} htmlFor="charms">Charms:</label>
                    <DropDown value={charms} options={charmOptions}  onChange={setCharms} />
                </div>
                <div className={styles["field"]}>
                    <label className={styles["label"]} htmlFor="design">Design:</label>
                    <textarea value={design} onChange={ (e) => setDesign(e.target.value)} placeholder="Colors, Vibes, Characters"></textarea>
                </div>
                <div className={styles["inspo"]}>Send any inspo photos to nailsbyvix_ on Insta</div>
                <button type="submit" onClick={onAddToCart}>Add To Cart</button>
            </form>
        </div>
    )
}

export default PressOnForm;