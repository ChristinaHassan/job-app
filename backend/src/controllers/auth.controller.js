import * as authService from '../services/auth.service.js';

export async function register(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: 'Both equired',
      });
    }

    const user = await authService.register(email, password);

    return res.status(201).json({ user });
  } catch (error) {
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
      return res.status(400).json({
        message: 'Both equired',
      });
    }

    const user = await authService.login(email, password);

    return res.status(200).json({ user });
  } catch (error) {
    console.error('Login error:', error);

    return res.status(500).json({
      message: 'User: Failed to login',
    });
  }
}