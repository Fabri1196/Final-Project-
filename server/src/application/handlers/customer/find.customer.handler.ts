import { FindByIdentityCardCommand } from "../../commands/customer/findByIdentityCard.customer.command";
import customerRepository from "../../../infrastructure/repositories/customer.repository";
import { validateIdentityCard } from "../../../validations/customer.validation";

class FindByIdentityCardCustomerHandler {
    async execute(command: FindByIdentityCardCommand){
        if(!validateIdentityCard(command.getIdentityCard())){
            throw new Error('Invalid identity card')
        }

        const customer = await customerRepository.findByIdentityCard(command.getIdentityCard());

        if(!customer){
            throw new Error('Customer not found');
        }
        return customer;
    }
}
export default new FindByIdentityCardCustomerHandler();