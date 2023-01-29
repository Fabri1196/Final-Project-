import saleRepository from "../../../infrastructure/repositories/sale.repository";
import { FindSaleCommand } from "../../commands/sale/find.command.customer";

class findSaleHandler{
    async execute(command: FindSaleCommand) {
        const sale = await saleRepository.findByNameAndMedicine(command.getCustomer(), command.getDate());
        if(!sale) {
            throw new Error('Sale not found');
        }
        return sale;
    }
}
export default new findSaleHandler;