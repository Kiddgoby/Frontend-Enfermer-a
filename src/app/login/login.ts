import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-login',
  standalone: true, 
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

  constructor(private router: Router) {}
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

      if (this.username === 'olalla' || this.username === 'arnau') {
        this.router.navigate(['./nurse-search']);
      }
    } else {
      this.loginStatus = 'error';
    }
  }
}
