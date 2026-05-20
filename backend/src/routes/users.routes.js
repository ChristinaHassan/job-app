import { Router } from 'express';
import * as skillsController from '../controllers/skills.controller.js';
import { requireAuth } from '../middleware/auth.middleware.js';

const router = Router();

router.get('/me/skills', requireAuth, skillsController.getMySkills);
router.put('/me/skills', requireAuth, skillsController.replaceMySkills);

export default router;
