import { Sale } from "../../domain/entities/sale.entity";

class SaleRepository{
    private sales: Sale[];
    
    constructor(){
        this.sales = [];
    }

    async save(sale: Sale): Promise<void>{
        this.sales.push(sale);
    }

    findByNameAndMedicine(name: string, date: Date): Sale | null {
        const sale = this.sales.find(
            ((a: { customers: { getName: () => string } }) => a.customers.getName() == name) &&
             (a => a.getDate() == date),
        );
        return sale ? sale : null;
    }

    async deleteById(name: string, date: Date): Promise<void> {
        this.sales = this.sales.filter(
            ((a: { customers: { getName: () => string } }) => a.customers.getName() == name) &&
             (a => a.getDate() == date));
    }
}

export default new SaleRepository();