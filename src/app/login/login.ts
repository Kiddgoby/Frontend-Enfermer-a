import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';


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


  constructor(authService: AuthService) {
    this.authService = authService;
  }


  login() {
    if (!this.username || !this.password) {
      this.authService.setLoginStatus('empty');
      return;
    }

    // quiero que esto lea de la array que hay en el service para hacer el login
    const nurse = this.authService.getNurses().find(n => n.username === this.username && n.password === this.password);
    if (nurse) {
      this.authService.setLoginStatus('success');
    } else {
      this.authService.setLoginStatus('error');
    }
  }
}