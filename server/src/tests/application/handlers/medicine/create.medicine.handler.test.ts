import { Medicine } from "../../../../domain/entities/medicine.entity";
import medicineMemoryRepository from "../../../../infrastructure/repositories/memory/medicine.memory.repository";
import createMedicineHandler from "../../../../application/handlers/medicine/create.medicine.handler";
import { CreateMedicineCommand } from "../../../../application/commands/medicine/create.medicine.command";

describe('Create Medicine', () => {
    it('should create a medicine', async () => {
        const medicineMock = Medicine.create('Actron', 670);
        medicineMemoryRepository.save = jest.fn().mockResolvedValueOnce(medicineMock);
        medicineMemoryRepository.findByName = jest.fn().mockResolvedValueOnce(null);
        await createMedicineHandler.execute(new CreateMedicineCommand('Actron', 670));
        expect(medicineMemoryRepository.save).toBeCalled();
    });

    it('should throw an error if price is negative', async () =>{
        const command = new CreateMedicineCommand('Actron', -670);
        await expect(createMedicineHandler.execute(command)).rejects.toStrictEqual(
            new Error('Invalid Price'));
    })
})