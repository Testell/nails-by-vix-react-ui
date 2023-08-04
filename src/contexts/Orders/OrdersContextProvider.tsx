import React, { useState } from "react";
import PropTypes from 'prop-types';

import OrdersContext from ".";

interface OrdersContextProviderProps {
    children: React.ReactNode;
}

const OrdersContextProvider = ({ children }: OrdersContextProviderProps) => {
    const [orders, setOrders] = useState([]);

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

OrdersContextProvider.propTypes = {
    children: PropTypes.object
}

export default OrdersContextProvider;
