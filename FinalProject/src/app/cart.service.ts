import { Injectable } from '@angular/core';
import { Vetement } from './vetments';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Vetement[] = [];

  ajouterAuPanier(vetement: Vetement) {
    this.items.push(vetement);
  }

  getItems() {
    return this.items;
  }

  viderPanier() {
    this.items = [];
    return this.items;
  }

  constructor() { }
}
