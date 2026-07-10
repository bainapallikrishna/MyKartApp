import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Authservice } from '../../Services/authservice';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private auth = inject(Authservice);
  private router = inject(Router);

  email = '';
  password = '';
  error = '';
  accessToken: string | null = null;
  refreshToken: string | null = null;

  submit(): void {
    this.error = '';
   this.auth.login({ email: "krishna", password: "krishna@123" }).subscribe({
      next: (result) => {
       
        this.accessToken = result.accessToken;
        this.refreshToken = result.refreshToken;
        this.router.navigate(['/User']);
      },
      error: (_error: any) => this.error = 'Invalid email or password. Register first if you have no account.'
    });
  }

  logout(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  }
}
