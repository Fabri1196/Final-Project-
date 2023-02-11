import customerRepository from "../../../infrastructure/repositories/customer.repository";
import { CreateSaleCommand } from "../../commands/sale/create.command.sale";
import saleRepository from "../../../infrastructure/repositories/sale.repository";
import { Sale } from "../../../domain/entities/sale.entity";
import medicineRepository from "../../../infrastructure/repositories/medicine.repository";
import { Medicine } from "../../../domain/entities/medicine.entity";

class CreateSaleHandler{
    async execute(command: CreateSaleCommand){
        const customer = await customerRepository.findByName(command.getCustomer());
        if(!customer){
            throw new Error("Customer does not exist")
        }
        
        const medicines = command.getMedicines();
        const medicinefromDb: Medicine[] = [];
        for (let i = 0; i < medicines.length; i++) {
            const medicine = await medicineRepository.findByName(medicines[i])
            if(!medicine) {
                throw new Error("Medicine does not exist");
            }
            else {
                medicinefromDb.push(medicine);
            }
        }

        const sale = Sale.create(customer, medicinefromDb, command.getNumberMedicine(), command.getDate());

        await saleRepository.save(sale);
        
        return sale;
    }
}

export default new CreateSaleHandler();