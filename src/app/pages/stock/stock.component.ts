import { Component } from '@angular/core';
import { diameterAndNumber } from './posts';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css'],
})
export class StockComponent {
  public readonly posts: diameterAndNumber[] = [
    { diameter: 80, number: 90 },
    { diameter: 100, number: 60 },
    { diameter: 120, number: 42 },
    { diameter: 140, number: 28 },
    { diameter: 160, number: 21 },
    { diameter: 180, number: 16 },
    { diameter: 200, number: 12 },
    { diameter: 225, number: 9 },
    { diameter: 250, number: 7 },
  ];
}
