import { Customer } from "./customer.entity";
import { Medicine } from "./medicine.entity";
import { v4 } from "uuid";

export class Sale{
    private id: string;
    private customer: Customer;
    private medicines: Medicine[];
    private numberMedicine: number [];
    private price: number;
    private date: Date;

    constructor(
        id: string,
        customer: Customer,
        medicines: Medicine[],
        numberMedicine: number [],
        price: number,
        date: Date)
    {
        this.id = id;
        this.customer = customer;
        this.medicines = medicines;
        this.numberMedicine = numberMedicine;
        this.price = price;
        this.date = date;
    }

    public static create(
        customer: Customer,
        medicines: Medicine[],
        numberMedicine: number [],
        price: number,
        date: Date) 
        : Sale{
        const id = v4();
        const sale = new Sale(id, customer, medicines, numberMedicine, price, date);

        return sale;
    }

    static fromPrimitive(primitives: any) : Sale{
        const sale = new Sale(
            primitives.id,
            primitives.customer,
            primitives.medicine,
            primitives.numberMedicine,
            primitives.price,
            primitives.date);

        return sale;
    }

    changeCustomer(customer: Customer): void{
        this.customer = customer;
    }
    changeMedicine(medicines: Medicine[]): void{
        this.medicines = medicines
    }
    changePrice(price: number): void{
        this.price = price;
    }
    changeDate(date: Date): void{
        this.date = date;
    }
    getId(): string{
        return this.id;
    }
    getCustomer(): Customer{
        return this.customer;
    }
    getMedicines(): Medicine[]{
        return this.medicines;
    }
    getPrice(){
        let price = 0;
        for (let i = 0; i < this.medicines.length; i++){
            price = this.medicines[i].getPrice() * this.numberMedicine[i]
        }

        this.price = price;
        return this.price;
    }
    getDate(): Date{
        return this.date;
    }
}