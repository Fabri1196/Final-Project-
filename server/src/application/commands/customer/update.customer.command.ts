import uuidValidate from 'uuid-validate';

export class UpdateCustomerCommand{
    private readonly id: string;
    private readonly fullName: string;
    private readonly identityCard: string;
    private readonly healthSystem: string;

    constructor(id: string, fullName: string, identityCard: string, healthSystem: string){
        if(!uuidValidate(id)) {
            throw new Error('Id must be a valid uuid');
        }

        if(!fullName) {
            throw new Error('FullName must be specified');
        }

        if(!identityCard){
            throw new Error('Identity Card must be specified');
        }

        if(!healthSystem){
            throw new Error('Health System must be specified');
        }

        this.id = id;
        this.fullName = fullName;
        this.identityCard = identityCard;
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
}