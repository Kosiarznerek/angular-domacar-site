import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ResizeSensor} from 'css-element-queries';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // Component data
  public footerHeight$: Observable<number>;
  @ViewChild('appFooter', {static: true}) appFooter: ElementRef;

  ngOnInit(): void {

    // Create footer height observable
    this.footerHeight$ = new Observable<number>(observer => {
      const footerElement: HTMLElement = this.appFooter.nativeElement;
      const resizeSensor: ResizeSensor = new ResizeSensor(footerElement, () => {
        observer.next(footerElement.clientHeight);
      });
      return () => resizeSensor.detach();
    });

  }

}
