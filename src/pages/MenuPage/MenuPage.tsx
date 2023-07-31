import { useLayoutEffect, useRef } from "react";
import styles from "./MenuPage.module.css";
import PriceList from "../../components/PriceList/PriceList";
import MenuOptions from "../../components/MenuOptions/MenuOptions";


function MenuPage(){

    return(
            <div className={styles["menu"]}>
                <div><MenuOptions/></div>
                {/*<div className={styles["menuOptions"]}>
                    <img className={styles["pressOns"]} src="/images/orderPressOn.svg"/>
                    <img className={styles["appointments"]} src="/images/BookAppointment.svg"/>
    </div>*/}
            <div><PriceList/></div>
            </div>


    );
}

export default MenuPage;