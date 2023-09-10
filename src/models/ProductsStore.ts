import PressOnOrder from "./PressOnOrder";

const productsArray = [
{
    id: 1,
    PressOnOrder,
    title:"Press Ons",
    price: 40.00
}
]


function getProductData(id: number) {
    let productData = productsArray.find(product => product.id === id);

    if (productData === undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
    
}

export { productsArray, getProductData };