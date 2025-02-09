import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-cvs',
  imports: [NgFor,CommonModule],
  templateUrl: './my-cvs.component.html',
  styleUrl: './my-cvs.component.css'
})
export class MyCvsComponent {
  cvList = [
    { id: 1, title: 'CV Développeur Web', lastModified: new Date(), imageUrl: 'dev.jpeg' },
    { id: 2, title: 'CV Data Scientist', lastModified: new Date(), imageUrl: 'data-scientist-resume-example.png' },
    { id: 3, title: 'CV Designer Graphique', lastModified: new Date(), imageUrl: 'gmm.png' },
  ];

  selectedImageUrl: string | null = null; // Pour stocker l'URL de l'image sélectionnée

  // Méthode pour afficher l'image en grand
  viewImage(imageUrl: string) {
    this.selectedImageUrl = imageUrl;
    console.log('Afficher l\'image:', imageUrl);
  }

  // Méthode pour fermer l'image agrandie
  closeImage() {
    this.selectedImageUrl = null;
  }

  editCV(cv: any) {
    console.log('Modifier le CV:', cv);
  }

  downloadPDF(cv: any) {
    console.log('Télécharger le CV PDF:', cv);
  }

  shareCV(cv: any) {
    console.log('Partager le CV:', cv);
  }

  deleteCV(cvId: number) {
    this.cvList = this.cvList.filter(cv => cv.id !== cvId);
    console.log('CV supprimé:', cvId);
  }

}