import * as jobsService from '../services/jobs.service.js';

export async function getMatchingJobs(req, res) {
  try {
      const jobs = await 
      jobsService.findMatchingJobs(req.userId);

   return res.status(200).json({jobs});
  } catch (error) {
    console.error('Matching jobs error:', error);
    return res.status(500).json({ error: 'Failed to load matching jobs' });
  }
}
