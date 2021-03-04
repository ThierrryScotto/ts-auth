import { createConnection} from 'typeorm';

createConnection()     // get the configuration of the ormconfig file at the project root
  .then(() => (console.info('Successfully connected with database')))
  .catch((error) => {
    console.error(error);
  })