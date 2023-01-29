export class DeleteSaleCommand{
    private readonly customer: string;
    private readonly date: Date;

    constructor(
        customer: string,
        date: Date
    ){
        if(!customer){
            throw new Error("Customer is required");
        }
        if(!date){
            throw new Error("Date is required");
        }
        this.customer = customer;
        this.date = date;
    }

    getName(): string{
        return this.customer;
    }
    getDate(): Date{
        return this.date
    }
}