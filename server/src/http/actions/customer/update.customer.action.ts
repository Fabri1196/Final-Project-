import { Request, Response } from 'express';
import { UpdateCustomerCommand } from '../../../application/commands/customer/update.customer.command';
import updateCustomerHandler from '../../../application/handlers/customer/update.customer.handler';

class UpdateCustomerAction {
    async run(req: Request, res: Response){
        try {
            const command = new UpdateCustomerCommand(
                req.body.id,
                req.body.fullName,
                req.body.identityCard,
                req.body.healthSystem,
                req.body.email,
            );

            try{
                await updateCustomerHandler.execute(command);
            } catch(error){
                const{message} = error as Error;
                return res.status(400).json({message: message});
            }

            return res.status(200).json({message: 'Customer updated successfully'});
        } catch(error){
            const{message} = error as Error;
            res.status(400).json({message: message});
        }
    }
}

export default new UpdateCustomerAction();