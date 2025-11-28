import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  // Propiedad para controlar la visibilidad de la lista de horarios
  show: boolean = false;

  // Lista de horarios de visita
  items: string[] = [
    'Mañanas: 10:00 - 12:00',
    'Tardes: 16:00 - 18:00',
    'Noches: 20:00 - 21:00',
  ];

  // Método para alternar la visibilidad
  toggle(): void {
    this.show = !this.show;
  }
}
