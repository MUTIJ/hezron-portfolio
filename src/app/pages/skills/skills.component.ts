import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {


  skills = [
  'Flutter Dart', 'Java', 'HTML', 'CSS', 'PHP',
  'Angular', 'Spring Boot', 'React', 'MySQL',
  'Git', 'Firebase', 'OOP', 'Android & iOS Dev',
  'System Admin', 'Cloud Computing'
];

}
