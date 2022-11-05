import Transaksi from '../models/TransaksiModel.js';

export const getTransaksi = async(req, res) => {
    try {
        const response = await Users.findAll({
          attributes: ['kodeTransaksi', 'waktu', 'total'],
        });
        res.status(200).json(response);
      } catch (error) {
        res.status(500).json({ msg: error.message });
      }
}; 

export const getTransaksiById = async(req, res) => {
    try {
        const response = await Transaksi.findOne({
          attributes: ['kodeTransaksi', 'waktu', 'total' ],
          where: {
            id: req.params.id,
          },
        });
        res.status(200).json(response);
      } catch (error) {
        res.status(500).json({ msg: error.message });
      }
}; 

export const createTransaksi = async (req, res) => {
        const {kodeTransaksi, waktu, total} = req.body;
        try {
          await Transaksi.create({
            kodeTransaksi: kodeTransaksi,
            waktu: waktu,
            total: total,
          });
          res.status(201).json({ msg: 'Transaksi berhasil' });
        } catch (error) {
          res.status(400).json({ msg: error.message });
        }
};

//update
export const updateTransaksi = async(req, res) => {
    const transaksi = await Transaksi.findOne({
        where: {
          id: req.params.id,
        },
      });
      try {
        await Transaksi.update(
          {
            kodeTransaksi: kodeTransaksi, 
            waktu: waktu,
            total: total
          },
          {
            where: {
              id: transaksi.id,
            },
          }
        );
        res.status(200).json({ msg: 'Update Transaksi Berhasil' });
      } catch (error) {
        res.status(400).json({ msg: error.message });
      }
}; 

export const deleteTransaksi = async (req, res) => {
        const transaksi = await deleteTransaksi.findOne({
          where: {
            id: req.params.id,
          },
        });
        if (!transaksi) return res.status(404).json({ msg: 'Transaksi tidak ditemukan' });
      
        try {
          await Transaksi.destroy({
            where: {
              id: transaksi.id,
            },
          });
          res.status(200).json({ msg: 'Delete Transaksi Berhasil' });
        } catch (error) {
          res.status(400).json({ msg: error.message });
        }
}; 