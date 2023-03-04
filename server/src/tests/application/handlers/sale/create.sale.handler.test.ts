import createSaleHandler from "../../../../application/handlers/sale/create.sale.handler";
import { CreateSaleCommand } from "../../../../application/commands/sale/create.command.sale";
import { Customer } from "../../../../domain/entities/customer.entity";
import customerMemoryRepository from "../../../../infrastructure/repositories/memory/customer.memory.repository";
import { Medicine } from "../../../../domain/entities/medicine.entity";
import medicineMemoryRepository from "../../../../infrastructure/repositories/memory/medicine.memory.repository";
import { Sale } from "../../../../domain/entities/sale.entity";
import saleMemoryRepository from "../../../../infrastructure/repositories/memory/sale.memory.repository";
import createCustomerHandler from "../../../../application/handlers/customer/create.customer.handler";
import { CreateCustomerCommand } from "../../../../application/commands/customer/create.customer.command";
import createMedicineHandler from "../../../../application/handlers/medicine/create.medicine.handler";
import { CreateMedicineCommand } from "../../../../application/commands/medicine/create.medicine.command";

describe('Create Sale', () => {
    // it('should create a sale', async () => {
    //     const costumerMock = Customer.create('Pepito Perez', '12345678', 'pami', 'pepitoperez@yopmail.com');
    //     customerRepository.save = jest.fn().mockResolvedValueOnce(costumerMock);
    //     customerRepository.findByIdentityCard = jest.fn().mockResolvedValueOnce(null);
    //     customerRepository.findByName = jest.fn().mockResolvedValueOnce(null);
    //     await createCustomerHandler.execute(new CreateCustomerCommand('Pepito perez', '12345678', 'pami', 'pepitoperez@yopmail.com'));
    //     expect(customerRepository.save).toBeCalled();

    //     const medicineMock = Medicine.create('Actron', 670);
    //     medicineRepository.save = jest.fn().mockResolvedValueOnce(medicineMock);
    //     medicineRepository.findByName = jest.fn().mockResolvedValueOnce(null);
    //     await createMedicineHandler.execute(new CreateMedicineCommand('Actron', 670));
    //     expect(medicineRepository.save).toBeCalled();

    //     const saleMock = Sale.create(costumerMock, [medicineMock, medicineMock], [3, 4], new Date('07/02/23'));
    //     // const saleMock = Sale.create(Customer.create('Pepito Perez', '12345678', 'pami', 'pepitoperez@yopmail.com'), 
    //     // [Medicine.create('Actron', 670)], [-3], new Date('07/02/23'));
    //     saleRepository.save = jest.fn().mockRejectedValueOnce(saleMock);
    //     const command = new CreateSaleCommand('Pepito perez', ['Actron', 'Actron'], [3, 4], new Date('07/02/23'));
    //     await createSaleHandler.execute(command);
    //     expect(saleRepository.save).toBeCalled();
    // })

    it('should throw an error if number of medicine is negative', async () => {
        const command = new CreateSaleCommand('Pepito perez', ['Actron'], [-3], new Date('07/02/23'));
        await expect(createSaleHandler.execute(command)).rejects.toStrictEqual(
            new Error('Número de medicamento debe ser mayor a 0'))
    });
});