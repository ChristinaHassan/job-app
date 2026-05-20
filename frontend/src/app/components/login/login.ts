import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {
  email = '';
  password = '';

  private auth = inject(AuthService);
  private router = inject(Router);

  onSubmit(): void {
    this.auth.login(this.email, this.password).subscribe({
      next: (response) => {
        this.auth.saveToken(response.token);
        this.router.navigate(['/skills']);
      },
      error: (err: HttpErrorResponse) => {
        console.error('Login failed:', err);
      },
    });
  }
}
