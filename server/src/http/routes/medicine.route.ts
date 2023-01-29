import { Application } from 'express';
import CommonRoutes from './common.routes';
import createMedicineAction from '../../http/actions/medicine/create.medicine.action';
import listMedicineAction from '../../http/actions/medicine/list.medicine.action';
import updateMedicineAction from '../actions/medicine/update.medicine.action';

class MedicineRoutes extends CommonRoutes {
    constructor(app: Application){
        super(app, 'Medicine');
    }

    setUpRoutes(): Application {
        this.app.get('/medicine/:name', listMedicineAction.run);

        this.app.post('/medicine', createMedicineAction.run);

        this.app.put('/medicine/:id', updateMedicineAction.run);
        
        return this.app;
    }
}

export default MedicineRoutes;