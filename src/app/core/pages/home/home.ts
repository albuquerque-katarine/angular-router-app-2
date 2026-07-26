import { Component } from '@angular/core';
import { Content } from "../../components/content/content";
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Content, Header, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
