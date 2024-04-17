import { Component, OnInit, Input } from '@angular/core';
import { Vetement, vetements } from '../vetments';
import { BlobOptions } from 'buffer';

@Component({
  selector: 'app-liste-vetments',
  templateUrl: './liste-vetments.component.html',
  styleUrl: './liste-vetments.component.css'
})


export class ListeVetmentsComponent implements OnInit {

  @Input() Showfooter: boolean = true;
  @Input() bestSellers: boolean = true;
  @Input() ShowMenu: boolean = true;

  isHovering: boolean[] = [];
  vetements: Vetement[] = [...vetements];
  NeuxVetements: Vetement[] = [];
  currentImage: string[] = [];
  currentImageNeuxVetements: string[] = [];
  imageLoaded: boolean[] = [];
  isHoveringNeuxVetements: boolean[] = [];
  imageLoadedNeuxVetements: boolean[] = [];


  ngOnInit(): void {

    this.vetements.forEach((vetement, i) => {
      this.currentImage[i] = vetement.images[0];
      this.isHovering[i] = false;
      this.imageLoaded[i] = false;
      if (vetement.newItem) {
        this.NeuxVetements.push(vetement);
      }
    });

    this.NeuxVetements.forEach((vetement, i) => {
      this.currentImageNeuxVetements[i] = vetement.images[0];
      this.isHoveringNeuxVetements[i] = false;
      this.imageLoadedNeuxVetements[i] = false;

    });

    console.log(this.vetements[0]);
    console.log(this.vetements[1]);

  }




} 
