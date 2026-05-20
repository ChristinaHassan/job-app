import express from 'express';
import * as authController from '../controllers/auth.controller.js';
import { register } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', authController.login);

export default router;