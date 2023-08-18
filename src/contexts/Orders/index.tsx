import React from "react";
import PressOnOrder from "../../models/PressOnOrder";

interface OrdersContextType {
    orders: PressOnOrder[]; 
    setOrders: React.Dispatch<React.SetStateAction<PressOnOrder[]>>;
}

//const OrdersContext = React.createContext({});
const OrdersContext = React.createContext<OrdersContextType>({ orders: [], setOrders: () => {} });

export default OrdersContext;