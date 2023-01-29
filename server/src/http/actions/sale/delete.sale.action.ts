import { Request, Response } from "express";
import { DeleteSaleCommand } from "../../../application/commands/sale/delete.command.sale";
import deleteSaleHandler from "../../../application/handlers/sale/delete.sale.handler";

class DelecteSaleAction{
    async run(req: Request, res: Response){
        const { name, date } = req.body;

        try{
            const command = new DeleteSaleCommand(name, date)

            try{
                await deleteSaleHandler.execute(command);
            }
            catch(error){
                const message = error as Error;
                return res.status(404).json({message: message});
            }
            return res.status(204).send();
        } catch(error){
            const message = error as Error;
            return res.status(400).json({message: message});
        }
    } 
}

export default new DelecteSaleAction();