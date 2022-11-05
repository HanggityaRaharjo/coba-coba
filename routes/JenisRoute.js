import express from 'express';
import { getJenis, getJenisById, createJenis, updateJenis, deleteJenis, getJenisByName } from '../controllers/Jenis.js';

const router = express.Router();

router.get('/jenis', getJenis);
router.get('/jenis/:id', getJenisById);
router.get('/jenis/all/:jenis', getJenisByName);
router.post('/jenis', createJenis);
router.patch('/jenis/:id', updateJenis);
router.delete('/jenis/:id', deleteJenis);

export default router;
