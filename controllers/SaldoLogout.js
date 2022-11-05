import SaldoLogout from '../models/SaldoLogoutModel.js';

//getKategori
export const getSaldoLogout = async (req, res) => {
  try {
    const response = await SaldoLogout.findAll({
      attributes: ['nama', 'date', 'saldo'],
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//getKategoriById
export const getSaldoLogoutById = async (req, res) => {
    try {
        const response = await SaldoLogout.findOne({
          attributes: ['nama', 'date', 'saldo'],
          where: {
            kode: req.params.id,
          },
        });
        res.status(200).json(response);
      } catch (error) {
        res.status(500).json({ msg: error.message });
      }
}

//createKategori
export const createSaldoLogout = async (req, res) => {
    const { nama, date, saldo} = req.body;
    try {
      await SaldoLogout.create({
        nama: nama,
        date: date,
        saldo
      });
      res.status(201).json({ msg: 'Input saldo berhasil' });
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
};

//updateKategori
export const updateSaldoLogout = async (req, res) => {
  const SaldoLogout = await SaldoLogout.findOne({
    where: {
      id: req.params.id,
    },
  });
  try {
    await SaldoLogout.update(
      {
       nama: nama,
       date: date,
       saldo: saldo
      },
      {
        where: {
          id: SaldoLogout.id,
        },
      }
    );
    res.status(200).json({ msg: 'Update Saldo Berhasil' });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}

//deleteKategori
export const deleteSaldoLogout = async (req, res) => {
    const SaldoLogout = await SaldoLogout.findOne({
        where: {
          id: req.params.id,
        },
      });
      if (!SaldoLogout) return res.status(404).json({ msg: 'Saldo tidak ditemukan' });
    
      try {
        await SaldoLogout.destroy({
          where: {
            id: SaldoLogout.id,
          },
        });
        res.status(200).json({ msg: 'Delete Saldo Berhasil' });
      } catch (error) {
        res.status(400).json({ msg: error.message });
      }
}

