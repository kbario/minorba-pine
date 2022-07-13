import { Component, Input } from '@angular/core';
import { navItem } from '../../types/navItem';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.css'],
})
export class NavItemComponent {
  @Input()
  navItem!: navItem;

  @Input()
  icons: boolean = false;
}
