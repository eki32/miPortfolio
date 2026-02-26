import { Component, inject } from '@angular/core';
import { ProjectService } from '../../core/services/project';
import { ProjectCardComponent } from '../project-card/project-card';


@Component({
  selector: 'app-project-grid',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './project-grid.html'
})
export class ProjectGridComponent {
  public projectService = inject(ProjectService);
}