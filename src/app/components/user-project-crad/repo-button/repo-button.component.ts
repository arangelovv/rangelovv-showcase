import { Component, Input } from '@angular/core';

@Component({
  selector: 'ds-repo-button',
  standalone: true,
  imports: [],
  templateUrl: './repo-button.component.html',
  styleUrl: './repo-button.component.scss',
})
export class RepoButtonComponent {
  @Input() mediaLink: string = 'default';
}
