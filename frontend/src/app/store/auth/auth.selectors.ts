import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AuthState } from './auth.reducers';

export const selectAuth = createFeatureSelector<AuthState>('auth');

export const selectUser = createSelector(selectAuth, a => a.user);
export const selectToken = createSelector(selectAuth, a => a.token);
export const selectIsLoggedIn = createSelector(selectAuth, a => !!a.token);
export const selectAuthLoading = createSelector(selectAuth, a => a.loading);
export const selectAuthError = createSelector(selectAuth, a => a.error);