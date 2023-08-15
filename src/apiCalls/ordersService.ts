import PressOnOrder from "../models/PressOnOrder";

export const getOrders = () => {
    return fetch('http://localhost:3000/')
    .then((res: Response) => res.json());
}

export const postOrder = (PressOnOrder: any) => {
    return fetch('http://localhost:3000/',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(PressOnOrder)
        }
    );
}

