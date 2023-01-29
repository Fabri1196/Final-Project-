import express from 'express';
import CommonRoutes from './http/routes/common.routes';
import cors from 'cors';
import { log } from 'debug';
import expressWinston from 'express-winston';
import winston from 'winston';
import CustomerRoutes from './http/routes/customer.routes';
import MedicineRoutes from './http/routes/medicine.route';
//import BookingRoutes from './http/routes/booking.routes';
// import { MongoDBSeeder } from './infrastructure/Seeders/SeederMongo';

const app: express.Application = express();

const loggerOptions: expressWinston.LoggerOptions = {
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
    winston.format.json(),
    winston.format.prettyPrint(),
    winston.format.colorize({ all: true }),
  ),
};

if (!process.env.DEBUG) {
  loggerOptions.meta = false; // when not debugging, log requests as one-liners
}

app.use(expressWinston.logger(loggerOptions));

const routes: Array<CommonRoutes> = [];
app.use(cors());
app.use(express.json());

// Add router
routes.push(new CustomerRoutes(app));
routes.push(new MedicineRoutes(app));
// routes.push(new BookingRoutes(app));

//Add Seeder
// const seeder = new MongoDBSeeder();
// seeder.generate(); // Uncomment this line to seed the database, then comment it again

app.listen(3000, () => {
  routes.forEach((route: CommonRoutes) => {
    log(`Routes configured for ${route.getName()}`);
  });
  log('Server listening on port 3000');
});