import { UpdateMedicineCommand } from "../../commands/medicine/update.medicine.command";
// import medicineMemoryRepository from "../../../infrastructure/repositories/memory/medicine.memory.repository";
import medicineMongodbRepository from "../../../infrastructure/repositories/mongodb/medicine.mongodb.repository";

class UpdateMedicineHandler{
    async execute(command: UpdateMedicineCommand){
        const medicine = await medicineMongodbRepository.findById(command.getId());

        if(!medicine){
            throw new Error('Medicamento no encontrado');
        }

        medicine.changeName(command.getName());
        medicine.changePrice(command.getPrice());

        await medicineMongodbRepository.save(medicine);
    }
}

export default new UpdateMedicineHandler();