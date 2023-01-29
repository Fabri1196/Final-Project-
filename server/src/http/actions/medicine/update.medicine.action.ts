import { Request, Response } from 'express';
import { UpdateMedicineCommand } from '../../../application/commands/medicine/update.medicine.command';
import updateMedicineHandler from '../../../application/handlers/medicine/update.medicine.handler';

class UpdateMedicineAction{
    async run(req: Request, res: Response){
        try{
            const command = new UpdateMedicineCommand(
                req.body.id,
                req.body.name,
                req.body.price
            );
            
            try{
                await updateMedicineHandler.execute(command);
            }
            catch(error){
                const {message} = error as Error;
                res.status(404).json({message: message});
            }
            return res.status(200).json({message: 'Medication updated succesfully'})
        }
        catch(error){
            const {message} = error as Error;
            res.status(500).json({message: message});
        }
    }

}

export default new UpdateMedicineAction();
