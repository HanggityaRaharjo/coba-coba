import express from 'express';
import { getSaldoLogin, getSaldoLoginById, createSaldoLogin, updateSaldoLogin, deleteSaldoLogin } from '../controllers/saldologin.js';

const router = express.Router();

router.get('/saldo-login', getSaldoLogin);
router.get('/saldo-login/:id', getSaldoLoginById);
router.post('/saldo-login', createSaldoLogin);
router.patch('/saldo-login/:id', updateSaldoLogin);
router.delete('/saldo-login/:id', deleteSaldoLogin);

export default router;
