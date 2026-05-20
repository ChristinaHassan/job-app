import * as jobsService from '../services/jobs.service.js';

export async function getMatchingJobs(req, res) {
  try {
      const jobs = await 
      jobsService.findMatchingJobs(req.userId);

   return res.status(200).json({jobs});
} catch (error) {}
}