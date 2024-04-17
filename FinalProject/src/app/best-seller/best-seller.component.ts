import { Component, OnInit } from '@angular/core';
import { Vetement, vetements } from '../vetments';



@Component({
  selector: 'app-best-seller',
  templateUrl: './best-seller.component.html',
  styleUrl: './best-seller.component.css'
})
export class BestSellerComponent implements OnInit {

  vetements: Vetement[] = [...vetements];
  isHovering: boolean[] = [];
  constructor() { }
  ngOnInit(): void {
    vetements.forEach((vetement, i) => {
      this.isHovering[i] = false;
    });
  }

}
