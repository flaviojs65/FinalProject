import { Component } from '@angular/core';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrl: './shipping.component.css'
})

export class ShippingComponent {
  shippingInfos = [
    {
      question: 'Domestic Shipping Rates',
      answer: 'Standard shipping starts at $5.99 for orders within the US.',
      icon: 'fas fa-truck'
    },
    {
      question: 'Shipping Times',
      answer: 'Orders are processed in 1-2 business days with delivery in 3-5 days.',
      icon: 'fas fa-clock'
    },
    {
      question: 'International Shipping',
      answer: 'We ship internationally. Rates and times vary by destination.',
      icon: 'fas fa-globe-americas'
    }
  ];
}