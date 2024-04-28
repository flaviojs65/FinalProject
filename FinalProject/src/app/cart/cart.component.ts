// compra.component.ts
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Vetement } from "../vetments";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  tabs = [
    { title: 'Chariot', content: 'Contenu du chariot' },
    { title: 'Infos Clients', content: 'Contenu des infos clients' },
    { title: 'Option Livraison', content: 'Contenu des options de livraison' },
    { title: 'Paiement', content: 'Contenu du paiement' }
  ];

  activeTab = 0;

  itemsInCart: Vetement[] = [];

  constructor(private vetementService: CartService, private cartService: CartService) { }

  ngOnInit() {
    this.itemsInCart = this.vetementService.getItems();
  }

  increaseQuantity(item: any) {
    item.quantite++;
  }

  decreaseQuantity(item: any) {
    if (item.quantite > 1) {
      item.quantite--;
    }
  }

  activateTab(index: number) {
    this.activeTab = index;
  }

  prevTab() {
    if (this.activeTab > 0) {
      this.activeTab--;
    }
  }

  nextTab() {
    if (this.activeTab < this.tabs.length - 1) {
      this.activeTab++;
    }
  }

  removeItemFromCart(item: any) {
    const index = this.itemsInCart.indexOf(item);
    if (index !== -1) {
      this.itemsInCart.splice(index, 1);
    }
  }

  calculateSubtotal(): number {
    let subtotal = 0;
    for (const item of this.itemsInCart) {
      subtotal += item.quantite * item.prix;
    }
    return subtotal;
  }

  calculateTax(): number {
    // Taxe de 20% (0.20)
    return this.calculateSubtotal() * 0.20;
  }

  calculateTotal(): number {
    return this.calculateSubtotal() + this.calculateTax();
  }

}
