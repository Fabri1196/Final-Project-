import { Application } from 'express';
import CommonRoutes from './common.routes';
import createSaleAction from '../actions/sale/create.sale.action';
import findSaleAction from '../actions/sale/find.sale.action';
import deleteSaleAction from '../actions/sale/delete.sale.action';

class SaleRoutes extends CommonRoutes {
    constructor(app: Application) {
        super(app, 'Sale');
    }
    setUpRoutes(): Application {
        this.app.get('/sale', findSaleAction.run);

        this.app.post('/sale', createSaleAction.run);

        this.app.delete('/sale', deleteSaleAction.run);

        return this.app;
    }
}

export default SaleRoutes;