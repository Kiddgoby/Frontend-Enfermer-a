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

  login() {
    if (!this.username || !this.password) {
      this.loginStatus = 'empty';
      return;
    }

    if (this.username === 'enfermero' && this.password === '1234') {
      this.loginStatus = 'success';
    } else {
      this.loginStatus = 'error';
    }
  }
}
