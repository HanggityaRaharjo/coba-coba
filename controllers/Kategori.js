import Kategori from '../models/KategoriModel.js'

//getKategori
export const getKategori = async (req, res) => {
  try {
    const response = await Kategori.findAll({
      attributes: ['kode', 'kategori', 'jenisId'],
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//getKategoriById
export const getKategoriById = async (req, res) => {
    try {
        const response = await Kategori.findOne({
          attributes: ['kode', 'kategori', 'jenisId'],
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
export const createKategori = async (req, res) => {
    const { kode, kategori, jenisId} = req.body;
    try {
      await Kategori.create({
        kode: kode,
        kategori: kategori,
        jenisId: jenisId,
      });
      res.status(201).json({ msg: 'Buat kategori berhasil' });
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
};

//updateKategori
export const updateKategori = async (req, res) => {
  const kategori = await Kategori.findOne({
    where: {
      id: req.params.id,
    },
  });
  try {
    await Jenis.update(
      {
        kode: kode,
        kategori: kategori,
        jenisId: jenisId
      },
      {
        where: {
          id: jenis.id,
        },
      }
    );
    res.status(200).json({ msg: 'Update Kategori Berhasil' });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}

//deleteKategori
export const deleteKategori = async (req, res) => {
    const kategori = await Kategori.findOne({
        where: {
          id: req.params.id,
        },
      });
      if (!Kategori) return res.status(404).json({ msg: 'Kategori tidak ditemukan' });
    
      try {
        await Kategori.destroy({
          where: {
            id: kategori.id,
          },
        });
        res.status(200).json({ msg: 'Delete Kategori Berhasil' });
      } catch (error) {
        res.status(400).json({ msg: error.message });
      }
}

