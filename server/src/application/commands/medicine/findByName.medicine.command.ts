export class FindByNameCommand{
    private readonly name: string;

    constructor(name: string){
        if(!name){
            throw new Error('Name is required');
        }
        this.name = name;
    }

    getName(): string{
        return this.name;
    }
}