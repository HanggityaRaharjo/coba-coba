import { Sequelize } from 'sequelize';
import db from '../config/Database.js';
import Jenis from './JenisModel.js';

const { DataTypes } = Sequelize;

const Kategori = db.define(
  'kategori',
  {
    kode: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    kategori: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [3, 100],
      },
    },
    jenisId: {
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

Jenis.hasMany(Kategori);
Kategori.belongsTo(Jenis, { foreignKey: 'jenisId' });

export default Kategori;
