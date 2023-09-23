import { ProductType } from "../../../contexts/ProductContext/ProductProvider";
import { ReducerActionType, ReducerAction } from "../../../contexts/CartContext/CartContextProvider";
import { ReactElement, SetStateAction, useState } from "react";
import styles from "./Product.module.css";
import { motion } from "framer-motion";
import Notification from "../Notification/Notification";

type PropsType = {
  product: ProductType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
};

type NotificationType = {
  text: string;
  style: string;
  position: string;
};



const Product = ({ product, dispatch, REDUCER_ACTIONS }: PropsType): ReactElement => {
  const [customAttributes, setCustomAttributes] = useState({
    size: "",
    lengths: "",
    shape: "",
    charms: "",
    design: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const [notifications, setNotifications] = useState<NotificationType[]>([]);
  const [text, setText] = useState("Item Added");
  const [style, setStyle] = useState("success");
  const [position, setPosition] = useState("bottom");

  

  

  const onAddToCart = () => {
    if (isFormValid) {
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
      setIsFormValid(false);

      setNotifications([...notifications, { text, style, position }]);
    }
  };

  

  

  const handleAttributeChange = (attribute: string, value: string) => {
    setCustomAttributes({
      ...customAttributes,
      [attribute]: value,
    });

    
    const isValid = Object.values(customAttributes).every((val) => val.trim() !== "");
    setIsFormValid(isValid);
  };

  return (
    <>
    <article>
      <h3>{product.name}</h3>
      <p>{new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(product.price)}</p>
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
          whileTap={{ scale: 0.9 }}
          className={styles["addToCartButton"]}
          disabled={!isFormValid} // Disable the button if the form is not valid
        >
          Add To Cart
        </motion.button>
      </div>
    </article>
    {notifications.map((notification, index) => (
    <Notification
      key={index}
      notification={notification}
      notifications={notifications}
      setNotifications={setNotifications}
    />
  ))}
    </>
  );
};

export default Product;
