// import medicineMemoryRepository from "../../../infrastructure/repositories/memory/medicine.memory.repository";
import { FindByNameCommand } from "../../commands/medicine/findByName.medicine.command";
import medicineMongodbRepository from "../../../infrastructure/repositories/mongodb/medicine.mongodb.repository";

class FindByNameHandler{
    async execute(command: FindByNameCommand){
        const medicine = await medicineMongodbRepository.findByName(command.getName());

        if(!medicine){
            throw new Error('Medicamento no encontrado');
        }
        return medicine;
    }
}

export default new FindByNameHandler();