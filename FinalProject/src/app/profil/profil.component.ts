import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountDashboardComponent } from '../ProfilComponents/account-dashboard/account-dashboard.component';
import { DetailsComponent } from '../ProfilComponents/details/details.component';
import { OrderHistoryComponent } from '../ProfilComponents/order-history/order-history.component';
import { PasswordComponent } from '../ProfilComponents/password/password.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css'
})
export class ProfilComponent {

  currentComponent: any = AccountDashboardComponent;
  currentComponentName: string;


  constructor(public authService: AuthService, private router: Router) {
    this.showComponent('overview');
    this.currentComponentName = 'overview';
    console.log(this.authService);
    console.log(this.authService.currentUserValue);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  showComponent(componentName: string): void {
    switch (componentName) {
      case 'overview':
        this.currentComponent = AccountDashboardComponent;
        this.currentComponentName = 'overview';

        break;
      case 'details':
        this.currentComponent = DetailsComponent;
        this.currentComponentName = 'details';

        break;
      case 'password':
        this.currentComponent = PasswordComponent;
        this.currentComponentName = 'password';
        break;
      case 'history':
        this.currentComponent = OrderHistoryComponent;
        this.currentComponentName = 'history';
        break;
      default:
        this.currentComponent = null;
    }
  }
}
