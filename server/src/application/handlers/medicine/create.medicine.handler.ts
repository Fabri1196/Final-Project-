import { CreateMedicineCommand } from "../../commands/medicine/create.medicine.command";
import { Medicine } from "../../../domain/entities/medicine.entity";
import medicineRepository from "../../../infrastructure/repositories/medicine.repository";
import { validateName } from "../../../validations/medicine.validate";

class CreateMedicineHandler{
    async execute(command: CreateMedicineCommand){
        const medicine = Medicine.create(command.getName(), command.getPrice());

        if(!validateName(medicine.getName())){
            throw new Error('Invalid name')
        }

        if(await medicineRepository.findByName(medicine.getName())){
            throw new Error('Medicine already exist');
        }

        await medicineRepository.save(medicine);
    }
}

export default new CreateMedicineHandler();