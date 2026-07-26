import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-content-about',
  imports: [],
  templateUrl: './content-about.html',
  styleUrl: './content-about.css',
})
export class ContentAbout {

  title = signal<string>('Sobre o projeto');
}
