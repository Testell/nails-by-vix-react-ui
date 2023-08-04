class PressOnOrder{

    id: number;
    size: string;
    lengths: string;
    shape: string;
    charms: string;
    design: string;

    constructor(id: number, size: string, length: string, shape: string, charms: string, design: string){
        this.id = id;
        this.size = size;
        this.lengths = length;
        this.shape = shape;
        this.charms = charms;
        this.design = design;
    }
}

export default PressOnOrder;