import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  username: string = '';
  password: string = '';
  loginStatus: string = '';

  // Datos simulados del enfermero
  private nurseUser = [
    {username: 'olalla', password: 'olalla'},
    {username: 'arnau', password: 'arnau'},
    {username: 'javier', password: 'javier'},
    {username: 'david', password: 'david'}
  ];

  login() {
    // Validar campos vacíos
    if (!this.username || !this.password) {
      this.loginStatus = 'empty';
      return;
    }

    // Validar con los datos locales simulados
    const foundUser = this.nurseUser.find(
      user => user.username === this.username && user.password === this.password
    );

    if (foundUser) {
      this.loginStatus = 'success';
    } else {
      this.loginStatus = 'error';
    }
  }
}
