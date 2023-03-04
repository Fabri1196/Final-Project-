import { MongoClient } from 'mongodb';

//Connection URL
// const MONGO_URL = `mongodb+srv://${user}:${password}@cluster0.ku8dczo.mongodb.net/${dbname}?retryWrites=true&w=majority`;

//Create a new MongoClient
// export const mongoClient = new MongoClient(MONGO_URL);

// const mongoose = require('mongoose');

const user = 'fabripeirano';
const password = 'JpAqMjeqv7IEyKAg';
const dbname = 'Pharmacy'
const MONGO_URL = `mongodb+srv://fabripeirano:JpAqMjeqv7IEyKAg@cluster0.ku8dczo.mongodb.net/Pharmacy?retryWrites=true&w=majority`;

export const mongoClient = new MongoClient(MONGO_URL);


// const uri = `mongodb+srv://${user}:${password}@cluster0.ku8dczo.mongodb.net/${dbname}?retryWrites=true&w=majority`;

// mongoose.connect('mongodb://127.0.0.1:27017/test',
//     { userNewUrlParse: true, userUnifiedTopology: true }
// );

// mongoose.connect('mongodb://127.0.0.1:27017/test');
