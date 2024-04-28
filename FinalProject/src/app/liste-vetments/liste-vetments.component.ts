import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Vetement } from '../vetments';


@Component({
  selector: 'app-liste-vetments',
  templateUrl: './liste-vetments.component.html',
  styleUrl: './liste-vetments.component.css'
})


export class ListeVetmentsComponent implements OnInit {

  @Input() Showfooter: boolean = true;
  @Input() bestSellers: boolean = true;
  @Input() ShowMenu: boolean = true;
  @Input() ShowHeader: boolean = true;

  vetements: Vetement[] = [];

  currentImage: string[] = [];
  imageLoaded: boolean[] = [];
  isHovering: boolean[] = [];


  NeuxVetements: Vetement[] = [];

  currentImageNeuxVetements: string[] = [];
  isHoveringNeuxVetements: boolean[] = [];
  imageLoadedNeuxVetements: boolean[] = [];



  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadVetements();
  }

  loadVetements() {
    this.http.get<Vetement[]>('http://localhost:8082/api/vetements')
      .subscribe(vetements => {
        this.vetements = vetements;
        this.vetements.forEach((vetement, i) => {
          this.currentImage[i] = vetement.images[0];
          this.isHovering[i] = false;
          this.imageLoaded[i] = false;
          console.log(vetements[i]);
          if (vetement.newItem) {
            this.NeuxVetements.push(vetement);
            this.currentImageNeuxVetements.push(vetement.images[0]);
            this.isHoveringNeuxVetements.push(false);
            this.imageLoadedNeuxVetements.push(false);
          }
        });
      });

  }


}
