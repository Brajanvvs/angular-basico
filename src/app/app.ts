import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./components/home/home";
import { Aside } from "./components/aside/aside";
import { CicloDeVida } from "./components/ciclo-de-vida/ciclo-de-vida";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Aside, CicloDeVida],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mercadolibre');
}
