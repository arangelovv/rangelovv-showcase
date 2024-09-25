import { Component, Input } from '@angular/core';

@Component({
  selector: 'ds-social-button',
  standalone: true,
  imports: [],
  templateUrl: './social-button.component.html',
  styleUrl: './social-button.component.scss',
})
export class SocialButtonComponent {
  @Input() socialMedia: 'Github' | 'LinkedIn' | 'default' = 'default';
  @Input() mediaLink: string = 'default';
}
