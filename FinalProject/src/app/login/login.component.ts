import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  username: string = '';
  password: string = '';


  constructor(private authService: AuthService, private router: Router) { }

  onSubmit(form: any) {
    if (form.valid) {
      this.authService.login(this.username, this.password).subscribe({
        next: (res) => {
          alert('Login successful');
          this.authService.setLoggedInUser(this.username);
          this.router.navigate(['/profil']); // Adjust as per your routing setup

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
        // Redirigir al usuario al inicio o a otra página
      },
      error: (err) => {
        console.error('Logout failed', err);
      }
    });
  }

}