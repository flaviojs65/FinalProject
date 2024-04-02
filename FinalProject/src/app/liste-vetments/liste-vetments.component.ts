import { Component, OnInit } from '@angular/core';
import { Vetement, vetements } from '../vetments';

@Component({
  selector: 'app-liste-vetments',
  templateUrl: './liste-vetments.component.html',
  styleUrl: './liste-vetments.component.css'
})


export class ListeVetmentsComponent implements OnInit {

  isHovering: boolean[] = [];
  vetments: Vetement[] = [...vetements];
  currentImage: string[] = [];

  ngOnInit(): void {
    vetements.forEach((vetement, i) => {
      this.currentImage[i] = vetement.images[0];
      this.isHovering[i] = false;
    }
    );
  }


} 
