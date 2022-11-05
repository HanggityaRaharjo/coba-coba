import express from 'express';
import { getTransaksi, getTransaksiById, createTransaksi, updateTransaksi, deleteTransaksi} from '../controllers/Transaksi.js';

const router = express.Router();

router.get('/Transaksi', getTransaksi);
router.get('/Transaksi/:id', getTransaksiById);
router.post('/Transaksi', createTransaksi);
router.patch('/Transaksi/:id', updateTransaksi);
router.delete('/Transaksi/:id', deleteTransaksi);

export default router;
