import { Request, Response } from 'express';
import { CreateMedicineCommand } from '../../../application/commands/medicine/create.medicine.command';
import createMedicineHandler from '../../../application/handlers/medicine/create.medicine.handler';

class CreateMedicineAction {
    async run(req: Request, res: Response) {
        const { name, price } = req.body;

        try{
            const command = new CreateMedicineCommand(name, price);
            await createMedicineHandler.execute(command);

            return res.status(200).json({message: 'Medicine created successfully'});
        }catch(error){
            const {message} = error as Error;
            res.status(404).json({message: message});
        }
    }
}

export default new CreateMedicineAction();