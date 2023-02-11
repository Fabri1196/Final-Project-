import saleRepository from "../../../infrastructure/repositories/sale.repository";
import { DeleteSaleCommand } from "../../commands/sale/delete.command.sale";

class DeleteSaleHandler {
    async execute(command: DeleteSaleCommand){
        const sale = saleRepository.findByCustomerAndDate(command.getCustomer(), command.getDate());

        if(!sale){
            throw new Error('Sale nit found');
        }

        await saleRepository.deleteById(command.getCustomer(), command.getDate());
    }
}

export default new DeleteSaleHandler();