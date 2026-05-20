import { createAction, props } from '@ngrx/store';
import * as Jobs from '../../core/services/jobs.service';

export const loadJobs = createAction('[Jobs] Load Jobs');

export const loadJobsSuccess = createAction(
  '[Jobs] Load Jobs Success',
  props<{ jobs: Jobs.Job[] }>()
);

export const loadJobsFailure = createAction(
  '[Jobs] Load Jobs Failure',
  props<{ error: string }>()
);
export function loadMatches(loadMatches: any): import("rxjs").OperatorFunction<any, any> {
  throw new Error('Function not implemented.');
}

export function loadMatchesSuccess(arg0: { jobs: Jobs.Job[]; }): any {
  throw new Error('Function not implemented.');
}

export function loadMatchesFailure(arg0: { error: any; }): any {
  throw new Error('Function not implemented.');
}

