import styles from "./MenuOptions.module.css";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import PressOnForm from "../PressOnForm/PressOnForm";
import PressOnOrder from "../../models/PressOnOrder";
gsap.registerPlugin(Flip);


function MenuOptions (){

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
                        <PressOnForm pressOnOrder={new PressOnOrder(0, "", "", "", "", "", 40.00, false)}/>
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