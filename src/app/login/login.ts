import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; 
import { LoginService } from '../login-service/login-service';  

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
    { name: "Javier", last_name: "Givica", user: "JaGiFe", password: "1234" },
    { name: "Arnau", last_name: "Gaushachs", user: "ArGaGa", password: "abcd" },
    { name: "Olalla", last_name: "Sanchez", user: "OlSaBe", password: "4321" },
    { name: "David", last_name: "Castillo", user: "DaCaEn", password: "1234" },
    { name: "Maria", last_name: "Magdalena", user: "mariaMagda", password: "abcd" },
    { name: "Antonio", last_name: "Lobato", user: "AntonioCoches", password: "4321" },
    { name: "Antonio", last_name: "Recio", user: "Pescadero", password: "1234" },
    { name: "Maria", last_name: "Patiño", user: "MariaPat", password: "abcd" },
    { name: "Biel", last_name: "Turias", user: "Byel", password: "4321" }
  ];

  constructor(private loginService: LoginService, private router: Router) {}
  login() {
    if (!this.username || !this.password) {
      this.loginStatus = 'empty';
      return;
    }

    const foundUser = this.nurseUser.find(
      user => user.user.toLowerCase() === this.username.toLowerCase() && user.password === this.password
    );

    if (foundUser) {
    this.loginStatus = 'success';
    this.loginService.setUser(foundUser.user);
    this.router.navigate(['/nurse-search']); 
    } else {
      this.loginStatus = 'error';
    }
  }
}
