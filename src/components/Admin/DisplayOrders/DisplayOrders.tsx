import { useEffect, useContext} from 'react';
import PressOnOrderAdmin from '../Orders/PressOnOrderAdmin';
import OrdersContext from '../../../contexts/Orders';
import { getOrders } from '../../../apiCalls/ordersService';

function DisplayOrders() {

    const { orders, setOrders} = useContext(OrdersContext);

    useEffect(() => {
        getOrders()
        .then(ords => setOrders(ords))
        .catch((error:any) => console.log(error));
    },[]);

    return(
        orders.map(ord=><PressOnOrderAdmin key={ord.id} pressOnOrder={ord} />)
    );
}

export default DisplayOrders;