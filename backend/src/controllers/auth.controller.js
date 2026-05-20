import * as authService from '../services/auth.service.js';

export async function register(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: 'Both equired',
      });
    }

    const result = await authService.register(email, password);
    return res.status(201).json(result);
  } catch (error) {
    if (error.code === '23505') {
      return res.status(409).json({
        message: 'Email already exists',
      });
    }

    console.error('Register error:', error);

    return res.status(500).json({
      message: 'User: Failed to register',
    });
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password required' });
    }

    const result = await authService.login(email, password);
    return res.json(result);
  } catch (err) {
    if (err.status === 401) {
      return res.status(401).json({ error: err.message });
    }

    console.error('Login error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
