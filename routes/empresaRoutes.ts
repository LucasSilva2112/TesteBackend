import express from 'express';
import { empresaController } from '../controllers/empresaController';

const router = express.Router();

// Rota para criar uma empresa
router.post('/', empresaController.criarEmpresa);

export default router;
