import React, { useState } from "react";
import PropTypes from 'prop-types';

import OrdersContext from ".";
import PressOnOrder from "../../models/PressOnOrder";

interface OrdersContextProviderProps {
    children: React.ReactNode;
}

//const OrdersContextProvider = ({ children }: OrdersContextProviderProps) => {
    const OrdersContextProvider: React.FC<OrdersContextProviderProps> = ({ children }) => {
    //const [orders, setOrders] = useState([]);
    const [orders, setOrders] = useState<PressOnOrder[]>([]);

    const context = {
        orders,
        setOrders
    };

    return (
        <OrdersContext.Provider value={context}>
            {children}
        </OrdersContext.Provider>
    );
}

/*OrdersContextProvider.propTypes = {
    children: PropTypes.object
}*/

export default OrdersContextProvider;
