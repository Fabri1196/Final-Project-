import { Request, Response } from 'express';
import { FindByNameCommand } from '../../../application/commands/medicine/findByName.medicine.command';
import findByNameHandler from '../../../application/handlers/medicine/find.medicine.handler';

class ListMedicineAction {
    async run(req: Request, res: Response){
        const {name} = req.body;

        if(name == ''){
            res.status(200).send({message: 'Name is required'});
            return;
        }

        const command = new FindByNameCommand(name);
        try{
            const medicine = await findByNameHandler.execute(command);
            if(!medicine){
                return res.status(404).json({message: 'Customer not found'});
            }
            return res.status(200).json({
                ...medicine.toPrimitives(),
            });
        }
        catch(error){
            const {message}= error as Error;
            return res.status(500).json({message: message});
        }
    }
}

export default new ListMedicineAction();