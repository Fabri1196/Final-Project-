export class FindByIdentityCardCommand {
    private readonly indentityCard: string;

    constructor(indentityCard: string){
        this.indentityCard = indentityCard;
    }

    getIdentityCard(): string {
        return this.indentityCard;
    }
}