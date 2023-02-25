import { Customer } from "../../../domain/entities/customer.entity"; 
import { CreateCustomerCommand } from "../../commands/customer/create.customer.command";
//import customerMemoryRepository from "../../../infrastructure/repositories/memory/customer.memory.repository";
import { validateEmail, validateFullName, validateIdentityCard } from "../../../validations/customer.validation";
import customerMongodbRepository from "../../../infrastructure/repositories/mongodb/customer.mongodb.repository";

class CreateCustomerHandler{
    async execute(command: CreateCustomerCommand){
        const customer = Customer.create(command.getFullName(), command.getIdentityCard(), command.getHealthSystem(), command.getEmai());

        if(!validateFullName(customer.getFullName())){
            throw new Error("Invalid fullname");
        }

        if(!validateIdentityCard(customer.getIdentityCard())){
            throw new Error("Invalid identity card");
        }
        if(customer.getEmail()){
            if(!validateEmail(customer.getEmail())){
                throw new Error("Invalid email");
            }
        }

        if(await customerMongodbRepository.findByIdentityCard(customer.getIdentityCard())){
            throw new Error('Customer already exists');
        }

        if(await customerMongodbRepository.findByName(customer.getFullName())){
            throw new Error('Customer already exists');
        }


        await customerMongodbRepository.save(customer);
    }
}

export default new CreateCustomerHandler();