import { Request, Response } from "express";
import { FindSaleCommand } from "../../../application/commands/sale/find.command.customer";
import findSaleHandler from "../../../application/handlers/sale/find.sale.handler";

class FindSaleAction {
    async run(req: Request, res: Response) {
        const name: string = req?.query?.name as string;
        const date: string = req?.query?.date as string;

        const day: Date = new Date(date);
        const command = new FindSaleCommand(name, day);

        try{
            const sale = await findSaleHandler.execute(command);

            if(!sale) {
                return res.status(404).json({ message: 'Sale not found'});
            }
            return res.status(200).json({
                ...sale
            });
        }
        catch (error){
            const { message } = error as Error;
            return res.status(500).json({ message: message });
        }
    }
}

export default new FindSaleAction();