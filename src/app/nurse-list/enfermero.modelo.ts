export interface Enfermero {
  name: string;      // Antes 'nombre'
  last_name: string; // Nuevo
  user: string;      // Antes 'email'
  password: string;  // Antes 'pass'
  foto?: string;     // Lo haremos opcional
}