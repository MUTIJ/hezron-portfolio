import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Health App (Java)',
      description: 'This app links patients and doctors. Built using Java with version control for patient-doctor communication.',
      skills: ['Java', 'Version Control']
    },
    {
      title: 'Credit Scoring System',
      description: 'Multi-tenant credit scoring system implemented based on client scorecards. Handles scoring logic dynamically.',
      skills: ['Angular', 'Post', 'MySQL', 'Java', 'Spring Boot']
    },
    {
      title: 'Electronic Document Management System (EDMS)',
      description: `A permission-based document management system featuring automation, OCR (Optical Character Recognition), group/category setup, and document approval workflows.`,
      skills: ['Spring Boot', 'Angular', 'Oracle Database']
    },
    {
      title: 'M-Kanja',
      description: 'Sacco-to-Sacco transfer system with USSD, mobile app, and web portal. Participated in backend implementation.',
      skills: ['Angular', 'Spring Boot', 'Java', 'PostgreSQL']
    },
    {
      title: 'PRSP',
      description: 'A messaging system that allows scheduled, single, or batch SMS sending. Includes exposed API endpoints for batch messaging.',
      skills: ['JavaServer Pages (JSP)', 'JavaScript', 'Spring Boot', 'MySQL', 'PostgreSQL', 'Oracle Database']
    },
    {
      title: 'Spotcash Mobile Banking',
      description: 'Handled security fixes and implemented a Spring Boot backend for request handling and feature updates based on user needs.',
      skills: ['Spring Boot', 'PHP', 'Oracle Database', 'PostgreSQL', 'MySQL']
    },
    {
      title: 'USSD Journey Builder',
      description: 'Built custom USSD flows for SACCOs using JSON-powered forms.',
      link: 'https://github.com/MUTIJ',
      skills: ['JSON', 'USSD', 'Java']
    },
    {
      title: 'Mobile App Optimization',
      description: 'Optimized mobile applications using Formly dynamic forms to support various client use cases.',
      skills: ['Formly', 'Java', 'Flutter']
    }
  ];
}
