import {v4} from 'uuid';

export class Customer{
    private id: string;
    private fullName: string;
    private identityCard: string;
    private healthSystem: string;

    constructor(id: string, fullName: string, identityCard: string, healthSystem: string){
        this.id = id;
        this.fullName = fullName;
        this.identityCard = identityCard;
        this.healthSystem = healthSystem;
    }

    public static create(fullName: string, identityCard: string, healthSystem : string){
        const id = v4();
        const customer = new Customer(id, fullName, identityCard, healthSystem);

        return customer;
    }

    static fromPrimitives(primitives: any): Customer{
        const customer = new Customer(primitives.id, primitives.from, primitives.identityCard, primitives.healthSystem);

        return customer;
    }

    changeFullName(fullName: string): void{
        this.fullName = fullName;
    }

    changeIdentityCard(identityCard: string): void{
        this.identityCard = identityCard;
    }
    changeHealthSystem(healthSystem: string): void{
        this.healthSystem = healthSystem;
    }
    getId(): string{
        return this.id;
    }
    getFullName(): string{
        return this.fullName;
    }
    getIdentityCard(): string{
        return this.identityCard;
    }
    getHealthSystem(): string{
        return this.healthSystem;
    }
    toPrimitives(): any {
        return{
            id: this.id,
            fullName: this.fullName,
            identityCard: this.identityCard,
            healthSystem: this.healthSystem,
        };
    }
}
