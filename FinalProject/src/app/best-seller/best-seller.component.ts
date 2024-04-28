import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Vetement } from '../vetments';



@Component({
  selector: 'app-best-seller',
  templateUrl: './best-seller.component.html',
  styleUrl: './best-seller.component.css'
})
export class BestSellerComponent implements OnInit {

  vetements: Vetement[] = [];
  isHovering: boolean[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.loadVetements();
  }

  loadVetements() {
    this.http.get<Vetement[]>('http://localhost:8082/api/vetements')
      .subscribe(vetements => {
        this.vetements = vetements;
      });

  }
}
