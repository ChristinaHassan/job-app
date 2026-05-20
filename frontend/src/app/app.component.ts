import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeaderComponent } from './components/app-header/app-header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
