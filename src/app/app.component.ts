import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserInformationComponent } from './components/user-information/user-information.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserInformationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'rangelovv-showcase';
}
