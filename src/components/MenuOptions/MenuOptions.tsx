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

    const { dispatch, REDUCER_ACTIONS, cart} = useCart();
    const { products } = useProducts();
    
    
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
                       { /*<PressOnForm 
                            product={product}
                            dispatch={dispatch}
                            REDUCER_ACTIONS={REDUCER_ACTIONS}                
    /> */ }
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