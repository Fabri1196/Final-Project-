import { Application } from 'express';
import CommonRoutes from './common.routes';
import createCustomerAction from '../actions/customer/create.customer.action';
import updateCustomerAction from '../actions/customer/update.customer.action';
import listCustomerAction from '../actions/customer/list.customer.action';

class CustomerRoutes extends CommonRoutes {
    constructor(app: Application) {
        super(app, 'Customer');
    }
    setUpRoutes(): Application {
        this.app.get('/customer/:identityCard', listCustomerAction.run);

        this.app.post('/customer', createCustomerAction.run);

        this.app.put('/customer/:id', updateCustomerAction.run);

        return this.app;
    }
}

export default CustomerRoutes;