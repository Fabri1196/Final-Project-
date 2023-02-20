import medicineMemoryRepository from "../../../infrastructure/repositories/memory/medicine.memory.repository";
import { FindByNameCommand } from "../../commands/medicine/findByName.medicine.command";

class FindByNameHandler{
    async execute(command: FindByNameCommand){
        const medicine = await medicineMemoryRepository.findByName(command.getName());

        if(!medicine){
            throw new Error('Medicine not found');
        }
        return medicine;
    }
}

export default new FindByNameHandler();