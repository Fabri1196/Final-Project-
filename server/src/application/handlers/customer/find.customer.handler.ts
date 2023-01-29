import { FindByIdentityCardCommand } from "../../commands/customer/findByIdentityCard.customer.command";
import customerRepository from "../../../infrastructure/repositories/customer.repository";

class FindByIdentityCardCustomerHandler {
    async execute(command: FindByIdentityCardCommand){

        const customer = await customerRepository.findByIdentityCard(command.getIdentityCard());

        if(!customer){
            throw new Error('Customer not found');
        }
        return customer;
    }
}
export default new FindByIdentityCardCustomerHandler();