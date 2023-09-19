import styles from "./MenuOptions.module.css";
import { useRef, useLayoutEffect, useContext } from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import PressOnForm from "../PressOnForm/PressOnForm";
import CartContext, { ReducerAction, ReducerActionType} from "../../contexts/CartContext/CartContextProvider";
import ProductsContext, { ProductType } from "../../contexts/ProductContext/ProductProvider";
import useCart from "../../hooks/UseCart";
import { UseProductsContextType } from "../../contexts/ProductContext/ProductProvider";
import useProducts from "../../hooks/UseProducts";
gsap.registerPlugin(Flip);




function MenuOptions ( ){

    const defaultProduct = {
        sku: "item00001",
        name: "Press On Order",
        price: 40.00,
        size: "",
        lengths: "",
        shape: "",
        charms: "",
        design: "",
        fullfilled: false,
      };
    
    const defaultDispatch = (action: any) => {
        // This is a placeholder dispatch function that does nothing.
        console.log("Received action:", action);
        // You can add more logic here if needed.
      };

      const defaultReducerActions = {
        ADD: "ADD",
        REMOVE: "REMOVE",
        QUANTITY: "QUANTITY",
        SUBMIT: "SUBMIT",
      };
    
    
    const duration = 0.5;
    let lastItems = [];
    let lastIndex = -1;

    const options = useRef<HTMLDivElement[]>([]);

    let menuOptions = (option: HTMLDivElement | null, index: number) => {
        if(option) {
            options.current[index] = option;
        }
    }
    
    return(
        <div className={styles["menuOptionsContainer"]}>
            <div className={styles["menuOptions"]}>
                <div className={styles["menuOption"]}>
                    <div className={styles["title"]}>
                        <div>Order</div>
                        <div>Press Ons</div>
                    </div>
                    <div className={styles["form"]}>
                        <PressOnForm 
                            product={defaultProduct}
                            dispatch={defaultDispatch}
                            REDUCER_ACTIONS={defaultReducerActions}                
                        />
                    </div>
                </div>
                <div className={styles["menuOption"]}>
                    <div className={styles["title"]}>
                        <div>Book</div>
                        <div>Appointment</div>
                    </div>
                    <div className={styles["form"]}>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuOptions;