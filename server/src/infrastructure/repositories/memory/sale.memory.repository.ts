import { Sale } from "../../../domain/entities/sale.entity";

class SaleRepository{
    private sales: Sale[];
    
    constructor(){
        this.sales = [];
    }

    async save(sale: Sale): Promise<void>{
        const saveSale = this.sales.find(m => m.getId() === sale.getId());

        if(saveSale){
            this.sales.splice(this.sales.indexOf(sale, 1));
        }

        this.sales.push(sale);
    }

    async findById(id: string): Promise<Sale | null>{
        const sale = this.sales.find(m => m.getId() === id);
        return sale ? sale: null;
    }

    async findByCustomerAndDate(customer: string, date: Date): Promise<Sale[] | null> {
        let sale = this.sales.filter(
            s => s.getCustomer().getFullName() == customer &&
             s.getDate() >= date
        );
        return sale ? sale : null;
    }

    async deleteByCustomerAndDate(customer: string, date: Date): Promise<void> {
        this.sales = this.sales.filter(
            ((a: { customers: { getName: () => string } }) => a.customers.getName() !== customer) &&
             (a => a.getDate() > date));
    }
}

export default new SaleRepository();