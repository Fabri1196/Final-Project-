import { Customer } from "../../../domain/entities/customer.entity";
import { mongoClient } from "./configuration.mongodb.repository";

class Repository {
    private database: string = 'Pharmacy';
    private collection: string = 'Customers';

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

    async findByIdentityCard(identityCard: string): Promise<Customer | null> {
        try {
            await mongoClient.connect();
            const customer = (await mongoClient
                .db(this.database)
                .collection(this.collection)
                .findOne(
                    {
                        identityCard: identityCard,
                    },
                    { projection: { _id: 0} },
                ))
            if (customer) {
                return Customer.fromPrimitives(customer);
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

    async findById(id: string): Promise<Customer | null> {
        try {
            await mongoClient.connect();
            const customer = (await mongoClient
                .db(this.database)
                .collection(this.collection)
                .findOne(
                    {
                        id: id,
                    },
                    { projection: { _id: 0 }},
                ))
                if (customer) {
                    return Customer.fromPrimitives(customer);
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

    async findByName(fullName: string): Promise<Customer | null> {
        try {
            await mongoClient.connect();
            const customer = (await mongoClient
                .db(this.database)
                .collection(this.collection)
                .findOne(
                    {
                        fullName: fullName,
                    },
                    { projection: { _id: 0}},
                ))
                if(customer) {
                    return Customer.fromPrimitives(customer);
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
}

export default new Repository();