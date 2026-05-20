import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login';
import { SignInComponent } from './components/signin/signin';
import { JobsComponent } from './components/jobs/jobs';
import { SkillsComponent } from './components/skills/skills';

export const routes: Routes = [
{ path: '', redirectTo: '/login', pathMatch: 'full' },
{ path: 'login', component: LoginComponent },
{ path: 'signin', component: SignInComponent },
{ path: 'skills', component: SkillsComponent },
{ path: 'jobs', component: JobsComponent }

];
