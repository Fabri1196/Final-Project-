import uuidValidate from 'uuid-validate';

export class UpdateMedicineCommand{
    private readonly id: string;
    private readonly name: string;
    private readonly price: number;

    constructor(id: string, name: string, price: number){
        if(!uuidValidate(id)){
            throw new Error('Id must be a valid uuid');
        }
        if(!name){
            throw new Error('Name must be specified');
        }
        if(!price){
            throw new Error('Price must be specified');
        }

        this.id = id;
        this.name = name;
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
}