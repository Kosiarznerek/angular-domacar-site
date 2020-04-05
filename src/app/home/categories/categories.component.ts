import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {EShopCategory} from '../../cart-store.service.models';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  // Simple getter
  public EShopCategory = EShopCategory;

  // Component data
  @ViewChild('backgroundContainer', {static: true}) backgroundContainer: ElementRef;
  @ViewChild('backgroundOverlay', {static: true}) backgroundOverlay: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  /**
   * On window scroll
   * @param event Event object
   */
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event?: Event): void {

    const nativeElement: HTMLElement = this.backgroundContainer.nativeElement;
    const rect: ClientRect | DOMRect = nativeElement.getBoundingClientRect();
    let screenTop: number = rect.top - window.innerHeight <= 0
      ? Math.abs(rect.top - window.innerHeight)
      : 0;
    screenTop = screenTop > window.innerHeight + rect.height
      ? window.innerHeight + rect.height
      : screenTop;
    const translate: number = this._rescale(screenTop, 0, window.innerHeight + rect.height, -100, 100);
    this.backgroundOverlay.nativeElement.style.transform = `translate3d(0px, ${translate}px, 0px)`;

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
