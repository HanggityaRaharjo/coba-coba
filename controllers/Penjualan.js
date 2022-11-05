import Penjualan from '../models/PenjualanModel.js';

export const getPenjualan = async(req, res) => {
    try {
        const response = await Penjualan.findAll({
          attributes: ['uuid', 'produkId', 'jumlah', 'transaksiId'],
        });
        res.status(200).json(response);
      } catch (error) {
        res.status(500).json({ msg: error.message });
      }
}; 

export const getPenjualanById = async (req, res) => {
    try {
        const response = await Penjualan.findOne({
          attributes: ['uuid', 'produkId', 'jumlah', 'transaksiId' ],
          where: {
            uuid: req.params.id,
          },
        });
        res.status(200).json(response);
      } catch (error) {
        res.status(500).json({ msg: error.message });
      }
}; 

export const createPenjualan = async(req, res) => {
    const {produkId, jumlah, transaksiId} = req.body;
    try {
      await Penjualan.create({
        produkId: produkId,
        jumlah: jumlah,
        transaksiId: transaksiId
      });
      res.status(201).json({ msg: 'Buat penjualan berhasil' });
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
}; 

export const updatePenjualan = async(req, res) => {
    const penjualan = await Penjualan.findOne({
        where: {
          uuid: req.params.id,
        },
      });
      try {
        await Penjualan.update(
          {
            produkId: produkId,
            jumlah: jumlah,
            transaksiId: transaksiId
          },
          {
            where: {
              id: penjualan.id,
            },
          }
        );
        res.status(200).json({ msg: 'Update Penjualan Berhasil' });
      } catch (error) {
        res.status(400).json({ msg: error.message });
      }
}; 

export const deletePenjualan = async(req, res) => {
    const penjualan = await Penjualan.findOne({
        where: {
          kode: req.params.id,
        },
      });
      if (!penjualan) return res.status(404).json({ msg: 'Penjualan tidak ditemukan' });
    
      try {
        await Penjualan.destroy({
          where: {
            id: penjualan.id,
          },
        });
        res.status(200).json({ msg: 'Delete Penjualan Berhasil' });
      } catch (error) {
        res.status(400).json({ msg: error.message });
      }
}; 