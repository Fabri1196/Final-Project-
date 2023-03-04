import { Request, Response } from 'express';
import { FindByIdentityCardCommand } from '../../../application/commands/customer/findByIdentityCard.customer.command';
import findCustomerHandler from '../../../application/handlers/customer/find.customer.handler';

class ListCustomerAction {
    async run(req: Request, res: Response){
        const { identityCard } = req.body;

        if(identityCard == "" || identityCard == null){
            res.status(400).send({message: 'Número de documento es requerido'});
            return;
        }

        const command = new FindByIdentityCardCommand(identityCard);
        try{
            const customer = await findCustomerHandler.execute(command);
            if(!customer){
                return res.status(404).json({message:'Cliente no encontrado'});
            }
            return res.status(200).json({
                ...customer.toPrimitives(),
            });
        } catch (error){
            const{message} = error as Error;
            return res.status(500).json({message: message})
        }
    }
}

export default new ListCustomerAction();