import * as skillsService from '../services/skills.service.js';

export async function listAllSkills(req, res) {
  try {
    const skills = await skillsService.listAllSkills();
    return res.status(200).json({ skills });
  } catch (error) {
    console.error('Skills list error:', error);
    return res.status(500).json({ error: 'Failed to load skills' });
  }
}

export async function getMySkills(req, res) {
  try {
    const skills = await skillsService.getUserSkills(req.userId);
    return res.status(200).json({ skills });
  } catch (error) {
    console.error('User skills error:', error);
    return res.status(500).json({ error: 'Failed to load user skills' });
  }
}

export async function replaceMySkills(req, res) {
  try {
    const { skills } = req.body;

    if (!Array.isArray(skills)) {
      return res.status(400).json({ error: 'Skills must be an array' });
    }

    const updatedSkills = await skillsService.replaceUserSkills(req.userId, skills);
    return res.status(200).json({ skills: updatedSkills });
  } catch (error) {
    console.error('Save user skills error:', error);
    return res.status(500).json({ error: 'Failed to save user skills' });
  }
}
