import { Component, signal } from '@angular/core';
import {  NgFor, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-cv',
  imports: [ FormsModule, NgFor, CommonModule],
  templateUrl: './create-cv.component.html',
  styleUrls: ['./create-cv.component.css']
})
export class CreateCvComponent {
  title = 'Création de CV';

  personalInfo = { fullName: '', email: '', phone: '', address: '', linkedin: '' };
  experiences: any[] = [];
  educations: any[] = [];
  skills: any[] = [];

  addExperience() {
    this.experiences.push({ jobTitle: '', company: '', startDate: '', endDate: '', description: '' });
  }

  removeExperience(index: number) {
    this.experiences.splice(index, 1);
  }

  addEducation() {
    this.educations.push({ degree: '', school: '', startDate: '', endDate: '' });
  }

  removeEducation(index: number) {
    this.educations.splice(index, 1);
  }

  addSkill() {
    this.skills.push({ skillName: '', skillLevel: 'Débutant' });
  }

  removeSkill(index: number) {
    this.skills.splice(index, 1);
  }

  generateCV() {
    // Logic for generating the CV (could be saving or sending data to a server)
    console.log('CV généré', { personalInfo: this.personalInfo, experiences: this.experiences, educations: this.educations, skills: this.skills });
  }
}
