import { Component } from '@angular/core';
import { Resume } from './resume/resume';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Resume],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App { }
