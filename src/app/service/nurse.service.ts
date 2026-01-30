import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Nurse } from '../models/nurse.model';

@Injectable({
    providedIn: 'root'
})
export class NurseService {
    private http = inject(HttpClient);

    // URL base de tu servidor Symfony en XAMPP
    private apiUrl = 'http://localhost:8000/nurse';

    // Signals para manejar estados desde cualquier componente
    public nurses = signal<Nurse[]>([]);
    public registrationStatus = signal<'loading' | 'success' | 'error' | ''>('');

    /**
     * Obtiene la lista de enfermeros desde Symfony
     */
    getEnfermeros(): Observable<Nurse[]> {
        return this.http.get<Nurse[]>(`${this.apiUrl}/index`);
    }

    /**
     * Registra un enfermero y actualiza el signal de estado
     */
    registerNurse(nurse: Nurse) {
        this.registrationStatus.set('loading');

        return this.http.post(`${this.apiUrl}/register`, nurse).subscribe({
            next: (response) => {
                this.registrationStatus.set('success');
                console.log('✅ Guardado en base de datos:', response);
                // Opcional: recargar la lista después de guardar
                this.cargarLista();
            },
            error: (err) => {
                this.registrationStatus.set('error');
                console.error('❌ Error en el registro:', err);
            }
        });
    }


    /**
     * Método auxiliar para actualizar el signal de la lista
     */
    private cargarLista() {
        this.getEnfermeros().subscribe(data => this.nurses.set(data));
    }
}