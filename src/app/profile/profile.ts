import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NurseService } from '../service/nurse.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})

export class Profile implements OnInit {
  private nurseService = inject(NurseService);
  private router = inject(Router);

  public nurseData = signal<any>(null);

  // Modales y estados de carga
  public showDeleteModal = signal<boolean>(false);
  public showEditModal = signal<boolean>(false);
  public isDeleting = signal<boolean>(false);
  public isUpdating = signal<boolean>(false);

  //Objeto temporal para el formulario de edición
  public editForm = { name: '', user: '', password: '' };

  ngOnInit() {
    this.loadProfile();
  }

  loadProfile() {
    this.nurseService.getNurseById(1).subscribe({
      next: (data) => this.nurseData.set(data),
      error: (err) => console.error(err)
    });
  }

  // --- LÓGICA DE ELIMINACIÓN ---
  openDeleteModal() {
    this.showDeleteModal.set(true);
  }

  closeDeleteModal() {
    if (!this.isDeleting()) {
      this.showDeleteModal.set(false);
    }
  }

  confirmDelete() {
    const user = this.nurseData();
    if (!user) return;

    this.isDeleting.set(true);

    this.nurseService.deleteNurse(user.id).subscribe({
      next: () => {

        setTimeout(() => {
          this.showDeleteModal.set(false);
          this.router.navigate(['/registration']);
        }, 1000);
      },
      error: (err) => {
        this.isDeleting.set(false);
        console.error(err);
      }
    });
  }

  // --- LÓGICA DE EDICIÓN ---
  openEditModal() {
    const currentData = this.nurseData();
    this.editForm = { name: currentData.name, user: currentData.user, password: currentData.password };
    this.showEditModal.set(true);
  }

  closeEditModal() {
    if (!this.isUpdating()) {
      this.showEditModal.set(false);
    }
  }

  confirmUpdate() {
    this.isUpdating.set(true);
    this.nurseService.updateNurse(this.nurseData().id, this.editForm).subscribe({
      next: (response) => {
        this.nurseData.set(response.user);
        this.isUpdating.set(false);
        this.showEditModal.set(false);
      },
      error: (err) => {
        this.isUpdating.set(false);
        alert('Error al actualizar');
      }
    });
  }
}