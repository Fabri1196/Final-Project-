import { Customer } from "../../../domain/entities/customer.entity"; 
import { CreateCustomerCommand } from "../../commands/customer/create.customer.command";
//import customerMemoryRepository from "../../../infrastructure/repositories/memory/customer.memory.repository";
import { validateEmail, validateFullName, validateIdentityCard } from "../../../validations/customer.validation";
import customerMongodbRepository from "../../../infrastructure/repositories/mongodb/customer.mongodb.repository";

class CreateCustomerHandler{
    async execute(command: CreateCustomerCommand){
        const customer = Customer.create(command.getFullName(), command.getIdentityCard(), command.getHealthSystem(), command.getEmai());

        if(!validateFullName(customer.getFullName())){
            throw new Error("Nombre no válido");
        }

        if(!validateIdentityCard(customer.getIdentityCard())){
            throw new Error("Número de documento no válido");
        }
        if(customer.getEmail()){
            if(!validateEmail(customer.getEmail())){
                throw new Error("Email no válido");
            }
        }

        if(await customerMongodbRepository.findByIdentityCard(customer.getIdentityCard())){
            throw new Error('Ya existe el cliente');
        }

        if(await customerMongodbRepository.findByName(customer.getFullName())){
            throw new Error('Ya existe el cliente');
        }


        await customerMongodbRepository.save(customer);
    }
}

export default new CreateCustomerHandler();