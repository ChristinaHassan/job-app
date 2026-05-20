import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink} from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './signin.html',
  styleUrl: './signin.css',
})
export class SigninComponent {
  email = '';
  password = '';
  error = '';

  private auth = inject(AuthService);
  private router = inject(Router);

  onSubmit(): void {
    this.error = '';

    this.auth.signin(this.email, this.password).subscribe({
      next: (response) => {
        this.auth.saveToken(response.token);
        this.router.navigate(['/skills']);
      },
      error: (err) => {
        console.error('Registration failed', err);
        this.error = 'Registration failed. Please check your details and try again.';
      },
    });
  }
}
