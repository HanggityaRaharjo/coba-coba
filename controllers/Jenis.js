import Jenis from '../models/JenisModel.js';

//getJenis
export const getJenis = async (req, res) => {
  try {
    const response = await Jenis.findAll({
      attributes: ['id', 'kode', 'jenis_produk'],
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//getJenisById
export const getJenisById = async (req, res) => {
  try {
    const response = await Jenis.findOne({
      attributes: ['id', 'kode', 'jenis_produk'],
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//getJenisByName
export const getJenisByName = async (req, res) => {
  try {
    const response = await Jenis.findAll({
      attributes: ['id', 'kode', 'jenis_produk'],
      where: {
        jenis_produk: req.params.jenis,
      },
    });
    res.status(200).json({ msg: 'Get all jenis by name success', data: response });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//createJenis
export const createJenis = async (req, res) => {
  const { kode, jenis_produk } = req.body;
  try {
    await Jenis.create({
      kode: kode,
      jenis_produk: jenis_produk,
    });
    res.status(201).json({ msg: 'Buat jenis berhasil' });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

//updateJenis
export const updateJenis = async (req, res) => {
  const jenis = await Jenis.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!jenis) return res.status(404).json({ msg: 'Jenis tidak ditemukan' });
  const { kode, jenis_produk } = req.body;
  try {
    await Jenis.update(
      {
        kode: kode,
        jenis_produk: jenis_produk,
      },
      {
        where: {
          id: jenis.id,
        },
      }
    );
    res.status(200).json({ msg: 'Update Jenis Berhasil' });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

//deleteJenis
export const deleteJenis = async (req, res) => {
  const jenis = await Jenis.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!jenis) return res.status(404).json({ msg: 'Jenis tidak ditemukan' });

  try {
    await Jenis.destroy({
      where: {
        id: jenis.id,
      },
    });
    res.status(200).json({ msg: 'Delete Jenis Berhasil' });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
