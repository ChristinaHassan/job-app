import { createSelector, createFeatureSelector } from '@ngrx/store';
import { SkillsState } from './skills.reducers';

export const selectSkillsState = createFeatureSelector<SkillsState>('skills');

export const selectAllSkills = createSelector(selectSkillsState, (state) => state.allSkills);
export const selectMySkills = createSelector(selectSkillsState, (state) => state.mySkills);
export const selectSelectedSkillNames = createSelector(
  selectMySkills,
  (skills) => new Set(skills.map((skill) => skill.name))
);
export const selectSkillsLoading = createSelector(selectSkillsState, (state) => state.loading);
export const selectSkillsSaving = createSelector(selectSkillsState, (state) => state.saving);
export const selectSkillsError = createSelector(selectSkillsState, (state) => state.error);
