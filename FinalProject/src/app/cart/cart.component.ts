import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Vetement } from '../vetments';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})


export class CartComponent implements OnInit {


  vetements = this.cartService.getItems();


  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    console.log(this.vetements);
  }


}
