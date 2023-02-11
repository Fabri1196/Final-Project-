export class CreateSaleCommand{
    private readonly customer: string;
    private readonly medicines: string;
    private readonly numberMedicine: number[];
    private readonly date: Date;

    constructor( customer: string, medicines: string, numberMedicine: number[], date: Date)
    {
        this.customer = customer;
        this.medicines = medicines;
        this.numberMedicine = numberMedicine;
        this.date = date;
    }

    getCustomer(): string{
        return this.customer;
    }
    getMedicines(): string{
        return this.medicines;
    }
    getNumberMedicine(): number[]{
        return this.numberMedicine;
    }
    getDate(): Date{
        return this.date;
    }
    // toPrimitives() {
    //     return {
    //         customer: this.customer,
    //         medicines: this.medicines,
    //         numberMedicine: this.numberMedicine,
    //         price: this.price,
    //         date: this.date
    //     };
    // }
}