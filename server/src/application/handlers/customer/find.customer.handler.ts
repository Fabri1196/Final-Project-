import { FindByIdentityCardCommand } from "../../commands/customer/findByIdentityCard.customer.command";
//import customerMemoryRepository from "../../../infrastructure/repositories/memory/customer.memory.repository";
import { validateIdentityCard } from "../../../validations/customer.validation";
import customerMongodbRepository from "../../../infrastructure/repositories/mongodb/customer.mongodb.repository";

class FindByIdentityCardCustomerHandler {
    async execute(command: FindByIdentityCardCommand){
        if(!validateIdentityCard(command.getIdentityCard())){
            throw new Error('Número de documento no válido')
        }

        const customer = await customerMongodbRepository.findByIdentityCard(command.getIdentityCard());

        if(!customer){
            throw new Error('Cliente no encontrado');
        }
        return customer;
    }
}
export default new FindByIdentityCardCustomerHandler();