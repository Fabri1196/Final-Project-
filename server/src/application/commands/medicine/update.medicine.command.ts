import uuidValidate from 'uuid-validate';

export class UpdateMedicineCommand{
    private readonly id: string;
    private readonly name: string;
    private readonly price: number;

    constructor(id: string, name: string, price: number){
        if(!uuidValidate(id)){
            throw new Error('Id debe ser un uuid válido');
        }
        if(!name){
            throw new Error('Nombre debe ser especificado');
        }
        if(!price){
            throw new Error('Precio debe ser especificado');
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