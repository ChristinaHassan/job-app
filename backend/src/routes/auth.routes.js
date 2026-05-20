import express from 'express';
import * as authController from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/signin', authController.signin);
router.post('/login', authController.login);

export default router;