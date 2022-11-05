import { Sequelize } from 'sequelize';
import db from '../config/Database.js';


const { DataTypes } = Sequelize;

const Jenis = db.define(
  'jenis',
  {
    kode: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    jenis_produk: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [3, 100],
      },
    },
  },
  {
    freezeTableName: true,
  }
);

export default Jenis;
