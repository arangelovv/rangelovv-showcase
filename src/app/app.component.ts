import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserInformationComponent } from './components/user-information/user-information.component';
import { UserDescriptionComponent } from './components/user-description/user-description.component';
import { UserProjectCradComponent } from './components/user-project-crad/user-project-crad.component';
import { UserEducationComponent } from './components/user-education/user-education.component';
import { UserEmploymentHistoryComponent } from './components/user-employment-history/user-employment-history.component';
import { UserCertificatesComponent } from './components/user-certificates/user-certificates.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    UserInformationComponent,
    UserDescriptionComponent,
    UserProjectCradComponent,
    UserEducationComponent,
    UserEmploymentHistoryComponent,
    UserCertificatesComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'rangelovv-showcase';
}
