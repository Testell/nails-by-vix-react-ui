import styles from "./PriceList.module.css";



function PriceList (){


    return(
        <div className={styles["priceListContainer"]}>
            <table className={styles["priceList"]}>
                <caption>
                    Price List
                </caption>
                <tbody>
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
                </tbody>
            </table>
        </div>
    );
}

export default PriceList;