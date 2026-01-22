import { Component, OnInit, inject, signal } from '@angular/core';
import { NurseService } from '../service/nurse.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})

export class Profile implements OnInit {
  private nurseService = inject(NurseService);
  private router = inject(Router);

  public nurseData = signal<any>(null);

  public showDeleteModal = signal<boolean>(false);
  public isDeleting = signal<boolean>(false);

  ngOnInit() {
    this.loadProfile();
  }

  loadProfile() {
    this.nurseService.getNurseById(1).subscribe({
      next: (data) => this.nurseData.set(data),
      error: (err) => console.error(err)
    });
  }

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


}