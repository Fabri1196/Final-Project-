import { MongoClient } from 'mongodb';

const user = 'fabripeirano';
const password = 'JpAqMjeqv7IEyKAg';
const dbname = 'Pharmacy'
const MONGO_URL = `mongodb+srv://fabripeirano:JpAqMjeqv7IEyKAg@cluster0.ku8dczo.mongodb.net/Pharmacy?retryWrites=true&w=majority`;

export const mongoClient = new MongoClient(MONGO_URL);
