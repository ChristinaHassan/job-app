import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, of } from 'rxjs';

import { JobsService } from '../../core/services/jobs.service';
import * as JobsActions from './jobs.actions';

@Injectable()
export class JobsEffects {
  private actions$ = inject(Actions);
  private jobsService = inject(JobsService);

  loadJobs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(JobsActions.loadJobs),
      switchMap(() =>
        this.jobsService.getJobs().pipe(
          map((res) =>
            JobsActions.loadJobsSuccess({ jobs: res.jobs })
          ),
          catchError((err) =>
            of(JobsActions.loadJobsFailure({ error: err.message }))
          )
        )
      )
    )
  );
}
