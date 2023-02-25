//import saleMemoryRepository from "../../../infrastructure/repositories/memory/sale.memory.repository";
import { DeleteSaleCommand } from "../../commands/sale/delete.command.sale";
import saleMongodbRepository from "../../../infrastructure/repositories/mongodb/sale.mongodb.repository";

class DeleteSaleHandler {
    async execute(command: DeleteSaleCommand){
        const sale = saleMongodbRepository.findByCustomerAndDate(command.getCustomer(), command.getDate());

        if(!sale){
            throw new Error('Sale nit found');
        }

        //await saleMongodbRepository.deleteById(command.getCustomer(), command.getDate());
    }
}

export default new DeleteSaleHandler();