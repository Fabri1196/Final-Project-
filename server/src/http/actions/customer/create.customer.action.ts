import { Request, Response} from 'express';
import Joi from 'joi';
import { CreateCustomerCommand } from '../../../application/commands/customer/create.customer.command';
import createCustomerHandler from '../../../application/handlers/customer/create.customer.handler';

class CreateCustomerAction {
    async run(req: Request, res: Response) {
        const { fullName, identityCard, healthSystem, email } = req.body;

        const control = Joi.object({
            fullName: Joi.string().min(3).max(30).required(),

            identityCard: Joi.string().min(7).max(8).required(),
        });

        const {error} = control.validate({fullName, identityCard});

        if(error) {
            return res.status(400).json({message: error.message});
        }

        try {
            const command = new CreateCustomerCommand(fullName, identityCard, healthSystem, email);
            await createCustomerHandler.execute(command);

            return res.status(201).json({ message: 'Customer created successfully' });
        }
        catch (error) {
            const { message } = error as Error;
            res.status(400).json({ message: message });
        }
    }
}

export default new CreateCustomerAction();