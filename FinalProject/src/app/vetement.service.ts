import { Injectable } from '@angular/core';
import {ITEMS_IN_CART} from "./mock-vetement";

@Injectable({
  providedIn: 'root'
})
export class VetementService {

  constructor() { }



  getItemsInCart() {
    return ITEMS_IN_CART;
  }
}
