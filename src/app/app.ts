import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectGridComponent } from "./features/project-grid/project-grid";
import { Navbar } from "./shared/navbar/navbar";
import { ProjectService } from "./core/services/project";
import { Footer } from "./shared/footer/footer";
import { BackgroundParticlesComponent } from "./shared/backgroud-particles/backgroud-particles";
import { ContactComponent } from "./features/contact/contact";
import { About } from "./features/about/about"; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProjectGridComponent, Navbar, Footer, BackgroundParticlesComponent, ContactComponent, About],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  // 1. Inyectamos el servicio de forma profesional
  public projectService = inject(ProjectService);
  
  // 2. Mantenemos tu señal de título
  protected readonly title = signal('Ekaitz Aguilar | Frontend Developer');
}