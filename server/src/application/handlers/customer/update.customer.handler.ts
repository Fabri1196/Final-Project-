import { UpdateCustomerCommand } from "../../commands/customer/update.customer.command";
//import customerMemoryRepository from "../../../infrastructure/repositories/memory/customer.memory.repository";
import customerMongodbRepository from "../../../infrastructure/repositories/mongodb/customer.mongodb.repository";

class UpdateCustomerHandler {
    async execute(command: UpdateCustomerCommand) {
        const customer = await customerMongodbRepository.findById(command.getId());

        if(!customer){
            throw new Error('Cliente no encontrado')
        }
        customer.changeFullName(command.getFullName());
        customer.changeIdentityCard(command.getIdentityCard());
        customer.changeHealthSystem(command.getHealthSystem());
        customer.changeEmail(command.getEmail());
        await customerMongodbRepository.save(customer);
    }
}

export default new UpdateCustomerHandler();