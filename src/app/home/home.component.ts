import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component   } from '@angular/core';
import {  RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [NgClass,NgFor,NgIf,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 
  models = [
    { image: 'classic.jpg', title: 'Modèle Classique' },
    { image: 'moderne.jpg', title: 'Modèle Moderne' },
    { image: 'creativee.jpg', title: 'Modèle Créatif' }
  ];
  selectedImage: string | null = null; // Pour stocker l'URL de l'image sélectionnée

  // Méthode pour afficher l'image en grand
  viewImage(image: string) {
    this.selectedImage = image;
    console.log('Afficher l\'image:', image);
  }
  
  // Méthode pour fermer l'image agrandie
  closeImage() {
    this.selectedImage = null;
  }
  // Données pour la FAQ
  faqs = [
    { question: 'Comment puis-je créer mon CV ?', answer: 'Il suffit de remplir les informations demandées et choisir un modèle.', open: false },
    { question: 'Puis-je enregistrer mon CV en PDF ?', answer: 'Oui, vous pouvez télécharger votre CV au format PDF.', open: false },
    { question: 'Est-ce que le service est gratuit ?', answer: 'Oui, nous offrons une version gratuite pour créer votre CV.', open: false },
  ];

  // Données pour la lightbox
  lightboxImage: string = '';
  isLightboxOpen: boolean = false;

  // Dupliquer les modèles pour l'effet de carrousel infini
  duplicatedModels: any[] = [];

  constructor() {
    this.duplicatedModels = [...this.models, ...this.models];
  }

  // Ouvrir la lightbox
  openLightbox(image: string) {
    this.lightboxImage = image;
    this.isLightboxOpen = true;
  }

  // Fermer la lightbox
  closeLightbox() {
    this.isLightboxOpen = false;
  }

  // Basculer l'état d'une FAQ
  toggleFAQ(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  } 
 
  
}