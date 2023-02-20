import customerMemoryRepository from "../../../infrastructure/repositories/memory/customer.memory.repository";
import { CreateSaleCommand } from "../../commands/sale/create.command.sale";
import saleMemoryRepository from "../../../infrastructure/repositories/memory/sale.memory.repository";
import { Sale } from "../../../domain/entities/sale.entity";
import medicineMemoryRepository from "../../../infrastructure/repositories/memory/medicine.memory.repository";
import { Medicine } from "../../../domain/entities/medicine.entity";

class CreateSaleHandler{
    async execute(command: CreateSaleCommand){
        const numberMedicine = command.getNumberMedicine();
        for(let i = 0; i < numberMedicine.length; i++){
            if(numberMedicine[i] <= 0){
                throw new Error('Number of Medicine must be greater than 0');
            }
        }
        
        const customer = await customerMemoryRepository.findByName(command.getCustomer());
        if(!customer){
            throw new Error("Customer does not exist")
        }
        
        const medicines = command.getMedicines();
        const medicineDb: Medicine[] = [];
        for (let i = 0; i < medicines.length; i++) {
            const medicine = await medicineMemoryRepository.findByName(medicines[i])
            if(!medicine) {
                throw new Error("Medicine does not exist");
            }
            else {
                medicineDb.push(medicine);
            }
        }

        const sale = Sale.create(customer, medicineDb, numberMedicine, command.getDate());

        await saleMemoryRepository.save(sale);
        
        return sale;
    }
}

export default new CreateSaleHandler();