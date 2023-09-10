import React, { useState } from "react";
import { useForm } from "../../hooks/useForm";
import PressOnOrder from "../../models/PressOnOrder"
import styles from "./PressOnForm.module.css";
import DropDown from "../Shared/DropDown/DropDown";
import PropTypes from 'prop-types';

interface PressOnFormProps {
    pressOnOrder: PressOnOrder;
  }

function PressOnForm(props:PressOnFormProps){
   // const initialState: PressOnOrder = new PressOnOrder(0, "", "", "", false, "");

   // const { onChange, onChangeInput, onSubmit, values } = useForm(
     //   addToCart,
      //  initialState
   // );

    /*async function addToCart(){

    }*/

    const [size, setSize] = useState(props.pressOnOrder.size);
    const [length, setLength] = useState(props.pressOnOrder.lengths);
    const [shape, setShape] = useState(props.pressOnOrder.shape);
    const [charms, setCharms] = useState(props.pressOnOrder.charms);
    const [ design, setDesign] = useState(props.pressOnOrder.design);

   // const [selectedLength, setLengthOption] = useState('');
   // const [selectedCharm, setCharmOption] = useState('');

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
                <button type="submit">Add To Cart</button>
            </form>
        </div>
    )
}

export default PressOnForm;