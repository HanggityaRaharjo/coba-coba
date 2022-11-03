import { Sequelize } from 'sequelize';
const db = new Sequelize('pointofsales', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

export default db;
