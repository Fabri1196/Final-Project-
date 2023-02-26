export class FindByIdentityCardCommand {
    private readonly indentityCard: string;

    constructor(indentityCard: string){
        if(!indentityCard){
            throw new Error("Identity Card is required");
        }
        this.indentityCard = indentityCard;
    }

    getIdentityCard(): string {
        return this.indentityCard;
    }
}