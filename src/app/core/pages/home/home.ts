import { Component } from '@angular/core';
import { Content } from "../../components/content/content";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Content],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
