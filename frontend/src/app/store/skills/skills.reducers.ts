import { createReducer, on } from '@ngrx/store';
import { Skill } from '../../core/services/skills.service';
import * as SkillsActions from './skills.actions';

export interface SkillsState {
  allSkills: Skill[];
  mySkills: Skill[];
  loading: boolean;
  saving: boolean;
  error: string;
}

export const initialState: SkillsState = {
  allSkills: [],
  mySkills: [],
  loading: false,
  saving: false,
  error: '',
};

export const skillsReducer = createReducer(
  initialState,

  on(SkillsActions.loadSkills, (state) => ({
    ...state,
    loading: true,
    error: '',
  })),

  on(SkillsActions.loadAllMySkills, (state) => ({
    ...state,
    loading: true,
    error: '',
  })),

  on(SkillsActions.loadSkillsSuccess, (state, { skills }) => ({
    ...state,
    loading: false,
    allSkills: skills,
  })),

  on(SkillsActions.loadMySkillsSuccess, (state, { skills }) => ({
    ...state,
    loading: false,
    mySkills: skills,
  })),

  on(SkillsActions.loadMySkillsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  on(SkillsActions.saveMySkills, (state) => ({
    ...state,
    saving: true,
    error: '',
  })),

  on(SkillsActions.saveMySkillsSuccess, (state, { skills }) => ({
    ...state,
    saving: false,
    mySkills: skills,
  })),

  on(SkillsActions.saveMySkillsFailure, (state, { error }) => ({
    ...state,
    saving: false,
    error,
  })),

  on(SkillsActions.loadSkillsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    saving: false,
    error,
  }))
);
