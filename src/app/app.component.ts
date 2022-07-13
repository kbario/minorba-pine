import { Component } from '@angular/core';
import { navItem } from './shared/types/navItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Minorba Pine';

  public readonly navItems: navItem[] = [
    { text: 'About us', route: 'about-us', icon: 'people' },
    { text: 'Stock', route: 'stock', icon: 'shopping_cart' },
    { text: 'Sources', route: 'sources', icon: 'forest' },
    { text: 'Contact us', route: 'contact-us', icon: 'call' },
  ];
  public sideNavOpen = false;

  public readonly handleSideNavEvent = (event: boolean) => {
    this.sideNavOpen = event;
  };
}
