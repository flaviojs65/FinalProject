import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userData = {
    nomUtilisateur: '',
    motDePasse: ''
  };

  constructor() { }

  submitForm() {

    // console.log('Données du formulaire:', this.userData);
  }
}
