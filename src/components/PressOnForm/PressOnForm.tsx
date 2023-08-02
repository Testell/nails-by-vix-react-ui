import React, { useState } from "react";
import { useForm } from "../../hooks/useForm";
import PressOnOrder from "../../models/PressOnOrder"
import styles from "./PressOnForm.module.css";
import DropDown from "../DropDown/DropDown";


function PressOnForm(){
   // const initialState: PressOnOrder = new PressOnOrder(0, "", "", "", false, "");

   // const { onChange, onChangeInput, onSubmit, values } = useForm(
     //   addToCart,
      //  initialState
   // );

    /*async function addToCart(){

    }*/

    const [selectedLength, setLengthOption] = useState('');
    const [selectedCharm, setCharmOption] = useState('');

    const lengthOptions = ['Small', 'Medium', 'Long', 'XL'];
    const charmOptions = ['Yes', 'No',];

    const handleLengthChange = (selectedValue: string) => {
        setLengthOption(selectedValue);
      };
    
      const handleCharmChange = (selectedValue: string) => {
        setCharmOption(selectedValue);
      };

    return (
        <div className={styles["formContainer"]}>
            <form className={styles["pressOnForm"]}>
                <div className={styles["field"]}>
                    <label className={styles["label"]} htmlFor="size">Size:</label>
                    <input id="size" placeholder="Short -> XL"/>
                </div>
                <div className={styles["field"]}>
                    <label className={styles["label"]} htmlFor="length">Length:</label>
                    <DropDown options={lengthOptions} value={selectedLength} onChange={handleLengthChange} />
                </div>
                <div className={styles["field"]}>
                    <label className={styles["label"]} htmlFor="shape">Shape:</label>
                    <input id="shape" placeholder="Stiletto?"/>
                </div>
                <div className={styles["field"]}>
                    <label className={styles["label"]} htmlFor="charms">Charms:</label>
                    <DropDown options={charmOptions} value={selectedCharm} onChange={handleCharmChange} />
                </div>
                <div className={styles["field"]}>
                    <label className={styles["label"]} htmlFor="design">Design:</label>
                    <textarea placeholder="Colors, Vibes, Characters"></textarea>
                </div>
                <div className={styles["inspo"]}>Send any inspo photos to nailsbyvix_ on Insta</div>
                <button type="submit">Check Out</button>
            </form>
        </div>
    )
}

export default PressOnForm;