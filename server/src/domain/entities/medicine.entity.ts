import {v4} from 'uuid';

export class Medicine {
    private id: string;
    private name: string;
    private price: number;

    constructor(id: string, name: string, price: number){
        this.id = id;
        this.name = name;
        this.price = price;
    }

    public static create(name: string, price: number){
        const id = v4();
        const medicine = new Medicine(id, name, price);

        return medicine;
    }

    static fromPrimitives(primitives: any): Medicine{
        const medicine = new Medicine(primitives.id, primitives.name, primitives.price);
        return medicine;
    }

    changeName(name: string): void{
        this.name = name;
    }
    changePrice(price: number): void{
        this.price = price;
    }
    getId(): string{
        return this.id;
    }
    getName(): string{
        return this.name;
    }
    getPrice(): number{
        return this.price;
    }
    toPrimitives(): any{
        return{
            id: this.id,
            name: this.name,
            price: this.price,
        }
    }
}