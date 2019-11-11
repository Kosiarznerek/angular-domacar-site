import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ResizeSensor} from 'css-element-queries';
import {merge, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // Navbar height
  public navbarHeight$: Observable<number>;
  @ViewChild('appNavbar', {static: true}) appNavbar: ElementRef;

  // Footer height
  public footerHeight$: Observable<number>;
  @ViewChild('appFooter', {static: true}) appFooter: ElementRef;

  // Footer is fixed
  public footerIsFixed$: Observable<boolean>;

  ngOnInit(): void {

    // Create navbar height observable
    this.navbarHeight$ = new Observable<number>(observer => {
      const navbarElement: HTMLElement = this.appNavbar.nativeElement;
      const resizeSensor: ResizeSensor = new ResizeSensor(navbarElement, () => {
        observer.next(navbarElement.clientHeight);
      });
      return () => resizeSensor.detach();
    });

    // Create footer height observable
    this.footerHeight$ = new Observable<number>(observer => {
      const footerElement: HTMLElement = this.appFooter.nativeElement;
      const resizeSensor: ResizeSensor = new ResizeSensor(footerElement, () => {
        observer.next(footerElement.clientHeight);
      });
      return () => resizeSensor.detach();
    });

    // Create window resize observable
    const windowResize$: Observable<void> = new Observable<void>(observer => {
      const listener = () => observer.next();
      window.addEventListener('resize', listener);
      return () => window.removeEventListener('resize', listener);
    });

    // Create is footer fixed
    this.footerIsFixed$ = merge(
      this.navbarHeight$,
      this.footerHeight$,
      windowResize$,
    ).pipe(
      map((v): [number, number, number] => [ // map to elements height
        (this.appNavbar.nativeElement as HTMLElement).clientHeight,
        (this.appFooter.nativeElement as HTMLElement).clientHeight,
        window.innerHeight
      ]),
      map(([navbarHeight, footerHeight, windowHeight]) => navbarHeight + footerHeight < windowHeight)
    );

  }

}
