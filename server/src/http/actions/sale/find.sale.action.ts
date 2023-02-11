import { Request, Response } from "express";
import { FindSaleCommand } from "../../../application/commands/sale/find.command.customer";
import findSaleHandler from "../../../application/handlers/sale/find.sale.handler";

class FindSaleAction {
    async run(req: Request, res: Response) {
        const {customer, date} = req.body;

        // if(customer == ''){
        //     res.status(200).send({message: 'Customer is required'});
        //     return;
        // }

        // if(medicine == ''){
        //     res.status(200).send({message: 'Medicine is required'});
        //     return;
        // }

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