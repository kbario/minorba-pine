import { navItem } from '../../types/navItem';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit {
  constructor() {}

  @Input()
  navItems!: ReadonlyArray<navItem>;

  @Input() sideNavOpen: boolean = false;

  ngOnInit(): void {}
}
