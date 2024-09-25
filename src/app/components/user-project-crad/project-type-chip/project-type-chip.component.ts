import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'ds-project-type-chip',
  standalone: true,
  imports: [NgClass],
  templateUrl: './project-type-chip.component.html',
  styleUrl: './project-type-chip.component.scss',
})
export class ProjectTypeChipComponent {
  @Input() projectType: 'web-app' | 'game' | 'default' = 'default';
}
