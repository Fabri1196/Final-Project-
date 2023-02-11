import saleRepository from "../../../infrastructure/repositories/sale.repository";
import { FindSaleCommand } from "../../commands/sale/find.command.customer";

class findSaleHandler{
    async execute(command: FindSaleCommand) {
        const sale = await saleRepository.findByCustomerAndDate(command.getCustomer(), command.getDate());
        
        if(!sale) {
            throw new Error('Sale nott found');
        }
        return sale;
    }
}
export default new findSaleHandler();