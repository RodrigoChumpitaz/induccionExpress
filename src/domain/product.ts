
export interface IProduct {
    name: string;
    price: string;
    quantity: number;
}

export class Product {
    name: string;
    price: string;
    quantity: number;

    constructor(props: IProduct){
        Object.assign(this, props);
    }

    static create(props: IProduct): Product {
        return new Product(props);
    }
}