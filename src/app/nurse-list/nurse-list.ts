import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Enfermero } from './enfermero.modelo';
import { NurseService } from './nurse.service'; // Asegúrate que el archivo se llame así

@Component({
  selector: 'app-nurse-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nurse-list.html',
  styleUrl: './nurse-list.css',
})
export class NurseList implements OnInit { // Convención: Mejor llamarlo NurseListComponent

  private nurseService = inject(NurseService);

  mostrarContrasenas: boolean = false;
  enfermerosArray: Enfermero[] = [];

  ngOnInit(): void {
    this.cargarEnfermeros();
  }

  cargarEnfermeros() {
    this.enfermerosArray = this.nurseService.getEnfermeros();
  }

  toggleContrasenas() {
    this.mostrarContrasenas = !this.mostrarContrasenas;
  }
}