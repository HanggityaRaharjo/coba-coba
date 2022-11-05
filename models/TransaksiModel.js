import { Sequelize } from 'sequelize';
import db from '../config/Database.js';


const { DataTypes } = Sequelize;

const Transaksi = db.define(
  'transaksi',
  {
    kodeTransaksi: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    waktu: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  {
    freezeTableName: true,
  }
);


export default Transaksi;
