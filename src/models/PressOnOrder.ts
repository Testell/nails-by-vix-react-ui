class PressOnOrder{

    id: number;
    size: string;
    lengths: string;
    shape: string;
    charms: string;
    design: string;
    price: number;
    fullfilled: boolean;

    constructor(id: number, size: string, lengths: string, shape: string, charms: string, design: string, price: number, fullfilled: boolean){
        this.id = id;
        this.size = size;
        this.lengths = lengths;
        this.shape = shape;
        this.charms = charms;
        this.design = design;
        this.price = price;
        this.fullfilled = fullfilled;
    }
}

export default PressOnOrder;