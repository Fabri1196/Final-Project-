import { Sale } from "../../../domain/entities/sale.entity"; 
import { mongoClient } from "./configuration.mongodb.repository";
import { Customer } from "../../../domain/entities/customer.entity";

class Repository {
    private database: string = 'Pharmacy';
    private collection: string = 'Sales';
    private collection2: string = 'Customers';

    async save(sale: Sale): Promise<void> {
        try {
            await mongoClient.connect();
            await mongoClient
                .db(this.database)
                .collection(this.collection)
                .updateOne({ id: sale.getId() }, { $set:sale }, { upsert: true });
        }   catch (error) {
            console.log(error);
        }   finally {
            await mongoClient.close();
        }
    }

    async findById(id: string): Promise<Sale | null> {
        try {
            await mongoClient.connect();
            const sale = (await mongoClient
                .db(this.database)
                .collection(this.collection)
                .findOne(
                    {
                        id: id,
                    },
                    { projection: { _id: 0 }},
                ))
                if (sale) {
                    return Sale.fromPrimitives(sale);
                } else {
                    return null;
                }
        } catch (error) {
            const { message } = error as Error;
            throw new Error(message);
        } finally {
            await mongoClient.close();
        }
    }

    async findByCustomerAndDate(customer: string, date: Date): Promise<Sale | null> {
        try {
            await mongoClient.connect();
            const sale = (await mongoClient
                .db(this.database)
                .collection(this.collection)
                .findOne(
                    {
                        date: date,
                        'customer.fullName': customer,
                    },
                    { projection: { _id: 0}},
                ))
            if(sale) {
                return Sale.fromPrimitives(sale);
            } else {
                return null;                
            }
        } catch (error) {
            const { message } = error as Error;
            throw new Error(message);
        } finally {
            await mongoClient.close()
        }
    }

    async deleteByCustomerAndDate(customer: string, date: Date): Promise<String | void> {
        console.log({ customer, date })
        try {
            await mongoClient.connect();
            const sale = (await mongoClient
                .db(this.database)
                .collection(this.collection)
                .deleteOne(
                    {
                        date: date,
                        'customer.fullName': customer,
                    }
                ))
        } catch (error) {
            const { message } = error as Error;
            throw new Error(message);
        // } finally {
        //     await mongoClient.close()
        }
    }
}

export default new Repository();