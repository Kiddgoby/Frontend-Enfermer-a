import { Injectable, signal } from '@angular/core';
import { Nurse } from './models/nurse.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // 1. ESTA ES TU BASE DE DATOS TEMPORAL (Array)
  private _nurses: Nurse[] = [];

  // Tus signals existentes
  private _loginStatus = signal<string>('');
  private _registrationStatus = signal<string>('');

  constructor() { }

  // 2. Método para guardar en el array
  registerNurse(nurse: Nurse): boolean {

    // Validar si ya existe el email
    const exists = this._nurses.find(n => n.username === nurse.username);
    if (exists) {
      console.error('El usuario ya existe');
      return false;
    }

    // Guardar en el array
    this._nurses.push(nurse);

    // Actualizar estado
    this.setRegistrationStatus('success');

    console.log('Nurse registered: (FUNCIONA)', this._nurses);

    return true;

  }

  // 3. Método para obtener todos
  getNurses(): Nurse[] {
    return this._nurses;
  }

  setLoginStatus(status: string) {
    this._loginStatus.set(status);
  }

  getLoginStatus() {
    return this._loginStatus();
  }

  setRegistrationStatus(status: string) {
    this._registrationStatus.set(status);
  }

  getRegistrationStatus() {
    return this._registrationStatus();
  }
}