import {Router} from 'express';
import * as jobsController from '../controllers/jobs.controller.js';
import {requireAuth} from '../middleware/auth.middleware.js';

const router = Router();

router.get('/matches', requireAuth, jobsController.getMatchingJobs);

export default router;