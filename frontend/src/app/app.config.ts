import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from './app.routes';
import { authInterceptor } from './core/interceptors/auth.interceptor';
import { AuthEffects } from './store/auth/auth.effects';
import { authReducer } from './store/auth/auth.reducers';
import { SkillsEffects } from './store/skills/skills.effects';
import { skillsReducer } from './store/skills/skills.reducers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      withFetch(),
      withInterceptors([authInterceptor])
    ),
    provideStore({ auth: authReducer, skills: skillsReducer }),
    provideEffects([AuthEffects, SkillsEffects]),
    provideStoreDevtools(),
  ],
};
