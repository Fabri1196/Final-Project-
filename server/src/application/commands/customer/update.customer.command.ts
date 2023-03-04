import uuidValidate from 'uuid-validate';

export class UpdateCustomerCommand{
    private readonly id: string;
    private readonly fullName: string;
    private readonly identityCard: string;
    private readonly healthSystem: string;
    private readonly email: string;

    constructor(id: string, fullName: string, identityCard: string, healthSystem: string, email: string){
        if(!uuidValidate(id)) {
            throw new Error('Id debe ser un uuid válido');
        }

        if(!fullName) {
            throw new Error('Nombre debe ser especificado');
        }

        if(!identityCard){
            throw new Error('Número de documento debe ser especificado');
        }

        if(!healthSystem){
            throw new Error('Obra social debe ser especificada');
        }
        if(!email){
            throw new Error('Email debe ser especificado');
        }

        this.id = id;
        this.fullName = fullName;
        this.identityCard = identityCard;
        this.healthSystem = healthSystem;
        this.email = email;
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
    getEmail(): string{
        return this.email;
    }
}