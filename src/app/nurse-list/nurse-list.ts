import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Enfermero } from './enfermero.modelo';
import { NurseService } from './nurse.service'; // Asegúrate que el archivo se llame así

@Component({
  selector: 'app-nurse-list',
  standalone: true,
  imports: [CommonModule],
  // Convención: Habitualmente se usa nurse-list.component.html
  templateUrl: './nurse-list.html',
  // OJO AQUÍ: 
  // En Angular 17+ se usa 'styleUrl' (singular). 
  // En versiones anteriores (16 o menos) se usa 'styleUrls' (plural y array).
  styleUrl: './nurse-list.css',
})
export class NurseList implements OnInit { // Convención: Mejor llamarlo NurseListComponent

  private nurseService = inject(NurseService);

  mostrarContrasenas: boolean = true;
  enfermerosArray: Enfermero[] = [];

  ngOnInit(): void {
    this.cargarEnfermeros();
  }

  cargarEnfermeros() {
    // Ahora esto funcionará porque ya creamos el método en el servicio
    this.enfermerosArray = this.nurseService.getEnfermeros();
  }

  toggleContrasenas() {
    this.mostrarContrasenas = !this.mostrarContrasenas;
  }
}