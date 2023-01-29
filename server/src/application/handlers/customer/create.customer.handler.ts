import { Customer } from "../../../domain/entities/customer.entity"; 
import { CreateCustomerCommand } from "../../commands/customer/create.customer.command";
import CustomerRepository from "../../../infrastructure/repositories/customer.repository";

class CreateCustomerHandler{
    async execute(command: CreateCustomerCommand){
        const customer = Customer.create(command.getFullName(), command.getIdentityCard(), command.getHealthSystem());

        if(await CustomerRepository.findByIdentityCard(customer.getIdentityCard())){
            throw new Error('Customer already exists');
        }

        await CustomerRepository.save(customer);
    }
}

export default new CreateCustomerHandler();