import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'ds-project-technology-chip',
  standalone: true,
  imports: [NgClass],
  templateUrl: './project-technology-chip.component.html',
  styleUrl: './project-technology-chip.component.scss',
})
export class ProjectTechnologyChipComponent {
  @Input() tech:
    | 'Angular'
    | 'CSS'
    | 'Firebase'
    | 'Tailwind'
    | 'APIs'
    | 'default' = 'default';
}
