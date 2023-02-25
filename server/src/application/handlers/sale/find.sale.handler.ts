// import saleMemoryRepository from "../../../infrastructure/repositories/memory/sale.memory.repository";
import { FindSaleCommand } from "../../commands/sale/find.command.customer";
import saleMongodbRepository from "../../../infrastructure/repositories/mongodb/sale.mongodb.repository";

class findSaleHandler{
    async execute(command: FindSaleCommand) {
        const sale = await saleMongodbRepository.findByCustomerAndDate(command.getCustomer(), command.getDate());
        
        if(!sale) {
            throw new Error('Sale nott found');
        }
        return sale;
    }
}
export default new findSaleHandler();