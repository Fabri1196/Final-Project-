import createSaleHandler from "../../../../application/handlers/sale/create.sale.handler";
import { CreateSaleCommand } from "../../../../application/commands/sale/create.command.sale";

describe('Create Sale', () => {
    it('should throw an error if number of medicine is negative', async () => {
        const command = new CreateSaleCommand('Pepito perez', ['Actron'], [-3], new Date('07/02/23'));
        await expect(createSaleHandler.execute(command)).rejects.toStrictEqual(
            new Error('Número de medicamento debe ser mayor a 0'))
    });
});