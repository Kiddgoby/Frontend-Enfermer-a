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
  searchText: string = "";
  results: any[] = [];
  hasSearched: boolean = false;

  users = [
    { name: "Javier", user: "JaGiFe", password: "1234" },
    { name: "Arnau", user: "ArGaGa", password: "abcd" },
    { name: "Olalla", user: "OlSaBe", password: "4321" },
    { name: "David", user: "DaCaEn", password: "1234" },
    { name: "Maria", user: "mariaMagda", password: "abcd" },
    { name: "Antonio", user: "AntonioCoches", password: "4321" },
    { name: "Antonio", user: "Pescadero", password: "1234" },
    { name: "Lucia", user: "MariaPat", password: "abcd" },
    { name: "Biel", user: "antonio02", password: "4321" }
  ];

  search() {
    this.hasSearched = true;
    this.results = this.users.filter(user =>
      user.name.toLowerCase() === this.searchText.toLowerCase()
    );
  }
}
