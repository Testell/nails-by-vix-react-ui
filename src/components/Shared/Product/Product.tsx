import { ProductType } from "../../../contexts/ProductContext/ProductProvider"
import { ReducerActionType, ReducerAction } from "../../../contexts/CartContext/CartContextProvider"
import { ReactElement, useState } from "react"
import styles from "./Product.module.css";
import { motion } from "framer-motion";

type PropsType = {
    product: ProductType,
    dispatch: React.Dispatch<ReducerAction>,
    REDUCER_ACTIONS: ReducerActionType
}

const Product = ({product, dispatch, REDUCER_ACTIONS}:
    PropsType): ReactElement => {
        const [customAttributes, setCustomAttributes] = useState({
            size: "",
            lengths: "",
            shape: "",
            charms: "",
            design: "",
          });

          

          const onAddToCart = () => {
            // Include the custom attributes in the payload
            dispatch({
              type: REDUCER_ACTIONS.ADD,
              payload: {
                ...product,
                ...customAttributes,
                quantity: 1,
              },
            });
            setCustomAttributes({
                size: "",
                lengths: "",
                shape: "",
                charms: "",
                design: "",
              });
          };
          const handleAttributeChange = (attribute: string, value: string) => {
            setCustomAttributes({
              ...customAttributes,
              [attribute]: value,
            });
          };

          return (
            <article>
              <h3>{product.name}</h3>
              <p>
                {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(product.price)}
              </p>
              <div className={styles["formContainer"]}> 
              <input 
                className={styles["field"]}
                type="text"
                placeholder="Size"
                value={customAttributes.size}
                onChange={(e) => handleAttributeChange("size", e.target.value)}
              />
              <input
                className={styles["field"]}
                type="text"
                placeholder="Length"
                value={customAttributes.lengths}
                onChange={(e) => handleAttributeChange("lengths", e.target.value)}
              />
              <input
                className={styles["field"]}
                type="text"
                placeholder="Shape"
                value={customAttributes.shape}
                onChange={(e) => handleAttributeChange("shape", e.target.value)}
              />
              <input
                className={styles["field"]}
                type="text"
                placeholder="Charms"
                value={customAttributes.charms}
                onChange={(e) => handleAttributeChange("charms", e.target.value)}
            />
            <textarea
                className={styles["field"]}
                placeholder="Design"
                value={customAttributes.design}
                onChange={(e) => handleAttributeChange("design", e.target.value)}
            />
            
            <motion.button
            onClick={onAddToCart}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9}}
            className={styles["addToCartButton"]}
            >
                Add To Cart
            </motion.button>
            </div>
            </article>
        );
        };

export default Product;
