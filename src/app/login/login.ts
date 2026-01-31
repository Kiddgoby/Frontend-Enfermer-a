import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';
import { NurseService } from '../service/nurse.service'; // Import NurseService
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  username: string = '';
  password: string = '';
  authService: AuthService;
  nurseService: NurseService;


  constructor(authService: AuthService, nurseService: NurseService) {
    this.authService = authService;
    this.nurseService = nurseService;
  }

  loginStatus: string = '';

  login() {
    if (!this.username || !this.password) {
      this.authService.setLoginStatus('empty');
      return;
    }

    this.nurseService.getEnfermeros().subscribe({
      next: (nurses) => {
        const nurse = nurses.find(n => n.username === this.username && n.password === this.password);

        if (nurse) {
          this.authService.setLoginStatus('success');
          console.log('Login exitoso:', nurse);
        } else {
          this.authService.setLoginStatus('error');
          console.error('Login fallido: Usuario o contraseña incorrectos');
        }
      },
      error: (err) => {
        console.error('Error al conectar con la base de datos:', err);
        this.authService.setLoginStatus('error');
      }
    });
  }
}