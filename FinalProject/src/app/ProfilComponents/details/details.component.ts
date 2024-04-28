import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { User } from '../../user';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  user: User;

  constructor(public authService: AuthService) {

    this.user = this.authService.currentUserValue;

  }

  saveUser(): void {
    this.authService.updateUser(this.user).subscribe({
      next: (updatedUser) => {
        console.log('User updated:', updatedUser);
      },
      error: (error) => {
        console.error('Error updating user:', error);
      }
    });
  }

}
