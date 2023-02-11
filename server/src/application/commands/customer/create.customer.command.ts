export class CreateCustomerCommand {
    private readonly fullName: string;
    private readonly identityCard: string;
    private readonly healthSystem: string;
    private readonly email: string;

    constructor(fullName: string, identityCard: string, healthSystem: string, email: string) {
        this.fullName = fullName;
        this.identityCard = identityCard;
        this.healthSystem = healthSystem;
        this.email = email;
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
    getEmai(): string{
        return this.email;
    }
}