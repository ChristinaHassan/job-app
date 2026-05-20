import bcrypt from 'bcrypt';
import pool from '../db.js';
import jwt from 'jsonwebtoken';

const SALT_ROUNDS = 10;

function createToken(userId) {
  return jwt.sign({ userId }, process.env.JWT_SECRET);
}

function toAuthResponse(user) {
  return {
    token: createToken(user.id),
    user: {
      id: user.id,
      email: user.email,
    },
  };
}

export async function signin(email, password) {
  const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

  const result = await pool.query(
    `
    INSERT INTO users (email, password_hash)
    VALUES ($1, $2)
    RETURNING id, email
    `,
    [email, passwordHash]
  );

  return toAuthResponse(result.rows[0]);
}

export async function login(email, password) {
  const result = await pool.query(
    `
    SELECT id, email, password_hash
    FROM users
    WHERE email = $1
    `,
    [email]
  );

  const user = result.rows[0];

  if (!user) {
    const error = new Error('Invalid email or password');
    error.status = 401;
    throw error;
  }

  const passwordsMatch = await bcrypt.compare(password, user.password_hash);

  if (!passwordsMatch) {
    const error = new Error('Invalid email or password');
    error.status = 401;
    throw error;
  }

  return toAuthResponse(user);
}
