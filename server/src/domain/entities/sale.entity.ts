import { Customer } from "./customer.entity";
import { Medicine } from "./medicine.entity";
import { v4 } from "uuid";

export class Sale{
    private id: string;
    private customer: Customer;
    private medicines: Medicine[];
    private numberMedicine: number[];
    private date: Date;
    private price: number;

    constructor(
        id: string,
        customer: Customer,
        medicines: Medicine[],
        numberMedicine: number[],
        date: Date,
        price: number)
    {
        this.id = id;
        this.customer = customer;
        this.medicines = medicines;
        this.numberMedicine = numberMedicine;
        this.date = date;
        this.price = price;
    }

    public static create(
        customer: Customer,
        medicines: Medicine[],
        numberMedicine: number[],
        date: Date) 
        {
        const id = v4();
        const price = Sale.calculatePrice(medicines, numberMedicine);
        const sale = new Sale(id, customer, medicines, numberMedicine, date, price);

        return sale;
    }

    static fromPrimitives(primitives: any) : Sale{
        const sale = new Sale(
            primitives.id,
            primitives.customer,
            primitives.medicine,
            primitives.numberMedicine,
            primitives.date,
            primitives.price);

        return sale;
    }

    changeCustomer(customer: Customer): void{
        this.customer = customer;
    }
    changeMedicine(medicines: Medicine[]): void{
        this.medicines = medicines
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
    getNumberMedicine(): number[]{
        return this.numberMedicine;
    }
    getPrice(): number{
        return this.price;
    }
    static calculatePrice(medicines: Medicine[], numberMedicine : number[]): number{
        let price = 0
        for(let i = 0; i < medicines.length; i++)
        {
            price = price + medicines[i].getPrice() * numberMedicine[i];
        }
        return price;
    }
    getName(): string{
        const name = this.customer.getFullName();
        return name;
    }
    getDate(): Date{
        return this.date;
    }
    toPrimitives(): any{
        return{
            id: this.id,
            customer: this.customer.getFullName(),
            medicines: this.medicines,
            numberMedicine: this.numberMedicine,
            date: this.date,
            price: this.price,
        }
    }
}