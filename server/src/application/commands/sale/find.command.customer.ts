export class FindSaleCommand{
    private readonly customer: string;
    private readonly date: Date;

    constructor(customer: string, date: Date){
        if(!customer || !date){
            throw new Error("Customer and Date are required")
        }
        
        this.customer = customer;
        this.date = date;
    }
    getCustomer(): string{
        return this.customer;
    }
    getDate(): Date{
        return this.date;
    }
}