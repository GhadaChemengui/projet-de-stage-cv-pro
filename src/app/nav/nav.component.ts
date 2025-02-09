import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
selector: 'app-nav',
imports: [CommonModule, RouterModule],
templateUrl: './nav.component.html',
styleUrl: './nav.component.css'
})
export class NavComponent {
  isScrolled = false;
  isMenuOpen = false;
  dropdownOpen = false;
  isSearchOpen = false;

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  @HostListener('window:keydown.escape')
  onEscKey() {
    this.closeSearch();
    this.isMenuOpen = false;
    this.dropdownOpen = false;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      this.dropdownOpen = false;
      this.closeSearch();
    }
  }

  toggleSearch() {
    this.isSearchOpen = !this.isSearchOpen;
    if (this.isSearchOpen) {
      this.isMenuOpen = false;
      this.dropdownOpen = false;
    }
  }

  toggleProfile() {
    // Implémentez la logique du profil ici
  }

  closeSearch() {
    this.isSearchOpen = false;
  }
}
