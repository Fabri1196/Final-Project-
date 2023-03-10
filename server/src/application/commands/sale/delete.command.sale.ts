export class DeleteSaleCommand{
    private readonly customer: string;
    private readonly date: Date;

    constructor(
        customer: string,
        date: Date
    ){
        if(!customer){
            throw new Error("Cliente es requerido");
        }
        if(!date){
            throw new Error("Fecha es requerida");
        }
        this.customer = customer;
        this.date = date;
    }

    getCustomer(): string{
        return this.customer;
    }
    getDate(): Date{
        return this.date
    }
}