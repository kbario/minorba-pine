import { Component } from '@angular/core';
import { posts } from './posts';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css'],
})
export class StockComponent {
  public readonly posts: posts[] = [
    { diameter: 80, length: 1.8, price: 200, number: 90 },
    { diameter: 100, length: 1.8, price: 200, number: 60 },
    { diameter: 120, length: 1.8, price: 200, number: 42 },
    { diameter: 140, length: 1.8, price: 200, number: 28 },
    { diameter: 160, length: 1.8, price: 200, number: 21 },
    { diameter: 180, length: 1.8, price: 200, number: 16 },
    { diameter: 200, length: 1.8, price: 200, number: 12 },
    { diameter: 225, length: 1.8, price: 200, number: 9 },
    { diameter: 250, length: 1.8, price: 200, number: 7 },
    { diameter: 80, length: 1.8, price: 200, number: 90 },
    { diameter: 80, length: 1.8, price: 200, number: 90 },
    { diameter: 80, length: 1.8, price: 200, number: 90 },
    { diameter: 80, length: 1.8, price: 200, number: 90 },
    { diameter: 80, length: 1.8, price: 200, number: 90 },
    { diameter: 80, length: 1.8, price: 200, number: 90 },
    { diameter: 80, length: 1.8, price: 200, number: 90 },
    { diameter: 80, length: 1.8, price: 200, number: 90 },
    { diameter: 80, length: 1.8, price: 200, number: 90 },
    { diameter: 80, length: 1.8, price: 200, number: 90 },
  ];
}
