import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NurseService } from '../service/nurse.service';
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


  constructor(private nurseService: NurseService) {
    this.nurse = new Nurse('', '', '', '', '');
  }

  register(): void {
    if (this.nurse.password !== this.nurse.passwordConfirm) {
      this.nurseService.setRegistrationStatus('error');
      console.error('Las contraseñas no coinciden');
      return;
    }
    const success = this.nurseService.registerNurse(this.nurse);
    if (success) {
      this.nurseService.setRegistrationStatus('success');
    }
    else {
      this.nurseService.setRegistrationStatus('error');
    }
  }
  get registrationStatus(): string {
    return this.nurseService.getRegistrationStatus();
  }
}
