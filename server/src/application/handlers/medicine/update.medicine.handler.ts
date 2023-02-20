import { UpdateMedicineCommand } from "../../commands/medicine/update.medicine.command";
import medicineMemoryRepository from "../../../infrastructure/repositories/memory/medicine.memory.repository";

class UpdateMedicineHandler{
    async execute(command: UpdateMedicineCommand){
        const medicine = await medicineMemoryRepository.findById(command.getId());

        if(!medicine){
            throw new Error('Medicine not found');
        }

        medicine.changeName(command.getName());
        medicine.changePrice(command.getPrice());

        await medicineMemoryRepository.save(medicine);
    }
}

export default new UpdateMedicineHandler();