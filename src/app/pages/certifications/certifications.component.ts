import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent {
  certs = [
    {
      name: 'Bachelor of Science in Computer Science',
      org: 'St Paul’s University',
      duration: 'September 2020 – 2024',
      course: 'University Education'
    },
    {
      name: 'Skills for Improved Jobs and Livelihood',
      org: 'ACWICT',
      course: 'Web Application Development, Digital Entrepreneurship, Teamwork',
      year: 2023
    },
    {
      name: 'Dart Application Development',
      org: 'Microsoft IT Academy',
      course: 'Dart Programming',
      duration: 'May 2023 – August 2023'
    },
    {
      name: 'Postman API Fundamentals Student Expert',
      org: 'Lets Upgrade',
      course: 'Postman API Fundamentals',
      code: 'LUEPAFSOCT12317'
    },
    {
      name: 'DBMS and SQL Zero to Hero',
      org: 'Lets Upgrade',
      course: 'DBMS & MySQL Zero to Hero',
      code: 'LUEDBSQLNOV123204'
    },
    {
      name: 'Frontend Web Development with React.js and JavaScript',
      org: 'DevTown',
      course: 'Frontend Web Development',
      link: 'https://cert.devtown.in/verify/Z2je7Gs'
    },
    {
      name: 'High School Certificate',
      org: 'Burieruri Boys’ High School',
      duration: 'Feb 2015 – Nov 2019'
    },
    {
      name: 'Primary School Certificate',
      org: 'Kaoronene Primary School',
      duration: '2007 – 2015'
    }
  ];
}
