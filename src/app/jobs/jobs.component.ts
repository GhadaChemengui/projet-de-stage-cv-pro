import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [FormsModule, CommonModule, DatePipe],
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent {
  // Signals pour la réactivité
  public jobs = signal([
    {
      id: 1,
      title: "Développeur Frontend",
      company: "Tech Solutions",
      location: "Paris",
      type: "CDI",
      publishedAt: "2024-02-01",
      description: "Nous recherchons un développeur frontend expérimenté...",
      requirements: "3+ ans d'expérience en React, TypeScript...",
      applyInfo: "Envoyez votre CV à careers@techsolutions.com"
    },
    {
      id: 2,
      title: "UX Designer",
      company: "Digital Agency",
      location: "Lyon",
      type: "CDD",
      publishedAt: "2024-02-03",
      description: "Rejoignez notre équipe de design...",
      requirements: "Maîtrise de Figma, expérience en design système...",
      applyInfo: "Postulez sur notre site carrière"
    }
  ]);

  selectedJob = '';
  selectedLocation = '';
  selectedType = '';
  searchText = '';
  
  selectedJobDetail = signal<{
    id: number;
    title: string;
    company: string;
    location: string;
    type: string;
    publishedAt: string;
    description: string;
    requirements: string;
    applyInfo: string;
  } | null>(null);

  setSelectedJob(job: any): void {
    this.selectedJobDetail.set(job);
  }

  applyToJob(): void {
    const job = this.selectedJobDetail();
    if (job) {
      console.log(`Candidature envoyée pour le poste: ${job.title}`);
    }
  }
}