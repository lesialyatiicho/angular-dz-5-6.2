import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume',
  standalone: true,
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
}
