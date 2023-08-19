class ShippingInfo{

    email: string;
    name: string;
    addressLineOne: string;
    addressLineTwo: string;
    city: string;
    state: string;
    zipCode: number;

    constructor(email: string, name: string, addressLineOne: string, addressLineTwo: string, city: string, state: string, zipCode: number){
        this.email = email;
        this.name = name;
        this.addressLineOne = addressLineOne;
        this.addressLineTwo = addressLineTwo;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
    }
}

export default ShippingInfo;