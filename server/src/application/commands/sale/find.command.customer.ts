export class FindSaleCommand{
    private readonly customer: string;
    private readonly date: Date;

    constructor(customer: string, date: Date){
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