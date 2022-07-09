import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { takeUntil, tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css'],
})
export class TopNavComponent implements OnInit, OnDestroy {
  _canceller = new Subject<void>();
  public readonly menuItems = ['About us', 'Stock', 'Sources', 'Contact us'];

  constructor(private readonly breakPointObserver: BreakpointObserver) {}

  ngOnInit(): void {}

  public isPhone$ = this.breakPointObserver.observe('(max-width: 600px)').pipe(
    takeUntil(this._canceller),
    map(({ matches }) => !matches)
  );

  ngOnDestroy(): void {
    this._canceller.next();
    this._canceller.complete();
  }
}
