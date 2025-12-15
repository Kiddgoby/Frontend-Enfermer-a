import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loggedUser: string | null = null;

  constructor() {}

  login(username: string): void {
    this.loggedUser = username;
  }

  setUser(username: string): void {
    this.login(username);
  }

  logout(): void {
    this.loggedUser = null;
  }

  isLoggedIn(): boolean {
    return this.loggedUser !== null;
  }

  getUser(): string | null {
    return this.loggedUser;
  } 
}
