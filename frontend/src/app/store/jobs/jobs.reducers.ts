import { createReducer, on } from '@ngrx/store';
import { Job } from '../../core/services/jobs.service';
import * as JobsActions from './jobs.actions';

export interface JobsState {
  jobs: Job[];
  loading: boolean;
  error: string;
}

export const initialState: JobsState = {
  jobs: [],
  loading: false,
  error: '',
};

export const jobsReducer = createReducer(
  initialState,

  on(JobsActions.loadJobs, (state) => ({
    ...state,
    loading: true,
    error: '',
  })),

  on(JobsActions.loadJobsSuccess, (state, { jobs }) => ({
    ...state,
    jobs,
    loading: false,
  })),

  on(JobsActions.loadJobsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
