import { Component } from '@angular/core';
import { CommonModule,
  NgClass,
  NgStyle,
  UpperCasePipe,
  LowerCasePipe,
  DatePipe,
  CurrencyPipe,
  PercentPipe,} from '@angular/common';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule,
    NgClass,
    NgStyle,
    UpperCasePipe,
    LowerCasePipe,
    DatePipe,
    CurrencyPipe,
    PercentPipe],
  templateUrl: './resume.html',
  styleUrl: './resume.css',
})
export class Resume {
  fullName = 'Lesia Tsyvienkova';
  phone = '+44 7464920702';
  email = 'tsivenkovalesya@gmail.com';
  city = 'London, UK';

  experience = 'Studying Front-End & digital marketing, work in hospitality in London';

  skills = [
    'HTML, CSS',
    'JavaScript, TypeScript',
    'Angular (standalone components)',
    'Digital marketing basics',
    'Work with AI-instruments'
  ];

  photoUrl = 'img/photo-me.jpg';


  today = new Date();          // для DatePipe
  isHighlighted = true;        // для ngClass
  cardPadding = '24px';        // для ngStyle
  nameColor = 'darkblue';      // для ngStyle


  salary = 1800;          // пример для CurrencyPipe
  progress = 0.75;        // пример для PercentPipe


  showEnglish = true;


  languages = ['English', 'Ukrainian', 'Russian'];


  englishLevel: 'A2' | 'B1' | 'B2' = 'B2'}
