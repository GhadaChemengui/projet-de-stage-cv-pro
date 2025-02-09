import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Importer FormsModule
import { CommonModule } from '@angular/common'; // Importer CommonModule

@Component({
  selector: 'app-contact',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactFormData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitted = false;

  onSubmit() {
    // Logique de soumission de formulaire
    this.isSubmitted = true;
  }

}
