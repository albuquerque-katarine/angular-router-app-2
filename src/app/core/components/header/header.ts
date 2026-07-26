import { Component, signal } from '@angular/core';
import { Navbar } from "../navbar/navbar";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [Navbar],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  title = signal<string>('Rotas no Angular');
}
