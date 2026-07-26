import { Component } from '@angular/core';
import { Content } from "../../components/content/content";
import { Header } from "../../components/header/header";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Content, Header],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
