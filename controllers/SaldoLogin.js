import SaldoLogin from '../models/SaldoLoginModel.js';

//getKategori
export const getSaldoLogin = async (req, res) => {
  try {
    const response = await SaldoLogin.findAll({
      attributes: ['nama', 'date', 'saldo'],
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//getKategoriById
export const getSaldoLoginById = async (req, res) => {
    try {
        const response = await SaldoLogin.findOne({
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
export const createSaldoLogin = async (req, res) => {
    const { nama, date, saldo} = req.body;
    try {
      await SaldoLogin.create({
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
export const updateSaldoLogin = async (req, res) => {
  const SaldoLogin = await SaldoLogin.findOne({
    where: {
      id: req.params.id,
    },
  });
  try {
    await SaldoLogin.update(
      {
       nama: nama,
       date: date,
       saldo: saldo
      },
      {
        where: {
          id: SaldoLogin.id,
        },
      }
    );
    res.status(200).json({ msg: 'Update Saldo Berhasil' });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}

//deleteKategori
export const deleteSaldoLogin = async (req, res) => {
    const SaldoLogin = await SaldoLogin.findOne({
        where: {
          id: req.params.id,
        },
      });
      if (!SaldoLogin) return res.status(404).json({ msg: 'Saldo tidak ditemukan' });
    
      try {
        await SaldoLogin.destroy({
          where: {
            id: SaldoLogin.id,
          },
        });
        res.status(200).json({ msg: 'Delete Saldo Berhasil' });
      } catch (error) {
        res.status(400).json({ msg: error.message });
      }
}

