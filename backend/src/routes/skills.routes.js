import { Router } from 'express';
import * as skillsController from '../controllers/skills.controller.js';

const router = Router();

router.get('/', skillsController.listAllSkills);

export default router;
