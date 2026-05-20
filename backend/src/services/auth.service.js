import bcrypt from 'bcrypt';
import pool from '../db.js';

const SALT_ROUNDS = 10;

export async function register(email, password) {
  const ps_hash = await bcrypt.hash(password, SALT_ROUNDS);

  const result = await pool.query(
    `
    INSERT INTO users (email, ps_hash)
    VALUES ($1, $2)
    RETURNING id, email, created_at
    `,
    [email, ps_hash]
  );

  return result.rows[0];
}