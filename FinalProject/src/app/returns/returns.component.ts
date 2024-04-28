import { Component } from '@angular/core';

@Component({
  selector: 'app-returns',
  templateUrl: './returns.component.html',
  styleUrl: './returns.component.css'
})

export class ReturnsComponent {
  returnsInfos = [
    {
      question: '30-Day Returns',
      answer: 'You can return any item for a full refund within 30 days of purchase if you are not satisfied.',
      icon: 'fas fa-undo-alt'
    },
    {
      question: 'Free Returns',
      answer: 'We cover the return shipping cost. Just use the shipping label provided, and send it back.',
      icon: 'fas fa-shipping-fast'
    },
    {
      question: 'Refund Processing',
      answer: 'Refunds are processed within 5-7 business days after we receive the returned goods.',
      icon: 'fas fa-wallet'
    }
  ];
}
