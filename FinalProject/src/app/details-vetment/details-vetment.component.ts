import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { Vetement } from '../vetments';

@Component({
  selector: 'app-details-vetment',
  templateUrl: './details-vetment.component.html',
  styleUrls: ['./details-vetment.component.css']
})
export class DetailsVetmentComponent implements OnInit {
  vetement: Vetement | undefined;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private cartService: CartService
  ) { }

  ajouterAuPanier(vetement: Vetement) {
    this.cartService.ajouterAuPanier(vetement);
    window.alert('Votre produit a été ajouté au panier!');
  }

  ngOnInit(): void {
    this.loadVetement();
  }

  loadVetement() {
    const routeParams = this.route.snapshot.paramMap;
    const vetementIdFromRoute = Number(routeParams.get('id'));

    this.http.get<Vetement>(`http://localhost:8082/api/vetements/${vetementIdFromRoute}`)
      .subscribe(vetement => {
        this.vetement = vetement;
      });
  }
}
