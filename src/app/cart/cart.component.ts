import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {merge, Observable, of} from 'rxjs';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {bufferCount, filter, map, shareReplay, switchMap} from 'rxjs/operators';
import {IBreadcrumb} from './cart.component.models';

@Component({
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  // Component data
  @ViewChild('parallaxOverlay', {static: true}) parallaxOverlay: ElementRef;
  public breadcrumb$: Observable<IBreadcrumb>;

  constructor(
    private readonly _router: Router,
    private readonly _activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {

    // Get sub route path
    const subRoutePath$: Observable<string> = merge(
      of(1),
      this._router.events.pipe(
        filter(v => v instanceof NavigationEnd)
      )
    ).pipe(
      switchMap(() => this._activatedRoute.pathFromRoot),
      switchMap(v => v.url),
      bufferCount(this._activatedRoute.pathFromRoot.length),
      map(v => v.map(u => u.join('/')).join('/')),
      map(pathFromRoot => this._router.url.split(pathFromRoot)[1])
    );

    // Getting breadcrumb data
    this.breadcrumb$ = subRoutePath$.pipe(
      map(path => CartComponent._GetBreadcrumbData(path)),
      shareReplay()
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
    const translate: number = CartComponent._Rescale(window.scrollY, 0, nativeElement.clientHeight, -35, 30);
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
  private static _Rescale(num: number, inMin: number, inMax: number, outMin: number, outMax: number): number {

    return (num - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;

  }

  /**
   * Gets breadcrumbs data
   * @param subRouteName Route name for breadcrumb
   */
  private static _GetBreadcrumbData(subRouteName: string): IBreadcrumb {

    switch (subRouteName) {
      case 'preview':
        return {
          displayName: 'Podgląd',
          parallaxSource: 'assets/images/parallax/parallax1.jpg'
        };
      case 'checkout':
        return {
          displayName: 'Formularz wysyłkowy',
          parallaxSource: 'assets/images/parallax/parallax2.jpg'
        };
    }

  }

}
