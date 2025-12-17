import { Injectable } from '@angular/core';
import { Enfermero } from './enfermero.modelo';

@Injectable({
    providedIn: 'root'
})
export class NurseService {

    private enfermeros: Enfermero[] = [
        { name: "Javier", last_name: "Givica", user: "bj82417", password: "1234" ,foto: "/img/elniñomasguapo.jpg"},
        { name: "Arnau", last_name: "Gaushachs", user: "bj39056", password: "abcd" ,foto: "/img/foto2.avif"},
        { name: "Olalla", last_name: "Sanchez", user: "bj17592", password: "4321" , foto: "/img/foto3.jpg"},
        { name: "David", last_name: "Castillo", user: "bj60834", password: "1234", foto: "/img/david.jpg" },
        { name: "Maria", last_name: "Magdalena", user: "bj45281", password: "abcd" },
        { name: "Antonio", last_name: "Lobato", user: "bj93720", password: "4321" },
        { name: "Antonio", last_name: "Recio", user: "bj21468", password: "1234" },
        { name: "Maria", last_name: "Patiño", user: "bj58603", password: "abcd" },
        { name: "Biel", last_name: "Turias", user: "bj74915", password: "4321" }
    ];

    constructor() { }

    getEnfermeros(): Enfermero[] {
        return [...this.enfermeros];
    }
}