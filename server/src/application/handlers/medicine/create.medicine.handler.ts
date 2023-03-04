import { CreateMedicineCommand } from "../../commands/medicine/create.medicine.command";
import { Medicine } from "../../../domain/entities/medicine.entity";
// import medicineMemoryRepository from "../../../infrastructure/repositories/memory/medicine.memory.repository";
import medicineMongodbRepository from "../../../infrastructure/repositories/mongodb/medicine.mongodb.repository";

class CreateMedicineHandler{
    async execute(command: CreateMedicineCommand){
        const medicine = Medicine.create(command.getName(), command.getPrice());

        if(await medicineMongodbRepository.findByName(medicine.getName())){
            throw new Error('Medicamento ya existe');
        }

        if (command.getPrice() < 0) {
            throw new Error('Precio no válido');
        }

        await medicineMongodbRepository.save(medicine);
    }
}

export default new CreateMedicineHandler();