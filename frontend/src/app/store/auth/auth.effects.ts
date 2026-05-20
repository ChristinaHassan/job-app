import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { catchError, map, switchMap, tap, of } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';
import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {
  private actions$ = inject(Actions);
  private auth = inject(AuthService);
  private router = inject(Router);

  login$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.login),
    switchMap(({ email, password }) =>
      this.auth.login(email, password).pipe(
        map(res => AuthActions.loginSuccess({ token: res.token, user: res.user })),
        catchError(err => of(AuthActions.loginFailure({
          error: err.error?.error || 'Login failed'
        })))
      )
    )
  ));

  // Save token + navigate after success
  loginSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.loginSuccess),
    tap(({ token }) => {
      this.auth.saveToken(token);
      this.router.navigate(['/skills']);
    }),
  ), { dispatch: false });

  // Clear token + go to login
  logout$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.logout),
    tap(() => {
      this.auth.logout();
      this.router.navigate(['/login']);
    }),
  ), { dispatch: false });
}