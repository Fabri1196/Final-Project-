import { Request, Response } from 'express';
import { FindByNameCommand } from '../../../application/commands/medicine/findByName.medicine.command';
import findByNameHandler from '../../../application/handlers/medicine/find.medicine.handler';

class ListMedicineAction {
    async run(req: Request, res: Response){
        const {name} = req.body;

        if(name == ''){
            res.status(400).send({message: 'El nombre es requerido'});
            return;
        }

        const command = new FindByNameCommand(name);
        try{
            const medicine = await findByNameHandler.execute(command);
            if(!medicine){
                return res.status(404).json({message: 'Medicamento no encontrado'});
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