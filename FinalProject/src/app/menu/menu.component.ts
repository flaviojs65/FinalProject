import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  isScrolled: boolean = false;

  @Input() isHome: boolean = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const yOffset = window.pageYOffset;
    this.isScrolled = yOffset > 70;
  }

}
