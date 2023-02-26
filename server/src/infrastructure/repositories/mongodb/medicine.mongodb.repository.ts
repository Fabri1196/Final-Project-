import { Medicine } from "../../../domain/entities/medicine.entity"; 
import { mongoClient } from "./configuration.mongodb.repository";

class Repository {
    private database: string = 'Pharmacy';
    private collection: string = 'Medicines';

    async save(medicine: Medicine): Promise<void> {
        try {
            await mongoClient.connect();
            await mongoClient
                .db(this.database)
                .collection(this.collection)
                .updateOne({ id: medicine.getId() }, { $set:medicine }, { upsert: true });
        }   catch (error) {
            console.log(error);
        }   finally {
            await mongoClient.close();
        }
    }

    async findById(id: string): Promise<Medicine | null> {
        try {
            await mongoClient.connect();
            const medicine = (await mongoClient
                .db(this.database)
                .collection(this.collection)
                .findOne(
                    {
                        id: id,
                    },
                    { projection: { _id: 0 }},
                ))
                if (medicine) {
                    return Medicine.fromPrimitives(medicine);
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
    
    async findByName(name: string): Promise<Medicine | null> {
        try {
            await mongoClient.connect();
            const medicine = mongoClient
                .db(this.database)
                .collection(this.collection)
                .findOne(
                    {
                        'name': name,
                    }
                )
                console.log(medicine)
            if (medicine) {
                return Medicine.fromPrimitives(medicine);
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
}

export default new Repository();