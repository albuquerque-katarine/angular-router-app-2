import { Component } from '@angular/core';
import { ContentAbout } from "../../components/content-about/content-about";

@Component({
  selector: 'app-about',
  imports: [ContentAbout],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
