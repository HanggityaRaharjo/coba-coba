import Products from '../models/ProductModel.js';

export const getProducts = (req, res) => {
  res.status(200).json({ msg: 'Get Product' });
};
export const getProductById = (req, res) => {};
export const createProduct = async (req, res) => {
  const { name, email, password, confpassword, role } = req.body;
  try {
    await Products.create({
      name: name,
      kode: kode,
      price: price,
      role: role,
    });
    res.status(201).json({ msg: 'Pendaftaran Akun Berhasil' });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
export const updateProduct = (req, res) => {};
export const deleteProduct = (req, res) => {};
