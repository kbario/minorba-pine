import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { takeUntil, tap, map, filter } from 'rxjs/operators';
import { navItem } from '../../types/navItem';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css'],
})
export class TopNavComponent implements OnDestroy {
  @Input()
  navItems!: ReadonlyArray<navItem>;

  @Output()
  sideNavOpenEvent$ = new EventEmitter<boolean>();

  _canceller = new Subject<void>();

  public sideNavOpen = false;

  constructor(private readonly breakPointObserver: BreakpointObserver) {}

  public isPhone$ = this.breakPointObserver.observe('(max-width: 599px)').pipe(
    takeUntil(this._canceller),
    tap(({ matches }) => {
      if (matches === false) this.toggleSideNav(false);
    }),
    map(({ matches }) => !matches)
  );

  public toggleSideNav(value?: boolean) {
    this.sideNavOpen = value ?? !this.sideNavOpen;
    this.sideNavOpenEvent$.emit(this.sideNavOpen);
  }

  ngOnDestroy(): void {
    this._canceller.next();
    this._canceller.complete();
  }
}
