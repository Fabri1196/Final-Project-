import saleMemoryRepository from "../../../infrastructure/repositories/memory/sale.memory.repository";
import { DeleteSaleCommand } from "../../commands/sale/delete.command.sale";

class DeleteSaleHandler {
    async execute(command: DeleteSaleCommand){
        const sale = saleMemoryRepository.findByCustomerAndDate(command.getCustomer(), command.getDate());

        if(!sale){
            throw new Error('Sale nit found');
        }

        await saleMemoryRepository.deleteById(command.getCustomer(), command.getDate());
    }
}

export default new DeleteSaleHandler();