import express from 'express';
import handleBFHL from '../controllers/bfhl.controller.js'

const router = express.Router();
router.post('/',handleBFHL);

export default router;