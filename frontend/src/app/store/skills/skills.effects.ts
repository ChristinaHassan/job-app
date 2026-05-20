import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, of } from 'rxjs';

import { SkillsService } from '../../core/services/skills.service';
import * as SkillsActions from './skills.actions';

@Injectable()
export class SkillsEffects {
  private actions$ = inject(Actions);
  private skillsService = inject(SkillsService);

  loadAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SkillsActions.loadSkills),
      switchMap(() =>
        this.skillsService.listAllSkills().pipe(
          map((res) =>
            SkillsActions.loadSkillsSuccess({ skills: res.skills })
          ),
          catchError((err) =>
            of(SkillsActions.loadSkillsFailure({ error: err.message }))
          )
        )
      )
    )
  );

  loadMine$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SkillsActions.loadAllMySkills),
      switchMap(() =>
        this.skillsService.getMySkills().pipe(
          map((res) =>
            SkillsActions.loadMySkillsSuccess({ skills: res.skills })
          ),
          catchError((err) =>
            of(SkillsActions.loadMySkillsFailure({ error: err.message }))
          )
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SkillsActions.saveMySkills),
      switchMap(({ skills }) =>
        this.skillsService.replaceMySkills(skills).pipe(
          map((res) =>
            SkillsActions.saveMySkillsSuccess({ skills: res.skills })
          ),
          catchError((err) =>
            of(SkillsActions.saveMySkillsFailure({ error: err.message }))
          )
        )
      )
    )
  );
}
