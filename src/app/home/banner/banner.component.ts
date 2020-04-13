import {Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {interval, Subject} from 'rxjs';
import {delay, map, takeUntil, tap} from 'rxjs/operators';
import {ScrollToService} from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit, OnDestroy {

  // Component data
  @ViewChild('backgroundOverlay', {static: true}) backgroundOverlay: ElementRef;
  @ViewChild('contentWrapper', {static: true}) contentWrapper: ElementRef;
  private readonly _ngOnDestroy$: Subject<void>;

  constructor(
    private readonly _scrollToService: ScrollToService
  ) {

    // Create ngDestroy
    this._ngOnDestroy$ = new Subject<void>();

  }

  ngOnInit(): void {

    // Trigger on scroll
    this.onWindowScroll();

    // Slider
    interval(5_000).pipe(
      takeUntil(this._ngOnDestroy$),
      map(v => this.backgroundOverlay.nativeElement as HTMLElement),
      map(v => v.getElementsByTagName('img')),
      map(v => v.item(v.length - 1)),
      tap(v => v.style.opacity = '0'),
      delay(500) // wait for css transition
    ).subscribe((element: HTMLElement) => {
      element.style.opacity = '1';
      element.parentElement.insertBefore(element, element.parentElement.children[0]);
    });

  }

  ngOnDestroy(): void {

    this._ngOnDestroy$.next();

  }

  /**
   * On window scroll
   * @param event Event object
   */
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event?: Event): void {

    const nativeElement: HTMLElement = this.backgroundOverlay.nativeElement;
    const translate: number = this._rescale(window.scrollY, 0, nativeElement.clientHeight, -100, 100);
    nativeElement.style.transform = `translate3d(0px, ${translate}px, 0px)`;

  }

  /**
   * Scroll after component
   */
  public scrollDown(): void {

    const element: HTMLElement = this.contentWrapper.nativeElement;
    const scrollY: number = element.clientHeight;
    this._scrollToService.scrollTo({
      offset: scrollY - window.scrollY,
      easing: 'easeInOutQuad'
    });

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
