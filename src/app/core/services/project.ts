import { Injectable, signal } from '@angular/core';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  color: string;
  featured: boolean;
  image?: string; // El proyecto que quieras resaltar irá en grande
}

@Injectable({ providedIn: 'root' })
export class ProjectService {

projects = signal<Project[]>([
  {
    id: 'mistery-hunter',
    title: 'Mistery Hunter',
    description: 'Juego cultural de exploración con geolocalización en tiempo real. Desbloquea acertijos de lugares emblemáticos mediante proximidad física y notificaciones activas.',
    tags: ['Geolocation API', 'Leaflet/Google Maps', 'Web Notifications', 'Animations'],
    color: '#38bdf8, #2563eb',
    image: 'FotoMistery.png',
    featured: true // LA ESTRELLA
  },
  {
    id: 'neo-events',
    title: 'NeoEvents',
    description: 'Buscador de eventos basado en la API de Ticketmaster. Geolocalización automática, integración con Google Maps y búsqueda dinámica por ciudades.',
    tags: ['Ticketmaster API', 'External Maps Integration', 'Forms'],
    color: '#818cf8, #38bdf8',
    image: 'FotoNeoEvents.png',
    featured: false
  },
  {
    id: 'convex-app',
    title: 'ConveX',
    description: 'Calculadora especializada en excesos de jornada para el sector alimentación (Bizkaia y DIA). Resolución de lógica laboral compleja.',
    tags: ['Business Logic', 'Legal Specs', 'Data Persistence'],
    color: '#0ea5e9, #6366f1', //
    image: 'FotoConveX.png',
    featured: false
  }
]);
getGradient(colorString: string): string {
    return `linear-gradient(to right, ${colorString})`;
  }
}