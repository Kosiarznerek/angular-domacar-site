import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {merge, Observable, of} from 'rxjs';
import {IRouterData} from '../generals/generals.module.models';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter, map, mergeMap} from 'rxjs/operators';

@Component({
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  // Component data
  @ViewChild('parallaxOverlay', {static: true}) parallaxOverlay: ElementRef;
  public routerData$: Observable<IRouterData>;

  constructor(
    private readonly _router: Router,
    private readonly _activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit() {

    // Get router data
    this.routerData$ = merge(
      of(1),
      this._router.events.pipe(
        filter(v => v instanceof NavigationEnd)
      )
    ).pipe(
      map(() => this._activatedRoute), // Listen to activateRoute
      map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      filter(route => route.outlet === 'primary'),
      mergeMap(route => route.data as Observable<IRouterData>),  // get the data
    );

    // Trigger on scroll
    this.onWindowScroll();

  }

  /**
   * On window scroll
   * @param event Event object
   */
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event?: Event): void {

    const nativeElement: HTMLElement = this.parallaxOverlay.nativeElement;
    const translate: number = this._rescale(window.scrollY, 0, nativeElement.clientHeight, -35, 30);
    nativeElement.style.transform = `translate3d(0px, ${translate}px, 0px)`;

  }

  /**
   * Rescales number to new range
   * @param num Number to scale
   * @param inMin Input scale min
   * @param inMax Input scale max
   * @param outMin Output scale min
   * @param outMax Output scale max
   */
  private _rescale(num: number, inMin: number, inMax: number, outMin: number, outMax: number): number {

    return (num - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;

  }

}
