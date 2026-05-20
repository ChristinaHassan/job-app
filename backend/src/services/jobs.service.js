import jobs from '../db.js';

export async function findMatchingJobs(userId) {
    const result    = await jobs.query(
        `SELECT 
        j.id,
        j.title,
        j.description
        FROM jobs j
        JOIN job_skills js ON js.job_id = j.id
        JOIN user_skills us ON us.skill_id = js.skill_id
        WHERE us.user_id = $1`,
        [userId]
    );
    return result.rows;
}