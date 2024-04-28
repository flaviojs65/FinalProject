import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): boolean {
    if (this.authService.currentUserValue) {
      return true; // El usuario está conectado, permitir la navegación
    } else {
      this.router.navigate(['/login']); // El usuario no está conectado, redirigir a la página de inicio de sesión
      return false;
    }
  }
}
