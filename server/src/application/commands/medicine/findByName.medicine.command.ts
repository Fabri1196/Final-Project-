export class FindByNameCommand{
    private readonly name: string;

    constructor(name: string){
        if(!name){
            throw new Error('Nombre es requerido');
        }
        this.name = name;
    }

    getName(): string{
        return this.name;
    }
}