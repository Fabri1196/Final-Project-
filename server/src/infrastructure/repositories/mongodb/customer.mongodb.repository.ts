import { Customer } from "../../../domain/entities/customer.entity";
import { mongoClient } from "./configuration.mongodb.repository";

class Repository {
    private database: string = 'sales';
    private collection: string = 'customers';

    async save(customer: Customer): Promise<void> {
        try {
            await mongoClient.connect();
            await mongoClient
                .db(this.database)
                .collection(this.collection)
                .updateOne({ id: customer.getId() }, { $set:customer }, { upsert: true });
        }   catch (error) {
            console.log(error);
        }   finally {
            await mongoClient.close();
        }
    }
}