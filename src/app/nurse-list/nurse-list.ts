import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NurseService } from '../service/nurse.service';
import { Nurse } from '../models/nurse.model';

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
  enfermerosArray: Nurse[] = [];

  ngOnInit(): void {
    this.nurseService.getEnfermeros().subscribe({
      next: data => this.enfermerosArray = data,
      error: err => console.error(err)
    });
  }


  cargarEnfermeros() {
    this.nurseService.getEnfermeros().subscribe({
      next: (data) => {
        console.log('¿Qué viene de Symfony?', data); // Mira esto en la consola (F12)
        this.enfermerosArray = data;
      },
      error: (err) => console.error('Error total:', err)
    });
  }


  toggleContrasenas() {
    this.mostrarContrasenas = !this.mostrarContrasenas;
  }
}