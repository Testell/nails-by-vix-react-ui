import { useLayoutEffect, useRef } from "react";
import styles from "./MenuPage.module.css";


function MenuPage(){

    return(
            <div className={styles["menu"]}>
                    <div className={styles["menuOptions"]}>
                    <img className={styles["pressOns"]} src="/images/orderPressOn.svg"/>
                    <img className={styles["appointments"]} src="/images/BookAppointment.svg"/>
                    </div>
                <div className={styles["priceListContainer"]}>
                    <table className={styles["priceList"]}>
                        <caption>
                        Price List
                        </caption>
                        <tr>
                        <th>Press Ons</th>
                        <th>$45</th>
                        </tr>
                        <tr>
                        <th>Structured Gel Manicure</th>
                        <th>$60</th>
                        </tr>
                        <tr>
                        <th>Short/Medium Gel Extension</th>
                        <th>$90</th>
                        </tr>
                        <tr>
                        <th>Long/XL Gel Extension</th>
                        <th>$100</th>
                        </tr>
                    </table>
                </div>
                
                </div>


    );
}

export default MenuPage;