import { Sequelize } from 'sequelize';
const db = new Sequelize('point_of_sales', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

export default db;
