import { Component } from '@angular/core';
import { VetementService } from '../vetement.service';
import { Vetement } from '../vetments';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent {

  searchTerm: string = '';
  vetements: Vetement[] = [];

  currentImage: string[] = [];
  imageLoaded: boolean[] = [];
  isHovering: boolean[] = [];

  constructor(private vetementService: VetementService) { }

  search(): void {
    if (this.searchTerm.length > 2) {
      this.vetementService.rechercherVetement(this.searchTerm).subscribe({
        next: (vetements) => {
          this.vetements = vetements;
          this.initializeDisplayProperties(vetements);
        },
        error: (error) => console.error('Error fetching vetements', error)
      });
    }
  }

  private initializeDisplayProperties(vetements: Vetement[]): void {
    this.currentImage = vetements.map(v => v.images[0]);
    this.imageLoaded = vetements.map(() => false);
    this.isHovering = vetements.map(() => false);
  }

}
