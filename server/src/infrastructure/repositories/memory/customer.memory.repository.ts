import { Customer } from "../../../domain/entities/customer.entity";

class CustomerRepository {
    private customers: Customer[];
    constructor() {
        this.customers = [];
    }

    async save (customer: Customer): Promise<void> {
        const saveCustomer = this.customers.find(c => c.getId() === customer.getId());

        if(saveCustomer){
            this.customers.splice(this.customers.indexOf(saveCustomer), 1)
        }
        this.customers.push(customer);
    }

    async findByIdentityCard(identityCard: string): Promise<Customer | null> {
        const customer = this.customers.find(c => c.getIdentityCard() === identityCard);
        return customer ? customer: null;
    }

    async getAllCustomers(): Promise<Customer[]> {
        return this.customers;
    }

    async findById(id: string): Promise<Customer | null> {
        const customer = this.customers.find(c => c.getId() === id);
        return customer ? customer: null;
    }

    async findByName(fullName: string): Promise<Customer | null>{
        const customer = this.customers.find(m => m.getFullName() === fullName);
        return customer ? customer: null;
    }
}

export default new CustomerRepository();