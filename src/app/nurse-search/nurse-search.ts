import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NurseService } from '../service/nurse.service';
import { Nurse } from '../models/nurse.model';

@Component({
  selector: 'app-nurse-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './nurse-search.html',
  styleUrls: ['./nurse-search.css']
})
export class NurseSearch implements OnInit {

  private nurseService = inject(NurseService);

  nameText: string = '';
  searchedName: string = '';

  enfermeros: Nurse[] = [];
  results: Nurse[] = [];
  hasSearched: boolean = false;

  ngOnInit(): void {
    this.cargarEnfermeros();
  }

  cargarEnfermeros() {
    this.nurseService.getEnfermeros().subscribe({
      next: (data) => {
        console.log('Datos reales:', data);
        this.enfermeros = data;
      },
      error: (err) => console.error(err)
    });
  }

  filterName() {
    this.nameText = this.nameText.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ ]/g, '');
  }

  search() {
    this.hasSearched = true;
    this.searchedName = this.nameText.trim().toLowerCase();

    this.results = this.enfermeros.filter(nurse =>
      nurse.name.toLowerCase().includes(this.searchedName)
    );
  }
}
