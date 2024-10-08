import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TecladoComponent } from './teclado/teclado.component'; // Adjust the path as necessary

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TecladoComponent], // Add TecladoComponent here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-calculadora';
}
