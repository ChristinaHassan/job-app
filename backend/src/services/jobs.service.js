import jobs from '../db.js';

export async function findMatchingJobs(userId) {
    const result    = await jobs.query(
        `SELECT 
        j.id,
        j.title,
        j.description,
        COUNT(js.skill_id)::int AS matched_count
        FROM jobs j
        JOIN job_skills js ON js.job_id = j.id
        JOIN user_skills us ON us.skills_id = js.skill_id
        WHERE us.users_id = $1
        GROUP BY j.id, j.title, j.description
        ORDER BY matched_count DESC, j.title`,
        [userId]
    );
    return result.rows;
}
