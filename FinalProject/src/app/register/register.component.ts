import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Importa Router de @angular/router
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  user = {
    firstName: '',
    lastName: '',
    username: '',
    password: ''
  };

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router // Inyecta Router en el constructor
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe(
        response => {
          console.log('Registration successful');
          this.router.navigate(['/login']);
          alert('¡Registro exitoso!');
        },
        error => {
          alert('Registro fallido: ' + error.message);
        }
      );
    } else {
      alert('Por favor completa todos los campos requeridos.');
    }
  }



}
