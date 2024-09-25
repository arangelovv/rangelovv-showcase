import { Component } from '@angular/core';
import { SocialButtonComponent } from './social-button/social-button.component';

@Component({
  selector: 'ds-user-information',
  standalone: true,
  imports: [SocialButtonComponent],
  templateUrl: './user-information.component.html',
  styleUrl: './user-information.component.scss',
})
export class UserInformationComponent {}
