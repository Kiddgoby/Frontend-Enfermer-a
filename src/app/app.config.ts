import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app.routes'; // Asegúrate de que este archivo existe y tiene las rutas

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),      // <--- ESTO arregla el error "No provider found for ActivatedRoute"
    provideHttpClient(withFetch()) // Esto permite que Angular use la API de Symfony
  ]
};