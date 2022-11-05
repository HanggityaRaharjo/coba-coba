import { Sequelize } from 'sequelize';
import db from '../config/Database.js';
import Products from './ProductModel.js';
import Transaksi from './TransaksiModel.js';

const { DataTypes } = Sequelize;

const Penjualan = db.define(
  'penjualan',
  {
    produkId: {
      type: DataTypes.INTEGER,
      defaultValue: DataTypes.UUIV4,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    jumlah: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    transaksiId: {
      type: DataTypes.INTEGER,
      defaultValue: DataTypes.UUIV4,
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

Products.hasMany(Penjualan);
Penjualan.belongsTo(Products, { foreignKey: 'produkId' });

Transaksi.hasMany(Penjualan);
Penjualan.belongsTo(Transaksi, { foreignKey: 'transaksiId' });

export default Penjualan;
