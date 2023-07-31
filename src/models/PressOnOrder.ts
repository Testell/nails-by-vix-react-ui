class PressOnOrder{

    id: number;
    size: string;
    length: string;
    shape: string;
    charms: boolean;
    design: string;

    constructor(id: number, size: string, length: string, shape: string, charms: boolean, design: string){
        this.id = id;
        this.size = size;
        this.length = length;
        this.shape = shape;
        this.charms = charms;
        this.design = design;
    }
}

export default PressOnOrder;