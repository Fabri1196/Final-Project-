import { CreateSaleCommand } from "../../../application/commands/sale/create.command.sale";
import { Request, Response } from "express";
import CreateSaleHandler from "../../../application/handlers/sale/create.sale.handler";

class CreateSaleAction{
    async run(req: Request, res: Response){
        const { customer, medicines, numberMedicine, date } = req.body;

        try{
            const command = new CreateSaleCommand(customer, medicines, numberMedicine, date);
            const sale = await CreateSaleHandler.execute(command);
            return res.status(200).json({message: 'Sale created successfully. Total: $' + sale.getPrice()});

        }
        catch(error){
            const message = error as Error;
            res.status(400).json({message: "message"});
        }
    }
}

export default new CreateSaleAction();