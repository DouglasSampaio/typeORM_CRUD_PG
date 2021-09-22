import "reflect-metadata";
import {createConnection} from 'typeorm'
import * as express from "express";
import * as bodyParser from "body-parser";
import routes from "./routes";

const app = express();
createConnection();

app.use(bodyParser.json());
app.use(routes)

app.listen(3333)
console.log("Servidor Rodando na porta 3333")



// import * as env from 'env-var';

// import {
//   app,
//   logger,
//   shutdownHandlers,
//   databaseHelper,
//   rabbitmqProducer,
// } from './loaders';

// const PORT = env.get('PORT').default('4000').asIntPositive();

// databaseHelper
//   .initConnections()
//   .then(() => rabbitmqProducer.start())
//   .then(() => {
//     const server = app.listen(PORT, () => {
//       logger.info(`Server is running on port ${PORT}`);
//     });

//     shutdownHandlers.init(server);
//   })
//   .catch((error: Error) => logger.error(error));
