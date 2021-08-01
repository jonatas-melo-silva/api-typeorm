import { createConnection } from 'typeorm';

export const connectServerWithDataBase = async () => {
  const connection = await createConnection();
  console.log(`👨‍💻️ Connection with open ${connection.options.database} 🎲️`);

  process.on('SIGINT', () => {
    connection.close();
    console.log(`👨‍💻️ Connection with closed ${connection.options.database} 🎲️`);
  });
};