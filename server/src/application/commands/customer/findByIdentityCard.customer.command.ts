export class FindByIdentityCardCommand {
    private readonly indentityCard: string;

    constructor(indentityCard: string){
        if(!indentityCard){
            throw new Error("Número de documento es requerido");
        }
        this.indentityCard = indentityCard;
    }

    getIdentityCard(): string {
        return this.indentityCard;
    }
}