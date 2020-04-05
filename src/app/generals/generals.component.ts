import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {bufferCount, filter, map, shareReplay, switchMap} from 'rxjs/operators';
import {merge, Observable, of} from 'rxjs';
import {IBreadcrumb} from './generals.component.models';

@Component({
  templateUrl: './generals.component.html',
  styleUrls: ['./generals.component.scss']
})
export class GeneralsComponent implements OnInit {

  // Component data
  @ViewChild('parallaxOverlay', {static: true}) parallaxOverlay: ElementRef;
  public breadcrumb$: Observable<IBreadcrumb>;

  constructor(
    private readonly _router: Router,
    private readonly _activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit() {

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
      map(path => this._getBreadcrumbData(path)),
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

  /**
   * Gets breadcrumbs data
   * @param subRouteName Route name for breadcrumb
   */
  private _getBreadcrumbData(subRouteName: string): IBreadcrumb {

    switch (subRouteName) {
      case 'about':
        return {
          displayName: 'O nas',
          parallaxSource: '/assets/images/parallax/parallax1.jpg'
        };
      case 'contact':
        return {
          displayName: 'Kontakt',
          parallaxSource: '/assets/images/parallax/parallax2.jpg'
        };
      case 'payments':
        return {
          displayName: 'Płatności',
          parallaxSource: '/assets/images/parallax/parallax3.jpg'
        };
      case 'shipments':
        return {
          displayName: 'Dostawa',
          parallaxSource: '/assets/images/parallax/parallax4.jpg'
        };
      case 'returns-complaints':
        return {
          displayName: 'Zwroty i reklamacje',
          parallaxSource: '/assets/images/parallax/parallax1.jpg'
        };
      case 'privacy-policy':
        return {
          displayName: 'Polityka prywatności',
          parallaxSource: '/assets/images/parallax/parallax2.jpg'
        };
    }

  }

}
