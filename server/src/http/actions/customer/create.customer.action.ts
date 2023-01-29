import { Request, Response} from 'express';
import { CreateCustomerCommand } from '../../../application/commands/customer/create.customer.command';
import createCustomerHandler from '../../../application/handlers/customer/create.customer.handler';

class CreateCustomerAction {
    async run(req: Request, res: Response) {
        const { fullName, identityCard, healthSystem } = req.body;

        try {
            const command = new CreateCustomerCommand(fullName, identityCard, healthSystem);
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