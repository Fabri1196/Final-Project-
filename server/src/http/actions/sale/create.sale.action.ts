import { CreateSaleCommand } from "../../../application/commands/sale/create.command.sale";
import { Request, Response } from "express";
import CreateSaleHandler from "../../../application/handlers/sale/create.sale.handler";
import Joi from "joi";

class CreateSaleAction{
    async run(req: Request, res: Response){
        const { customer, medicines, numberMedicine, date } = req.body;

        const control = Joi.object({
            customer: Joi.string().min(3).max(30).required(),

            medicines: Joi.array().items(Joi.string().min(2).max(30)).required(),

            numberMedicine: Joi.array().items(Joi.number().min(1).max(10000000)).required(),
            
            date: Joi.date().required(),
        });

        const {error} = control.validate({customer, medicines, numberMedicine, date});

        if(error){
            return res.status(400).json({message: error.message})
        }

        if(medicines.length != numberMedicine.length){
           return res.status(400).json({message: 'Amount of medicines and numberMedicine are not the same'}) 
        }

        try{
            const command = new CreateSaleCommand(customer, medicines, numberMedicine, date);
            const sale = await CreateSaleHandler.execute(command);
            return res.status(200).json({message: 'Sale created successfully. Total: $' + sale.getPrice()});

        }
        catch(e){
            const {message} = e as Error;
            res.status(400).json({message: message});
        }
    }
}

export default new CreateSaleAction();