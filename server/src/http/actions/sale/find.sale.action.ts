import { Request, Response } from "express";
import Joi from "joi";
import { FindSaleCommand } from "../../../application/commands/sale/find.command.customer";
import findSaleHandler from "../../../application/handlers/sale/find.sale.handler";

class FindSaleAction {
    async run(req: Request, res: Response) {
        const {customer, date} = req.body;

        const control = Joi.object({
            customer: Joi.string().min(3).max(30).required(),

            date: Joi.date().required(),
        });

        const {error} = control.validate({customer, date});

        if(error){
            return res.status(400).json({message: error.message});
        }

        const command = new FindSaleCommand(customer, date);
        try{
            const sales = await findSaleHandler.execute(command);

            if(!sales) {
                return res.status(404).json({ message: 'Sale not found'});
            }
            const filteredSales: object[] = sales.map(sale => ({...sale.toPrimitives()}))
            return res.status(200).json(filteredSales);
        }
        catch (error){
            const { message } = error as Error;
            return res.status(500).json({ message: message });
        }
    }
}

export default new FindSaleAction();