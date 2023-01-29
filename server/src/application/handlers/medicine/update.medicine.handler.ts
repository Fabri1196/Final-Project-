import { UpdateMedicineCommand } from "../../commands/medicine/update.medicine.command";
import medicineRepository from "../../../infrastructure/repositories/medicine.repository";

class UpdateMedicineHandler{
    async execute(command: UpdateMedicineCommand){
        const medicine = await medicineRepository.findById(command.getId());

        if(!medicine){
            throw new Error('Medicine not found');
        }

        medicine.changeName(command.getName());
        medicine.changePrice(command.getPrice());

        await medicineRepository.save(medicine);
    }
}

export default new UpdateMedicineHandler();