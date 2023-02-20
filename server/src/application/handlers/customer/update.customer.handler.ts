import { UpdateCustomerCommand } from "../../commands/customer/update.customer.command";
import customerMemoryRepository from "../../../infrastructure/repositories/memory/customer.memory.repository";

class UpdateCustomerHandler {
    async execute(command: UpdateCustomerCommand) {
        const customer = await customerMemoryRepository.findById(command.getId());

        if(!customer){
            throw new Error('Customer not found')
        }
        customer.changeFullName(command.getFullName());
        customer.changeIdentityCard(command.getIdentityCard());
        customer.changeHealthSystem(command.getHealthSystem());
        await customerMemoryRepository.save(customer);
    }
}

export default new UpdateCustomerHandler();