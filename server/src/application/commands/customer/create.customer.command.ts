export class CreateCustomerCommand {
    private readonly fullName: string;
    private readonly identityCard: string;
    private readonly healthSystem: string;

    constructor(fullName: string, identityCard: string, healthSystem: string) {
        this.fullName = fullName;
        this.identityCard = identityCard;
        this.healthSystem = healthSystem;
    }

    getFullName(): string {
        return this.fullName;
    }

    getIdentityCard(): string{
        return this.identityCard;
    }
    getHealthSystem(): string {
        return this.healthSystem;
    }
}