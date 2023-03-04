import { Request, Response } from 'express';
import Joi from 'joi';
import { CreateMedicineCommand } from '../../../application/commands/medicine/create.medicine.command';
import createMedicineHandler from '../../../application/handlers/medicine/create.medicine.handler';

class CreateMedicineAction {
    async run(req: Request, res: Response) {
        const { name, price } = req.body;

        const control = Joi.object({
            name: Joi.string().min(2).max(30).required(),
            
            price: Joi.number().min(1).max(10000000).required(),
        })

        const {error} = control.validate({name, price});

        if(error){
            return res.status(400).json({message : error.message});
        }

        try{
            const command = new CreateMedicineCommand(name, price);
            await createMedicineHandler.execute(command);

            return res.status(201).json({message: 'Medicamento creado exitosamente'});
        }catch(error){
            const {message} = error as Error;
            res.status(404).json({message: message});
        }
    }
}

export default new CreateMedicineAction();