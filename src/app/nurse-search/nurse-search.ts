import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nurse-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './nurse-search.html',
  styleUrls: ['./nurse-search.css']
})
export class NurseSearch {

  nameText: string = "";
  lastNameText: string = "";
  searchedName: string = '';
  searchedLastName: string = '';
  results: any[] = [];
  hasSearched: boolean = false;

  users = [
    { name: "Javier", last_name: "Givica", user: "JaGiFe", password: "1234" },
    { name: "Arnau", last_name: "Gaushachs", user: "ArGaGa", password: "abcd" },
    { name: "Olalla", last_name: "Sanchez", user: "OlSaBe", password: "4321" },
    { name: "David", last_name: "Castillo", user: "DaCaEn", password: "1234" },
    { name: "Maria", last_name: "Magdalena", user: "mariaMagda", password: "abcd" },
    { name: "Antonio", last_name: "Lobato", user: "AntonioCoches", password: "4321" },
    { name: "Antonio", last_name: "Recio", user: "Pescadero", password: "1234" },
    { name: "Maria", last_name: "Patiño", user: "MariaPat", password: "abcd" },
    { name: "Biel", last_name: "Turias", user: "Byel", password: "4321" }
  ];

  filterName() {
    this.nameText = this.nameText.replace(/[0-9]/g, '');
  }

  filterLastName() {
    this.lastNameText = this.lastNameText.replace(/[0-9]/g, '');
  }

  search() {
    this.hasSearched = true;

    this.searchedName = this.nameText;
    this.searchedLastName = this.lastNameText;

    this.results = this.users.filter(user =>
      user.name.toLowerCase() === this.searchedName.toLowerCase() &&
      user.last_name.toLowerCase() === this.searchedLastName.toLowerCase()
    );
  }

}
