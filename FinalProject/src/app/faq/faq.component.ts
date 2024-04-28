import { Component } from '@angular/core';

interface Faq {
  question: string;
  answer: string;
  isActive: boolean;
}

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  faqs: Faq[] = [
    {
      question: 'What is your return policy?',
      answer: 'All purchases can be returned within 30 days for a full refund, no questions asked. Ensure items are in their original condition.',
      isActive: false
    },
    {
      question: 'How does the affiliate program work?',
      answer: 'Join our affiliate program, promote our products, and earn a commission on each sale made through your referral link.',
      isActive: false
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Yes, we ship globally. Shipping costs will vary based on your location and the size of your order.',
      isActive: false
    }
  ];

  toggleFAQ(faq: Faq): void {
    faq.isActive = !faq.isActive;
  }
}