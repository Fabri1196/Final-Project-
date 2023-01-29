export class CreateSaleCommand{
    private readonly customer: string;
    private readonly medicines: string[];
    private readonly numberMedicine: number[];
    private readonly price: number;
    private readonly date: Date;

    constructor(
        customer: string,
        medicines: string[],
        numberMedicine: number[],
        price: number,
        date: Date)
    {
        this.customer = customer;
        this.medicines = medicines;
        this.numberMedicine = numberMedicine;
        this.price = price;
        this.date = date;
    }

    getCustomer(): string{
        return this.customer;
    }
    getMedicines(): string[]{
        return this.medicines;
    }
    getNumberMedicine(): number []{
        return this.numberMedicine;
    }
    getPrice(): number{
        return this.price;
    }
    getDate(): Date{
        return this.date;
    }
}