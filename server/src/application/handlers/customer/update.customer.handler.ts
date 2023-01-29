import { UpdateCustomerCommand } from "../../commands/customer/update.customer.command";
import customerRepository from "../../../infrastructure/repositories/customer.repository";

class UpdateCustomerHandler {
    async execute(command: UpdateCustomerCommand) {
        const customer = await customerRepository.findById(command.getId());

        if(!customer){
            throw new Error('Customer not found')
        }
        customer.changeFullName(command.getFullName());
        customer.changeIdentityCard(command.getIdentityCard());
        customer.changeHealthSystem(command.getHealthSystem());
        await customerRepository.save(customer);
    }
}

export default new UpdateCustomerHandler();