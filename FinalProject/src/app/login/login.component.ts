import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit(form: any) {
    if (form.valid) {
      this.authService.login(this.username, this.password).subscribe({
        next: (response) => {
          this.router.navigate(['/profile']); // Note: ensure the route is correctly spelled as '/profile'
        },
        error: (err) => {
          console.error('Login failed', err);
        }
      });
    }
  }

  logout() {
    this.authService.logout().subscribe({
      next: () => {
        console.log('Logout successful');
        this.authService.clearLoggedInUser();
      },
      error: (err) => {
        console.error('Logout failed', err);
      }
    });
  }
}
