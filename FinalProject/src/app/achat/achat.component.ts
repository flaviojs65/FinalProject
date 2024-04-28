import {Component, OnInit} from '@angular/core';
import {Vetement} from "../vetments";
import {VetementService} from "../vetement.service";

@Component({
  selector: 'app-achat',
  templateUrl: './achat.component.html',
  styleUrl: './achat.component.css'
})
export class AchatComponent implements  OnInit{




  tabs = [
    { title: 'Chariot', content: 'Contenu du chariot' },
    { title: 'Infos Clients', content: 'Contenu des infos clients' },
    { title: 'Option Livraison', content: 'Contenu des options de livraison' },
    { title: 'Paiement', content: 'Contenu du paiement' }
  ];

  // Définition de l'onglet "Chariot" comme actif au chargement de la page
  activeTab = 0;

  // Données pour les articles devant figurer dans le panier
  itemsInCart:Vetement[] = [];
  constructor(private vetementService: VetementService) {}

  ngOnInit() {
    this.itemsInCart = this.vetementService.getItemsInCart();
  }


  // Fonction pour l'augmentation de la quantité d'un article
  increaseQuantity(item: any) {
    item.quantite++;
  }

  // Fonction de diminution de la quantité d'un article
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

  // Fonction de supprsession de l'article du panier
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
