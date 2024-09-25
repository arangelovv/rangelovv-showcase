import { Component, Input } from '@angular/core';
import { RepoButtonComponent } from './repo-button/repo-button.component';

@Component({
  selector: 'ds-user-project-crad',
  standalone: true,
  imports: [RepoButtonComponent],
  templateUrl: './user-project-crad.component.html',
  styleUrl: './user-project-crad.component.scss',
})
export class UserProjectCradComponent {
  @Input() projectName: string = 'default';
  @Input() projectLink: string = 'default';
  @Input() repoLink: string | undefined = undefined;
}
