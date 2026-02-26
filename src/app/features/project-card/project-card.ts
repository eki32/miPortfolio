import { Component, Input, OnInit, ChangeDetectorRef, inject } from '@angular/core';
import { Project, ProjectService } from '../../core/services/project';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  styles: [`
  :host {
    display: block;
    height: 100%;
    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  :host:hover {
    transform: translateY(-10px) scale(1.02);
    z-index: 10;
  }
`],
  templateUrl: './project-card.html'
})
export class ProjectCardComponent implements OnInit {
  private cdr = inject(ChangeDetectorRef);
  projectService = inject(ProjectService);  // Inyectamos el detector de cambios
  isLoaded = false;

  @Input({ required: true }) project!: Project;

 ngOnInit() {
  // Escalonado suave para evitar que todas las barras arranquen a la vez
  const delay = this.project.featured ? 300 : 600;
  setTimeout(() => {
    this.isLoaded = true;
    this.cdr.markForCheck();
  }, delay);
}
}
