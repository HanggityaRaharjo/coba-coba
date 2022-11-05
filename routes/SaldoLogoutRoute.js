import express from 'express';
import { getSaldoLogout, getSaldoLogoutById, createSaldoLogout, updateSaldoLogout, deleteSaldoLogout } from '../controllers/SaldoLogout.js';

const router = express.Router();

router.get('/saldo-logout', getSaldoLogout);
router.get('/saldo-logout/:id', getSaldoLogoutById);
router.post('/saldo-logout', createSaldoLogout);
router.patch('/saldo-logout/:id', updateSaldoLogout);
router.delete('/saldo-logout/:id', deleteSaldoLogout);

export default router;
