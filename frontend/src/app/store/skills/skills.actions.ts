import { createAction, props } from '@ngrx/store';
import { Skill } from '../../core/services/skills.service';

export const loadSkills = createAction(
  '[Skills] Load All Skills'
);

export const loadSkillsSuccess = createAction(
  '[Skills] Load Skills Success',
  props<{ skills: Skill[] }>()
);

export const loadSkillsFailure = createAction(
  '[Skills] Load Skills Failure',
  props<{ error: string }>()
);


export const loadAllMySkills = createAction(
  '[Skills] Load All My Skills'
);

export const loadMySkillsSuccess = createAction(
  '[Skills] Load My Skills Success',
  props<{ skills: Skill[] }>()
);

export const loadMySkillsFailure = createAction(
  '[Skills] Load My Skills Failure',
  props<{ error: string }>()
);

export const saveMySkills = createAction(
  '[Skills] Save My Skills',
  props<{ skills: string[] }>()
);

export const saveMySkillsSuccess = createAction(
  '[Skills] Save My Skills Success',
  props<{ skills: Skill[] }>()
);

export const saveMySkillsFailure = createAction(
  '[Skills] Save My Skills Failure',
  props<{ error: string }>()
);
