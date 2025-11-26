import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

interface Enfermero {
  id: number;
  nombre: string;
  Usuario: string;
  Password: string;
}

@Component({
  selector: 'app-nurse-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './nurse-list.html',
  styleUrl: './nurse-list.css',
})

export class NurseList {
  
  mostrarContrasenas: boolean = true;

  enfermerosArray: Enfermero[] = [
    { id: 1, nombre: 'Ana García', Usuario: 'Anag', Password: "Pl2@onq" },
    { id: 2, nombre: 'Luis Pérez', Usuario: 'Luisp', Password: "p9/nñ" },
    { id: 3, nombre: 'Marta Ruiz', Usuario: 'Martar', Password: "1QomdP" },
    { id: 4, nombre: 'Javier Soto', Usuario: 'Javiers', Password: "Pdnkq" },
  ];
  
  toggleContrasenas() {
    this.mostrarContrasenas = !this.mostrarContrasenas;
  }
}