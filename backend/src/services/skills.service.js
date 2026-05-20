import pool from '../db.js';

export async function listAllSkills() {
  const result = await pool.query(
    `
    SELECT id, name
    FROM skills
    ORDER BY name
    `
  );

  return result.rows;
}

export async function getUserSkills(userId) {
  const result = await pool.query(
    `
    SELECT s.id, s.name
    FROM skills s
    JOIN user_skills us ON us.skills_id = s.id
    WHERE us.users_id = $1
    ORDER BY s.name
    `,
    [userId]
  );

  return result.rows;
}

export async function replaceUserSkills(userId, skillNames) {
  const client = await pool.connect();

  try {
    await client.query('BEGIN');

    await client.query(
      `
      DELETE FROM user_skills
      WHERE users_id = $1
      `,
      [userId]
    );

    if (skillNames.length > 0) {
      await client.query(
        `
        INSERT INTO user_skills (users_id, skills_id)
        SELECT $1, id
        FROM skills
        WHERE name = ANY($2::text[])
        ON CONFLICT DO NOTHING
        `,
        [userId, skillNames]
      );
    }

    const result = await client.query(
      `
      SELECT s.id, s.name
      FROM skills s
      JOIN user_skills us ON us.skills_id = s.id
      WHERE us.users_id = $1
      ORDER BY s.name
      `,
      [userId]
    );

    await client.query('COMMIT');
    return result.rows;
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
}
