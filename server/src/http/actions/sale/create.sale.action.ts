import { CreateSaleCommand } from "../../../application/commands/sale/create.command.sale";
import { Request, Response } from "express";
import CreateSaleHandler from "../../../application/handlers/sale/create.sale.handler";

class CreateSaleAction{
    async run(req: Request, res: Response){
        const { customer, medicines, numberMedicines, price, date } = req.body;

        try{
            const command = new CreateSaleCommand(customer, medicines, numberMedicines, price, date);
            await CreateSaleHandler.execute(command);
        }
        catch(error){
            const message = error as Error;
            res.status(400).json({message: message});
        }
    }
}

export default new CreateSaleAction();