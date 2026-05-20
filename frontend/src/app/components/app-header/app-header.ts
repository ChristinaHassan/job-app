import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Store } from '@ngrx/store';
import * as AuthActions from '../../store/auth/auth.actions';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './app-header.html',
  styleUrl: './app-header.css',
})
export class AppHeaderComponent {
  private auth = inject(AuthService);
  private router = inject(Router);
  private store = inject(Store);

  get showLogout(): boolean {
    return this.auth.isLoggedIn() && this.router.url.split('?')[0] !== '/signin';
  }

  logout(): void {
    this.store.dispatch(AuthActions.logout());
  }
}
