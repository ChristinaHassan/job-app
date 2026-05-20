import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login';
import { SigninComponent } from './components/signin/signin';
import { JobsComponent } from './components/jobs/jobs';
import { SkillsComponent } from './components/skills/skills';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
{ path: 'login',    component: LoginComponent },
{ path: 'register', component: SigninComponent },
{ path: 'skills',   component: SkillsComponent, canActivate: [authGuard] },
{ path: 'jobs',     component: JobsComponent,   canActivate: [authGuard] },

];
