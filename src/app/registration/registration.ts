import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';
import { Nurse } from '../models/nurse.model';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './registration.html',
  styleUrl: './registration.css',
})
export class Registration {
  nurse: Nurse;


  constructor(private authService: AuthService) {
    this.nurse = new Nurse('', '', '', '', '', '');
  }

  register(): void {
    if (this.nurse.password !== this.nurse.passwordConfirm) {
      this.authService.setRegistrationStatus('error');
      console.error('Las contraseñas no coinciden');
      return;
    }
    const success = this.authService.registerNurse(this.nurse);
    if (success) {
      this.authService.setRegistrationStatus('success');
    }
    else {
      this.authService.setRegistrationStatus('error');
    }
  }
  get registrationStatus(): string {
    return this.authService.getRegistrationStatus();
  }
}
